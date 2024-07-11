import React from "react";
import { FormInput } from "../components";
import { Form, Link } from "react-router-dom";
import { ContactMe } from "../assets/images";

const ContactPage = () => {
  return (
    <div className="bg-slate-100">
      <section className="py-32 max-w-5xl mx-auto px-20">
        <h1 className="lg:text-6xl text-3xl text-center hover:text-blue-300">
          Contact Me
        </h1>
        <h3 className=" text-blue-500 text-xl font-semibold my-10">
          Thank you for your time. I am open to cooperation and communication.
          Do send a message and let's get started!!
        </h3>
        <div className="grid lg:grid-cols-2 gap-20 mt-20">
          <Form
            method="post"
            className="card w-full p-8 bg-base-100 shadow-2xl flex flex-col gap-y-4"
          >
            <FormInput
              type="text"
              label="name"
              name="identifier"
              placeholder="Enter your Name "
            />
            <FormInput
              type="email"
              label="email"
              name="identifier"
              placeholder="Enter your Email"
            />
            <FormInput
              type="number"
              label="Phone Number"
              name="identifier"
              placeholder="Enter your Phone Number"
            />

            <div>
              <p className="font-semibold">Your Text </p>
              <textarea
                class="textarea textarea-bordered w-full"
                placeholder="Write a message here..."
              ></textarea>
            </div>
          </Form>

          <div>
            <img src={ContactMe} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
