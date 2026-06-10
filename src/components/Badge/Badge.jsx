const colors = {
  gray:   'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300',
  red:    'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400',
  green:  'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400',
  blue:   'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400',
  yellow: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400',
}

const sizes = {
  small:  'text-xs px-2 py-0.5 rounded-md',
  medium: 'text-sm px-2.5 py-1 rounded-lg',
}

export default function Badge({ text = 'Badge', color = 'gray', size = 'medium' }) {
  return (
    <span className={`inline-flex items-center font-medium ${colors[color] ?? colors.gray} ${sizes[size] ?? sizes.medium}`}>
      {text}
    </span>
  )
}
