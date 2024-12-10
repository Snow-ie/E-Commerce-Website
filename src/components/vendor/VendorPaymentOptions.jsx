import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ProgressBar from "./ProgressBar";

const schema = yup.object().shape({
  accountName: yup.string().required("Account name is required"),
  accountNumber: yup
    .string()
    .matches(/^\d+$/, "Account number must contain only digits")
    .required("Account number is required"),
  bankName: yup.string().required("Bank name is required"),
  bankAddress: yup.string().required("Bank address is required"),
  routingNumber: yup
    .string()
    .matches(/^\d+$/, "Routing number must contain only digits")
    .required("Routing number is required"),
  swift: yup.string().required("SWIFT code is required"),
  iban: yup.string().required("IBAN is required"),
});

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Payment Data:", data);
  };

  return (
    <div className="">
      <ProgressBar />
      <div className="max-w-4xl mx-auto bg-secondary4 p-6">
        <h1 className="text-xl font-bold mb-6">Payment Options</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Account Name
              </label>
              <input
                {...register("accountName")}
                className="w-full border rounded-md p-2"
                placeholder="Account Name"
              />
              <p className="text-secondary1 text-sm mt-1">
                {errors.accountName?.message}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Account Number
              </label>
              <input
                {...register("accountNumber")}
                className="w-full border rounded-md p-2"
                placeholder="123456789"
              />
              <p className="text-secondary1 text-sm mt-1">
                {errors.accountNumber?.message}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Bank Name
              </label>
              <input
                {...register("bankName")}
                className="w-full border rounded-md p-2"
                placeholder="Bank Name"
              />
              <p className="text-secondary1 text-sm mt-1">
                {errors.bankName?.message}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Bank Address
              </label>
              <input
                {...register("bankAddress")}
                className="w-full border rounded-md p-2"
                placeholder="Bank Address"
              />
              <p className="text-secondary1 text-sm mt-1">
                {errors.bankAddress?.message}
              </p>
            </div>

            {/* Routing Number */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Routing Number
              </label>
              <input
                {...register("routingNumber")}
                className="w-full border rounded-md p-2"
                placeholder="123456789"
              />
              <p className="text-secondary1 text-sm mt-1">
                {errors.routingNumber?.message}
              </p>
            </div>

            {/* SWIFT Code */}
            <div>
              <label className="block text-sm font-medium mb-1">SWIFT</label>
              <input
                {...register("swift")}
                className="w-full border rounded-md p-2"
                placeholder="123456789"
              />
              <p className="text-secondary1 text-sm mt-1">
                {errors.swift?.message}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">IBAN</label>
              <input
                {...register("iban")}
                className="w-full border rounded-md p-2"
                placeholder="123456789"
              />
              <p className="text-secondary1 text-sm mt-1">
                {errors.iban?.message}
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="bg-secondary1 text-white px-6 py-2 rounded-md hover:bg-hoverbutton"
            >
              Create Vendor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
