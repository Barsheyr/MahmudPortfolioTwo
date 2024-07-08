import React from "react";
import { AerHeader, OverviewPic } from "../assets/images";
import {
  DesignProcess,
  Three,
  UserResearch,
  EmpathyMap,
  UserPersona,
  StoryBoard,
  UserJourney,
  InfoArchitecture,
  WireFrame,
  OnboardingScreen,
  OwnerProfile,
  StyleGuide,
  Impacts,
  LessonNext,
} from "../components";

const Aer = () => {
  return (
    <section className="bg-slate-100 font-primary">
      <section className="py-32 max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="flex flex-col text-center lg:text-start space-y-5">
            <h1 className="lg:text-6xl text-3xl">
              AER: The Self Driving Electric Ride Hailing Service
            </h1>
            <p className="">
              The product is a mobile app for an EV company that serves both car
              owners and passengers who prefer environmentally friendly means of
              transportation.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src={AerHeader} alt="" className="w-[50%]" />
          </div>
        </div>

        {/* Project overview */}
        <section className=" py-20 mt-44 grid lg:grid-cols-2 items-center gap-10">
          <div className="space-y-5">
            <h1 className="text-5xl font-bold text-blue-500">
              Project Overview{" "}
            </h1>
            <p>
              With the constant rise in production costs, modern Self-Driving
              environmental friendly Vehicles are a luxury and people will most
              likely purchase these cars on exorbitant loans. E.g, an individual
              who works remotely and wishes to own an SDV without breaking the
              bank can afford to do so with this app that allows car owners to
              let their cars carry out ride hailing services that help payback
              the car loans. On another note, it also allows users of these
              services to experience a safe and conducive manner of
              transportation without the need of harassment from unruly drivers.
            </p>

            <div className="grid grid-cols-2 gap-10 mt-10">
              {/* 1 */}
              <div>
                <div>
                  <h2 className="text-2xl text-blue-500"> Teams </h2>
                </div>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
              </div>
              {/* 2 */}
              <div>
                <div>
                  <h2 className="text-2xl text-blue-500"> Tools </h2>
                </div>
                <p> FIGMA </p>
              </div>
              {/* 3 */}
              <div>
                <div>
                  <h2 className="text-2xl text-blue-500"> Roles </h2>
                </div>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img src={OverviewPic} alt="" className="w-[50%]" />
          </div>
        </section>

        {/* Three */}
        <Three />
        <DesignProcess />
        <UserResearch />
        <EmpathyMap />
        <UserPersona />
        <StoryBoard />
        <UserJourney />
        <InfoArchitecture />
        <WireFrame />
        <OnboardingScreen />
        <OwnerProfile />
        <StyleGuide />
        <Impacts />
        <LessonNext />
      </section>
    </section>
  );
};

export default Aer;
