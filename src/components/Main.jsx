import React from "react";
import portada from "../assets/portada.jpg";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img className="w-full h-screen object-cover" src={portada} alt="/" />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            Soy Luis Galeano
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            <TypeAnimation
              sequence={[
                "Desarrollador Frontend", // Types 'One'
                2000, // Waits 1s
                "Junior-React Developer", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "un entusiasta por la tegnología",
                2000,
                "Ingeniero ambiental",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://github.com/LuisGaleano94" target={"_blank"}>
              <FaGithub className="cursor-pointer" size={20} />
            </a>
            <a href="https://twitter.com/LuisGaleano1994" target={"_blank"}>
              <FaTwitter className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://www.facebook.com/luis.a.galeano.7"
              target={"_blank"}
            >
              <FaFacebookF className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://www.instagram.com/luisgaleano94/"
              target={"_blank"}
            >
              <FaInstagram className="cursor-pointer" size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/luis-alfonso-galeano-osorio-198368251/"
              target={"_blank"}
            >
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
