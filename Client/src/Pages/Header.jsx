import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AiFillCloseSquare } from "react-icons/ai";
import { FaCircleUser, FaBars } from "react-icons/fa6";


import { useSnackbar } from 'notistack'

const Header = () => {

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()


  const [navBarOpen, setNavBarOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [conPassword, setConPassword] = useState();

  const navigate = useNavigate();

  const [emailErrorReg, setEmailErrorReg] = useState(false);
  const [conformError, setConformError] = useState(false);

  const handleForm = () => {
    setFormOpen(true);
  };

  const handleClose = () => {
    setFormOpen(false);
  };

  const [getData, setGetData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFormOpen(true);
    }, 5000);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/auth");
        console.log(response.data);

        if (response.data.length > 0) {
          setGetData(response.data);
          setIsSignUp(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("okk");

    const data = {
      password,
      lastName,
      firstName,
      email,
      conPassword,
    };

    const emailReg = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const postData = async () => {
      try {
        await axios
          .post("http://localhost:5000/auth/register", data)
          .then(() => {
            console.log("Rejecter successful");
            
            const message = 'Rejecter successful'
            enqueueSnackbar(message, { variant: 'success' });
            setFormOpen(false);
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log("Message New Error", err);
      }
    };

    if (email && password && conPassword && lastName && firstName) {
      if (password === conPassword) {
        postData();
      } else {
        setConformError(true);
      }
    } else if (!email || !conPassword) {
      if (!emailReg.test(email)) {
        setEmailErrorReg(true);
      } else {
        setEmailErrorReg(false);
      }

      setConformError(false);
    } else {
      console.log("Please enter all the required fields");
    }
  };


  const UserName = getData.length > 0 ? getData[0].firstName : null;

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("super login");
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        password: password,
        email: email,
      });

      console.log(res.data)
      if (res.data) {
        console.log("login successful");
      

        const message = 'Login Successful'
        enqueueSnackbar(message, { variant: 'success' });
        


        setFormOpen(false);
        navigate("/");
      } else {
        console.log("Login failed. Invalid credentials.");

        // enqueueSnackbar('Invalid email or password', { variant: 'error' });
        setError("Invalid email or password.");
      }
    } catch (err) {
      console.error(`Login issue: ${err}`);
      // enqueueSnackbar('Login issue', { variant: 'error' });
   
    }
  };
  return (
    <section>
      <div className="container  mx-auto ">
        <div className="flex">
          <h3 className="capitalize px-4 py-2 font-bold lg:text-2xl ">
            <Link to="/server">pradhap</Link>
          </h3>
          {/* --------------------- */}
          <div className="h-14 my-auto hidden lg:flex bg-hrColor w-2 rounded "></div>
          {/* -------------------- */}
          <div className="my-auto pl-5">
            {/* navbar */}

            <button className="lg:hidden">
              <FaBars onClick={() => setNavBarOpen((prev) => !prev)} />
            </button>
            <ul className=" lg:flex hidden ">
              <li className="pr-5 capitalize font-bold  hover:text-green-500">
                <Link to="/">home</Link>
              </li>
              <li className="pr-5 capitalize font-bold  hover:text-green-500">
                <Link to="/Services">Servicse</Link>
              </li>
              <li className="pr-5 capitalize font-bold  hover:text-green-500">
                <Link to="/Contact">contact</Link>
              </li>
              <li className="pr-5 capitalize font-bold   hover:text-green-500">
                <Link to="/Client">client</Link>
              </li>
              <li className="pr-5 capitalize font-bold   hover:text-green-500">
                <Link to="/Carer">career</Link>
              </li>
            </ul>
            {/* navbar */}
          </div>
          <h3 className="capitalize relative cursor-pointer font-bold px-3 py-2 text-medium bg-orange z-50 rounded flex justify-center  items-center gap-4  ml-auto text-white text-center ">
          
            <p className="hidden lg:block">{UserName}</p>
            <FaCircleUser onClick={handleForm} />
          </h3>
        </div>

        {/* --------------------------------------------------------------------------------------------------------------------------------- */}

        {navBarOpen && (
          <div className="my-auto pl-5">
            {/* navbar */}
            <ul className="lg:hidden">
              <li className="capitalize mt-1">
                <Link to="/">home</Link>
              </li>
              <li className="capitalize mt-1">
                <Link to="/Services">Servicse</Link>
              </li>
              <li className="capitalize mt-1">
                <Link to="/Contact">contact</Link>
              </li>
              <li className="capitalize mt-1">
                <Link to="/Client">client</Link>
              </li>
              <li className="capitalize mt-1">
                <Link to="/Carer">career</Link>
              </li>
            </ul>
            {/* navbar */}
          </div>
        )}
      </div>

      {/* setFormOpen */}

      {formOpen && (
        <div className="fixed h-full w-full top-0 left-0  capitalize bottom-0 right-0 flex justify-center lg:items-center z-50  opacity-90 bg-black">
          <div className="absolute text-3xl  top-8 right-4 cursor-pointer">
            <AiFillCloseSquare onClick={handleClose} />
          </div>
          <form
            action=""
            className="border border-white  p-5 lg:h-[65%] lg:w-[50%]"
          >
            <h2 className="text-4xl text-center font-bold mb-4">
              {isSignUp ? "Sign" : "Login "}
            </h2>

            {isSignUp && (
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
            )}

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

            {emailErrorReg && (
              <p className="text-textred">Please enter a valid email</p>
            )}

            {!isSignUp && (
              <div className="lg:flex  gap-5 ">
                <div className=" w-full">
                  <label className=" font-bold">password</label>
                  <input
                    type="text"
                    className="w-full p-2 my-2 outline-none text-sm text-black"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            )}

            {error && <p >{error}</p>}

            {isSignUp && (
              <div className="lg:flex  gap-5 ">
                <div className="lg:w-1/2  w-full">
                  <label className=" font-bold">password</label>
                  <input
                    type="text"
                    className="w-full p-2 my-2 outline-none text-black"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="lg:w-1/2  w-full">
                  <label className=" font-bold">Confrom password</label>
                  <input
                    type="text"
                    className="w-full p-2 my-2 outline-none text-black"
                    onChange={(e) => setConPassword(e.target.value)}
                  />
                </div>

                {conformError && (
                  <p className="text-textred">Paaword is not match</p>
                )}
              </div>
            )}

            <div className="flex justify-end    lg:mt-5">
              {isSignUp && (
                <button
                  className="px-14 hover:bg-background-color hover:text-black hover:border py-2 bg-orange rounded-md capitalize text-white"
                  onClick={handleSubmit}
                >
                  SignUp
                </button>
              )}



              {!isSignUp && (
                <button
                  className="px-14 m-auto mt-5 hover:bg-background-color hover:text-black hover:border py-2 bg-orange rounded-md capitalize text-white"
                  onClick={handleLogin}
                >
                  Login
                </button>
              )}
            </div>
          </form>
        </div>
      )}
      {/* setFormOpen */}
    </section>
  );
};

export default Header;
