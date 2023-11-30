import React from "react";
import JournalPreview from "./JournalPreview";
import Footer from "../components/Footer"

import { useRouter } from "next/router";

import { motion, AnimatePresence } from "framer-motion";

const Journal = ({ journal }) => {
  const location = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        location={location}
        key={location.pathname}
        initial={{ y: 300, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -300, opacity: 0 }}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="journalWrapper">
          {journal.map((entry, i) => (
            <JournalPreview key={i} entry={entry} />
            // <JournalEntry key={i} entry={entry} />
          ))}
          <Footer />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Journal;
