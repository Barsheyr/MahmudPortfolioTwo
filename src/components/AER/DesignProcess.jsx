import React from "react";
import { MdOutlinePhoneIphone, MdLightbulb } from "react-icons/md";
import { TbUserScreen } from "react-icons/tb";
import { PiFunnelSimpleBold } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";

const DesignProcess = () => {
  return (
    <section>
      <div className="space-y-10">
        <h1 className="text-5xl font-bold text-blue-500 text-center">
          Design Process
        </h1>

        <div className="">
          <p className="lg:text-center lg:px-20">
            As designers, we follow a series of steps to create successful
            solutions to problems. We begin by identifying the problem and
            conducting research to gain a deeper understanding of user needs. We
            then generate ideas and concepts in the ideation phase, followed by
            prototyping and testing with users to gather feedback and iterate on
            designs.
          </p>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-10 mt-10">
            {/* 1 */}
            <div>
              <div
                className=" bg-blue-500 text-white rounded-full flex flex-col gap-5
              p-[26%] items-center justify-between"
              >
                <IoIosPeople size={50} />
                <p className="text-xl"> Empathize </p>
              </div>
              <p className="mt-10">
                We conducted a research on the project and we sent out surveys
                to learn more about the problem from the users’ perspective.
              </p>
            </div>
            {/* 2 */}
            <div>
              <div
                className=" bg-blue-500 text-white rounded-full flex flex-col gap-5
              p-[26%] items-center justify-between"
              >
                <PiFunnelSimpleBold size={50} />
                <p className="text-xl"> Define </p>
              </div>
              <p className="mt-10">
                After getting results from the survey, we defined the exact
                problems and came up with a problem statement
              </p>
            </div>
            {/* 3 */}
            <div>
              <div
                className=" bg-blue-500 text-white rounded-full flex flex-col gap-5
              p-[26%] items-center justify-between"
              >
                <MdLightbulb size={50} />
                <p className="text-xl"> Ideate </p>
              </div>
              <p className="mt-10">
                We brainstormed on various ideas in providing user-friendly
                solutions.
              </p>
            </div>
            {/* 4 */}
            <div>
              <div
                className=" bg-blue-500 text-white rounded-full flex flex-col gap-5
              p-[26%] items-center justify-between"
              >
                <TbUserScreen size={50} />
                <p className="text-xl"> Empathize </p>
              </div>
              <p className="mt-10">
                At this stage, we came up with low-fidelity wireframes and
                high-fidelity wireframes for the selected idea
              </p>
            </div>
            {/* 5 */}
            <div>
              <div
                className=" bg-blue-500 text-white rounded-full flex flex-col gap-5
              p-[26%] items-center justify-between"
              >
                <MdOutlinePhoneIphone size={50} />
                <p className="text-xl"> Test </p>
              </div>
              <p className="mt-10">
                This stage involves testing with users to gather feedback on the
                solution created
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
