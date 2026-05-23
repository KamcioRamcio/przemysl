export default function Leasing() {
  return (
    <div className="prose-custom">
      <h1>Leasing</h1>

      <h2>Definicja</h2>
      <p>
        Leasing to umowa, na mocy której leasingodawca (finansujący) przekazuje leasingobiorcy (korzystającemu)
        prawo do użytkowania składnika aktywów przez określony czas w zamian za opłaty.
      </p>

      <h2>Porównanie: operacyjny vs finansowy</h2>
      <table>
        <thead>
          <tr>
            <th>Cecha</th>
            <th>Leasing operacyjny</th>
            <th>Leasing finansowy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Własność przedmiotu</td>
            <td>Leasingodawcy (finansującego) przez cały czas trwania</td>
            <td>Ekonomicznie — korzystającego</td>
          </tr>
          <tr>
            <td>Ujęcie w bilansie korzystającego</td>
            <td className="text-yellow-300">Pozabilansowo (ewidencja pozabilansowa)</td>
            <td className="text-emerald-300">W bilansie! — Środki Trwałe (aktywa trwałe)</td>
          </tr>
          <tr>
            <td>Amortyzacja</td>
            <td>Amortyzuje leasingodawca</td>
            <td>Amortyzuje korzystający</td>
          </tr>
          <tr>
            <td>Raty leasingowe</td>
            <td>Koszt usługi (402 Usługi obce)</td>
            <td>Wartość netto ŚT + opłaty dodatkowe (odsetki, wynagrodzenie finansującego)</td>
          </tr>
          <tr>
            <td>Charakter umowy</td>
            <td>Umowa usługi / dzierżawy</td>
            <td>Ekonomicznie = nabycie aktywa na kredyt</td>
          </tr>
        </tbody>
      </table>

      <h2>Leasing operacyjny — szczegóły</h2>
      <ul>
        <li>Przedmiot leasingu ujmowany <strong>pozabilansowo</strong> u korzystającego</li>
        <li>Raty leasingowe = koszty usług obcych (konto 402 Dt)</li>
        <li>Korzystający może ale nie musi nabyć przedmiot po zakończeniu umowy</li>
        <li>Ryzyko i korzyści z tytułu posiadania pozostają przy leasingodawcy</li>
      </ul>

      <h2>Leasing finansowy — szczegóły</h2>
      <ul>
        <li>Przedmiot ujmowany w <strong>aktywach trwałych korzystającego</strong> (konto 010)</li>
        <li>Korzystający wykazuje: <strong>wartość netto ŚT</strong> + <strong>wartość opłat dodatkowych</strong> (odsetki do kapitału, wynagrodzenie finansującego)</li>
        <li>Korzystający <strong>umarza i amortyzuje</strong> przedmiot leasingu</li>
        <li>Zobowiązanie leasingowe ujmowane po stronie pasywów</li>
        <li>Ryzyko i korzyści przeniesione na korzystającego</li>
      </ul>

      <h2>Kluczowe rozróżnienie na egzamin</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="card border-yellow-700">
          <p className="font-bold text-yellow-300">Leasing OPERACYJNY</p>
          <p className="text-sm text-zinc-400 mt-1">= pozabilansowo</p>
          <p className="text-sm text-zinc-400">= raty jako koszt usługi</p>
          <p className="text-sm text-zinc-400">= leasingodawca amortyzuje</p>
        </div>
        <div className="card border-emerald-700">
          <p className="font-bold text-emerald-300">Leasing FINANSOWY</p>
          <p className="text-sm text-zinc-400 mt-1">= w bilansie korzystającego jako ŚT</p>
          <p className="text-sm text-zinc-400">= korzystający amortyzuje</p>
          <p className="text-sm text-zinc-400">= raty dzielone na kapitał + odsetki</p>
        </div>
      </div>

      <h2>Rodzaje leasingu — lista</h2>
      <ul>
        <li><strong>Finansowy</strong> ✓</li>
        <li><strong>Operacyjny</strong> ✓</li>
        <li><del>Bierny</del> — nie istnieje</li>
        <li><del>Pozaoperacyjny</del> — nie istnieje</li>
        <li><del>Finansowany</del> — nie istnieje (pułapka egzaminacyjna!)</li>
      </ul>
    </div>
  )
}
