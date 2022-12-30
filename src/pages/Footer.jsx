import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="border-t-[1px]">
        <div className="flex justify-around p-8 max-w-screen-lg mx-auto">
          <div>
            <span className="text-lg font-semibold">section</span>
            <div className="flex flex-col sm:flex-row">
              <Link
                to={"/"}
                className="mt-3 ml-3 hover:text-blue-500 font-semibold"
              >
                Home
              </Link>
              {/* <Link to={'/about'} className="mt-3 ml-3 hover:text-blue-500 font-semibold">About</Link> */}
              <Link
                to={"/contact"}
                className="mt-3 ml-3 hover:text-blue-500 font-semibold"
              >
                Contact
              </Link>
              <Link
                to={"/archive"}
                className="mt-3 ml-3 hover:text-blue-500 font-semibold"
              >
                Archive
              </Link>
              <Link
                to={"/newpost"}
                className="mt-3 ml-3 hover:text-blue-500 font-semibold"
              >
                NewPost
              </Link>
              {/* <Link to={'/writer'} className="mt-3 ml-3 hover:text-blue-500 font-semibold">Writer</Link> */}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold">contact</span>

            <div className="flex flex-col">
              <span className="my-3 font-semibold">reza.ngr8@gmail.com</span>
              <div className="flex justify-around">
                <a href="#">
                  <InstagramIcon className="text-gray-600 hover:text-blue-500" />
                </a>
                <a href="https://github.com/rezaking1380">
                  <GitHubIcon className="text-gray-600 hover:text-blue-500" />
                </a>
                <a href="https://www.linkedin.com/in/reza-nangir/">
                  <LinkedInIcon className="text-gray-600 hover:text-blue-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] flex flex-col items-center py-2">
          <div>
            <span className="text-sm text-zinc-400">
              Copyright © 2022 RezaBlog. All rights reserved.
            </span>
          </div>
          <div>
            <span className="text-sm text-zinc-400">Made by RezaNangir</span>
          </div>
        </div>
      </div>
    </>
  );
}
