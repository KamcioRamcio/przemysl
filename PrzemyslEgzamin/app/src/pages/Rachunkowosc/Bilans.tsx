export default function Bilans() {
  return (
    <div className="prose-custom">
      <h1>Bilans</h1>

      <h2>Definicja</h2>
      <p>
        Bilans to usystematyzowane, dwustronne zestawienie składników aktywów i pasywów
        w jednostkach pieniężnych, sporządzane na określony dzień bilansowy (<strong>dzień bilansowy</strong>).
        Jest obowiązkowym elementem sprawozdania finansowego.
      </p>
      <ul>
        <li><strong>Bilans otwarcia (BO)</strong> — tworzony na początku okresu sprawozdawczego</li>
        <li><strong>Bilans zamknięcia (BZ)</strong> — sporządzany na koniec okresu; jest jednocześnie bilansem otwarcia kolejnego okresu</li>
      </ul>

      <h2>Zasada równowagi</h2>
      <div className="card mb-4 text-center">
        <p className="text-2xl font-bold text-indigo-300 mb-2">SUMA AKTYWÓW = SUMA PASYWÓW</p>
        <p className="text-zinc-400 text-sm">Kapitał własny = Aktywa − Zobowiązania (kapitał obcy)</p>
      </div>

      <h2>Aktywa — co firma posiada lub kontroluje</h2>

      <h3>A. Aktywa trwałe (użytkowanie &gt; 1 rok)</h3>
      <table>
        <thead><tr><th>Składnik</th><th>Przykłady</th><th>Konto</th></tr></thead>
        <tbody>
          <tr><td>I. Wartości niematerialne i prawne</td><td>licencje, patenty, znaki towarowe, goodwill, know-how</td><td>020</td></tr>
          <tr><td>II. Rzeczowe aktywa trwałe — Środki trwałe</td><td>maszyny, budynki, pojazdy, komputery</td><td>010</td></tr>
          <tr><td>II. Rzeczowe aktywa trwałe — ŚT w budowie</td><td>nakłady na budowę jeszcze nieukończoną</td><td>080</td></tr>
          <tr><td>III. Należności długoterminowe</td><td>wymagalne po upływie 12 m-cy od dnia bilansowego</td><td>24x</td></tr>
          <tr><td>IV. Inwestycje długoterminowe</td><td>udziały, akcje, długoterm. papiery wartościowe</td><td>030</td></tr>
        </tbody>
      </table>

      <h3>B. Aktywa obrotowe (cykl operacyjny ≤ 12 m-cy)</h3>
      <table>
        <thead><tr><th>Składnik</th><th>Przykłady</th></tr></thead>
        <tbody>
          <tr><td>I. Zapasy</td><td>materiały (310), towary (330), półprodukty, produkty gotowe</td></tr>
          <tr><td>II. Należności krótkoterminowe</td><td>od odbiorców (201), do 12 m-cy lub z tytułu dostaw</td></tr>
          <tr><td>III. Inwestycje krótkoterminowe</td><td>środki pieniężne (100 Kasa, 131 Rachunek), akcje krótkoterm.</td></tr>
        </tbody>
      </table>

      <h2>Pasywa — skąd pochodzi majątek</h2>

      <h3>A. Kapitał własny</h3>
      <ul>
        <li>Kapitał podstawowy (zakładowy) — konto 801</li>
        <li>Kapitał zapasowy — konto 802</li>
        <li>Zysk/strata z lat ubiegłych</li>
        <li>Zysk/strata netto bieżącego roku — konto 860</li>
      </ul>

      <h3>B. Zobowiązania i rezerwy (kapitał obcy)</h3>
      <ul>
        <li>Rezerwy na zobowiązania</li>
        <li>Zobowiązania długoterminowe (&gt;12 m-cy) — kredyty, leasingi finansowe</li>
        <li>Zobowiązania krótkoterminowe (≤12 m-cy) — zobowiązania wobec dostawców (202), ZUS (227), US, wynagrodzenia (231)</li>
      </ul>

      <h2>Obrazek — struktura bilansu</h2>
      <img src="/images/bilans.png" alt="Schemat bilansu" className="rounded-lg border border-zinc-700 max-w-full" />

      <h2>Przykład obliczania Kapitału Własnego</h2>
      <div className="card">
        <p className="text-sm text-zinc-300 mb-3">Dane:</p>
        <ul className="text-sm">
          <li>Środki trwałe — wartość netto: <strong className="text-zinc-100">20 000 zł</strong> (wartość pocz. 30 000 − umorzenie 10 000)</li>
          <li>Aktywa obrotowe: <strong className="text-zinc-100">40 000 zł</strong> (należności 10k + środki pieniężne 20k + towary 10k)</li>
          <li>Zobowiązania wobec dostawców: <strong className="text-zinc-100">20 000 zł</strong></li>
          <li>Kredyty bankowe krótkoterminowe: <strong className="text-zinc-100">5 000 zł</strong></li>
        </ul>
        <div className="mt-4 p-3 bg-zinc-800 rounded-lg">
          <p className="text-sm text-zinc-300">Suma aktywów = 20 000 + 40 000 = <strong className="text-indigo-300">60 000 zł</strong></p>
          <p className="text-sm text-zinc-300">Kapitał własny = 60 000 − 20 000 − 5 000 = <strong className="text-emerald-300">35 000 zł</strong></p>
        </div>
      </div>

      <h2>Kluczowe pojęcia na egzamin</h2>
      <ul>
        <li><strong>Aktywa trwałe</strong> — długotrwałe w użytkowaniu lub wyłączone z obrotu, trudno spieniężyć</li>
        <li><strong>Aktywa obrotowe</strong> — szybko zmieniają postać (łatwo spieniężyć)</li>
        <li><strong>Majątek trwały</strong> trudno spieniężyć, <strong>majątek obrotowy</strong> łatwo</li>
        <li>Kapitały obce = kredyty, zobowiązania, leasingi</li>
        <li>Jeśli aktywa = 65 000 zł, to pasywa = 65 000 zł (zasada równowagi)</li>
        <li>Jeśli znamy aktywa i zobowiązania, możemy obliczyć KW</li>
      </ul>
    </div>
  )
}
