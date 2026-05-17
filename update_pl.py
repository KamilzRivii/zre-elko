import json

with open('messages/pl.json', 'r', encoding='utf-8') as f:
    pl = json.load(f)

pl_items = [
  { "id": "kociol-parowy-ec-jaworzno", "title": "Kocioł parowy węglowy 30 MW — EC Jaworzno", "description": "Produkcja i montaż kotła parowego opalanego węglem kamiennym o wydajności 30 MW dla Elektrociepłowni Jaworzno. Prace obejmowały pełny zakres — od projektu wykonawczego, przez produkcję elementów ciśnieniowych, aż po montaż, uruchomienie i szkolenie obsługi.", "category": "Kotły parowe" },
  { "id": "kociol-parowy-el-lodz", "title": "Kocioł parowy węglowy 45 MW — EC Łódź", "description": "Wytworzenie kotła parowego o mocy 45 MW dla Elektrociepłowni Łódź. Projekt realizowany zgodnie z normami PN-EN 12952-3 i obejmował produkcję ścian szczelnych, przegrzewaczy pary oraz podgrzewaczy wody.", "category": "Kotły parowe" },
  { "id": "kociol-parowy-el-szczecin", "title": "Kocioł parowy węglowy 20 MW — Elektrownia Szczecin", "description": "Dostawa i montaż kotła parowego 20 MW dla Elektrowni Szczecin. Zakres prac obejmował produkcję kotła, rurociągów parowych oraz instalację układu odpopielania.", "category": "Kotły parowe" },
  { "id": "kociol-parowy-export-niemcy", "title": "Kocioł parowy 35 MW — Kraftwerk Bayern (Niemcy)", "description": "Produkcja kotła parowego o wydajności 35 MW na zamówienie partnera z Niemiec. Projekt realizowany zgodnie ze standardami TÜV dla rynku niemieckiego.", "category": "Kotły parowe" },
  { "id": "kociol-wodny-cieplownia-raciboz", "title": "Kocioł wodny 8 MW — Ciepłownia Racibórz", "description": "Budowa kotła wodnego o mocy 8 MW dla miejskiej ciepłowni w Raciborzu. Kocioł zasilany węglem kamiennym, przystosowany do pracy w układzie sieci ciepłowniczej.", "category": "Kotły wodne" },
  { "id": "kociol-wodny-krakow", "title": "Kocioł wodny 12 MW — Zakład Przemysłowy Kraków", "description": "Dostawa i uruchomienie kotła wodnego 12 MW dla zakładu przemysłowego w Krakowie. Prace obejmowały projekt, produkcję, montaż, odbiory UDT oraz szkolenie personelu obsługi.", "category": "Kotły wodne" },
  { "id": "kociol-gazowy-wroclaw", "title": "Kocioł gazowy 15 MW — Fabryka Wrocław", "description": "Produkcja i montaż kotła gazowego z palnikami wielopaliwowymi o mocy 15 MW. Instalacja wyposażona w nowoczesny system sterowania i monitorowania parametrów pracy.", "category": "Kotły gazowe" },
  { "id": "kociol-gazowy-export-czechy", "title": "Kocioł gazowy 10 MW — Teplárna Brno (Czechy)", "description": "Dostawa kotła gazowego 10 MW dla czeskiego klienta. Projekt zrealizowany we współpracy z lokalnym partnerem, zgodnie z normami CE i wymogami rynku czeskiego.", "category": "Kotły gazowe" },
  { "id": "kociol-biomasowy-bydgoszcz", "title": "Kocioł biomasowy 25 MW — Ciepłownia Bydgoszcz", "description": "Kompleksowa realizacja kotła biomasowego 25 MW opalanego zrębkami drewna. Projekt objął pełen zakres — projektowanie, produkcję, montaż i uruchomienie instalacji wraz z układem podawania paliwa.", "category": "Biomasowe" },
  { "id": "kociol-biomasowy-poznan", "title": "Kocioł biomasowy 20 MW — EC Poznań", "description": "Budowa kotła biomasowego 20 MW dla Elektrociepłowni Poznań. Kocioł przystosowany do spalania biomasy leśnej i rolniczej, wyposażony w nowoczesny system odpylania spalin.", "category": "Biomasowe" },
  { "id": "kociol-rdf-krakow", "title": "Kocioł RDF 18 MW — Spalarnia Odpadów Kraków", "description": "Produkcja kotła parowego przystosowanego do spalania paliwa alternatywnego RDF o wydajności 18 MW. Instalacja spełnia wymagania dyrektywy IED w zakresie emisji zanieczyszczeń.", "category": "Biomasowe" },
  { "id": "kociol-biomasowy-export-austria", "title": "Kocioł biomasowy — Heizkraftwerk Graz (Austria)", "description": "Dostawa elementów ciśnieniowych kotła biomasowego dla austriackiego partnera. Projekt zrealizowany zgodnie z normami SVTI/ASIT i wymaganiami rynku austriackiego.", "category": "Biomasowe" },
  { "id": "rurociagi-rafineria-gdansk", "title": "Rurociągi technologiczne — Rafineria Gdańsk", "description": "Wykonanie rurociągów technologicznych wysokiego ciśnienia zgodnie z normą PN-EN 13480. Zakres obejmował projektowanie, prefabrykację, montaż na obiekcie oraz odbiory UDT.", "category": "Rurociągi" },
  { "id": "rurociagi-pulawy", "title": "Rurociągi parowe — Zakład Chemiczny Puławy", "description": "Modernizacja i rozbudowa sieci rurociągów parowych w Zakładach Azotowych Puławy. Prace realizowane w krótkich okienkach remontowych bez przerwy w produkcji zakładu.", "category": "Rurociągi" },
  { "id": "rurociagi-warszawa", "title": "Rurociągi wysokoprężne — EC Warszawa", "description": "Montaż rurociągów wysokociśnieniowych pary przegrzanej dla Elektrociepłowni Warszawa. Projekt obejmował ponad 2 km rurociągów DN50–DN500 wraz z armaturą i podporami.", "category": "Rurociągi" },
  { "id": "rurociagi-export-francja", "title": "Rurociągi — Centrale Thermique Lyon (Francja)", "description": "Prefabrykacja i dostawa elementów rurociągów dla francuskiej elektrowni cieplnej. Elementy wykonane z materiałów P91 i P22 zgodnie z dokumentacją techniczną zamawiającego.", "category": "Rurociągi" },
  { "id": "modernizacja-ec-katowice", "title": "Modernizacja kotła 40 MW — EC Katowice", "description": "Kompleksowa modernizacja kotła parowego 40 MW — wymiana przegrzewaczy, podgrzewaczy i ścian szczelnych. Prace zrealizowane podczas planowanego remontu kapitalnego elektrociepłowni.", "category": "Modernizacje" },
  { "id": "modernizacja-cieplownia-opole", "title": "Modernizacja kotła 30 MW — Ciepłownia Opole", "description": "Remont i modernizacja kotła wodnego 30 MW polegająca na wymianie elementów wymiennika ciepła i układu spalania. Zakres obejmował również dostosowanie instalacji do nowych norm emisji.", "category": "Modernizacje" },
  { "id": "remont-el-kozienice", "title": "Remont kapitalny — Elektrownia Kozienice", "description": "Remont kapitalny kotła parowego obejmujący wymianę ścian szczelnych, naprawę przegrzewaczy i wymianę armatury. Prace prowadzone w ścisłej koordynacji z harmonogramem remontowym elektrowni.", "category": "Modernizacje" },
  { "id": "modernizacja-ec-gdynia", "title": "Modernizacja układu parowego — EC Gdynia", "description": "Modernizacja układu parowego turbozespołu elektrociepłowni w Gdyni. Zakres prac obejmował wymianę rurociągów świeżej pary, zaworów regulacyjnych i izolacji termicznej.", "category": "Modernizacje" },
  { "id": "instalacje-el-rybnik", "title": "Instalacje pomocnicze — Elektrownia Rybnik", "description": "Wykonanie instalacji pomocniczych bloków energetycznych Elektrowni Rybnik. Prace obejmowały montaż rurociągów wody zasilającej, odwodnień i odpowietrzeń układu kotłowego.", "category": "Modernizacje" },
  { "id": "modernizacja-export-uk", "title": "Modernizacja — Power Station (Wielka Brytania)", "description": "Dostawa i montaż elementów ciśnieniowych dla modernizowanej elektrowni w Wielkiej Brytanii. Projekt zrealizowany w konsorcjum z partnerem brytyjskim, zgodnie z normami BS i wymaganiami rynku UK.", "category": "Modernizacje" },
  { "id": "modernizacja-export-szwajcaria", "title": "Modernizacja — Heizkraftwerk (Szwajcaria)", "description": "Dostawa elementów kotłowych i rurociągów dla szwajcarskiej elektrociepłowni. Realizacja zgodna z normami SVTI/ASIT i wymaganiami szwajcarskiego organu dozoru technicznego.", "category": "Modernizacje" },
  { "id": "kociol-parowy-export-indie", "title": "Kocioł parowy — Power Plant (Indie)", "description": "Produkcja i dostawa elementów ciśnieniowych kotła parowego dla indyjskiego inwestora. Projekt realizowany zgodnie z normami IBR (Indian Boiler Regulations) i wymaganiami zamawiającego.", "category": "Kotły parowe" }
]

pl["realizacje"] = {
  "heading": "Realizacje",
  "subheading": "Projekty, które zrealizowaliśmy z pełnym zaangażowaniem.",
  "filter": "Kategorie",
  "all": "Wszystkie",
  "backToList": "\u2190 Powrót do realizacji",
  "noPhoto": "Zdjęcia wkrótce",
  "gallery": "Galeria zdjęć",
  "items": pl_items
}

with open('messages/pl.json', 'w', encoding='utf-8') as f:
    json.dump(pl, f, ensure_ascii=False, indent=2)

print('pl.json updated OK')
