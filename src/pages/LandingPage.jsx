import { Link } from 'react-router-dom'

export default function LandingPage() {
  const components = [
    { name: 'Button', description: 'Clickable actions with variants and sizes', status: 'ready' },
    { name: 'Input', description: 'Text fields with labels, validation states', status: 'ready' },
    { name: 'Badge', description: 'Small status and label indicators', status: 'ready' },
    { name: 'Card', description: 'Content container with optional header/footer', status: 'ready' },
    { name: 'Modal', description: 'Overlay dialogs and confirmations', status: 'ready' },
    { name: 'Tooltip', description: 'Contextual hover labels', status: 'ready' },
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
            <a href="https://github.com/juanlasarte86/components-playground" target="_blank" rel="noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">GitHub</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-neutral-100 dark:border-neutral-900 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAyMCAwIEwgMCAwIDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]">
        <div className="max-w-5xl mx-auto px-6 py-36 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">
          Interactive component explorer
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
            href="https://github.com/juanlasarte86/components-playground"
            target="_blank"
            rel="noreferrer"
            className="border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors text-neutral-700 dark:text-neutral-300"
          >
            View on GitHub
          </a>
        </div>
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
    <div className={`group rounded-xl border p-6 transition-all h-full flex flex-col gap-3 ${
      isReady
        ? 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-sm cursor-pointer'
        : 'border-neutral-200 dark:border-neutral-800'
    }`}>
      <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-700">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">{name}</h3>
        {isReady ? (
          <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900 px-2 py-0.5 rounded-full">
            Ready
          </span>
        ) : (
          <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded-full">
            Soon
          </span>
        )}
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{description}</p>
      {isReady && (
        <div className="mt-auto pt-1 flex items-center gap-1 text-xs font-medium text-neutral-400 dark:text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">
          Explore
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  )

  return isReady
    ? <Link to={`/${slug}`} className="block">{inner}</Link>
    : inner
}
