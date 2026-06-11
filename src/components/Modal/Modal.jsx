import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const sizes = {
  small:  'max-w-sm',
  medium: 'max-w-md',
  large:  'max-w-lg',
}

export default function Modal({ open, onClose, title, description, size = 'medium', showCloseButton = true }) {
  useEffect(() => {
    if (!open) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className={`relative bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl w-full ${sizes[size]} flex flex-col`}>
        <div className="flex items-start justify-between px-6 pt-6 pb-4">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 leading-tight">
            {title}
          </h2>
          {showCloseButton && (
            <button
              onClick={onClose}
              className="ml-4 shrink-0 w-7 h-7 flex items-center justify-center rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        <div className="px-6 pb-6">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-end gap-2 px-6 py-4 border-t border-neutral-100 dark:border-neutral-800">
          <button
            onClick={onClose}
            className="text-sm font-medium px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="text-sm font-medium px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white transition-colors"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}
