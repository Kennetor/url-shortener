// Images
import logo from "./images/logo.svg";
import working from "./images/illustration-working.svg";
import brand from "./images/icon-brand-recognition.svg";
import records from "./images/icon-detailed-records.svg";
import customizable from "./images/icon-fully-customizable.svg";
// Components
import Footer from "./component/footer";
import LinkForm from "./component/linkForm";
import MainCards, { AdvancedStatistics, Title } from "./component/mainCards";
import GetStarted, { BoostButton } from "./component/buttons";
import DropdownMenu from "./component/dropdown";

function App() {
  return (
    <>
      <div className="App">
        <div className="flex mt-8 ml-4 lg:justify-between lg:ml-2">
          <img src={logo} className="lg:ml-20" />
          <div className="lg:mr-[32rem]">
            <div className="hidden lg:flex lg:justify-evenly">
              <p className="lg:hover:text-black mr-10">Features</p>
              <p className="lg:hover:text-black mr-10">Pricing</p>
              <p className="lg:hover:text-black">Resources</p>
            </div>
          </div>
          <div className="hidden lg:flex lg:float-right lg:">
            <p>Login</p>
            <button className="bg-[#2acfcf] text-white rounded-full px-6 ml-8 hover:bg-cyan-200 py-2 -mt-2">
              Sign Up
            </button>
          </div>
          <div>
            <DropdownMenu />
          </div>
        </div>
        <div className="mt-4 overflow-hidden lg:overflow-visible lg:block lg:">
          <img
            src={working}
            className="translate-x-28 translate-y-20 scale-150 lg:scale-100 lg:absolute lg:right-40"
          />
        </div>
        <div className="bg-white w-full h-[1035px] lg:h-[770px] absolute -z-50 top-0"></div>
        <div className="lg:flex lg:-mt-96 lg:ml-10">
          <Title />
        </div>
        <GetStarted className="lg:-translate-x-[32rem]" />
        <LinkForm />
        <AdvancedStatistics
          title="Advanced Statistics"
          text="Track how your links are performing across the web with our advanced
            statistics dashboard."
        />
        <div className="lg:flex lg:justify-center">
          <div className="lg:ml-40">
            <MainCards
              src={records}
              title="Brand Recognition"
              text="Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your
            content."
            />
          </div>
          {/* Divider */}
          <div className="divider divider-horizontal -z-50 -mt-32 flex m-auto translate-y-32 w-[10px] bg-[#2acfcf] h-20 lg:translate-y-56 lg:rotate-90 lg:-translate-x-4 lg:h-96"></div>
          {/*  */}
          <div className="lg:mt-20">
            <MainCards
              src={customizable}
              title="Detailed Records"
              text="Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions."
            />
          </div>
          {/* Divider */}
          <div className="divider divider-horizontal -z-50 -mt-32 flex m-auto translate-y-32 w-[10px] bg-[#2acfcf] h-20 lg:rotate-90 lg:translate-y-64 lg:h-96"></div>
          {/*  */}
          <div className="lg:mt-32 lg:mr-36">
            <MainCards
              src={brand}
              title="Fully Customizable"
              text="Improve brand awareness and content discoreability through
            customizable links, supercharging audience engagement."
            />
          </div>
        </div>
        <BoostButton />
        <Footer />
      </div>
    </>
  );
}
export default App;
