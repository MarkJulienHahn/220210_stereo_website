import React from "react";
import JournalEntry from "./JournalEntry";

const Journal = ({ journal }) => {
  return (
    <div className="journalWrapper">
      {journal.map((entry, i) => (
        <JournalEntry key={i} entry={entry} />
      ))}
    </div>
  );
};

export default Journal;
