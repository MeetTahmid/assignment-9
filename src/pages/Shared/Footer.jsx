import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
<footer className="bg-base-200 py-16">
  <div className="container bottom-0 px-6 py-8 mx-auto">
    <div className="flex flex-col items-center text-center">
      <h1 className=" text-3xl font-bold">Job Nest</h1>
      <div className="flex flex-wrap justify-center mt-6 -mx-4">
        <a
          href="#"
          className="mx-4 text-sm transition-colors duration-300 hover:text-blue-500    dark:hover:text-blue-400"
          aria-label="Reddit"
        >
          {" "}
          Home{" "}
        </a>
        <a
          href="#"
          className="mx-4 text-sm   transition-colors duration-300 hover:text-blue-500    dark:hover:text-blue-400"
          aria-label="Reddit"
        >
          {" "}
          About{" "}
        </a>
        <a
          href="#"
          className="mx-4 text-sm   transition-colors duration-300 hover:text-blue-500    dark:hover:text-blue-400"
          aria-label="Reddit"
        >
          {" "}
          Teams{" "}
        </a>
        <a
          href="#"
          className="mx-4 text-sm   transition-colors duration-300 hover:text-blue-500    dark:hover:text-blue-400"
          aria-label="Reddit"
        >
          {" "}
          Privacy{" "}
        </a>
        <a
          href="#"
          className="mx-4 text-sm   transition-colors duration-300 hover:text-blue-500    dark:hover:text-blue-400"
          aria-label="Reddit"
        >
          {" "}
          Cookies{" "}
        </a>
      </div>
    </div>
   
  
  </div>
</footer>

  );
};

export default Footer;
