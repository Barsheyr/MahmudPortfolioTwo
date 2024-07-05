import React from "react";
import { UserPersonaPic, Huawa } from "../../assets/images";
import { LiaSadCry } from "react-icons/lia";

const UserPersona = () => {
  return (
    <section className="py-20">
      {/*------------------------ SAM PERSONA ------------------------------*/}
      <div>
        <div className="py-20">
          <h1 className="text-center text-blue-500 text-5xl font-bold">
            User Persona
          </h1>

          <p className="text-center mt-10">
            This is a user persona of a car owner that explains his goals and
            frustrations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* first side */}
          <div className="space-y-10">
            <h1 className="bg-blue-500 rounded-r-full text-2xl text-center text-white py-10">
              Sam Lewis
            </h1>
            <img
              src={UserPersonaPic}
              alt=""
              className="rounded-lg lg:w-[50%]"
            />
            <p className="bg-slate-200 p-10 rounded-md">
              I am used to self driving cars and usually get them on rentals.
            </p>
            <div>
              <div>
                <h3 className="text-blue-500 text-xl">
                  Age: <span className="text-black"> 27 </span>
                </h3>
              </div>
              <div>
                <h3 className="text-blue-500 text-xl">
                  Location: <span className="text-black">Glasgow. UK</span>
                </h3>
              </div>
              <div>
                <h3 className="text-blue-500 text-xl">
                  Occupation:
                  <span className="text-black"> Product Manager </span>
                </h3>
              </div>
            </div>
          </div>
          {/* second slide */}
          <div className="space-y-5">
            <div className="bg-blue-100 rounded-lg p-5 space-y-3">
              <h1 className="text-3xl text-blue-500"> Background</h1>
              <p>
                Sam works as a Product Manager at Stripe. He’s working on a
                fixed contract. He works remotely from his apartment in Los
                Angeles, so he’s not usually on the roads. Sam’s time is often
                limited to take any sort of breaks.
              </p>
            </div>
            <div className="bg-blue-100 rounded-lg p-5 space-y-3">
              <div className="flex flex-row items-center gap-5">
                <LiaSadCry size={50} color="#0000FF" />
                <h1 className="text-3xl text-blue-500"> Frustration </h1>
              </div>
              <p>Health, safety and insurance concerns.</p>
              <p>Prices of electric vehicles are high.</p>
              <p>Constraint on movement because he does not have a car.</p>
            </div>
            <div className="bg-blue-100 rounded-lg p-5 space-y-3">
              <h1 className="text-3xl text-blue-500"> Goals </h1>
              <p>To have the cars at his disposal for transportation.</p>
              <p> To monitor his car when it is out on Uber services.</p>
              <p>
                To be abe to own a self-driving vehicle without having to deal
                with the over bearing costs of car loans.
              </p>
            </div>
            <div className="bg-blue-100 rounded-lg p-5 space-y-3">
              <h1 className="text-3xl text-blue-500"> Problem Statement </h1>
              <p>
                Sam would like to own a self-driving vehicle but he is not able
                to because of the exorbitant prices of these cars and how over
                bearing the car loans are
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*------------------------ HAUWA BILAL ------------------------------*/}
      <div>
        <div className="py-20">
          <p className="text-center mt-10">
            This is a user persona of a car owner that explains his goals and
            frustrations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* first side */}
          <div className="space-y-10">
            <h1 className="bg-blue-500 rounded-r-full text-2xl text-center text-white py-10">
              Hauwa Bilal
            </h1>
            <img src={Huawa} alt="" className="rounded-lg lg:w-[50%]" />
            <p className="bg-slate-200 p-10 rounded-md">
              As an hybrid worker, I want a fast and easy ride.
            </p>
            <div>
              <div>
                <h3 className="text-blue-500 text-xl">
                  Age: <span className="text-black"> 32 </span>
                </h3>
              </div>
              <div>
                <h3 className="text-blue-500 text-xl">
                  Location:
                  <span className="text-black"> California. USA </span>
                </h3>
              </div>
              <div>
                <h3 className="text-blue-500 text-xl">
                  Occupation:
                  <span className="text-black"> Data Analyst </span>
                </h3>
              </div>
            </div>
          </div>
          {/* second slide */}
          <div className="space-y-5">
            <div className="bg-blue-100 rounded-lg p-5 space-y-3">
              <h1 className="text-3xl text-blue-500"> Background</h1>
              <p>
                Sam works as a Product Manager at Stripe. He’s working on a
                fixed contract. He works remotely from his apartment in Los
                Angeles, so he’s not usually on the roads. Sam’s time is often
                limited to take any sort of breaks.
              </p>
            </div>
            <div className="bg-blue-100 rounded-lg p-5 space-y-3">
              <div className="flex flex-row items-center gap-5">
                <LiaSadCry size={50} color="#7192f6" />
                <h1 className="text-3xl text-blue-500"> Frustration </h1>
              </div>
              <p>Most drivers are rude and they lack empathy.</p>
              <p>
                It is no longer safe because some of them now use it for
                kidnapping and ritual purposes especially if you’re the only
                one.
              </p>
              <p>
                As a lady, i get harrassed by drivers sometimes and this is
                really fraustrating
              </p>
            </div>
            <div className="bg-blue-100 rounded-lg p-5 space-y-3">
              <h1 className="text-3xl text-blue-500"> Goals </h1>
              <p>To have the cars at his disposal for transportation.</p>
              <p> To monitor his car when it is out on Uber services.</p>
              <p>
                To be abe to own a self-driving vehicle without having to deal
                with the over bearing costs of car loans.
              </p>
            </div>
            <div className="bg-blue-100 rounded-lg p-5 space-y-3">
              <h1 className="text-3xl text-blue-500"> Problem Statement </h1>
              <p>
                Majority of people using ride hailing services such as Bolt are
                often not satisfied with their experience due to factors such
                as:
                <p className="mt-5">
                  <span className="text-blue-500 font-bold"> 1. </span> Drivers
                  lateness
                </p>
                <p className="mt-5">
                  <span className="text-blue-500 font-bold"> 2. </span> No
                  proper safety measures
                </p>
                <p className="mt-5">
                  <span className="text-blue-500 font-bold"> 3. </span>
                  Impatient drivers
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPersona;
