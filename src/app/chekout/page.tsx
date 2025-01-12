"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
export default function CheckoutPage() {
  const { cartItems, getTotalPrice, } = useCart();
  const total = getTotalPrice() + 15; // Assuming $6 for shipping
  return (
    <div className="text-[#1D3178] font-sans">
      <div className="bg-[#F6F5FF] py-16 px-4 sm:px-8">
        <h1 className="text-4xl font-bold">Hecto Demo</h1>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="self-start px-8">
          <h1 className="text-2xl font-bold ">Hekto Demo</h1>
          <p>Cart/ Information/ Shipping/ Payment</p>
        </div>
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 px-6 py-12">
          {/* Left Section: Checkout Form */}
          <div className="col-span-7 bg-white p-6 rounded-lg shadow-md ">
            <form className="space-y-8 ">
              {/* Contact Information */}
              <div>
                <div className="flex justify-between ">
                  <h2 className="text-lg font-bold mb-4">
                    Contact Information
                  </h2>
                  <p className="text-sm text-[#C1C8E1]">
                    Already have an account? <a href="login"> Login</a>
                  </p>
                </div>
                <input
                  type="email"
                  placeholder="Email or mobile phone number"
                  className="w-full border-b-2 border-b-[#C1C8E1] my-4 py-2 focus:outline-none placeholder:text-[#C1C8E1] placeholder:text-sm"
                />
                <label className="flex items-center mt-2 text-sm text-[#C1C8E1]">
                  <input
                    type="checkbox"
                    className="mr-2 accent-[#22c55e] focus:ring-[#22c55e] checked:text-[#fff]"
                  />
                  Keep me up to date on news and exclusive offers
                </label>
              </div>

              {/* Shipping Address */}
              <div className="pt-2">
                <h2 className="text-lg font-bold mb-4 mt-8">
                  Shipping Address
                </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First name"
                      required
                      className=" border-b-2 border-b-[#C1C8E1] py-2 focus:outline-none placeholder:text-[#C1C8E1] placeholder:text-sm my-4"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      required
                      className="border-b-2 border-b-[#C1C8E1] py-2 focus:outline-none placeholder:text-[#C1C8E1] placeholder:text-sm my-4"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Address"
                    required
                    className="w-full border-b-2 border-b-[#C1C8E1] py-2 focus:outline-none placeholder:text-[#C1C8E1] placeholder:text-sm my-4"
                  />
                  <input
                    type="text"
                    placeholder="Apartment, suite, etc. (optional)"
                    className="w-full border-b-2 border-b-[#C1C8E1] py-2 focus:outline-none placeholder:text-[#C1C8E1] placeholder:text-sm my-4"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <input
                      type="text"
                      placeholder="City"
                      required
                      className="border-b-2 border-b-[#C1C8E1] py-2 focus:outline-none placeholder:text-[#C1C8E1] placeholder:text-sm my-4"
                    />
                    <input
                      type="text"
                      placeholder="Postal Code"
                      required
                      className="border-b-2 border-b-[#C1C8E1] py-2 focus:outline-none placeholder:text-[#C1C8E1] placeholder:text-sm my-4"
                    />
                  </div>
              </div>

              {/* Continue Button */}
              <button className="bg-pink-500 text-white py-3 px-8 rounded-md font-semibold hover:bg-pink-600 transition">
                Continue Shipping
              </button>
            </form>
          </div>

          {/* Right Section: Cart Summary */}
          <div className="col-span-5 bg-white p-6 rounded-lg shadow-md">
            <div>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.slug}
                    className="flex items-center justify-between border-b border-b-gray-200"
                  >
                    <div className="flex items-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="w-16 h-16 rounded-md object-cover mr-4"
                      />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        {/* <p className="text-gray-500 text-sm">
                          Size: {item.size}
                        </p> */}
                      </div>
                    </div>
                    <p className="font-medium">${item.price}</p>
                  </div>
                ))}
              </div>

              {/* Subtotal and Total */}
              <div className="mt-6 bg-[#F4F4FC] p-4 space-y-8">
                <div className="flex justify-between border-b border-b-[#E8E6F1] py-2">
                  <p className="text-lg font-semibold">Subtotal:</p>
                  <p className="font-medium">${getTotalPrice()}</p>
                </div>
                <div className="flex justify-between border-b border-b-[#E8E6F1] py-2">
                  <p className="text-lg font-semibold">Total:</p>
                  <p className="font-medium">${total}</p>
                </div>
                <label className="flex items-center mt-2 text-sm text-[#C1C8E1]">
                  <input
                    type="checkbox"
                    className="mr-2 accent-[#22c55e] focus:ring-[#22c55e] checked:text-[#fff]"
                  />
                  Shipping & taxes calculated at checkout.
                </label>
                <Link href={""}>
                  <button
                    type="submit"
                    className="w-full mt-4 bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600 transition"
                  >
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
