import { Link } from 'react-router-dom'

export default function LandingPage() {
  const components = [
    { name: 'Button', description: 'Clickable actions with variants and sizes', status: 'ready' },
    { name: 'Input', description: 'Text fields with labels, validation states', status: 'ready' },
    { name: 'Badge', description: 'Small status and label indicators', status: 'ready' },
    { name: 'Card', description: 'Content container with optional header/footer', status: 'coming-soon' },
    { name: 'Modal', description: 'Overlay dialogs and confirmations', status: 'coming-soon' },
    { name: 'Tooltip', description: 'Contextual hover labels', status: 'coming-soon' },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      {/* Header */}
      <header className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-violet-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <span className="font-semibold text-sm tracking-tight">Components Playground</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
            <a href="#components" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Components</a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">GitHub</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-violet-50 dark:bg-violet-950 text-violet-700 dark:text-violet-300 text-xs font-medium px-3 py-1.5 rounded-full border border-violet-200 dark:border-violet-800 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse"></span>
          Interactive component explorer
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">
          Build with confidence
        </h1>
        <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Explore, tweak, and copy UI components. Each one comes with live controls and ready-to-use code.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a
            href="#components"
            className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            Browse components
          </a>
          <a
            href="#"
            className="border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors text-neutral-700 dark:text-neutral-300"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-neutral-100 dark:border-neutral-900 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-3 gap-4 text-center">
          {[
            { value: '6', label: 'Components' },
            { value: '100%', label: 'Accessible' },
            { value: 'Live', label: 'Prop controls' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">{value}</div>
              <div className="text-xs text-neutral-500 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Component grid */}
      <section id="components" className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">Components</h2>
          <span className="text-sm text-neutral-400">{components.filter(c => c.status === 'ready').length} available</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {components.map(({ name, description, status }) => (
            <ComponentCard key={name} name={name} description={description} status={status} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-100 dark:border-neutral-900 mt-auto">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between text-xs text-neutral-400">
          <span>Components Playground</span>
          <span>Built with React + Vite + Tailwind</span>
        </div>
      </footer>
    </div>
  )
}

function ComponentCard({ name, description, status }) {
  const isReady = status === 'ready'
  const slug = name.toLowerCase()

  const inner = (
    <div className={`group rounded-xl border p-5 transition-all h-full ${
      isReady
        ? 'border-neutral-200 dark:border-neutral-800 hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-sm cursor-pointer'
        : 'border-neutral-100 dark:border-neutral-900 opacity-60'
    }`}>
      <div className="flex items-start justify-between mb-3">
        <div className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 dark:text-neutral-400 group-hover:bg-violet-100 dark:group-hover:bg-violet-900/40 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
          <ComponentIcon name={name} />
        </div>
        {isReady ? (
          <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 px-2 py-0.5 rounded-full">
            Ready
          </span>
        ) : (
          <span className="text-xs font-medium text-neutral-400 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-2 py-0.5 rounded-full">
            Soon
          </span>
        )}
      </div>
      <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100 mb-1">{name}</h3>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{description}</p>
      {isReady && (
        <div className="mt-4 flex items-center gap-1.5 text-xs text-violet-600 dark:text-violet-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Explore
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  )

  return isReady
    ? <Link to={`/components/${slug}`} className="block">{inner}</Link>
    : inner
}

function ComponentIcon({ name }) {
  const icons = {
    Button: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="8" width="18" height="8" rx="2" strokeWidth={2} />
      </svg>
    ),
    Input: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h6M3 18h6" />
      </svg>
    ),
    Badge: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M12 7h.01M17 7h.01M7 12h.01M12 12h.01M17 12h.01" />
      </svg>
    ),
    Card: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth={2} />
        <path strokeLinecap="round" strokeWidth={2} d="M3 9h18" />
      </svg>
    ),
    Modal: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="5" y="5" width="14" height="14" rx="2" strokeWidth={2} />
        <path strokeLinecap="round" strokeWidth={2} d="M5 10h14" />
      </svg>
    ),
    Tooltip: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  }
  return icons[name] ?? null
}
