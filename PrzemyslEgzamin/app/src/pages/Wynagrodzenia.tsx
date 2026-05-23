import { useState } from 'react'

export default function Wynagrodzenia() {
  const [brutto, setBrutto] = useState(5000)
  const [podwyszonKUP, setPodwyszonKUP] = useState(false)

  // Składki społeczne pracownika
  const emerPrac = brutto * 0.0976
  const rentPrac = brutto * 0.015
  const chorPrac = brutto * 0.0245
  const skladkiSpoleczne = emerPrac + rentPrac + chorPrac

  // Podstawa zdrowotna
  const podstawaZdrowotna = brutto - skladkiSpoleczne
  const zdrowotna = podstawaZdrowotna * 0.09

  // Podatek
  const kup = podwyszonKUP ? 300 : 250
  const dochod = Math.round(brutto - skladkiSpoleczne - kup)
  const zaliczkaBrutto = dochod * 0.12
  const ulga = 300
  const zaliczka = Math.max(0, Math.round(zaliczkaBrutto - ulga))

  const netto = brutto - skladkiSpoleczne - zdrowotna - zaliczka

  // Koszt pracodawcy
  const emerPrac2 = brutto * 0.0976
  const rentPrac2 = brutto * 0.065
  const wypadk = brutto * 0.018
  const fp = brutto * 0.0245
  const fgssp = brutto * 0.001
  const kosztPracodawcy = brutto + emerPrac2 + rentPrac2 + wypadk + fp + fgssp

  return (
    <div className="prose-custom">
      <h1>Wynagrodzenia i składki ZUS</h1>

      <h2>Składki płacone przez PRACODAWCĘ (koszt dodatkowy)</h2>
      <table>
        <thead><tr><th>Składka</th><th>Stawka</th><th>Uwaga</th></tr></thead>
        <tbody>
          <tr><td>Emerytalna</td><td className="text-indigo-300 font-bold">9,76%</td><td>50/50 z pracownikiem — po równo</td></tr>
          <tr><td>Rentowa</td><td className="text-indigo-300 font-bold">6,50%</td><td>Pracodawca płaci WIĘCEJ niż pracownik (1,5%)</td></tr>
          <tr><td>Wypadkowa</td><td className="text-indigo-300 font-bold">1,67–1,8%</td><td>Zależy od branży (max 3,33%)</td></tr>
          <tr><td>Fundusz Pracy (FP)</td><td className="text-indigo-300 font-bold">2,45%</td><td>—</td></tr>
          <tr><td>FGŚP</td><td className="text-indigo-300 font-bold">0,10%</td><td>Fundusz Gwarantowanych Świadczeń Pracowniczych</td></tr>
        </tbody>
      </table>

      <h2>Składki potrącane z wynagrodzenia PRACOWNIKA</h2>
      <table>
        <thead><tr><th>Składka</th><th>Stawka</th><th>Odliczenie od podatku</th></tr></thead>
        <tbody>
          <tr><td>Emerytalna</td><td className="text-orange-300 font-bold">9,76%</td><td>Tak (odliczana od podstawy)</td></tr>
          <tr><td>Rentowa</td><td className="text-orange-300 font-bold">1,50%</td><td>Tak</td></tr>
          <tr><td>Chorobowa</td><td className="text-orange-300 font-bold">2,45%</td><td>Tak</td></tr>
          <tr><td>Zdrowotna</td><td className="text-orange-300 font-bold">9,00%</td><td className="text-red-400 font-bold">NIE — od 2022 r. nieodliczalna</td></tr>
        </tbody>
      </table>

      <h2>Koszty uzyskania przychodu (KUP)</h2>
      <table>
        <thead><tr><th>Typ</th><th>Miesięcznie</th><th>Rocznie (1 etat)</th><th>Warunek</th></tr></thead>
        <tbody>
          <tr><td>Podstawowe</td><td>250 zł</td><td>3 000 zł</td><td>Praca w tej samej miejscowości</td></tr>
          <tr><td>Podwyższone</td><td>300 zł</td><td>3 600 zł</td><td>Dojazd z innej miejscowości + oświadczenie</td></tr>
        </tbody>
      </table>

      <h2>Podatek dochodowy (PIT)</h2>
      <ul>
        <li>Stawka <strong>12%</strong> do 120 000 zł dochodu rocznego</li>
        <li>Stawka <strong>32%</strong> powyżej 120 000 zł</li>
        <li>Kwota wolna od podatku: <strong>30 000 zł/rok</strong></li>
        <li>Miesięczna ulga podatkowa: <strong>300 zł</strong> (od zaliczki) — tylko jedno źródło dochodu</li>
        <li>Podstawa opodatkowania = brutto − składki społeczne − KUP (zaokrąglona do zł)</li>
      </ul>

      <h2>Kalkulator wynagrodzeń</h2>
      <div className="card mb-4">
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-xs text-zinc-400 mb-1 block">Wynagrodzenie brutto (zł)</label>
            <input
              type="number"
              value={brutto}
              onChange={e => setBrutto(+e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-1.5 text-sm text-zinc-100"
            />
          </div>
          <div className="flex items-end">
            <label className="flex items-center gap-2 cursor-pointer text-sm text-zinc-300">
              <input
                type="checkbox"
                checked={podwyszonKUP}
                onChange={e => setPodwyszonKUP(e.target.checked)}
                className="w-4 h-4"
              />
              Podwyższone KUP (dojeżdżający)
            </label>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-zinc-300">
            <span>Wynagrodzenie brutto</span>
            <span className="font-mono text-zinc-100">{brutto.toFixed(2)} zł</span>
          </div>
          <div className="border-t border-zinc-800 pt-2 text-zinc-400 text-xs uppercase tracking-wider">Składki pracownika (od brutto)</div>
          <div className="flex justify-between text-zinc-400">
            <span>  Emerytalna (9,76%)</span>
            <span className="font-mono">−{emerPrac.toFixed(2)} zł</span>
          </div>
          <div className="flex justify-between text-zinc-400">
            <span>  Rentowa (1,5%)</span>
            <span className="font-mono">−{rentPrac.toFixed(2)} zł</span>
          </div>
          <div className="flex justify-between text-zinc-400">
            <span>  Chorobowa (2,45%)</span>
            <span className="font-mono">−{chorPrac.toFixed(2)} zł</span>
          </div>
          <div className="flex justify-between text-zinc-300 font-medium">
            <span>  Składki społeczne razem</span>
            <span className="font-mono">−{skladkiSpoleczne.toFixed(2)} zł</span>
          </div>
          <div className="flex justify-between text-zinc-400">
            <span>  Zdrowotna 9% × {podstawaZdrowotna.toFixed(2)}</span>
            <span className="font-mono">−{zdrowotna.toFixed(2)} zł</span>
          </div>
          <div className="border-t border-zinc-800 pt-2 text-zinc-400 text-xs uppercase tracking-wider">Podatek</div>
          <div className="flex justify-between text-zinc-400">
            <span>  KUP ({podwyszonKUP ? 'podwyższone' : 'podstawowe'})</span>
            <span className="font-mono">−{kup} zł</span>
          </div>
          <div className="flex justify-between text-zinc-400">
            <span>  Dochód do opodatkowania</span>
            <span className="font-mono">{dochod} zł</span>
          </div>
          <div className="flex justify-between text-zinc-400">
            <span>  Zaliczka PIT (12% − ulga 300)</span>
            <span className="font-mono">−{zaliczka} zł</span>
          </div>
          <div className="border-t border-zinc-700 pt-2 flex justify-between font-bold text-lg">
            <span className="text-zinc-100">NETTO</span>
            <span className="font-mono text-emerald-400">{netto.toFixed(2)} zł</span>
          </div>
          <div className="border-t border-zinc-800 pt-2 flex justify-between text-zinc-400">
            <span>Całkowity koszt pracodawcy</span>
            <span className="font-mono text-indigo-300">{kosztPracodawcy.toFixed(2)} zł</span>
          </div>
        </div>
      </div>

      <h2>Składki pracodawcy — stawki do zapamiętania</h2>
      <div className="card">
        <p className="font-mono text-sm text-zinc-300">Emerytalna: <strong>9,76%</strong> (tyle samo co pracownik)</p>
        <p className="font-mono text-sm text-zinc-300">Rentowa: <strong>6,5%</strong> (pracownik tylko 1,5%)</p>
        <p className="font-mono text-sm text-zinc-300">Wypadkowa: <strong>1,67%</strong> (lub 1,8% na wykładzie)</p>
        <p className="font-mono text-sm text-zinc-300">FP: <strong>2,45%</strong></p>
        <p className="font-mono text-sm text-zinc-300">FGŚP: <strong>0,10%</strong></p>
        <p className="font-mono text-sm text-zinc-300 mt-2 border-t border-zinc-700 pt-2">
          Pracodawca <strong className="text-indigo-300">NIE</strong> płaci: zdrowotnej, chorobowej
        </p>
      </div>

      <h2>Spółki — odpowiedzialność</h2>
      <table>
        <thead><tr><th>Typ spółki</th><th>Odpowiedzialność właściciela</th></tr></thead>
        <tbody>
          <tr><td>Spółka cywilna (umowa KC)</td><td>Solidarna, nieograniczona, majątkiem osobistym</td></tr>
          <tr><td>Spółka komandytowa — komplementariusz</td><td>Nieograniczona</td></tr>
          <tr><td>Spółka komandytowa — komandytariusz</td><td>Do wysokości sumy komandytowej</td></tr>
          <tr><td>Spółka z o.o.</td><td>Tylko do wysokości wkładu własnego (nie odpowiada osobiście)</td></tr>
        </tbody>
      </table>
    </div>
  )
}
