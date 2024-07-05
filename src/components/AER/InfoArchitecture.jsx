import React from "react";
import { ArchiOne, ArchiTwo } from "../../assets/images";

const InfoArchitecture = () => {
  return (
    <section className="py-20 mt-10">
      <h1 className="text-center text-blue-500 text-5xl font-bold">
        Info Architecture
      </h1>

      <div className="mt-20 space-y-10">
        <img src={ArchiOne} alt="" />
        <img src={ArchiTwo} alt="" />
      </div>
    </section>
  );
};

export default InfoArchitecture;
