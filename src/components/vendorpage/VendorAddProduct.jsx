import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productValidationSchema } from "../admin/models/productValidationSchema";
import { Select } from "antd";

const categoryOptions = [
  {
    value: "fashion",
    label: "Fashion",
  },
  {
    value: "accessories",
    label: "Accessories",
  },
  {
    value: "electronics",
    label: "Electronics",
  },
];

function VendorAddProduct() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      sizes: [],
      gender: "Unisex",
      basePrice: "",
      stock: "",
      discount: "",
      discountType: "",
      category: [],
      images: [],
    },
    resolver: yupResolver(productValidationSchema),
  });

  const values = getValues();

  const sizes = watch("sizes");

  const handleSizeChange = (size) => {
    const newSizes = sizes.includes(size)
      ? sizes.filter((selectedSize) => selectedSize !== size)
      : [...sizes, size];
    setValue("sizes", newSizes);
  };
  const gender = watch("gender");

  const images = watch("images");
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const currentImages = getValues("images") || [];
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setValue("images", [...currentImages, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    const currentImages = getValues("images");
    setValue(
      "images",
      currentImages.filter((_, i) => i !== index)
    );
  };

  const onSubmit = (values) => {
    console.log({ values });
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Form Data Submitted:", formData);
  //   };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-medium">Add New Product</h2>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-4 py-2 bg-sgray-200 text-gray-800 rounded-lg shadow-md"
          >
            Save Draft
          </button>
          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="px-4 py-2 bg-secondary1 text-white rounded-lg shadow-md"
          >
            Add Product
          </button>
        </div>
      </div>
      <form className="max-w-6xl mx-auto ">
        <div className="flex flex-col md:flex-row gap-8 ">
          <div className="flex-1 rounded-lg bg-secondary4 p-4">
            <h2 className="text-xl font-semibold mb-4">General Information</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-3">
                Name Product
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="Product name"
                className="w-full h-[40px] border-gray-300 rounded-lg px-2 py-1 shadow-sm focus:ring-2 focus:ring-secondary1"
              />
              <p className="text-secondary1 text-sm mt-1">
                {errors.name?.message}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Description Product
              </label>
              <textarea
                {...register("description")}
                placeholder="Product description"
                className="w-full h-24 px-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-secondary1"
              />
              <p className="text-secondary1 text-sm mt-1">
                {errors.description?.message}
              </p>
            </div>

            <div className="mt-8 flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-3">
                <label className="block text-sm font-medium">Size</label>
                <p className="text-sm ">Pick Available Size</p>
                <div className="flex gap-2">
                  {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      type="button"
                      key={size}
                      onClick={() => handleSizeChange(size)}
                      className={`px-3 py-1 border rounded-lg ${
                        values?.sizes.includes(size)
                          ? "bg-secondary1 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <label className="block text-sm font-medium mb-1">Gender</label>
                <p className="text-sm ">Pick Available Size</p>
                <div className="flex gap-4">
                  {["Men", "Women", "Unisex"].map((gender) => (
                    <label key={gender} className="flex items-center gap-2">
                      <input
                        type="radio"
                        onChange={() => setValue("gender", gender)}
                        className="focus:ring-secondary1"
                        checked={getValues("gender") === gender}
                      />
                      {gender}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 w-full  rounded-lg bg-secondary4  p-4">
            <h2 className="text-xl font-semibold mb-4">Upload Image</h2>
            <div className="relative w-full h-48 border border-gray-300 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
              {values?.images.length > 0 ? (
                <img
                  src={values?.images[0].url}
                  alt="Main Preview"
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-gray-500 px-2 py-1">
                  No Image Selected
                </span>
              )}
            </div>

            <div className="flex mt-4 gap-2">
              {values?.images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-16 h-16 border rounded-lg overflow-hidden"
                >
                  <img
                    src={image.url}
                    alt={`Preview ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-1 right-2 bg-secondary1 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2"
                  >
                    ×
                  </button>
                </div>
              ))}

              {values?.images.length < 4 && (
                <label
                  htmlFor="file-upload"
                  className="w-16 h-16 flex items-center justify-center border rounded-lg bg-gray-100 cursor-pointer"
                >
                  <span className="text-secondary1 text-2xl">+</span>
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-secondary4 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-medium mb-4">Pricing And Stock</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Base Pricing
                  </label>
                  <input
                    type="number"
                    {...register("basePrice")}
                    placeholder="$47.55"
                    className="w-full h-[40px] px-2 py-1 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-secondary1"
                  />{" "}
                  <p className="text-secondary1 text-sm mt-1">
                    {errors.basePrice?.message}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Stock
                  </label>
                  <input
                    type="number"
                    {...register("stock")}
                    placeholder="77"
                    className="w-full h-[40px] px-2 py-1   border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-secondary1"
                  />{" "}
                  <p className="text-secondary1 text-sm mt-1">
                    {errors.stock?.message}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Discount
                  </label>
                  <input
                    type="number"
                    {...register("discount")}
                    placeholder="10%"
                    className="w-full h-[40px] px-2 py-1  border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-secondary1"
                  />{" "}
                  <p className="text-secondary1 text-sm mt-1">
                    {errors.discount?.message}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Discount Type
                  </label>
                  <input
                    type="text"
                    {...register("discountType")}
                    placeholder="Chinese New Year Discount"
                    className="w-full h-[40px] px-2 py-1  border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-secondary1"
                  />{" "}
                  <p className="text-secondary1 text-sm mt-1">
                    {errors.discountType?.message}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary4 p-4 rounded-lg shadow-md w-full">
              <h2 className="text-lg font-medium mb-4">Category</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Product Category
                </label>
                <Select
                  mode="multiple"
                  style={{ width: "100%" }}
                  options={categoryOptions}
                  value={getValues("category")}
                  onChange={(option) => setValue("category", option)}
                  placeholder="select category"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default VendorAddProduct;
