import { readFileSync, writeFileSync } from 'fs'

const pl_items = [
  { id: "kociol-parowy-ec-jaworzno", title: "Kocioł parowy węglowy 30 MW — EC Jaworzno", description: "Produkcja i montaż kotła parowego opalanego węglem kamiennym o wydajności 30 MW dla Elektrociepłowni Jaworzno. Prace obejmowały pełny zakres — od projektu wykonawczego, przez produkcję elementów ciśnieniowych, aż po montaż, uruchomienie i szkolenie obsługi.", category: "Kotły parowe" },
  { id: "kociol-parowy-el-lodz", title: "Kocioł parowy węglowy 45 MW — EC Łódź", description: "Wytworzenie kotła parowego o mocy 45 MW dla Elektrociepłowni Łódź. Projekt realizowany zgodnie z normami PN-EN 12952-3 i obejmował produkcję ścian szczelnych, przegrzewaczy pary oraz podgrzewaczy wody.", category: "Kotły parowe" },
  { id: "kociol-parowy-el-szczecin", title: "Kocioł parowy węglowy 20 MW — Elektrownia Szczecin", description: "Dostawa i montaż kotła parowego 20 MW dla Elektrowni Szczecin. Zakres prac obejmował produkcję kotła, rurociągów parowych oraz instalację układu odpopielania.", category: "Kotły parowe" },
  { id: "kociol-parowy-export-niemcy", title: "Kocioł parowy 35 MW — Kraftwerk Bayern (Niemcy)", description: "Produkcja kotła parowego o wydajności 35 MW na zamówienie partnera z Niemiec. Projekt realizowany zgodnie ze standardami TÜV dla rynku niemieckiego.", category: "Kotły parowe" },
  { id: "kociol-wodny-cieplownia-raciboz", title: "Kocioł wodny 8 MW — Ciepłownia Racibórz", description: "Budowa kotła wodnego o mocy 8 MW dla miejskiej ciepłowni w Raciborzu. Kocioł zasilany węglem kamiennym, przystosowany do pracy w układzie sieci ciepłowniczej.", category: "Kotły wodne" },
  { id: "kociol-wodny-krakow", title: "Kocioł wodny 12 MW — Zakład Przemysłowy Kraków", description: "Dostawa i uruchomienie kotła wodnego 12 MW dla zakładu przemysłowego w Krakowie. Prace obejmowały projekt, produkcję, montaż, odbiory UDT oraz szkolenie personelu obsługi.", category: "Kotły wodne" },
  { id: "kociol-gazowy-wroclaw", title: "Kocioł gazowy 15 MW — Fabryka Wrocław", description: "Produkcja i montaż kotła gazowego z palnikami wielopaliwowymi o mocy 15 MW. Instalacja wyposażona w nowoczesny system sterowania i monitorowania parametrów pracy.", category: "Kotły gazowe" },
  { id: "kociol-gazowy-export-czechy", title: "Kocioł gazowy 10 MW — Teplárna Brno (Czechy)", description: "Dostawa kotła gazowego 10 MW dla czeskiego klienta. Projekt zrealizowany we współpracy z lokalnym partnerem, zgodnie z normami CE i wymogami rynku czeskiego.", category: "Kotły gazowe" },
  { id: "kociol-biomasowy-bydgoszcz", title: "Kocioł biomasowy 25 MW — Ciepłownia Bydgoszcz", description: "Kompleksowa realizacja kotła biomasowego 25 MW opalanego zrębkami drewna. Projekt objął pełen zakres — projektowanie, produkcję, montaż i uruchomienie instalacji wraz z układem podawania paliwa.", category: "Biomasowe" },
  { id: "kociol-biomasowy-poznan", title: "Kocioł biomasowy 20 MW — EC Poznań", description: "Budowa kotła biomasowego 20 MW dla Elektrociepłowni Poznań. Kocioł przystosowany do spalania biomasy leśnej i rolniczej, wyposażony w nowoczesny system odpylania spalin.", category: "Biomasowe" },
  { id: "kociol-rdf-krakow", title: "Kocioł RDF 18 MW — Spalarnia Odpadów Kraków", description: "Produkcja kotła parowego przystosowanego do spalania paliwa alternatywnego RDF o wydajności 18 MW. Instalacja spełnia wymagania dyrektywy IED w zakresie emisji zanieczyszczeń.", category: "Biomasowe" },
  { id: "kociol-biomasowy-export-austria", title: "Kocioł biomasowy — Heizkraftwerk Graz (Austria)", description: "Dostawa elementów ciśnieniowych kotła biomasowego dla austriackiego partnera. Projekt zrealizowany zgodnie z normami SVTI/ASIT i wymaganiami rynku austriackiego.", category: "Biomasowe" },
  { id: "rurociagi-rafineria-gdansk", title: "Rurociągi technologiczne — Rafineria Gdańsk", description: "Wykonanie rurociągów technologicznych wysokiego ciśnienia zgodnie z normą PN-EN 13480. Zakres obejmował projektowanie, prefabrykację, montaż na obiekcie oraz odbiory UDT.", category: "Rurociągi" },
  { id: "rurociagi-pulawy", title: "Rurociągi parowe — Zakład Chemiczny Puławy", description: "Modernizacja i rozbudowa sieci rurociągów parowych w Zakładach Azotowych Puławy. Prace realizowane w krótkich okienkach remontowych bez przerwy w produkcji zakładu.", category: "Rurociągi" },
  { id: "rurociagi-warszawa", title: "Rurociągi wysokoprężne — EC Warszawa", description: "Montaż rurociągów wysokociśnieniowych pary przegrzanej dla Elektrociepłowni Warszawa. Projekt obejmował ponad 2 km rurociągów DN50–DN500 wraz z armaturą i podporami.", category: "Rurociągi" },
  { id: "rurociagi-export-francja", title: "Rurociągi — Centrale Thermique Lyon (Francja)", description: "Prefabrykacja i dostawa elementów rurociągów dla francuskiej elektrowni cieplnej. Elementy wykonane z materiałów P91 i P22 zgodnie z dokumentacją techniczną zamawiającego.", category: "Rurociągi" },
  { id: "modernizacja-ec-katowice", title: "Modernizacja kotła 40 MW — EC Katowice", description: "Kompleksowa modernizacja kotła parowego 40 MW — wymiana przegrzewaczy, podgrzewaczy i ścian szczelnych. Prace zrealizowane podczas planowanego remontu kapitalnego elektrociepłowni.", category: "Modernizacje" },
  { id: "modernizacja-cieplownia-opole", title: "Modernizacja kotła 30 MW — Ciepłownia Opole", description: "Remont i modernizacja kotła wodnego 30 MW polegająca na wymianie elementów wymiennika ciepła i układu spalania. Zakres obejmował również dostosowanie instalacji do nowych norm emisji.", category: "Modernizacje" },
  { id: "remont-el-kozienice", title: "Remont kapitalny — Elektrownia Kozienice", description: "Remont kapitalny kotła parowego obejmujący wymianę ścian szczelnych, naprawę przegrzewaczy i wymianę armatury. Prace prowadzone w ścisłej koordynacji z harmonogramem remontowym elektrowni.", category: "Modernizacje" },
  { id: "modernizacja-ec-gdynia", title: "Modernizacja układu parowego — EC Gdynia", description: "Modernizacja układu parowego turbozespołu elektrociepłowni w Gdyni. Zakres prac obejmował wymianę rurociągów świeżej pary, zaworów regulacyjnych i izolacji termicznej.", category: "Modernizacje" },
  { id: "instalacje-el-rybnik", title: "Instalacje pomocnicze — Elektrownia Rybnik", description: "Wykonanie instalacji pomocniczych bloków energetycznych Elektrowni Rybnik. Prace obejmowały montaż rurociągów wody zasilającej, odwodnień i odpowietrzeń układu kotłowego.", category: "Modernizacje" },
  { id: "modernizacja-export-uk", title: "Modernizacja — Power Station (Wielka Brytania)", description: "Dostawa i montaż elementów ciśnieniowych dla modernizowanej elektrowni w Wielkiej Brytanii. Projekt zrealizowany w konsorcjum z partnerem brytyjskim, zgodnie z normami BS i wymaganiami rynku UK.", category: "Modernizacje" },
  { id: "modernizacja-export-szwajcaria", title: "Modernizacja — Heizkraftwerk (Szwajcaria)", description: "Dostawa elementów kotłowych i rurociągów dla szwajcarskiej elektrociepłowni. Realizacja zgodna z normami SVTI/ASIT i wymaganiami szwajcarskiego organu dozoru technicznego.", category: "Modernizacje" },
  { id: "kociol-parowy-export-indie", title: "Kocioł parowy — Power Plant (Indie)", description: "Produkcja i dostawa elementów ciśnieniowych kotła parowego dla indyjskiego inwestora. Projekt realizowany zgodnie z normami IBR (Indian Boiler Regulations) i wymaganiami zamawiającego.", category: "Kotły parowe" }
]

