import React from "react";
import { UserPersonaPic } from "../../assets/images";

const UserPersona = () => {
  return (
    <section className="py-20">
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
          <img src={UserPersonaPic} alt="" className="rounded-lg lg:w-[50%]" />
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
              Sam works as a Product Manager at Stripe. He’s working on a fixed
              contract. He works remotely from his apartment in Los Angeles, so
              he’s not usually on the roads. Sam’s time is often limited to take
              any sort of breaks.
            </p>
          </div>
          <div className="bg-blue-100 rounded-lg p-5 space-y-3">
            <h1 className="text-3xl text-blue-500"> Background</h1>
            <p>
              Sam works as a Product Manager at Stripe. He’s working on a fixed
              contract. He works remotely from his apartment in Los Angeles, so
              he’s not usually on the roads. Sam’s time is often limited to take
              any sort of breaks.
            </p>
          </div>
          <div className="bg-blue-100 rounded-lg p-5 space-y-3">
            <h1 className="text-3xl text-blue-500"> Background</h1>
            <p>
              Sam works as a Product Manager at Stripe. He’s working on a fixed
              contract. He works remotely from his apartment in Los Angeles, so
              he’s not usually on the roads. Sam’s time is often limited to take
              any sort of breaks.
            </p>
          </div>
          <div className="bg-blue-100 rounded-lg p-5 space-y-3">
            <h1 className="text-3xl text-blue-500"> Background</h1>
            <p>
              Sam works as a Product Manager at Stripe. He’s working on a fixed
              contract. He works remotely from his apartment in Los Angeles, so
              he’s not usually on the roads. Sam’s time is often limited to take
              any sort of breaks.
            </p>
          </div>
          <div className="bg-blue-100 rounded-lg p-5 space-y-3">
            <h1 className="text-3xl text-blue-500"> Background</h1>
            <p>
              Sam works as a Product Manager at Stripe. He’s working on a fixed
              contract. He works remotely from his apartment in Los Angeles, so
              he’s not usually on the roads. Sam’s time is often limited to take
              any sort of breaks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPersona;
