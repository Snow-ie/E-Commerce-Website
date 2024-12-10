import React, { useState } from "react";
import BeatSnoop from "../assets/images/BeatSnoop.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAuthContext from "../components/hooks/useAuthProvider";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const SignUp = () => {
  const [error, setError] = useState(null);
  const { pathname } = useLocation();
  const { signup } = useAuthContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignUp = async ({ name, email, password }) => {
    try {
      if (name && email && password) {
        await signup({ name, email, password });
        navigate("/login");
      }
    } catch (err) {
      setError("Failed to create account. Please try again.");
    }
  };

  return (
    <div className="bg-primary flex flex-col">
      <div className="flex flex-col lg:flex-row my-8">
        <div className="lg:w-1/2 bg-secondary3 flex items-center justify-center">
          <img
            src={BeatSnoop}
            alt="Shopping cart and smartphone"
            loading="lazy"
            className="object-contain max-h-full w-full"
          />
        </div>

        <div className="lg:w-1/2 flex items-center justify-center px-6 lg:px-12">
          <div className="max-w-md w-full p-6 bg-primary">
            <h2 className="text-4xl text-medium mb-2">Create an account</h2>
            <p className="mb-6">Enter your details below</p>

            <form onSubmit={handleSubmit(handleSignUp)}>
              <div className="mb-4">
                <input
                  className="p-3 border-b border-button3 w-full"
                  type="text"
                  placeholder="Name"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-secondary1 text-xs">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <input
                  className="p-3 border-b border-button3 w-full"
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-secondary1 text-xs">
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
                  <p className="text-secondary1 text-xs">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="bg-secondary1 text-primary py-3 rounded w-full mb-4"
              >
                Create Account
              </button>

              {error && <p className="text-secondary1 text-sm">{error}</p>}
            </form>

            <button className="border border-button3 py-3 rounded w-full flex items-center justify-center mb-4">
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="h-5 mr-2"
              />
              Sign up with Google
            </button>

            <div className="flex items-center justify-center gap-4">
              <p className="text-sm">
                <Link to="/login">Already have an account? Log in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
