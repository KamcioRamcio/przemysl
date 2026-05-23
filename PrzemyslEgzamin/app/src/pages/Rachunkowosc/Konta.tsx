export default function Konta() {
  return (
    <div className="prose-custom">
      <h1>Konta księgowe</h1>

      <h2>Zasada podwójnego zapisu</h2>
      <p>
        Każda operacja gospodarcza jest księgowana na <strong>co najmniej dwóch kontach</strong>,
        po <strong>przeciwnych stronach</strong>, w <strong>identycznej kwocie</strong>.
        Suma Wn = Suma Ma.
      </p>
      <div className="card mb-4">
        <p className="text-sm font-mono text-zinc-300 text-center">
          Konto = <span className="text-indigo-300">Winien (Wn / Dt / Debet)</span> | <span className="text-orange-300">Ma (Ct / Credit)</span>
        </p>
        <p className="text-xs text-zinc-500 text-center mt-1">lewa strona | prawa strona</p>
      </div>

      <h2>Typy kont</h2>

      <h3>Konta bilansowe</h3>
      <p>Mają saldo BO i BZ. Reprezentują składniki bilansu.</p>
      <table>
        <thead><tr><th>Typ</th><th>Co ewidencjonuje</th><th>Saldo BO</th><th>Zwiększenie</th><th>Zmniejszenie</th></tr></thead>
        <tbody>
          <tr><td><strong>Aktywne</strong></td><td>Aktywa</td><td className="text-indigo-300">Wn (Dt)</td><td className="text-indigo-300">Wn (Dt)</td><td className="text-orange-300">Ma (Ct)</td></tr>
          <tr><td><strong>Pasywne</strong></td><td>Pasywa</td><td className="text-orange-300">Ma (Ct)</td><td className="text-orange-300">Ma (Ct)</td><td className="text-indigo-300">Wn (Dt)</td></tr>
          <tr><td><strong>Aktywno-pasywne</strong></td><td>Rozrachunki (np. VAT, pracownicy)</td><td>Wn lub Ma</td><td>Zależy od salda</td><td>—</td></tr>
        </tbody>
      </table>

      <h3>Konta niebilansowe</h3>
      <p>Brak salda BO/BZ — otwierane i zamykane w ciągu okresu.</p>
      <ul>
        <li><strong>Wynikowe</strong> — koszty (Wn) i przychody (Ma), wchodzą do RZiS → wynik finansowy (860)</li>
        <li><strong>Bezwynikowe (rozliczeniowe)</strong> — nie wpływają na wynik, służą do rozliczania procesów (np. 303 rozliczenie zakupu towarów)</li>
      </ul>

      <h3>Konta pozabilansowe</h3>
      <p>
        Ewidencja jednostronna. Nie trafiają ani do bilansu ani do RZiS.
        Służą do rejestrowania zdarzeń informacyjnych: obce ŚT w używaniu, leasing operacyjny,
        zobowiązania warunkowe.
      </p>

      <h2>Konta syntetyczne vs analityczne</h2>
      <ul>
        <li><strong>Syntetyczne</strong> (np. 202 Rozrachunki z dostawcami) — w księdze głównej, brak wpisów bezpośrednich gdy ma podkonta</li>
        <li><strong>Analityczne</strong> (np. 202-001-Firma XYZ) — szczegółowe zapisy per kontrahent</li>
        <li>Suma sald analitycznych = saldo syntetycznego (zgodność)</li>
      </ul>

      <h2>Konta kosztowe i przychodowe</h2>
      <table>
        <thead><tr><th>Typ</th><th>Stronę Wn</th><th>Strona Ma</th></tr></thead>
        <tbody>
          <tr><td>Konta kosztów (4xx, 5xx, 7x5)</td><td className="text-indigo-300">Zwiększenie kosztu</td><td className="text-orange-300">Zmniejszenie / przeniesienie na 860</td></tr>
          <tr><td>Konta przychodów (7x0, 750, 760)</td><td className="text-indigo-300">Zmniejszenie / przeniesienie</td><td className="text-orange-300">Zwiększenie przychodu</td></tr>
        </tbody>
      </table>

      <h2>Plan kont — Zespoły 0–8</h2>
      <table>
        <thead><tr><th>Zespół</th><th>Nazwa</th><th>Kluczowe konta</th></tr></thead>
        <tbody>
          <tr><td><strong>0</strong></td><td>Aktywa trwałe</td><td>010 ŚT, 020 WNiP, 070 Umorzenie ŚT, 072 Umorzenie WNiP, 080 ŚT w budowie</td></tr>
          <tr><td><strong>1</strong></td><td>Środki pieniężne, rachunki</td><td>100 Kasa, 131 Rachunek bieżący, 137 Kredyt krótkoterm., 138 Kredyt długoterm.</td></tr>
          <tr><td><strong>2</strong></td><td>Rozrachunki i roszczenia</td><td>201 Odbiorcy, 202 Dostawcy, 221 US-VAT, 222 VAT należny, 223 VAT naliczony, 226 US-PIT, 227 ZUS, 231 Wynagrodzenia</td></tr>
          <tr><td><strong>3</strong></td><td>Materiały i towary</td><td>301 Rozlicz. zakupu mat., 303 Rozlicz. zakupu towarów, 310 Materiały, 330 Towary</td></tr>
          <tr><td><strong>4</strong></td><td>Koszty wg rodzaju</td><td>400 Amortyzacja, 401 Zużycie mat. i energii, 402 Usługi obce, 403 Podatki i opłaty, 404 Wynagrodzenia, 405 ZUS, 490 Rozliczenie kosztów</td></tr>
          <tr><td><strong>5</strong></td><td>Koszty wg typów działalności</td><td>501 Produkcja podst., 530 Działalność pomocnicza, 550 Koszty ogólne zarządu</td></tr>
          <tr><td><strong>6</strong></td><td>Produkty i RMK</td><td>601 Wyroby gotowe, 640 Rozliczenia między. kosztów</td></tr>
          <tr><td><strong>7</strong></td><td>Przychody i koszty ich uzysk.</td><td>701 Sprzedaż produktów, 710 Koszt wytworzenia, 730 Sprzedaż towarów, 735 Wartość sprzed. towarów, 740 Sprzedaż mat., 750 Przychody finansowe, 755 Koszty finansowe, 760 PPO, 765 PKO</td></tr>
          <tr><td><strong>8</strong></td><td>Kapitały, fundusze, wynik</td><td>801 Kapitał podstawowy, 802 Kapitał zapasowy, 850 ZFŚS, 860 Wynik finansowy, 870 Podatek dochodowy</td></tr>
        </tbody>
      </table>

      <h2>Obrazek — zasady funkcjonowania kont wynikowych</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <img src="/images/kont_wynikowych.png" alt="Konta wynikowe" className="rounded-lg border border-zinc-700" />
        <img src="/images/kont_wynikowych_2.png" alt="Konta wynikowe 2" className="rounded-lg border border-zinc-700" />
      </div>

      <h2>Obrazek — przykład księgowania</h2>
      <img src="/images/przyklad.png" alt="Przykład" className="rounded-lg border border-zinc-700 mt-2" />

      <h2>Operacje gospodarcze — 4 typy</h2>
      <table>
        <thead><tr><th>Typ</th><th>Aktywa</th><th>Pasywa</th><th>Suma bilansowa</th><th>Przykład</th></tr></thead>
        <tbody>
          <tr><td>+A −A</td><td>jeden ↑ drugi ↓</td><td>bez zmian</td><td>bez zmian</td><td>pobranie gotówki z banku do kasy</td></tr>
          <tr><td>+P −P</td><td>bez zmian</td><td>jeden ↑ drugi ↓</td><td>bez zmian</td><td>przeznaczenie zysku na kapitał zapasowy</td></tr>
          <tr><td>+A +P</td><td>↑</td><td>↑</td><td>rośnie</td><td>zakup towaru na fakturę z odroczonym terminem</td></tr>
          <tr><td>−A −P</td><td>↓</td><td>↓</td><td>maleje</td><td>zapłata zobowiązania z rachunku bankowego</td></tr>
        </tbody>
      </table>

      <h2>Ważne zasady</h2>
      <ul>
        <li>Konto 070 "Umorzenie ŚT" — pasywne, saldo zawsze <strong>Ct (Ma)</strong></li>
        <li>Konto 010 "Środki Trwałe" — aktywne, saldo zawsze <strong>Dt (Wn)</strong></li>
        <li>Konto 860 "Wynik finansowy" — na koniec roku: przeksięgowanie sald kont 7xx</li>
        <li>Nie można usunąć konta jeśli były na nim operacje</li>
        <li>Konta dynamiczne — tworzone dla konkretnych kontrahentów</li>
        <li>Konto 490 — zbiera wszystkie wydatki (rozliczenie kosztów rodzajowych)</li>
        <li>Koszty z zespołu 5 to koszty wg miejsca powstawania</li>
      </ul>
    </div>
  )
}
