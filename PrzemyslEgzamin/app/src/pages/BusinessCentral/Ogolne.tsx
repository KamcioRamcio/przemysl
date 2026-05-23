export default function BCOgolne() {
  return (
    <div className="prose-custom">
      <h1>Business Central — Ogólne</h1>

      <h2>Historia i produkty Microsoft Dynamics</h2>
      <ul>
        <li>1995 — Navision Financials (duńska firma Navision)</li>
        <li>2002 — Microsoft przejmuje Navision → Microsoft Business Solutions</li>
        <li>2003–2018 — Microsoft Dynamics NAV (wersje: NAV 5.0, 2009, 2013, 2015, 2016, 2017, 2018)</li>
        <li>2018+ — Microsoft Dynamics 365 Business Central (cloud-first, rozszerzenia AL)</li>
        <li>Ponad <strong>170 000 firm</strong>, 195 krajów, 3 000 000 użytkowników</li>
      </ul>

      <h2>Typy obiektów NAV / BC</h2>
      <table>
        <thead><tr><th>Typ</th><th>Cel</th><th>Uwagi</th></tr></thead>
        <tbody>
          <tr><td><strong>Table</strong></td><td>Przechowywanie danych</td><td>Składa się z pól, kluczy, triggerów</td></tr>
          <tr><td><strong>Page</strong></td><td>Prezentacja danych (UI)</td><td>Niezależna od urządzenia; typy: Card, List, Worksheet, RoleCenter, ListPart</td></tr>
          <tr><td><strong>Codeunit</strong></td><td>Logika biznesowa i metody wielokrotnego użytku</td><td>Zalecane miejsce na kod</td></tr>
          <tr><td><strong>Report</strong></td><td>Generowanie raportów, druk</td><td>Zawiera DataItemy (max <strong>500</strong>)</td></tr>
          <tr><td><strong>Query</strong></td><td>Wyciąganie danych z wielu tabel</td><td>Analogia do SQL JOIN/VIEW</td></tr>
          <tr><td><strong>XMLport</strong></td><td>Import/eksport XML lub TXT</td><td>—</td></tr>
          <tr><td><strong>MenuSuite</strong></td><td>Nawigacja w menu (NAV)</td><td>Zastąpiony przez Profile w BC</td></tr>
          <tr><td><strong>Page Extension</strong></td><td>Rozszerzenie istniejącej strony</td><td>BC — bez modyfikacji kodu bazowego</td></tr>
          <tr><td><strong>Table Extension</strong></td><td>Dodawanie pól do istniejącej tabeli</td><td>BC — model rozszerzeń</td></tr>
        </tbody>
      </table>

      <h2>Zakresy ID obiektów</h2>
      <table>
        <thead><tr><th>Zakres</th><th>Przeznaczenie</th></tr></thead>
        <tbody>
          <tr><td>0 – 49 999</td><td>Microsoft (base app)</td></tr>
          <tr><td><strong>50 000 – 99 999</strong></td><td>Customizacje partnerów i deweloperów</td></tr>
          <tr><td>100 000 – 999 999</td><td>Lokalizacje krajowe Microsoft</td></tr>
          <tr><td>1 000 000 – 69 999 999</td><td>Registered Solution Program (RSP)</td></tr>
        </tbody>
      </table>

      <h2>Ważne właściwości tabel</h2>
      <table>
        <thead><tr><th>Właściwość</th><th>Wartość domyślna</th><th>Znaczenie</th></tr></thead>
        <tbody>
          <tr><td><strong>DataPerCompany</strong></td><td>Yes (true)</td><td>Yes = dane oddzielne per firma; No = dane wspólne dla wszystkich firm w bazie</td></tr>
          <tr><td><strong>DataCaptionFields</strong></td><td>—</td><td>Pola wyświetlane na pasku tytułu okna</td></tr>
          <tr><td><strong>LookupPageID</strong></td><td>—</td><td>Strona używana przy lookupu z innej tabeli</td></tr>
        </tbody>
      </table>

      <div className="card border-yellow-700 mb-4">
        <p className="text-yellow-300 font-bold">Kluczowy punkt egzaminacyjny</p>
        <p className="text-sm text-zinc-300 mt-1">
          <strong>Obiekty</strong> (tabele, raporty, strony, kody) są wspólne dla całej bazy — modyfikacja obiektu
          jest widoczna <strong>we wszystkich firmach</strong>.
        </p>
        <p className="text-sm text-zinc-300 mt-1">
          <strong>Dane</strong> (rekordy) — zależą od DataPerCompany:
          domyślnie Yes = każda firma ma swoje dane (np. Customer).
        </p>
      </div>

      <h2>Metodyka Sure Step — fazy wdrożenia</h2>
      <p>Microsoft Sure Step to metodyka wdrażania systemów Dynamics. Składa się z 6 etapów:</p>

      <table>
        <thead><tr><th>Etap</th><th>Cele</th><th>Typowe działania</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>1. Diagnoza</strong></td>
            <td>Wstępne rozpoznanie potrzeb klienta, ocena fit produktu</td>
            <td>Demo produktu, analiza high-level, wycena projektu</td>
          </tr>
          <tr>
            <td><strong>2. Analiza</strong></td>
            <td>Szczegółowe wymagania, mapowanie procesów, gap analysis, opracowanie strategii migracji, określenie wymagań infrastruktury</td>
            <td>Warsztaty, dokumentacja wymagań, AS-IS → TO-BE</td>
          </tr>
          <tr>
            <td><strong>3. Projekt</strong></td>
            <td>Projektowanie rozwiązania, konfiguracja standardowa, próbny import danych</td>
            <td>Design architektury, projekt modyfikacji, projekt integracji</td>
          </tr>
          <tr>
            <td><strong>4. Budowa</strong></td>
            <td>Zakończenie budowy wszystkich komponentów, pełna wersja testowa</td>
            <td>Implementacja modyfikacji, testy wewnętrzne (unit, integracyjne)</td>
          </tr>
          <tr>
            <td><strong>5. Wdrożenie / Uruchomienie</strong></td>
            <td>Testy akceptacyjne (UAT), szkolenia użytkowników końcowych, finalna migracja danych</td>
            <td>UAT, szkolenia, go-live plan, cut-over</td>
          </tr>
          <tr>
            <td><strong>6. Utrzymanie</strong></td>
            <td>Wsparcie po wdrożeniu (hypercare), podsumowanie projektu</td>
            <td>Helpdesk, optymalizacja, closure</td>
          </tr>
        </tbody>
      </table>

      <h2>Moduły ERP / BC</h2>
      <ul>
        <li>Finanse i księgowość (FK) — moduł finansowo-księgowy, plan kont</li>
        <li>Sprzedaż i należności</li>
        <li>Zakupy i zobowiązania</li>
        <li>Magazyn i zarządzanie zapasami</li>
        <li>Produkcja (planowanie, MRP)</li>
        <li>Projekty</li>
        <li>CRM (zarządzanie relacjami z klientami)</li>
        <li>Kadry i Płace (HR)</li>
        <li>Analizy i raportowanie</li>
      </ul>

      <h2>Rodzaje licencji użytkownika BC</h2>
      <ul>
        <li><strong>Full User</strong> — pełny dostęp do wszystkich modułów</li>
        <li><strong>Team Member</strong> — ograniczony dostęp (odczyt, uproszczone zadania)</li>
        <li><strong>External Accountant</strong> — dla zewnętrznych księgowych</li>
      </ul>
    </div>
  )
}
