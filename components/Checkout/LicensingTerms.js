import Link from "next/link";
import Button from "../Button";
import styles from "../../styles/Licensing.module.css";

const LicensingTerms = ({ setShowLicensing }) => {
  return (
    <>
      <div
        className={styles.buttonsLeftWrapper}
        style={{ zIndex: "100000", position: "fixed", bottom: "0" }}
      >
        <Button
          lable={"Close"}
          subclass={"secondary"}
          onClick={() => setShowLicensing(false)}
        />
      </div>
      <div className={styles.licensingWrapper}>
        <h1>WHAT LICENSE DO I NEED? – COMPANY SIZE AS MAIN METRIC</h1>
        <p>
          Besides of for whom you’re buying a license, it is the company size,
          which is the main metric for choosing the right license in our online
          shop. The company size is defined by the total amount of people
          working for a specific company. That’s all, what you only need to
          know! E.g. web traffic, app downloads or any other statistic of views,
          sales and so on, do not have to be provided to us. Choose, if you’re
          buying a license for yourself (= Designer or Student) or for a company
          / person you’re working as a subcontractor for (= Client). Then
          specify the company size, pick the appropriate license for your
          specific media application(s) as well as typeface(s) or font bundle
          and you’re good to go!
        </p>

        <h1>CLIENT(S) AS LICENSE OWNER</h1>
        <p>
          What do we mean by “clients have to own the license”? Here is an
          example: A designer uses our fonts to design advertising material for
          company XY. The license price is based on the total number of persons
          working for company XY. In this work agreement, XY Company is the
          licensee and the designer is a subcontractor, who performs the design
          work with our fonts for XY company. If the designer works for other
          customers, the corresponding licenses must be purchased in their
          names. A designer may not use his or her own font license(s) for a
          clients project.
          <br />
          All this terminology can get a bit confusing, so in order to keep
          things simple, we’ll sometimes refer to the Buyer, the License Owner,
          and any Subcontractors interchangeably as “you”. “You” might, for
          example, be the Buyer and License Owner but not a Subcontractor, or
          “you” might be the Buyer and a Subcontractor but not the License
          Owner.
        </p>

        <h1>
          MY OWN OR MY CLIENTS COMPANY GREW IN SIZE AFTER PURCHASING A FONT
          LICENSE BEFORE – DO I HAVE TO DO SOMETHING?
        </h1>
        <p>
          If that’s the case you have or your client has to buy the specific
          license for the approproiate company size from that point on. The
          license(s) purchased before will be calculated as discount on the
          price for the new license(s). This is not possible to manage by
          yourself or your client in our online shop and has to be taken care of
          by directly contacting us via: license@stereotypefaces.com
          <br />
          Start-ups or other fast growing companies are required to check,
          whether it makes sense to already purchase a license which covers a
          higher company size in upcoming future. Also feel free to contact us
          for such inquiries via:
          <a href="license@stereotypefaces.com">license@stereotypefaces.com</a>
        </p>

        <h1>WHY’S YOUR LICENSING MODEL LIKE THAT?</h1>
        <p>
          We think of fonts as essential tools and working material in designers
          everyday work. Design tasks are mostly service oriented and for
          clients, whose businesses benefit a lot by good designs and
          professional fonts in use. So it is a logic step for us that companies
          have to license the needed license(s) directly in our shop or via the
          designer working for them as a subcontractor in their name.
        </p>

        <h1>WHICH LICENSES DO YOU OFFER?</h1>
        <p>
          In our online shop we offer different license types for specific media
          applications. Make sure to buy the right one(s) for your own or your
          clients specific tasks. If you need help finding the right one, don’t
          hesitate to contact us directly via:{" "}
          <a href="license@stereotypefaces.com">license@stereotypefaces.com</a>
        </p>

        <h1>CORPORATE LICENSE</h1>
        <p>
          The corporate license is valid for unlimited usage, which covers all
          offered licenses on stereotypefaces.com regarding all types of usage
          for various media (desktop / print, logo / wordmark, social media,
          web, apps / games, video). Thus, there is no limitation in terms of
          company size. Unlimited usage is not available in the retail store by
          configuration! Direct requests regarding this please mail to:
          <a href="license@stereotypefaces.com">license@stereotypefaces.com</a>
        </p>

        <h1>TRIAL LICENSE</h1>
        <p>
          With the free trial license, our fonts can be tested to decide whether
          a certain license is suitable for a later purchase. In addition, this
          license entitles designers to run fonts within presentations in the
          context of educational events or in the context of a pitch / tender in
          front of customers.
        </p>

        <h1>STUDENT LICENSE</h1>
        <p>
          The student license is required to use fonts for personal projects
          while studying, but may not be used for commissioned work by clients.
          For example, fonts such as the desktop / print license can be used for
          design assignments within seminars / courses at university or a web
          license for one’s own online portfolio / website. However, upon
          request by a customer for a website, the customer must purchase a
          separate license for that purpose. After graduation, fonts may
          continue to be used for personal projects that were started during the
          course of study. However, if the number of employees increases, e.g.
          in the case of self-employment, the appropriate license must be
          purchased from this point on.
        </p>

        <h1>DESKTOP / PRINT LICENSE</h1>
        <p>
          With a desktop / print license, the purchased fonts can be installed
          on all your devices to create printed and digital documents, objects,
          merchandise, signage or the like. As long as no more than a maximum of
          five (5) people work for the license holder, a desktop / print license
          also includes a logo / wordmark license, a social media license and a
          video license.
        </p>

        <h1>WEB LICENSE</h1>
        <p>
          The webfont license limits the use of the font software to one (1)
          webdomain including subdomains specified by the buyer. Web licensed
          fonts can be used via CSS (cascading style sheets). The amount of web
          traffic is unlimited. For further web applications on other domains an
          additional web license must be purchased etc. You assure with the
          purchase that it is not recognizable where the font software is stored
          on your server. There must be no public link to download the font
          software. It must not be possible for a third party / parties to
          directly link, copy or download the font software. The webfont may
          only be included on the specified webdomain. Only the WOFF, WOFF2 and
          TTF files provided by us may be used. The file formats such as OTF of
          the desktop / print license are not suitable for web application and
          may not be converted into web formats.
        </p>

        <h1>SOCIAL MEDIA LICENSE</h1>
        <p>
          With a social media license, fonts can be used to create design
          templates for social media channels. These include platforms such as
          Instagram, Facebook, TikTok, Snapchat, YouTube, Twitch, Discord, and
          more. If video content is created for social media, a video license
          must also be purchased. If there is any uncertainty regarding the
          acquisition of necessary licenses, we will be happy to assist you.
          Just let us know what kind of specific project you’re up to. Please
          send your request to:{" "}
          <a href="license@stereotypefaces.com">license@stereotypefaces.com</a>
        </p>

        <h1>APP / GAME LICENSE</h1>
        <p>
          This license is required to embed a font in an app (including mobile
          apps, web apps, a digital checkout system / e-commerce) or a PC /
          browser / video game. A separate license is required for each
          additional app or PC / browser / video game.
        </p>

        <h1>LOGO / WORDMARK LICENSE</h1>
        <p>
          The corporate license is valid for unlimited usage, which covers all
          offered licenses on stereotypefaces.com regarding all types of usage
          for various media (desktop / print, logo / wordmark, social media,
          web, apps / games, video). Thus, there is no limitation in terms of
          company size. Unlimited usage is not available in the retail store by
          configuration! Direct requests regarding this please mail to:
          <a href="license@stereotypefaces.com">license@stereotypefaces.com</a>
        </p>

        <h1>VIDEO LICENSE</h1>
        <p>
          This license is required for videos or animations. This includes
          television, movies, commercials as well as video billboards, but also
          video and streaming platforms such as e.g. YouTube, Vimeo, Netflix,
          Apple TV+, etc. If video content is created for social media, both a
          video license and a social media license are required. If there are
          any uncertainties regarding the acquisition of necessary licenses, we
          will be happy to help. Please send your requests to:
          <a href="license@stereotypefaces.com">license@stereotypefaces.com</a>
        </p>

        <h1>LICENSE FOR DIGITAL ARTS (e.g. NFTs)</h1>
        <p>
          The use of our fonts in digital artworks, e.g. so-called Non-Fungible
          Tokens (NFTs), or similar projects is not permitted without our
          permission and not available in the retail-store. Send inquiries regarding this to:{" "}
          <a href="license@stereotypefaces.com">license@stereotypefaces.com</a>
        </p>

        <p>
          See also our{" "}
          <Link href="/generalTerms">general Terms and Conditions (GTC)</Link>
        </p>
      </div>
    </>
  );
};

export default LicensingTerms;
