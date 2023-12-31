import { AxiosError } from "axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignInputs } from "../types/user.interface";
import { userApiUrl } from "../api/apiAction";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignInputs> = async ({
    firstName,
    lastName,
    email,
    password,
    confirmedPassword,
  }) => {

    await axios
      .post(userApiUrl, {
        firstName,
        lastName,
        email,
        password,
        confirmedPassword,
      })
      .then(() => {
        alert("Registration Successful");
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
            <p className="w-5/12 mx-auto md:mx-0 text-gray-500 text-3xl">
              Control your website data from dashboard.
            </p>
          </div>
          <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
            <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
                Sign up
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div id="input" className="flex flex-col w-full my-5">
                  <label htmlFor="FirstName" className="text-gray-500 mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="Please insert your first name"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    {...register("firstName", {
                      required: true,
                    })}
                  />
                  {errors.firstName && (
                    <p className="errorMsg"> First name is required</p>
                  )}
                </div>
                <div id="input" className="flex flex-col w-full my-5">
                  <label htmlFor="LastName" className="text-gray-500 mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Please insert your last name"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    {...register("lastName", {
                      required: true,
                    })}
                  />
                  {errors.lastName && (
                    <p className="errorMsg"> Last name is required</p>
                  )}
                </div>
                <div id="input" className="flex flex-col w-full my-5">
                  <label htmlFor="email" className="text-gray-500 mb-2">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Please insert your email"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: "Email is not valid.",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="errorMsg">{errors.email.message}</p>
                  )}
                </div>
                <div id="input" className="flex flex-col w-full my-5">
                  <label htmlFor="password" className="text-gray-500 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Please insert your password"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password should be at-least 6 characters.",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="errorMsg">{errors.password.message}</p>
                  )}
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
                    placeholder="Please confirm your password"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    {...register("confirmedPassword", {
                      required: "Password confirmation is required",
                    })}
                  />
                  {errors.confirmedPassword && (
                    <p className="errorMsg">
                      {errors.confirmedPassword.message}
                    </p>
                  )}
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
