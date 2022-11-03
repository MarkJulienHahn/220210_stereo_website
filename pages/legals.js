import Head from "next/head";
import { useRouter } from "next/router";

import Button from "../components/Button";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

const legals = () => {

    const location = useRouter();
  return (
    <main>
      <Head>
        <title>Typefaces | Stereo Typefaces&#x2122;</title>
        <meta name="keywords" content="web" />
      </Head>

      <AnimatePresence exitBeforeEnter>

      <div className="buttonsLeftWrapper">
          <Link href="/" scroll={false}>
            <a>
              <Button lable={"Home"} subclass={"tertiary"} />
            </a>
          </Link>

          <Button lable={"Legals / Privacy"} subclass={"quaternaryMuted"} />
        </div>

      <div className="legalsWrapper">
      <motion.div
          location={location}
          key={location.pathname}
          initial={{ y: 300, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
        <p className="footerInfoHead">Legal Notice</p>
        <h1>
          Stereo Typefaces GbR
          <br />
          Groninger Straße 48
          <br />
          13347 Berlin
          <br />
          <br />
          +49 1520 35 69 305 <br />
          <a href="mailto:info@stereotypefaces.com">info@stereotypefaces</a>

        </h1>
        <p className="footerInfoHead">Represented by</p>
        <h1>
          Jan Robert Obst
          <br />
          Mark Julien Hahn
          <br />
          13347 Berlin
        </h1>
        <p>
          The content of this website is protected by copyright. All rights are
          reserved to Stereo Typefaces GbR or its partner companies (suppliers,
          providers, manufacturers, etc.). Any use of the content of this site
          is only permitted with the express permission of Stereo Typefaces Gbr.
          <br /> <br />
          Privacy <br /> <br />

Arten der verarbeiteten Daten:
Bestandsdaten (z.B., Namen, Adressen).
Kontaktdaten (z.B., E-Mail, Telefonnummern).
Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos).
Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).
Meta-/Kommunikationsdaten (z.B., Geräte-Informationen, IP-Adressen).
Kategorien betroffener Personen
Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir die betroffenen Personen zusammenfassend auch als „Nutzer&quot;).
<br /> <br />
Zweck der Verarbeitung
Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte.
Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern.
Sicherheitsmaßnahmen.
Reichweitenmessung/Marketing
Verwendete Begrifflichkeiten
„Personenbezogene Daten&quot; sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person&quot;) beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind.
<br /> <br />
„Verarbeitung&quot; ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten.
<br /> <br />
„Pseudonymisierung&quot; die Verarbeitung personenbezogener Daten in einer Weise, dass die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen werden.
<br /> <br />
„Profiling&quot; jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere um Aspekte bezüglich Arbeitsleistung, wirtschaftliche Lage, Gesundheit, persönliche Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen.
<br /> <br />
Als „Verantwortlicher&quot; wird die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.
<br /> <br />
„Auftragsverarbeiter&quot; eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.
<br /> <br />
Maßgebliche Rechtsgrundlagen
Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit. Sofern die Rechtsgrundlage in der Datenschutzerklärung nicht genannt wird, gilt Folgendes: Die Rechtsgrundlage für die Einholung von Einwilligungen ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO, die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer Leistungen und Durchführung vertraglicher Maßnahmen sowie Beantwortung von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO, die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 1 lit. c DSGVO, und die Rechtsgrundlage für die Verarbeitung zur Wahrung unserer berechtigten Interessen ist Art. 6 Abs. 1 lit. f DSGVO. Für den Fall, dass lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person eine Verarbeitung personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1 lit. d DSGVO als Rechtsgrundlage.
<br /> <br />
Sicherheitsmaßnahmen
Wir treffen nach Maßgabe des Art. 32 DSGVO unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und Freiheiten natürlicher Personen, geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
<br /> <br />
Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen Zugangs zu den Daten, als auch des sie betreffenden Zugriffs, der Eingabe, Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, Löschung von Daten und Reaktion auf Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung, bzw. Auswahl von Hardware, Software sowie Verfahren, entsprechend dem Prinzip des Datenschutzes durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen (Art. 25 DSGVO).
<br /> <br />
Zusammenarbeit mit Auftragsverarbeitern und Dritten
Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber anderen Personen und Unternehmen (Auftragsverarbeitern oder Dritten) offenbaren, sie an diese übermitteln oder ihnen sonst Zugriff auf die Daten gewähren, erfolgt dies nur auf Grundlage einer gesetzlichen Erlaubnis (z.B. wenn eine Übermittlung der Daten an Dritte, wie an Zahlungsdienstleister, gem. Art. 6 Abs. 1 lit. b DSGVO zur Vertragserfüllung erforderlich ist), Sie eingewilligt haben, eine rechtliche Verpflichtung dies vorsieht oder auf Grundlage unserer berechtigten Interessen (z.B. beim Einsatz von Beauftragten, Webhostern, etc.).
<br /> <br />
Sofern wir Dritte mit der Verarbeitung von Daten auf Grundlage eines sog. „Auftragsverarbeitungsvertrages&quot; beauftragen, geschieht dies auf Grundlage des Art. 28 DSGVO.
<br /> <br />
Übermittlungen in Drittländer
Sofern wir Daten in einem Drittland (d.h. außerhalb der Europäischen Union (EU) oder des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder dies im Rahmen der Inanspruchnahme von Diensten Dritter oder Offenlegung, bzw. Übermittlung von Daten an Dritte geschieht, erfolgt dies nur, wenn es zur Erfüllung unserer (vor)vertraglichen Pflichten, auf Grundlage Ihrer Einwilligung, aufgrund einer rechtlichen Verpflichtung oder auf Grundlage unserer berechtigten Interessen geschieht. Vorbehaltlich gesetzlicher oder vertraglicher Erlaubnisse, verarbeiten oder lassen wir die Daten in einem Drittland nur beim Vorliegen der besonderen Voraussetzungen der Art. 44 ff. DSGVO verarbeiten. D.h. die Verarbeitung erfolgt z.B. auf Grundlage besonderer Garantien, wie der offiziell anerkannten Feststellung eines der EU entsprechenden Datenschutzniveaus (z.B. für die USA durch das „Privacy Shield&quot;) oder Beachtung offiziell anerkannter spezieller vertraglicher Verpflichtungen (so genannte „Standardvertragsklauseln&quot;).
<br /> <br />
Rechte der betroffenen Personen
Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend Art. 15 DSGVO.
<br /> <br />
Sie haben entsprechend. Art. 16 DSGVO das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
<br /> <br />
Sie haben nach Maßgabe des Art. 17 DSGVO das Recht zu verlangen, dass betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe des Art. 18 DSGVO eine Einschränkung der Verarbeitung der Daten zu verlangen.
<br /> <br />
Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten, die Sie uns bereitgestellt haben nach Maßgabe des Art. 20 DSGVO zu erhalten und deren Übermittlung an andere Verantwortliche zu fordern.
<br /> <br />
Sie haben ferner gem. Art. 77 DSGVO das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.
<br /> <br />
Widerrufsrecht
Sie haben das Recht, erteilte Einwilligungen gem. Art. 7 Abs. 3 DSGVO mit Wirkung für die Zukunft zu widerrufen
<br /> <br />
Widerspruchsrecht
Sie können der künftigen Verarbeitung der Sie betreffenden Daten nach Maßgabe des Art. 21 DSGVO jederzeit widersprechen. Der Widerspruch kann insbesondere gegen die Verarbeitung für Zwecke der Direktwerbung erfolgen.
<br /> <br />
Cookies und Widerspruchsrecht bei Direktwerbung
Als „Cookies&quot; werden kleine Dateien bezeichnet, die auf Rechnern der Nutzer gespeichert werden. Innerhalb der Cookies können unterschiedliche Angaben gespeichert werden. Ein Cookie dient primär dazu, die Angaben zu einem Nutzer (bzw. dem Gerät auf dem das Cookie gespeichert ist) während oder auch nach seinem Besuch innerhalb eines Onlineangebotes zu speichern. Als temporäre Cookies, bzw. „Session-Cookies&quot; oder „transiente Cookies&quot;, werden Cookies bezeichnet, die gelöscht werden, nachdem ein Nutzer ein Onlineangebot verlässt und seinen Browser schließt. In einem solchen Cookie kann z.B. der Inhalt eines Warenkorbs in einem Onlineshop oder ein Login-Status gespeichert werden. Als „permanent&quot; oder „persistent&quot; werden Cookies bezeichnet, die auch nach dem Schließen des Browsers gespeichert bleiben. So kann z.B. der Login-Status gespeichert werden, wenn die Nutzer diese nach mehreren Tagen aufsuchen. Ebenso können in einem solchen Cookie die Interessen der Nutzer gespeichert werden, die für Reichweitenmessung oder Marketingzwecke verwendet werden. Als „Third-Party-Cookie&quot; werden Cookies bezeichnet, die von anderen Anbietern als dem Verantwortlichen, der das Onlineangebot betreibt, angeboten werden (andernfalls, wenn es nur dessen Cookies sind spricht man von „First-Party Cookies&quot;).
<br /> <br />
Wir können temporäre und permanente Cookies einsetzen und klären hierüber im Rahmen unserer Datenschutzerklärung auf.
<br /> <br />
Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner gespeichert werden, werden sie gebeten die entsprechende Option in den Systemeinstellungen ihres Browsers zu deaktivieren. Gespeicherte Cookies können in den Systemeinstellungen des Browsers gelöscht werden. Der Ausschluss von Cookies kann zu Funktionseinschränkungen dieses Onlineangebotes führen.
<br /> <br />
Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des Onlinemarketing eingesetzten Cookies kann bei einer Vielzahl der Dienste, vor allem im Fall des Trackings, über die US-amerikanische Seite http://www.aboutads.info/choices/ oder die EU-Seite http://www.youronlinechoices.com/ erklärt werden. Des Weiteren kann die Speicherung von Cookies mittels deren Abschaltung in den Einstellungen des Browsers erreicht werden. Bitte beachten Sie, dass dann gegebenenfalls nicht alle Funktionen dieses Onlineangebotes genutzt werden können.
<br /> <br />
Löschung von Daten
Die von uns verarbeiteten Daten werden nach Maßgabe der Art. 17 und 18 DSGVO gelöscht oder in ihrer Verarbeitung eingeschränkt. Sofern nicht im Rahmen dieser Datenschutzerklärung ausdrücklich angegeben, werden die bei uns gespeicherten Daten gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung eingeschränkt. D.h. die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen.
<br /> <br />
Nach gesetzlichen Vorgaben in Deutschland, erfolgt die Aufbewahrung insbesondere für 10 Jahre gemäß §§ 147 Abs. 1 AO, 257 Abs. 1 Nr. 1 und 4, Abs. 4 HGB (Bücher, Aufzeichnungen, Lageberichte, Buchungsbelege, Handelsbücher, für Besteuerung relevanter Unterlagen, etc.) und 6 Jahre gemäß § 257 Abs. 1 Nr. 2 und 3, Abs. 4 HGB (Handelsbriefe).
<br /> <br />
Nach gesetzlichen Vorgaben in Österreich erfolgt die Aufbewahrung insbesondere für 7 J gemäß § 132 Abs. 1 BAO (Buchhaltungsunterlagen, Belege/Rechnungen, Konten, Belege, Geschäftspapiere, Aufstellung der Einnahmen und Ausgaben, etc.), für 22 Jahre im Zusammenhang mit Grundstücken und für 10 Jahre bei Unterlagen im Zusammenhang mit elektronisch erbrachten Leistungen, Telekommunikations-, Rundfunk- und Fernsehleistungen, die an Nichtunternehmer in EU-Mitgliedstaaten erbracht werden und für die der Mini-One-Stop-Shop (MOSS) in Anspruch genommen wird.
<br /> <br />
Geschäftsbezogene Verarbeitung          <br /> <br />
Zusätzlich verarbeiten wir
<br /> <br />
Vertragsdaten (z.B., Vertragsgegenstand, Laufzeit, Kundenkategorie).
Zahlungsdaten (z.B., Bankverbindung, Zahlungshistorie)
von unseren Kunden, Interessenten und Geschäftspartner zwecks Erbringung vertraglicher Leistungen, Service und Kundenpflege, Marketing, Werbung und Marktforschung.
<br /> <br />
Bestellabwicklung im Onlineshop und Kundenkonto
Wir verarbeiten die Daten unserer Kunden im Rahmen der Bestellvorgänge in unserem Onlineshop, um ihnen die Auswahl und die Bestellung der gewählten Produkte und Leistungen, sowie deren Bezahlung und Zustellung, bzw. Ausführung zu ermöglichen.
<br /> <br />
Zu den verarbeiteten Daten gehören Bestandsdaten, Kommunikationsdaten, Vertragsdaten, Zahlungsdaten und zu den von der Verarbeitung betroffenen Personen gehören unsere Kunden, Interessenten und sonstige Geschäftspartner. Die Verarbeitung erfolgt zum Zweck der Erbringung von Vertragsleistungen im Rahmen des Betriebs eines Onlineshops, Abrechnung, Auslieferung und der Kundenservices. Hierbei setzen wir Session Cookies für die Speicherung des Warenkorb-Inhalts und permanente Cookies für die Speicherung des Login-Status ein.
<br /> <br />
Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. b (Durchführung Bestellvorgänge) und c (Gesetzlich erforderliche Archivierung) DSGVO. Dabei sind die als erforderlich gekennzeichneten Angaben zur Begründung und Erfüllung des Vertrages erforderlich. Die Daten offenbaren wir gegenüber Dritten nur im Rahmen der Auslieferung, Zahlung oder im Rahmen der gesetzlichen Erlaubnisse und Pflichten gegenüber Rechtsberatern und Behörden. Die Daten werden in Drittländern nur dann verarbeitet, wenn dies zur Vertragserfüllung erforderlich ist (z.B. auf Kundenwunsch bei Auslieferung oder Zahlung).
<br /> <br />
Nutzer können optional ein Nutzerkonto anlegen, indem sie insbesondere ihre Bestellungen einsehen können. Im Rahmen der Registrierung, werden die erforderlichen Pflichtangaben den Nutzern mitgeteilt. Die Nutzerkonten sind nicht öffentlich und können von Suchmaschinen nicht indexiert werden. Wenn Nutzer ihr Nutzerkonto gekündigt haben, werden deren Daten im Hinblick auf das Nutzerkonto gelöscht, vorbehaltlich deren Aufbewahrung ist aus handels- oder steuerrechtlichen Gründen entspr. Art. 6 Abs. 1 lit. c DSGVO notwendig. Angaben im Kundenkonto verbleiben bis zu dessen Löschung mit anschließender Archivierung im Fall einer rechtlichen Verpflichtung. Es obliegt den Nutzern, ihre Daten bei erfolgter Kündigung vor dem Vertragsende zu sichern.
<br /> <br />
Im Rahmen der Registrierung und erneuter Anmeldungen sowie Inanspruchnahme unserer Onlinedienste, speichern wir die IP-Adresse und den Zeitpunkt der jeweiligen Nutzerhandlung. Die Speicherung erfolgt auf Grundlage unserer berechtigten Interessen, als auch der Nutzer an Schutz vor Missbrauch und sonstiger unbefugter Nutzung. Eine Weitergabe dieser Daten an Dritte erfolgt grundsätzlich nicht, außer sie ist zur Verfolgung unserer Ansprüche erforderlich oder es besteht hierzu eine gesetzliche Verpflichtung gem. Art. 6 Abs. 1 lit. c DSGVO.
<br /> <br />
Die Löschung erfolgt nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten, die Erforderlichkeit der Aufbewahrung der Daten wird alle drei Jahre überprüft; im Fall der gesetzlichen Archivierungspflichten erfolgt die Löschung nach deren Ablauf (Ende handelsrechtlicher (6 Jahre) und steuerrechtlicher (10 Jahre) Aufbewahrungspflicht).
<br /> <br />
Agenturdienstleistungen
Wir verarbeiten die Daten unserer Kunden im Rahmen unserer vertraglichen Leistungen zu denen konzeptionelle und strategische Beratung, Kampagnenplanung, Software- und Designentwicklung/-beratung oder Pflege, Umsetzung von Kampagnen und Prozessen/ Handling, Serveradministration, Datenanalyse/ Beratungsleistungen und Schulungsleistungen gehören.
<br /> <br />
Hierbei verarbeiten wir Bestandsdaten (z.B., Kundenstammdaten, wie Namen oder Adressen), Kontaktdaten (z.B., E-Mail, Telefonnummern), Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos), Vertragsdaten (z.B., Vertragsgegenstand, Laufzeit), Zahlungsdaten (z.B., Bankverbindung, Zahlungshistorie), Nutzungs- und Metadaten (z.B. im Rahmen der Auswertung und Erfolgsmessung von Marketingmaßnahmen). Besondere Kategorien personenbezogener Daten verarbeiten wir grundsätzlich nicht, außer wenn diese Bestandteile einer beauftragten Verarbeitung sind. Zu den Betroffenen gehören unsere Kunden, Interessenten sowie deren Kunden, Nutzer, Websitebesucher oder Mitarbeiter sowie Dritte. Der Zweck der Verarbeitung besteht in der Erbringung von Vertragsleistungen, Abrechnung und unserem Kundenservice. Die Rechtsgrundlagen der Verarbeitung ergeben sich aus Art. 6 Abs. 1 lit. b DSGVO (vertragliche Leistungen), Art. 6 Abs. 1 lit. f DSGVO (Analyse, Statistik, Optimierung, Sicherheitsmaßnahmen). Wir verarbeiten Daten, die zur Begründung und Erfüllung der vertraglichen Leistungen erforderlich sind und weisen auf die Erforderlichkeit ihrer Angabe hin. Eine Offenlegung an Externe erfolgt nur, wenn sie im Rahmen eines Auftrags erforderlich ist. Bei der Verarbeitung der uns im Rahmen eines Auftrags überlassenen Daten handeln wir entsprechend den Weisungen der Auftraggeber sowie der gesetzlichen Vorgaben einer Auftragsverarbeitung gem. Art. 28 DSGVO und verarbeiten die Daten zu keinen anderen, als den auftragsgemäßen Zwecken.
<br /> <br />
Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten. die Erforderlichkeit der Aufbewahrung der Daten wird alle drei Jahre überprüft; im Fall der gesetzlichen Archivierungspflichten erfolgt die Löschung nach deren Ablauf (6 J, gem. § 257 Abs. 1 HGB, 10 J, gem. § 147 Abs. 1 AO). Im Fall von Daten, die uns gegenüber im Rahmen eines Auftrags durch den Auftraggeber offengelegt wurden, löschen wir die Daten entsprechend den Vorgaben des Auftrags, grundsätzlich nach Ende des Auftrags.
<br /> <br />
Externe Zahlungsdienstleister
Wir setzen externe Zahlungsdienstleister ein, über deren Plattformen die Nutzer und wir Zahlungstransaktionen vornehmen können (z.B., jeweils mit Link zur Datenschutzerklärung, Paypal (https://www.paypal.com/de/webapps/mpp/ua/privacy-full), Klarna (https://www.klarna.com/de/datenschutz/), Skrill (https://www.skrill.com/de/fusszeile/datenschutzrichtlinie/), Giropay (https://www.giropay.de/rechtliches/datenschutz-agb/), Visa (https://www.visa.de/datenschutz), Mastercard (https://www.mastercard.de/de-de/datenschutz.html), American Express (https://www.americanexpress.com/de/content/privacy-policy-statement.html)
<br /> <br />
Im Rahmen der Erfüllung von Verträgen setzen wir die Zahlungsdienstleister auf Grundlage des Art. 6 Abs. 1 lit. b. DSGVO ein. Im Übrigen setzen wir externe Zahlungsdienstleister auf Grundlage unserer berechtigten Interessen gem. Art. 6 Abs. 1 lit. b. DSGVO ein, um unseren Nutzern effektive und sichere Zahlungsmöglichkeit zu bieten.
<br /> <br />
Zu den, durch die Zahlungsdienstleister verarbeiteten Daten gehören Bestandsdaten, wie z.B. der Name und die Adresse, Bankdaten, wie z.B. Kontonummern oder Kreditkartennummern, Passwörter, TANs und Prüfsummen sowie die Vertrags-, Summen und empfängerbezogenen Angaben. Die Angaben sind erforderlich, um die Transaktionen durchzuführen. Die eingegebenen Daten werden jedoch nur durch die Zahlungsdienstleister verarbeitet und bei diesen gespeichert. D.h. wir erhalten keine konto- oder kreditkartenbezogenen Informationen, sondern lediglich Informationen mit Bestätigung oder Negativbeauskunftung der Zahlung. Unter Umständen werden die Daten seitens der Zahlungsdienstleister an Wirtschaftsauskunfteien übermittelt. Diese Übermittlung bezweckt die Identitäts- und Bonitätsprüfung. Hierzu verweisen wir auf die AGB und Datenschutzhinweise der Zahlungsdienstleister.
<br /> <br />
Für die Zahlungsgeschäfte gelten die Geschäftsbedingungen und die Datenschutzhinweise der jeweiligen Zahlungsdienstleister, welche innerhalb der jeweiligen Webseiten, bzw. Transaktionsapplikationen abrufbar sind. Wir verweisen auf diese ebenfalls zwecks weiterer Informationen und Geltendmachung von Widerrufs-, Auskunfts- und anderen Betroffenenrechten.
<br /> <br />
Administration, Finanzbuchhaltung, Büroorganisation, Kontaktverwaltung
Wir verarbeiten Daten im Rahmen von Verwaltungsaufgaben sowie Organisation unseres Betriebs, Finanzbuchhaltung und Befolgung der gesetzlichen Pflichten, wie z.B. der Archivierung. Hierbei verarbeiten wir dieselben Daten, die wir im Rahmen der Erbringung unserer vertraglichen Leistungen verarbeiten. Die Verarbeitungsgrundlagen sind Art. 6 Abs. 1 lit. c. DSGVO, Art. 6 Abs. 1 lit. f. DSGVO. Von der Verarbeitung sind Kunden, Interessenten, Geschäftspartner und Websitebesucher betroffen. Der Zweck und unser Interesse an der Verarbeitung liegt in der Administration, Finanzbuchhaltung, Büroorganisation, Archivierung von Daten, also Aufgaben die der Aufrechterhaltung unserer Geschäftstätigkeiten, Wahrnehmung unserer Aufgaben und Erbringung unserer Leistungen dienen. Die Löschung der Daten im Hinblick auf vertragliche Leistungen und die vertragliche Kommunikation entspricht den, bei diesen Verarbeitungstätigkeiten genannten Angaben.
<br /> <br />
Wir offenbaren oder übermitteln hierbei Daten an die Finanzverwaltung, Berater, wie z.B., Steuerberater oder Wirtschaftsprüfer sowie weitere Gebührenstellen und Zahlungsdienstleister.
<br /> <br />
Ferner speichern wir auf Grundlage unserer betriebswirtschaftlichen Interessen Angaben zu Lieferanten, Veranstaltern und sonstigen Geschäftspartnern, z.B. zwecks späterer Kontaktaufnahme. Diese mehrheitlich unternehmensbezogenen Daten, speichern wir grundsätzlich dauerhaft.
<br /> <br />
Datenschutzhinweise im Bewerbungsverfahren
Wir verarbeiten die Bewerberdaten nur zum Zweck und im Rahmen des Bewerbungsverfahrens im Einklang mit den gesetzlichen Vorgaben. Die Verarbeitung der Bewerberdaten erfolgt zur Erfüllung unserer (vor)vertraglichen Verpflichtungen im Rahmen des Bewerbungsverfahrens im Sinne des Art. 6 Abs. 1 lit. b. DSGVO Art. 6 Abs. 1 lit. f. DSGVO sofern die Datenverarbeitung z.B. im Rahmen von rechtlichen Verfahren für uns erforderlich wird (in Deutschland gilt zusätzlich § 26 BDSG).
<br /> <br />
Das Bewerbungsverfahren setzt voraus, dass Bewerber uns die Bewerberdaten mitteilen. Die notwendigen Bewerberdaten sind, sofern wir ein Onlineformular anbieten gekennzeichnet, ergeben sich sonst aus den Stellenbeschreibungen und grundsätzlich gehören dazu die Angaben zur Person, Post- und Kontaktadressen und die zur Bewerbung gehörenden Unterlagen, wie Anschreiben, Lebenslauf und die Zeugnisse. Daneben können uns Bewerber freiwillig zusätzliche Informationen mitteilen.
<br /> <br />
Mit der Übermittlung der Bewerbung an uns, erklären sich die Bewerber mit der Verarbeitung ihrer Daten zu Zwecken des Bewerbungsverfahrens entsprechend der in dieser Datenschutzerklärung dargelegten Art und Umfang einverstanden.
<br /> <br />
Soweit im Rahmen des Bewerbungsverfahrens freiwillig besondere Kategorien von personenbezogenen Daten im Sinne des Art. 9 Abs. 1 DSGVO mitgeteilt werden, erfolgt deren Verarbeitung zusätzlich nach Art. 9 Abs. 2 lit. b DSGVO (z.B. Gesundheitsdaten, wie z.B. Schwerbehinderteneigenschaft oder ethnische Herkunft). Soweit im Rahmen des Bewerbungsverfahrens besondere Kategorien von personenbezogenen Daten im Sinne des Art. 9 Abs. 1 DSGVO bei Bewerbern angefragt werden, erfolgt deren Verarbeitung zusätzlich nach Art. 9 Abs. 2 lit. a DSGVO (z.B. Gesundheitsdaten, wenn diese für die Berufsausübung erforderlich sind).
<br /> <br />
Sofern zur Verfügung gestellt, können uns Bewerber ihre Bewerbungen mittels eines Onlineformulars auf unserer Website übermitteln. Die Daten werden entsprechend dem Stand der Technik verschlüsselt an uns übertragen.
Ferner können Bewerber uns ihre Bewerbungen via E-Mail übermitteln. Hierbei bitten wir jedoch zu beachten, dass E-Mails grundsätzlich nicht verschlüsselt versendet werden und die Bewerber selbst für die Verschlüsselung sorgen müssen. Wir können daher für den Übertragungsweg der Bewerbung zwischen dem Absender und dem Empfang auf unserem Server keine Verantwortung übernehmen und empfehlen daher eher ein Online-Formular oder den postalischen Versand zu nutzen. Denn statt der Bewerbung über das Online-Formular und E-Mail, steht den Bewerbern weiterhin die Möglichkeit zur Verfügung, uns die Bewerbung auf dem Postweg zuzusenden.
<br /> <br />
Die von den Bewerbern zur Verfügung gestellten Daten, können im Fall einer erfolgreichen Bewerbung für die Zwecke des Beschäftigungsverhältnisses von uns weiterverarbeitet werden. Andernfalls, sofern die Bewerbung auf ein Stellenangebot nicht erfolgreich ist, werden die Daten der Bewerber gelöscht. Die Daten der Bewerber werden ebenfalls gelöscht, wenn eine Bewerbung zurückgezogen wird, wozu die Bewerber jederzeit berechtigt sind.
<br /> <br />
Die Löschung erfolgt, vorbehaltlich eines berechtigten Widerrufs der Bewerber, nach dem Ablauf eines Zeitraums von sechs Monaten, damit wir etwaige Anschlussfragen zu der Bewerbung beantworten und unseren Nachweispflichten aus dem Gleichbehandlungsgesetz genügen können. Rechnungen über etwaige Reisekostenerstattung werden entsprechend den steuerrechtlichen Vorgaben archiviert.
<br /> <br />
Kontaktaufnahme
Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via sozialer Medien) werden die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage und deren Abwicklung gem. Art. 6 Abs. 1 lit. b) DSGVO verarbeitet. Die Angaben der Nutzer können in einem Customer-Relationship-Management System (&quot;CRM System&quot;) oder vergleichbarer Anfragenorganisation gespeichert werden.
<br /> <br />
Wir löschen die Anfragen, sofern diese nicht mehr erforderlich sind. Wir überprüfen die Erforderlichkeit alle zwei Jahre; Ferner gelten die gesetzlichen Archivierungspflichten.
<br /> <br />
Newsletter
Mit den nachfolgenden Hinweisen informieren wir Sie über die Inhalte unseres Newsletters sowie das Anmelde-, Versand- und das statistische Auswertungsverfahren sowie Ihre Widerspruchsrechte auf. Indem Sie unseren Newsletter abonnieren, erklären Sie sich mit dem Empfang und den beschriebenen Verfahren einverstanden.
<br /> <br />
Inhalt des Newsletters: Wir versenden Newsletter, E-Mails und weitere elektronische Benachrichtigungen mit werblichen Informationen (nachfolgend „Newsletter&quot;) nur mit der Einwilligung der Empfänger oder einer gesetzlichen Erlaubnis. Sofern im Rahmen einer Anmeldung zum Newsletter dessen Inhalte konkret umschrieben werden, sind sie für die Einwilligung der Nutzer maßgeblich. Im Übrigen enthalten unsere Newsletter Informationen zu unseren Leistungen und uns.
<br /> <br />
Double-Opt-In und Protokollierung: Die Anmeldung zu unserem Newsletter erfolgt in einem sog. Double-Opt-In-Verfahren. D.h. Sie erhalten nach der Anmeldung eine E-Mail, in der Sie um die Bestätigung Ihrer Anmeldung gebeten werden. Diese Bestätigung ist notwendig, damit sich niemand mit fremden E-Mailadressen anmelden kann. Die Anmeldungen zum Newsletter werden protokolliert, um den Anmeldeprozess entsprechend den rechtlichen Anforderungen nachweisen zu können. Hierzu gehört die Speicherung des Anmelde- und des Bestätigungszeitpunkts, als auch der IP-Adresse. Ebenso werden die Änderungen Ihrer bei dem Versanddienstleister gespeicherten Daten protokolliert.
<br /> <br />
Anmeldedaten: Um sich für den Newsletter anzumelden, reicht es aus, wenn Sie Ihre E-Mailadresse angeben. Optional bitten wir Sie einen Namen, zwecks persönlicher Ansprache im Newsletters anzugeben.
<br /> <br />
Der Versand des Newsletters und die mit ihm verbundene Erfolgsmessung erfolgen auf Grundlage einer Einwilligung der Empfänger gem. Art. 6 Abs. 1 lit. a, Art. 7 DSGVO i.V.m § 7 Abs. 2 Nr. 3 UWG oder falls eine Einwilligung nicht erforderlich ist, auf Grundlage unserer berechtigten Interessen am Direktmarketing gem. Art. 6 Abs. 1 lt. f. DSGVO i.V.m. § 7 Abs. 3 UWG.
<br /> <br />
Die Protokollierung des Anmeldeverfahrens erfolgt auf Grundlage unserer berechtigten Interessen gem. Art. 6 Abs. 1 lit. f DSGVO. Unser Interesse richtet sich auf den Einsatz eines nutzerfreundlichen sowie sicheren Newslettersystems, das sowohl unseren geschäftlichen Interessen dient, als auch den Erwartungen der Nutzer entspricht und uns ferner den Nachweis von Einwilligungen erlaubt.
<br /> <br />
Kündigung/Widerruf -- Sie können den Empfang unseres Newsletters jederzeit kündigen, d.h. Ihre Einwilligungen widerrufen. Einen Link zur Kündigung des Newsletters finden Sie am Ende eines jeden Newsletters. Wir können die ausgetragenen E-Mailadressen bis zu drei Jahren auf Grundlage unserer berechtigten Interessen speichern bevor wir sie löschen, um eine ehemals gegebene Einwilligung nachweisen zu können. Die Verarbeitung dieser Daten wird auf den Zweck einer möglichen Abwehr von Ansprüchen beschränkt. Ein individueller Löschungsantrag ist jederzeit möglich, sofern zugleich das ehemalige Bestehen einer Einwilligung bestätigt wird.
<br /> <br />
Newsletter -- Mailchimp
Der Versand der Newsletter erfolgt mittels des Versanddienstleisters „MailChimp&quot;, einer Newsletterversandplattform des US-Anbieters Rocket Science Group, LLC, 675 Ponce De Leon Ave NE #5000, Atlanta, GA 30308, USA. Die Datenschutzbestimmungen des Versanddienstleisters können Sie hier einsehen: https://mailchimp.com/legal/privacy/. The Rocket Science Group LLC d/b/a MailChimp ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäisches Datenschutzniveau einzuhalten (https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG&status=Active). Der Versanddienstleister wird auf Grundlage unserer berechtigten Interessen gem. Art. 6 Abs. 1 lit. f DSGVO und eines Auftragsverarbeitungsvertrages gem. Art. 28 Abs. 3 S. 1 DSGVO eingesetzt.
<br /> <br />
Der Versanddienstleister kann die Daten der Empfänger in pseudonymer Form, d.h. ohne Zuordnung zu einem Nutzer, zur Optimierung oder Verbesserung der eigenen Services nutzen, z.B. zur technischen Optimierung des Versandes und der Darstellung der Newsletter oder für statistische Zwecke verwenden. Der Versanddienstleister nutzt die Daten unserer Newsletterempfänger jedoch nicht, um diese selbst anzuschreiben oder um die Daten an Dritte weiterzugeben.
<br /> <br />
Newsletter -- Erfolgsmessung
Die Newsletter enthalten einen sog. „web-beacon&quot;, d.h. eine pixelgroße Datei, die beim Öffnen des Newsletters von unserem Server, bzw. sofern wir einen Versanddienstleister einsetzen, von dessen Server abgerufen wird. Im Rahmen dieses Abrufs werden zunächst technische Informationen, wie Informationen zum Browser und Ihrem System, als auch Ihre IP-Adresse und Zeitpunkt des Abrufs erhoben.

