import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneIcon from "../assets/contact/PhoneIcon";
import MailIcon from "../assets/contact/MailIcon";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10,15}$/, "Phone must be 10-15 digits")
    .required("Phone is required"),
  message: yup.string().required("Message is required"),
});

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="container mx-auto p-4">
      <nav aria-label="Breadcrumb" className="text-sm my-5">
        <ol className="list-none flex space-x-2 text-gray-500">
          <li>
            <a href="/" className="hover:underline text-gray-700">
              Home
            </a>
          </li>
          <li>/</li>
          <li className="text-black font-semibold">Contact</li>
        </ol>
      </nav>
      <div className="flex justify-center my-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-white p-8 w-full md:w-[340px] rounded-lg shadow-md">
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <PhoneIcon />
                <h3 className="text-lg font-semibold text-gray-800">
                  Call To Us
                </h3>
              </div>
              <p className="text-gray-700">
                We are available 24/7, 7 days a week.
              </p>
              <p className="mt-1 text-gray-500">Phone: +8801611112222</p>
            </div>
            <hr className="my-4" />
            <div>
              <div className="flex items-center gap-4 mb-4">
                <MailIcon />
                <h3 className="text-lg font-semibold text-gray-800">
                  Write To Us
                </h3>
              </div>
              <p className="text-gray-700">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="mt-1 text-gray-500">
                Emails: customer@exclusive.com
              </p>
              <p className="text-gray-500">support@exclusive.com</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:space-x-6">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    id="name"
                    placeholder=" "
                    {...register("name")}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-secondary4 rounded-lg  focus:outline-none focus:ring-0 focus:border-hoverbutton peer ${
                      errors.name
                        ? "border-secondary1 focus:border-secondary1"
                        : ""
                    }`}
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-hoverbutton peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Your Name <span className="text-secondary1">*</span>
                  </label>
                  {errors.name && (
                    <p className=" mt-4 text-secondary1 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="flex-1 relative">
                  <input
                    type="email"
                    id="email"
                    placeholder=" "
                    {...register("email")}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-secondary4 rounded-lg  focus:outline-none focus:ring-0 focus:border-hoverbutton peer ${
                      errors.email
                        ? "border-secondary1 focus:border-secondary1"
                        : ""
                    }`}
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-hoverbutton peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Your Email <span className="text-secondary1">*</span>
                  </label>
                  {errors.email && (
                    <p className="mt-4 text-secondary1 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="flex-1 relative">
                  <input
                    type="tel"
                    id="phone"
                    placeholder=" "
                    {...register("phone")}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-secondary4 rounded-lg  focus:outline-none focus:ring-0 focus:border-hoverbutton peer${
                      errors.phone
                        ? "border-secondary1 focus:border-secondary1"
                        : ""
                    }`}
                  />
                  <label
                    htmlFor="phone"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-hoverbutton peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Your Phone <span className="text-secondary1">*</span>
                  </label>
                  {errors.phone && (
                    <p className="mt-4 text-secondary1 text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  placeholder=" "
                  {...register("message")}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-secondary4 rounded-lg  focus:outline-none focus:ring-0 focus:border-hoverbutton peer ${
                    errors.message
                      ? "border-secondary1 focus:border-secondary1"
                      : ""
                  }`}
                  rows="4"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-hoverbutton peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Your Message <span className="text-secondary1">*</span>
                </label>
                {errors.message && (
                  <p className="mt-4 text-secondary1 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-secondary1 text-white px-5 py-3 rounded-md hover:bg-secondary1-600 focus:outline-none focus:ring-2 focus:ring-secondary1 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
