import { useState } from 'react'

export default function WycenaZapasow() {
  const [iloscPocz, setIloscPocz] = useState(200)
  const [cenaPocz, setCenaPocz] = useState(22)
  const [iloscDost, setIloscDost] = useState(100)
  const [cenaDost, setCenaDost] = useState(20)
  const [rozchod, setRozchod] = useState(250)

  const stanPocz = iloscPocz * cenaPocz
  const dostawa = iloscDost * cenaDost
  const razem = stanPocz + dostawa
  const razemSzt = iloscPocz + iloscDost

  const przecietna = razemSzt > 0 ? razem / razemSzt : 0
  const rozchodPrzecietna = rozchod * przecietna

  let rozchodFIFO = 0
  const fifo = [{ ilosc: iloscPocz, cena: cenaPocz }, { ilosc: iloscDost, cena: cenaDost }]
  let pozostalo = rozchod
  for (const partia of fifo) {
    if (pozostalo <= 0) break
    const biorac = Math.min(pozostalo, partia.ilosc)
    rozchodFIFO += biorac * partia.cena
    pozostalo -= biorac
  }

  let rozchodLIFO = 0
  const lifo = [{ ilosc: iloscDost, cena: cenaDost }, { ilosc: iloscPocz, cena: cenaPocz }]
  pozostalo = rozchod
  for (const partia of lifo) {
    if (pozostalo <= 0) break
    const biorac = Math.min(pozostalo, partia.ilosc)
    rozchodLIFO += biorac * partia.cena
    pozostalo -= biorac
  }

  const invalid = rozchod > razemSzt

  return (
    <div className="prose-custom">
      <h1>Wycena rozchodu zapasów (FIFO / LIFO / Przeciętna)</h1>

      <h2>Metody wyceny</h2>
      <table>
        <thead><tr><th>Metoda</th><th>Zasada</th><th>Kiedy stosować</th></tr></thead>
        <tbody>
          <tr><td><strong>Cena przeciętna (average)</strong></td><td>Średnia ważona cen wszystkich partii na magazynie</td><td>Gdy ceny zmieniają się często</td></tr>
          <tr><td><strong>FIFO</strong> (First In, First Out)</td><td>Pierwsza dostarczona partia wychodzi jako pierwsza</td><td>Gdy ceny rosną — niższe koszty</td></tr>
          <tr><td><strong>LIFO</strong> (Last In, First Out)</td><td>Ostatnia dostarczona partia wychodzi jako pierwsza</td><td>Gdy ceny rosną — wyższe koszty, niższy podatek</td></tr>
        </tbody>
      </table>

      <h2>Wzory</h2>
      <div className="card font-mono text-sm space-y-2">
        <p><span className="text-indigo-300">Cena przeciętna</span> = (ilość₁ × cena₁ + ilość₂ × cena₂) / (ilość₁ + ilość₂)</p>
        <p><span className="text-emerald-300">FIFO</span> = rozchód z najstarszych partii (wg kolejności dostaw)</p>
        <p><span className="text-yellow-300">LIFO</span> = rozchód z najnowszych partii (wg odwrotnej kolejności)</p>
      </div>

      <h2>Kalkulator interaktywny</h2>
      <div className="card mb-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-xs text-zinc-400 mb-1 block">Stan pocz. — ilość (szt)</label>
            <input type="number" value={iloscPocz} onChange={e => setIloscPocz(+e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-1.5 text-sm text-zinc-100" />
          </div>
          <div>
            <label className="text-xs text-zinc-400 mb-1 block">Stan pocz. — cena (zł/szt)</label>
            <input type="number" value={cenaPocz} onChange={e => setCenaPocz(+e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-1.5 text-sm text-zinc-100" />
          </div>
          <div>
            <label className="text-xs text-zinc-400 mb-1 block">Dostawa — ilość (szt)</label>
            <input type="number" value={iloscDost} onChange={e => setIloscDost(+e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-1.5 text-sm text-zinc-100" />
          </div>
          <div>
            <label className="text-xs text-zinc-400 mb-1 block">Dostawa — cena (zł/szt)</label>
            <input type="number" value={cenaDost} onChange={e => setCenaDost(+e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-1.5 text-sm text-zinc-100" />
          </div>
          <div className="col-span-2">
            <label className="text-xs text-zinc-400 mb-1 block">Wydanie z magazynu — ilość (szt)</label>
            <input type="number" value={rozchod} onChange={e => setRozchod(+e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-1.5 text-sm text-zinc-100" />
          </div>
        </div>

        {invalid ? (
          <p className="text-red-400 text-sm">Nie można wydać więcej niż jest na magazynie ({razemSzt} szt)</p>
        ) : (
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-indigo-900/30 border border-indigo-700 rounded-lg p-3 text-center">
              <div className="text-xs text-indigo-400 mb-1">Cena przeciętna</div>
              <div className="text-lg font-bold text-indigo-300">{rozchodPrzecietna.toFixed(2)} zł</div>
              <div className="text-xs text-zinc-500 mt-0.5">cena: {przecietna.toFixed(4)} zł/szt</div>
            </div>
            <div className="bg-emerald-900/30 border border-emerald-700 rounded-lg p-3 text-center">
              <div className="text-xs text-emerald-400 mb-1">FIFO</div>
              <div className="text-lg font-bold text-emerald-300">{rozchodFIFO.toFixed(2)} zł</div>
              <div className="text-xs text-zinc-500 mt-0.5">ze starszych partii</div>
            </div>
            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-3 text-center">
              <div className="text-xs text-yellow-400 mb-1">LIFO</div>
              <div className="text-lg font-bold text-yellow-300">{rozchodLIFO.toFixed(2)} zł</div>
              <div className="text-xs text-zinc-500 mt-0.5">z nowszych partii</div>
            </div>
          </div>
        )}
      </div>

      <h2>Przykład z egzaminu (zadanie 7 / zad17)</h2>

      <h3>Wersja z wykładu: 200×22 + 100×20, rozchód 250</h3>
      <div className="card text-sm font-mono space-y-1">
        <p className="text-zinc-400">Stan: 200 szt × 22 zł = 4 400 zł</p>
        <p className="text-zinc-400">Dostawa: 100 szt × 20 zł = 2 000 zł</p>
        <p className="text-zinc-400">Razem: 300 szt = 6 400 zł, cena przeciętna = 21,33 zł</p>
        <p className="border-t border-zinc-700 pt-1"><span className="text-indigo-300">Przeciętna:</span> 21,33 × 250 = <strong className="text-zinc-100">5 333,33 zł</strong></p>
        <p><span className="text-emerald-300">FIFO:</span> 200×22 + 50×20 = 4400+1000 = <strong className="text-zinc-100">5 400 zł</strong></p>
        <p><span className="text-yellow-300">LIFO:</span> 100×20 + 150×22 = 2000+3300 = <strong className="text-zinc-100">5 300 zł</strong></p>
      </div>

      <h3>Wariant z pytania 17: 200×25 + 100×23, rozchód 210</h3>
      <div className="card text-sm font-mono space-y-1">
        <p className="text-zinc-400">Stan: 200 × 25 = 5 000, Dostawa: 100 × 23 = 2 300, Razem = 7 300 / 300 szt</p>
        <p className="text-zinc-400">Cena przeciętna = 7300/300 = 24,33 zł</p>
        <p className="border-t border-zinc-700 pt-1"><span className="text-indigo-300">Przeciętna:</span> 24,33 × 210 = <strong className="text-zinc-100">5 109,33 zł</strong> (odpowiedź a w zadaniu 17 to 5103 — błąd w kluczu!)</p>
        <p><span className="text-emerald-300">FIFO:</span> 200×25 + 10×23 = 5000+230 = <strong className="text-zinc-100">5 230 zł</strong> ✓</p>
        <p><span className="text-yellow-300">LIFO:</span> 100×23 + 110×25 = 2300+2750 = <strong className="text-zinc-100">5 050 zł</strong> ✓</p>
      </div>

      <h2>Zapamiętaj</h2>
      <ul>
        <li>Suma (rozchód + stan końcowy) = zawsze taka sama niezależnie od metody</li>
        <li>Przy rosnących cenach: FIFO → najniższy koszt, LIFO → najwyższy koszt</li>
        <li>W Polsce LIFO jest rzadko stosowane (preferuje się FIFO i przeciętną)</li>
      </ul>
    </div>
  )
}