const en_items = [
  { id: "kociol-parowy-ec-jaworzno", title: "30 MW coal-fired steam boiler — EC Jaworzno", description: "Manufacturing and installation of a 30 MW coal-fired steam boiler for Elektrociepłownia Jaworzno. The scope covered the full cycle — from detail design, through pressure element production, to installation, commissioning and operator training.", category: "Steam boilers" },
  { id: "kociol-parowy-el-lodz", title: "45 MW coal-fired steam boiler — EC Łódź", description: "Manufacture of a 45 MW steam boiler for the Łódź combined heat and power plant. The project was executed in compliance with PN-EN 12952-3 and included production of membrane walls, steam superheaters and water preheaters.", category: "Steam boilers" },
  { id: "kociol-parowy-el-szczecin", title: "20 MW coal-fired steam boiler — Elektrownia Szczecin", description: "Supply and installation of a 20 MW steam boiler for Elektrownia Szczecin. The scope of work included boiler production, steam pipelines and installation of the ash-removal system.", category: "Steam boilers" },
  { id: "kociol-parowy-export-niemcy", title: "35 MW steam boiler — Kraftwerk Bayern (Germany)", description: "Manufacture of a 35 MW steam boiler for a German partner. The project was executed in accordance with TÜV standards for the German market.", category: "Steam boilers" },
  { id: "kociol-wodny-cieplownia-raciboz", title: "8 MW hot-water boiler — Ciepłownia Racibórz", description: "Construction of an 8 MW hot-water boiler for the municipal heat plant in Racibórz. The coal-fired boiler is adapted for operation in a district heating network.", category: "Water boilers" },
  { id: "kociol-wodny-krakow", title: "12 MW hot-water boiler — Industrial Plant Kraków", description: "Supply and commissioning of a 12 MW hot-water boiler for an industrial plant in Kraków. Work included design, manufacture, installation, UDT acceptance and operator training.", category: "Water boilers" },
  { id: "kociol-gazowy-wroclaw", title: "15 MW gas-fired boiler — Factory Wrocław", description: "Manufacture and installation of a 15 MW gas-fired boiler with multi-fuel burners. The installation is equipped with a modern control and process-monitoring system.", category: "Gas boilers" },
  { id: "kociol-gazowy-export-czechy", title: "10 MW gas-fired boiler — Teplárna Brno (Czech Republic)", description: "Delivery of a 10 MW gas-fired boiler to a Czech client. The project was executed in cooperation with a local partner, in compliance with CE standards and Czech market requirements.", category: "Gas boilers" },
  { id: "kociol-biomasowy-bydgoszcz", title: "25 MW biomass boiler — Ciepłownia Bydgoszcz", description: "Complete delivery of a 25 MW wood-chip biomass boiler. The project covered the full scope — design, manufacture, installation and commissioning of the plant including the fuel-feeding system.", category: "Biomass" },
  { id: "kociol-biomasowy-poznan", title: "20 MW biomass boiler — EC Poznań", description: "Construction of a 20 MW biomass boiler for the Poznań combined heat and power plant. The boiler is designed for burning forestry and agricultural biomass and is equipped with a modern flue-gas dedusting system.", category: "Biomass" },
  { id: "kociol-rdf-krakow", title: "18 MW RDF boiler — Waste-to-Energy Plant Kraków", description: "Manufacture of a steam boiler adapted for burning RDF alternative fuel with a capacity of 18 MW. The installation meets the requirements of the IED directive regarding pollutant emissions.", category: "Biomass" },
  { id: "kociol-biomasowy-export-austria", title: "Biomass boiler — Heizkraftwerk Graz (Austria)", description: "Supply of pressure components for a biomass boiler for an Austrian partner. The project was executed in accordance with SVTI/ASIT standards and Austrian market requirements.", category: "Biomass" },
  { id: "rurociagi-rafineria-gdansk", title: "Process pipelines — Gdańsk Refinery", description: "Fabrication of high-pressure process pipelines in accordance with PN-EN 13480. The scope included design, prefabrication, on-site installation and UDT acceptance.", category: "Pipelines" },
  { id: "rurociagi-pulawy", title: "Steam pipelines — Chemical Plant Puławy", description: "Modernisation and expansion of the steam pipeline network at Zakłady Azotowe Puławy. Work was carried out within short maintenance windows without interrupting plant production.", category: "Pipelines" },
  { id: "rurociagi-warszawa", title: "High-pressure pipelines — EC Warszawa", description: "Installation of high-pressure superheated steam pipelines for Elektrociepłownia Warszawa. The project covered over 2 km of DN50–DN500 pipelines with valves and supports.", category: "Pipelines" },
  { id: "rurociagi-export-francja", title: "Pipelines — Centrale Thermique Lyon (France)", description: "Prefabrication and supply of pipeline components for a French thermal power plant. Components made from P91 and P22 materials in accordance with the client's technical documentation.", category: "Pipelines" },
  { id: "modernizacja-ec-katowice", title: "Boiler modernisation 40 MW — EC Katowice", description: "Comprehensive modernisation of a 40 MW steam boiler — replacement of superheaters, preheaters and membrane walls. Work was completed during the planned major overhaul of the combined heat and power plant.", category: "Modernisations" },
  { id: "modernizacja-cieplownia-opole", title: "Boiler modernisation 30 MW — Ciepłownia Opole", description: "Overhaul and modernisation of a 30 MW hot-water boiler consisting of replacement of heat exchanger components and the combustion system. The scope also included adaptation of the installation to new emission standards.", category: "Modernisations" },
  { id: "remont-el-kozienice", title: "Major overhaul — Elektrownia Kozienice", description: "Major overhaul of a steam boiler including replacement of membrane walls, repair of superheaters and replacement of valves. Work was carried out in close coordination with the power plant's maintenance schedule.", category: "Modernisations" },
  { id: "modernizacja-ec-gdynia", title: "Steam system modernisation — EC Gdynia", description: "Modernisation of the steam system of the turbine set at the Gdynia combined heat and power plant. The scope of work included replacement of fresh-steam pipelines, control valves and thermal insulation.", category: "Modernisations" },
  { id: "instalacje-el-rybnik", title: "Auxiliary installations — Elektrownia Rybnik", description: "Construction of auxiliary installations for the power units of Elektrownia Rybnik. Work included installation of feed-water pipelines, drains and vents of the boiler system.", category: "Modernisations" },
  { id: "modernizacja-export-uk", title: "Modernisation — Power Station (United Kingdom)", description: "Supply and installation of pressure components for a modernised power station in the United Kingdom. The project was carried out in a consortium with a British partner, in compliance with BS standards and UK market requirements.", category: "Modernisations" },
  { id: "modernizacja-export-szwajcaria", title: "Modernisation — Heizkraftwerk (Switzerland)", description: "Supply of boiler components and pipelines for a Swiss combined heat and power plant. Execution compliant with SVTI/ASIT standards and requirements of the Swiss technical inspection authority.", category: "Modernisations" },
  { id: "kociol-parowy-export-indie", title: "Steam boiler — Power Plant (India)", description: "Manufacture and supply of pressure components for a steam boiler for an Indian investor. The project was executed in compliance with IBR (Indian Boiler Regulations) and client requirements.", category: "Steam boilers" }
]

