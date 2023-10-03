import Link from "next/link";
import Button from "../components/Button";

const Cookie = ({ onAccept, onDecline }) => {
  return (
    <>
      Cookies
      <br />
      <br />
      If you do not wish to allow any cookies, please click »Decline«. Please
      note that this may limit the functionality of the website.
      <div className="cookieButtonWrapper">
        <Button lable={"Accept"} subclass={"primary"} onClick={onAccept} />
        <Button lable={"Decline"} subclass={"quaternary"} onClick={onAccept} />
        <Link href="/legals">
          <Button lable={"Learn More"} subclass={"quaternary"} />
        </Link>
      </div>
    </>
  );
};

export default Cookie;
