import React from "react";

import { FaPeopleLine, FaInstalod } from "react-icons/fa6";
import { AiOutlineCheckCircle } from "react-icons/ai";

import Client1 from "../../assets/Client1.png";
import Client2 from "../../assets/Client2.png";
import Client3 from "../../assets/Client3.png";
import Client4 from "../../assets/Client4.png";
import Client5 from "../../assets/Client5.png";
import Client6 from "../../assets/Client6.png";
import Client7 from "../../assets/Client7.png";
import Client8 from "../../assets/Client8.png";

const Client = () => {
  return (
    <div>
      {/* people */}
      <div className=" lg:flex  ">
        <div className="lg:w-7/12 w-full bg-black text-white mt-2">
          <div className="p-[2rem] border lg:flex gap-2">
            <div className="border w-16 flex justify-center items-center h-16">
              {" "}
              <FaPeopleLine className="text-3xl " />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Happy Client</h2>
              <h2 className="text-lg font-semibold">150+</h2>
            </div>
          </div>
        </div>

        <div className="lg:w-7/12 w-full mt-2  ">
          <div className="p-[2rem] border lg:flex  gap-2">
            <div className="border w-16 flex justify-center items-center h-16">
              {" "}
              <AiOutlineCheckCircle className="text-3xl " />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Projects Done</h2>
              <h2 className="text-lg font-semibold">250+</h2>
            </div>
          </div>
        </div>

        <div className="lg:w-7/12 w-full bg-black text-white mt-2">
          <div className="p-[2rem] border lg:flex gap-2">
            <div className="border w-16 flex justify-center items-center h-16">
              {" "}
              <FaInstalod className="text-3xl " />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Happy Client</h2>
              <h2 className="text-lg font-semibold">20+</h2>
            </div>
          </div>
        </div>
      </div>
      {/* people */}

      {/* trust client */}

      <div className="border p-5 mt-[3rem]">
        <h3 className="font-bold lg:text-4xl capitalize text-center m-5 border bg-black text-white p-3">
          Companies who trust on us
        </h3>

        <div className=" lg:flex justify-between p-4 w-[60%]">
          <div className="h-[80px]">
            <img src={Client1} className="w-full object-cover" />
          </div>

          <div className="h-[80px] ">
            <img src={Client2} className="w-full object-cover" />
          </div>

          <div className="h-[80px] ">
            <img src={Client3} className="w-full object-cover" />
          </div>
          <div className="h-[80px]">
            <img src={Client4} className="w-full object-cover" />
          </div>
        </div>

        <div className=" lg:flex justify-between p-4 w-[60%] ml-auto">
          <div className="h-[80px]">
            <img src={Client5} className="w-full object-cover" />
          </div>
          <div className="h-[80px]">
            <img src={Client6} className="w-full object-cover" />
          </div>

          <div className="h-[80px]">
            <img src={Client7} className="w-full object-cover" />
          </div>
          <div className="h-[80px]">
            <img src={Client8} className="w-full object-cover" />
          </div>
        </div>
      </div>

      {/* trust client */}
    </div>
  );
};

export default Client;
