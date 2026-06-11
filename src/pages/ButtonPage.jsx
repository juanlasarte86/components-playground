import { useState } from 'react'
import Button from '../components/Button'
import DocsLayout from '../components/DocsLayout'

const defaultProps = {
  label: 'Click me',
  variant: 'primary',
  size: 'medium',
  disabled: false,
}

export default function ButtonPage() {
  const [props, setProps] = useState(defaultProps)

  function set(key, value) {
    setProps((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <DocsLayout>
      <div className="max-w-2xl mx-auto px-8 py-12 flex flex-col gap-8">

        {/* Name + description */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Button</h1>
          <p className="text-neutral-500 dark:text-neutral-400 text-base leading-relaxed max-w-lg">
            A clickable element that triggers an action. Supports three visual variants,
            three sizes, and a disabled state.
          </p>
        </div>

        {/* Unified preview + props panel */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">

          {/* Preview area */}
          <div className="bg-neutral-50 dark:bg-neutral-900 min-h-44 flex items-center justify-center p-10 border-b border-neutral-200 dark:border-neutral-800">
            <Button {...props} />
          </div>

          {/* Props header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-950">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Props</span>
            <button
              onClick={() => setProps(defaultProps)}
              className="text-xs text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
            >
              Reset to defaults
            </button>
          </div>

          {/* Prop rows */}
          <div className="bg-white dark:bg-neutral-950 divide-y divide-neutral-100 dark:divide-neutral-800/80">
            <PropRow label="label" type="Button text">
              <input
                type="text"
                value={props.label}
                onChange={(e) => set('label', e.target.value)}
                className="w-44 text-sm border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </PropRow>

            <PropRow label="variant" type="Visual style">
              <SegmentedControl
                options={['primary', 'secondary', 'ghost']}
                value={props.variant}
                onChange={(v) => set('variant', v)}
              />
            </PropRow>

            <PropRow label="size" type="Button size">
              <SegmentedControl
                options={['small', 'medium', 'large']}
                value={props.size}
                onChange={(v) => set('size', v)}
              />
            </PropRow>

            <PropRow label="disabled" type="Prevents interaction">
              <Toggle value={props.disabled} onChange={(v) => set('disabled', v)} />
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
      <p className="text-sm font-mono font-medium text-neutral-800 dark:text-neutral-200 truncate">{label}</p>
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

function Toggle({ value, onChange }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="text-xs text-neutral-400 w-8 text-right tabular-nums">{value ? 'true' : 'false'}</span>
      <button
        role="switch"
        aria-checked={value}
        onClick={() => onChange(!value)}
        className={`w-10 h-6 rounded-full border-2 transition-colors relative focus:outline-none overflow-hidden ${
          value ? 'bg-neutral-900 border-neutral-900' : 'bg-neutral-200 dark:bg-neutral-700 border-transparent'
        }`}
      >
        <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${value ? 'translate-x-[18px]' : 'translate-x-0.5'}`} />
      </button>
    </div>
  )
}
