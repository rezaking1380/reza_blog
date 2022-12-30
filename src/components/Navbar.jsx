import { Box, Tab, Tabs, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import brand from '../assets/Asset 3.png';

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const handelclick = () => setOpenNav(!openNav);
  const handelclose = () => setOpenNav(!openNav);

  return (
    <>
      <div className="container px-8 pb-5 lg:pb-8 mx-auto xl:px-5 max-w-screen-lg">
        <nav>
          <div className="flex flex-wrap justify-between md:gap-10 md:flex-nowrap">
            {/* start-nav-left */}
            <div className="flex-col items-center justify-start order-1 hidden w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1">
              <div>
                <Link
                  to={"/"}
                  className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
                >
                  Home
                </Link>
              </div>
              {/* <div>
                <Link
                  to={"/about"}
                  className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
                >
                  About
                </Link>
              </div> */}
              <div>
                <Link
                  to={"/contact"}
                  className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
                >
                  Contact
                </Link>
              </div>
            </div>
            {/* end-nav-left */}
            <div className={!openNav ? "flex justify-between items-center w-full md:w-auto" : "flex justify-between items-center w-full md:w-auto flex-col"}>
              <div className="w-32">
                <img src={brand} alt="rezablog" />
              </div>

              <div className={!openNav ? 'md:hidden' : 'w-full md:hidden'}>
                <div className="md:hidden absolute p-5 top-0 right-0" onClick={handelclick}>
                  {!openNav ? (
                    <MenuIcon className="w-6 mr-4" />
                  ) : (
                    <ClearIcon className="w-6 mr-4" />
                  )}
                </div>
                <ul className={!openNav ? "hidden" : "w-full mt-4"}>
      <li className="p-4 border-b-2 border-zinc-200 w-full font-semibold">
              <Link onClick={handelclose} to={"/"}>
                Home
              </Link>
            </li>
            {/* <li className="p-4 border-b-2 border-zinc-200 w-full">
              
              <Link onClick={handelclose} to={"/about"}>
                About
              </Link>
            </li> */}
            <li className="p-4 border-b-2 border-zinc-200 w-full font-semibold">
              
              <Link onClick={handelclose} to={"/contact"}>
              Contact
              </Link>
            </li>
            <li className="p-4 border-b-2 border-zinc-200 w-full font-semibold">
              
              <Link onClick={handelclose} to={"/archive"}>
              Archive
              </Link>
            </li>
            {/* <li className="p-4 border-b-2 border-zinc-200 w-full">
              
              <Link onClick={handelclose} to={"/writer"}>
              Writer
              </Link>
            </li> */}
            <li className="p-4 border-b-2 border-zinc-200 w-full font-semibold">
              
              <Link onClick={handelclose} to={"/newpost"}>
              New Post
              </Link>
            </li>
            </ul>
              </div>
            </div>
            {/* start-nav-right */}
            <div className="flex-col items-center justify-start order-2 hidden w-full md:flex md:flex-row md:w-auto md:flex-1 md:order-none">
              <div>
                <Link
                  to={"/archive"}
                  className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
                >
                  Archive
                </Link>
              </div>
              {/* <div>
                <Link
                  to={"/writer"}
                  className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
                >
                  Writer
                </Link>
              </div> */}
              <div>
                <Link
                  to={"/newpost"}
                  className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
                >
                  New Post
                </Link>
              </div>
            </div>
            {/* end-nav-right */}
          </div>
        </nav>
      </div>
    </>
  );
}
