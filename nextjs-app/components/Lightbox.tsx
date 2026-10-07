'use client'

import React, { useEffect } from 'react'

export interface LightboxData {
  src: string
  title: string
  meta?: string
  source?: string
}

interface LightboxProps {
  data: LightboxData | null
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
  currentIndex?: number
  totalCount?: number
}

export default function Lightbox({
  data,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalCount
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && onPrev) onPrev()
      if (e.key === 'ArrowRight' && onNext) onNext()
    }
    if (data) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [data, onClose, onPrev, onNext])

  if (!data) return null

  return (
    <div
      className="lightbox-modal is-open"
      role="dialog"
      aria-modal="true"
      aria-label="Media Preview"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="lightbox-dialog flex flex-col relative">
        <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <span className="chip">Institutional Photo Inspector</span>
            {currentIndex !== undefined && totalCount !== undefined && totalCount > 0 && (
              <span className="text-[11px] font-semibold text-slate-300 bg-white/10 px-2.5 py-0.5 rounded-full">
                {currentIndex + 1} / {totalCount}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="lightbox-close text-slate-400 hover:text-white text-lg"
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>

        <div className="lightbox-image-wrap relative">
          {onPrev && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onPrev()
              }}
              className="lightbox-nav-btn prev"
              aria-label="Previous image"
            >
              ‹
            </button>
          )}
          <img
            src={data.src}
            alt={data.title}
            className="max-h-[70dvh] max-w-full object-contain"
          />
          {onNext && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onNext()
              }}
              className="lightbox-nav-btn next"
              aria-label="Next image"
            >
              ›
            </button>
          )}
        </div>

        <div className="p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-100">
          <div>
            <h3 className="font-heading text-base font-bold text-ieee-navy">{data.title}</h3>
            {data.meta && <p className="text-xs text-slate-600 mt-0.5">{data.meta}</p>}
          </div>
          {data.source ? (
            <a
              href={data.source}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-1.5 px-3 self-start sm:self-auto shrink-0"
            >
              Source Document ↗
            </a>
          ) : (
            <span className="text-xs text-slate-400 italic">Photograph from the activity record</span>
          )}
        </div>
      </div>
    </div>
  )
}