Diese Informationen werden zur technischen Verbesserung der Services anhand der technischen Daten oder der Zielgruppen und ihres Leseverhaltens anhand derer Abruforte (die mit Hilfe der IP-Adresse bestimmbar sind) oder der Zugriffszeiten genutzt. Zu den statistischen Erhebungen gehört ebenfalls die Feststellung, ob die Newsletter geöffnet werden, wann sie geöffnet werden und welche Links geklickt werden. Diese Informationen können aus technischen Gründen zwar den einzelnen Newsletterempfängern zugeordnet werden. Es ist jedoch weder unser Bestreben, noch, sofern eingesetzt, das des Versanddienstleisters, einzelne Nutzer zu beobachten. Die Auswertungen dienen uns viel mehr dazu, die Lesegewohnheiten unserer Nutzer zu erkennen und unsere Inhalte auf sie anzupassen oder unterschiedliche Inhalte entsprechend den Interessen unserer Nutzer zu versenden.

Ein getrennter Widerruf der Erfolgsmessung ist leider nicht möglich, in diesem Fall muss das gesamte Newsletterabonnement gekündigt werden.

Hosting und E-Mail-Versand
Die von uns in Anspruch genommenen Hosting-Leistungen dienen der Zurverfügungstellung der folgenden Leistungen: Infrastruktur- und Plattformdienstleistungen, Rechenkapazität, Speicherplatz und Datenbankdienste, E-Mail-Versand, Sicherheitsleistungen sowie technische Wartungsleistungen, die wir zum Zwecke des Betriebs dieses Onlineangebotes einsetzen.

