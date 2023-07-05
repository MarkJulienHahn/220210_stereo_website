import { useState, useEffect } from "react";
import useDownloader from "react-use-downloader";

const PremiumDownload = ({ password, title, fileUrl, filename }) => {
  const [pw, setPw] = useState();
  const [name, setName] = useState(null);

  const { download } = useDownloader();

  useEffect(() => {
    name == password && setPw(true)
  }, [name])

  return pw ? (
    <form method="post" onSubmit={(e) => handleOnSubmit(e)}>
      <div className="formPremiumDownloadUpper">
        <span>{title} →</span>
        <p className="inputPremium">
          <input
            autoFocus="true"
            placeholder="Password"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </p>
      </div>
    </form>
  ) : (
    <p onClick={() => download(fileUrl, filename)}>📂 {filename}</p>
  );
};

export default PremiumDownload;
