import LoadingSpinner from "../../../components/common/LoadingSpinner"

export default function ProductsLoading() {
  return (
    <div className="container mx-auto px-6 py-24 flex items-center justify-center">
      <div className="space-y-4 text-center">
        <LoadingSpinner size="lg" />
        <p className="text-sm font-semibold text-slate-500">Loading Assamese treasures...</p>
      </div>
    </div>
  )
}
