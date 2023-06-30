import Head from "next/head";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../../components/Button";
import { useRouter } from "next/router";

import PremiumDownload from "../../components/PremiumDownload";

const Trialdownload = () => {
  const location = useRouter();


  const GialloMonoFileUrl = "/StereoTypefaces-Trials-2023.zip";
  const GialloMonoFilename = "Giallo-Mono-Medium-001.zip";
  const GialloMonoPW = process.env.NEXT_PUBLIC_GIALLO_PW;

  const GialloSemimonoFileUrl = "/StereoTypefaces-Trials-2023.zip";
  const GialloSemimonoFilename = "Giallo-Semimono-Medium-001.zip";
  const GialloSemimonoPW = process.env.NEXT_PUBLIC_GIALLO_PW;


  // const ProtestMonoFileUrl = "/StereoTypefaces-Trials-2023.zip";
  // const ProtestMonoFilename = "Protest-Mono_Full_1-001.zip";
  // const ProtestMonoPW = process.env.NEXT_PUBLIC_PROTEST_MONO_PW;

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

        <Button lable={"Pre Release"} subclass={"quaternaryMuted"} />
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
              title={"Giallo Mono"}
              fileUrl={GialloMonoFileUrl}
              filename={GialloMonoFilename}
              password={GialloMonoPW}
            />
            <PremiumDownload
              title={"Giallo Semimono"}
              fileUrl={GialloSemimonoFileUrl}
              filename={GialloSemimonoFilename}
              password={GialloSemimonoPW}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Trialdownload;
