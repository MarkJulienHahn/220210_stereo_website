import Image from "next/image";
import Link from "next/link";

import image02 from "../public/images/image_02.jpeg";
import image04 from "../public/images/image_04.gif";

import Styles from "../styles/Projects.module.css";

const Project = (props) => {
  return (
    <section className={Styles.projectWrapper}>
      <div className={Styles.projectHeader}>{props.header}</div>

      <div className={Styles.projectContent}>
        <div className={Styles.imageRow}>
          <div className={Styles.w6}>
            <p>Automat Composition Generator</p>
            <Link href="/research/automat">
              <a>
                <Image src={image02} placeholder="blur" />
              </a>
            </Link>
          </div>
          <div className={Styles.w6}>
            <p>Automat Composition Generator</p>
            <Link href="/research/automat">
              <a>
                <Image src={image04} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
