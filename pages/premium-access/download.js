import Head from "next/head";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../../components/Button";
import { useRouter } from "next/router";

import PremiumDownload from "../../components/PremiumDownload";

const Trialdownload = () => {
  const location = useRouter();


  const GialloFileUrl = "/StereoTypefaces-Trials-2023.zip";
  const GialloFilename = "Giallo-Roman_Full_1-001.zip";
  const GialloPW = process.env.NEXT_PUBLIC_GIALLO_PW;

  const ProtestFileUrl = "/StereoTypefaces-Trials-2023.zip";
  const ProtestFilename = "Protest-Grotesk_Full_1-005.zip";
  const ProtestPW = process.env.NEXT_PUBLIC_PROTEST_GROTESK_PW;

  const ProtestMonoFileUrl = "/StereoTypefaces-Trials-2023.zip";
  const ProtestMonoFilename = "Protest-Mono_Full_1-001.zip";
  const ProtestMonoPW = process.env.NEXT_PUBLIC_PROTEST_MONO_PW;

  return (
    <div>
      <Head>
        <title>Premium Access | Stereo Typefaces® </title>
      </Head>

      <div className="buttonsLeftWrapper" scroll={false}>
        <Link href="/" scroll={false}>
          <a>
            <Button lable={"Home"} subclass={"tertiary"} />
          </a>
        </Link>

        <Button lable={"Premium Access"} subclass={"quaternaryMuted"} />
      </div>

      <AnimatePresence exitBeforeEnter>
        <motion.div
          location={location}
          key={location.pathname}
          initial={{ y: 300, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className="premiumAccessDownload">
            <PremiumDownload
              title={"Giallo Roman Full Family"}
              fileUrl={GialloFileUrl}
              filename={GialloFilename}
              password={GialloPW}
            />
            <PremiumDownload
              title={"Protest Grotesk Full Family"}
              fileUrl={ProtestFileUrl}
              filename={ProtestFilename}
              password={ProtestPW}
            />
            <PremiumDownload
              title={"Protest Mono Full Family"}
              fileUrl={ProtestMonoFileUrl}
              filename={ProtestMonoFilename}
              password={ProtestMonoPW}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Trialdownload;
