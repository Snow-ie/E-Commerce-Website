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
      <div className="text-sm my-5 text-gray-600">
        Home / <span className="text-gray-800">Contact</span>
      </div>
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
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    id="name"
                    placeholder=" "
                    {...register("name")}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-secondary4 rounded-lg border-1 border-gray-300 appearance-none ${
                      errors.name
                        ? "border-secondary1 focus:ring-secondary1"
                        : "border-gray-300 focus:ring-secondary1"
                    }`}
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-gray-500 text-sm transition-all duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white"
                  >
                    Your Name <span className="text-secondary1">*</span>
                  </label>
                  {errors.name && (
                    <p className="text-secondary1 text-sm">
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
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-secondary4 rounded-lg border-1 border-gray-300 appearance-none ${
                      errors.email
                        ? "border-secondary1 focus:ring-secondary1"
                        : "border-gray-300 focus:ring-secondary1"
                    }`}
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-gray-500 text-sm transition-all duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white"
                  >
                    Your Email <span className="text-secondary1-">*</span>
                  </label>
                  {errors.email && (
                    <p className="text-secondary1 text-sm">
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
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-secondary4 rounded-lg border-1 border-gray-300 appearance-none ${
                      errors.phone
                        ? "border-secondary1 focus:ring-secondary1"
                        : "border-gray-300 focus:ring-secondary1"
                    }`}
                  />
                  <label
                    htmlFor="phone"
                    className="absolute text-gray-500 text-sm transition-all duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white"
                  >
                    Your Phone <span className="text-secondary1">*</span>
                  </label>
                  {errors.phone && (
                    <p className="text-secondary1 text-sm">
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
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-secondary4 rounded-lg border-1 border-gray-300 appearance-none ${
                    errors.message
                      ? "border-secondary1 focus:ring-secondary1"
                      : "border-gray-300 focus:ring-secondary1"
                  }`}
                  rows="4"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute text-gray-500 text-sm transition-all duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white"
                >
                  Your Message <span className="text-secondary1-500">*</span>
                </label>
                {errors.message && (
                  <p className="text-secondary1 text-sm">
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
