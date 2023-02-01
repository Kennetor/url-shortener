// Images
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import whiteLogo from "../images/white-logo.svg";

function Footer() {
  return (
    <>
      <img src={whiteLogo} className="translate-y-40 mt-12 m-auto" />
      <footer className="flex flex-col items-center text-center leading-loose p-10 bg-[#232127] mt-20 text-base-content gap-8">
        <div className="tracking-wider mt-16">
          <h1 className="text-white leading-loose">Features</h1>
          <p className="link link-hover">Link Shortening</p>
          <p className="link link-hover">Branded Links</p>
          <p className="link link-hover">Analytics</p>
        </div>
        <div className=" ">
          <h1 className="text-white">Resources</h1>
          <p className="link link-hover">Blog</p>
          <p className="link link-hover">Developers</p>
          <p className="link link-hover">Support</p>
        </div>
        <div className="m-auto">
          <h1 className="text-white">Company</h1>
          <p className="link link-hover">About</p>
          <p className="link link-hover">Our Team</p>
          <p className="link link-hover">Careers</p>
          <p className="link link-hover">Contact</p>

          <div className="mt-10">
            <div className="grid grid-flow-col gap-10">
              <img src={facebook} />
              <img src={twitter} />
              <img src={pinterest} />
              <img src={instagram} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
