import React, { useState } from "react";

const Contact = () => {
  return (
    <div
      className="flex h-screen w-full flex-col items-center justify-center p-4"
      id="contact"
    >
      <h1 className="pb-4 text-center text-3xl text-white">Contact</h1>
      <form
        name="Contact"
        method="POST"
        data-netlify="true"
        onSubmit="submit"
        className="flex  w-full max-w-[600px] flex-col"
      >
        {/* Netlify */}
        <input type="hidden" name="form-name" value="Contact" />

        <div className="">
          <p className="pb-8 text-white"></p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          tabIndex="1"
          className="p-2"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          tabIndex="2"
          className="my-4 p-2"
        />
        <textarea
          name="message"
          rows="10"
          placeholder="Message"
          tabIndex="3"
          className="p-2"
        />
        <button
          type="submit"
          tabIndex="4"
          className=" mx-auto mt-2 flex items-center border-2 border-email bg-navhover px-4 py-3 text-white hover:bg-email"
        >
          Let's Connect
        </button>
      </form>
    </div>
  );
};

export default Contact;
