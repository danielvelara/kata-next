import Image from "next/image";
import { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <nav className="bg-gray-800">
        {/* Desktop Menu */}
        <div className="mx-auto flex justify-between border-0 border-gray-500  p-4">
          <div className="flex items-center space-x-3">
            <div className="">
              <a href="" className="mr-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="mr-2 h-6 w-6 text-green-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                </svg>
                <span>Portfolio</span>
              </a>
            </div>

            {/* Primary Nav */}
            <div className="hidden items-center space-x-3 md:flex">
              <a href="#" className="text-gray-300 hover:text-gray-100">
                Features
              </a>
              <a href="#" className="hdtext-gray-300 hover:text-gray-100">
                Pricing
              </a>
            </div>
          </div>

          {/* Secondary Nav */}
          <div className="hidden items-center space-x-7 md:flex">
            <a href="#" className="">
              Login
            </a>
            <a
              href="#"
              className="rounded bg-yellow-400 px-3 py-1  text-yellow-900 transition duration-150 hover:drop-shadow-[0_0_0.4rem_#ffffff90]"
            >
              Signup
            </a>
          </div>

          {/* Mobile Button */}
          <div className="flex items-center md:hidden">
            <svg
              onClick={() => setToggle(!toggle)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${toggle && "hidden"} select-none md:hidden`}>
          <a href="#" className="block p-4 hover:bg-gray-700">
            Featrues
          </a>
          <a href="" className="block p-4 hover:bg-gray-700">
            Pricing
          </a>
        </div>
      </nav>
      <div className="py-10 text-center">
        <h2 className="text-6xl font-bold">Content</h2>
      </div>
    </>
  );
};
export default NavBar;
