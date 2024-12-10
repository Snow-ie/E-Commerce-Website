import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import ProgressBar from "./ProgressBar";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  storeName: yup.string().required("Store name is required"),
  storeURI: yup
    .string()
    .url("Enter a valid URL")
    .required("Store URI is required"),

  phoneNumber: yup
    .string()
    .matches(/^\d+$/, "Phone number must contain only digits")
    .required("Phone number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const VendorForm = () => {
  const [sendEmail, setSendEmail] = useState(true);
  const [avatar, setAvatar] = useState(null);
  const [banner, setBanner] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBanner(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    navigate("/vendor/address");
  };

  return (
    <div className="">
      <ProgressBar />
      <div className="max-w-4xl mx-auto p-6 bg-secondary4">
        <h1 className="text-xl font-bold mb-6">Account Info</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          \
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="border-dashed border-2 border-gray-300 flex flex-col items-center justify-center p-6 ">
              {avatar ? (
                <img
                  src={avatar}
                  alt="Avatar Preview"
                  className="w-16 h-16 rounded-full mb-4"
                />
              ) : (
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25H10.5a2.25 2.25 0 00-2.25 2.25V9m1.5 4.5h6m-6 0a3 3 0 106 0m-6 0a3 3 0 01-6 0m3 0v-3.75M12 15v6m0 0H9m3 0h3"
                    />
                  </svg>
                </div>
              )}
              <label className="text-sm text-secondary1 underline cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
                Upload Avatar
              </label>
            </div>
            \
            <div className="border-dashed border-2 border-gray-300 flex flex-col items-center justify-center p-6">
              {banner ? (
                <img
                  src={banner}
                  alt="Banner Preview"
                  className="w-full h-[300px] object-cover mb-4"
                />
              ) : (
                <button
                  type="button"
                  className="bg-secondary1 text-white px-4 py-2 rounded-md"
                >
                  Upload Banner
                </button>
              )}
              <label className="text-sm text-secondary1 underline cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleBannerChange}
                  className="hidden"
                />
                Choose Banner
              </label>
              <p className="text-sm text-gray-500 mt-4">
                Upload banner for your store. Recommended size: 625x300 pixels.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name
              </label>
              <input
                {...register("firstName")}
                className="w-full border rounded-md p-2"
              />
              <p className="text-secondary1 text-sm mt-1">
                {errors.firstName?.message}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                {...register("lastName")}
                className="w-full border rounded-md p-2"
              />
              <p className="text-secondary1 text-sm mt-1">
                {errors.lastName?.message}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Store Name
              </label>
              <input
                {...register("storeName")}
                className="w-full border rounded-md p-2"
              />
              <p className="text-secondary1 text-sm mt-1">
                {errors.storeName?.message}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Store URI
              </label>
              <input
                {...register("storeURI")}
                className="w-full border rounded-md p-2"
              />
              <p className="text-secondary1 text-sm mt-1">
                {errors.storeURI?.message}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                {...register("phoneNumber")}
                className="w-full border rounded-md p-2"
              />
              <p className="text-secondary1 text-sm mt-1">
                {errors.phoneNumber?.message}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input
                {...register("email")}
                className="w-full border rounded-md p-2"
              />
              <p className="text-secondary1 text-sm mt-1">
                {errors.email?.message}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Username *
              </label>
              <input
                {...register("username")}
                className="w-full border rounded-md p-2"
              />
              <p className="text-secondary1 text-sm mt-1">
                {errors.username?.message}
              </p>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="flex">
                <input
                  {...register("password")}
                  className="w-full border rounded-md p-2"
                />
              </div>
              <p className="text-secondary1 text-sm mt-1">
                {errors.password?.message}
              </p>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div
              onClick={() => setSendEmail(!sendEmail)}
              className={`relative inline-flex items-center h-6 rounded-full w-11 cursor-pointer transition-colors ${
                sendEmail ? "bg-secondary1" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                  sendEmail ? "translate-x-6" : "translate-x-1"
                }`}
              ></span>
            </div>
            <label
              htmlFor="sendEmail"
              className="ml-3 text-sm font-medium text-gray-700"
            >
              Send the vendor an email about their account.
            </label>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="bg-secondary1 text-white px-6 py-2 rounded-md hover:bg-hoverbutton"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorForm;
