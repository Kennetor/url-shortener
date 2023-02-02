import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import inputImgMobile from "../images/bg-shorten-mobile.svg";
import inputImgDesktop from "../images/bg-shorten-desktop.svg";

function LinkForm() {
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState([]);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regex =
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    if (!regex.test(url)) {
      setError(true);
    } else {
      setError(false);
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      const data = await response.json();

      const shortUrl = data.result.short_link;
      setLinks([...links, { shortUrl, url }]);
    }
  };

  return (
    <>
      <div className="mt-20 lg:mt-40">
        <div className="bg-[#3b3054] h-56 lg:h-40 w-[22rem] lg:w-[80rem] m-auto rounded-2xl lg:rounded-xl z-50">
          <img
            src={inputImgMobile}
            className="translate-x-24 w-64 h-58 rounded-tr-xl block lg:hidden"
          />{" "}
          <img
            src={inputImgDesktop}
            className="lg:h-full rounded-tr-xl lg:rounded-b-xl hidden lg:block"
          />
          <form onSubmit={handleSubmit}>
            <div className="absolute m-auto -translate-y-32 left-[50%] -translate-x-[50%] lg:-translate-y-28">
              <input
                type="text"
                placeholder="Shorten a link here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className={`input five w-80  text-xl bg-white h-[55px] lg:h-[65px] m-auto translate-y-4 lg:-translate-y-2 lg:w-[50rem] lg:-translate-x-40 ${
                  error ? "border-[#f46262] border-4" : ""
                }`}
              />

              <button
                type="submit"
                className="five w-80 m-auto rounded-lg lg:absolute lg:-right-44 lg:-top-[72px] translate-y-16 border-none py-[18px] px-20 bg-[#2acfcf] text-xl text-white hover:bg-cyan-200"
              >
                Shorten it!
              </button>
              {error && (
                <p className="text-[#f46262] relative text-[16px] -left-20 -top-10 lg:bottom-0 lg:-left-[31rem] lg:-top-0">
                  Please add a link
                </p>
              )}
            </div>
          </form>
        </div>
        {!error &&
          links.map(({ shortUrl, url }) => (
            <LinkItem key={shortUrl} shortUrl={shortUrl} url={url} />
          ))}
      </div>
    </>
  );
}
const LinkItem = ({ shortUrl, url }) => {
  const [buttonText, setButtonText] = useState("Copy");

  const handleCopy = () => {
    setButtonText("Copied!");
  };

  return (
    <ul className="m-auto lg:mt-4 bg-white w-[340px] h-44 lg:h-20 rounded-lg translate-y-2 text-[15px] mt-6 lg:w-[80rem] lg:flex lg:justify-between">
      <h1 className="five text-md lg:text-xl text-left ml-6 translate-y-4 lg:translate-y-6">
        {url}
      </h1>
      <hr className="mt-6" />
      <div className="grid">
        <li
          className="text-[15px] lg:text-xl text-[#2acfcf] text-left ml-6 translate-y-2 lg:translate-y-6 lg:mr-52"
          key={shortUrl}
        >
          {shortUrl}
        </li>
        <CopyToClipboard text={shortUrl} onCopy={handleCopy}>
          <button
            className={`absolute right-5 w-[300px] rounded-lg border-none py-[10px] px-20 bg-[#2acfcf] text-xl text-white mt-12 lg:-right-96 lg:-translate-x-[26rem] lg:w-[10rem] lg:px-0 lg:-translate-y-8 lg:hover:bg-cyan-200 ${
              buttonText === "Copied!" ? "bg-[#232127]" : ""
            }`}
          >
            {buttonText}
          </button>
        </CopyToClipboard>
      </div>
    </ul>
  );
};
export default LinkForm;
{
  /* <CopyToClipboard text="Hello!">
  <button>Copy to clipboard</button>
</CopyToClipboard> */
}
