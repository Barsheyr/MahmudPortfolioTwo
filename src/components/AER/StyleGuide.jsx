import React from "react";
import { StyleGuidePic } from "../../assets/images";

const StyleGuide = () => {
  return (
    <section className="py-20 mt-20">
      <div>
        <h1 className="text-center text-blue-500 text-5xl font-bold">
          Style Guide
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-20 mt-20">
          {/* 1 */}
          <div>
            <h2 className="text-center py-5 text-2xl text-blue-500 font-bold">
              Color Palette
            </h2>
            <div className="grid grid-cols-2 gap-16">
              <div>
                <div className="bg-[#09226d] p-20 rounded-md"> </div>
                <p> 09226D </p>
              </div>
              <div>
                <div className="bg-[#15679d] p-20 rounded-md"></div>
                <p> 15679D </p>
              </div>
              <div>
                <div className="bg-[#BBB9B9] p-20 rounded-md"></div>
                <p> BBB9B9 </p>
              </div>
              <div>
                <div className="bg-[#43626F] p-20 rounded-md"></div>
                <p> 43626F</p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div>
            <h2 className="text-center py-5 text-2xl text-blue-500 font-bold">
              Typefaces
            </h2>
            <div className="space-y-10">
              <p className="text-5xl"> Heading: Aa</p>
              <p className="text-3xl"> Heading: Aa</p>
              <p> Body Text: Aa</p>
            </div>
          </div>
          {/* 3 */}
          <div>
            <img src={StyleGuidePic} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleGuide;
