"use client"
import * as React from "react"
import { Upload, X } from "lucide-react"

export default function ImageUploader({ images = [], onChange }) {
  const fileInputRef = React.useRef(null)

  const handleFileChange = (e) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map(file => URL.createObjectURL(file))
      onChange?.([...images, ...newFiles])
    }
  }

  const handleRemove = (index) => {
    onChange?.(images.filter((_, idx) => idx !== index))
  }

  return (
    <div className="space-y-4">
      <div 
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-slate-200 hover:border-primary rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-colors bg-slate-50/50"
      >
        <Upload className="h-8 w-8 text-slate-400 mb-2" />
        <span className="text-sm font-semibold text-slate-600">Click to Upload Images</span>
        <span className="text-xs text-slate-400 mt-1">Supports PNG, JPG, WEBP (Max 5MB)</span>
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          multiple 
          className="hidden" 
          accept="image/*"
        />
      </div>

      {images.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {images.map((img, i) => (
            <div key={i} className="relative w-20 h-20 rounded-xl bg-slate-100 border border-slate-100 overflow-hidden flex items-center justify-center text-4xl">
              {img.startsWith("blob:") ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={img} alt="preview" className="w-full h-full object-cover" />
              ) : (
                img
              )}
              <button 
                onClick={() => handleRemove(i)}
                className="absolute top-1 right-1 p-1 bg-black/55 text-white rounded-full hover:bg-black/75"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
