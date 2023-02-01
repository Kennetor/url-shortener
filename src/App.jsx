import React, { useState } from "react";
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
import LinkForm from "./component/linkForm";
import MainCards, { AdvancedStatistics, Title } from "./component/mainCards";
import GetStarted, { BoostButton } from "./component/buttons";
import DropdownMenu from "./component/dropdown";

function App() {
  return (
    <>
      <div className="App">
        <div className="flex mt-8 ml-4">
          <img src={logo} />
          <div>
            <DropdownMenu />
          </div>
        </div>
        <div className="mt-4 overflow-hidden">
          <img
            src={working}
            className="fixed-active translate-x-28 translate-y-20 scale-150"
          />
        </div>
        <div className="bg-white w-full h-[1035px] absolute -z-50 top-0"></div>
        <Title
          title="More than just shorter links"
          text="Build your brand's recognition and get detailed insights on how your
          links are performing"
        />
        <GetStarted />
        <LinkForm />
        <AdvancedStatistics
          title="Advanced Statistics"
          text="Track how your links are performing across the web with our advanced
            statistics dashboard."
        />
        <MainCards
          src={records}
          title="Brand Recognition"
          text="Boost your brand recognition with each click. Generic links don't
        mean a thing. Branded links help instil confidence in your
        content."
        />
        <div className="divider divider-horizontal -z-50 -mt-32 flex m-auto translate-y-32 w-[10px] bg-[#2acfcf] h-20"></div>
        <MainCards
          src={customizable}
          title="Detailed Records"
          text="Gain insights into who is clicking your links. Knowing when and
        where people engage with your content helps inform better
        decisions."
        />
        <div className="divider divider-horizontal -z-50 -mt-32 flex m-auto translate-y-32 w-[10px] bg-[#2acfcf] h-20"></div>
        <MainCards
          src={brand}
          title="Fully Customizable"
          text="Improve brand awareness and content discoreability through
        customizable links, supercharging audience engagement."
        />
        <BoostButton />
        <Footer />
      </div>
    </>
  );
}
export default App;
