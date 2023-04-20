import Link from "next/link";
import Button from "../Button";
import styles from "../../styles/Licensing.module.css";

const LicensingTerms = ({ setShowLicensing }) => {
  return (
    <>
      <div
        className={styles.buttonWrapper}
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
          The primary criterion for choosing the appropriate license in our
          online shop is the size of the company, rather than the number of
          workstations on which the font will be installed. Company size is
          determined by the total number of employees in the organization. You
          do not need to provide us with additional statistics, such as web
          traffic or app downloads.
          <br />
          When purchasing a license, simply indicate whether it is for personal
          use (as a designer or student) or for a client/company you are working
          for as a subcontractor. Then specify the size of the company and
          select the appropriate license for your specific media application(s)
          and desired typeface(s) or font bundle. Once this is done, you are all
          set to go!
        </p>

        <h1>CLIENT(S) AS LICENSE OWNER</h1>
        <p>
          What is meant by »clients have to own the license«? Let's take an
          example to explain this: A designer uses our fonts to create
          advertising material for Company XY. The license fee is based on the
          total number of people employed by Company XY. In this arrangement,
          Company XY is the licensee, and the designer is a subcontractor who
          uses our fonts to create designs for Company XY. If the designer works
          for other clients, the corresponding licenses must be purchased in
          their names. A designer cannot use their own font license(s) for a
          client's project.
          <br />
          The various terminologies involved in this process can be confusing.
          To simplify things, we sometimes use the terms Buyer, License Owner,
          and Subcontractor interchangeably as »you.« For instance, »you« may be
          the Buyer and License Owner but not a Subcontractor, or »you« may be
          the Buyer and a Subcontractor but not the License Owner.
        </p>

        <h1>
          MY OWN OR MY CLIENTS COMPANY GREW IN SIZE AFTER PURCHASING A FONT
          LICENSE BEFORE – DO I HAVE TO DO SOMETHING?
        </h1>
        <p>
          If this is the case, you or your client must purchase the appropriate
          license for the specific company size going forward. The licenses
          purchased previously will be factored in as a discount on the price of
          the new licenses. However, this cannot be managed by yourself or your
          client in our online shop and must be taken care of by contacting us
          directly at&nbsp;
          <a href="mailto:license@stereotypefaces.com">
            license@stereotypefaces.com
          </a>
          <br />
          Start-ups or other rapidly growing companies are advised to consider
          purchasing a license that covers a higher company size in the future.
          Please feel free to contact us with any inquiries related to this
          at&nbsp;
          <a href="mailto:license@stereotypefaces.com">
            license@stereotypefaces.com
          </a>
        </p>

        <h1>WHY’S YOUR LICENSING MODEL LIKE THAT?</h1>
        <p>
          We consider fonts to be essential tools and working materials in the
          everyday work of designers. Design tasks are usually service-oriented
          and intended for clients whose businesses benefit greatly from good
          designs and the use of professional fonts. As a result, it is logical
          for us to require companies to license the necessary license(s)
          directly through our shop or through the designer working for them as
          a subcontractor in their name.
        </p>

        <h1>WHICH LICENSES DO YOU OFFER?</h1>
        <p>
          Our online shop offers various license types for specific media
          applications. It is important to purchase the appropriate license(s)
          for your own or your client's specific tasks. If you require
          assistance in finding the right one, please do not hesitate to contact
          us directly at:&nbsp;
          <a href="mailto:license@stereotypefaces.com">
            license@stereotypefaces.com
          </a>
        </p>

        {/* <h1>CORPORATE LICENSE</h1>
        <p>
          The corporate license is valid for unlimited usage, which covers all
          licenses offered on stereotypefaces.com for various media types
          (desktop/print, logo/wordmark, social media, web, apps/games, video).
          This means that there is no limit on company size. Unlimited usage is
          not available in the retail store by default. For direct inquiries
          regarding this, please send an email to&nbsp;
          <a href="mailto:license@stereotypefaces.com">
            license@stereotypefaces.com
          </a>
        </p> */}

        <h1>TRIAL LICENSE</h1>
        <p>
          The free trial license allows for testing of our fonts to determine
          whether a specific license is suitable for future purchase.
          Additionally, this license permits designers to use fonts within
          presentations for educational events or during pitches/tenders in
          front of clients.
        </p>

        <h1>STUDENT LICENSE</h1>
        <p>
          The student license is intended for personal use of fonts for academic
          projects and cannot be used for commissioned work by clients. For
          instance, the desktop/print license can be utilized for design tasks
          within seminars/courses at the university, while the web license can
          be used for personal online portfolios/websites. However, if a
          customer requests a website, they must obtain a separate license for
          that specific purpose. After graduation, fonts may continue to be used
          for personal projects that were initiated during the course of study.
          However, if the number of employees increases (e.g. due to
          self-employment), the appropriate license must be purchased from that
          point onwards.
        </p>

        <h1>DESKTOP / PRINT LICENSE</h1>
        <p>
          A desktop/print license enables the buyer to install the fonts on
          multiple devices to create various digital and print materials such as
          merchandise, documents, signage, and more. Moreover, if the number of
          individuals employed by the licensee does not exceed five, the license
          includes a social media license, a video license, as well as a
          logo/wordmark license.
        </p>

        <h1>WEB LICENSE</h1>
        <p>
          The webfont license permits the use of font software on a single web
          domain, as well as any subdomains that are designated by the buyer.
          The fonts licensed for web use can be utilized through CSS (cascading
          style sheets), and there is no limit to the amount of web traffic. If
          the fonts are to be used on other domains, additional web licenses
          must be purchased. By making a purchase, the buyer confirms that the
          location of the font software on their server is not identifiable. The
          font software must not be publicly available for download, nor can a
          third party directly link, copy or download the font software. Only
          the WOFF, WOFF2, and TTF files that are provided by us may be used.
          File formats such as OTF, which are included in the desktop/print
          license, are not suitable for web use and may not be converted into
          web formats.
        </p>

        <h1>SOCIAL MEDIA LICENSE</h1>
        <p>
          A social media license enables the use of fonts to design templates
          for various social media platforms, including Instagram, Facebook,
          TikTok, Snapchat, YouTube, Twitch, Discord, and others. In case video
          content is also created for social media, a video license is required
          to be purchased. If there is any confusion regarding the required
          licenses, we are ready to provide assistance. Please inform us about
          the details of your project, and we will be happy to help. Kindly send
          your request to:&nbsp;
          <a href="mailto:license@stereotypefaces.com">
            license@stereotypefaces.com
          </a>
        </p>

        <h1>APP / GAME LICENSE</h1>
        <p>
          To embed a font in an app (including mobile apps, web apps), or a
          PC/browser/video game, a specific license is necessary. An additional
          license is required for each extra app or PC/browser/video game.
        </p>

        <h1>LOGO / WORDMARK LICENSE</h1>
        <p>
          The logo/wordmark license enables the use of fonts for creating a logo
          or wordmark for a company. To create additional trademarks, an extra
          license is required. When creating logos, the font may be converted
          into outlines or vectors for further editing, but modifying the
          provided font file is not permitted.
        </p>

        <h1>VIDEO LICENSE</h1>
        <p>
          A license is necessary for videos or animations, which covers a range
          of formats including television, movies, commercials, and video
          billboards. It also applies to video and streaming platforms like
          YouTube, Vimeo, Netflix, Apple TV+, and others. In case video content
          is created for social media, both a video license and a social media
          license are needed. If you have any doubts about acquiring the
          necessary licenses, we are glad to assist you. Please send your
          requests to:&nbsp;
          <a href="mailto:license@stereotypefaces.com">
            license@stereotypefaces.com
          </a>
        </p>

        <h1>LICENSE FOR DIGITAL ARTS (e.g. NFTs)</h1>
        <p>
          We are happy to grant permission for the use of our fonts in digital
          artworks, including Non-Fungible Tokens (NFTs) and other similar
          projects. However, we kindly ask that you seek our permission before
          using our fonts in these types of projects. Our fonts are not
          currently available in retail stores, but we are happy to assist with
          inquiries. Please feel free to reach out to us with any questions or
          requests.&nbsp;
          <a href="mailto:license@stereotypefaces.com">
            license@stereotypefaces.com
          </a>
        </p>

        <p>
          See also our&nbsp;
          <Link href="/general-terms">general Terms and Conditions (GTC)</Link>
        </p>
      </div>
    </>
  );
};

export default LicensingTerms;
