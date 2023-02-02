import React from "react";

export function Title() {
  return (
    <div className="translate-y-20 lg:ml-12">
      <h1 className="text-5xl lg:text-7xl lg:text-left">
        More than just
        <br className="hidden lg:block" /> shorter links
      </h1>
      <p className="text-slate-500 mt-4 text-xl lg:text-left">
        Build your brand's recognition and get detailed
        <br className="hidden lg:block" /> insights on how your links are
        performing
      </p>
    </div>
  );
}

export function AdvancedStatistics(props) {
  return (
    <>
      <div className="mt-20">
        <h1 className="text-3xl ">{props.title}</h1>
        <p className="text-[#3b3054] text-xl mt-4">{props.text}</p>
      </div>
    </>
  );
}
const MainCards = (props) => {
  return (
    <>
      <div className="-mt-12 z-50">
        <div className="flex m-auto bg-[#3b3054] translate-y-32 rounded-full w-24 h-24">
          <img src={props.src} className="m-auto" />
        </div>
        <div className="mt-20 bg-white w-[21rem] m-auto px-10 text-[15px] h-72 rounded-md">
          <h1 className="text-2xl translate-y-16">{props.title}</h1>
          <div className="mt-10 five translate-y-12 text-[#9e9aa7]">
            {props.text}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCards;
