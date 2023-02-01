import React from "react";
import mobileBoost from "../images/bg-boost-mobile.svg";

function GetStarted() {
  return (
    <>
      <div className="w-60 m-auto rounded-full border-none p-[15px] bg-[#2acfcf] text-xl text-white mt-40">
        <button>Get Started</button>
      </div>
    </>
  );
}

export function BoostButton() {
  return (
    <>
      <div className="-mt-20">
        <div className="relative m-auto translate-y-44 h-80 bg-[#3b3054]">
          <h1 className="five text-3xl text-center -mt-4 text-white absolute top-28 z-50 w-full">
            Boost your links today
          </h1>
          <img src={mobileBoost} className="h-80 w-full object-fit" />
          <div className="-translate-y-80">
            <GetStarted />
          </div>
        </div>
      </div>
    </>
  );
}

export default GetStarted;

{
  /* <div className="-mt-12">
<div className="flex m-auto bg-[#3b3054] translate-y-32 rounded-full w-24 h-24">
  <img src={props.src} className="m-auto" />
</div>
<div className="mt-20 bg-white w-[21rem] m-auto px-10 text-[15px] h-72 rounded-md">
  <h1 className="text-2xl translate-y-16">{props.title}</h1>
  <div className="mt-10 five translate-y-12">{props.text}</div>
</div>
</div> */
}
