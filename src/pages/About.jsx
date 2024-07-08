import React from "react";
import { AboutMe } from "../assets/images";

const About = () => {
  return (
    <section className="bg-slate-100 font-primary">
      <section className="py-32 max-w-5xl mx-auto">
        <div className="space-y-10">
          <h1 className="text-5xl px-10"> My Story </h1>
          <div className="grid lg:grid-cols-3 gap-10 px-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, nulla et quasi dolor adipisci maiores necessitatibus
              quisquam fuga sit. Officiis optio repudiandae doloribus nemo
              deserunt minus vitae, nulla eligendi reiciendis quo illum sequi
              molestias voluptates libero? Eaque eos officiis, libero excepturi
              autem beatae mollitia nemo nobis, iste ipsa, et quas! Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Repellendus, nulla
              et quasi dolor adipisci maiores necessitatibus quisquam fuga sit.
              Officiis optio repudiandae doloribus nemo deserunt minus vitae,
              nulla eligendi reiciendis quo illum sequi molestias voluptates
              libero? Eaque eos officiis, libero excepturi autem beatae mollitia
              nemo nobis, iste ipsa, et quas!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, nulla et quasi dolor adipisci maiores necessitatibus
              quisquam fuga sit. Officiis optio repudiandae doloribus nemo
              deserunt minus vitae, nulla eligendi reiciendis quo illum sequi
              molestias voluptates libero? Eaque eos officiis, libero excepturi
              autem beatae mollitia nemo nobis, iste ipsa, et quas!
            </p>
            <img src={AboutMe} alt="" />
          </div>
        </div>
        {/* skills */}

        <div className="space-y-10 mt-32">
          <h1 className="text-5xl px-10"> My Skills </h1>
          <div className="grid lg:grid-cols-3 gap-10 px-10">
            <div>
              <h1 className="text-2xl text-blue-300 font-bold"> UI / UX</h1>
              <p className="mt-5 font-semibold">
                User Interface Design / User Experience Design/ UX Research /
                User Flows / User personas / Wireframing / Visual Design /
                Interaction Design/ Prototyping
              </p>
            </div>
            <div>
              <h1 className="text-2xl text-blue-300 font-bold"> Tools </h1>
              <p className="mt-5 font-semibold">
                Figma / Adobe XD / Photoshop / Illustrator / Webflow
              </p>
            </div>
            <div>
              <h1 className="text-2xl text-blue-300 font-bold">
                Personal Skills
              </h1>
              <p className="mt-5 font-semibold">
                Time management skill / Outgoing personality and positive
                attitude / Problem solving skills / Excellent communication
                skills / Well organized and reliable /Language: English
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
