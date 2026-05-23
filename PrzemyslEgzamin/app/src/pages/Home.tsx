import { Link } from 'react-router-dom'
import { BookOpen, HelpCircle, Code2, Database, Building2, DollarSign, Briefcase, Calculator, ChevronRight } from 'lucide-react'
import { questions } from '../data/questions'

const sections = [
  {
    group: 'Quiz',
    items: [
      { to: '/quiz', icon: <HelpCircle size={20} className="text-indigo-400" />, title: 'Quiz (53 pytania)', desc: 'Pytania testowe z egzaminu z odpowiedziami i wytłumaczeniami' },
    ],
  },
  {
    group: 'Rachunkowość',
    items: [
      { to: '/rachunkowosc/bilans', icon: <BookOpen size={20} className="text-blue-400" />, title: 'Bilans', desc: 'Aktywa, pasywa, zasada równowagi, KW' },
      { to: '/rachunkowosc/konta', icon: <BookOpen size={20} className="text-blue-400" />, title: 'Konta księgowe', desc: 'Plan kont, debet/kredyt, konta bilansowe i wynikowe' },
      { to: '/rachunkowosc/rzis', icon: <BookOpen size={20} className="text-blue-400" />, title: 'RZiS', desc: 'Rachunek zysków i strat, typy działalności' },
      { to: '/rachunkowosc/vat', icon: <Calculator size={20} className="text-blue-400" />, title: 'VAT', desc: 'Naliczony vs należny, rozliczenia z US' },
      { to: '/rachunkowosc/srodki-trwale', icon: <BookOpen size={20} className="text-blue-400" />, title: 'Środki trwałe', desc: 'Amortyzacja, metody, kiedy zaczynać' },
      { to: '/rachunkowosc/leasing', icon: <BookOpen size={20} className="text-blue-400" />, title: 'Leasing', desc: 'Finansowy vs operacyjny' },
      { to: '/rachunkowosc/wycena-zapasow', icon: <Calculator size={20} className="text-blue-400" />, title: 'FIFO / LIFO', desc: 'Wycena rozchodu zapasów z przykładami' },
    ],
  },
  {
    group: 'Wynagrodzenia',
    items: [
      { to: '/wynagrodzenia', icon: <DollarSign size={20} className="text-yellow-400" />, title: 'Wynagrodzenia i składki ZUS', desc: 'Składki pracodawcy i pracownika, KUP, kalkulacja netto' },
    ],
  },
  {
    group: 'Business Central',
    items: [
      { to: '/bc/ogolne', icon: <Building2 size={20} className="text-emerald-400" />, title: 'BC — Ogólne & Sure Step', desc: 'Obiekty, historia, Sure Step fazy wdrożenia' },
      { to: '/bc/coding', icon: <Code2 size={20} className="text-emerald-400" />, title: 'BC — C/AL Coding', desc: 'Typy, triggery, funkcje, FlowField, pętle' },
    ],
  },
  {
    group: 'Systemy informatyczne',
    items: [
      { to: '/erp', icon: <Briefcase size={20} className="text-orange-400" />, title: 'ERP', desc: 'Definicja, moduły, przykłady systemów' },
      { to: '/hurtownie-danych', icon: <Database size={20} className="text-purple-400" />, title: 'Hurtownie danych', desc: 'OLAP, ETL, schemat gwiazdy/płatka, fakty/wymiary' },
    ],
  },
]

export default function Home() {
  const answered = (() => {
    try {
      const raw = localStorage.getItem('quiz_progress')
      if (!raw) return 0
      const data = JSON.parse(raw)
      return Object.values(data).filter((s: any) => s.checked).length
    } catch {
      return 0
    }
  })()

  const topicCounts = questions.reduce((acc, q) => {
    acc[q.topic] = (acc[q.topic] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-50 mb-2">Egzamin — Notatki i Quiz</h1>
        <p className="text-zinc-400">Materiały do nauki: rachunkowość, wynagrodzenia, Business Central, hurtownie danych, ERP.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <div className="card text-center">
          <div className="text-2xl font-bold text-indigo-400">{questions.length}</div>
          <div className="text-xs text-zinc-500 mt-0.5">Pytań łącznie</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-emerald-400">{answered}</div>
          <div className="text-xs text-zinc-500 mt-0.5">Odpowiedziano</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-blue-400">{topicCounts.rachunkowosc || 0}</div>
          <div className="text-xs text-zinc-500 mt-0.5">Rachunkowość</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-emerald-400">{topicCounts.bc || 0}</div>
          <div className="text-xs text-zinc-500 mt-0.5">Business Central</div>
        </div>
      </div>

      {sections.map(group => (
        <div key={group.group} className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">{group.group}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {group.items.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className="card flex items-start gap-4 hover:border-zinc-700 hover:bg-zinc-800/80 transition-colors group"
              >
                <div className="shrink-0 mt-0.5">{item.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-zinc-100 group-hover:text-white text-sm mb-0.5">{item.title}</div>
                  <div className="text-xs text-zinc-500 leading-relaxed">{item.desc}</div>
                </div>
                <ChevronRight size={16} className="text-zinc-600 shrink-0 mt-0.5 group-hover:text-zinc-400 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
