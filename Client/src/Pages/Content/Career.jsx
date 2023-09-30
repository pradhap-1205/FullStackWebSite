import React, { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";

const Career = () => {
  const [formOpen, setFormOpen] = useState(false);

  const handleForm = () => {
    setFormOpen(true);
  };

  const handleClose = () => {
    setFormOpen(false);
  };
  return (
    <div className="lg:flex gap-4">
      <div>
        <div className="border lg:full my-5  p-3 capitalize">
          <table>
            <tr>
              <th>role</th>
              <td>full stack developer</td>
            </tr>
            <tr>
              <th>exp</th>
              <td>min 3 to 5</td>
            </tr>
            <tr>
              <th>salary</th>
              <td>55000pm</td>
            </tr>
            <tr>
              <th>desc</th>
              <td>the canditade should be loacted in coimbatore </td>
            </tr>
            <tr>
              <th>office time</th>
              <td>9:30am to 6:30pm</td>
            </tr>
          </table>
          <button
            className="bg-black text-white px-4 py-2 rounded-md"
            onClick={handleForm}
          >
            Apply Now
          </button>
        </div>
      </div>

      {formOpen && (
        <div className="border  my-5 p-3 relative capitalize">
          <div className="absolute text-3xl  lg:top-8 top-6 right-2 lg:right-4 cursor-pointer">
            <AiFillCloseSquare onClick={handleClose} />
          </div>
          <form action="" className="border border-white   ">
            <h2 className="text-4xl text-center font-bold mb-4"> regitser</h2>

            <div className="lg:flex  gap-5 ">
              <div className="lg:w-1/2  w-full">
                <label className=" font-bold">first name</label>
                <input
                  type="text"
                  className="w-full p-2 my-2 outline-none text-black"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="lg:w-1/2  w-full">
                <label className=" font-bold">last name</label>
                <input
                  type="text"
                  className="w-full p-2 my-2 outline-none  text-black"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="lg:flex  gap-5 ">
              <div className=" w-full">
                <label className=" font-bold">email</label>
                <input
                  type="text"
                  className="w-full p-2 my-2 outline-none text-sm text-black"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="lg:flex  gap-5 ">
              <div className="lg:w-1/2  w-full">
                <label className=" font-bold">currrent city</label>
                <input
                  type="text"
                  className="w-full p-2 my-2 outline-none text-black"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="lg:w-1/2  w-full">
                <label className=" font-bold">phone no</label>
                <input
                  type="text"
                  className="w-full p-2 my-2 outline-none text-black"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="lg:flex  gap-5 ">
              <div className=" w-full">
                <label className=" font-bold">
                  plase list 2-3 dates and tim range that you could do an
                  interview
                </label>
                <textarea
                  type="text"
                  className="w-full p-2 my-2 outline-none text-black"
                  onChange={(e) => setConPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="lg:flex  gap-5 ">
              <div className=" w-full">
                <label className=" font-bold">resume</label>
                <input
                  type="file"
                  className="w-full p-2 my-2 outline-none text-sm text-black"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end   lg:mt-5">
              <button className="px-14 hover:bg-background-color hover:text-black hover:border py-2 bg-orange rounded-md capitalize text-white">
                submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Career;
