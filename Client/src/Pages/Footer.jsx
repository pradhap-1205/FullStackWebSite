import React from "react";
import GoogleMap from "../assets/map.jpg";
import {
  FaMapLocationDot,
  FaTwitter,
  FaSquareInstagram,
  FaSquareThreads,
  FaContao,
  FaSquarePhone,
  FaSquareFacebook,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="md:flex px-2">
      <div className="lg:w-1/2    w-full">
        <img src={GoogleMap} alt="AboutImg" />
      </div>
      <div className="lg:w-1/2 lg:px-2 lg:py-0  px-5 flex py-5 justify-center w-full gap-3">
        <FaMapLocationDot className="text-white text-4xl" />
        {/* <FaChartSimple className="text-white text-4xl" /> */}
        <div>
          <h3 className="text-3xl underline">Address</h3>
          <h1> TARGET TECH PARK</h1> No 383, 100 Feet Road, Gandhipuram, near
          JOS ALUKKAS, Coimbatore, Tamil Nadu 641012
          <h4 className="capitalize mt-3">
            Chennai, India +91 44 4266 6652 Ascendas, Taramani Chennai - 600113
          </h4>
        </div>
      </div>
      <div className="lg:w-1/2  px-2 w-full  select-none">
    <div className="flex items-center gap-4">
    <FaContao className="text-white text-2xl"/>
      <h3 className="text-3xl underline">Contact</h3>
    </div>
        <div className="flex  gap-2  m-5 items-center   ">
      
          <FaTwitter  className="text-2xl   hover:bg-yellow hover:cursor-pointer hover:text-lg"/>
          <p>pradhap.pvt.limit</p>
        </div>
        <div className="flex  gap-2  m-5 items-center  ">
        <FaSquareInstagram  className="text-2xl   hover:bg-yellow hover:cursor-pointer hover:text-lg"/>
          <p>@pradhap_jobs</p>
   
        </div>
        <div className="flex  gap-2 j m-5 items-center  ">
        <FaSquareThreads  className="text-2xl   hover:bg-yellow hover:cursor-pointer hover:text-lg"/>
          <p>pradhap.pvt.limit</p>
   
        </div>
        <div className="flex  gap-2  m-5 items-center  ">
        <FaSquareFacebook  className="text-2xl   hover:bg-yellow hover:cursor-pointer hover:text-lg"/>
          <p>pradhap</p>
   
        </div>
        <div className="flex  gap-2  m-5 items-center  ">
        <FaSquarePhone  className="text-2xl    hover:bg-yellow hover:cursor-pointer hover:text-lg"/>
          <p>+6383422657</p>
      
        </div>
      </div>
    </div>
  );
};

export default Footer;
