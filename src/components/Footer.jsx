import React from "react";
import { Link } from "react-router-dom";
import WhatsappLink from "./WhatsappLink";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-900">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-10 py-20">
            <div className="w-[100%] h-0.5 bg-gray-300 mt-20"></div>
            <h1 className="lg:text-7xl text-5xl font-Ubuntu text-slate-100">
              Get In <span className="text-blue-400"> Touch </span>
            </h1>
            <p className="lg:text-xl  text-lg text-slate-100">
              You can reach out to me for design, research & facilitation
            </p>

            <div className="flex lg:flex-row flex-col gap-10 text-slate-100">
              <Link to="https://www.linkedin.com/in/akinbami-mahmud-815029213/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                <p className="lg:text-xl text-lg cursor-pointer font-Ubuntu">
                  <FaLinkedin size={50} />
                </p>
              </Link>
              <Link>
                <p className="lg:text-xl text-lg cursor-pointer font-Ubuntu">
                  <IoMailOutline size={50} />
                </p>
              </Link>

              <WhatsappLink
                phoneNumber="+447778791263"
                message="Hello! I'd like to connect."
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
