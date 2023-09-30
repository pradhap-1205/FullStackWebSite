import React from "react";
import { FaChartSimple, FaDesktop, FaUikit } from "react-icons/fa6";
import { BsFillPhoneFill } from "react-icons/bs";
const Services = () => {
  return (


    <div>

    <div className="lg:flex gap-2">

      <div className="lg:w-1/2  w-full mt-3 border  text-center bg-cardColor p-3 rounded-lg ">
        <FaDesktop className="text-yellow text-5xl m-auto" />
        <h2 className="font-bold text-2xl my-2">Mobile App Development</h2>
        <p className="font-semibold text-sm">
          We offer a range of mobile app development services, including native
          mobile app development and hybrid mobile app development. Our team has
          the expertise to develop iOS and Android applications that meet your
          requirements and exceed your expectations.
        </p>
      </div>


      <div className="lg:w-1/2  w-full mt-3 border text-center bg-cardColor p-3 rounded-lg ">
        <FaUikit className="text-red-500 text-5xl m-auto" />
        <h2  className="font-bold text-2xl my-2">IoT/AI/Machine Learning</h2>
        <p className="font-semibold text-sm">
          We specialize in providing cutting-edge development services for IoT,
          AI, and machine learning solutions. Our team of skilled developers and
          data scientists combines their expertise with the latest technologies
        </p>
      </div>


      <div className="lg:w-1/2  w-full mt-3 border text-center bg-cardColor p-3 rounded-lg ">
        <BsFillPhoneFill className="text-green-500 text-5xl m-auto" />
        <h2  className="font-bold text-2xl my-2">Web development</h2>
        <p className="font-semibold text-sm">
          elcome to our website dedicated to web development! Here, you'll find
          everything you need to know about building websites and web
          applications.
        </p>
        <p className="font-semibold text-sm">
          Web development is the process of building websites and web
          applications
        </p>
      </div>
    </div>
    

    </div>
    
  );
};

export default Services;
