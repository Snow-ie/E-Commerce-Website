import React, { useState } from "react";

import BeatSnoop from "../assets/images/BeatSnoop.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAuthContext from "../components/hooks/useAuthProvider";

const Login = ({ setHasAccount }) => {
  const [error, setError] = useState(null);
  const { isAuth } = useAuthContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (user) {
      console.log("User logged in successfully:", user);
      setHasAccount(true);
      navigate("/account");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  if (!isAuth) {
    navigate("/");
  }

  return (
    <div className="bg-primary flex flex-col">
      <div className="flex flex-col lg:flex-row my-8">
        <div className="lg:w-1/2 bg-secondary3 flex items-center justify-center">
          <img
            src={BeatSnoop}
            alt="Shopping cart and smartphone"
            className="object-contain max-h-full w-full"
          />
        </div>
        <div className="lg:w-1/2 flex items-center justify-center px-6 lg:px-12">
          <div className="max-w-md w-full p-6 bg-primary">
            <h2 className="text-4xl text-medium mb-2">
              Log in to your account
            </h2>
            <p className="mb-6">Enter your email and password below</p>

            {error && <p className="text-secondary1 mb-4">{error}</p>}

            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="mb-4">
                <input
                  className="p-3 border-b border-button3 w-full"
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-secondary1 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <input
                  className="p-3 border-b border-button3 w-full"
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-secondary1 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-center gap-4 cursor-pointer">
                <button
                  type="submit"
                  className="bg-secondary1 text-primary py-3 rounded w-[143px] mb-4"
                >
                  Log In
                </button>
                <p className="text-sm text-secondary1">
                  <Link to="/signup">Don’t have an account?</Link>
                  {pathname.includes("signup")}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
