function Footer() {
  return (
    <>
      <div className="grid translate-x-[50%] right-[50%] mt-10 z-50 absolute ">
        <img src="/images/logo.svg" />
      </div>
      <footer className="flex flex-col items-center text-center leading-loose p-10 bg-base-300 text-base-content gap-6">
        <div className="tracking-wider mt-16">
          <h1 className="text-white">Features</h1>
          <p className="link link-hover">Link Shortening</p>
          <p className="link link-hover">Branded Links</p>
          <p className="link link-hover">Analytics</p>
        </div>
        <div className=" ">
          <h1 className="text-white">Features</h1>
          <p className="link link-hover">Link Shortening</p>
          <p className="link link-hover">Branded Links</p>
          <p className="link link-hover">Analytics</p>
        </div>
        <div className="m-auto">
          <h1 className="text-white">Company</h1>
          <p className="link link-hover">About</p>
          <p className="link link-hover">Our Team</p>
          <p className="link link-hover">Careers</p>
          <p className="link link-hover">Contact</p>

          <div className="mt-10">
            <div className="grid grid-flow-col gap-10">
              <img src="/images/icon-facebook.svg" />
              <img src="/images/icon-twitter.svg" />
              <img src="/images/icon-pinterest.svg" />
              <img src="/images/icon-instagram.svg" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
