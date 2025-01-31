import React from "react";
import HeroEsnAzerbaijan from "../components/esnazerbaijanPage/HeroEsnAzerbaijan";
import EsnText from "../components/esnazerbaijanPage/EsnText";
import EsnAzBottom from "../components/esnazerbaijanPage/EsnAzBottom";

const EsnAzerbaijan = () => {
  return (
    <>
      <HeroEsnAzerbaijan />
      <div className="back-image">
      <EsnText />
      <EsnAzBottom />
      </div>
    </>
  );
};

export default EsnAzerbaijan;
