import React from "react";

const VendorTable = () => {
  const vendors = [
    {
      id: 1,
      name: "Thames Learning River",
      email: "adamsmith@gmail.com",
      phone: "202-555-0178",
      registered: "Jan 22, 2019",
      status: true,
    },
    {
      id: 2,
      name: "(no name)",
      email: "alsuzauddowla.du@gmail.com",
      phone: "",
      registered: "Jan 14, 2019",
      status: false,
    },
  ];

  return (
    <div className="p-6 bg-secondary4 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h1 className="text-xl font-semibold mb-2 md:mb-0">Vendors</h1>
        <button className="bg-secondary1 text-white px-4 py-2 rounded hover:bg-secondary1">
          Add New
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div className="space-x-4 mb-2 md:mb-0">
          <button className="text-secondary1 font-semibold hover:underline">
            All (1)
          </button>
          <button className="text-secondary1 font-semibold hover:underline">
            Approved (1)
          </button>
          <button className="text-secondary1 font-semibold hover:underline">
            Pending (0)
          </button>
        </div>
        <div className="w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Vendors"
            className="w-full md:w-auto border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-secondary1"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center mb-4 space-y-2 md:space-y-0">
        <select className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bg-secondary1">
          <option value="">Bulk Actions</option>
          <option value="approve">Approve</option>
          <option value="delete">Delete</option>
        </select>
        <button className="ml-0 md:ml-2 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          Apply
        </button>
      </div>

      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">
                <input type="checkbox" className="form-checkbox" />
              </th>
              <th className="px-4 py-2 text-left">Store</th>
              <th className="px-4 py-2 text-left">E-mail</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Registered</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor) => (
              <tr key={vendor.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td className="px-4 py-2 border">{vendor.name}</td>
                <td className="px-4 py-2 border">{vendor.email}</td>
                <td className="px-4 py-2 border">{vendor.phone || "-"}</td>
                <td className="px-4 py-2 border">{vendor.registered}</td>
                <td className="px-4 py-2 border">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="hidden"
                      id={`status-${vendor.id}`}
                      defaultChecked={vendor.status}
                    />
                    <label
                      htmlFor={`status-${vendor.id}`}
                      className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer ${
                        vendor.status ? "bg-secondary1" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`h-4 w-4 rounded-full bg-white shadow-md transform transition-transform ${
                          vendor.status ? "translate-x-5" : "translate-x-0"
                        }`}
                      ></div>
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorTable;
