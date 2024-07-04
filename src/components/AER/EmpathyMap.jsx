import React from "react";
import { EmpathyPic } from "../../assets/images";

const EmpathyMap = () => {
  return (
    <section className="py-20">
      <h1 className="text-center text-blue-500 text-5xl font-bold">
        Empathy Map
      </h1>

      <div className="mt-10">
        <img src={EmpathyPic} alt="" />
      </div>
    </section>
  );
};

export default EmpathyMap;
