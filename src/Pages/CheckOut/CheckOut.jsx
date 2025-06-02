import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import dollar from "../../assests/CheckOut/dollar.svg";
import { useSelector } from "react-redux";
import { Dropdown } from "primereact/dropdown";

import { getCurrentUserUid } from "../../firebase/Auth";
import useAddToCart from "../../Hooks/useAddToCart";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const formik = useFormik({
    initialValues: {
      username: "",
      lastname: "",
      company: "",
      address: "",
      state: "",
      country: "",
      city: "",
      zipcode: "",
      email: "",
      phone: "",
    },
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
    },
  });

  const [cartItems, setCartItems] = useState([]);
  const userId = getCurrentUserUid();
  const { fetchCart } = useAddToCart();
  const navigate = useNavigate();

  useEffect(() => {
    const loadCart = async () => {
      const cartData = await fetchCart(userId);
      setCartItems(cartData);
    };

    loadCart();
  }, [userId]);

  const subTotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  function handlePlaceOrder() {
    navigate("/order-placed");
  }

  // const cartItem = useSelector((state) => state.cart.items);
  // console.log(cartItem);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = [
    { name: "Australia", code: "AU" },
    { name: "Brazil", code: "BR" },
    { name: "China", code: "CN" },
    { name: "Egypt", code: "EG" },
    { name: "France", code: "FR" },
    { name: "Germany", code: "DE" },
    { name: "India", code: "IN" },
    { name: "Japan", code: "JP" },
    { name: "Spain", code: "ES" },
    { name: "United States", code: "US" },
  ];

  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <img
            alt={option.name}
            src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
            className={`mr-2 flag flag-${option.code.toLowerCase()}`}
            style={{ width: "18px" }}
          />
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <img
          alt={option.name}
          src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
          className={`mr-2 flag flag-${option.code.toLowerCase()}`}
          style={{ width: "18px" }}
        />
        <div>{option.name}</div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-6 p-6">
        {/* Form Section */}
        <form
          onSubmit={formik.handleSubmit}
          className="flex-1 bg-white p-6 rounded-xl space-y-6"
        >
          {/* Row 1: Username, Lastname, Company */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-1">Username</label>
              <input
                type="text"
                placeholder="First Name"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block mb-1 invisible">Last Name</label>
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block mb-1">
                Company <span className="text-gray-text">(Optional)</span>
              </label>
              <input
                type="text"
                name="company"
                value={formik.values.company}
                onChange={formik.handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
          </div>

          {/* Row 2: Address */}
          <div>
            <label className="block mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Row 3: State, Country, City, Zipcode */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block mb-1">State</label>
              <input
                type="text"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Country</label>
              <div className="w-full border rounded p-0.5">
                <Dropdown
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.value)}
                  options={countries}
                  optionLabel="name"
                  placeholder="Select a Country"
                  filter
                  valueTemplate={selectedCountryTemplate}
                  itemTemplate={countryOptionTemplate}
                  className="w-full"
                  panelClassName="z-50"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Zip Code</label>
              <input
                type="text"
                name="zipcode"
                value={formik.values.zipcode}
                onChange={formik.handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
          </div>

          {/* Row 4: Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="shipToDifferent"
              name="shipToDifferent"
              checked={formik.values.shipToDifferent}
              onChange={formik.handleChange}
              className="w-4 h-4"
            />
            <label htmlFor="shipToDifferent" className="text-sm">
              Ship to a different address
            </label>
          </div>
          <div className="bg-white p-6 rounded-xl border space-y-6">
            <h2 className="text-lg font-semibold">Payment Method</h2>

            {/* Row 1: Payment Options */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                "Cash On delivery",
                "Venmo",
                "PayPal",
                "Credit Card",
                "Other",
              ].map((method) => (
                <label
                  key={method}
                  className={`flex flex-col-reverse items-center gap-2 p-2 border rounded cursor-pointer hover:border-[#FA8232] ${
                    formik.values.paymentMethod === method
                      ? "border-[#FA8232]"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    checked={formik.values.paymentMethod === method}
                    onChange={formik.handleChange}
                  />

                  <span className="text-sm">{method}</span>
                  <img src={dollar} />
                </label>
              ))}
            </div>

            {/* Row 2: Name on Card */}
            <div>
              <label className="block mb-1">Name on Card</label>
              <input
                type="text"
                name="cardName"
                value={formik.values.cardName}
                onChange={formik.handleChange}
                className="w-full border p-2 rounded"
              />
            </div>

            {/* Row 3: Card Number */}
            <div>
              <label className="block mb-1">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formik.values.cardNumber}
                onChange={formik.handleChange}
                className="w-full border p-2 rounded"
              />
            </div>

            {/* Row 4: Expiry and CVV */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Expiry Date</label>
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={formik.values.expiry}
                  onChange={formik.handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">CVV</label>
                <input
                  type="password"
                  name="cvv"
                  value={formik.values.cvv}
                  onChange={formik.handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-medium text-lg">Additional Information</h2>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Order Notes{" "}
                <span className="text-gray-500 font-normal">(Optional)</span>
              </label>
              <textarea
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-sm text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FA8232] focus:border-transparent resize-y"
                placeholder="Notes about your order, e.g. special notes for delivery"
              ></textarea>
            </div>
          </div>
        </form>

        {/* Order Summary */}

        <div className=" max-w-[450px] lg:w-1/3 bg-gray-50 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {cartItems.map((item) => (
            <div className="flex gap-2 mb-8">
              <img className="h-8 w-8" src={item.image} />
              <div className="flex flex-col">
                <p className="text-black font-public font-normal text-sm truncate max-w-xs">
                  {item.description}
                </p>

                <div className="flex gap-2 items-center">
                  <p className="text-gray-text font-public text-sm">
                    {item.quantity}
                  </p>
                  <p>x</p>
                  <p className="font-public text-[#2DA5F3] text-sm font-semibold">
                    {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span>Subtotal</span>
              <span>${subTotal.toFixed(2)}</span>
            </li>
            <li className="flex justify-between">
              <span>Shipping</span>
              <span>$00.00</span>
            </li>
            <li className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${subTotal.toFixed(2)}</span>
            </li>
          </ul>
          <button
            onClick={handlePlaceOrder}
            className="mt-6 w-full bg-[#FA8232] text-white py-3 rounded hover:bg-[#fa82327c]"
          >
            Place Order
          </button>
        </div>
      </div>
      {/* Payment Section */}
    </div>
  );
}
