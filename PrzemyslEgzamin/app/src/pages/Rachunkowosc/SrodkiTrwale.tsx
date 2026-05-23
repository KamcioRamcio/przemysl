export default function SrodkiTrwale() {
  return (
    <div className="prose-custom">
      <h1>Środki trwałe i amortyzacja</h1>

      <h2>Definicja środków trwałych</h2>
      <p>
        Rzeczowe aktywa trwałe (i zrównane z nimi prawa) o:
      </p>
      <ul>
        <li>przewidywanym <strong>okresie użyteczności &gt; 1 rok</strong></li>
        <li>przeznaczone do <strong>użytkowania na potrzeby jednostki</strong> (nie do sprzedaży)</li>
        <li>kompletne i zdatne do użytku</li>
      </ul>

      <h2>Kluczowe pojęcia</h2>
      <table>
        <thead><tr><th>Pojęcie</th><th>Wyjaśnienie</th><th>Konto</th></tr></thead>
        <tbody>
          <tr><td><strong>Wartość początkowa (Wp)</strong></td><td>Cena nabycia / koszt wytworzenia — podstawa amortyzacji</td><td>010</td></tr>
          <tr><td><strong>Umorzenie</strong></td><td>Korekta wartości (skumulowane odpisy) — konto pasywne</td><td>070 (Ma)</td></tr>
          <tr><td><strong>Amortyzacja</strong></td><td>Koszt zużycia w danym okresie</td><td>400 (Dt)</td></tr>
          <tr><td><strong>Wartość netto</strong></td><td>Wp − umorzenie</td><td>—</td></tr>
        </tbody>
      </table>
      <p>Kwota umorzenia = kwota amortyzacji (ta sama kwota, inne ujęcie)</p>

      <h2>Kiedy zaczynać amortyzację?</h2>
      <div className="card border-indigo-700">
        <p className="text-indigo-300 font-bold">Od 1. dnia miesiąca następującego po miesiącu oddania do użytkowania</p>
        <p className="text-sm text-zinc-400 mt-2">Przykład: oddano do użytkowania 20 lipca → amortyzacja od 1 sierpnia</p>
        <p className="text-sm text-zinc-400">Koniec amortyzacji: w miesiącu zrównania odpisów z wartością początkową lub likwidacji</p>
      </div>

      <h2>Próg wartości</h2>
      <table>
        <thead><tr><th>Wartość</th><th>Możliwości</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>do 10 000 zł</strong></td>
            <td>
              1. Jednorazowy odpis w m-cu oddania (400 Dt, 070 Ct)<br/>
              2. Amortyzacja na zasadach ogólnych<br/>
              3. Bezpośrednio w koszty (401 wyposażenie) — nie wprowadza się do ewidencji ŚT
            </td>
          </tr>
          <tr>
            <td><strong>powyżej 10 000 zł</strong></td>
            <td>Obowiązkowo ŚT, amortyzacja "w czasie" wg stawek</td>
          </tr>
        </tbody>
      </table>
      <p className="text-yellow-400 text-sm">⚠ Stary próg = 3 500 zł (przed 2018 r.). Aktualny = 10 000 zł.</p>

      <h2>Metody amortyzacji</h2>

      <h3>1. Liniowa (najprostsza)</h3>
      <div className="card font-mono text-sm">
        <p>Roczny odpis (Ar) = Wp × stawka (%)</p>
        <p>Miesięczny odpis (Am) = Ar / 12</p>
        <p className="text-zinc-400 mt-2">Przykład: Wp = 20 000 zł, stawka 20%</p>
        <p>Ar = 20 000 × 20% = 4 000 zł/rok</p>
        <p>Am = 4 000 / 12 = 333,33 zł/m-c</p>
        <p>Okres amortyzacji = 100% / 20% = 5 lat</p>
        <p className="text-zinc-400 mt-2">Oddano do użytkowania w kwietniu 2017:</p>
        <p>W 2017: maj–grudzień = 8 miesięcy × 333,33 = 2 666,64 zł</p>
      </div>

      <h3>2. Degresywna (przyspieszona)</h3>
      <ul>
        <li>Podwyższona stawka (mnożnik ≤ 2) od <strong>wartości netto na początku roku</strong></li>
        <li>Gdy odpis roczny spadnie poniżej kwoty liniowej → <strong>przejście na metodę liniową</strong></li>
        <li>Dotyczy grup KŚT 3–8 (bez samochodów osobowych)</li>
      </ul>

      <h3>3. Jednorazowy odpis</h3>
      <ul>
        <li>ŚT do 10 000 zł</li>
        <li>Dla małych podatników i rozpoczynających działalność</li>
        <li>Cała wartość w koszty w m-cu oddania do użytkowania</li>
      </ul>

      <h2>Klasyfikacja KŚT (grupy)</h2>
      <table>
        <thead><tr><th>Grupa</th><th>Nazwa</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>Grunty</td></tr>
          <tr><td>1</td><td>Budynki i lokale</td></tr>
          <tr><td>2</td><td>Obiekty inżynierii lądowej i wodnej</td></tr>
          <tr><td>3</td><td>Kotły i maszyny energetyczne</td></tr>
          <tr><td>4</td><td>Maszyny, urządzenia i aparaty ogólnego zastosowania</td></tr>
          <tr><td>5</td><td>Maszyny specjalistyczne</td></tr>
          <tr><td>6</td><td>Urządzenia techniczne</td></tr>
          <tr><td>7</td><td>Środki transportu</td></tr>
          <tr><td>8</td><td>Narzędzia, przyrządy, ruchomości i wyposażenie</td></tr>
          <tr><td>9</td><td>Inwentarz żywy</td></tr>
        </tbody>
      </table>

      <h2>Dokumenty ŚT</h2>
      <ul>
        <li><strong>OT</strong> — Przyjęcie środka trwałego (oddanie do użytkowania)</li>
        <li><strong>LT</strong> — Likwidacja środka trwałego</li>
        <li><strong>PT</strong> — Protokół zdawczo-odbiorczy (przekazanie)</li>
        <li><strong>MT</strong> — Zmiana miejsca użytkowania</li>
      </ul>

      <h2>Wartości niematerialne i prawne (WNiP)</h2>
      <p>Konto 020, umorzenie 072. Amortyzacja analogiczna jak ŚT.</p>
      <ul>
        <li>Licencje, patenty, wynalazki, znaki towarowe</li>
        <li>Know-how, wartość firmy (goodwill)</li>
        <li>Koszty zakończonych prac rozwojowych</li>
        <li><strong>NIE są WNiP:</strong> cła, akcyza, opłaty celne</li>
      </ul>

      <h2>Wskaźniki rentowności</h2>
      <table>
        <thead><tr><th>Wskaźnik</th><th>Wzór</th><th>Co mierzy</th></tr></thead>
        <tbody>
          <tr><td><strong>ROE</strong> (Return on Equity)</td><td>Zysk netto / Kapitał własny</td><td>Efektywność z perspektywy właściciela</td></tr>
          <tr><td><strong>ROA</strong> (Return on Assets)</td><td>Zysk netto / Aktywa ogółem</td><td>Efektywność wszystkich zasobów (w tym długu)</td></tr>
        </tbody>
      </table>
      <p>Różnica ROE − ROA = efekt dźwigni finansowej (udział długu w finansowaniu).</p>
    </div>
  )
}
