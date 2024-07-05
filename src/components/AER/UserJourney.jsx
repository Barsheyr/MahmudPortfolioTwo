import React from "react";
import { UserBg1, UserBg2 } from "../../assets/images";

const UserJourney = () => {
  return (
    <section className="py-20">
      <h1 className="text-center text-blue-500 text-5xl font-bold">
        User Journey
      </h1>

      <div className="mt-20">
        <div>
          <img src={UserBg1} alt="" className="" />
          <img src={UserBg2} alt="" className="" />
        </div>
      </div>
    </section>
  );
};

export default UserJourney;
