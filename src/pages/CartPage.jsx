import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../redux/cart/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"; //

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) =>
        total +
        (item?.discountPrice ? item.discountPrice : item?.price) *
          item.quantity,
      0
    );
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: parseInt(quantity, 10) }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="container mx-auto px-4">
      <nav className="text-sm my-5" aria-label="Breadcrumb">
        <ol className="list-none flex items-center space-x-2 md:space-x-3">
          <li>
            <a href="/" className=" hover:underline text-gray-700">
              Home
            </a>
          </li>
          <li>/</li>
          <li className="text-black font-medium">Cart</li>
        </ol>
      </nav>

      <div className="bg-white shadow-lg p-6 mb-8 rounded-lg">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="flex items-center py-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 mr-4"
                  />
                  {item.name}
                </td>
                <td>
                  ${item?.discountPrice ? item.discountPrice : item?.price}
                </td>
                <td>
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      handleUpdateQuantity(item.id, e.target.value)
                    }
                  >
                    {[...Array(10).keys()].map((n) => (
                      <option key={n + 1} value={n + 1}>
                        {n + 1}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  $
                  {(item?.discountPrice ? item.discountPrice : item?.price) *
                    item.quantity}
                </td>
                <td>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faTrash} className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mb-8">
        <button className="border border-gray-400 px-4 py-2 rounded-lg">
          <a href="./" className="">
            Return To Shop
          </a>
        </button>
        <button className="border border-gray-400 px-4 py-2 rounded-lg">
          Update Cart
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border w-2/3 px-4 py-2 mr-2 rounded-lg"
          />
          <button className="bg-secondary1 text-white px-4 py-2 rounded-lg">
            Apply Coupon
          </button>
        </div>

        <div className="w-full md:w-1/3 border p-4 rounded-lg">
          <h2 className="font-semibold text-lg mb-4">Cart Total</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${calculateSubtotal()}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between text-lg">
            <span>Total:</span>
            <span>${calculateSubtotal()}</span>
          </div>
          <button className="mt-4 w-full bg-secondary1 text-white py-2 rounded-lg">
            <a href="/checkout" className="">
              Proceed to checkout
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
