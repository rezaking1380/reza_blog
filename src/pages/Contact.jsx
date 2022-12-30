import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function Contact() {
  return (
    <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
      <div className="flex items-center flex-col">
        <div>
          <h2 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
            Contact
            </h2>
        </div>
        <div>
          <p className="text-lg font-semibold">We are a here to help</p>
        </div>
      </div>
      <div className="grid my-10 md:grid-cols-2">
        <div className="my-10">
          <span className="text-2xl font-semibold dark:text-white">Cantact RezaBlog</span>
          <div>
            <p className="max-w-sm mt-5 font-medium">
              Have something to say? We are here to help. Fill up the form or
              send email or call phone.
            </p>
          </div>
          <div className="mt-5">
            <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400 font-semibold">
                
              <span><PlaceIcon /> 1734 Sanfransico, CA 93063</span>
            </div>
            <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400 font-semibold">
                
              <span><EmailIcon /> reza.ngr8@gmail.com</span>
            </div>
            <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400 font-semibold">
                
              <span><LocalPhoneIcon /> +1 888 555 777</span>
            </div>
          </div>
        </div>
        <div className="my-10">
          <form action="post">
            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                autocomplete="false"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none
                 dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  border-gray-300 focus:border-gray-600
                  ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                name="name"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Email Address"
                autocomplete="false"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none
                 dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  border-gray-300 focus:border-gray-600
                  ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                name="name"
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200
                 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  border-gray-300 focus:border-gray-600
                  ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md
             hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
