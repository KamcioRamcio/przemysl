export default function HurtownieDanych() {
  return (
    <div className="prose-custom">
      <h1>Hurtownie danych (HD)</h1>

      <h2>Definicja</h2>
      <p>
        <strong>Hurtownia danych</strong> (data warehouse) — tematycznie zorientowana, zintegrowana,
        zmienna w czasie, <strong>nieulotna</strong> kolekcja danych wspierająca podejmowanie decyzji.
        Dane są historyczne (nie bieżące), zagregowane, konsolidowane z wielu źródeł.
      </p>

      <h2>OLTP vs OLAP</h2>
      <table>
        <thead><tr><th>Cecha</th><th>OLTP</th><th>OLAP</th></tr></thead>
        <tbody>
          <tr><td>Cel</td><td>Transakcyjne przetwarzanie operacyjne</td><td>Wielowymiarowa analiza danych</td></tr>
          <tr><td>Użytkownik</td><td>Pracownik operacyjny (kasjer, magazynier)</td><td>Analityk, decydent, kierownictwo</td></tr>
          <tr><td>Zapytania</td><td>Ograniczony, dobrze znany zbiór</td><td>Ad-hoc, nieprzewidywalne</td></tr>
          <tr><td>Czas odpowiedzi</td><td>Milisekundy – sekundy</td><td>Minuty – godziny</td></tr>
          <tr><td>Rozmiar danych</td><td>Kilka rekordów per transakcja</td><td>Miliony rekordów</td></tr>
          <tr><td>Perspektywa czasowa</td><td>Dane bieżące</td><td>Dane historyczne (lata)</td></tr>
          <tr><td>Tryb dostępu</td><td>Odczyt i zapis (ACID)</td><td>Głównie odczyt</td></tr>
          <tr><td>Model danych</td><td>Relacyjny (znormalizowany)</td><td>Wielowymiarowy (zdenormalizowany)</td></tr>
        </tbody>
      </table>

      <h2>Fakty vs Wymiary</h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div className="card border-indigo-700">
          <h3 className="text-indigo-300 mt-0">Fakty (Facts)</h3>
          <ul className="text-sm">
            <li>Mierzalne zdarzenia (sprzedaż, transakcja, rozmowa)</li>
            <li>Zawierają <strong>miary numeryczne</strong> (kwota, ilość, czas)</li>
            <li>Tabela faktów: wąska, bardzo długa, dynamicznie rośnie</li>
            <li>Klucze obce do tabel wymiarów</li>
          </ul>
        </div>
        <div className="card border-orange-700">
          <h3 className="text-orange-300 mt-0">Wymiary (Dimensions)</h3>
          <ul className="text-sm">
            <li>Kontekst analizy (Czas, Produkt, Lokalizacja, Klient)</li>
            <li>Zawierają <strong>atrybuty opisowe</strong> (tekstowe)</li>
            <li>Tabela wymiarów: szeroka, krótka, statyczna</li>
            <li>Tworzą hierarchie (dzień → miesiąc → rok)</li>
          </ul>
        </div>
      </div>

      <h2>Schemat gwiazdy vs Płatka śniegu</h2>
      <table>
        <thead><tr><th>Cecha</th><th>Schemat gwiazdy ⭐</th><th>Schemat płatka śniegu ❄</th></tr></thead>
        <tbody>
          <tr><td>Normalizacja wymiarów</td><td>Zdenormalizowane (płaskie)</td><td>Znormalizowane (≥ 3NF)</td></tr>
          <tr><td>Hierarchia w wymiarze</td><td>Cała w jednej tabeli</td><td>Rozbita na osobne tabele</td></tr>
          <tr><td>Liczba tabel</td><td>Mniej (prościej)</td><td>Więcej (JOIN-ów)</td></tr>
          <tr><td>Wydajność zapytań</td><td>Lepsza (mniej JOIN)</td><td>Gorsza (więcej JOIN)</td></tr>
          <tr><td>Miejsce na dysku</td><td>Więcej (redundancja)</td><td>Mniej (normalizacja)</td></tr>
          <tr><td>Utrzymanie hierarchii</td><td>Trudniejsze</td><td>Łatwiejsze</td></tr>
        </tbody>
      </table>

      <div className="card border-yellow-700 mb-4">
        <p className="text-yellow-300 font-bold">Kluczowa różnica na egzamin</p>
        <p className="text-sm text-zinc-300 mt-1">
          Gwiazda i płatek różnią się <strong>stopniem normalizacji wymiarów</strong>, nie strukturą tabeli faktów.
          Fizyczna implementacja (ROLAP/MOLAP) jest niezwiązana z typem schematu.
        </p>
      </div>

      <h2>Konstelacja faktów</h2>
      <p>
        Wiele tabel faktów <strong>współdzielących</strong> tabele wymiarów.
        Stosowana przy złożonych hurtowniach dla wielu obszarów biznesowych.
        Wymiary współdzielone muszą mieć tę samą definicję (conformed dimensions).
      </p>

      <h2>Proces ETL</h2>
      <table>
        <thead><tr><th>Faza</th><th>Co robi</th><th>Problemy</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>Extraction</strong><br/>(Ekstrakcja)</td>
            <td>Odczyt danych ze źródeł (BD, pliki, ERP, CRM) przez ODBC/JDBC</td>
            <td>Różne definicje pojęć, trudność dostępu do źródeł</td>
          </tr>
          <tr>
            <td><strong>Transformation</strong><br/>(Transformacja)</td>
            <td>Czyszczenie, ujednolicenie formatów, konwersja, deduplication</td>
            <td>Różne formaty dat, homonimy, synonimy, brakujące wartości, redundancje</td>
          </tr>
          <tr>
            <td><strong>Loading</strong><br/>(Ładowanie)</td>
            <td>Wczytanie do hurtowni — agregacja, budowa indeksów, weryfikacja spójności</td>
            <td>Bardzo czasochłonne, tryb wsadowy, może być jedna transakcja</td>
          </tr>
        </tbody>
      </table>

      <h3>Odświeżanie hurtowni</h3>
      <ul>
        <li><strong>Pełne</strong> — ponowne załadowanie wszystkich danych</li>
        <li><strong>Przyrostowe</strong> — tylko zmiany od ostatniego odświeżenia</li>
        <li>Sposoby przesyłania: <em>data shipping</em> (dane) lub <em>transaction shipping</em> (polecenia)</li>
      </ul>

      <h2>ROLAP / MOLAP / HOLAP</h2>
      <table>
        <thead><tr><th>Typ</th><th>Fizyczna implementacja</th><th>Cechy</th></tr></thead>
        <tbody>
          <tr><td><strong>ROLAP</strong></td><td>Serwer relacyjny</td><td>Fakty i wymiary w tabelach relacyjnych, zapytania SQL</td></tr>
          <tr><td><strong>MOLAP</strong></td><td>Serwer wielowymiarowy</td><td>Dane w kostkach wielowymiarowych (data cubes), bardzo szybkie</td></tr>
          <tr><td><strong>HOLAP</strong></td><td>Hybrydowy</td><td>Dane elementarne ROLAP, agregaty MOLAP</td></tr>
        </tbody>
      </table>

      <h2>Operatory wielowymiarowe OLAP</h2>
      <table>
        <thead><tr><th>Operator</th><th>Co robi</th></tr></thead>
        <tbody>
          <tr><td><strong>Roll-up (zwijanie)</strong></td><td>Nawigacja w górę hierarchii → agregacja (dzień → miesiąc → rok)</td></tr>
          <tr><td><strong>Drill-down (rozwijanie)</strong></td><td>Nawigacja w dół hierarchii → bardziej szczegółowa analiza</td></tr>
          <tr><td><strong>Slice</strong></td><td>Wycięcie jednej "płyty" z kostki (jeden wymiar = konkretna wartość)</td></tr>
          <tr><td><strong>Dice</strong></td><td>Wycięcie podkostki (wiele wymiarów zawężonych)</td></tr>
          <tr><td><strong>Pivot (rotating)</strong></td><td>Obrót perspektywy danych dla czytelności</td></tr>
          <tr><td><strong>Ranking</strong></td><td>Sortowanie elementów wymiaru wg agregatu</td></tr>
          <tr><td><strong>Filtering</strong></td><td>Ograniczenie zakresu (np. sprzedaż &gt; 10 000)</td></tr>
        </tbody>
      </table>

      <div className="card border-indigo-700 mb-4">
        <p className="text-indigo-300 font-bold">Na egzamin: operatory wielowymiarowe</p>
        <p className="text-sm text-zinc-300 mt-1">
          <strong>Rozwijanie/zwijanie</strong> (drill-down/roll-up) to operatory wielowymiarowe.
          Selekcja, projekcja, iloczyn kartezjański to operatory algebry relacji (SQL) — NIE OLAP.
        </p>
      </div>

      <h2>Zdegenerowane wymiary</h2>
      <p>
        Identyfikator (np. ID_TRANSAKCJI) niemający sensownych atrybutów opisowych —
        przechowywany bezpośrednio w tabeli faktów bez osobnej tabeli wymiaru.
        Umożliwia analizę (np. wielkości koszyka zakupowego) bez zbędnych JOIN-ów.
      </p>

      <h2>Wolno zmieniające się wymiary (SCD)</h2>
      <p>Wymiary, które z czasem się zmieniają (zmiana adresu klienta, reforma administracyjna). 3 podejścia:</p>
      <table>
        <thead><tr><th>Typ SCD</th><th>Podejście</th><th>Historia</th></tr></thead>
        <tbody>
          <tr><td><strong>Typ 1</strong></td><td>Nadpisanie starej wartości nową</td><td>Utracona</td></tr>
          <tr><td><strong>Typ 2</strong></td><td>Nowy rekord z nową wartością (nowy klucz zastępczy)</td><td>Pełna</td></tr>
          <tr><td><strong>Typ 3</strong></td><td>Nowa kolumna "poprzednia wartość"</td><td>Ograniczona (poprzednia + aktualna)</td></tr>
        </tbody>
      </table>

      <h2>Hierarchie wymiarów</h2>
      <ul>
        <li><strong>CZAS:</strong> dzień → tydzień → miesiąc → kwartał → rok</li>
        <li><strong>PRODUKT:</strong> wariant → produkt → kategoria → dział</li>
        <li><strong>LOKALIZACJA:</strong> sklep → miasto → województwo → kraj</li>
      </ul>
      <p>Hierarchie sterują operatorami roll-up i drill-down. Liczba możliwych agregatów = iloczyn (Li + 1) dla każdego wymiaru.</p>
    </div>
  )
}