const de_items = [
  { id: "kociol-parowy-ec-jaworzno", title: "30-MW-Kohledampfkessel — EC Jaworzno", description: "Herstellung und Montage eines kohlebefeuerten Dampfkessels mit 30 MW für das Heizkraftwerk Jaworzno. Der Umfang umfasste den gesamten Zyklus — von der Ausführungsplanung über die Produktion der Druckbauteile bis hin zu Montage, Inbetriebnahme und Schulung des Betriebspersonals.", category: "Dampfkessel" },
  { id: "kociol-parowy-el-lodz", title: "45-MW-Kohledampfkessel — EC Łódź", description: "Herstellung eines 45-MW-Dampfkessels für das Heizkraftwerk Łódź. Das Projekt wurde gemäß PN-EN 12952-3 ausgeführt und umfasste die Produktion von Membranwänden, Dampfüberhitzern und Wasservorwärmern.", category: "Dampfkessel" },
  { id: "kociol-parowy-el-szczecin", title: "20-MW-Kohledampfkessel — Elektrownia Szczecin", description: "Lieferung und Montage eines 20-MW-Dampfkessels für das Kraftwerk Szczecin. Der Leistungsumfang umfasste Kesselproduktion, Dampfrohrleitungen sowie die Installation des Entaschungssystems.", category: "Dampfkessel" },
  { id: "kociol-parowy-export-niemcy", title: "35-MW-Dampfkessel — Kraftwerk Bayern (Deutschland)", description: "Herstellung eines 35-MW-Dampfkessels im Auftrag eines deutschen Partners. Das Projekt wurde gemäß TÜV-Standards für den deutschen Markt ausgeführt.", category: "Dampfkessel" },
  { id: "kociol-wodny-cieplownia-raciboz", title: "8-MW-Heizwasserkessel — Fernheizwerk Racibórz", description: "Bau eines 8-MW-Heizwasserkessels für das städtische Fernheizwerk in Racibórz. Der kohlebefeuerte Kessel ist für den Betrieb im Fernwärmenetz ausgelegt.", category: "Wasserkessel" },
  { id: "kociol-wodny-krakow", title: "12-MW-Heizwasserkessel — Industriebetrieb Kraków", description: "Lieferung und Inbetriebnahme eines 12-MW-Heizwasserkessels für einen Industriebetrieb in Kraków. Die Arbeiten umfassten Planung, Fertigung, Montage, UDT-Abnahmen sowie Schulung des Betriebspersonals.", category: "Wasserkessel" },
  { id: "kociol-gazowy-wroclaw", title: "15-MW-Gaskessel — Fabrik Wrocław", description: "Herstellung und Montage eines 15-MW-Gaskessels mit Mehrstoffbrennern. Die Anlage ist mit einem modernen Steuerungs- und Prozessüberwachungssystem ausgestattet.", category: "Gaskessel" },
  { id: "kociol-gazowy-export-czechy", title: "10-MW-Gaskessel — Teplárna Brno (Tschechien)", description: "Lieferung eines 10-MW-Gaskessels an einen tschechischen Kunden. Das Projekt wurde in Zusammenarbeit mit einem lokalen Partner gemäß CE-Normen und den Anforderungen des tschechischen Marktes ausgeführt.", category: "Gaskessel" },
  { id: "kociol-biomasowy-bydgoszcz", title: "25-MW-Biomassekessel — Fernheizwerk Bydgoszcz", description: "Komplette Realisierung eines mit Holzhackschnitzeln befeuerten 25-MW-Biomassekessels. Das Projekt umfasste den gesamten Umfang — Planung, Fertigung, Montage und Inbetriebnahme einschließlich des Brennstoffzufuhrsystems.", category: "Biomasse" },
  { id: "kociol-biomasowy-poznan", title: "20-MW-Biomassekessel — EC Poznań", description: "Bau eines 20-MW-Biomassekessels für das Heizkraftwerk Poznań. Der Kessel ist für die Verbrennung von Forst- und Landwirtschaftsbiomasse ausgelegt und mit einem modernen Rauchgasentstaubungssystem ausgestattet.", category: "Biomasse" },
  { id: "kociol-rdf-krakow", title: "18-MW-RDF-Kessel — Abfallverbrennungsanlage Kraków", description: "Herstellung eines für die Verbrennung von Ersatzbrennstoff RDF ausgelegten Dampfkessels mit 18 MW. Die Anlage erfüllt die Anforderungen der IED-Richtlinie hinsichtlich Schadstoffemissionen.", category: "Biomasse" },
  { id: "kociol-biomasowy-export-austria", title: "Biomassekessel — Heizkraftwerk Graz (Österreich)", description: "Lieferung von Druckbauteilen für einen Biomassekessel an einen österreichischen Partner. Das Projekt wurde gemäß SVTI/ASIT-Normen und den Anforderungen des österreichischen Marktes ausgeführt.", category: "Biomasse" },
  { id: "rurociagi-rafineria-gdansk", title: "Prozessrohrleitungen — Raffinerie Gdańsk", description: "Ausführung von Hochdruck-Prozessrohrleitungen gemäß PN-EN 13480. Der Umfang umfasste Planung, Vorfertigung, Montage vor Ort sowie UDT-Abnahmen.", category: "Rohrleitungen" },
  { id: "rurociagi-pulawy", title: "Dampfrohrleitungen — Chemiewerk Puławy", description: "Modernisierung und Erweiterung des Dampfrohrleitungsnetzes bei den Stickstoffwerken Puławy. Die Arbeiten wurden in kurzen Wartungsfenstern ohne Produktionsunterbrechung des Werks ausgeführt.", category: "Rohrleitungen" },
  { id: "rurociagi-warszawa", title: "Hochdruckrohrleitungen — EC Warszawa", description: "Montage von Hochdruck-Heißdampfrohrleitungen für das Heizkraftwerk Warszawa. Das Projekt umfasste über 2 km Rohrleitungen DN50–DN500 mit Armaturen und Rohrhalterungen.", category: "Rohrleitungen" },
  { id: "rurociagi-export-francja", title: "Rohrleitungen — Centrale Thermique Lyon (Frankreich)", description: "Vorfertigung und Lieferung von Rohrleitungskomponenten für ein französisches Wärmekraftwerk. Komponenten aus P91- und P22-Werkstoffen gemäß technischer Dokumentation des Auftraggebers.", category: "Rohrleitungen" },
  { id: "modernizacja-ec-katowice", title: "Kesselmodernisierung 40 MW — EC Katowice", description: "Umfassende Modernisierung eines 40-MW-Dampfkessels — Austausch von Überhitzern, Vorwärmern und Membranwänden. Die Arbeiten wurden während der planmäßigen Generalüberholung des Heizkraftwerks ausgeführt.", category: "Modernisierungen" },
  { id: "modernizacja-cieplownia-opole", title: "Kesselmodernisierung 30 MW — Fernheizwerk Opole", description: "Überholung und Modernisierung eines 30-MW-Heizwasserkessels durch Austausch der Wärmetauscherkomponenten und des Verbrennungssystems. Der Umfang umfasste auch die Anpassung der Anlage an neue Emissionsnormen.", category: "Modernisierungen" },
  { id: "remont-el-kozienice", title: "Generalüberholung — Kraftwerk Kozienice", description: "Generalüberholung eines Dampfkessels einschließlich Austausch der Membranwände, Reparatur der Überhitzer und Austausch der Armaturen. Die Arbeiten wurden in enger Koordination mit dem Wartungsplan des Kraftwerks durchgeführt.", category: "Modernisierungen" },
  { id: "modernizacja-ec-gdynia", title: "Dampfsystemmodernisierung — EC Gdynia", description: "Modernisierung des Dampfsystems des Turbosatzes im Heizkraftwerk Gdynia. Der Arbeitsumfang umfasste den Austausch von Frischdampfrohrleitungen, Regelventilen und Wärmedämmung.", category: "Modernisierungen" },
  { id: "instalacje-el-rybnik", title: "Hilfsanlagen — Kraftwerk Rybnik", description: "Ausführung der Hilfsanlagen der Kraftwerksblöcke des Kraftwerks Rybnik. Die Arbeiten umfassten die Montage von Speisewasserrohrleitungen, Entwässerungen und Entlüftungen des Kesselsystems.", category: "Modernisierungen" },
  { id: "modernizacja-export-uk", title: "Modernisierung — Power Station (Großbritannien)", description: "Lieferung und Montage von Druckbauteilen für ein modernisiertes Kraftwerk in Großbritannien. Das Projekt wurde in einem Konsortium mit einem britischen Partner gemäß BS-Normen und UK-Marktanforderungen ausgeführt.", category: "Modernisierungen" },
  { id: "modernizacja-export-szwajcaria", title: "Modernisierung — Heizkraftwerk (Schweiz)", description: "Lieferung von Kesselkomponenten und Rohrleitungen für ein Schweizer Heizkraftwerk. Ausführung gemäß SVTI/ASIT-Normen und Anforderungen der schweizerischen technischen Überwachungsbehörde.", category: "Modernisierungen" },
  { id: "kociol-parowy-export-indie", title: "Dampfkessel — Power Plant (Indien)", description: "Herstellung und Lieferung von Druckbauteilen eines Dampfkessels für einen indischen Investor. Das Projekt wurde gemäß IBR (Indian Boiler Regulations) und den Anforderungen des Auftraggebers ausgeführt.", category: "Dampfkessel" }
]