Hierbei verarbeiten wir, bzw. unser Hostinganbieter Bestandsdaten, Kontaktdaten, Inhaltsdaten, Vertragsdaten, Nutzungsdaten, Meta- und Kommunikationsdaten von Kunden, Interessenten und Besuchern dieses Onlineangebotes auf Grundlage unserer berechtigten Interessen an einer effizienten und sicheren Zurverfügungstellung dieses Onlineangebotes gem. Art. 6 Abs. 1 lit. f DSGVO i.V.m. Art. 28 DSGVO (Abschluss Auftragsverarbeitungsvertrag).

Erhebung von Zugriffsdaten und Logfiles
Wir, bzw. unser Hostinganbieter, erhebt auf Grundlage unserer berechtigten Interessen im Sinne des Art. 6 Abs. 1 lit. f. DSGVO Daten über jeden Zugriff auf den Server, auf dem sich dieser Dienst befindet (sogenannte Serverlogfiles). Zu den Zugriffsdaten gehören Name der abgerufenen Webseite, Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite), IP-Adresse und der anfragende Provider.

Logfile-Informationen werden aus Sicherheitsgründen (z.B. zur Aufklärung von Missbrauchs- oder Betrugshandlungen) für die Dauer von maximal 7 Tagen gespeichert und danach gelöscht. Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.

