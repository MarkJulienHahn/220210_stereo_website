import React from "react";
import Button from "../components/Button";

const Cookie = ({ acceptCookie }) => {
  return (
    <>
      By continuing to browse this site, you agree to the use of cookies to
      identify your session and to remember your login after you close the
      browser (authentication cookies).
      <div className="cookieButtonWrapper">
        <Button
          lable={"Accept"}
          subclass={"primary"}
          onClick={() => acceptCookie()}
        />
        <Button lable={"Learn More"} subclass={"secondary"} />
      </div>
    </>
  );
};

export default Cookie;
