const esClient = require("../config/elasticsearch")

const initIndex = async () => {
  try {
    const exists = await esClient.indices.exists({ index: "products" })
    if (exists) return

    await esClient.indices.create({
      index: "products",
      body: {
        settings: {
          analysis: {
            analyzer: {
              autocomplete: {
                tokenizer: "autocomplete",
                filter: ["lowercase"]
              },
              autocomplete_search: {
                tokenizer: "lowercase"
              }
            },
            tokenizer: {
              autocomplete: {
                type: "edge_ngram",
                min_gram: 2,
                max_gram: 10,
                token_chars: ["letter", "digit"]
              }
            }
          }
        },
        mappings: {
          properties: {
            title: {
              type: "text",
              analyzer: "autocomplete",
              search_analyzer: "autocomplete_search"
            },
            description: { type: "text" },
            price: { type: "double" },
            category: { type: "keyword" },
            status: { type: "keyword" },
            images: { type: "keyword", index: false }
          }
        }
      }
    })
    console.log("Elasticsearch 'products' index created with mappings.")
  } catch (err) {
    console.error("Elasticsearch init error:", err.message)
  }
}

const indexProduct = async (product) => {
  try {
    // If it's a Sequelize model instance, get plain data
    const doc = product.get ? product.get({ plain: true }) : product
    
    // We will index the category slug if available, else id
    const categoryVal = doc.Category ? doc.Category.slug : doc.categoryId

    await esClient.index({
      index: "products",
      id: doc.id.toString(),
      document: {
        title: doc.title,
        description: doc.description,
        price: doc.price,
        category: categoryVal,
        status: doc.status,
        images: doc.images && doc.images.length > 0 ? doc.images[0] : null
      }
    })
  } catch (err) {
    console.error("Elasticsearch indexing error:", err.message)
  }
}

const searchProducts = async (params) => {
  try {
    const { q, category, minPrice, maxPrice, sort, page = 1, limit = 12 } = params

    const from = (page - 1) * limit
    const must = []
    const filter = [{ term: { status: "approved" } }]

    if (q) {
      must.push({
        multi_match: {
          query: q,
          fields: ["title^3", "description"],
          fuzziness: "AUTO"
        }
      })
    } else {
      must.push({ match_all: {} })
    }

    if (category) {
      filter.push({ term: { category: category } })
    }

    if (minPrice || maxPrice) {
      const priceFilter = { range: { price: {} } }
      if (minPrice) priceFilter.range.price.gte = parseFloat(minPrice)
      if (maxPrice) priceFilter.range.price.lte = parseFloat(maxPrice)
      filter.push(priceFilter)
    }

    let sortObj = []
    if (sort === "price_asc") sortObj.push({ price: "asc" })
    else if (sort === "price_desc") sortObj.push({ price: "desc" })
    else sortObj.push("_score") // relevance

    const res = await esClient.search({
      index: "products",
      from,
      size: limit,
      body: {
        query: {
          bool: {
            must,
            filter
          }
        },
        sort: sortObj,
        aggs: {
          categories: {
            terms: { field: "category", size: 20 }
          },
          price_stats: {
            stats: { field: "price" }
          }
        },
        highlight: {
          fields: {
            title: {},
            description: {}
          },
          pre_tags: ["<em className='bg-muga/30 text-forest font-semibold'>"],
          post_tags: ["</em>"]
        }
      }
    })

    const total = typeof res.hits.total === 'object' ? res.hits.total.value : res.hits.total
    const products = res.hits.hits.map(hit => ({
      id: hit._id,
      ...hit._source,
      highlights: hit.highlight
    }))
    
    // Process aggregations safely
    const aggs = res.aggregations || {}
    const facets = {
      categories: aggs.categories?.buckets || [],
      priceStats: aggs.price_stats || { min: 0, max: 0 }
    }

    return { products, total, facets, page: Number(page), pages: Math.ceil(total / limit) }
  } catch (err) {
    console.error("Elasticsearch query error:", err.message)
    return { products: [], total: 0, facets: {}, page: 1, pages: 0 }
  }
}

module.exports = { initIndex, indexProduct, searchProducts }
