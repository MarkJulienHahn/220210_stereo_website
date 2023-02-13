import Head from "next/head";
import { useRouter } from "next/router";

import Button from "../components/Button";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

const GeneralTerms = () => {
  const location = useRouter();
  return (
    <main className="licensingMain">
      <Head>
        <title>Typefaces | Stereo Typefaces®</title>
        <meta name="keywords" content="web" />
      </Head>

      <AnimatePresence exitBeforeEnter>
        <div className="buttonsLeftWrapper">
          <Link href="/" scroll={false}>
            <a>
              <Button lable={"Home"} subclass={"tertiary"} />
            </a>
          </Link>

          <Button
            lable={"General Terms and Conditions"}
            subclass={"quaternaryMuted"}
          />
        </div>

        <motion.div
          location={location}
          key={location.pathname}
          initial={{ y: 300, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          {" "}
          <div className="licensingWrapper">
            <div className="licensingColumn">
              <h1>
                GTC Version 1.0 – <br />
                20th October 2022
              </h1>

              <h1>§ 1 Applicability</h1>
              <p>
                The general terms and conditions (GTC) apply to all contracts
                concluded between you and us, the company Stereo Typefaces,
                Groninger Straße 48, 13347 Berlin, VAT-number DE350313597
                represented by Mark Julien Hahn und Jan Robert Obst{" "}
                <Link href="/legals">(Legals)</Link> via this online shop,
                unless nothing else has been expressly agreed in writing. If you
                download, install, upload, send, use, or otherwise handle our
                fonts then you agree to the terms of this contra ct. We do not
                accept deviating or conflicting conditions insofar as we have
                not expressly agreed to them in writing.
              </p>
              <h1>
                § 2 Opening a customer account; Processing of your personal data
              </h1>
              <p>
                (1) In our online shop you may order as a guest or after opening
                a customer account. With a customer account you must not enter
                your personal data every time you use our online shop, but you
                may log on to your customer account with your e-mail address and
                your password before or during the order process. You will not
                be obliged to buy any of the fonts offered by us only due to
                your registration. For information on the processing of your
                data, please read our data protection information, which you can
                find under the following link{" "}
                <Link href="/legals">(Privacy Policy)</Link>. During your
                application for registration, you choose a personal user name
                and a password. You are obliged to keep the password secret and
                not to disclose it to third parties, i. e. persons outside of
                your company or persons in your company who do not have power of
                representation.
                <br />
                <br />
                (2) You may delete your registration under “My account” at all
                times. If your personal information changes, you yourself are
                responsible for its update. All amendments can be made online
                under “My account” after the log in.
              </p>
              <h1>§ 3 Conclusion of Contract, Contract Language</h1>
              <p>
                (1) We offer fonts that we have developed. These fonts are
                provided in an encrypted software form (so-called font
                software). When used properly, the software generates digital
                fonts which the buyer can then use in suitable application
                programs. <br />
                <br />
                (2) Fonts are provided in static form for desktop computers and
                apps in OTF format. Fonts in OTF format are also optimized for
                print production. We offer variable fonts (non-static fonts) for
                desktop computers and apps in TTF format. These enable stepless
                adjustment between font styles (e.g. in Adobe Indesign,
                Illustrator, Photoshop [status: October 20th, 2022]) and are
                suitable for animations via supporting programs or coding as
                well as for use in web or smartphone apps. Static fonts for web
                applications (homepages) are provided in the formats WOFF and
                WOFF2. Web fonts are optimized for displaying text on websites.
                <br />
                <br />
                (3) After full payment is received, you will receive an email
                with the font software or a download link for the purchased
                software. The licences you acquire with a purchase are defined
                in § 5 below.
                <br />
                <br />
                (4) The exclusive language available for the conclusion of the
                contract shall be German. Translations of these GTC into other
                languages are for information only. In the event of
                contradictions between the German text and the translations, the
                German text shall prevail.
              </p>
              <h1>§ 4 Information for consumers</h1>
              <p>
                (1) We grant customers who are consumers a right of cancellation
                in accordance with the following cancellation policy. A consumer
                is any natural person who enters into a legal transaction for a
                purpose that can be attributed neither to his commercial nor to
                his independent professional activity (§ 13 BGB).
                <br />
                <br />
                CANCELATION POLICY
                <br />
                <br />
                RIGHT OF REVOCATION <br />
                You have the right to cancel this contract within fourteen days
                without giving any reason. The revocation period is fourteen
                days from the day of the conclusion of the contract. In order to
                exercise your right of withdrawal, you must inform us, Stereo
                Typefaces GbR, Groninger Straße 48, 13347 Berlin, phone: <br />
                0049 152 03 56 93 05, e-mail:{" "}
                <a href="info@stereotypefaces.com">info@stereotypefaces.com</a>,
                by means of a clear declaration (e.g. a letter sent by post or
                an e-mail) of your decision to withdraw from this contract. You
                can use the attached sample withdrawal form for this purpose,
                which is, however, not mandatory. To comply with the withdrawal
                period, it is sufficient that you send the notification of the
                exercise of the right of withdrawal before the expiry of the
                withdrawal period. <br />
                <br />
                CONSEQUENCES OF THE REVOCATION <br />
                If you revoke this contract, we shall reimburse you all payments
                we have received from you, including delivery costs (with the
                exception of additional costs resulting from the fact that you
                have chosen a type of delivery other than the most favorable
                standard delivery offered by us), without undue delay and no
                later than within fourteen days from the day on which we
                received the notification of your revocation of this contract.
                For this repayment, we will use the same means of payment that
                you used for the original transaction, unless expressly agreed
                otherwise with you; in no case will you be charged for this
                repayment. <br />
                <br />
                END OF THE CANCELLATION POLICY <br />
                <br />
                SAMPLE CANCELLATION FORM <br />
                <br />
                <div className="licensingCancellationForm">
                  (If you want to cancel the contract, <br />
                  please fill out this form and send it back.)
                  <ul>
                    <li>
                      To Stereo Typefaces GbR, Groninger Straße 48, 13347
                      Berlin, e-mail:{" "}
                      <a href="info@stereotypefaces.com">
                        info@stereotypefaces.com
                      </a>
                    </li>
                    <li>
                      I / we hereby revoke the contract concluded by me / us for
                      the provision of the following service:
                      .......................
                    </li>
                    <li>Ordered on: .......................</li>
                    <li>Name of the consumer(s)</li>
                    <li>Address of the consumer(s)</li>
                    <li>Signature of consumer(s)</li>
                    <li>Date: .......................</li>
                  </ul>
                </div>
              </p>
              <p>
                (2) As an online company, we are obliged to inform you as
                consumers about the online dispute resolution platform (ODR
                platform) of the European Commission. This ODR platform can be
                accessed via the following link:
                <br />
                <br />
                <span className="licensingLink">
                  →&nbsp;
                  <a href="https://webgate.ec.europa.eu/odr">
                    https://webgate.ec.europa.eu/odr
                  </a>
                  <br />
                </span>
                <br />
                However, we do not participate in a dispute resolution procedure
                before a consumer arbitration board.
              </p>
              <h1>§ 5 Scope of licence</h1>
              <p>
                (1) Fonts are used in various ways and in various media. We
                therefore offer different licenses for corresponding font
                applications. The type of license(s) purchased is listed on the
                invoice for the respective fonts. The company size in the form
                of the number of all people working for it, serves as a
                parameter for determining the added value for a company. This
                determination value is also listed on the invoice.
                <br /> <br />
                (2) A license upgrade must be purchased if the license holder
                grows beyond the company size listed on the invoice. Apart from
                that, the license fees are one-time fees. There are no
                subscription fees. For unlimited use, without having to consider
                later license upgrades, the corporate license listed below is
                suitable for interested parties.
                <br /> <br />
                (3) To find the appropriate license besides the choice of media
                application of a font, you only need to know the size of your
                company or that of your client. This is the only parameter that
                needs to be considered. Information about web traffic or the
                number of downloads of an app is not relevant and does not need
                to be provided to us. Here is an example: A designer uses our
                fonts to design advertising material for company XY. The license
                price is based on the total number of persons working for
                company XY. In this work agreement, XY Company is the licensee
                and the designer is a subcontractor, who performs the design
                work with our fonts for XY company. If the designer works for
                other customers, the corresponding licenses must be purchased in
                their names. A designer may not use his or her own font
                license(s) for a clients project.
                <br /> <br />
                (4) LICENSE TYPES
                <br /> <br />
                CORPORATE LICENSE <br />
                The corporate license is valid for unlimited usage, which covers
                all offered licenses on{" "}
                <a href="https://stereotypefaces.com">
                  stereotypefaces.com
                </a>{" "}
                regarding all types of usage for various media (desktop / print,
                logo / wordmark, social media, web, apps / games, video). Thus,
                there is no limitation in terms of company size. Unlimited usage
                is not available in the retail store by configuration! Direct
                requests regarding this please mail to:
                <br /> <br />
                <span className="licensingLink">
                  →&nbsp;
                  <a href="mailto:licensing@stereotypefaces.com">
                    licensing@stereotypefaces.com
                  </a>
                </span>
                <br /> <br />
                DESKTOP / PRINT LICENSE <br />
                With a desktop / print license, the purchased fonts can be
                installed on all your devices to create printed and digital
                documents, objects, merchandise, signage or the like. As long as
                fewer than 25 people work for the license holder, a
                desktop / print license also includes a logo / wordmark license.
                As long as no more than a maximum of five (5) people work for
                the license holder, a desktop / print license also includes a
                social media license and a video license.
                <br /> <br />
                LOGO / WORDMARK LICENSE <br />
                With a logo / wordmark license, fonts can be used to create a
                logo or wordmark for a company. An extra license is required for
                the creation of different trademarks. To create logos, the font
                may be converted into outlines or vectors for further editing.
                This does not include a modification of the provided font file.
                <br /> <br />
                SOCIAL MEDIA LICENSE <br />
                With a social media license, fonts can be used to create design
                templates for social media channels. These include platforms
                such as Instagram, Facebook, TikTok, Snapchat, YouTube, Twitch,
                Discord, and more. If video content is created for social media,
                a video license must also be purchased. If there is any
                uncertainty regarding the acquisition of necessary licenses, we
                will be happy to assist you. Just let us know what kind of
                specific project you’re up to. Please send your requests to:
                <br /> <br />
                <span className="licensingLink">
                  →&nbsp;
                  <a href="mailto:licensing@stereotypefaces.com">
                    licensing@stereotypefaces.com
                  </a>
                </span>
                <br /> <br />
                APP / GAME LICENSE <br />
                This license is required to embed a font in an app (including
                mobile apps, web apps, a digital checkout system / e-commerce)
                or a PC / browser /  video game. A separate license is required
                for each additional app or PC / browser / video game.
                <br /> <br />
                VIDEO LICENSE <br />
                This license is required for videos or animations. This includes
                television, movies, commercials as well as video billboards, but
                also video and streaming platforms such as e.g. YouTube, Vimeo,
                Netflix, Apple TV+, etc. If video content is created for social
                media, both a video license and a social media license are
                required. If there are any uncertainties regarding the
                acquisition of necessary licenses, we will be happy to help by
                describing the specific project. Please send your requests to:
                <br /> <br />
                <span className="licensingLink">
                  →&nbsp;
                  <a href="mailto:licensing@stereotypefaces.com">
                    licensing@stereotypefaces.com
                  </a>
                </span>
                <br /> <br />
                WEBFONT LICENSE <br />
                The webfont license limits the use of the font software to one
                (1) webdomain including subdomains specified by the buyer. Web
                licensed fonts can be used via CSS (cascading style sheets). The
                amount of web traffic is unlimited. For further web applications
                on other domains an additional web license must be purchased
                etc. You assure with the purchase that it is not recognizable
                where the font software is stored on your server. There must be
                no public link to download the font software. It must not be
                possible for a third party / parties to directly link, copy or
                download the font software. The webfont may only be included on
                the specified webdomain. Only the WOFF, WOFF2 and TTF files
                provided by us may be used. The file formats such as OTF of the
                desktop/print license are not suitable for web application and
                may not be converted into web formats.
                <br /> <br />
                TRIAL LICENSE <br />
                With the free trial license, our fonts can be tested to decide
                whether a certain license is suitable for a later purchase. In
                addition, this license entitles designers to run fonts within
                presentations in the context of (educational) events or in the
                context of a pitch / tender in front of customers.
                <br /> <br />
                STUDENT LICENSE <br />
                The student license is required to use fonts for personal
                projects while studying, but may not be used for commissioned
                work by clients. For example, fonts such as the desktop / print
                license can be used for design assignments within
                seminars / courses at university or a web license for one’s own
                online portfolio / website. However, upon request by a customer
                for a website, the customer must purchase a separate license for
                that purpose. After graduation, fonts may continue to be used
                for personal projects that were started during the course of
                study. However, if the number of employees increases, e.g. in
                the case of self-employment, the appropriate license must be
                purchased from this point on.
                <br /> <br />
                LICENSE FOR DIGITAL ARTS (e.g. NFTs) <br />
                The use of our fonts in digital artworks, e.g. so-called
                Non-Fungible Tokens (NFTs), or similar projects is not permitted
                without our permission and not available in the retail-store.
                Send direct inquiries regarding this please contact us via
                e-Mail to:
                <br /> <br />{" "}
                <span className="licensingLink">
                  →&nbsp;
                  <a href="mailto:licensing@stereotypefaces.com">
                    licensing@stereotypefaces.com
                  </a>
                  <br /> <br />
                  <br />
                </span>
              </p>
              <p>
                (5) GENERAL RESTRICTIONS
                <br />
                <br />
                The following is not permitted with our fonts:
                <br />
                • Use in any form of discriminatory or violence glorifying
                context.
                <br />
                • Use in a political or religious context without obtaining our
                permission.
                <br />
                • Alter, edit, decompile, modify, translate, disassemble,
                reformat, convert, rename the font software or explore, copy or
                make publicly available thesource code of our font software in
                any way.
                <br />
                • Duplication (except for backup copies), distribution, and
                making available to the public is prohibited.
                <br />
                • Creating derivative works based on our fonts.
                <br />
                • Changing the font name without our permission.
                <br />
                • Redistributing a font file with a changed name without our
                permission.
                <br />
                • Distributing our fonts without a copy of this agreement.
                <br />
                • Embedding fonts so that end users can access them.
                <br />
                • Placing the font software on public servers.
                <br />
                • Placing the Font Software on publicly accessible media / PCs /
                laptops / tablets / etc.
                <br />
                <br />
                <br />
                (6) RIGHTS OF USE
                <br />
                <br />
                We always grant the purchaser only simple, i.e. non-exclusive,
                rights of use to the purchased font software. <br />
                The material scope of application / license scope is determined
                by the type of license, see § 5 (4). The duration and
                territorial scope of use are unrestricted. <br />
                Reproduction (with the exception of backup copies), distribution
                and making available to the public is prohibited.
                <br />
                The font software may not be altered, edited, decompiled,
                modified, translated, disassembled, reformatted, converted,
                renamed, or the source code of the font software researched or
                copied in any way.
                <br />
                If the purchaser violates the above obligation, we are entitled
                to revoke the right of use. Documents containing fonts created
                by the font software may only be sent in read-only mode, preview
                and print view, so that the recipients of the documents cannot
                extract the fonts and use them to create new documents.
                <br />
                <br />
                (7) BACK UP
                <br />
                <br />A back-up copy of the Font Software may be stored on
                Purchaser’s external storage media. The font software may not be
                installed on a public server.
              </p>
              <h1>
                § 6 Technical steps up to the conclusion of the contract and
                correction of input errors
              </h1>
              <p>
                To place an order, start by placing the desired fonts-software
                in the shopping cart. If you have placed goods and services in
                the shopping cart, by clicking on the buttons „Next“ you will
                get first to a web page where you may enter your data and then
                you may choose the payment method. You can review and correct
                your input on the overview page that will open up. By clicking
                the confirmation button „Order with obligation to pay“, your
                declaration becomes binding in the meaning of section 4 (2) of
                these GTC.
              </p>
              <h1>§ 7 Storage of the contract text</h1>
              <p>
                You will receive the contractual provisions together with
                information on the fonts-software ordered including these GTC by
                e-mail upon acceptance of the contract offer together or
                together with the notification thereof this. We do not store the
                contractual provisions for you.
              </p>
              <h1>§ 8 Payment Conditions</h1>
              <p>
                (1) The purchase price is due immediately after placing the
                order. The payment can be made via credit card or via our
                payment provider.
                <br />
                <br />
                (2) All prices - unless they are expressly designated as gross
                prices - are exclusive of the statutory value-added tax
                applicable at the relevant time.
              </p>
              <h1>§ 9 Warranty, Testing obligations </h1>
              <p>
                (1)  If the font-softwares delivered are defective, you are
                entitled, within the scope of statutory provisions, to demand
                supplementary performance in the form of removal of defects or
                delivery of a defect-free item. We are entitled to choose the
                form of supplementary performance. If the supplementary
                performance fails, you have the right to reduce the purchase
                price or to withdraw from the contract.
                <br />
                <br />
                (2) Except for consumers, it is a prerequisite for any warranty
                rights that you properly fulfill all inspection and complaint
                obligations owed under § 377 HGB.
                <br />
                <br />
                (3) The licensee is obligated to carry out a professional check
                with regard to the intended target medium or to have this
                carried out by specialist personnel, e.g. a graphic designer
                (subcontractor) commissioned for this purpose, within the scope
                of the usual duties of care before the final integration of the
                licensed fonts into his / her work. This means that in the case
                of extensive print production or with regard to a similar analog
                target medium (signage, cutting plot, etc.) a test print must be
                carried out or a test sample produced before final production.
                Should this reveal an error which is clearly attributable to one
                of our offered typefaces, this must be reported to us
                immediately for rectification of the defect. Direct inquiries
                regarding this please contact us via e-Mail to: <br />
                <br />
                <span className="licensingLink">
                  →&nbsp;
                  <a href="mailto:support@stereotypefaces.com">
                    support@stereotypefaces.com
                  </a>
                  <br /> <br />
                </span>
                (4)  For entrepreneurs, the limitation period for warranty
                claims for the delivered goods is – except in the case of claims
                for damages – twelve months from receipt of the goods.
              </p>
              <h1>§ 10 Limitation of Liability</h1>
              <p>
                We are liable for intent and gross negligence. Further, we are
                liable for the negligent breach of obligations, whose
                fulfillment is essential to enable the ordinary implementation
                of the contract, whose breach jeopardizes the achievement of the
                purpose of the contract and on whose compliance you as a
                customer may rely on regularly. In the last-mentioned case, we
                are only liable for the foreseeable, typical contractual damage.
                The same applies to breaches of duty by our vicarious agents.
                The abovementioned exclusions of liability do not apply in case
                of damage of life, body and health. The liability pursuant to
                the product liability law remains unaffected.
              </p>
              <h1>§ 11 Final Provisions</h1>
              <p>
                (1) Amendments or supplements of these terms and conditions
                require the written form to be binding.
                <br />
                <br />
                (2) The law of the Federal Republic of Germany shall apply,
                excluding the United Nations Convention on Contracts for the
                International Sale of Goods (CISG).
                <br />
                <br />
                (3)  The place of performance and the exclusive place of
                jurisdiction for all disputes arising from or in connection with
                this contract shall be Berlin, provided that the contractual
                partner is an entrepreneur.
                <br />
                <br />
                (4) If individual provisions of these terms and conditions are
                ineffective, statutory laws, the terms and conditions as a whole
                remain unaffected. The contractual parties shall amicably decide
                to replace the ineffective provision by a legally effective
                provision, which comes closest to the commercial purpose of the
                ineffective one. The aforementioned provision shall accordingly
                apply in case of gaps.
                <br />
                <br />
                <h1>Version 1.0 – Berlin, <br/>20th October 2022</h1>
              </p>
            </div>

            <div className="licensingColumn">
              <h1>
                AGB Version 1.0 – <br />
                20. Oktober 2022
              </h1>

              <h1>§ 1 Geltungsbereich</h1>
              <p>
                Diese Geschäftsbedingungen finden Anwendung auf die zwischen
                Ihnen und uns, der Firma Stereo Typefaces, Groninger Straße 48,
                13347 Berlin, USt-IdNr.: DE350313597 vertreten durch Mark Julien
                Hahn und Jan Robert Obst <Link href="/legals">(Impressum)</Link>{" "}
                über diesen Online-Shop geschlossenen Verträge, soweit nicht
                durch schriftliche Vereinbarungen zwischen Ihnen und uns
                ausdrücklich etwas anderes vereinbart wurde. Wenn Sie unsere
                Schriften herunterladen, installieren, hochladen, versenden,
                verwenden oder anderweitig damit umgehen, erklären Sie sich mit
                den Bedingungen dieses Vertrages einverstanden. Abweichende oder
                entgegenstehende Bedingungen werden von uns nicht anerkannt,
                sofern wir diesen nicht ausdrücklich zugestimmt haben.
              </p>
              <h1>
                § 2 Registrierung in unserem Online-Shop; Verarbeitung Ihrer
                 personenbezogenen Daten
              </h1>
              <p>
                (1) Sie können in unserem Online-Shop als Gast oder als
                registrierter Benutzer bestellen. Als registrierter Benutzer
                müssen Sie nicht jedes Mal Ihre persönlichen Daten angeben,
                sondern Sie können sich vor oder im Rahmen einer Bestellung
                einfach mit Ihrer E-Mail-Adresse und dem von Ihnen bei
                Registrierung frei gewählten Passwort in Ihrem Kundenkonto
                anmelden. Allein mit der Registrierung besteht keinerlei
                Kaufverpflichtung hinsichtlich der von uns angebotenen
                Schriften. Für Informationen zur Verarbeitung Ihrer Daten lesen
                Sie bitte unsere Datenschutzinformation, die Sie unter folgendem
                Link <Link href="/legals">(Datenschutzinformation)</Link>{" "}
                abrufen können. Mit der Anmeldung wählen Sie einen persönlichen
                Nutzernamen und ein Passwort. Sie sind verpflichtet, das
                Passwort geheim zu halten und dieses Dritten, d.h. Personen
                außerhalb Ihres Unternehmens oder Personen in Ihrem Unternehmen,
                die keine Vertretungsberechtigung haben, keinesfalls
                mitzuteilen.
                <br />
                <br />
                (2)  Sie können Ihre Registrierung jederzeit wieder unter „Mein
                Konto“ löschen. Soweit sich Ihre persönlichen Angaben ändern,
                sind Sie selbst für deren Aktualisierung verantwortlich. Alle
                Änderungen können online nach Anmeldung unter „Mein Konto“
                vorgenommen werden.
              </p>
              <h1>§ 3 Zustandekommen des Vertrags, Vertragssprache</h1>
              <p>
                (1) Wir bieten von uns entwickelte Schriften an. Diese werden
                als Software verschlüsselt ausgeliefert (so genannte
                Font-Software). Bei ordnungsgemäßer Verwendung erzeugt die
                Software digitale Schriften, die der Käufer dann in den
                jeweiligen Anwenderprogrammen verwenden kann. <br />
                <br />
                (2) Fonts werden in statischer Form für Desktop-Computer und
                Apps im OTF-Format bereit- gestellt. Fonts im OTF-Format sind
                zudem für die Druckproduktion optimiert. Variable Fonts
                (nicht-statische Fonts) bieten wir für Desktop-Computer und Apps
                im TTF-Format an. Diese ermöglichen das stufenlose Einstellen
                zwischen Schriftschnitten (z. Bsp. in Adobe Indesign,
                Illustrator, Photoshop [Stand: 20.10.2022]) und sind für
                Animationen via unterstützender Programme oder Coding geeignet
                sowie für die Nutzung in Web- oder Smartphone-Apps. Statische
                Fonts für Web- anwendungen (Homepages) werden in den Formaten
                WOFF und WOFF2 zur Verfügung gestellt. Webfonts sind für die
                Darstellung von Texten auf Webseiten optimiert.
                <br />
                <br />
                (3) Nach vollständigem Eingang des Kaufpreises erhalten Sie eine
                E-Mail mit der Font-Software oder einem Download-Link für die
                erworbene Software. Die Lizenzen, die Sie mit einem Kauf
                erwerben, sind im nachstehenden § 5 definiert.
                <br />
                <br />
                (4) Die für den Vertragsabschluss zur Verfügung gestellte
                Sprache ist ausschließlich Deutsch. Übersetzungen in andere
                Sprachen dienen lediglich Ihrer Information. Bei Widersprüchen
                zwischen dem deutschen Text und der Übersetzung hat der deutsche
                Text Vorrang.
              </p>
              <h1>§ 4 Informationen für Verbraucher*innen</h1>
              <p>
                (1) Wir räumen Kund*innen, die Verbraucher*innen sind, ein
                Widerrufsrecht nach Maßgabe der nachfolgenden Widerrufsbelehrung
                ein. Verbraucher*in ist jede natürliche Person, die ein
                Rechtsgeschäft zu einem Zwecke abschließt, der weder ihrer
                gewerblichen noch ihrer selbständigen beruflichen Tätigkeit
                zugerechnet werden kann (§ 13 BGB).
                <br />
                <br />
                WIDERRUFSBELEHRUNG
                <br />
                <br />
                WIDERRUFSRECHT <br />
                Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von
                Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt
                vierzehn Tage ab dem Tag des Vertragsabschlusses. Um Ihr
                Widerrufsrecht auszuüben, müssen Sie uns, der Stereo Typefaces
                GbR, Groninger Str. 48, 13347 Berlin, Telefon: 0049 15203569305,
                E-Mail:{" "}
                <a href="info@stereotypefaces.com">info@stereotypefaces.com</a>,
                mittels einer eindeutigen Erklärung (z.B. ein mit der Post
                versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen
                Vertrag zu widerrufen, informieren. Sie können dafür das
                beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht
                vorgeschrieben ist. Zur Wahrung der Wider-rufsfrist reicht es
                aus, dass Sie die Mitteilung über die Ausübung des
                Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
                <br />
                <br />
                FOLGEN DES WIDERRUFS <br />
                Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle
                Zahlungen, die wir von Ihnen erhalten haben, einschließlich der
                Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich
                daraus ergeben, dass Sie eine andere Art der Lieferung als die
                von uns angebotene, günstigste Standardlieferung gewählt haben),
                unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag
                zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses
                Vertrags bei uns eingegangen ist. Für diese Rückzahlung
                verwenden wir dasselbe Zahlungsmittel, das Sie bei der
                ursprünglichen Transaktion eingesetzt haben, es sei denn, mit
                Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem
                Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.{" "}
                <br />
                <br />
                ENDE DER WIDERRUFSBELEHRUNG <br />
                <br />
                MUSTER WIDERRUFSFORMULAR
                <br />
                <br />
                <div className="licensingCancellationForm">
                  (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte
                  dieses Formular aus und senden Sie es zurück.)
                  <ul>
                    <li>
                      An Stereo Typefaces GbR, Groninger Straße 48, 13347
                      Berlin, E-Mail:{" "}
                      <a href="info@stereotypefaces.com">
                        info@stereotypefaces.com
                      </a>
                    </li>
                    <li>
                      Hiermit widerrufe(n) ich / wir den von mir / uns
                      abgeschlossenen Vertrag über die Erbringung der folgenden
                      Dienstleistung: .......................
                    </li>
                    <li>Bestellt am: .......................</li>
                    <li>Name des / der Verbraucher(s) / Verbraucherin</li>
                    <li>Anschrift des/der Verbraucher(s) / Verbraucherin</li>
                    <li>Unterschrift des/der Verbraucher(s) / Verbraucherin</li>
                    <li>Datum: .......................</li>
                  </ul>
                </div>
              </p>
              <p>
                (2) Als Online-Unternehmen sind wir verpflichtet, Sie als
                Verbraucher*innen auf die Plattform zur Online-Streitbeilegung
                (OS-Plattform) der Europäischen Kommission hinzuweisen. Diese
                OS-Plattform ist über folgenden Link erreichbar:
                <br />
                <br />
                <span className="licensingLink">
                  →&nbsp;
                  <a href="https://webgate.ec.europa.eu/odr">
                    https://webgate.ec.europa.eu/odr
                  </a>
                  <br />
                </span>
                <br />
                Wir nehmen an einem Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle allerdings nicht teil.
              </p>
              <h1>§ 5 Lizenzumfang</h1>
              <p>
                (1) Fonts werden auf diverse Art und Weise sowie in
                verschiedenen Medien angewendet. Wir bieten deshalb
                unterschiedliche Lizenzen für entsprechende Schriftanwendungen
                an. Die Art der gekauften Lizenz(en) ist für die jeweiligen
                Fonts auf der Rechnung aufgeführt. Die Unternehmensgröße in Form
                der gesamten Mitarbeiter*innen-Anzahl dient zur Bestimmung des
                Mehrwerts für ein Unternehmen. Dieser Bestimmungswert wird
                ebenso auf der Rechnung aufgeführt.
                <br /> <br />
                (2) Es muss ein Lizenz-Upgrade erworben werden, wenn der
                Lizenzinhaber / die Lizenzinhaberin über die in der Rechnung
                aufgeführte Unternehmens- größe hinauswächst. Abgesehen davon
                sind die Lizenzgebühren einmalige Gebühren. Es fallen keine
                Abonnementgebühren an. Für eine unbegrenzte Nutzung, ohne
                spätere Lizenz-Upgrades in Betracht ziehen zu müssen, bietet
                sich die unten aufgeführte Corporate-Lizenz für
                Interessent*innen an.
                <br /> <br />
                (3) Um die geeignete Lizenz neben der Wahl der medialen
                Anwendung eines Fonts zu finden, müssen Sie lediglich die Größe
                Ihres Unternehmens oder das Ihres Kunden / Ihrer Kundin kennen.
                Dies ist der einzige Parameter, der beachtet werden muss.
                Informationen über Web-Traffic oder die Anzahl von Downloads
                einer App sind nicht relevant und müssen uns nicht zur Verfügung
                gestellt werden. Hier ein Beispiel: Ein Designer / eine
                Designerin benutzt unsere Fonts zur Gestaltung von Werbe-mittel
                für Firma XY. Der Lizenzpreis basiert auf der Gesamtanzahl der
                Mitarbeiter*innen von Firma XY. In dieser Arbeitsvereinbarung
                ist Firma XY Lizenzinhaber*in und der Designer / die Designerin
                Subunternehmer*in, welche*r die Gestaltungs-arbeit mit unseren
                Fonts für Firma XY ausführt. Arbeitet der Designer / die
                Designerin für wei- tere Kund*innen so müssen entsprechende
                Lizenzen jeweils auf deren Namen gekauft werden. Die Verwendung
                eigener Schriftlizenzen, welche der Designer / die Designerin
                für sich gekauft hat, ist in Verwendung für Kund*innen nicht
                gestattet.
                <br /> <br />
                (4) LIZENZTYPEN
                <br /> <br />
                CORPORATE LIZENZ <br />
                Die Corporate-Lizenz gilt für eine unbegrenzte Nutzung, welche
                alle angebotenen Lizenzen auf{" "}
                <a href="https://stereotypefaces.com">
                  stereotypefaces.com
                </a>{" "}
                hinsichtlich sämtlichen Nutzungsarten für diverse Medien abdeckt
                (Desktop / Druck, Logo / Wortmarke, Soziale Medien, Web,
                Apps / Games, Video). Es gibt somit keine Begrenzung in Bezug
                auf Unternehmens- größe. Die unbegrenzte Nutzung ist nicht im
                Retailshop durch Konfiguration verfügbar! Anfragen diesbezüglich
                bitte direkt via E-Mail an:
                <br /> <br />
                <span className="licensingLink">
                  →&nbsp;
                  <a href="mailto:licensing@stereotypefaces.com">
                    licensing@stereotypefaces.com
                  </a>
                </span>
                <br /> <br />
                DESKTOP- / DRUCKLIZENZ <br />
                Mit einer Desktop- / Drucklizenz können die gekauften Fonts auf
                all Ihren Geräten installiert werden, um gedruckte und digitale
                Dokumente, Objekte, Waren, Beschilder- ungen und ähnliches zu
                erstellen. Solange weniger als 25 Personen für den
                Lizenzinhaber / die Lizenzinhaberin arbeiten, beinhaltet eine
                Desktop- /  Drucklizenz auch eine Logo- / Wortmarken- Lizenz.
                Solange nicht mehr als maximal fünf (5) Personen für den
                Lizenzinhaber /die Lizenz-inhaberin arbeiten, beinhaltet eine
                Desktop- / Druck- lizenz auch eine Social-Media-Lizenz und eine
                Videolizenz.
                <br /> <br />
                LOGO- / WORTMARKEN-LIZENZ <br />
                Mit einer Logo- / Wortmarken-Lizenz können Fonts verwendet
                werden, um ein Logo oder eine Wort-marke für ein Unternehmen zu
                erstellen. Für die Gestaltung von verschiedenen Marken wird
                jeweils eine extra Lizenz benötigt. Um Logos zu erstellen, darf
                der Schriftzug in Konturen bzw. Vektoren umgewandelt werden, um
                diesen weiter zu bearbeiten. Nicht umfasst sind Modifikationen
                der zur Verfügung gestellten Font-Datei.
                <br /> <br />
                SOCIAL-MEDIA-LIZENZ <br />
                Mit einer Social-Media-Lizenz können Fonts ver- wendet werden,
                um Design-Vorlagen für Social-Media-Kanäle zu erstellen. Zu
                diesen zählen Plattformen wie bspw. Instagram, Facebook, TikTok,
                Snapchat, YouTube, Twitch, Discord u.v.m. Wenn Videoinhalte für
                soziale Medien erstellt werden, muss zudem auch eine Videolizenz
                erwor- ben werden. Sollte es bezüglich des Erwerbs von
                notwendigen Lizenzen Unklarheiten geben, helfen wir bei
                Schilderung des konkreten Vorhabens gerne weiter. Fragen dazu
                bitte an:
                <br /> <br />
                <span className="licensingLink">
                  →&nbsp;
                  <a href="mailto:licensing@stereotypefaces.com">
                    licensing@stereotypefaces.com
                  </a>
                </span>
                <br /> <br />
                APP / GAME LIZENZ <br />
                Diese Lizenz wird benötigt, um einen Font in eine App (u. a.
                mobile Apps, Web-Apps, ein digitales Kassensystem / E-Commerce)
                oder ein PC- / Browser- /  Videospiel einzubetten. Für jede
                weitere App oder jedes weitere PC- / Browser- / Videospiel wird
                eine separate Lizenz benötigt.
                <br /> <br />
                VIDEO LIZENZ <br />
                Für Videos bzw. Animationen wird diese Lizenz benötigt. Dies
                schließt Fernsehen, Filme, Werbespots sowie Video-Werbetafeln,
                aber auch Video- und Streamingplattformen wie bspw. YouTube,
                Vimeo, Netflix, Apple TV+, usw. mit ein. Werden Videoinhalte für
                soziale Medien erstellt, ist sowohl eine Videolizenz als auch
                eine Social-Media-Lizenz erforderlich. Sollte es bezüglich des
                Erwerbs von notwendigen Lizenzen Unklarheiten geben, helfen wir
                bei Schilderung des konkreten Vorhabens gerne weiter. Fragen
                dazu bitte an:
                <br /> <br />
                <span className="licensingLink">
                  →&nbsp;
                  <a href="mailto:licensing@stereotypefaces.com">
                    licensing@stereotypefaces.com
                  </a>
                </span>
                <br /> <br />
                WEBFONT LIZENZ <br />
                Die Webfont-Lizenz beschränkt die Nutzung der Font-Software auf
                eine (1) vom Käufer angegebene Webdomain inklusive Subdomains.
                Weblizenzierte Fonts können via CSS (cascading style sheets)
                verwendet werden. Die Menge des Webverkehrs (Traffic) ist dabei
                unbegrenzt. Für weitere Webanwendungen auf anderen Domains muss
                eine zusätzliche Weblizenz gekauft werden usw. Sie versichern
                mit dem Kauf, dass nicht erkennt- lich ist, wo die Font-Software
                auf ihrem Server abgelegt ist. Es darf keinen öffentlichen Link
                zum Download der Font-Software geben. Es darf nicht möglich
                sein, dass ein Dritter / eine Dritte die Font-Software direkt
                verlinken, kopieren oder herunterladen kann. Der Webfont darf
                nur auf der angegebenen Webdomain eingebunden werden. Verwendet
                werden dürfen ausschließlich die von uns zur Verfügung
                gestellten WOFF-, WOFF2- und TTF-Dateien. Die Dateiformate wie
                OTF der Desktop- /Printlizenz sind nicht für Weban-wendung
                geeignet und dürfen auch nicht in Web-Formate konvertiert werden
                <br /> <br />
                TRIAL-LIZENZ <br />
                Mit der kostenlosen Trial-Lizenz können unsere Schriften
                getestet werden, um zu entscheiden, ob eine bestimmte Lizenz für
                einen späteren Kauf in Frage kommt. Zudem berechtigt diese
                Lizenz Designer*innen Fonts für Präsentationen im Kon-text von
                (Aus-)Bildungs-Veranstaltungen oder im Rahmen eines
                Pitches / einer Ausschreibung vor Kund*innen zu verwenden.
                <br /> <br />
                STUDIERENDEN-LIZENZ
                <br />
                Die Studierenden-Lizenz wird benötigt, um wäh-rend des Studiums
                Fonts für persönliche Projekte nutzen zu können. Sie darf nicht
                für Auftragsarbeiten von Kund*innen verwen- det werden. Zum
                Beispiel können Fonts im Rahmen der Desktop- / Drucklizenz für
                Gestaltungs-aufgaben innerhalb von Seminaren / Kursen oder eine
                Weblizenz für das eigene Online- Portfolio / die eigene Website
                genutzt werden. Auf Anfrage eines  Kunden / einer Kundin für
                eine Website, muss dieser / diese allerdings dafür eine eigene
                Lizenz erwerben. Nach Abschluss des Studiums dürfen Schriften
                weiterhin für persön-liche Projekte genutzt werden, welche
                bereits während des Studiums begonnen wurden. Steigt jedoch
                bspw. bei einer Selbstständigkeit die Anzahl der
                Mitarbeiter*innen, so muss ab diesem Zeitpunkt die entsprechend
                passende Lizenz dazu erworben werden.
                <br /> <br />
                LIZENZ FÜR DIGITALE KUNSTWERKE (NFTs) <br />
                Die Verwendung unserer Fonts in digitalen Kunstwerken,
                sogenannten Non-Fungible Token (NFT), oder ähnlichen Vorhaben,
                ist ohne unsere Erlaubnis nicht gestattet und nicht im
                Retailshop verfügbar. Anfragen diesbezüg- lich bitte direkt via
                E-Mail an:
                <br /> <br />{" "}
                <span className="licensingLink">
                  →&nbsp;
                  <a href="mailto:licensing@stereotypefaces.com">
                    licensing@stereotypefaces.com
                  </a>
                  <br /> <br />
                  <br />
                </span>
              </p>
              <p>
                (5) ALLGEMEINE BESCHRÄNKUNGEN
                <br />
                <br />
                Folgendes ist mit unseren Fonts nicht gestattet:
                <br />
                • Die Verwendung in jeglicher Form von diskrimi-   nierendem
                oder gewaltverherrlichendem Kontext.
                <br />
                • Die Verwendung in einem politischen oder   religiösen Kontext,
                ohne unsere Erlaubnis   einzuholen.
                <br />
                • Die Font-Software zu ändern, zu bearbeiten, zu
                  dekompilieren, zu modifizieren, zu übersetzen, zu   zerlegen,
                neu zu formatieren, zu konvertieren,   umzubenennen oder den
                Source-Code der   Font-Software auf jegliche Art zu erforschen,
                zu   kopieren oder öffentlich zugänglich zu machen.
                <br />
                • Die Vervielfältigung (mit Ausnahme der   Sicherungskopie),
                Verbreitung und öffentliche   Zugänglichmachung ist untersagt.
                <br />
                • Das Erstellen abgeleiteter Werke basierend auf   unseren
                Fonts.
                <br />
                • Das Ändern des Font-Namens, ohne unsere   Erlaubnis.
                <br />
                • Die Weitergabe einer Font-Datei mit geändertem   Namen, ohne
                unsere Erlaubnis.
                <br />
                • Die Weitergabe unserer Fonts ohne eine Kopie   dieses Vertrags
                <br />
                • Das Einbetten von Fonts, so dass Endbenutzer   (User) darauf
                zugreifen können.
                <br />
                • Das Ablegen der Fontsoftware auf öffentl. Servern.
                <br />
                • Das Ablegen der Font-Software auf öffentlich   zugänglichen
                Datenträgern / PCs / Laptops /    Tablets / etc.
                <br />
                <br />
                <br />
                (6) NUTZUNGSRECHTE
                <br />
                <br />
                Wir räumen den Käufer*innen an der erworbenen Font-Software
                stets nur einfache, d. h. nicht exklusive Nutzungsrechte ein.
                <br />
                Der sachliche Anwendungsbereich / Lizenz-umfang ergibt sich aus
                dem Lizenztyp, vgl. § 5 Abs. 4. Dauer und räumlicher
                Nutzungsbereich sind unbeschränkt.
                <br />
                Die Vervielfältigung (mit Ausnahme der Sicherungskopie),
                Verbreitung und öffentliche Zugänglichmachung ist untersagt.
                <br />
                Die Font-Software darf nicht geändert, bearbeitet, dekompiliert,
                modifiziert, übersetzt, zerlegt, neuformatiert, konvertiert,
                umbe- nannt oder der Source-Code der Font-Software auf jegliche
                Art erforscht oder kopiert werden.
                <br />
                Verstößt der Käufer gegen die vorstehende Verpflichtung, sind
                wir zum Widerruf des Nutzungsrechts berechtigt.Dokumente mit
                durch die Font-Software erzeugten Schriften dürfen
                ausschließlich in dem read-only-modus, als Vorschau- und
                Druck-Ansicht versendet werden, so dass die Empfänger der
                Dokumente die Schriften nicht extrahieren und zur Erstellung
                neuer Dokumente verwenden können.
                <br />
                <br />
                (7) BACK UP
                <br />
                <br />
                Es darf eine Sicherheitskopie (back-up) der Font-Software auf
                externen Datenträgern des Käufers abgelegt werden. Die
                Font-Software darf nicht auf einem öffentlichen Server
                installiert werden.
              </p>
              <h1>
                § 6 Technische Schritte bis zum Vertragsschluss und Berichtigung
                von Eingabefehlern
              </h1>
              <p>
                Im Rahmen des Bestellprozesses legen Sie zunächst die gewünschte
                Fonts-Software in den Waren- korb. Sofern Sie Waren oder
                Dienstleistungen dort hinterlegt haben, gelangen Sie jeweils
                durch Klicks auf die „Weiter“-Buttons zunächst auf eine Seite,
                auf der Sie Ihre Daten eingeben und anschließend die Bezahlart
                auswählen können. Schließlich öffnet sich eine Übersichtsseite,
                auf der Sie Ihre Angaben überprüfen und korrigie-ren können.
                Ansonsten wird nach Anklicken des Bestätigungs-Buttons
                „Zahlungspflichtig bestel-len“ Ihre Erklärung verbindlich iSd §
                4 Abs. 2 dieser AGB.
              </p>
              <h1>§ 7 Speicherung des Vertragstexts</h1>
              <p>
                Die Vertragsbestimmungen mit Angaben zu der bestellten
                Font-Software einschließlich dieser Allgemeinen
                Geschäftsbedingungen werden Ihnen per E-Mail mit Annahme des
                Vertrags-angebots bzw. mit der Benachrichtigung hierüber
                zugesandt. Eine Speicherung der Vertrags-bestimmungen durch uns
                erfolgt nicht.
              </p>
              <h1>§ 8 Zahlungsbedingungen</h1>
              <p>
                (1) Der Kaufpreis wird sofort mit Bestellung fällig. Die Zahlung
                erfolgt mit Kreditkarte oder über unsere*n
                Zahlungsdienstleister*in.
                <br />
                <br />
                (2) Alle Preise verstehen sich - soweit sie nicht ausdrücklich
                als Bruttopreise bezeichnet sind - jeweils zuzüglich der zum
                maßgeblichen Zeitpunkt geltenden gesetzlichen Umsatzsteuer.
              </p>
              <h1>§ 9 Gewährleistung, Prüfpflichten des Lizenznehmers</h1>
              <p>
                (1)  Soweit die gelieferte Font-Software mangelhaft ist, sind
                Sie im Rahmen der gesetzlichen Bestimmungen berechtigt,
                Nacherfüllung in Form der Mangelbeseitigung oder Lieferung einer
                mangelfreien Sache zu verlangen. Das Wahlrecht über die Art  der
                Nacherfüllung steht uns zu. Bei Fehlschlagen der Nacherfüllung
                sind Sie berech-tigt, den Kaufpreis zu mindern oder bei
                Vorliegen der gesetzlichen Voraussetzungen vom Vertrag
                zurückzutreten.
                <br />
                <br />
                (2) Außer bei Verbraucher*innen ist Voraussetzung für jegliche
                Gewährleistungsrechte, dass Sie alle nach § 377 HGB geschuldeten
                Untersuchungs- und Rügeobliegenheiten ordnungsgemäß erfüllen.
                <br />
                <br />
                (3) Der / die Lizenznehmer*in ist verpflichtet, vor der
                endgültigen Einbindung der lizensierten Fonts in seine / ihre
                Arbeit im Rahmen der üblichen Sorgfaltspflichten eine
                fachgerechte Prüfung im Hinblick auf das angestrebte Zielmedium
                durchzuführen oder durch Fachpersonal bspw. eines / einer dafür
                beauftragten Grafiker*in (Subunternehmer*in) durchführen zu
                lassen. Das heißt im Falle einer umfangreichen Druck-produktion
                oder im Hinblick auf ein ähnliches analoges Zielmedium
                (Beschilderung, Schneidplot, etc.), dass vor finaler Produktion
                einen Probedruck durchzuführen oder ein Prüfmuster anzufertigen
                ist. Sollte sich dabei ein Fehler offenbaren, welcher eindeutig
                auf eine unserer angebotenen Schriftsoftwares zurückzuführen
                ist, ist dieser uns unverzüglich zur Mängelbeseitigung
                anzuzeigen. <br />
                <br />
                <span className="licensingLink">
                  →&nbsp;
                  <a href="mailto:support@stereotypefaces.com">
                    support@stereotypefaces.com
                  </a>
                  <br /> <br />
                </span>
                (4)  Für Unternehmer*innen beträgt die Verjährungs- frist von
                Gewährleistungsansprüchen für die gelieferte Ware – außer im
                Fall von Schadensersatz-ansprüchen – zwölf Monate ab Erhalt der
                Ware.
              </p>
              <h1>§ 10 Haftungsbeschränkung</h1>
              <p>
                Wir haften für Vorsatz und grobe Fahrlässigkeit. Ferner haften
                wir für die fahrlässige Verletzung von Pflichten, deren
                Erfüllung die ordnungsgemäße Durchführung des Vertrages
                überhaupt erst ermög-licht, deren Verletzung die Erreichung des
                Vertragszwecks gefährdet und auf deren Einhaltung Sie als Kunde
                regelmäßig vertrauen dürfen. Im letztgenannten Fall haften wir
                jedoch nur für den vorhersehbaren, vertragstypischen Schaden.
                Gleiches gilt für Pflichtverletzungen unserer
                Erfül-lungsgehilfen.
                <br />
                Die vorstehenden Haftungsausschlüsse gelten nicht bei Verletzung
                von Leben, Körper und Gesundheit. Die Haftung nach dem
                Produkthaftungsgesetz bleibt unberührt.
              </p>
              <h1>§ 11 Schlussbestimmungen</h1>
              <p>
                (1) Änderungen oder Ergänzungen dieser Geschäftsbedingungen
                bedürfen der Schriftform.
                <br />
                <br />
                (2) Es gilt das Recht der Bundesrepublik Deutschland unter
                Ausschluss des UN-Kaufrechts.
                <br />
                <br />
                (3) Erfüllungsort sowie ausschließlicher Gerichtsstand für alle
                Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist
                Berlin, sofern der / die Vertragspartner*in Unternehmer*in ist.
                <br />
                <br />
                (4) Sollten einzelne Bestimmungen dieser Geschäftsbedingungen unwirksam sein, so wird hierdurch die Geltung der anderen Bestimmungen im Übrigen nicht berührt. Die unwirksame Bestimmung wird von den Vertragsparteien einvernehmlich durch eine rechtswirksame Bestimmung ersetzt, welche dem wirtschaftlichen Sinn und Zweck der unwirksamen Bestimmung am nächsten kommt. Die vorstehende Regelung gilt entsprechend bei Regelungslücken.
                <br />
                <br />
                <h1>Version 1.0 – Berlin, <br/>20. Oktober 2022</h1>
              </p>
            </div>
            <p className="massiveLogo">STEREO</p>
          </div>

        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default GeneralTerms;
