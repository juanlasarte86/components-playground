export default function Input({
  label = '',
  placeholder = '',
  type = 'text',
  error = '',
  disabled = false,
  value,
  onChange,
}) {
  const hasError = Boolean(error)

  return (
    <div className="flex flex-col gap-1.5 w-full max-w-xs">
      {label && (
        <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        className={[
          'w-full rounded-lg border px-3 py-2 text-sm bg-white dark:bg-neutral-900',
          'text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400',
          'outline-none transition-colors',
          'focus:ring-2 focus:ring-offset-0',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          hasError
            ? 'border-red-400 dark:border-red-600 focus:border-red-400 focus:ring-red-200 dark:focus:ring-red-900'
            : 'border-neutral-300 dark:border-neutral-700 focus:border-neutral-400 focus:ring-neutral-200 dark:focus:ring-neutral-800',
        ].join(' ')}
      />
      {hasError && (
        <p className="text-xs text-red-500 dark:text-red-400">{error}</p>
      )}
    </div>
  )
}
