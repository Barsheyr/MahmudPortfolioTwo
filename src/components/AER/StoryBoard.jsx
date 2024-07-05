import React from "react";
import { BigStoryPic1, CLoseStoryPic1 } from "../../assets/images";

const StoryBoard = () => {
  return (
    <section className="py-20 mt-10 space-y-10">
      <div>
        <h1 className="text-center text-blue-500 text-5xl font-bold">
          Story Board
        </h1>

        {/*--------------------- first ---------------------- */}

        <div className="space-y-5">
          <h2 className="text-2xl text-center mt-20">
            Storyboard - Big Picture
          </h2>
          <div>
            <img src={BigStoryPic1} alt="" />
          </div>
        </div>

        {/*--------------------- second ---------------------- */}

        <div className="space-y-5">
          <h2 className="text-2xl text-center mt-20">Storyboard - Close Up </h2>
          <div>
            <img src={CLoseStoryPic1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryBoard;
