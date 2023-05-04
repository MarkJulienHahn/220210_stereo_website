import Link from "next/link";
import Button from "../components/Button";

const Cookie = ({ onAccept, onDecline }) => {

  return (
    <>
      By continuing to browse this site, you agree to the use of cookies to
      identify your session and to remember your login after you close the
      browser (authentication cookies).
      <div className="cookieButtonWrapper">
        <Button lable={"Accept"} subclass={"primary"} onClick={onAccept} />
        <Button lable={"Decline"} subclass={"secondary"} onClick={onDecline} />
        <Link href="/legals">
          <Button lable={"Learn More"} subclass={"quaternary"} />
        </Link>
      </div>
    </>
  );
};

export default Cookie;
