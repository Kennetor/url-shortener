import React from "react";
import mobileBoost from "../images/bg-boost-mobile.svg";
import desktopBoost from "../images/bg-boost-desktop.svg";

function GetStarted({ className = "" }) {
  return (
    <div
      className={`w-60 m-auto rounded-full border-none p-[15px] bg-[#2acfcf] text-xl text-white mt-40 hover:bg-cyan-200 ${className}`}
    >
      <button>Get Started</button>
    </div>
  );
}

export function BoostButton() {
  return (
    <>
      <div className="-mt-20">
        <div className="relative m-auto translate-y-44 h-80 bg-[#3b3054]">
          <h1 className="five text-3xl text-center -mt-4 text-white absolute top-28 z-50 w-full lg:text-5xl lg:-mt-6">
            Boost your links today
          </h1>
          <div className="hidden lg:block">
            <img src={desktopBoost} className="h-80 w-full object-fit" />
          </div>
          <div className="lg:hidden">
            <img src={mobileBoost} className="h-80 w-full object-fit" />
          </div>
          <div className="-translate-y-80">
            <GetStarted />
          </div>
        </div>
      </div>
    </>
  );
}

export default GetStarted;
