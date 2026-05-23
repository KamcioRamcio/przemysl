export default function BCCoding() {
  return (
    <div className="prose-custom">
      <h1>Business Central — C/AL Coding</h1>

      <h2>C/AL vs AL</h2>
      <table>
        <thead><tr><th>Cecha</th><th>C/AL (legacy)</th><th>AL (nowoczesny)</th></tr></thead>
        <tbody>
          <tr><td>Środowisko</td><td>Object Designer w C/SIDE</td><td>VS Code z rozszerzeniem AL Language</td></tr>
          <tr><td>Pliki</td><td>Obiekty w bazie danych</td><td>Pliki .al, kompilowane do .app</td></tr>
          <tr><td>Model</td><td>Modyfikacja kodu bazowego</td><td>Rozszerzenia (Extensions) — bez modyfikacji base app</td></tr>
          <tr><td>Integracje</td><td>—</td><td>Events (Publisher/Subscriber)</td></tr>
          <tr><td>Tłumaczenia</td><td>CaptionML, OptionML</td><td>Pliki XLIFF (.xlf)</td></tr>
        </tbody>
      </table>

      <h2>Typy danych i deklaracja zmiennych</h2>

      <div className="card font-mono text-sm mb-4">
        <p className="text-zinc-500">// Deklaracja zmiennych w AL:</p>
        <pre className="text-zinc-200 mt-1">{`var
    myInt: Integer;
    myDecimal: Decimal;
    myBool: Boolean;
    myDate: Date;
    myCode: Code[20];       // Code wymaga długości!
    myText: Text[100];      // Text wymaga długości!
    myOption: Option A,B,C;
    cust: Record Customer;`}</pre>
      </div>

      <table>
        <thead><tr><th>Typ</th><th>Długość</th><th>Domyślna wartość</th><th>Uwagi</th></tr></thead>
        <tbody>
          <tr><td><strong>Integer</strong></td><td>—</td><td>0</td><td>Liczba całkowita</td></tr>
          <tr><td><strong>Decimal</strong></td><td>—</td><td>0</td><td>Liczba dziesiętna</td></tr>
          <tr><td><strong>Boolean</strong></td><td>—</td><td>false</td><td>—</td></tr>
          <tr><td><strong>Date</strong></td><td>—</td><td className="text-indigo-300 font-mono">0D</td><td>Pusta data = 0D</td></tr>
          <tr><td><strong>Time</strong></td><td>—</td><td className="text-indigo-300 font-mono">0T</td><td>Pusty czas = 0T</td></tr>
          <tr><td><strong>DateTime</strong></td><td>—</td><td className="text-indigo-300 font-mono">0DT</td><td>—</td></tr>
          <tr><td><strong>Code[n]</strong></td><td className="text-yellow-300">Wymagana!</td><td>""</td><td>Wielkie litery, bez spacji wiodących</td></tr>
          <tr><td><strong>Text[n]</strong></td><td className="text-yellow-300">Wymagana!</td><td>""</td><td>Zwykły string</td></tr>
          <tr><td><strong>Option</strong></td><td>—</td><td>0 (pierwsza opcja)</td><td>Lista predefiniowanych wartości</td></tr>
          <tr><td><strong>Record</strong></td><td>—</td><td>—</td><td>Referencja do tabeli np. Record Customer</td></tr>
        </tbody>
      </table>

      <div className="card border-yellow-700">
        <p className="text-yellow-300 font-bold">Ważne: długość zmiennej</p>
        <p className="text-sm text-zinc-300 mt-1">
          Tylko <code>Code</code> i <code>Text</code> wymagają podania długości (np. <code>Code[20]</code>, <code>Text[100]</code>).
          Integer, Decimal, Boolean, Date, Option — <strong>NIE mają</strong> parametru długości.
        </p>
      </div>

      <h2>FlowField</h2>
      <div className="card border-emerald-700 mb-4">
        <p className="text-emerald-300 font-bold">FlowField = pole wirtualne</p>
        <ul className="text-sm mt-2">
          <li>Właściwość <code>FieldClass = FlowField</code></li>
          <li><strong>Nie jest przechowywane</strong> w bazie danych (wirtualne)</li>
          <li>Obliczane dynamicznie wg formuły <code>CalcFormula</code> (Sum, Count, Average, Lookup, Exist)</li>
          <li>Domyślna wartość = 0</li>
          <li>Obliczane automatycznie gdy pole = źródło kontrolki na stronie</li>
          <li>W kodzie AL wymaga jawnego wywołania: <code>Customer.CALCFIELDS(Balance)</code></li>
        </ul>
      </div>

      <h3>FlowField vs FlowFilter</h3>
      <table>
        <thead><tr><th>Cecha</th><th>FlowField</th><th>FlowFilter</th></tr></thead>
        <tbody>
          <tr><td>Przechowywane?</td><td>Nie</td><td>Nie</td></tr>
          <tr><td>Cel</td><td>Obliczona wartość agregowana</td><td>Filtr dynamicznie zawężający obliczenia FlowField</td></tr>
          <tr><td>Użytkownik zmienia?</td><td>Nie</td><td>Tak (na stronie)</td></tr>
        </tbody>
      </table>

      <h2>Triggery (wyzwalacze)</h2>

      <h3>Triggery tabeli</h3>
      <table>
        <thead><tr><th>Trigger</th><th>Kiedy wywołany</th></tr></thead>
        <tbody>
          <tr><td><code>OnInsert</code></td><td>Przy wstawieniu nowego rekordu</td></tr>
          <tr><td><code>OnModify</code></td><td>Przy modyfikacji istniejącego rekordu</td></tr>
          <tr><td><code>OnDelete</code></td><td>Przy usuwaniu rekordu</td></tr>
          <tr><td><code>OnRename</code></td><td>Przy zmianie klucza głównego</td></tr>
        </tbody>
      </table>

      <h3>Triggery pól</h3>
      <table>
        <thead><tr><th>Trigger</th><th>Kiedy wywołany</th></tr></thead>
        <tbody>
          <tr><td><code>OnValidate</code></td><td>Gdy użytkownik wprowadza dane LUB gdy kod wywołuje VALIDATE()</td></tr>
          <tr><td><code>OnLookup</code></td><td>Przy uruchomieniu wyszukiwania (lookup)</td></tr>
          <tr><td><code>OnDrillDown</code></td><td>Przy kliknięciu drill-down</td></tr>
        </tbody>
      </table>

      <h3>Triggery strony</h3>
      <table>
        <thead><tr><th>Trigger</th><th>Kiedy wywołany</th></tr></thead>
        <tbody>
          <tr><td><code>OnOpenPage</code></td><td>Przy otwarciu strony</td></tr>
          <tr><td><code>OnClosePage</code></td><td>Przy zamknięciu strony</td></tr>
          <tr><td><code>OnAfterGetRecord</code></td><td>Po pobraniu rekordu do wyświetlenia</td></tr>
          <tr><td><code>OnNewRecord</code></td><td>Przy tworzeniu nowego rekordu na stronie</td></tr>
          <tr><td><code>OnQueryClosePage</code></td><td>Przed zamknięciem — można anulować</td></tr>
        </tbody>
      </table>

      <h2>Zakres zmiennych</h2>
      <div className="card font-mono text-sm mb-4">
        <pre className="text-zinc-200">{`// Zmienna GLOBALNA — dostępna we wszystkich triggerach obiektu
var
    GlobalCustomer: Record Customer;

// Zmienna LOKALNA — tylko w tym triggerze/procedurze
trigger OnValidate()
var
    LocalVar: Integer;    // tylko tutaj!
begin
    ...
end;`}</pre>
      </div>
      <ul>
        <li>Zmienne lokalne dostępne <strong>tylko w triggerze/procedurze gdzie zadeklarowane</strong></li>
        <li>Zmienne globalne dostępne we <strong>wszystkich triggerach</strong> danego obiektu</li>
        <li>Procedury mogą być <code>local</code> (tylko w obiekcie) lub <code>global</code> (dostępne z innych obiektów)</li>
      </ul>

      <h2>Wbudowane funkcje</h2>

      <h3>Wyszukiwanie rekordów</h3>
      <div className="card font-mono text-sm mb-3">
        <pre className="text-zinc-200">{`Customer.GET('C00010');              // pobierz po kluczu
Customer.FIND('-');                  // pierwszy pasujący
Customer.FINDFIRST;                  // pierwszy (szybszy)
Customer.FINDLAST;                   // ostatni
Customer.FINDSET;                    // zbiór do REPEAT...UNTIL
REPEAT
    ...
UNTIL Customer.NEXT = 0;`}</pre>
      </div>

      <h3>Filtrowanie</h3>
      <div className="card font-mono text-sm mb-3">
        <pre className="text-zinc-200">{`Customer.SETRANGE("Country Code", 'PL');
Customer.SETRANGE("Credit Limit", 1000, 5000);
Customer.SETFILTER("Name", 'A*');
Customer.RESET;     // zdejmuje WSZYSTKIE filtry (nie usuwa danych!)`}</pre>
      </div>

      <h3>Modyfikacja danych</h3>
      <div className="card font-mono text-sm mb-3">
        <pre className="text-zinc-200">{`Customer.INIT;              // inicjalizuje rekord domyślnymi wartościami
Customer.INSERT(true);      // wstawia (true = wywołaj triggery)
Customer.MODIFY(true);      // modyfikuje
Customer.DELETE(true);      // usuwa
Customer.DELETEALL(true);   // usuwa wszystkie z filtrem`}</pre>
      </div>

      <h3>Operacje na polach</h3>
      <div className="card font-mono text-sm mb-3">
        <pre className="text-zinc-200">{`// VALIDATE: przypisuje wartość I wywołuje trigger OnValidate
VALIDATE(Name, 'Nowa wartość');
// Równoważne: Name := 'Nowa wartość' + trigger OnValidate pola Name

// Name := 'Nowa wartość'  — tylko przypisanie, BEZ triggera!

// TESTFIELD: sprawdza czy pole nie jest puste (rzuca błąd jeśli tak)
Customer.TESTFIELD("Gen. Bus. Posting Group");
// TESTFIELD(pole, wartość): sprawdza czy pole = wartość
Customer.TESTFIELD(Status, Status::Active);

// CALCFIELDS: przelicza FlowFields
Customer.CALCFIELDS(Balance);`}</pre>
      </div>

      <h3>Komunikacja z użytkownikiem</h3>
      <div className="card font-mono text-sm mb-3">
        <pre className="text-zinc-200">{`MESSAGE('Tekst: %1', wartość);      // komunikat informacyjny
ERROR('Błąd: %1', opis);            // błąd — zatrzymuje wykonanie
CONFIRM('Czy na pewno?', true);     // dialog tak/nie
STRMENU('Opcja A,Opcja B,Opcja C', 1); // menu wyboru`}</pre>
      </div>

      <h2>Pętle</h2>
      <div className="card font-mono text-sm mb-4">
        <pre className="text-zinc-200">{`// FOR — określona liczba iteracji
FOR i := 1 TO 10 DO
    MESSAGE('%1', i);

// WHILE — sprawdza warunek PRZED; może nie wykonać się wcale
WHILE Customer.NEXT <> 0 DO
    Process(Customer);

// REPEAT...UNTIL — sprawdza warunek PO; ZAWSZE co najmniej raz!
Customer.FINDSET;
REPEAT
    Process(Customer);
UNTIL Customer.NEXT = 0;`}</pre>
      </div>

      <div className="card border-indigo-700">
        <p className="text-indigo-300 font-bold">Pętla REPEAT wykonuje się zawsze co najmniej raz</p>
        <p className="text-sm text-zinc-400 mt-1">Warunek sprawdzany na końcu iteracji (jak do-while w C#/Java)</p>
      </div>

      <h2>Wartości puste / inicjalizacja</h2>
      <table>
        <thead><tr><th>Typ</th><th>Pusta wartość</th><th>Przykład</th></tr></thead>
        <tbody>
          <tr><td>Integer, Decimal</td><td>0</td><td><code>if Amount = 0 then</code></td></tr>
          <tr><td>Text, Code</td><td>''</td><td><code>if Name = '' then</code></td></tr>
          <tr><td>Boolean</td><td>false</td><td><code>if not Active then</code></td></tr>
          <tr><td>Date</td><td className="font-mono text-indigo-300">0D</td><td><code>LastDate := 0D;</code></td></tr>
          <tr><td>Time</td><td className="font-mono text-indigo-300">0T</td><td><code>StartTime := 0T;</code></td></tr>
          <tr><td>DateTime</td><td className="font-mono text-indigo-300">0DT</td><td><code>ModifiedDT := 0DT;</code></td></tr>
        </tbody>
      </table>

      <h2>Właściwości pól</h2>
      <table>
        <thead><tr><th>Właściwość</th><th>Wartości</th><th>Znaczenie</th></tr></thead>
        <tbody>
          <tr><td><strong>FieldClass</strong></td><td>Normal / FlowField / FlowFilter</td><td>Normal = fizyczne pole; FlowField = wirtualne obliczane; FlowFilter = filtr dla FlowField</td></tr>
          <tr><td><strong>CalcFormula</strong></td><td>Sum, Count, Average, Lookup, Exist, Min, Max</td><td>Formuła obliczeniowa dla FlowField</td></tr>
          <tr><td><strong>TableRelation</strong></td><td>nazwa tabeli</td><td>Relacja do innej tabeli (FK)</td></tr>
          <tr><td><strong>SumIndexFields</strong></td><td>lista pól</td><td>Pola utrzymywane jako sumy indeksowane (optymalizacja FlowField)</td></tr>
          <tr><td><strong>DataPerCompany</strong></td><td>Yes/No</td><td>Na poziomie tabeli — izolacja danych per firma</td></tr>
        </tbody>
      </table>

      <h2>Operatory</h2>
      <table>
        <thead><tr><th>Typ</th><th>Operatory</th></tr></thead>
        <tbody>
          <tr><td>Arytmetyczne</td><td><code>+ - * /</code>, <code>DIV</code> (dzielenie całkowite), <code>MOD</code> (reszta)</td></tr>
          <tr><td>Relacyjne</td><td><code>= &lt; &gt; &lt;= &gt;= &lt;&gt;</code>, <code>IN</code> (przynależność)</td></tr>
          <tr><td>Logiczne</td><td><code>AND OR XOR NOT</code></td></tr>
          <tr><td>Łańcuchowe</td><td><code>+</code> (konkatenacja)</td></tr>
        </tbody>
      </table>

      <h2>Najważniejsze przykłady na egzamin</h2>
      <div className="space-y-3">
        <div className="card">
          <p className="text-sm font-medium text-zinc-100 mb-2">RESET nie usuwa danych!</p>
          <pre className="text-sm text-zinc-300">{`Customer.RESET;  // zdejmuje filtry i sortowanie, NIE usuwa rekordów`}</pre>
        </div>
        <div className="card">
          <p className="text-sm font-medium text-zinc-100 mb-2">Pusta data = 0D</p>
          <pre className="text-sm text-zinc-300">{`LastDateModified := 0D;    // poprawnie
LastDateModified := 0;     // błąd!
LastDateModified := '';    // błąd!
LastDateModified := null;  // null nie istnieje w C/AL!`}</pre>
        </div>
        <div className="card">
          <p className="text-sm font-medium text-zinc-100 mb-2">VALIDATE vs przypisanie</p>
          <pre className="text-sm text-zinc-300">{`// Z triggerem OnValidate:
VALIDATE(Name, Customer.Name);

// Bez triggera:
Name := Customer.Name;`}</pre>
        </div>
        <div className="card">
          <p className="text-sm font-medium text-zinc-100 mb-2">TESTFIELD — sprawdza czy pole puste</p>
          <pre className="text-sm text-zinc-300">{`// Rzuca błąd gdy "Gen. Bus. Posting Group" jest puste:
Customer.TESTFIELD("Gen. Bus. Posting Group");`}</pre>
        </div>
        <div className="card">
          <p className="text-sm font-medium text-zinc-100 mb-2">DataPerCompany — dane vs obiekty</p>
          <pre className="text-sm text-zinc-300">{`// Modyfikacja obiektu (tabela, raport, strona):
// → widoczna we WSZYSTKICH firmach w bazie

// Dane Customer (DataPerCompany=Yes domyślnie):
// → oddzielne per firma, firma A nie widzi danych firmy B`}</pre>
        </div>
      </div>

      <h2>Przydatne metody — szybka ściągawka</h2>
      <table>
        <thead><tr><th>Metoda</th><th>Co robi</th></tr></thead>
        <tbody>
          <tr><td><code>GET(klucz)</code></td><td>Pobierz rekord po kluczu głównym</td></tr>
          <tr><td><code>FINDSET</code></td><td>Znajdź zbiór do iteracji REPEAT</td></tr>
          <tr><td><code>NEXT</code></td><td>Przejdź do następnego rekordu</td></tr>
          <tr><td><code>RESET</code></td><td>Zdejmij wszystkie filtry i sortowanie</td></tr>
          <tr><td><code>SETRANGE(F,Od,Do)</code></td><td>Filtr zakresowy</td></tr>
          <tr><td><code>SETFILTER(F,'A*')</code></td><td>Filtr z wyrażeniem</td></tr>
          <tr><td><code>INIT</code></td><td>Inicjalizuj rekord wartościami domyślnymi</td></tr>
          <tr><td><code>INSERT(true)</code></td><td>Wstaw rekord (z triggerami)</td></tr>
          <tr><td><code>MODIFY(true)</code></td><td>Zmodyfikuj rekord</td></tr>
          <tr><td><code>DELETE(true)</code></td><td>Usuń rekord</td></tr>
          <tr><td><code>VALIDATE(F,V)</code></td><td>Przypisz wartość + wywołaj OnValidate</td></tr>
          <tr><td><code>TESTFIELD(F)</code></td><td>Sprawdź czy pole nie puste</td></tr>
          <tr><td><code>CALCFIELDS(F)</code></td><td>Przelicz FlowField</td></tr>
          <tr><td><code>MESSAGE(txt)</code></td><td>Komunikat informacyjny</td></tr>
          <tr><td><code>ERROR(txt)</code></td><td>Błąd — zatrzymuje kod</td></tr>
          <tr><td><code>DATE2DMY(d,n)</code></td><td>Dzień(1)/Miesiąc(2)/Rok(3) z daty</td></tr>
          <tr><td><code>ROUND(n,precyzja)</code></td><td>Zaokrąglenie</td></tr>
          <tr><td><code>CLEAR(zmienna)</code></td><td>Wyczyść zmienną do wartości domyślnej</td></tr>
        </tbody>
      </table>
    </div>
  )
}
