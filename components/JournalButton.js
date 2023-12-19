import Link from "next/link";

const JournalButton = ({
  title,
  background,
  color,
  outline,
  link,
  external,
  externalLink,
}) => {
  return !external ? (
    <Link href={link} scroll={false}>
      <div
        className="journalButton"
        style={{
          background: background,
          color: color,
          border: outline ? `2px solid ${color}` : `2px solid ${background}`,
        }}
      >
        {title}
      </div>
    </Link>
  ) : (
    <a href={externalLink} target="blank" rel="_noreferrer">
      <div
        className="journalButton"
        style={{
          background: background,
          color: color,
          border: outline ? `2px solid ${color}` : `2px solid ${background}`,
        }}
      >
        {title}
      </div>
    </a>
  );
};

export default JournalButton;
