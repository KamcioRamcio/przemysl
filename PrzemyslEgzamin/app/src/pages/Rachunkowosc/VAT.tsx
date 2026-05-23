export default function VAT() {
  return (
    <div className="prose-custom">
      <h1>Podatek VAT</h1>

      <h2>VAT = podatek od wartości dodanej</h2>
      <p>
        Podatek pośredni pobierany na każdym etapie łańcucha dostaw.
        Ostateczny ciężar ponosi konsument końcowy.
      </p>

      <h2>Dwa typy VAT w księgowości</h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div className="card border-indigo-700">
          <h3 className="text-indigo-300 mt-0">VAT naliczony</h3>
          <ul className="text-sm">
            <li>Związany z <strong>zakupem</strong></li>
            <li>Konto <strong>223</strong> — strona Dt (Wn)</li>
            <li>Potencjalna <strong>należność od US</strong></li>
            <li>Można odliczyć od VAT należnego</li>
          </ul>
        </div>
        <div className="card border-orange-700">
          <h3 className="text-orange-300 mt-0">VAT należny</h3>
          <ul className="text-sm">
            <li>Związany ze <strong>sprzedażą</strong></li>
            <li>Konto <strong>222</strong> — strona Ct (Ma)</li>
            <li>Potencjalne <strong>zobowiązanie wobec US</strong></li>
            <li>Kwota z wystawionej faktury VAT</li>
          </ul>
        </div>
      </div>

      <h2>Rozliczenie miesięczne z US</h2>
      <p>Do <strong>25. dnia każdego miesiąca</strong> firma rozlicza się z Urzędem Skarbowym.</p>
      <p>Bilansuje się konta 222 i 223 za pomocą konta <strong>221 "Rozrachunki z US z tytułu VAT"</strong>:</p>
      <ul>
        <li>VAT należny (222) &gt; VAT naliczony (223) → firma płaci różnicę do US → konto 221 Ct (zobowiązanie)</li>
        <li>VAT naliczony (223) &gt; VAT należny (222) → US zwraca nadpłatę → konto 221 Dt (należność)</li>
      </ul>
      <p className="text-yellow-400 text-sm">⚠ W Polsce można płacić VAT za towar, za który jeszcze nie zapłacono! VAT nie jest kosztem ani stratą.</p>

      <h2>Przykład: zakup i sprzedaż towaru</h2>
      <p className="text-sm text-zinc-400">Kupujemy za 2 000 zł netto (VAT 23% = 460), sprzedajemy za 3 000 zł netto (VAT = 690)</p>

      <h3>Zakup — faktura zakupu (FVZ)</h3>
      <div className="card font-mono text-sm">
        <p>Dt 303/330 Towary ............. 2 000 zł</p>
        <p>Dt 223 VAT naliczony .......... 460 zł</p>
        <p className="border-t border-zinc-700 pt-1">Ct 202 Rozrachunki z dostawcami 2 460 zł</p>
      </div>

      <h3>Sprzedaż — faktura sprzedaży (FVS)</h3>
      <div className="card font-mono text-sm">
        <p>Dt 201 Rozrachunki z odbiorcami 3 690 zł</p>
        <p className="border-t border-zinc-700 pt-1">Ct 730 Sprzedaż towarów .......... 3 000 zł</p>
        <p>Ct 222 VAT należny .............. 690 zł</p>
        <p className="mt-2 text-zinc-400">+ koszt własny sprzedaży:</p>
        <p>Dt 735 Wartość sprzedanych towarów 2 000 zł</p>
        <p>Ct 330 Towary ..................... 2 000 zł</p>
      </div>

      <h3>Rozliczenie z US (do 25. dnia m-ca)</h3>
      <div className="card font-mono text-sm">
        <p className="text-zinc-400">VAT należny: 690 zł, VAT naliczony: 460 zł → do zapłaty: 230 zł</p>
        <p className="mt-2">Dt 222 VAT należny ........ 690 zł</p>
        <p>Ct 223 VAT naliczony ....... 460 zł</p>
        <p>Ct 221 Rozrach. z US-VAT ... 230 zł</p>
        <p className="mt-2 border-t border-zinc-700 pt-1 text-zinc-400">Zapłata do US:</p>
        <p>Dt 221 Rozrach. z US-VAT ... 230 zł</p>
        <p>Ct 131 Rachunek bieżący .... 230 zł</p>
      </div>

      <h2>Przykład tabela — przepływ</h2>
      <table>
        <thead><tr><th>Zdarzenie</th><th>Aktywa</th><th>Pasywa</th><th>Należności</th><th>Zobowiązania</th></tr></thead>
        <tbody>
          <tr><td>Faktura zakupu</td><td>+2 460</td><td>+2 460</td><td>VAT 460</td><td>2 460</td></tr>
          <tr><td>Zapłata za zakup</td><td>−2 460</td><td>−2 460</td><td>VAT 460</td><td>0</td></tr>
          <tr><td>Przeksięg. VAT → US</td><td>0</td><td>0</td><td>VAT US</td><td>0</td></tr>
          <tr><td>Faktura sprzedaży</td><td>+3 690</td><td>+3 690</td><td>3 690</td><td>230 do US</td></tr>
          <tr><td>Zapłata za VAT US</td><td>−230</td><td>−230</td><td>0</td><td>0</td></tr>
        </tbody>
      </table>

      <h2>Wystawianie rachunków vs faktur VAT</h2>
      <ul>
        <li><strong>Faktury VAT</strong> — wystawiają czynni płatnicy VAT (VAT-owcy)</li>
        <li><strong>Rachunki</strong> (bez VAT) — wyłącznie podmioty <strong>nie będące czynnymi płatnikami VAT</strong></li>
        <li>"Mały podatnik" to kryterium kwotowe (poniżej progu obrotu) — nie decyduje o prawie do rachunków</li>
      </ul>
    </div>
  )
}
