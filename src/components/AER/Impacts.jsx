import React from "react";
import { ImpactPic } from "../../assets/images";

const Impacts = () => {
  return (
    <section className="py-20 mt-20">
      <div className="">
        <h1 className="text-center text-blue-500 text-5xl font-bold">
          Impacts
        </h1>

        <div className="mt-20 grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col items-center">
            <img src={ImpactPic} alt="" className="w-[50%]" />
          </div>
          <div className="grid lg:grid-cols-2 gap-10 mt-20">
            {/* 1 */}
            <div className="text-center space-y-5 flex flex-col">
              <h3
                className="border border-blue-500 p-3 text-xl text-blue-500
              font-bold self-center rounded-full w-[20%]"
              >
                1
              </h3>
              <h1 className="text-xl text-blue-500 font-bold"> Impact 1 </h1>
              <p>
                Increase purchasing power of users, as they can buy SDVs on loan
                and easily pay back the loans
              </p>
            </div>
            {/* 2 */}
            <div className="text-center space-y-5 flex flex-col">
              <h3
                className="border border-blue-500 p-3 text-xl text-blue-500
              font-bold self-center rounded-full w-[20%]"
              >
                2
              </h3>
              <h1 className="text-xl text-blue-500 font-bold"> Impact 2 </h1>
              <p>
                SDV owners are always aware of the condition of their SDVs,
                ensuring quick response should faults occur.
              </p>
            </div>
            {/* 3 */}
            <div className="text-center space-y-5 flex flex-col">
              <h3
                className="border border-blue-500 p-3 text-xl text-blue-500
              font-bold self-center rounded-full w-[20%]"
              >
                3
              </h3>
              <h1 className="text-xl text-blue-500 font-bold"> Impact 3 </h1>
              <p>
                Riders are safer and contribute to a reduced carbon footprint by
                using the SDVs for transportation
              </p>
            </div>
            {/* 4 */}
            <div className="text-center space-y-5 flex flex-col">
              <h3
                className="border border-blue-500 p-3 text-xl text-blue-500
              font-bold self-center rounded-full w-[20%]"
              >
                4
              </h3>
              <h1 className="text-xl text-blue-500 font-bold"> Impact 4 </h1>
              <p>
                Car owners get extra income from the ride hailing service that
                the SDVs offer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impacts;
