

import { useRouter } from "next/router";

import Button from "../components/Button";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

export default function FourOhFour() {
  const location = useRouter();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <div className="buttonsLeftWrapper">
          <Link href="/" scroll={false}>
            <a>
              <Button lable={"Home"} subclass={"secondary"} />
            </a>
          </Link>
          <Button
            lable={"Damn, somethin went wrong!"}
            subclass={"quaternaryMuted"}
          />
        </div>
        <motion.div
          location={location}
          key={location.pathname}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
          transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className="errorWrapper">
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
