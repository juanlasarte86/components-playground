import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { docs, allComponents } from '../docs/index'

export default function ComponentPage() {
  const { name } = useParams()
  const navigate = useNavigate()
  const doc = docs[name?.toLowerCase()]

  if (!doc) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950">
        <div className="text-center">
          <p className="text-neutral-500 mb-4">Component not found: <code className="font-mono text-sm bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">{name}</code></p>
          <Link to="/" className="text-sm text-violet-600 hover:underline">← Back to home</Link>
        </div>
      </div>
    )
  }

  const [props, setProps] = useState({ ...doc.defaultProps })
  const [copied, setCopied] = useState(false)

  const code = doc.codeTemplate(props)
  const Component = doc.component

  function handleCopy() {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex flex-col">
      {/* Header */}
      <header className="border-b border-neutral-200 dark:border-neutral-800 shrink-0">
        <div className="flex items-center gap-3 px-6 py-4">
          <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <div className="w-7 h-7 rounded-md bg-violet-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <span className="font-semibold text-sm tracking-tight">Components Playground</span>
          </Link>
          <span className="text-neutral-300 dark:text-neutral-700">/</span>
          <span className="text-sm text-neutral-500">{doc.name}</span>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-56 shrink-0 border-r border-neutral-200 dark:border-neutral-800 overflow-y-auto">
          <div className="py-4 px-3">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider px-2 mb-2">Components</p>
            <nav className="flex flex-col gap-0.5">
              {allComponents.map(({ slug, name: cName, status }) => {
                const isActive = slug === name?.toLowerCase()
                const isReady = status === 'ready'
                return isReady ? (
                  <Link
                    key={slug}
                    to={`/components/${slug}`}
                    className={`flex items-center justify-between px-2 py-1.5 rounded-md text-sm transition-colors ${
                      isActive
                        ? 'bg-violet-50 dark:bg-violet-950 text-violet-700 dark:text-violet-300 font-medium'
                        : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100'
                    }`}
                  >
                    {cName}
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />}
                  </Link>
                ) : (
                  <div
                    key={slug}
                    className="flex items-center justify-between px-2 py-1.5 rounded-md text-sm text-neutral-400 dark:text-neutral-600 cursor-not-allowed"
                  >
                    {cName}
                    <span className="text-xs text-neutral-300 dark:text-neutral-700">soon</span>
                  </div>
                )
              })}
            </nav>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-8 py-8 flex flex-col gap-6">
            {/* Title */}
            <div>
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-1">{doc.name}</h1>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{doc.description}</p>
            </div>

            {/* Preview */}
            <section>
              <SectionLabel>Preview</SectionLabel>
              <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAyMCAwIEwgMCAwIDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] min-h-40 flex items-center justify-center p-10">
                <Component {...props} />
              </div>
            </section>

            {/* Controls */}
            <section>
              <SectionLabel>Props</SectionLabel>
              <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 divide-y divide-neutral-100 dark:divide-neutral-800">
                {doc.controls.map((control) => (
                  <ControlRow
                    key={control.prop}
                    control={control}
                    value={props[control.prop]}
                    onChange={(val) => setProps((prev) => ({ ...prev, [control.prop]: val }))}
                  />
                ))}
              </div>
            </section>

            {/* Code snippet */}
            <section>
              <div className="flex items-center justify-between mb-2">
                <SectionLabel>Code</SectionLabel>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors px-2 py-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  {copied ? (
                    <>
                      <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-emerald-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-5 text-sm font-mono text-neutral-800 dark:text-neutral-200 overflow-x-auto leading-relaxed">
                <code>{code}</code>
              </pre>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

function SectionLabel({ children }) {
  return <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">{children}</p>
}

function ControlRow({ control, value, onChange }) {
  const label = control.label ?? control.prop.charAt(0).toUpperCase() + control.prop.slice(1)

  return (
    <div className="flex items-center justify-between px-4 py-3 gap-6">
      <div>
        <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{label}</p>
        <p className="text-xs text-neutral-400 font-mono">{control.prop}</p>
      </div>
      <div className="shrink-0">
        {control.type === 'select' && (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="text-sm border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            {control.options.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        )}
        {control.type === 'toggle' && (
          <button
            role="switch"
            aria-checked={value}
            onClick={() => onChange(!value)}
            className={`w-10 h-6 rounded-full border-2 transition-colors relative ${value ? 'bg-violet-600 border-violet-600' : 'bg-neutral-200 dark:bg-neutral-700 border-transparent'}`}
          >
            <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${value ? 'translate-x-4' : 'translate-x-0.5'}`} />
          </button>
        )}
        {control.type === 'text' && (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="text-sm border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 rounded-lg px-2.5 py-1.5 w-40 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        )}
        {control.type === 'slider' && (
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={control.min ?? 0}
              max={control.max ?? 100}
              step={control.step ?? 1}
              value={value}
              onChange={(e) => onChange(Number(e.target.value))}
              className="w-28 accent-violet-600"
            />
            <span className="text-sm text-neutral-500 w-8 text-right">{value}</span>
          </div>
        )}
      </div>
    </div>
  )
}
