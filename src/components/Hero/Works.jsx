import React from "react";
import { Link } from "react-router-dom";
import { ProjectTitle, InvoiceHeader } from "../../assets/images";

const Works = () => {
  return (
    <section className="py-20">
      <h1 className="text-6xl text-center hover:text-blue-300"> My Works</h1>

      <div className="grid lg:grid-cols-2 gap-10 py-20">
        <div className="group transition lg:px-20 px-10">
          <Link to={`/aer`}>
            <h1 className="text-4xl text-center"> AER </h1>
            <img
              src={ProjectTitle}
              alt=""
              className="rounded-2xl shadow-2xl group-hover:scale-110 transition duration-300 h-[40vh] w-full mt-10"
            />
            <p className="text-center text-xl mt-10">
              AER: The Self Driving Electric Ride Hailing Service
            </p>
          </Link>
        </div>
        <div className="group transition px-20">
          <Link to={`/invoice`}>
            <h1 className="text-4xl text-center"> Invoice </h1>
            <img
              src={InvoiceHeader}
              alt=""
              className="rounded-2xl shadow-2xl group-hover:scale-110 transition duration-300 h-[40vh] w-full mt-10"
            />
            <p className="text-center text-xl mt-10">
              Invoice generator website redesign
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Works;
