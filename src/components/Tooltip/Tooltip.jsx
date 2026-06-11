import { useState, useRef } from 'react'

const positions = {
  top:    'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left:   'right-full top-1/2 -translate-y-1/2 mr-2',
  right:  'left-full top-1/2 -translate-y-1/2 ml-2',
}

const arrows = {
  top:    'top-full left-1/2 -translate-x-1/2 border-t-neutral-800 border-x-transparent border-b-transparent border-4',
  bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-neutral-800 border-x-transparent border-t-transparent border-4',
  left:   'left-full top-1/2 -translate-y-1/2 border-l-neutral-800 border-y-transparent border-r-transparent border-4',
  right:  'right-full top-1/2 -translate-y-1/2 border-r-neutral-800 border-y-transparent border-l-transparent border-4',
}

const sizes = {
  small:  'text-xs px-2 py-1',
  medium: 'text-sm px-3 py-1.5',
}

export default function Tooltip({ content = 'Tooltip', position = 'top', size = 'medium', children }) {
  const [visible, setVisible] = useState(false)

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span className={`absolute z-50 pointer-events-none ${positions[position]}`}>
          <span className={`relative block bg-neutral-800 text-white rounded-lg whitespace-nowrap font-medium leading-tight ${sizes[size]}`}>
            {content}
            <span className={`absolute border ${arrows[position]}`} />
          </span>
        </span>
      )}
    </span>
  )
}
