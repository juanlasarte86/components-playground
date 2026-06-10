const variants = {
  primary:   'bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white shadow-sm',
  secondary: 'bg-white hover:bg-neutral-50 active:bg-neutral-100 text-neutral-800 border border-neutral-300 shadow-sm dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-700',
  ghost:     'bg-transparent hover:bg-neutral-100 active:bg-neutral-200 text-neutral-700 dark:hover:bg-neutral-800 dark:text-neutral-300',
}

const sizes = {
  small:  'text-xs px-3 py-1.5 rounded-md gap-1.5',
  medium: 'text-sm px-4 py-2 rounded-lg gap-2',
  large:  'text-base px-5 py-2.5 rounded-lg gap-2',
}

export default function Button({
  label = 'Button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={[
        'inline-flex items-center justify-center font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
        variants[variant] ?? variants.primary,
        sizes[size] ?? sizes.medium,
      ].join(' ')}
    >
      {label}
    </button>
  )
}
