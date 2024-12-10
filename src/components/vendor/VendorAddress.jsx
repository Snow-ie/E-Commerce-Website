import React, { useState } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import ProgressBar from "./ProgressBar";

const schema = yup.object().shape({
  street1: yup.string().required("Street 1 is required"),
  street2: yup.string(),
  city: yup
    .object()
    .shape({
      id: yup.number().required(),
      name: yup.string().required(),
    })
    .required("City is required"),
  zip: yup
    .string()
    .matches(/^\d{5}$/, "Zip code must be exactly 5 digits")
    .required("Zip code is required"),
  country: yup
    .object()
    .shape({
      id: yup.number().required(),
      name: yup.string().required(),
    })
    .required("Country is required"),
  state: yup
    .object()
    .shape({
      id: yup.number().required(),
      name: yup.string().required(),
    })
    .required("State is required"),
});

const AddressForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    resetField,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [countryId, setCountryId] = useState(null);
  const [stateId, setStateId] = useState(null);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Address Data:", data);
    navigate("/vendor/payment");
  };

  return (
    <div className="">
      <ProgressBar />
      <div className="max-w-4xl mx-auto p-6 bg-secondary4 ">
        <h1 className="text-xl font-medium mb-6">Address</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Street 1</label>
              <input
                {...register("street1")}
                className="w-full border rounded-md p-2"
              />
              <p className="text-secondary1 text-sm mt-1">
                {errors.street1?.message}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Street 2</label>
              <input
                {...register("street2")}
                className="w-full border rounded-md p-2"
              />
              <p className="text-secondary1 text-sm mt-1">
                {errors.street2?.message}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <Controller
                name="country"
                control={control}
                render={({ field: { ref, ...restField } }) => (
                  <CountrySelect
                    {...restField}
                    onChange={(selected) => {
                      restField.onChange(selected);
                      setCountryId(selected?.id || null);
                      resetField("state");
                      resetField("city");
                    }}
                    placeHolder="Select Country"
                  />
                )}
              />
              <p className="text-secondary1 text-sm mt-1">
                {errors.country?.message}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">State</label>
              <Controller
                name="state"
                control={control}
                render={({ field: { ref, ...restField } }) => (
                  <StateSelect
                    {...restField}
                    countryid={countryId}
                    onChange={(selected) => {
                      restField.onChange(selected);
                      setStateId(selected?.id || null);
                      resetField("city");
                    }}
                    placeHolder="Select State"
                  />
                )}
              />
              <p className="text-secondary1 text-sm mt-1">
                {errors.state?.message}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <Controller
                name="city"
                control={control}
                render={({ field: { ref, ...restField } }) => (
                  <CitySelect
                    {...restField}
                    countryid={countryId}
                    stateid={stateId}
                    onChange={(selected) => restField.onChange(selected)}
                    placeHolder="Select City"
                  />
                )}
              />
              <p className="text-secondary1 text-sm mt-1">
                {errors.city?.message}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Zip</label>
              <input
                {...register("zip")}
                className="w-full border rounded-md p-2"
              />
              <p className="text-secondary1 text-sm mt-1">
                {errors.zip?.message}
              </p>
            </div>
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

export default AddressForm;
