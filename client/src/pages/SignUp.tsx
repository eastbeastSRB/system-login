import { AxiosError } from "axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const SignUp = () => {
  // const [users, setUsers] = useState([])
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    console.log({ firstName, lastName, email, password });
    event.preventDefault();
    axios
      .post("/users/v1", {
        firstName,
        lastName,
        email,
        password,
        confirmedPassword,
      })
      .then(() => {
        alert("Registration Successful");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmedPassword("");
        navigate("/login");
      })
      .catch((error: AxiosError) => {
        console.log("Unable to register user", error);
      });
  };
  return (
    <div className="antialiased bg-gradient-to-br from-green-100 to-white">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
          <div className="flex flex-col w-full">
            <div>
              <svg
                className="w-20 h-20 mx-auto md:float-left fill-stroke text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <h1 className="text-5xl text-gray-800 font-bold">Client Area</h1>
            <p className="w-5/12 mx-auto md:mx-0 text-gray-500">
              Control and monitorize your website data from dashboard.
            </p>
          </div>
          <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
            <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
                Sign up
              </h2>
              <form onSubmit={handleSubmit} className="w-full">
                <div id="input" className="flex flex-col w-full my-5">
                  <label htmlFor="FirstName" className="text-gray-500 mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Please insert your first name"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div id="input" className="flex flex-col w-full my-5">
                  <label htmlFor="LastName" className="text-gray-500 mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Please insert your last name"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div id="input" className="flex flex-col w-full my-5">
                  <label htmlFor="email" className="text-gray-500 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Please insert your email"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div id="input" className="flex flex-col w-full my-5">
                  <label htmlFor="password" className="text-gray-500 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Please insert your password"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div id="input" className="flex flex-col w-full my-5">
                  <label
                    htmlFor="Confirm password"
                    className="text-gray-500 mb-2"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    id="confirmedPassword"
                    placeholder="Please confirm your password"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    value={confirmedPassword}
                    onChange={(e) => setConfirmedPassword(e.target.value)}
                  />
                </div>
                <div id="signup-button" className="flex flex-col w-full my-5">
                  <button
                    type="submit"
                    className="w-full py-4 bg-green-600 rounded-lg text-green-100"
                  >
                    <div className="flex flex-row items-center justify-center">
                      <div className="mr-2">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                          ></path>
                        </svg>
                      </div>
                      <div className="font-bold">Sign up</div>
                    </div>
                  </button>
                  {/* <div className="flex justify-evenly mt-5">
                        <a
                          href="#"
                          className="w-full text-center font-medium text-gray-500"
                        >
                          Recover password!
                        </a>
                        <a
                          href="#"
                          className="w-full text-center font-medium text-gray-500"
                        >
                          Singup!
                        </a>
                      </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