// Update pl.json
const pl = JSON.parse(readFileSync('messages/pl.json', 'utf-8'))
pl.realizacje = {
  heading: "Realizacje",
  subheading: "Projekty, które zrealizowaliśmy z pełnym zaangażowaniem.",
  filter: "Kategorie",
  all: "Wszystkie",
  backToList: "\u2190 Powrót do realizacji",
  noPhoto: "Zdjęcia wkrótce",
  gallery: "Galeria zdjęć",
  items: pl_items
}
writeFileSync('messages/pl.json', JSON.stringify(pl, null, 2), 'utf-8')
console.log('pl.json updated')

// Update en.json
const en = JSON.parse(readFileSync('messages/en.json', 'utf-8'))
en.realizacje = {
  heading: "Projects",
  subheading: "Projects we have completed with full commitment.",
  filter: "Categories",
  all: "All",
  backToList: "\u2190 Back to projects",
  noPhoto: "Photos coming soon",
  gallery: "Photo gallery",
  items: en_items
}
writeFileSync('messages/en.json', JSON.stringify(en, null, 2), 'utf-8')
console.log('en.json updated')

// Update de.json
const de = JSON.parse(readFileSync('messages/de.json', 'utf-8'))
de.realizacje = {
  heading: "Referenzen",
  subheading: "Projekte, die wir mit vollem Engagement realisiert haben.",
  filter: "Kategorien",
  all: "Alle",
  backToList: "\u2190 Zurück zur Übersicht",
  noPhoto: "Fotos demnächst verfügbar",
  gallery: "Fotogalerie",
  items: de_items
}
writeFileSync('messages/de.json', JSON.stringify(de, null, 2), 'utf-8')
console.log('de.json updated')
