import { Link, useLocation } from 'react-router-dom'

const NAV = [
  { label: 'Button',  path: '/button' },
  { label: 'Input',   path: '/input' },
  { label: 'Badge',   path: '/badge' },
  { label: 'Card',    path: '/card' },
  { label: 'Modal',   path: '/modal' },
  { label: 'Tooltip', path: '/tooltip' },
]

export default function DocsLayout({ children }) {
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex flex-col">
      {/* Header */}
      <header className="border-b border-neutral-200 dark:border-neutral-800 shrink-0">
        <div className="px-6 py-4 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <div className="w-7 h-7 rounded-md bg-violet-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <span className="font-semibold text-sm tracking-tight">Components Playground</span>
          </Link>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-52 shrink-0 border-r border-neutral-200 dark:border-neutral-800 py-6 px-3">
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider px-3 mb-2">
            Components
          </p>
          <nav className="flex flex-col gap-0.5">
            {NAV.map(({ label, path }) => {
              const isActive = path && pathname === path
              const isReady = path !== null

              if (!isReady) {
                return (
                  <div key={label} className="flex items-center justify-between px-3 py-1.5 rounded-md text-sm text-neutral-300 dark:text-neutral-700 cursor-default select-none">
                    {label}
                    <span className="text-xs text-neutral-300 dark:text-neutral-700">soon</span>
                  </div>
                )
              }

              return (
                <Link
                  key={label}
                  to={path}
                  className={`relative flex items-center px-3 py-1.5 rounded-md text-sm transition-colors ${
                    isActive
                      ? 'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-medium'
                      : 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
