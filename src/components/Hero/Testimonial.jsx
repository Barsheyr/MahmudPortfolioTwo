import React from "react";
import { Link } from "react-router-dom";

const Testimonial = () => {
  return (
    <section className="py-20">
      <h1 className="text-6xl text-center hover:text-blue-300">
        Thank you for taking your time to view my works !
      </h1>

      <div
        className="rounded-full bg-blue-400 hover:bg-black hover:text-white
       max-w-40 p-10 mx-auto text-center mt-20"
      >
        <Link to={`/contact`}>
          <p className="text-xl">
            Let's Work <br /> Together
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Testimonial;
