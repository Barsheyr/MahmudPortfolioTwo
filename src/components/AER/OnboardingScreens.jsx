import React from "react";
import {
  ScreenFour,
  ScreenOne,
  ScreenThree,
  ScreenTwo,
} from "../../assets/images";

const OnboardingScreens = () => {
  return (
    <section className="py-20 mt-10">
      <h1 className="text-center text-blue-500 text-5xl font-bold">
        Onboarding Screens
      </h1>

      <div className="grid lg:grid-cols-4 grid-cols-2 gap-20 mt-20">
        <img src={ScreenOne} alt="" />
        <img src={ScreenTwo} alt="" />
        <img src={ScreenThree} alt="" />
        <img src={ScreenFour} alt="" />
      </div>
    </section>
  );
};

export default OnboardingScreens;
