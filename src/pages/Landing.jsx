import React from "react";
import { Hero, Testimonial, Works } from "../components";

const Landing = () => {
  return (
    <section className="bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <Hero />
        <Works />
        <Testimonial />
      </div>
    </section>
  );
};

export default Landing;
