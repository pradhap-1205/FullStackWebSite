import React from "react";
import AboutImg from "../../assets/hero2.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="flex ">
        <div className="lg:w-1/2 capitalize w-full ">
          <h3 className="lg:text-7xl text-2xl z-50   font-bold">
            world class design for our products
          </h3>
          <p className="mt-5 md:text-2xl  text-lg">
            lets bring life to your brand
          </p>
          <div  className="flex ">
            <button className="mr-2 text-white bg-orange  md:px-5 px-2 py-1 text-lg capitalize md:font-bold rounded-md md:py-2 mt-3 hover:bg-inputColor hover:text-black border">
            <Link to="/Services">Servicse</Link>
            </button>
            <button className="mr-2 text-black border bg-inputColor  md:px-5 px-2 py-1 text-lg capitalize md:font-bold rounded-md md:py-2 mt-3 hover:bg-orange  hover:text-white">
             <Link to="/Contact">contact</Link>
            </button>
          </div>
        </div>

        <div className="w-1/2 hidden md:flex">
          <img src={AboutImg} alt="AboutImg" />
        </div>
      </div>
    </>
  );
};

export default About;
