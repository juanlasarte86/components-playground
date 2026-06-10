export default function Card({ title = '', description = '', image = '', onClick }) {
  const isClickable = typeof onClick === 'function'

  return (
    <div
      onClick={onClick}
      className={[
        'rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden w-72',
        'transition-all',
        isClickable && 'cursor-pointer hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-700 active:scale-[0.99]',
      ].filter(Boolean).join(' ')}
    >
      {image && (
        <div className="w-full h-40 bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-5 flex flex-col gap-2">
        {title && (
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 leading-snug">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
            {description}
          </p>
        )}
        {isClickable && (
          <div className="flex items-center gap-1 mt-1 text-xs font-medium text-neutral-400 dark:text-neutral-500">
            Learn more
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}