Google Tag Manager
Google Tag Manager ist eine Lösung, mit der wir sog. Website-Tags über eine Oberfläche verwalten können (und so z.B. Google Analytics sowie andere Google-Marketing-Dienste in unser Onlineangebot einbinden). Der Tag Manager selbst (welches die Tags implementiert) verarbeitet keine personenbezogenen Daten der Nutzer. Im Hinblick auf die Verarbeitung der personenbezogenen Daten der Nutzer wird auf die folgenden Angaben zu den Google-Diensten verwiesen. Nutzungsrichtlinien: https://www.google.com/intl/de/tagmanager/use-policy.html.

Google Analytics
Wir setzen auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Google Analytics, einen Webanalysedienst der Google LLC („Google&quot;) ein. Google verwendet Cookies. Die durch das Cookie erzeugten Informationen über Benutzung des Onlineangebotes durch die Nutzer werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.

Google ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische Datenschutzrecht einzuhalten (https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active).

Google wird diese Informationen in unserem Auftrag benutzen, um die Nutzung unseres Onlineangebotes durch die Nutzer auszuwerten, um Reports über die Aktivitäten innerhalb dieses Onlineangebotes zusammenzustellen und um weitere, mit der Nutzung dieses Onlineangebotes und der Internetnutzung verbundene Dienstleistungen, uns gegenüber zu erbringen. Dabei können aus den verarbeiteten Daten pseudonyme Nutzungsprofile der Nutzer erstellt werden.

Wir setzen Google Analytics nur mit aktivierter IP-Anonymisierung ein. Das bedeutet, die IP-Adresse der Nutzer wird von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.

Die von dem Browser des Nutzers übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Die Nutzer können die Speicherung der Cookies durch eine entsprechende Einstellung ihrer Browser-Software verhindern; die Nutzer können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf ihre Nutzung des Onlineangebotes bezogenen Daten an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter folgendem Link verfügbare Browser-Plugin herunterladen und installieren: http://tools.google.com/dlpage/gaoptout?hl=de.

Weitere Informationen zur Datennutzung durch Google, Einstellungs- und Widerspruchsmöglichkeiten, erfahren Sie in der Datenschutzerklärung von Google (https://policies.google.com/technologies/ads) sowie in den Einstellungen für die Darstellung von Werbeeinblendungen durch Google (https://adssettings.google.com/authenticated).

Die personenbezogenen Daten der Nutzer werden nach 14 Monaten gelöscht oder anonymisiert.

Google AdWords und Conversion-Messung
Wir nutzen auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) die Dienste der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, („Google&quot;).

Google ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische Datenschutzrecht einzuhalten (https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active).

Wir nutzen das Onlinemarketingverfahren Google &quot;AdWords&quot;, um Anzeigen im Google-Werbe-Netzwerk zu platzieren (z.B., in Suchergebnissen, in Videos, auf Webseiten, etc.), damit sie Nutzern angezeigt werden, die ein mutmaßliches Interesse an den Anzeigen haben. Dies erlaubt uns Anzeigen für und innerhalb unseres Onlineangebotes gezielter anzuzeigen, um Nutzern nur Anzeigen zu präsentieren, die potentiell deren Interessen entsprechen. Falls einem Nutzer z.B. Anzeigen für Produkte angezeigt werden, für die er sich auf anderen Onlineangeboten interessiert hat, spricht man hierbei vom „Remarketing&quot;. Zu diesen Zwecken wird bei Aufruf unserer und anderer Webseiten, auf denen das Google-Werbe-Netzwerk aktiv ist, unmittelbar durch Google ein Code von Google ausgeführt und es werden sog. (Re)marketing-Tags (unsichtbare Grafiken oder Code, auch als &quot;Web Beacons&quot; bezeichnet) in die Webseite eingebunden. Mit deren Hilfe wird auf dem Gerät der Nutzer ein individuelles Cookie, d.h. eine kleine Datei abgespeichert (statt Cookies können auch vergleichbare Technologien verwendet werden). In dieser Datei wird vermerkt, welche Webseiten der Nutzer aufgesucht, für welche Inhalte er sich interessiert und welche Angebote der Nutzer geklickt hat, ferner technische Informationen zum Browser und Betriebssystem, verweisende Webseiten, Besuchszeit sowie weitere Angaben zur Nutzung des Onlineangebotes.

Ferner erhalten wir ein individuelles „Conversion-Cookie&quot;. Die mit Hilfe des Cookies eingeholten Informationen dienen Google dazu, Conversion-Statistiken für uns zu erstellen. Wir erfahren jedoch nur die anonyme Gesamtanzahl der Nutzer, die auf unsere Anzeige geklickt haben und zu einer mit einem Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden. Wir erhalten jedoch keine Informationen, mit denen sich Nutzer persönlich identifizieren lassen.

Die Daten der Nutzer werden im Rahmen des Google-Werbe-Netzwerks pseudonym verarbeitet. D.h. Google speichert und verarbeitet z.B. nicht den Namen oder E-Mailadresse der Nutzer, sondern verarbeitet die relevanten Daten cookie-bezogen innerhalb pseudonymer Nutzerprofile. D.h. aus der Sicht von Google werden die Anzeigen nicht für eine konkret identifizierte Person verwaltet und angezeigt, sondern für den Cookie-Inhaber, unabhängig davon wer dieser Cookie-Inhaber ist. Dies gilt nicht, wenn ein Nutzer Google ausdrücklich erlaubt hat, die Daten ohne diese Pseudonymisierung zu verarbeiten. Die über die Nutzer gesammelten Informationen werden an Google übermittelt und auf Googles Servern in den USA gespeichert.

