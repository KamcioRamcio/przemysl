export default function ERP() {
  return (
    <div className="prose-custom">
      <h1>Systemy ERP</h1>

      <h2>Definicja ERP</h2>
      <p>
        <strong>ERP (Enterprise Resource Planning)</strong> — planowanie zasobów przedsiębiorstwa.
        System informatyczny będący zbiorem współpracujących aplikacji (modułów) integrujących
        działania przedsiębiorstwa na wszystkich szczeblach i obszarach zarządzania.
      </p>

      <h2>Cele systemów ERP</h2>
      <ul>
        <li>Optymalne wykorzystanie zasobów</li>
        <li>Uporządkowanie procesów biznesowych</li>
        <li>Dostarczanie kierownictwu informacji do podejmowania decyzji</li>
        <li>Główny cel wdrożenia: <strong>wzrost efektywności (dochodowości) firmy</strong></li>
      </ul>

      <h2>Moduły systemów ERP</h2>
      <table>
        <thead><tr><th>Moduł</th><th>Funkcje</th></tr></thead>
        <tbody>
          <tr><td>Finanse i Księgowość (FK)</td><td>Plan kont, księgowanie, sprawozdania finansowe, środki trwałe</td></tr>
          <tr><td>Sprzedaż i Należności</td><td>Oferty, zamówienia sprzedaży, faktury, CRM</td></tr>
          <tr><td>Zakupy i Zobowiązania</td><td>Zamówienia zakupu, faktury zakupu, dostawcy</td></tr>
          <tr><td>Magazyn</td><td>Kartoteki zapasów, przyjęcia, wydania, inwentaryzacja</td></tr>
          <tr><td>Produkcja</td><td>Planowanie produkcji, BOM, zlecenia produkcyjne, MRP</td></tr>
          <tr><td>Projekty</td><td>Zarządzanie projektami, koszty projektu</td></tr>
          <tr><td>CRM</td><td>Kontakty, kampanie marketingowe, serwis</td></tr>
          <tr><td>Kadry i Płace</td><td>Pracownicy, wynagrodzenia, ZUS, karty pracy</td></tr>
          <tr><td>Analizy i Raportowanie</td><td>BI, dashboardy, KPI, integracja z Power BI</td></tr>
        </tbody>
      </table>

      <h2>Przykłady systemów ERP</h2>
      <table>
        <thead><tr><th>Skala firmy</th><th>System</th></tr></thead>
        <tbody>
          <tr><td>Duże przedsiębiorstwa</td><td>SAP S/4HANA, Oracle NetSuite, Microsoft Dynamics 365, IFS, TETA ERP</td></tr>
          <tr><td>Średnie przedsiębiorstwa</td><td>Comarch ERP XL, Sage Symfonia, BPSC ERP, Macrologic Merit</td></tr>
          <tr><td>Małe przedsiębiorstwa</td><td>Asseco WAPRO, Navireo, Insert GT, Comarch ERP Optima, enova365</td></tr>
        </tbody>
      </table>

      <h2>Metodyka Sure Step — fazy wdrożenia</h2>
      <p>Szczegółowe informacje o Sure Step znajdziesz w sekcji <strong>BC — Ogólne</strong>.</p>
      <table>
        <thead><tr><th>Etap</th><th>Skrótowy opis celów</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>1. Diagnoza</strong></td>
            <td>Rozpoznanie potrzeb, ocena fit, wycena projektu</td>
          </tr>
          <tr>
            <td><strong>2. Analiza</strong></td>
            <td>Wymagania, mapowanie procesów, <strong>strategia migracji danych</strong>, <strong>wymagania infrastruktury</strong></td>
          </tr>
          <tr>
            <td><strong>3. Projekt</strong></td>
            <td>Projekt rozwiązania, <strong>konfiguracja standardowa</strong>, <strong>próbny import danych</strong></td>
          </tr>
          <tr>
            <td><strong>4. Budowa</strong></td>
            <td><strong>Zakończenie budowy komponentów</strong>, <strong>pełna wersja testowa</strong></td>
          </tr>
          <tr>
            <td><strong>5. Wdrożenie / Uruchomienie</strong></td>
            <td><strong>Testy akceptacyjne (UAT)</strong>, <strong>szkolenia użytkowników końcowych</strong>, finalna migracja</td>
          </tr>
          <tr>
            <td><strong>6. Utrzymanie</strong></td>
            <td>Wsparcie powdrożeniowe, podsumowanie projektu</td>
          </tr>
        </tbody>
      </table>

      <div className="card border-yellow-700 mb-4">
        <p className="text-yellow-300 font-bold">Pytania egzaminacyjne — Sure Step</p>
        <div className="space-y-2 mt-2 text-sm">
          <p><strong className="text-zinc-100">Analiza:</strong> <span className="text-zinc-300">strategia migracji danych, określenie wymagań infrastruktury</span></p>
          <p><strong className="text-zinc-100">Projekt:</strong> <span className="text-zinc-300">konfiguracja rozwiązania standardowego, próbny import danych</span></p>
          <p><strong className="text-zinc-100">Budowa:</strong> <span className="text-zinc-300">zakończenie budowy komponentów, pełna wersja testowa</span></p>
          <p><strong className="text-zinc-100">Uruchomienie:</strong> <span className="text-zinc-300">testy akceptacyjne, szkolenia użytkowników końcowych</span></p>
        </div>
      </div>

      <h2>Wdrożenie systemu ERP — fazy ogólne</h2>
      <ul>
        <li><strong>Przedwdrożeniowe</strong> — wybór systemu, przetarg, kontrakt</li>
        <li><strong>Przygotowanie</strong> — analiza as-is, project charter, zespół projektowy</li>
        <li><strong>Realizacja</strong> — konfiguracja, modyfikacje, migracja, testy</li>
        <li><strong>Go-live</strong> — produkcyjny start, hypercare, monitoring</li>
        <li><strong>Utrzymanie</strong> — support, upgrades, nowe moduły</li>
      </ul>

      <h2>Definicja przedsiębiorstwa</h2>
      <p>
        Jednostka gospodarcza wyodrębniona pod względem <strong>ekonomicznym</strong>,
        <strong>organizacyjnym</strong> i <strong>prawnym</strong>.
        Każdy z tych elementów musi być zachowany. Prowadzi działalność w celu osiągnięcia zysku.
      </p>

      <h2>Zakładanie firmy — kroki</h2>
      <ol>
        <li>Urząd Miasta/Gminy — rejestracja działalności (CEIDG / KRS)</li>
        <li>GUS — uzyskanie numeru REGON, określenie kodu PKD</li>
        <li>Urząd Skarbowy — wybór formy opodatkowania (ryczałt, karta podatkowa, KPiR, pełna księgowość), uzyskanie NIP</li>
        <li>Konto bankowe (potrzebny NIP)</li>
        <li>ZUS — rejestracja jako płatnik składek</li>
      </ol>
    </div>
  )
}
