import React from "react";
import { LofiWire } from "../../assets/images";

const WireFrames = () => {
  return (
    <section className="py-20 mt-20">
      <h1 className="text-center text-blue-500 text-5xl font-bold">
        The Lofi Wireframes
      </h1>
      <div className="mt-10">
        <img src={LofiWire} alt="" />
      </div>
    </section>
  );
};

export default WireFrames;
