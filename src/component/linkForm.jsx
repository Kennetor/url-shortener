import React, { useState } from "react";
import inputImgMobile from "../images/bg-shorten-mobile.svg";

const LinkItem = ({ shortUrl, url }) => {
  return (
    <ul className="m-auto mt bg-white w-[340px] h-44 rounded-lg translate-y-20 text-[15px] mt-10">
      <h1 className="five text-2xl text-left mt-2 ml-6">{url}</h1>
      <hr className="mt-6" />
      <div className="grid">
        <li
          className="text-[15px] text-[#2acfcf] text-left ml-6 translate-y-2"
          key={shortUrl}
        >
          {shortUrl}
          <button className="absolute right-5 w-[300px]  m-auto rounded-lg border-none py-[10px] px-20 bg-[#2acfcf] text-xl text-white mt-10 ">
            Copy
          </button>
        </li>
      </div>
    </ul>
  );
};

function LinkForm() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState(null);
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
      setShortUrl(data.result.short_link);
    }
  };
  const handleClick = (newLink) => {
    setLinks([...links, { shortUrl: newLink, url }]);
  };

  return (
    <>
      <div className="mt-20">
        <div className="bg-[#3b3054] h-56 w-[22rem] m-auto rounded-2xl z-50">
          <img
            src={inputImgMobile}
            className="translate-x-24 w-64 h-58 rounded-tr-xl"
          />
          <form onSubmit={handleSubmit}>
            <div className="absolute m-auto -translate-y-32 left-[50%] -translate-x-[50%]">
              <input
                type="text"
                placeholder="Shorten a link here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className={`input five w-80  text-xl bg-white h-[55px] m-auto translate-y-4 ${
                  error ? "border-[#f46262] border-4" : ""
                }`}
              />
              {error && (
                <p className="text-[#f46262] absolute text-[16px] top-20">
                  Please add a link
                </p>
              )}

              <button
                type="submit"
                onClick={() => handleClick(shortUrl)}
                className="five w-80 m-auto rounded-lg xl:absolute translate-y-16 border-none py-[18px] px-20 bg-[#2acfcf] text-xl text-white "
              >
                Shorten it!
              </button>
              {!error &&
                links.map(({ shortUrl, url }) => (
                  <LinkItem key={shortUrl} shortUrl={shortUrl} url={url} />
                ))}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LinkForm;
