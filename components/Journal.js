import React from "react";
import JournalPreview from "./JournalPreview";
import Footer from "../components/Footer";
import Button from "./Button";
import Cartbutton from "./Cartbutton";
import Link from "next/link";

import { useRouter } from "next/router";

import { motion, AnimatePresence } from "framer-motion";

const Journal = ({
  journal,
  cart,
  dark,
  darkMode,
  setDarkMode,
  setShowCheckout,
}) => {
  const location = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="buttonsLeftWrapper">
        <Link href="/" scroll={false}>
          <a>
            <Button lable={"Home"} subclass={"tertiary"} />
          </a>
        </Link>

        <Button lable={"News"} subclass={"quaternaryMuted"} />
      </div>
      <div className="buttonsRightWrapper">
        <Button
          lable={darkMode ? "Light" : "Dark"}
          subclass={!darkMode ? "secondary" : "quaternary"}
          onClick={() => setDarkMode(!darkMode)}
        />
        <Link href="/trials" scroll={false}>
          <a>
            <Button lable={"Trials"} subclass={"tertiary"} />
          </a>
        </Link>
        <Button
          lable={"Buy"}
          subclass={"primary"}
          onClick={cart.line_items ? () => setShowCheckout(true) : () => {}}
        />
        {cart.line_items?.length ? (
          <Cartbutton
            lable={`Cart [${cart.total_unique_items}]`}
            subclass={"tertiary"}
            setShowCheckout={setShowCheckout}
            live={live}
            cart={cart}
          />
        ) : (
          ""
        )}
      </div>
      <motion.div
        location={location}
        key={location.pathname}
        initial={{ y: 300, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -300, opacity: 0 }}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="journalWrapper" style={darkMode ? dark : {}}>
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
