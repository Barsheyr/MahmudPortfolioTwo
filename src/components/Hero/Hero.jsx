import React from "react";
import resume from "../../assets/images/MAHMUD-DEMILADE-AKINBAMI-cv.pdf";

const Hero = () => {
  return (
    <section className="py-44">
      <div className="space-y-20 flex flex-col lg:px-5 items-center">
        <h1 className="lg:text-[7em] md:text-6xl text-4xl text-center font-semibold">
          Mahmud Akinbami <span className="text-blue-300"> Product </span>
          Designer
        </h1>
        <p className="lg:text-5xl text-3xl"> Based in London, UK </p>

        <div className="mt-20">
          <div className="btn hover:bg-blue-300 border border-slate-400">
            <a
              href={resume}
              download="resume"
              className="font-semibold text-xl"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
