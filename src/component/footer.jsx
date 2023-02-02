// Images
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import whiteLogo from "../images/white-logo.svg";

function Footer() {
  return (
    <>
      <img
        src={whiteLogo}
        className="translate-y-40 mt-12 m-auto lg:-translate-x-[35rem] lg:translate-y-[21rem]"
      />
      <footer className="flex flex-col items-center text-center leading-loose p-10 lg:p-0 bg-[#232127] mt-20 text-base-content gap-8 lg:gap-0">
        <div className="tracking-wider mt-16 lg:grid lg:-translate-x-60 lg:translate-y-40 lg:text-left">
          <h1 className="text-white leading-loose">Features</h1>
          <p className="hover:text-[#2acfcf]">Link Shortening</p>
          <p className="hover:text-[#2acfcf]">Branded Links</p>
          <p className="hover:text-[#2acfcf]">Analytics</p>
        </div>
        <div className="lg:grid lg:-translate-x-6 lg:translate-y-[14px] lg:text-left ">
          <h1 className="text-white">Resources</h1>
          <p className="hover:text-[#2acfcf]">Blog</p>
          <p className="hover:text-[#2acfcf]">Developers</p>
          <p className="hover:text-[#2acfcf]">Support</p>
        </div>
        <div className="lg:grid lg:translate-x-60 lg:-translate-y-[130px] lg:text-left">
          <h1 className="text-white ">Company</h1>
          <p className="hover:text-[#2acfcf]">About</p>
          <p className="hover:text-[#2acfcf]">Our Team</p>
          <p className="hover:text-[#2acfcf]">Careers</p>
          <p className="hover:text-[#2acfcf]">Contact</p>

          <div className="mt-10 lg:translate-x-60 lg:-translate-y-52">
            <div className="grid grid-flow-col gap-10 ">
              <img src={facebook} className="hover:bg-cyan-700 rounded-md" />
              <img src={twitter} className="hover:bg-cyan-700 rounded-md" />
              <img src={pinterest} className="hover:bg-cyan-700 rounded-lg" />
              <img src={instagram} className="hover:bg-cyan-700 rounded-lg" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
