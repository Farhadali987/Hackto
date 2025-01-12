'use client'

import Image from "next/image";
import { filterProductsByCategory } from "../../../../data/products";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

const ShopList = () => {
  const {addToCart} = useCart()
  const shopListProducts = filterProductsByCategory("shopList");
  return (
    <div className="font-sans text-[#151875]">
      <div className="text-[#101750] font-sans bg-[#F6F5FF] py-16 px-4 sm:px-8">
        <h1 className="text-4xl font-bold">Shoping List</h1>
        <p className="flex gap-2">
          <span>Home</span>
          <span>. Page</span>
          <span className="text-[#FB2E86]">. Shoping List</span>
        </p>
      </div>
      <div className="py-4 flex flex-col lg:flex-row justify-between px-8 text-[#3F509E]">
        <div>
          <h1 className="text-2xl font-semibold mb-2 text-[#151875]">
            Ecommerce Accesories & Fashion Item
          </h1>
          <p className="text-sm mb-4">About 9,620 results (0.62 seconds)</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Per Page */}
          <div className="flex items-center gap-2">
            <label htmlFor="perPage" className="text-sm font-medium">
              Per Page:
            </label>
            <input
              type="text"
              id="perPage"
              className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2">
            <label htmlFor="sortBy" className="text-sm font-medium">
              Sort By:
            </label>
            <select
              id="sortBy"
              className="p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="bestMatch">Best Match</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
          </div>

          {/* View */}
          <div className="flex items-center gap-2">
            <label htmlFor="view" className="text-sm font-medium">
              View:
            </label>
            <Image
              src={"/icons/squires.svg"}
              alt={"squires"}
              width={12}
              height={12}
            />
            <Image
              src={"/icons/fa-solid_list.svg"}
              alt={"squires"}
              width={12}
              height={12}
            />
            <input
              type="text"
              id="view"
              className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="space-y-6">
          {shopListProducts.map((product) => (
            <div
              key={product.slug}
              className="flex flex-col lg:flex-row bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <div className="lg:w-1/3 flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={400}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              {/* Product Details */}
              <div className="lg:w-2/3 lg:ml-6 mt-4 lg:mt-0">
                <div className="w-96 flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  {/* Color Options */}
                  <div className="mt-2 flex gap-1">
                    {product.colors?.map((color, index) => (
                      <span
                        key={index}
                        className={`w-3 h-3 ${color} rounded-full`}
                      ></span>
                    ))}
                  </div>
                </div>
                {/* Price and Old Price */}
                <div className="mt-4 flex items-center space-x-2">
                  <span className=" text-lg font-bold">${product.price.toFixed(2)}</span>
                  <span className="text-red-500 line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                </div>
                <p className="mt-2 text-gray-600 w-96">{product.description}</p>

                {/* Rating */}
                <div className="mt-2 flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={`${
                        index < product.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      } text-lg`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex space-x-4">
                  <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300">
                    <Image
                      src={"/icons/heart-b.svg"}
                      alt={"heart"}
                      width={24}
                      height={24}
                    />
                  </button>
                  <button onClick={()=>addToCart(product)} className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300">
                    <Image
                      src={"/icons/cart-b.svg"}
                      alt={"cart"}
                      width={24}
                      height={24}
                    />
                  </button>
                  <Link href={`/product/${product.slug}`}>
                    <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300">
                      <Image
                        src={"/icons/view.svg"}
                        alt={"view"}
                        width={24}
                        height={24}
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopList;
