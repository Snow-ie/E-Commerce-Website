import React, { useState } from "react";
import { Link } from "react-router-dom";

const Account = () => {
  const [formData, setFormData] = useState({
    firstName: "Md",
    lastName: "Rimel",
    email: "rimel1111@gmail.com",
    address: "Kingston, 5236, United State",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    console.log("Profile saved", formData);
  };

  const handleCancel = () => {
    console.log("Edit cancelled");
  };

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-2 sm:space-y-0">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-600">
          <ol className="list-none flex space-x-2">
            <li>
              <a href="/" className="hover:underline text-gray-700">
                Home
              </a>
            </li>
            <li>/</li>
            <li className="text-black font-semibold">My Account</li>
          </ol>
        </nav>

        <h4 className="text-sm">
          Welcome! <span className="text-secondary1 font-medium">Md Rimel</span>
        </h4>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-6">
        <div className="lg:w-1/4 w-full p-4 sm:p-6 mb-4 lg:mb-0">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Manage My Account
          </h3>
          <ul className="space-y-3">
            <li className="text-secondary1 font-medium">My Profile</li>
            <li className="text-gray-600 hover:text-hoverbutton cursor-pointer">
              Address Book
            </li>
            <li className="text-gray-600 hover:text-hoverbutton cursor-pointer">
              My Payment Options
            </li>
          </ul>

          <h3 className="text-lg font-medium text-gray-800 mt-6 mb-4">
            My Orders
          </h3>
          <ul className="space-y-3">
            <li className="text-gray-600 hover:text-hoverbutton cursor-pointer">
              My Returns
            </li>
            <li className="text-gray-600 hover:text-hoverbutton cursor-pointer">
              My Cancellations
            </li>
          </ul>

          <h3 className="text-lg font-medium text-gray-800 mt-6 mb-4">
            My Wishlist
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="/wishlist"
                className="text-gray-600 hover:text-hoverbutton cursor-pointer"
              >
                My Wishlist
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:w-3/4 w-full p-4 sm:p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-medium text-secondary1 mb-4">
            Edit Your Profile
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Current Password
              </label>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={handleCancel}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-sm font-medium text-white bg-secondary1 rounded-md hover:bg-hoverbutton"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
