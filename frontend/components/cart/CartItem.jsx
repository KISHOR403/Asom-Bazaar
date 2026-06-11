import { Plus, Minus, Trash2 } from "lucide-react"
import { formatPrice } from "../../lib/utils"

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  if (!item) return null;

  return (
    <div className="flex items-center gap-4 py-4 border-b border-slate-100 last:border-0">
      <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-3xl">
        {item.image || "🧣"}
      </div>
      <div className="flex-1 space-y-1">
        <h4 className="text-sm font-semibold text-slate-800 line-clamp-1">{item.title}</h4>
        <span className="text-xs text-slate-400 font-semibold">{item.category}</span>
        <div className="flex items-center gap-3 mt-1">
          <button 
            onClick={() => onUpdateQuantity?.(item.quantity - 1)}
            disabled={item.quantity <= 1}
            className="p-1 rounded bg-slate-100 disabled:opacity-50 text-slate-600 hover:bg-slate-200"
          >
            <Minus className="h-3 w-3" />
          </button>
          <span className="text-xs font-bold text-slate-700">{item.quantity}</span>
          <button 
            onClick={() => onUpdateQuantity?.(item.quantity + 1)}
            className="p-1 rounded bg-slate-100 text-slate-600 hover:bg-slate-200"
          >
            <Plus className="h-3 w-3" />
          </button>
        </div>
      </div>
      <div className="text-right space-y-1">
        <span className="text-sm font-bold text-slate-900">{formatPrice(item.price * item.quantity)}</span>
        <button 
          onClick={onRemove}
          className="block ml-auto text-slate-400 hover:text-rose-500 p-1 rounded"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
