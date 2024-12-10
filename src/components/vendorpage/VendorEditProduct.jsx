import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { products } from "../../utils/data";

const VendorEditProduct = () => {
  const [formData, setFormData] = useState({
    id: 1,
    name: "",
    description: "",
    sizes: [],
    gender: "",
    category: "",
    basePrice: "",
    stock: "",
    discount: "",
    discountType: "",
    images: [],
  });
  const params = useParams();

  useEffect(() => {
    const currentProduct = products.find(
      (product) => product.id == params.productId
    );
    setFormData({
      id: currentProduct?.id || 1,
      name: currentProduct?.name || "",
      description: currentProduct?.description || "",
      sizes: currentProduct?.sizes || [],
      gender: currentProduct?.gender || "",
      category: currentProduct?.category || "",
      basePrice: currentProduct?.basePrice || "",
      stock: currentProduct?.stock || "",
      discount: currentProduct?.discount || "",
      discountType: currentProduct?.discountType || "",
      images: currentProduct?.images || [],
    });
  }, [params]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSizeChange = (size) => {
    const sizes = formData.sizes.includes(size)
      ? formData.sizes.filter((s) => s !== size)
      : [...formData.sizes, size];
    setFormData({ ...formData, sizes });
  };

  const handleGenderChange = (gender) => {
    setFormData({ ...formData, gender });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...newImages],
    }));
  };

  const handleRemoveImage = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      images: prevData.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const handleCategoryChange = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };

  const handleAddCategory = () => {
    console.log("Category added:", formData.category);
  };

  return (
    <div className="p-4 bg-gray-50 ">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-medium">Edit Product</h2>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow-md"
          >
            Save Draft
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-secondary1 text-white rounded-lg shadow-md"
          >
            Add Product
          </button>
        </div>
      </div>
      <form className="max-w-6xl mx-auto " onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-8 ">
          <div className="flex-1 rounded-lg bg-secondary4 p-4">
            <h2 className="text-xl font-semibold mb-4">General Information</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-3">
                Name Product
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Product name"
                className="w-full h-[40px] border-gray-300 rounded-lg px-2 py-1 shadow-sm focus:ring-2 focus:ring-secondary1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Description Product
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Product description"
                className="w-full h-24 px-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-secondary1"
              />
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
                        formData.sizes.includes(size)
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
                        name="gender"
                        value={gender}
                        checked={formData.gender === gender}
                        onChange={() => handleGenderChange(gender)}
                        className="focus:ring-secondary1"
                      />
                      {gender}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full md:w-1/3 rounded-lg bg-secondary4  p-4">
            <h2 className="text-xl font-semibold mb-4">Upload Image</h2>
            <div className="relative w-full h-48 border border-gray-300 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
              {formData.images.length > 0 ? (
                <img
                  src={formData.images[0]}
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
              {formData.images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-16 h-16 border rounded-lg overflow-hidden"
                >
                  <img
                    src={image}
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

              {formData.images.length < 4 && (
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

            <div className="mt-6">
              <button
                type="submit"
                className="px-4 py-2 bg-secondary1 text-white rounded-lg shadow-md w-full"
              >
                Submit
              </button>
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
                    name="basePrice"
                    value={formData.basePrice}
                    onChange={handleInputChange}
                    placeholder="$47.55"
                    className="w-full h-[40px] px-2 py-1 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-secondary1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Stock
                  </label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                    placeholder="77"
                    className="w-full h-[40px] px-2 py-1   border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-secondary1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Discount
                  </label>
                  <input
                    type="number"
                    name="discount"
                    value={formData.discount}
                    onChange={handleInputChange}
                    placeholder="10%"
                    className="w-full h-[40px] px-2 py-1  border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-secondary1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Discount Type
                  </label>
                  <input
                    type="text"
                    name="discountType"
                    value={formData.discountType}
                    onChange={handleInputChange}
                    placeholder="Chinese New Year Discount"
                    className="w-full h-[40px] px-2 py-1  border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-secondary1"
                  />
                </div>
              </div>
            </div>

            <div className="bg-secondary4 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-medium mb-4">Category</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Product Category
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  placeholder="Jacket"
                  className="w-full border-gray-300 px-2 py-1 rounded-lg shadow-sm focus:ring-2 focus:ring-secondary1"
                />
              </div>
              <button
                type="button"
                onClick={handleAddCategory}
                className=" h-[40px] px-4 py-2 bg-secondary1 text-white rounded-lg shadow-md hover:bg-secondary1"
              >
                Add Category
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VendorEditProduct;
