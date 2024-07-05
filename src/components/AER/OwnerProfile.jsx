import React from "react";
import {
  CarProfilePic1,
  CarProfilePic2,
  CarProfilePic4,
  CarProfilePic5,
  CarProfilePic6,
  CarProfilePic7,
  OwnerRidePic,
} from "../../assets/images";

const OwnerProfile = () => {
  return (
    <section className="py-20 mt-20">
      <h1 className="text-center text-blue-500 text-5xl font-bold">
        Car Owner Profile Page
      </h1>

      <div className="grid lg:grid-cols-3 grid-cols-2 gap-10 mt-20">
        <img src={CarProfilePic1} alt="" className="" />
        <img src={CarProfilePic2} alt="" className="" />
        <img src={CarProfilePic4} alt="" className="" />
        <img src={CarProfilePic5} alt="" className="" />
        <img src={CarProfilePic6} alt="" className="" />
        <img src={CarProfilePic7} alt="" className="" />
      </div>

      <div>
        <img src={OwnerRidePic} alt="" />
      </div>
    </section>
  );
};

export default OwnerProfile;
