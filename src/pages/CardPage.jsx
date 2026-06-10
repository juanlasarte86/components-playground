import { useState } from 'react'
import Card from '../components/Card'
import DocsLayout from '../components/DocsLayout'

const SAMPLE_IMAGE = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80'

const defaultProps = {
  title: 'Mountain at Sunrise',
  description: 'A peaceful view from the summit as the sun rises over the horizon.',
  image: SAMPLE_IMAGE,
  clickable: false,
}

export default function CardPage() {
  const [props, setProps] = useState(defaultProps)

  function set(key, value) {
    setProps((prev) => ({ ...prev, [key]: value }))
  }

  const cardProps = {
    title: props.title,
    description: props.description,
    image: props.image,
    onClick: props.clickable ? () => {} : undefined,
  }

  return (
    <DocsLayout>
      <div className="max-w-2xl mx-auto px-8 py-12 flex flex-col gap-8">

        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Card</h1>
          <p className="text-neutral-500 dark:text-neutral-400 text-base leading-relaxed max-w-lg">
            A content container with an optional image, title, and description.
            Can be made interactive with an onClick handler.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">

          {/* Preview */}
          <div className="bg-neutral-50 dark:bg-neutral-900 min-h-56 flex items-center justify-center p-10 border-b border-neutral-200 dark:border-neutral-800">
            <Card {...cardProps} />
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

            <PropRow label="title" type="string">
              <TextInput value={props.title} onChange={(v) => set('title', v)} />
            </PropRow>

            <PropRow label="description" type="string">
              <TextInput value={props.description} onChange={(v) => set('description', v)} />
            </PropRow>

            <PropRow label="image" type="string | undefined">
              <SegmentedControl
                options={['show', 'hide']}
                value={props.image ? 'show' : 'hide'}
                onChange={(v) => set('image', v === 'show' ? SAMPLE_IMAGE : '')}
              />
            </PropRow>

            <PropRow label="onClick" type="function | undefined">
              <Toggle
                value={props.clickable}
                onChange={(v) => set('clickable', v)}
                trueLabel="set"
                falseLabel="unset"
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
      <p className="text-sm font-mono font-medium text-neutral-800 dark:text-neutral-200 truncate">{label}</p>
      <p className="text-xs text-neutral-400 truncate">{type}</p>
      <div>{children}</div>
    </div>
  )
}

function TextInput({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-44 text-sm border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-violet-500"
    />
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

function Toggle({ value, onChange, trueLabel = 'true', falseLabel = 'false' }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="text-xs text-neutral-400 w-8 text-right tabular-nums">
        {value ? trueLabel : falseLabel}
      </span>
      <button
        role="switch"
        aria-checked={value}
        onClick={() => onChange(!value)}
        className={`w-10 h-6 rounded-full border-2 transition-colors relative ${
          value ? 'bg-neutral-900 border-neutral-900' : 'bg-neutral-200 dark:bg-neutral-700 border-transparent'
        }`}
      >
        <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${value ? 'translate-x-4' : 'translate-x-0.5'}`} />
      </button>
    </div>
  )
}
