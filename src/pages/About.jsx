import React from "react";
import { AboutMe } from "../assets/images";

const About = () => {
  return (
    <section className="bg-slate-100 font-primary">
      <section className="py-32 max-w-5xl mx-auto">
        <div className="space-y-10">
          <h1 className="text-5xl px-10 hover:text-blue-300"> My Story </h1>
          <div className="grid lg:grid-cols-3 gap-10 px-10">
            <p>
              Hey there! I'm Mahmud Demilade Akinbami, but you can call me Demi.
              I’m an enthusiastic product designer and software engineer with a
              knack for creating intuitive, user-friendly interfaces. I hold a
              BSc in Engineering from the University of Ibadan and an MSc in
              Product Design from the University of Greenwich. My journey into
              the world of design and technology started with a simple curiosity
              about how things work. This curiosity quickly turned into a
              passion, and I found myself diving deep into the realms of
              software development and product design. Over the years, I've
              honed my skills in web development, UX/UI design, and software
              engineering, always striving to create solutions that not only
              work but also delight users.
              <br />
              In my professional life, I've had the pleasure of working on a
              variety of projects that have challenged me to think creatively
              and solve complex problems. These experiences have solidified my
              love for design and user experience, pushing me to continuously
              improve and innovate. My passion for product design began when I
              faced a significant health challenge. This experience spurred me
              to find solutions not only for my problems but also for others
              facing similar issues. It ignited a drive in me to create products
              that make a real difference in people's lives. This personal
              connection to my work fuels my dedication and inspires me to keep
              learning and evolving. But it’s not all work and no play! When I'm
              not immersed in design or coding, you’ll probably find me
              exploring the latest tech trends, working on personal projects, or
              enjoying a good book.
            </p>
            <p>
              I’m a firm believer in the power of continuous learning and always
              look for opportunities to expand my knowledge and skills. Whether
              it's taking up a new programming language, experimenting with a
              new design tool, or just reading up on the latest in tech, I love
              keeping myself updated. I thrive in collaborative environments and
              love working with diverse teams to bring ideas to life. The energy
              that comes from brainstorming sessions and the satisfaction of
              seeing a project come to fruition are what drive me every day. My
              goal is always to create products that are not only functional but
              also provide a seamless and enjoyable user experience.
              <br />
              When I’m not working on tech projects, I’m usually out on the
              field playing sports. Football is another passion of mine—I love
              everything about the game, from the strategy to the camaraderie.
              Whether I'm playing a match with friends or cheering for my
              favorite team, football brings me a lot of joy and keeps me
              active. I also enjoy cricket, which offers a different kind of
              thrill and teaches patience and precision. If you want to chat
              about design, tech, sports, or just about anything else, feel free
              to reach out! I’m always up for a good conversation and love
              connecting with like-minded individuals. Looking forward to
              connecting!
            </p>
            <img src={AboutMe} alt="" />
          </div>
        </div>
        {/* skills */}

        <div className="space-y-10 mt-32">
          <h1 className="text-5xl px-10 hover:text-blue-300"> My Skills </h1>
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