Weitere Informationen zur Datennutzung durch Google, Einstellungs- und Widerspruchsmöglichkeiten, erfahren Sie in der Datenschutzerklärung von Google (https://policies.google.com/technologies/ads) sowie in den Einstellungen für die Darstellung von Werbeeinblendungen durch Google (https://adssettings.google.com/authenticated).

VG Wort / Skalierbares Zentrales Messverfahren
Wir nutzen das „Skalierbare Zentrale Messverfahren&quot; (SZM) der INFOnline GmbH (INFOnline GmbH, Brühler Str. 9, D-53119 Bonn. ) für die Ermittlung statistischer Kennwerte zur Ermittlung der Kopierwahrscheinlichkeit von Texten. Dabei werden anonyme Messwerte erhoben. Die Zugriffszahlenmessung verwendet zur Wiedererkennung von Computersystemen alternativ ein Session-Cookie oder eine Signatur, die aus verschiedenen automatisch übertragenen Informationen Ihres Browsers erstellt wird. IP-Adressen werden nur in anonymisierter Form verarbeitet. Das Verfahren wurde unter der Beachtung des Datenschutzes entwickelt. Einziges Ziel des Verfahrens ist es, die Kopierwahrscheinlichkeit einzelner Texte zu ermitteln. Zu keinem Zeitpunkt werden einzelne Nutzer identifiziert. Ihre Identität bleibt immer geschützt. Sie erhalten über das System keine Werbung.

Viele unserer Seiten sind mit JavaScript-Aufrufen versehen, über die wir die Zugriffe an die Verwertungsgesellschaft Wort (VG Wort) melden. Wir ermöglichen damit, dass unsere Autoren an den Ausschüttungen der VG Wort partizipieren, die die gesetzliche Vergütung für die Nutzungen urheberrechtlich geschützter Werke gem. § 53 UrhG sicherstellen.

Es werden hierbei Nutzungsdaten und Metadaten der Nutzer verarbeitet, wobei die IP-Adressen gekürzt werden und die Messverfahren pseudonym sind. Die gekürzte IP-Adresse wird maximal 60 Tage gespeichert. Die Nutzungsdaten in Verbindung mit einem pseudonymen Zuordnungswert („Identifier&quot;) werden maximal 6 Monate gespeichert.

Den Nutzern steht ferner ein Opt-Out zur Vefügung, um der Erfassung zu vorgenannten Zwecken zu widersprechen: https://optout.ioam.de. Weitere Informationen können Sie der Datenschutzerklärung von INFOnline entnehmen https://www.infonline.de/datenschutz/benutzer.

Onlinepräsenzen in sozialen Medien
Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und Plattformen, um mit den dort aktiven Kunden, Interessenten und Nutzern kommunizieren und sie dort über unsere Leistungen informieren zu können. Beim Aufruf der jeweiligen Netzwerke und Plattformen gelten die Geschäftsbedingungen und die Datenverarbeitungsrichtlinien deren jeweiligen Betreiber.

Soweit nicht anders im Rahmen unserer Datenschutzerklärung angegeben, verarbeiten wir die Daten der Nutzer sofern diese mit uns innerhalb der sozialen Netzwerke und Plattformen kommunizieren, z.B. Beiträge auf unseren Onlinepräsenzen verfassen oder uns Nachrichten zusenden.

Einbindung von Diensten und Inhalten Dritter
Wir setzen innerhalb unseres Onlineangebotes auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Inhalts- oder Serviceangebote von Drittanbietern ein, um deren Inhalte und Services, wie z.B. Videos oder Schriftarten einzubinden (nachfolgend einheitlich bezeichnet als &quot;Inhalte&quot;).

Dies setzt immer voraus, dass die Drittanbieter dieser Inhalte, die IP-Adresse der Nutzer wahrnehmen, da sie ohne die IP-Adresse die Inhalte nicht an deren Browser senden könnten. Die IP-Adresse ist damit für die Darstellung dieser Inhalte erforderlich. Wir bemühen uns nur solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte verwenden. Drittanbieter können ferner so genannte Pixel-Tags (unsichtbare Grafiken, auch als &quot;Web Beacons&quot; bezeichnet) für statistische oder Marketingzwecke verwenden. Durch die &quot;Pixel-Tags&quot; können Informationen, wie der Besucherverkehr auf den Seiten dieser Website ausgewertet werden. Die pseudonymen Informationen können ferner in Cookies auf dem Gerät der Nutzer gespeichert werden und unter anderem technische Informationen zum Browser und Betriebssystem, verweisende Webseiten, Besuchszeit sowie weitere Angaben zur Nutzung unseres Onlineangebotes enthalten, als auch mit solchen Informationen aus anderen Quellen verbunden werden.

Vimeo
Wir können die Videos der Plattform &quot;Vimeo&quot; des Anbieters Vimeo Inc., Attention: Legal Department, 555 West 18th Street New York, New York 10011, USA, einbinden. Datenschutzerklärung: https://vimeo.com/privacy. WIr weisen darauf hin, dass Vimeo Google Analytics einsetzen kann und verweisen hierzu auf die Datenschutzerklärung (https://www.google.com/policies/privacy) sowie Opt-Out-Möglichkeiten für Google-Analytics (http://tools.google.com/dlpage/gaoptout?hl=de) oder die Einstellungen von Google für die Datennutzung zu Marketingzwecken (https://adssettings.google.com/.).

Youtube
Wir binden die Videos der Plattform &quot;YouTube&quot; des Anbieters Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, ein. Datenschutzerklärung: https://www.google.com/policies/privacy/, Opt-Out: https://adssettings.google.com/authenticated.

Google Maps
Wir binden die Landkarten des Dienstes &quot;Google Maps&quot; des Anbieters Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, ein. Zu den verarbeiteten Daten können insbesondere IP-Adressen und Standortdaten der Nutzer gehören, die jedoch nicht ohne deren Einwilligung (im Regelfall im Rahmen der Einstellungen ihrer Mobilgeräte vollzogen), erhoben werden. Die Daten können in den USA verarbeitet werden. Datenschutzerklärung: https://www.google.com/policies/privacy/, Opt-Out: https://adssettings.google.com/authenticated.

Typekit-Schriftarten von Adobe
Wir setzen auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) externe &quot;Typekit&quot;-Schriftarten des Anbieters Adobe Systems Software Ireland Limited, 4-6 Riverwalk, Citywest Business Campus, Dublin 24, Republic of Ireland ein. Adobe ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische Datenschutzrecht einzuhalten (https://www.privacyshield.gov/participant?id=a2zt0000000TNo9AAG&status=Active).

Twitter
Innerhalb unseres Onlineangebotes können Funktionen und Inhalte des Dienstes Twitter, angeboten durch die Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA, eingebunden werden. Hierzu können z.B. Inhalte wie Bilder, Videos oder Texte und Schaltflächen gehören, mit denen Nutzer Inhalte dieses Onlineangebotes innerhalb von Twitter teilen können.
Sofern die Nutzer Mitglieder der Plattform Twitter sind, kann Twitter den Aufruf der o.g. Inhalte und Funktionen den dortigen Profilen der Nutzer zuordnen. Twitter ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische Datenschutzrecht einzuhalten (https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active). Datenschutzerklärung: https://twitter.com/de/privacy, Opt-Out: https://twitter.com/personalization.

Instagram
Innerhalb unseres Onlineangebotes können Funktionen und Inhalte des Dienstes Instagram, angeboten durch die Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA, eingebunden werden. Hierzu können z.B. Inhalte wie Bilder, Videos oder Texte und Schaltflächen gehören, mit denen Nutzer Inhalte dieses Onlineangebotes innerhalb von Instagram teilen können. Sofern die Nutzer Mitglieder der Plattform Instagram sind, kann Instagram den Aufruf der o.g. Inhalte und Funktionen den dortigen Profilen der Nutzer zuordnen. Datenschutzerklärung von Instagram: http://instagram.com/about/legal/privacy/.

Erstellt mit Datenschutz-Generator.de von RA Dr. Thomas Schwenke

Data protection
This Privacy Policy clarifies the nature, scope and purpose of the processing of personal data (hereinafter referred to as &quot;Data&quot;) within our online offering and the related websites, features and content, as well as external online presence, e.g. our Social Media Profile (collectively referred to as the &quot;Online Offering&quot;). With regard to the terminology used, e.g. &quot;Processing&quot; or &quot;Responsible&quot;, we refer to the definitions in Article 4 of the General Data Protection Regulation (GDPR).

Responsible
Koch, Joerg / 032c System GmbH
Potsdamer Str. 85
10785 Berlin
Germany

v.i.s.d.P. Joerg Koch
office@032c.com
T +49 30 4405 0980

Types of processed data:
Inventory data (e.g., names, addresses).
contact information (e.g., e-mail, phone numbers).
content data (e.g., text input, photographs, videos).
usage data (e.g., websites visited, interest in content, access times).
Meta / communication data (e.g., device information, IP addresses).
Categories of affected persons
Visitors and users of the online offer (hereinafter we refer to the affected persons as &quot;users&quot;).

Purpose of processing
Provision of the online offer, its functions and contents.
Answering contact requests and communicating with users.
Safety measures.
Reach Measurement / Marketing
Used terms
&quot;Personal data&quot; means any information relating to an identified or identifiable natural person (hereinafter the &quot;data subject&quot;); a natural person is considered as identifiable, which can be identified directly or indirectly, in particular by means of assignment to an identifier such as a name, to an identification number, to location data, to an online identifier (eg cookie) or to one or more special features, that express the physical, physiological, genetic, mental, economic, cultural or social identity of this natural person.

&quot;Processing&quot; means any process performed with or without the aid of automated procedures or any such process associated with personal data. The term goes far and includes virtually every handling of data.

&quot;Pseudonymisation&quot; means the processing of personal data in such a way that the personal data can no longer be assigned to a specific data subject without additional information being provided, provided that such additional information is kept separate and subject to technical and organizational measures to ensure that the personal data not assigned to an identified or identifiable natural person.

&quot;Profiling&quot; means any kind of automated processing of personal data which involves the use of such personal data to evaluate certain personal aspects relating to a natural person, in particular aspects relating to job performance, economic situation, health, personal To analyze or predict preferences, interests, reliability, behavior, whereabouts or relocation of that natural person.

&quot;Responsible person&quot; means the natural or legal person, public authority, body or body that decides, alone or in concert with others, on the purposes and means of processing personal data.

&quot;Processor&quot; means a natural or legal person, public authority, agency or other body that processes personal data on behalf of the controller.

Relevant legal bases
In accordance with Art. 13 GDPR, we inform you about the legal basis of our data processing. Unless the legal basis in the data protection declaration is mentioned, the following applies: The legal basis for obtaining consent is Article 6 (1) lit. a and Art. 7 DSGVO, the legal basis for the processing for the performance of our services and the execution of contractual measures as well as the response to inquiries is Art. 6 (1) lit. b DSGVO, the legal basis for processing in order to fulfill our legal obligations is Art. 6 (1) lit. c DSGVO, and the legal basis for processing in order to safeguard our legitimate interests is Article 6 (1) lit. f DSGVO. In the event that vital interests of the data subject or another natural person require the processing of personal data, Art. 6 para. 1 lit. d DSGVO as legal basis.

Safety measures
We take appropriate technical measures in accordance with Art. 32 GDPR, taking into account the state of the art, the implementation costs and the nature, scope, circumstances and purposes of the processing as well as the different likelihood and severity of the risk to the rights and freedoms of natural persons and organizational measures to ensure a level of protection appropriate to the risk.

Measures include, in particular, ensuring the confidentiality, integrity and availability of data by controlling physical access to the data, as well as their access, input, disclosure, availability and separation. We have also set up procedures to ensure the enjoyment of data subject rights, data deletion and data vulnerability. Furthermore, we consider the protection of personal data already in the development, or selection of hardware, software and procedures, according to the principle of data protection through technology design and privacy-friendly default settings (Article 25 DSGVO).

Collaboration with processors and third parties
If, in the context of our processing, we disclose data to other persons and companies (contract processors or third parties), transmit them to them or otherwise grant access to the data, this will only be done on the basis of a legal permission (eg if a transmission of the data to third parties, as required by payment service providers, pursuant to Art. 6 (1) (b) GDPR to fulfill the contract), you have consented to a legal obligation or based on our legitimate interests (eg the use of agents, webhosters, etc.).

If we commission third parties to process data on the basis of a so-called &quot;contract processing contract&quot;, this is done on the basis of Art. 28 GDPR.

Transfers to third countries
If we process data in a third country (ie outside the European Union (EU) or the European Economic Area (EEA)) or in the context of the use of third party services or disclosure or transmission of data to third parties, this will only be done if it is to fulfill our (pre) contractual obligations, on the basis of your consent, on the basis of a legal obligation or on the basis of our legitimate interests. Subject to legal or contractual permissions, we process or have the data processed in a third country only in the presence of the special conditions of Art. 44 et seq. DSGVO. That the processing is e.g. on the basis of specific guarantees, such as the officially recognized level of data protection (eg for the US through the Privacy Shield) or compliance with officially recognized special contractual obligations (so-called &quot;standard contractual clauses&quot;).

Rights of data subjects
You have the right to ask for confirmation as to whether the data in question is being processed and for information about this data as well as for further information and a copy of the data in accordance with Art. 15 GDPR.

You have accordingly. Art. 16 DSGVO the right to demand the completion of the data concerning you or the correction of the incorrect data concerning you.

In accordance with Art. 17 GDPR, they have the right to demand that the relevant data be deleted immediately or, alternatively, to require a restriction of the processing of data in accordance with Art. 18 GDPR.

You have the right to demand that the data relating to you, which you have provided to us, be obtained in accordance with Art. 20 GDPR and request their transmission to other persons responsible.

You have gem. Art. 77 DSGVO the right to file a complaint with the competent supervisory authority.

Withdrawal
You have the right to grant consent in accordance with. Art. 7 para. 3 DSGVO with effect for the future

You can object to the future processing of your data in accordance with Art. 21 GDPR at any time. The objection may in particular be made against processing for direct marketing purposes.

Cookies and right to object in direct mail
&quot;Cookies&quot; are small files that are stored on users&apos; computers. Different information can be stored within the cookies. A cookie is primarily used to store the information about a user (or the device on which the cookie is stored) during or after his visit to an online offer. Temporary cookies, or &quot;session cookies&quot; or &quot;transient cookies&quot;, are cookies that are deleted after a user leaves an online service and closes his browser. In such a cookie, e.g. the contents of a shopping cart in an online shop or a login status are saved. The term &quot;permanent&quot; or &quot;persistent&quot; refers to cookies that remain stored even after the browser has been closed. Thus, e.g. the login status will be saved if users visit it after several days. Likewise, in such a cookie the interests of the users can be stored, which are used for range measurement or marketing purposes. A &quot;third-party cookie&quot; refers to cookies that are offered by providers other than the person who manages the online offer (otherwise, if it is only their cookies, this is called &quot;first-party cookies&quot;).

We can use temporary and permanent cookies and clarify this in the context of our privacy policy.

If users do not want cookies stored on their computer, they will be asked to disable the option in their browser&apos;s system settings. Saved cookies can be deleted in the system settings of the browser. The exclusion of cookies can lead to functional restrictions of this online offer.

A general contradiction to the use of cookies used for online marketing purposes can be found in a variety of services, especially in the case of tracking, via the US website http://www.aboutads.info/choices/ or the EU site http://www.youronlinechoices.com/ be explained. Furthermore, the storage of cookies can be achieved by switching them off in the settings of the browser. Please note that not all features of this online offer may be used.

Deletion of data
The data processed by us are deleted or limited in their processing in accordance with Articles 17 and 18 GDPR. Unless explicitly stated in this privacy policy, the data stored by us are deleted as soon as they are no longer required for their purpose and the deletion does not conflict with any statutory storage requirements. Unless the data is deleted because it is required for other and legitimate purposes, its processing will be restricted. That The data is blocked and not processed for other purposes. This applies, for example for data that must be kept for commercial or tax reasons.

According to legal requirements in Germany, the storage takes place in particular for 10 years according to §§ 147 Abs. 1 AO, 257 Abs. 1 Nr. 1 and 4, Abs. 4 HGB (books, records, management reports, accounting documents, trading books, relevant for taxation Documents, etc.) and 6 years in accordance with § 257 (1) no. 2 and 3, para. 4 HGB (commercial letters).

According to legal regulations in Austria the storage takes place especially for 7 years according to § 132 paragraph 1 BAO (accounting documents, receipts / invoices, accounts, receipts, business papers, statement of income and expenses, etc.), for 22 years in connection with real estate and for 10 years in the case of documents relating to electronically supplied services, telecommunications, broadcasting and television services provided to non-entrepreneurs in EU Member States and for which the Mini-One-Stop-Shop (MOSS) is used.

Business-related processing
In addition we process

contract data (e.g., subject, term, customer category).
Payment data (e.g., bank details, payment history)
from our customers, prospects and business partners for the purpose of providing contractual services, service and customer care, marketing, advertising and market research.

Order processing in the online shop and customer account
We process the data of our customers as part of the ordering process in our online shop to allow them to select and order the selected products and services, as well as their payment and delivery, or execution.

The processed data includes inventory data, communication data, contract data, payment data and persons affected by the processing belong to our customers, prospects and other business partners. Processing is for the purpose of providing contractual services in the context of the operation of an online shop, billing, delivery and customer service. Here we use session cookies for the storage of the shopping cart contents and permanent cookies for the storage of the login status.

Processing is based on Art. 6 para. 1 lit. b (execution of order transactions) and c (legally required archiving) DSGVO. The information marked as required for the establishment and fulfillment of the contract is required. We disclose the data to third parties only in the context of extradition, payment or in the context of legal permissions and obligations to legal advisors and authorities. The data will be processed in third countries only if necessary for the fulfillment of the contract (for example, on customer&apos;s request upon delivery or payment).

Users can optionally create a user account, in particular by being able to view their orders. As part of the registration, the necessary mandatory information will be communicated to the users. The user accounts are not public and can not be indexed by search engines. If users have terminated their user account, their data will be deleted with regard to the user account, subject to their retention is for commercial or tax law reasons according to Art. 6 para. 1 lit. c DSGVO necessary. Information in the customer account remains until its deletion with subsequent archiving in case of a legal obligation. It is the responsibility of the users to secure their data upon termination before the end of the contract.

As part of the registration and re-registration and use of our online services, we store the IP address and the time of the respective user action. The storage is based on our legitimate interests, as well as the user&apos;s protection against misuse and other unauthorized use. A transfer of these data to third parties does not take place, unless it is necessary for the prosecution of our claims or there is a legal obligation in accordance with. Art. 6 para. 1 lit. c DSGVO.

The deletion takes place after expiry of legal warranty and comparable obligations, the necessity of keeping the data is checked every three years; in the case of legal archiving obligations, the deletion takes place after its expiration (end of commercial law (6 years) and tax law (10 years) retention obligation).

Agency services
We process our clients&apos; data as part of our contractual services, which include conceptual and strategic consulting, campaign planning, software and design development / consulting or maintenance, campaign / process / handling implementation, server administration, data analysis / consulting services, and training services.

Here we process stock data (eg, customer master data, such as names or addresses), contact data (eg, e-mail, telephone numbers), content data (eg, text inputs, photographs, videos), contract data (eg, subject matter, term), payment data (eg, Bank account, payment history), usage and metadata (eg in the context of the evaluation and success measurement of marketing measures). In principle, we do not process special categories of personal data, unless these are components of a commissioned processing. Those affected include our customers, prospects and their customers, users, website visitors or employees as well as third parties. The purpose of the processing is the provision of contract services, billing and our customer service. The legal basis of the processing results from Art. 6 para. 1 lit. b DSGVO (contractual services), Art. 6 para. 1 lit. f DSGVO (analysis, statistics, optimization, security measures). We process data that are necessary for the establishment and performance of the contractual services and indicate the necessity of their information. Disclosure to external parties will only be made if required by an order. When processing the data provided to us within the framework of an order, we act in accordance with the instructions of the client as well as with the legal requirements of order processing pursuant to Art. Art. 28 DSGVO and process the data for no other purpose than the order.

We delete the data after expiry of legal warranty and comparable obligations. the necessity of keeping the data is checked every three years; in the case of legal archiving obligations, the deletion takes place after its expiry (6 years, pursuant to § 257 (1) HGB, 10 J, in accordance with § 147 (1) AO). In the case of data disclosed to us in the context of an order by the client, we delete the data according to the specifications of the order, in principle after the end of the order.

External payment service providers
We use external payment service providers, through whose platforms the users and we can make payment transactions (eg, with a link to the privacy policy, Paypal (https://www.paypal.com/webapps/mpp/ua/privacy-full), Klarna (https://www.klarna.com/de/datenschutz/), Skrill (https://www.skrill.com/de/fusszeile/datenschutzrichtlinie/), Giropay (https://www.giropay.de/ legal / data protection-agb /), Visa (https://www.visa.de/datenschutz), Mastercard (https://www.mastercard.de/de-de/datenschutz.html), American Express (https: / /www.americanexpress.com/de/content/privacy-policy-statement.html)

As part of the fulfillment of contracts, we set the payment service providers on the basis of Art. 6 para. 1 lit. b. DSGVO. Incidentally, we use external payment service providers on the basis of our legitimate interests. Art. 6 para. 1 lit. b. DSGVO in order to offer our users effective and secure payment options.

Amongst the data processed by the payment service providers are inventory data, e.g. the name and the address, bank data, such as Account numbers or credit card numbers, passwords, TANs and checksums, as well as contract, summary and recipient-related information. The information is required to complete the transactions. However, the data entered will only be processed and stored by the payment service providers. That We do not receive any account or credit card information, but only information with confirmation or negative disclosure of the payment. The data may be transmitted by the payment service providers to credit reporting agencies. This transmission aims at the identity and credit check. For this we refer to the terms and privacy policy of payment service providers.

For the payment transactions, the terms and conditions and the privacy notices of the respective payment service providers, which are available within the respective websites, or transaction applications apply. We also refer to these for further information and assertion of rights of withdrawal, information and other data subjects.

Administration, financial accounting, office organization, contact management
We process data in the context of administrative tasks and organization of our business, financial accounting and compliance with legal obligations, such as archiving. In doing so, we process the same data that we process in the course of rendering our contractual services. The processing principles are Art. 6 para. 1 lit. c. DSGVO, Art. 6 para. 1 lit. f. DSGVO. The processing affects customers, prospects, business partners and website visitors. The purpose and interest in processing lies in administration, financial accounting, office organization, data archiving, that is, tasks that serve to maintain our business, perform our duties and provide our services. The deletion of the data in terms of contractual performance and contractual communication corresponds to the information provided in these processing activities.

We disclose or transmit data to the financial administration, consultants, such as tax accountants or auditors, and other fee agents and payment service providers.

Furthermore, based on our business interests, we store information about suppliers, promoters and other business partners, e.g. for later contact. We generally store this majority of company-related data permanently.

Privacy policy in the application process
We process the applicant data only for the purpose and in the context of the application process in accordance with the legal requirements. The processing of the applicant data takes place in order to fulfill our (pre-) contractual obligations in the context of the application process within the meaning of Art. 6 para. 1 lit. b. DSGVO Art. 6 para. 1 lit. f. DSGVO if the data processing e.g. is required for us in the context of legal proceedings (in Germany, § 26 BDSG applies additionally).

The application process requires applicants to provide us with the applicant data. The necessary applicant data are, as far as we offer an online form marked, otherwise result from the job descriptions and basically include the information on the person, postal and contact addresses and the application documents, such as cover letter, CV and the certificates. In addition, applicants can voluntarily provide us with additional information.

By submitting the application to us, the applicants agree to the processing of their data for the purposes of the application process in accordance with the nature and scope set forth in this Privacy Policy.

Insofar as special categories of personal data within the meaning of Art. 9 (1) GDPR are voluntarily communicated within the framework of the application procedure, their processing is additionally carried out in accordance with Art. 9 (2) lit. b DSGVO (e.g., health information such as disability or ethnic origin). Insofar as special categories of personal data within the meaning of Art. 9 (1) GDPR are requested from applicants in the context of the application procedure, their processing is additionally carried out in accordance with Art. 9 para. 2 lit. a GDPR (for example health data, if necessary for the profession).

If provided, applicants can submit their applications to us via an online form on our website. The data will be encrypted and transmitted to us according to the state of the art.

Furthermore, applicants can send us their applications via e-mail. However, please note that e-mails are generally not sent in encrypted form and that applicants themselves must provide encryption. We can therefore take no responsibility for the transmission of the application between the sender and the reception on our server and therefore recommend rather to use an online form or the postal delivery. Instead of applying via the online form and e-mail, applicants still have the opportunity to send us the application by post.

The data provided by the applicants may be further processed by us in the event of a successful application for employment purposes. Otherwise, if the application for a job offer is not successful, the applicants&apos; data will be deleted. Applicants&apos; data will also be deleted if an application is withdrawn, which the applicants are entitled to at any time.

The cancellation is subject to a legitimate cancellation of the candidate, after the expiration of a period of six months, so that we can answer any follow-up questions to the application and meet our obligations under the Equal Treatment Act. Invoices for any reimbursement of travel expenses are archived in accordance with the tax regulations.

Contact
When contacting us (for example, by contact form, e-mail, telephone or via social media) the information of the user to process the contact request and its processing in accordance with. Art. 6 para. 1 lit. b) DSGVO processed. User information can be stored in a Customer Relationship Management System (&quot;CRM System&quot;) or comparable request organization.

We delete the requests, if they are no longer required. We check the necessity every two years; Furthermore, the legal archiving obligations apply.

Newsletter
With the following information we inform you about the contents of our newsletter as well as the registration, dispatch and statistical evaluation procedures as well as your right of objection. By subscribing to our newsletter, you agree to the receipt and the procedures described.

Content of the newsletter: We send newsletters, e-mails and other electronic notifications with advertising information (hereinafter &quot;newsletter&quot;) only with the consent of the recipient or a legal permission. Insofar as the contents of a newsletter are concretely described, they are authoritative for the consent of the users. Incidentally, our newsletter contains information about our services and us.

Double opt-in and logging: Registration for our newsletter is done in a so-called double-opt-in procedure. That After registration, you will receive an e-mail asking you to confirm your registration. This confirmation is necessary so that nobody can register with external e-mail addresses. The registration for the newsletter will be logged in order to prove the registration process according to the legal requirements. This includes the storage of the login and the confirmation time, as well as the IP address. Likewise, changes to your data stored with the shipping service provider will be logged.

Credentials: To subscribe to the newsletter, it is sufficient to provide your e-mail address. Optionally, we ask you to give a name in the newsletter for personal address.

The dispatch of the newsletter and the associated performance measurement are based on a consent of the recipients acc. Art. 6 para. 1 lit. a, Art. 7 DSGVO i.V.m § 7 Abs. 2 No. 3 UWG or if consent is not required, based on our legitimate interests in the direct marketing acc. Art. 6 para. 1 lt. F. DSGVO i.V.m. § 7 Abs. 3 UWG.

The logging of the registration process is based on our legitimate interests in accordance with. Art. 6 para. 1 lit. f DSGVO. Our interest lies in the use of a user-friendly and secure newsletter system, which serves both our business interests and the expectations of the users and also allows us to prove our consent.

Termination / Revocation -- You may terminate the receipt of our newsletter at any time, ie. Revoke your consent. A link to cancel the newsletter can be found at the end of each newsletter. We may save the submitted email addresses for up to three years based on our legitimate interests before we delete them to provide prior consent. The processing of this data is limited to the purpose of a possible defense against claims. An individual request for cancellation is possible at any time, provided that at the same time the former existence of a consent is confirmed.

Newsletter -- Mail Chimp
The newsletters will be sent by MailChimp, a mail-order service provider of Rocket Science Group, LLC, 675 Ponce De Leon Ave # 5000, Atlanta, GA 30308, USA. The privacy policy of the shipping service provider can be viewed here: https://mailchimp.com/legal/privacy/. The Rocket Science Group LLC is certified under the Privacy Shield Agreement, which provides a guarantee to comply with European data protection standards (https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG&status=Active). The shipping service provider is based on our legitimate interests acc. Art. 6 para. 1 lit. f DSGVO and a contract processing agreement acc. Art. 28 (3) sentence 1 DSGVO.

The shipping service provider may use the data of the recipients in pseudonymous form, i. without assignment to a user, to optimize or improve their own services, e.g. for the technical optimization of shipping and the presentation of newsletters or for statistical purposes. However, the shipping service provider does not use the data of our newsletter recipients to address them themselves or to pass the data on to third parties.

Newsletter -- Success Measurement
The newsletters contain a so-called &quot;web-beacon&quot;, i. a pixel-sized file that is retrieved from the server when opening the newsletter from our server, or if we use a shipping service provider. This call will initially collect technical information, such as information about the browser and your system, as well as your IP address and time of retrieval.

This information is used to improve the technical performance of services based on their specifications or audience and their reading habits, based on their locations (which can be determined using the IP address) or access times. Statistical surveys also include determining if the newsletters will be opened, when they will be opened and which links will be clicked. For technical reasons, this information can be assigned to the individual newsletter recipients. However, it is neither our goal nor, if used, that of the shipping service provider to observe individual users. The evaluations serve us much more to recognize the reading habits of our users and to adapt our content to them or to send different content according to the interests of our users.

A separate revocation of the performance measurement is unfortunately not possible, in this case, the entire newsletter subscription must be terminated.

Hosting and e-mailing
The hosting services we use are designed to provide the following services: infrastructure and platform services, computing capacity, storage and database services, e-mailing, security and technical maintenance services we use to operate this online service.

Here we, or our hosting provider, process inventory data, contact data, content data, contract data, usage data, meta and communication data of customers, interested parties and visitors to this online offer on the basis of our legitimate interests in an efficient and secure provision of this online offer acc. Art. 6 para. 1 lit. f DSGVO i.V.m. Art. 28 DSGVO (conclusion of contract processing contract).

Collection of access data and log files
We, or our hosting provider, collects on the basis of our legitimate interests within the meaning of Art. 6 para. 1 lit. f. DSGVO Data on every access to the server on which this service is located (so-called server log files). The access data includes name of the retrieved web page, file, date and time of retrieval, amount of data transferred, message about successful retrieval, browser type and version, the user&apos;s operating system, referrer URL (the previously visited page), IP address and the requesting provider ,

Logfile information is stored for security purposes (for example, to investigate abusive or fraudulent activities) for a maximum of 7 days and then deleted. Data whose further retention is required for evidential purposes shall be exempted from the cancellation until final clarification of the incident.

Google Tag Manager
Google Tag Manager is a solution that allows us to manage so-called web site tags through one interface (including, for example, Google Analytics and other Google marketing services in our online offering). The tag manager itself (which implements the tags) does not process users&apos; personal data. With regard to the processing of users&apos; personal data, reference is made to the following information about Google&apos;s services. Usage Policy: https://www.google.com/intl/en/tagmanager/use-policy.html.

Google Analytics
Based on our legitimate interests (i.e., interest in the analysis, optimization, and economic operation of our online offer within the meaning of Art. 6 (1) lit. DSGVO), Google Analytics uses a web analytics service provided by Google LLC (&quot;Google&quot;). Google uses cookies. The information generated by the cookie about the use of the online offer by the users are usually transmitted to a Google server in the USA and stored there.

Google is certified under the Privacy Shield Agreement, which provides a guarantee to comply with European privacy legislation (https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active).

Google will use this information on our behalf to evaluate the use of our online offer by users, to compile reports on the activities within this online offer and to provide us with further services related to the use of this online offer and the internet usage. In this case, pseudonymous usage profiles of the users can be created from the processed data.

We only use Google Analytics with activated IP anonymization. This means that the IP address of the users will be shortened by Google within member states of the European Union or in other contracting states of the Agreement on the European Economic Area. Only in exceptional cases will the full IP address be sent to a Google server in the US and shortened there.

The IP address submitted by the user&apos;s browser will not be merged with other data provided by Google. Users can prevent the storage of cookies by setting their browser software accordingly; Users may also prevent the collection by Google of the data generated by the cookie and related to its use of the online offer and the processing of such data by Google by downloading and installing the browser plug-in available at the following link: http: // tools .google.com / dlpage / gaoptout? hl = en.

For more information about Google&apos;s data usage, hiring and disparaging options, please read Google&apos;s Privacy Policy (https://policies.google.com/technologies/ads) and Google&apos;s Ads Ads Settings (https: // adssettings.google.com/authenticated).

The personal data of users will be deleted or anonymized after 14 months.

Google AdWords and conversion measurement
We use the services of Google LLC, 1600 Amphitheater Parkway, Mountain View, CA 94043 on the basis of our legitimate interests (ie interest in the analysis, optimization and economic operation of our online service within the meaning of Art. 6 (1) lit. DSGVO) , USA, (&quot;Google&quot;).

Google is certified under the Privacy Shield Agreement, which provides a guarantee to comply with European privacy legislation (https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active).

We use Google&apos;s online AdWords marketing tool &quot;AdWords&quot; to place ads on the Google advertising network (e.g., in search results, in videos, on websites, etc.) so that they are displayed to users who have a suspected interest in the ads. This allows us to more specifically display ads for and within our online offering so that we only present ads to users that potentially match their interests. If a user e.g. Showing ads for products he&apos;s been looking for on other online offers is called remarketing. For these purposes, upon access to our and other websites where the Google Advertising Network is active, Google will immediately execute a Google code and become so-called (re) marketing tags (invisible graphics or code, also known as &quot;).&quot; Web beacons &quot;) incorporated into the website. With their help, the user is provided with an individual cookie, i. a small file is saved (instead of cookies, comparable technologies can also be used). In this file is noted which websites the user visited, for what content he is interested and what offers the user has clicked, as well as technical information about the browser and operating system, referring websites, visit time and other information on the use of the online offer.

Furthermore, we receive an individual &quot;conversion cookie&quot;. The information obtained through the cookie is used by Google to generate conversion statistics for us. However, we only hear the anonymous total number of users who clicked on our ad and were redirected to a conversion tracking tag page. However, we do not receive any information that personally identifies users.

The data of the users are pseudonym processed within the Google advertising network. That Google stores and processes e.g. not the name or e-mail address of the users, but processes the relevant data cookie-related within pseudonymous user profiles. That from the perspective of Google, the ads are not managed and displayed to a specifically identified person, but to the cookie owner, regardless of who that cookie owner is. This does not apply if a user has explicitly allowed Google to process the data without this pseudonymization. The information collected about users is transmitted to Google and stored on Google&apos;s servers in the United States.

For more information about Google&apos;s data usage, hiring and disparaging options, please read Google&apos;s Privacy Policy (https://policies.google.com/technologies/ads) and Google&apos;s Ads Ads Settings (https: // adssettings.google.com/authenticated).

VG Word / Scalable Central Measurement Method
We use the &quot;Scalable Central Measurement Method&quot; (SZM) of INFOnline GmbH (INFOnline GmbH, Brühler Str. 9, D-53119 Bonn.) for the determination of statistical parameters for determining the copy probability of texts. Anonymous measurements are taken. Alternatively, traffic metering uses a session cookie or signature created from various automatically transmitted information from your browser to recognize computer systems. IP addresses are only processed in anonymous form. The procedure was developed in compliance with data protection. The only goal of the procedure is to determine the copy probability of individual texts. At no time individual users are identified. Your identity always remains protected. You will not receive advertising through the system.

Many of our pages are provided with JavaScript calls, through which we report the access to the collecting society Wort (VG Wort). We allow our authors to participate in the distributions of the VG Wort, which complies with the legal remuneration for the use of copyrighted works in accordance with Art. § 53 UrhG.

Usage data and metadata of the users are processed here, the IP addresses being shortened and the measuring methods being pseudonymous. The shortened IP address is stored for a maximum of 60 days. The usage data in connection with a pseudonymous assignment value (&quot;Identifier&quot;) are stored for a maximum of 6 months.

Users are also provided with an opt-out in order to disagree with the collection for the aforementioned purposes: https://optout.ioam.de. Further information can be found in the data protection statement of INFOnline https://www.infonline.de/datenschutz/benutzer.

Online presence in social media
We maintain online presence within social networks and platforms in order to communicate with customers, prospects and users active there and to inform them about our services. When calling the respective networks and platforms, the terms and conditions and the data processing guidelines apply to their respective operators.

Unless otherwise stated in our Privacy Policy, we process users&apos; data as long as they communicate with us within social networks and platforms, e.g. Write posts on our online presence or send us messages.

Integration of services and contents of third parties
Based on our legitimate interests (ie interest in the analysis, optimization and economic operation of our online offer within the meaning of Art. 6 (1) lit. DSGVO), we make use of content or services offered by third-party providers in order to provide their content and services Services, such as Include videos or fonts (collectively referred to as &quot;content&quot;).

This always presupposes that the third-party providers of this content perceive the IP address of the users, since they could not send the content to their browser without the IP address. The IP address is therefore required for the presentation of this content. We endeavor to use only content whose respective providers use the IP address solely for the delivery of the content. Third parties may also use so-called pixel tags (invisible graphics, also referred to as &quot;web beacons&quot;) for statistical or marketing purposes. The &quot;pixel tags&quot; can be used to evaluate information such as visitor traffic on the pages of this website. The pseudonymous information may also be stored in cookies on the user&apos;s device and may include, but is not limited to, technical information about the browser and operating system, referring web pages, visit time, and other information regarding the use of our online offer.

Vimeo
We can embed the videos of the Vimeo platform of Vimeo Inc., Attention: Legal Department, 555 West 18th Street New York, New York 10011, USA. Privacy Policy: https://vimeo.com/privacy. We point out that Vimeo can use Google Analytics and refer to the privacy policy (https://www.google.com/policies/privacy) and opt-out options for Google Analytics (http://tools.google .com / dlpage / gaoptout? hl = DE) or Google&apos;s data usage settings for marketing purposes (https://adssettings.google.com/.).

Youtube
We embed the videos on the YouTube platform of Google LLC, 1600 Amphitheater Parkway, Mountain View, CA 94043, USA. Privacy Policy: https://www.google.com/policies/privacy/, opt-out: https://adssettings.google.com/authenticated.

Google Maps
We include maps from the Google Maps service provided by Google LLC, 1600 Amphitheater Parkway, Mountain View, CA 94043, USA. The processed data may include, in particular, users&apos; IP addresses and location data, but these are not collected without their consent (usually as part of the settings of their mobile devices). The data can be processed indirekt the USA. Privacy Policy: https://www.google.com/policies/privacy/, opt-out: https://adssettings.google.com/authenticated.

Typekit fonts from Adobe
On the basis of our legitimate interests (ie interest in the analysis, optimization and economic operation of our online offer within the meaning of Art. 6 (1) lit. DSGVO), we set external type kit fonts of the provider Adobe Systems Software Ireland Limited, 4 -6 Riverwalk, Citywest Business Campus, Dublin 24, Republic of Ireland. Adobe is certified under the Privacy Shield Agreement, which provides a guarantee to comply with European privacy legislation (https://www.privacyshield.gov/participant?id=a2zt0000000TNo9AAG&status=Active).

Twitter
Within our online offering, features and content of the Twitter service offered by Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA, may be incorporated. For this, e.g. Content such as images, videos, or text and buttons that allow users to share content from this online offering within Twitter.

If the users are members of the platform Twitter, Twitter can call the o.g. Assign contents and functions to the profiles of the users there. Twitter is certified under the Privacy Shield Agreement, which provides a guarantee to comply with European privacy legislation (https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active). Privacy Policy: https://twitter.com/privacy, Opt-Out: https://twitter.com/personalization.

Instagram
Within our online offering, features and content of the Instagram service offered by Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA, may be incorporated. For this, e.g. Content such as images, videos, or text and buttons that allow users to share content from this online offering within Instagram. If the users are members of the platform Instagram, Instagram can call the o.g. Assign contents and functions to the profiles of the users there. Instagram privacy policy: http://instagram.com/about/legal/privacy/.

Created with Datenschutz-Generator.de by RA Dr. med. Thomas Schwenke

Terms & Conditions
GENERAL TERMS AND CONDITIONS OF BUSINESS
§ 1 General

032c System GmbH, Potsdamer Str. 85, 10785 Berlin, managing directors: Joerg Koch, phone: +49 3044050980, workshop@032c.com (hereinafter &quot;032c.com&quot; or &quot;we&quot;), operates an online shop at the internet address www.032c.com (the &quot;Website&quot;). All orders placed by you via the Website as well as our deliveries and services are governed exclusively by the General Terms and Conditions of Business set out below, as applicable at the time the order is placed. We do not accept any diverging terms and conditions from the customer except where specifically agreed in writing.

§ 2 Contracts

1. The language available for contracts is English.

2. The presentation of products on our Website does not constitute any offer by 032c.com for a purchase contract.

3. By submitting the order form provided on our Website to us you are placing a binding offer for a purchase contract with us. You submit an offer by entering all required information during the ordering process and posting the order form to us by using the button &quot;complete purchase&quot;. Before you submit your offer you will be able to view the details input by you and correct any mistakes in the information provided.

4. On receipt of your order we will send you an e-mail confirming receipt of your order and stating the details of your order (order confirmation). Please note that our order confirmation does not constitute a declaration of acceptance of your contractual offer but serves for information purposes only.

5. A purchase contract between you and 032c.com will become effective only after we have accepted the offer by dispatching the goods ordered. If payment in advance was chosen as payment option, the goods will be dispatched only after the full amount has been credited to our account.

6. 032c.com has the right to refuse any offer without stating a reason, especially if there are legitimate grounds to suspect that the goods purchased via the internet are intended to be resold on a commercial basis.

§ 3 Cancellation policy advisory

The cancellation policy applies solely to consumers under § 13 of the German Civil Code of Law. Consumers are all individuals that complete a transaction that is not attributable to their commercial or self-employed occupation.

CANCELLATION POLICY
You may repeal your contract of purchase within 14 days without having to state reasons.

The allocated cancellation timeframe is 14 days, effective the day that you or an assigned third party, who may not be the carrier/courier, took said commodities into their possession.

To administer your right to cancel your order, you have to inform us, 032c System GmbH, Potsdamer Str. 85, 10785 Berlin, Germany, customercare@032c.com, Phone +49 30 44050980, Fax: +49 30 44050981, by sending us an explicit declaration stating that you are repealing your contract of purchase (for example: by sending us a letter in the mail, fax, or an email).

It will suffice to send us your notification of repeal within the given cancellation timeframe in order for the 14-day cancellation timeframe to be granted.

CONSEQUENCES
If you repeal your contract of purchase, we are obligated to refund all payments that we have received from you, excluding shipping costs, immediately and within 14 days at most, effective the day that we receive your repeal.

The payment method which was used to make the transaction will also be used for the reimbursement, unless we have explicitly agreed to something else. You will not be charged any fees for the reimbursement.

We reserve the right to withhold the reimbursement until we have received the returned items or until we have received your notification that you have returned the items, whichever comes first.

The items have to be sent back to us immediately and no later than 14 days after the date on which you have notified us of the cancellation of this contract. The extended deadline will be granted if the items are sent back within 14 days.

You are only required to compensate us for any loss in value if the loss in value can be traced back to unnecessary handling, which goes beyond the admissible proofing of the condition of the item, its characteristics and functionality.

§ 4 Voluntary returns right

1. In addition to your legal right of return, 032c.com also offers the following voluntary right of return:

All of the items featured on 032c.com can be returned to 032c.com within 14 days of receipt. The voluntary right of return only applies to non-faulty items that are in their original condition, have not been worn, altered or washed; with all tags attached.

2. Return shipments

2.1. All return shipments will be at your expense.

2.2. In case of a return, we will refund the money onto your account/credit card. Potential losses due to currency fluctuations will not be refunded.

2.3. Please send all returns to: 032c System GmbH, Potsdamer Str. 85, 10785 Berlin, Germany, customercare@032c.com.

3. If you have questions regarding our returns policy, please contact a customer service representative:

email: customercare@032c.com
Phone: +49 3044050980
Fax: +49 30 44050981

This voluntary right of return does not limit your legal rights nor does it limit your right to the above-mentioned cancellation policy.

§ 5 Prices; product presentation; availability; Gift Card; promotion code

1. The prices stated on our Website www.032c.com at the time of your order apply.

2. The goods offered at 032c.com are presented on the Website in the form of digital photographs of the actual products. Minor discrepancies between the presentation and the actual products do not qualify as a defect in the goods ordered.

3. If you have ordered several items at the same time, the products may be delivered at different times. Sec. 266 BGB remains unaffected. Shipping charges will be incurred only once in any such case.

4. Gift Card

4.1 The Gift Card can be used to purchase any article available on our website -- except for additional Gift Cards -- prior to its expiration date.

4.2. Exchanges or reimbursements of your gift card are only applicable in accordance with the return and withdrawal rights and conditions.

4.3. 032c.com is not responsible for the fraudulent use of or any lost, stolen, or destroyed Gift Cards, which goes into effect as soon as the Gift Card has been received. If sent per email, 032c.com is not responsible for misspellings or errors in the recipient&apos;s email address.

4.4. 032c.com reserves the right to cancel or block the Gift Card, if deemed necessary due to legal reasons, for example, in case of loss or misuse of the Gift Card. You will be informed immediately by 032c.com in the case of cancelling or blocking the Gift Card.

5. Promotion Code

5.1. Promotion codes have different time periods of validity and are applicable for purchase of any product available on the website, except additional Gift Cards. To determine the validity period, please refer to the document which contains the promotion code.

5.2. Exchanges or reimbursements of promotion codes, which were part of a marketing promotion or which you may have received on behalf of 032c.com, are non-permissible. The disbursement of promotional codes is not permissible outside of the standard return timeframe stated in our terms and conditions.

5.3. 032c.com cannot be held responsible for any fraudulent or non-authorized uses of promotion codes.

5.4. 032c.com reserves the right to cancel or block the promotion code, if deemed necessary due to legal reasons, for example, in case of loss or misuse of the promotion code. You will be informed immediately by 032c.com in the case of cancelling or blocking the promotion code.

5.5 Return policy for orders purchased using a promotion code:
If you make use of legal right of return or our voluntary return policy, you will be reimbursed for the total amount of the returned items. If you are returning only one of the items from your order, the value of the promotion code will be adjusted accordingly, and only the amount relevant to the returned item will be refunded. The promotion code loses its validity proportionate to the worth of the returned item. If you are returning your complete order, the amount paid will be refunded in full, but the promotion code can no longer be applied to future purchases. Please note that promotion codes from sales campaigns cannot be replaced or refunded.

§ 6 Storage of contract data

We store your order data. If you wish to print your order, you may do so by printing out an &quot;acknowledgment of receipt&quot;. It will appear on your screen once you have submitted your order to us by clicking the &quot;complete purchase&quot; button and your credit card details have been verified.

In addition, you will receive an email order confirmation stating all details entered.

§ 7 Shipping & dispatch

1. The goods will be ready for dispatch after the business day following your order. Unless agreed otherwise, based on experience, delivery will be made within 1 to 3 business days (Germany) or 3 to 7 business days (rest of world) to the shipment address specified by customer, depending on the place of delivery chosen. If payment in advance was chosen as payment option, the goods will be dispatched only after the full purchase price has been credited to our account.

2. Based on experience, deliveries to countries liable to customs duties take 2 to 14 business days. Please note that the shipping company will charge all import sales taxes, customs duties and handling charges separately for each country. Please note that you will be responsible for any banking charges as may be incurred in foreign countries. In case of a return, customs duties, import sales taxes and handling charges, will not be refunded.

§ 8 Payment; default in payment; setoff; right of retention

1. Accepted methods of payment

Please pay for your 032c.com order by:
PayPal
Visa
Master Card
American Express
SOFORT Banking
All payments and credit notes will be handled in the currency chosen for the purchase.

2. Payment using a Gift Card

When making a purchase using a Gift Card, simply enter the Gift Card code in the designated field at checkout. Click on &quot;add code&quot; in the last step of the checkout. If the order amount exceeds the Gift Card balance, please select the payment method with which you wish to cover the remaining amount. If the Gift Card balance exceeds the order amount, you may use the same code for your next purchase. The amount remaining will be available until your credit balance has been used up completely. The disbursement of the remaining Gift Card balance is not possible.

3. Payment using a promotion code

When making a purchase using a promotion code, simply enter the promotion code in the designated field at checkout. Click on &quot;add code&quot; in the last step of the checkout. If the order amount exceeds the promotion code balance, please select the payment method with which you wish to cover the amount remaining.

4. Set-off

The customer is barred from a set-off if the counter claim has no legal backing, was not unanimously decided upon, and is not undisputed or if a separate claim for damages is covered in the same sales contract.

5. Right of retention for commercial transactions

In mercantile trade, the right to the retention of goods and a service disclaimer by the customer cannot be enforced, with the exception of undisputed, legally determined counter claims or claims for damages covered in the same sales contract.

§ 9 Retention of title

The goods delivered remain property of 032c.com until full payment has been made.

§ 10 Inquiries, complaints

For any inquiries about your order or complaints, please contact our Customer Care Team:
email: customercare@032c.com
phone: +49 30 44050980
fax: +49 30 44050981

§ 11 Warranty

Claims based on defects in the delivered goods shall be governed by the applicable legal provisions, to the exception that any claims for damages relating to defects shall be subject exclusively to section 12 below.

§ 12 Liability

1. We accept unlimited liability for damage caused by intent or gross negligence. Our liability for breaches by ordinary negligence of any major obligations or secondary obligations whose breach puts the achievement of the contractual purpose at risk or whose fulfillment is essential to the due and proper performance of the contract and whose fulfillment customer could reasonably rely upon (&quot;essential obligation&quot;), shall be limited to foreseeable damage characteristic for the contract. We accept no liability for any breach by ordinary negligence of contractual obligations which are not essential obligations.

2. Nothing in this shall prejudice our liability in the event of fraudulent concealment of defects or a guarantee as to quality, for claims based on the Product Liability Act, and for damage caused by injury to life, limb or health. This shall not entail a reversal of the burden of proof to customer&apos;s disadvantage.

3. To the exception of claims based on tort, any claims for damages of customer for which our liability is limited hereunder, shall become time-barred one year after the commencement of the statutory limitation period.

4. Any exclusion or limitation of the liability of 032c.com shall extend also to the personal liability of its employees, members of staff, representatives and vicarious agents.

§ 13 Governing law, severability

1. All legal disputes arising out of or in connection with a purchase contract shall be governed exclusively by German law to the exclusion of the UN Sales Convention.

2. If any provision is invalid, nothing in this shall prejudice the validity of the remaining provisions hereof.

About
Careers
Stockists
Newsletter
Shipping & Returns
Apes
Contact &Legal
Pessimism
©032c System GmbH
Contact & Legal
        </p>
        </motion.div>
      </div>

      </AnimatePresence>
    </main>
  );
};

export default legals;
