import { useState, useEffect } from 'react'
import { questions, topicLabels, topicColors, type Topic } from '../data/questions'
import { CheckCircle2, XCircle, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react'

type QuizState = {
  selected: string[]
  checked: boolean
}

const STORAGE_KEY = 'quiz_progress'

function loadProgress(): Record<number, QuizState> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveProgress(p: Record<number, QuizState>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p))
}

const topicFilters: { value: 'all' | Topic; label: string }[] = [
  { value: 'all', label: 'Wszystkie' },
  { value: 'rachunkowosc', label: 'Rachunkowość' },
  { value: 'wynagrodzenia', label: 'Wynagrodzenia' },
  { value: 'bc', label: 'Business Central' },
  { value: 'hd', label: 'Hurtownie danych' },
  { value: 'erp', label: 'ERP' },
]

export default function Quiz() {
  const [filter, setFilter] = useState<'all' | Topic>('all')
  const [idx, setIdx] = useState(0)
  const [progress, setProgress] = useState<Record<number, QuizState>>(loadProgress)

  const filtered = filter === 'all' ? questions : questions.filter(q => q.topic === filter)
  const question = filtered[idx]
  const state = progress[question?.id] ?? { selected: [], checked: false }

  const multiCorrect = question ? question.answers.filter(a => a.correct).length > 1 : false

  useEffect(() => {
    setIdx(0)
  }, [filter])

  function toggle(label: string) {
    if (state.checked) return
    const current = state.selected
    let next: string[]
    if (multiCorrect) {
      next = current.includes(label) ? current.filter(l => l !== label) : [...current, label]
    } else {
      next = current.includes(label) ? [] : [label]
    }
    const updated = { ...progress, [question.id]: { selected: next, checked: false } }
    setProgress(updated)
    saveProgress(updated)
  }

  function check() {
    if (state.selected.length === 0) return
    const updated = { ...progress, [question.id]: { ...state, checked: true } }
    setProgress(updated)
    saveProgress(updated)
  }

  function reset() {
    if (!confirm('Reset całego postępu quizu?')) return
    localStorage.removeItem(STORAGE_KEY)
    setProgress({})
  }

  function answerStatus(label: string): 'correct' | 'wrong' | 'missed' | 'neutral' {
    if (!state.checked) return 'neutral'
    const answer = question.answers.find(a => a.label === label)!
    const selected = state.selected.includes(label)
    if (selected && answer.correct) return 'correct'
    if (selected && !answer.correct) return 'wrong'
    if (!selected && answer.correct) return 'missed'
    return 'neutral'
  }

  const answered = Object.values(progress).filter(s => s.checked).length
  const correct = Object.entries(progress).filter(([id, s]) => {
    if (!s.checked) return false
    const q = questions.find(q => q.id === parseInt(id))
    if (!q) return false
    const correctLabels = q.answers.filter(a => a.correct).map(a => a.label).sort()
    return JSON.stringify(s.selected.sort()) === JSON.stringify(correctLabels)
  }).length

  if (!question) return <p className="text-zinc-400">Brak pytań dla tego filtra.</p>

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-zinc-50 mb-1">Quiz egzaminacyjny</h1>
          <p className="text-zinc-400 text-sm">{answered}/{questions.length} odpowiedziano • {correct} poprawnych</p>
        </div>
        <button onClick={reset} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 text-sm transition-colors">
          <RotateCcw size={14} />
          Reset
        </button>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {topicFilters.map(f => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              filter === f.value
                ? 'bg-indigo-600 text-white'
                : 'bg-zinc-800 text-zinc-400 hover:text-zinc-100'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-zinc-500 mb-1">
          <span>Pytanie {idx + 1} z {filtered.length}</span>
          <span className={topicColors[question.topic]}>{topicLabels[question.topic]}</span>
        </div>
        <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-500 transition-all"
            style={{ width: `${((idx + 1) / filtered.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="card mb-4">
        <div className="flex items-start justify-between gap-4 mb-5">
          <p className="text-zinc-100 font-medium leading-relaxed">{question.question}</p>
          <span className={`${topicColors[question.topic]} shrink-0`}>{topicLabels[question.topic]}</span>
        </div>

        {question.image && (
          <img
            src={question.image}
            alt="Tabela do pytania"
            className="rounded-lg mb-5 max-w-full border border-zinc-700"
          />
        )}

        {multiCorrect && (
          <p className="text-xs text-indigo-400 mb-3">Zaznacz wszystkie poprawne odpowiedzi</p>
        )}

        <div className="space-y-2">
          {question.answers.map(answer => {
            const status = answerStatus(answer.label)
            const selected = state.selected.includes(answer.label)

            let cls = 'flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors '
            if (!state.checked) {
              cls += selected
                ? 'border-indigo-500 bg-indigo-900/30'
                : 'border-zinc-700 hover:border-zinc-600 bg-zinc-800/50'
            } else {
              if (status === 'correct') cls += 'border-emerald-500 bg-emerald-900/20'
              else if (status === 'wrong') cls += 'border-red-500 bg-red-900/20'
              else if (status === 'missed') cls += 'border-yellow-500/50 bg-yellow-900/10'
              else cls += 'border-zinc-700 bg-zinc-800/30'
            }

            return (
              <div key={answer.label} className={cls} onClick={() => toggle(answer.label)}>
                <div className={`mt-0.5 shrink-0 w-5 h-5 rounded border flex items-center justify-center text-xs font-bold ${
                  !state.checked
                    ? selected ? 'border-indigo-400 bg-indigo-600 text-white' : 'border-zinc-600 text-zinc-500'
                    : status === 'correct' ? 'border-emerald-400 bg-emerald-600 text-white'
                    : status === 'wrong' ? 'border-red-400 bg-red-600 text-white'
                    : 'border-zinc-600 text-zinc-500'
                }`}>
                  {answer.label.toUpperCase()}
                </div>
                <span className={`text-sm leading-relaxed ${
                  !state.checked ? (selected ? 'text-zinc-100' : 'text-zinc-300') :
                  status === 'correct' ? 'text-emerald-300' :
                  status === 'wrong' ? 'text-red-300' :
                  status === 'missed' ? 'text-yellow-300' :
                  'text-zinc-400'
                }`}>
                  {answer.text}
                </span>
                {state.checked && (
                  <div className="ml-auto shrink-0">
                    {status === 'correct' && <CheckCircle2 size={16} className="text-emerald-400" />}
                    {status === 'wrong' && <XCircle size={16} className="text-red-400" />}
                    {status === 'missed' && <CheckCircle2 size={16} className="text-yellow-400" />}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Explanation */}
        {state.checked && (
          <div className="mt-5 p-4 rounded-lg bg-zinc-800/60 border border-zinc-700">
            <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">Wytłumaczenie</p>
            <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-line">{question.explanation}</p>
          </div>
        )}

        {!state.checked && (
          <button
            onClick={check}
            disabled={state.selected.length === 0}
            className="mt-5 w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium text-sm transition-colors"
          >
            Sprawdź odpowiedź
          </button>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIdx(Math.max(0, idx - 1))}
          disabled={idx === 0}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed text-zinc-100 text-sm font-medium transition-colors"
        >
          <ChevronLeft size={16} />
          Poprzednie
        </button>

        <div className="flex gap-1">
          {filtered.slice(Math.max(0, idx - 2), Math.min(filtered.length, idx + 3)).map((q, i) => {
            const qIdx = Math.max(0, idx - 2) + i
            const qState = progress[q.id]
            const isCorrect = qState?.checked && (() => {
              const correctLabels = q.answers.filter(a => a.correct).map(a => a.label).sort()
              return JSON.stringify(qState.selected.sort()) === JSON.stringify(correctLabels)
            })()
            return (
              <button
                key={q.id}
                onClick={() => setIdx(qIdx)}
                className={`w-8 h-8 rounded text-xs font-medium transition-colors ${
                  qIdx === idx ? 'bg-indigo-600 text-white' :
                  qState?.checked
                    ? isCorrect ? 'bg-emerald-900/50 text-emerald-400' : 'bg-red-900/50 text-red-400'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                }`}
              >
                {qIdx + 1}
              </button>
            )
          })}
        </div>

        <button
          onClick={() => setIdx(Math.min(filtered.length - 1, idx + 1))}
          disabled={idx === filtered.length - 1}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed text-zinc-100 text-sm font-medium transition-colors"
        >
          Następne
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}
