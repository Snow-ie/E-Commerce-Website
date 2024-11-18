import React from "react";
import { useForm } from "react-hook-form";
import Monitor from "../assets/images/Monitor.svg";
import Gamepad from "../assets/images/Gamepad.svg";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <div className="">
      <nav
        aria-label="Breadcrumb"
        className="container mx-auto text-sm text-gray-500 my-6"
      >
        <ol className="list-none flex flex-wrap items-center p-2 space-x-1">
          <li>
            <a
              href="/account"
              className="hover:underline text-gray-700 cursor-pointer"
            >
              Account
            </a>
          </li>
          <li>/</li>
          <li>
            <a
              href="/account/my-account"
              className="hover:underline text-gray-700 cursor-pointer"
            >
              My Account
            </a>
          </li>
          <li>/</li>
          <li>
            <a
              href="/product"
              className="hover:underline text-gray-700 cursor-pointer"
            >
              Product
            </a>
          </li>
          <li>/</li>
          <li>
            <a
              href="/view-cart"
              className="hover:underline text-gray-700 cursor-pointer"
            >
              View Cart
            </a>
          </li>
          <li>/</li>
          <li className="text-black font-medium">CheckOut</li>
        </ol>
      </nav>

      <div className="flex flex-col md:flex-row p-4">
        <div className="w-full md:w-1/2 pr-4">
          <h2 className="text-4xl font-medium mb-4">Billing Details</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="first-name"
                placeholder=" "
                {...register("firstName", {
                  required: "First Name is required",
                })}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-secondary4 rounded-lg focus:outline-none focus:ring-0 focus:border-hoverbutton peer ${
                  errors.firstName
                    ? "border-secondary1 focus:border-secondary1"
                    : ""
                }`}
              />
              <label
                htmlFor="first-name"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-hoverbutton peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                First Name <span className="text-secondary1">*</span>
              </label>
              {errors.firstName && (
                <p className="mt-1 text-secondary1 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="relative">
              <input
                type="text"
                id="company-name"
                placeholder=" "
                {...register("companyName")}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-secondary4 rounded-lg focus:outline-none focus:ring-0 focus:border-hoverbutton peer"
              />
              <label
                htmlFor="company-name"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Company Name
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="street-address"
                placeholder=" "
                {...register("streetAddress", {
                  required: "Street Address is required",
                })}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-secondary4 rounded-lg focus:outline-none focus:ring-0 focus:border-hoverbutton peer ${
                  errors.streetAddress
                    ? "border-secondary1 focus:border-secondary1"
                    : ""
                }`}
              />
              <label
                htmlFor="street-address"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Street Address <span className="text-secondary1">*</span>
              </label>
              {errors.streetAddress && (
                <p className="mt-1 text-secondary1 text-sm">
                  {errors.streetAddress.message}
                </p>
              )}
            </div>

            <div className="relative">
              <input
                type="text"
                id="city"
                placeholder=" "
                {...register("city", { required: "City is required" })}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-secondary4 rounded-lg focus:outline-none focus:ring-0 focus:border-hoverbutton peer ${
                  errors.city ? "border-secondary1 focus:border-secondary1" : ""
                }`}
              />
              <label
                htmlFor="city"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Town/City <span className="text-secondary1">*</span>
              </label>
              {errors.city && (
                <p className="mt-1 text-secondary1 text-sm">
                  {errors.city.message}
                </p>
              )}
            </div>

            <div className="relative">
              <input
                type="text"
                id="phone"
                placeholder=" "
                {...register("phone", { required: "Phone Number is required" })}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-secondary4 rounded-lg focus:outline-none focus:ring-0 focus:border-hoverbutton peer ${
                  errors.phone
                    ? "border-secondary1 focus:border-secondary1"
                    : ""
                }`}
              />
              <label
                htmlFor="phone"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Phone Number <span className="text-secondary1">*</span>
              </label>
              {errors.phone && (
                <p className="mt-1 text-secondary1 text-sm">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder=" "
                {...register("email", { required: "Email is required" })}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-secondary4 rounded-lg focus:outline-none focus:ring-0 focus:border-hoverbutton peer ${
                  errors.email
                    ? "border-secondary1 focus:border-secondary1"
                    : ""
                }`}
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Email Address <span className="text-secondary1">*</span>
              </label>
              {errors.email && (
                <p className="mt-1 text-secondary1 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex items-center">
              <input
                id="save-info"
                type="checkbox"
                className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded peer"
                {...register("saveInfo")}
              />
              <label htmlFor="save-info" className="ml-2 text-sm">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/2 p-6">
          <div className="bg-gray-50 p-6 ">
            <h2 className="text-2xl font-bold mb-4">Your Order</h2>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    src={Monitor}
                    alt="LCD Monitor"
                    className="w-12 h-12 object-cover rounded"
                  />
                  <span>LCD Monitor</span>
                </div>
                <span>$650</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={Gamepad}
                    alt="H1 Gamepad"
                    className="w-12 h-12 object-cover rounded"
                  />
                  <span>H1 Gamepad</span>
                </div>
                <span>$1100</span>
              </div>
            </div>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>$1750</span>
            </div>

            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="bank"
                  name="payment"
                  value="bank"
                  className="mr-2"
                  {...register("payment", {
                    required: "Payment method is required",
                  })}
                />
                <label htmlFor="bank">Bank</label>
                <img
                  src="https://via.placeholder.com/40x25"
                  alt="Visa"
                  className="ml-auto"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="cod"
                  name="payment"
                  value="cash"
                  className="mr-2"
                  {...register("payment")}
                />
                <label htmlFor="cod">Cash on Delivery</label>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="w-[300px] border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 mb-2"
                  {...register("couponCode")}
                />
                <button
                  type="button"
                  className="w-[211px] bg-secondary1 text-primary p-2 rounded-md hover:bg-red-600"
                >
                  Apply Coupon
                </button>
              </div>
              <div className="mt-2">
                <button
                  type="submit"
                  className="w-[211px] bg-secondary1 text-primary py-2 rounded-md hover:bg-red-600"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
