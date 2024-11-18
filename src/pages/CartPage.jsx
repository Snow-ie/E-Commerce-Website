import React, { useState } from "react";
import GamePad from "../assets/images/Gamepad.svg";
import Monitor from "../assets/images/Monitor.svg";
const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image: Monitor,
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      image: GamePad,
    },
  ]);

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mx-auto px-4 ">
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
              <th className="py-2">Product</th>
              <th className="py-2">Price</th>
              <th className="py-2">Quantity</th>
              <th className="py-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="py-4 flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 mr-4"
                  />
                  {item.name}
                </td>
                <td className="py-4">${item.price}</td>
                <td className="py-4">
                  <select
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                    className="border rounded px-2 py-1"
                  >
                    {[...Array(10).keys()].map((n) => (
                      <option key={n + 1} value={n + 1}>
                        {n + 1}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="py-4">${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mb-8">
        <button className="border border-gray-400  px-4 py-2 rounded-lg">
          Return To Shop
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
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
