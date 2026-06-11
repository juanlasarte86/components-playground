import { useState } from 'react'
import Badge from '../components/Badge'
import DocsLayout from '../components/DocsLayout'

const defaultProps = { text: 'New', color: 'blue', size: 'medium' }

export default function BadgePage() {
  const [props, setProps] = useState(defaultProps)
  const set = (key, value) => setProps((prev) => ({ ...prev, [key]: value }))

  return (
    <DocsLayout>
      <div className="max-w-2xl mx-auto px-8 py-12 flex flex-col gap-8">

        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Badge</h1>
          <p className="text-neutral-500 dark:text-neutral-400 text-base leading-relaxed max-w-lg">
            A small label for status, categories, or counts. Comes in five colors and two sizes.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">

          <div className="bg-neutral-50 dark:bg-neutral-900 min-h-36 flex items-center justify-center p-10 border-b border-neutral-200 dark:border-neutral-800">
            <Badge {...props} />
          </div>

          <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-950">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Props</span>
            <button
              onClick={() => setProps(defaultProps)}
              className="text-xs text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
            >
              Reset to defaults
            </button>
          </div>

          <div className="bg-white dark:bg-neutral-950 divide-y divide-neutral-100 dark:divide-neutral-800/80">

            <PropRow label="text" type="Badge label">
              <input
                type="text"
                value={props.text}
                onChange={(e) => set('text', e.target.value)}
                className="w-44 text-sm border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </PropRow>

            <PropRow label="color" type="Color theme">
              <SegmentedControl
                options={['gray', 'red', 'green', 'blue', 'yellow']}
                value={props.color}
                onChange={(v) => set('color', v)}
              />
            </PropRow>

            <PropRow label="size" type="Badge size">
              <SegmentedControl
                options={['small', 'medium']}
                value={props.size}
                onChange={(v) => set('size', v)}
              />
            </PropRow>

          </div>
        </div>

      </div>
    </DocsLayout>
  )
}

function PropRow({ label, type, children }) {
  return (
    <div className="grid items-center px-5 py-3.5 gap-4" style={{ gridTemplateColumns: '10rem 1fr auto' }}>
      <p className="text-sm font-mono font-medium text-neutral-800 dark:text-neutral-200">{label}</p>
      <p className="text-xs text-neutral-400 truncate">{type}</p>
      <div>{children}</div>
    </div>
  )
}

function SegmentedControl({ options, value, onChange }) {
  return (
    <div className="flex rounded-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden text-xs font-medium">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`px-3 py-1.5 transition-colors ${
            value === opt
              ? 'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900'
              : 'bg-white dark:bg-neutral-900 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}
