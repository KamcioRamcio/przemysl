export default function RZiS() {
  return (
    <div className="prose-custom">
      <h1>Rachunek Zysków i Strat (RZiS)</h1>

      <h2>Definicja</h2>
      <p>
        Obligatoryjny element sprawozdania finansowego. Informuje o efektywności poszczególnych
        rodzajów działalności i ogólnym wyniku finansowym (zysk/strata) w danym okresie.
        Sporządzany za <strong>okres sprawozdawczy</strong> (rok, kwartał).
      </p>
      <p>
        Konto <strong>860 "Wynik finansowy"</strong> — wynik ustalany przez przeksięgowanie
        sald kont przychodów i kosztów na koniec okresu.
      </p>

      <h2>Ogólny schemat RZiS</h2>
      <img src="/images/schemat_zyskow.png" alt="Schemat Rachunku Zysków i Strat" className="rounded-lg border border-zinc-700 mb-4" />

      <h2>Uproszczony schemat — krok po kroku</h2>
      <div className="card font-mono text-sm space-y-1">
        <p className="text-zinc-300">+ Przychody ze sprzedaży (produkty/towary/usługi)</p>
        <p className="text-zinc-400">− Koszty sprzedanych produktów/towarów/usług</p>
        <p className="text-zinc-400">− Koszty ogólne zarządu i sprzedaży</p>
        <p className="border-t border-zinc-700 pt-1 font-bold text-indigo-300">= WYNIK ZE SPRZEDAŻY</p>
        <p className="text-zinc-300">+ Pozostałe przychody operacyjne (PPO)</p>
        <p className="text-zinc-400">− Pozostałe koszty operacyjne (PKO)</p>
        <p className="border-t border-zinc-700 pt-1 font-bold text-indigo-300">= WYNIK Z DZIAŁALNOŚCI OPERACYJNEJ</p>
        <p className="text-zinc-300">+ Przychody finansowe</p>
        <p className="text-zinc-400">− Koszty finansowe</p>
        <p className="border-t border-zinc-700 pt-1 font-bold text-indigo-300">= WYNIK FINANSOWY BRUTTO</p>
        <p className="text-zinc-400">− Podatek dochodowy</p>
        <p className="border-t border-zinc-700 pt-1 font-bold text-emerald-300">= WYNIK FINANSOWY NETTO (zysk/strata)</p>
      </div>

      <h2>4 typy działalności</h2>

      <h3>1. Podstawowa działalność operacyjna</h3>
      <p>Cel wpisany w akcie założycielskim firmy.</p>
      <table>
        <thead><tr><th>Przychody (konta 7x0)</th><th>Koszty (konta 4xx, 5xx, 7x5)</th></tr></thead>
        <tbody>
          <tr><td>Sprzedaż produktów (701)</td><td>Koszt wytworzenia sprzedanych produktów (710)</td></tr>
          <tr><td>Sprzedaż towarów (730)</td><td>Wartość sprzedanych towarów po cenach zakupu (735)</td></tr>
          <tr><td>Sprzedaż materiałów (740)</td><td>Koszty sprzedaży, koszty zarządu (550)</td></tr>
        </tbody>
      </table>

      <h3>2. Pozostała działalność operacyjna</h3>
      <p>Niezwiązana z głównym profilem, ale operacyjna.</p>
      <table>
        <thead><tr><th>Przychody (760)</th><th>Koszty (765)</th></tr></thead>
        <tbody>
          <tr><td>Sprzedaż ŚT/WNiP</td><td>Wartość sprzedanych ŚT/WNiP</td></tr>
          <tr><td>Otrzymane kary, odszkodowania</td><td>Zapłacone kary, grzywny, odszkodowania</td></tr>
          <tr><td>Darowizny, dotacje</td><td>Darowizny przekazane</td></tr>
          <tr><td>Zdarzenia losowe — zyski</td><td>Zdarzenia losowe — straty</td></tr>
          <tr><td>Umorzone zobowiązania operacyjne</td><td>Przedawnione/nieściągalne należności</td></tr>
          <tr><td>Nadwyżki inwentaryzacyjne</td><td>Niedobory i szkody</td></tr>
        </tbody>
      </table>

      <h3>3. Działalność finansowa</h3>
      <p>Skutki pożyczania i inwestowania środków pieniężnych.</p>
      <table>
        <thead><tr><th>Przychody finansowe (750)</th><th>Koszty finansowe (755)</th></tr></thead>
        <tbody>
          <tr><td>Odsetki od lokat/rachunków</td><td>Odsetki i prowizje od kredytów</td></tr>
          <tr><td>Dywidendy</td><td>Odsetki za nieterminową zapłatę</td></tr>
          <tr><td>Sprzedaż papierów wartościowych/udziałów</td><td>Sprzedaż (strata) udziałów/obligacji</td></tr>
          <tr><td>Umorzone kredyty/pożyczki</td><td>Ujemne różnice kursowe</td></tr>
          <tr><td>Dodatnie różnice kursowe</td><td>—</td></tr>
          <tr><td>Odsetki za nieterminową regulację należności</td><td>—</td></tr>
        </tbody>
      </table>

      <h2>Wynik finansowy brutto vs netto</h2>
      <ul>
        <li><strong>Wynik brutto</strong> = wynik z działalności operacyjnej + saldo finansowe (± nadzwyczajne) — <span className="text-yellow-400">pozycja w RZiS, nie w bilansie!</span></li>
        <li><strong>Wynik netto</strong> = brutto − podatek dochodowy → trafia do bilansu (pasywa, kapitał własny)</li>
        <li>Wynik brutto = <strong>wynik finansowy brutto</strong> (inne nazwy tego samego)</li>
      </ul>

      <h2>Kluczowe pytania egzaminacyjne</h2>
      <div className="space-y-3">
        <div className="card">
          <p className="text-sm font-medium text-zinc-100">Naliczone odsetki od rachunku bankowego = ?</p>
          <p className="text-sm text-zinc-400 mt-1">→ Przychody finansowe (750), NIE pozostałe operacyjne</p>
        </div>
        <div className="card">
          <p className="text-sm font-medium text-zinc-100">Umorzone/nieściągalne należności = ?</p>
          <p className="text-sm text-zinc-400 mt-1">→ Pozostałe koszty operacyjne (765)</p>
        </div>
        <div className="card">
          <p className="text-sm font-medium text-zinc-100">Przedawnione/umorzone zobowiązania operacyjne = ?</p>
          <p className="text-sm text-zinc-400 mt-1">→ Pozostałe przychody operacyjne (760)</p>
        </div>
        <div className="card">
          <p className="text-sm font-medium text-zinc-100">Ujemne różnice kursowe = ?</p>
          <p className="text-sm text-zinc-400 mt-1">→ Koszty finansowe (755), NIE przychody finansowe</p>
        </div>
        <div className="card">
          <p className="text-sm font-medium text-zinc-100">Wynik brutto = pozycja na bilansie czy RZiS?</p>
          <p className="text-sm text-zinc-400 mt-1">→ Na RZiS! Wynik netto (po podatku) trafia do bilansu jako składnik KW.</p>
        </div>
      </div>

      <h2>CF (Przepływy pieniężne) — interpretacja</h2>
      <table>
        <thead><tr><th>CF operacyjne</th><th>CF inwestycyjne</th><th>CF finansowe</th><th>Interpretacja</th></tr></thead>
        <tbody>
          <tr><td className="text-emerald-400">+</td><td className="text-red-400">−</td><td className="text-red-400">−</td><td>Zdrowa firma: zysk operacyjny finansuje inwestycje i spłatę długów</td></tr>
          <tr><td className="text-red-400">−</td><td className="text-red-400">−</td><td className="text-emerald-400">+</td><td>Firma korzysta z zewnętrznego finansowania — ryzyko</td></tr>
          <tr><td className="text-red-400">−</td><td className="text-emerald-400">+</td><td className="text-red-400">−</td><td>Firma upłynnia majątek trwały — bardzo ryzykowne</td></tr>
        </tbody>
      </table>
    </div>
  )
}
