import { Outlet, NavLink } from 'react-router-dom'
import {
  Home, BookOpen, HelpCircle, Calculator,
  Building2, Database, Briefcase, DollarSign,
  Code2, Globe, Menu, X
} from 'lucide-react'
import { useState } from 'react'

const navGroups = [
  {
    title: 'Główna',
    items: [
      { to: '/', label: 'Start', icon: <Home size={15} /> },
      { to: '/quiz', label: 'Quiz (53 pytania)', icon: <HelpCircle size={15} /> },
    ],
  },
  {
    title: 'Rachunkowość',
    items: [
      { to: '/rachunkowosc/bilans', label: 'Bilans', icon: <BookOpen size={15} /> },
      { to: '/rachunkowosc/konta', label: 'Konta księgowe', icon: <BookOpen size={15} /> },
      { to: '/rachunkowosc/rzis', label: 'RZiS', icon: <BookOpen size={15} /> },
      { to: '/rachunkowosc/vat', label: 'VAT', icon: <Calculator size={15} /> },
      { to: '/rachunkowosc/srodki-trwale', label: 'Środki trwałe', icon: <BookOpen size={15} /> },
      { to: '/rachunkowosc/leasing', label: 'Leasing', icon: <BookOpen size={15} /> },
      { to: '/rachunkowosc/wycena-zapasow', label: 'FIFO / LIFO', icon: <Calculator size={15} /> },
    ],
  },
  {
    title: 'Wynagrodzenia & ZUS',
    items: [
      { to: '/wynagrodzenia', label: 'Wynagrodzenia i składki', icon: <DollarSign size={15} /> },
    ],
  },
  {
    title: 'Business Central',
    items: [
      { to: '/bc/ogolne', label: 'BC — Ogólne & Sure Step', icon: <Building2 size={15} /> },
      { to: '/bc/coding', label: 'BC — C/AL Coding', icon: <Code2 size={15} /> },
    ],
  },
  {
    title: 'Systemy informatyczne',
    items: [
      { to: '/erp', label: 'ERP', icon: <Briefcase size={15} /> },
      { to: '/hurtownie-danych', label: 'Hurtownie danych', icon: <Database size={15} /> },
    ],
  },
]

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const Sidebar = () => (
    <nav className="flex flex-col gap-0.5 px-2 pb-8">
      {navGroups.map((group) => (
        <div key={group.title}>
          <div className="sidebar-group-title">{group.title}</div>
          {group.items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                'sidebar-link' + (isActive ? ' active' : '')
              }
              onClick={() => setSidebarOpen(false)}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      ))}
    </nav>
  )

  return (
    <div className="flex h-screen bg-zinc-950 overflow-hidden">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-60 bg-zinc-900 border-r border-zinc-800 overflow-y-auto flex-shrink-0">
        <div className="px-4 py-5 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <Globe size={18} className="text-indigo-400" />
            <span className="font-semibold text-zinc-100 text-sm">Egzamin — Notatki</span>
          </div>
        </div>
        <Sidebar />
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setSidebarOpen(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-64 bg-zinc-900 border-r border-zinc-800 overflow-y-auto z-50">
            <div className="px-4 py-5 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe size={18} className="text-indigo-400" />
                <span className="font-semibold text-zinc-100 text-sm">Egzamin</span>
              </div>
              <button onClick={() => setSidebarOpen(false)} className="text-zinc-400 hover:text-zinc-100">
                <X size={18} />
              </button>
            </div>
            <Sidebar />
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Mobile header */}
        <header className="md:hidden flex items-center gap-3 px-4 py-3 bg-zinc-900 border-b border-zinc-800 flex-shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-zinc-400 hover:text-zinc-100"
          >
            <Menu size={20} />
          </button>
          <span className="font-semibold text-zinc-100 text-sm">Egzamin — Notatki</span>
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
