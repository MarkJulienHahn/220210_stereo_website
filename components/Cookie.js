import Link from "next/link";
import Button from "../components/Button";

const Cookie = ({ onAccept, onDecline }) => {
  return (
    <>
      We use cookies to provide you with a better browsing experience and to
      analyze site traffic. Protecting your privacy and personal data is
      important to us, which is why we want to inform you about our use of
      cookies in compliance with the General Data Protection Regulation (GDPR).
      <br />
      <br />
      If you do not wish to allow any cookies, please click »Decline«.
      Please note that this may limit the functionality of the website.
      <div className="cookieButtonWrapper">
        <Button lable={"Accept"} subclass={"primary"} onClick={onAccept} />
        <Button lable={"Decline"} subclass={"secondary"} onClick={onAccept} />
        <Link href="/legals">
          <Button lable={"Learn More"} subclass={"quaternary"} />
        </Link>
      </div>
    </>
  );
};

export default Cookie;
