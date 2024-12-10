import React, { useState } from "react";
import { products } from "../../utils/data";
import { useNavigate } from "react-router-dom";
import MenuIcon from "../../assets/dashboard/MenuIcon";

const VendorProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const productsPerPage = 5;

  const navigate = useNavigate();

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const openModal = (action, product) => {
    setModalAction(action);
    setSelectedProduct(product);
    setIsModalOpen(true);
    setActiveMenu(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setModalAction("");
  };

  const confirmAction = () => {
    alert(`${modalAction} confirmed for ${selectedProduct.name}`);
    closeModal();
  };

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const handleAddProductClick = () => {
    navigate("/vendorpage/product/new");
  };

  const handleEditProductClick = (productId) => {
    navigate(`/vendorpage/product/${productId}/edit`);
  };

  return (
    <div className=" container mx-auto py-4">
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <h1 className="text-xl font-bold text-gray-700">Product</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search products..."
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
          />
          <button
            className="bg-secondary1 text-primary rounded-lg px-4 py-2"
            onClick={handleAddProductClick}
          >
            Add Product
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="w-full border border-gray-200">
          <thead>
            <tr className="bg-secondary4">
              <th className="p-4 text-left text-sm font-medium">Name</th>
              <th className="p-4 text-left text-sm font-medium">Date Added</th>
              <th className="p-4 text-left text-sm font-medium">SKU</th>
              <th className="p-4 text-left text-sm font-medium">Price</th>
              <th className="p-4 text-left text-sm font-medium">Purchases</th>
              <th className="p-4 text-left text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.length > 0 ? (
              currentProducts.map((product, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition duration-200"
                >
                  <td className="p-4 flex items-center space-x-2">
                    <span className="text-sm">{product.name}</span>
                  </td>
                  <td className="p-4 text-sm">{product.dateAdded}</td>
                  <td className="p-4 text-sm">{product.sku}</td>
                  <td className="p-4 text-sm">{product.price}</td>
                  <td className="p-4 text-sm">{product.purchases}</td>
                  <td className="p-4 relative">
                    <button
                      className="px-2 py-1"
                      onClick={() => toggleMenu(index)}
                    >
                      <MenuIcon />
                    </button>
                    {activeMenu === index && (
                      <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        <button
                          className="flex items-center w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          onClick={() => handleEditProductClick(product.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="flex items-center w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          onClick={() => openModal("Delete", product)}
                        >
                          Delete
                        </button>
                        <button
                          className="flex items-center w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          onClick={() => openModal("Hide", product)}
                        >
                          Hide
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className="p-4 text-center text-sm text-gray-500"
                  colSpan="6"
                >
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center mt-4 gap-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`rounded-lg px-4 py-2 ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Previous
        </button>
        <span className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`rounded-lg px-4 py-2 ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Next
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full mx-4">
            <h2 className="text-lg font-bold mb-4">
              Are you sure you want to {modalAction} this product?
            </h2>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-secondary1 text-primary rounded-lg"
                onClick={confirmAction}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorProduct;
