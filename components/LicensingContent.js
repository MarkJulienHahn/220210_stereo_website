import Link from "next/link";

const LicensingContent = () => {
  return (
    <div className="licenseWrapper">
      <h1 className="licenseHeadline">
        How does the&nbsp;<span className="infoHeader">STEREO</span>®&nbsp;
        <span className="bg02"> licensing system </span>&nbsp;work?
      </h1>

      <div className="licenseIntro">
        <p>
          Our primary focus is to maintain simplicity and transparency: with
          just <span className="bg01">three purchasable license types</span> –{" "}
          <span className="bg01">lifetime licenses</span>, and convenient access
          to <span className="bg01">full trial versions</span> of our font
          products. To determine the suitable license, we use company size based
          on the <span className="bg02">number of employees</span>. We find this
          metric easy to ascertain and well comparable, unlike metrics such as
          the permitted number of font installations across workstations,
          monthly website views or the amount of app downloads.
        </p>
      </div>

      <div className="licenseBody">
        <div className="licenseSection">
          <h1>How to begin choosing the right license?</h1>
          <p>
            The initial step in selecting a font license depends on the intended
            user:{" "}
            <span className="bg01">
              you and your studio/agency, your client, or both
            </span>
            ? As long as you're working on behalf of a client, you’re good to go
            by choosing a desktop license for yourself and your studio. The
            Desktop License can be employed for an unlimited number of projects
            and an unlimited duration. However, for the Web License, the size of
            the company that ultimately uses the font becomes significant, as is
            the case with our App License.
            <br />
            <br />
            Here's an example: A design agency comprising 20 employees is
            engaged to handle print and screen content for a client's campaign.
            The project includes designing a website for this particular
            campaign. The client's company has a total of 85 employees.
            <br />
            <br />
            For this specific task, the agency requires a Desktop License for a
            maximum of 20 employees (L) for internal use, and a Web License for
            the client's company with the maximum amount up to 85 employees
            (XXL). Further information on license types and sizes can be found
            below.
          </p>
        </div>

        <div className="licenseSection">
          <h1>What various licenses can I select from?</h1>
          <p>
            We have three main licensing types: <br />
            <br />
            Opt for the <span className="bg01">Desktop license</span> to install
            our fonts on various devices for designing, producing, and editing
            non-dynamic print and screen content, like posters, (non-trademark)
            logos, images, books, animations, etc. <br />
            <br />
            Choose our <span className="bg01">Web license</span> to self-host
            fonts on one (1) website and showcase dynamic text on a single
            designated domain, which also covers subdomains. Utilize @font-face
            technology for accurate embedding. <br />
            <br />
            With our <span className="bg01">App license</span>, you can smoothly
            integrate our fonts into a single (1) mobile or web app, a checkout
            system, an ePublication, or a video game. Separate licenses are
            required for multiple apps or games.
          </p>
        </div>

        <div className="licenseSection">
          <h1>Which license size do I need?</h1>
          <p>
            As mentioned earlier, our licenses are calculated by the amount of
            employees in your or your clients company.
            <br />
            <br />
            In our retail shop, you can configure the required license size
            through the following steps:
            <br />
            <br />
            (S) 1 – 5 Employees
            <br />
            (M) 6 – 10 Employees
            <br />
            (L) 11 – 20 Employees
            <br />
            (XL) 21 – 50 Employees
            <br />
            (XXL) 51 – 85 Employees
            <br />
            (XXXL) 86 – 100 Employees
            <br />
            <br /> For inquiries involving more than 100 employees, please reach
            out to us at service@stereotypefaces.com or through our custom
            request form on our online store.
          </p>
        </div>

        <div className="licenseSection">
          <h1>What if the company size increases in the future?</h1>
          <p>
            A license upgrade must be purchased if the licensee exceeds the
            company size stated in the invoice. The previously acquired licenses
            will be considered as a discount towards the price of the new
            licenses. However, this cannot be managed independently by you or
            your client in our online shop and must be arranged through direct
            contact with us at license@stereotypefaces.com. <br />
            <br />
            Apart from this, the license fees are one-time charges. There are no
            subscription fees. For unlimited usage without the need for future
            license upgrades, the Corporate License Extension listed below is
            recommended for interested parties.
          </p>
        </div>

        <div className="licenseSection">
          <h1> License extensions? When do I need one? </h1>
          <p>
            As we mentioned earlier, we prefer to maintain simplicity, and in
            the majority of situations, our three main licenses available in our
            retail shop will suffice. <br />
            <br />
            However for distinctive logo design, font customization, or
            trademarking logos using our fonts, a Custom Licence Extension is
            essential. We also offer these services upon request. Please provide
            more information through our custom request form in our web shop.{" "}
            <br />
            <br />
            With our Corporate License Extension, all media purposes using the
            selected typeface are covered, and there are no future limitations
            in terms of company size. Essentially, this allows for unlimited
            usage in any manner. This option is not available for configuration
            in our webshop and is only offered upon request. Please get in touch
            with us via license@stereotypefaces.com.
          </p>
        </div>
        <div className="licenseSection">
          <h1>
            {" "}
            Is the duration and spatial usage area of my font license limited?{" "}
          </h1>
          <p>
            No, the duration and spatial usage of our font licenses is
            unlimited. <span style={{color: "red"}}> (Hier noch ein zwei Sätze?)</span>
          </p>
        </div>
        <div className="licenseSection">
          <h1> Student license, what is that? Is it limited? </h1>
          <p>
            We offer a special deal for students: Each of our font families,
            including web and variable files, for only 50 €. This license is
            applicable as a combined desktop/web license and remains valid for
            personal and commercial projects throughout and after your studies.
            So no, it is not limited only to your time in university :).
            However, please remember that web files are suitable for a single
            (1) self-hosted website on a designated domain along with
            subdomains.
            <br />
            <br />
            By selecting this option, you acknowledge that you are currently
            enrolled in an educational institution. While we don't require proof
            at this moment, we might request it in the future.
          </p>
        </div>
        <div className="licenseSection">
          <h1> What are the possibilities with your trial fonts?</h1>
          <p>
            The free trial license enables font testing to assess suitability
            before making a purchase decision. This license also grants
            designers the ability to incorporate fonts into educational event
            presentations or when pitching/tendering to clients.
          </p>
        </div>
        <div className="licenseSection">
          <h1> What discounts do you have? </h1>
          <p>
            Students get each of our font families, including web and variable
            files, for only 50 €. These can be used for personal and commercial
            projects during and after studies. For more details, please refer to
            the information above. <br />
            <br />
            We support selected Nonprofits and non-commercial projects with a
            discount. Please use our custom request form to provide detailed
            project information.
          </p>
        </div>
        <div className="licenseSection">
          <h1> What types of font files do you offer? </h1>
          <p>
            We offer OTF files for desktop apps and WOFF/WOFF2 for websites. We
            strongly recommend OTF for app development too, to make the most of
            OpenType features (besides using a variable font file of course ;)).
            Our TTF file supports variable fonts for diverse typography. It
            works great with supported desktop software such as Photoshop,
            Illustrator, InDesign, and in web/app development.
          </p>
        </div>
        <div className="licenseSection">
          <h1> Do you offer custom fonts? </h1>
          <p>
            Absolutely! Our services encompass everything from tailor-made logos
            and altering our font families to crafting an entirely new corporate
            font. If you're interested in us customizing one of our existing
            typefaces for you or your client, feel free to use the custom
            request form in our shop. Alternatively, you can contact us at
            service@stereotypefaces.com for any inquiries.
          </p>
        </div>
        <div className="licenseSection">
          <h1>
            {" "}
            Do you offer exclusive typefaces before an official retail release?{" "}
          </h1>
          <p>
            Yes, we do! Through our beta program, we offer fully functional
            fonts ahead of their official webshop launch. By registering for the
            beta program, you can access trial versions for free. However, full
            licenses are only available upon request. Kindly furnish additional
            details about your project, along with the desired license type and
            size. You're welcome to register here.
          </p>
        </div>
        <div className="licenseSection">
          <h1> Can I use your fonts in political or religious contexts? </h1>
          <p>
            Using our fonts for religious or political contexts, including
            campaigns and messages (slogans, claims, logos) by parties or
            organizations, requires prior agreement. Contact us via our custom
            request form on our online store.
          </p>
        </div>
        <div className="licenseSection">
          <h1> More questions? </h1>
          <p>
            Don’t hesitate reaching out to us. We're here to help you with
            licensing, custom logos, product extensions, appropriate solutions
            for your clients' requirements, charity projects, or even just for a
            casual chat! Contact us at support@stereotypefaces.com. Feedback, no
            matter the matter, is always welcome as well!
          </p>
        </div>
      </div>

      <div className="licenseBottom">
        <h1>
          For more details see our
          <br />
          <Link href="/general-terms">
            <span className="bg01" style={{ cursor: "pointer" }}>
              General Terms and Conditions (GTC)
              <br />
            </span>
          </Link>
          &nbsp;or&nbsp;
          <a href="mailto:info@stereotypefaces.com" className="bg02">
            contact us directly
          </a>
          .
        </h1>
      </div>
    </div>
  );
};

export default LicensingContent;
