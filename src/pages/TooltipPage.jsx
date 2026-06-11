import { useState } from 'react'
import Tooltip from '../components/Tooltip'
import DocsLayout from '../components/DocsLayout'

const defaultProps = {
  content: 'This is a tooltip',
  position: 'top',
  size: 'medium',
}

function codeSnippet(props) {
  return `<Tooltip
  content="${props.content}"
  position="${props.position}"
  size="${props.size}"
>
  <button>Hover me</button>
</Tooltip>`
}

export default function TooltipPage() {
  const [props, setProps] = useState(defaultProps)
  const [copied, setCopied] = useState(false)
  const set = (key, value) => setProps((prev) => ({ ...prev, [key]: value }))

  function copy() {
    navigator.clipboard.writeText(codeSnippet(props))
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <DocsLayout>
      <div className="max-w-2xl mx-auto px-8 py-12 flex flex-col gap-8">

        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Tooltip</h1>
          <p className="text-neutral-500 dark:text-neutral-400 text-base leading-relaxed max-w-lg">
            A small label that appears on hover to provide extra context.
            Supports four positions and two sizes.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">

          {/* Preview */}
          <div className="bg-neutral-50 dark:bg-neutral-900 min-h-44 flex items-center justify-center p-10 border-b border-neutral-200 dark:border-neutral-800">
            <Tooltip content={props.content} position={props.position} size={props.size}>
              <button className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium px-5 py-2.5 rounded-lg shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors">
                Hover me
              </button>
            </Tooltip>
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

            <PropRow label="content" type="Tooltip text">
              <TextInput value={props.content} onChange={(v) => set('content', v)} />
            </PropRow>

            <PropRow label="position" type="Where it appears">
              <SegmentedControl
                options={['top', 'bottom', 'left', 'right']}
                value={props.position}
                onChange={(v) => set('position', v)}
              />
            </PropRow>

            <PropRow label="size" type="Text and padding size">
              <SegmentedControl
                options={['small', 'medium']}
                value={props.size}
                onChange={(v) => set('size', v)}
              />
            </PropRow>

          </div>
        </div>

        {/* Code snippet */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-950">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Code</span>
            <button
              onClick={copy}
              className="text-xs text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre className="bg-neutral-50 dark:bg-neutral-900 px-5 py-4 text-xs font-mono text-neutral-700 dark:text-neutral-300 overflow-x-auto leading-relaxed">
            {codeSnippet(props)}
          </pre>
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
