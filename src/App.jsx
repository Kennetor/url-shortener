// Images
import logo from "./images/logo.svg";
import working from "./images/illustration-working.svg";
import shorten from "./images/bg-shorten-mobile.svg";
import brand from "./images/icon-brand-recognition.svg";
import records from "./images/icon-detailed-records.svg";
import customizable from "./images/icon-fully-customizable.svg";
import boost from "./images/bg-boost-mobile.svg";
// Components
import Footer from "./component/footer";

function App() {
  return (
    <>
      <div className="App">
        <div className="mt-10 ml-10 absolute">
          <img src={logo} />
        </div>
        <div className="absolute right-10 mt-10 scale-150 text-slate-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
        <div className="overflow-hidden">
          <img src={working} className="absolute top-32 left-20 scale-125" />
        </div>

        <div className="absolute top-96 translate-y-12">
          <h1 className="text-5xl ">More than just shorter links</h1>
          <p className="text-slate-500 mt-4 text-2xl">
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
        </div>
        <div className="absolute text-[18px] rounded-full left-[50%] -translate-x-[50%] mt-[17rem] pl-10 pr-10 bg-[#2acfcf] text-white border-none">
          <button className="">Get started</button>
        </div>
      </div>

      <div
        className="bg-[#3b3054] w-[350px]
       h-40 translate-y-96 justify-center m-auto rounded-xl"
      >
        <div className="overflow-hidden rounded-xl">
          <div className="translate-x-40  ">
            <img src={shorten} className="rounded-2xl scale-125" />
            <div className="-translate-x-40 -translate-y-[110px]">
              <input
                type="text"
                placeholder="Shorten a link here..."
                className="five input w-72 max-w-xs z-50 text-slate-500 text-xl bg-white h-[55px]"
              />
              {/* Gray background of html from here and down */}

              <button className="five w-72 m-auto rounded-lg border-none py-[12px] px-20 bg-[#2acfcf] text-xl text-white mt-4">
                Shorten it!
              </button>
            </div>
          </div>

          <div>
            <h1 className="text-3xl">Advanced Statistics</h1>
            <p className="text-[#3b3054]">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
        </div>
        <div className="flex mt-16">
          <div className="grid justify-center items-center bg-white w-fit px-10 text-[15px] h-72 absolute rounded-md">
            <div className="flex m-auto bg-[#3b3054] -translate-y-20 rounded-full w-24 h-24 z-50">
              <img src={brand} className="flex m-auto z-50" />
            </div>
            <h1 className="-mt-44 text-2xl">Brand Recognition</h1>

            <p className="text-[#9e9aa7] -mt-36">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="divider divider-horizontal -z-50 right-|50%] flex m-auto translate-y-72 w-[10px] bg-[#2acfcf] h-20"></div>
        </div>
        {/* Detailed Records */}
        <div className="translate-y-60">
          <div className="flex m-auto bg-[#3b3054] translate-y-10 rounded-full w-24 h-24 z-50">
            <img src={records} className="flex m-auto z-50" />
          </div>
          <div className="grid justify-center items-center bg-white w-fit px-10 text-[15px] h-72 -z-50 rounded-md">
            <h1 className="mt-6 z-50 text-2xl">Detailed Records</h1>

            <p className="text-[#9e9aa7] -mt-20">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          {/* Fully Customizable */}
          <div className="flex m-auto bg-[#3b3054] translate-y-20 rounded-full w-24 h-24 z-50">
            <img src={customizable} className="flex m-auto z-50" />
          </div>
          <div className="grid justify-center items-center mt-6 bg-white w-fit px-10 text-[15px] h-72 -z-50 rounded-md">
            {" "}
            <h1 className="mt-16 z-50 text-2xl">Fully Customizable</h1>
            <p className="text-[#9e9aa7] -mt-20">
              Improve brand awareness and content discoreability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
        <div className="divider divider-horizontal -z-50 right-|50%] flex m-auto -translate-y-[168px] w-[10px] bg-[#2acfcf] h-20"></div>
      </div>
      <div className="bg-[#3b3054] w-full h-[300px] absolute -z-50 translate-y-[1850px]">
        <div className="absolute right-0 -z-50">
          <img src={boost} />
        </div>
        <h1 className="text-white text-3xl mt-24">Boost your links today</h1>
        <button className="z-50 mt-10 rounded-full px-10 h-16 bg-[#2acfcf] text-white text-xl">
          Get Started
        </button>
      </div>
      <div className="bg-[#bfbfbf] w-full h-[1550px] absolute -z-50 translate-y-[300px]"></div>
      <div className="translate-y-[134rem]">
        <Footer />
      </div>
    </>
  );
}
export default App;

// if using grid instead - which is better but i cba to change it now

// <div className="w-full grid  justify-center grid-flow-row">
// <div className="btn flex items-center w-40 m-2"></div>
// <div className="btn flex items-center w-40 m-2"></div>
// <div className="btn flex items-center w-40"></div>
// <div className="btn flex items-center w-40"></div>
// </div>
// <h1>Hello World</h1>
