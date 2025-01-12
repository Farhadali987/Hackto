'use client'

import Image from "next/image";
import { filterProductsByCategory } from "../../../../data/products";
import { useCart } from "@/context/CartContext";
import { Search } from "lucide-react";
import Link from "next/link";
const filterByColor = [
  { color: "bg-[#5E37FF]", name: "Blue" },
  { color: "bg-[#FF9437]", name: "Orange" },
  { color: "bg-[#FFBF95]", name: "Brown" },
  { color: "bg-[#33D221]", name: "Green" },
  { color: "bg-[#E248FF]", name: "Purple" },
  { color: "bg-[#26CBFF]", name: "Sky" },
];

const ShopLeftSider = () => {
  const { addToCart } = useCart()
  const shopLeftSideProducts = filterProductsByCategory("shopLeftSider")
  console.log(shopLeftSideProducts);
  
  return (
    <div>
      <div className="text-[#101750] font-sans bg-[#F6F5FF] py-16 px-4 sm:px-8">
        <h1 className="text-4xl font-bold">Shop Left Sider</h1>
        <p className="flex gap-2">
          <span>Home</span>
          <span>. Page</span>
          <span className="text-[#FB2E86]">. Shop Left Sider</span>
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
      <div className="flex flex-col md:flex-row gap-8 px-4 md:px-8 py-8">
        {/* Sidebar Filters */}
        <aside className="md:w-1/4 space-y-10 text-[#7E81A2] text-base font-Lato">
          {/* Filter Section */}
          <div>
            <h2 className="font-semibold text-lg mb-4 font-sans text-[#151875]">
              Product Brand
            </h2>
            <ul className="space-y-2">
              {[
                "Coaster Furniture",
                "Fusion Dot High Fashion",
                "Unique Furniture Restor",
                "Dream Furnitture Flipping",
                "Young Repurposed",
                "Green DIY furniture",
              ].map((brand, index) => (
                <li key={index}>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    {brand}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          {/* Discount Offer */}
          <div>
            <h2 className="font-semibold text-lg mb-4 font-sans text-[#151875]">
              Discount Offer
            </h2>
            <ul className="space-y-2">
              {["20% Cashback", "5% Cashback Offer", "25% Discount Offer"].map(
                (offer, index) => (
                  <li key={index}>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="accent-[#E60584] w-4 h-4"
                      />
                      {offer}
                    </label>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Rating Item */}
          <div>
            <h2 className="font-semibold text-lg mb-4 font-sans text-[#151875]">
              Rating Item
            </h2>
            <ul className="space-y-2">
              {[5, 4, 3, 2].map((rating, index) => (
                <li key={index} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#FFCC2E] w-4 h-4" />
                  <span className="text-[#FFCC2E]">
                    {"★".repeat(rating)}
                    {"☆".repeat(5 - rating)}
                  </span>
                  ({Math.floor(Math.random() * 200)})
                </li>
              ))}
            </ul>
          </div>
          {/* Categories */}
          <div>
            <h2 className="font-semibold text-lg mb-4 font-sans text-[#151875]">
              Categories
            </h2>
            <ul className="space-y-2">
              {[
                "Prestashop",
                "Magento",
                "Bigcommerce",
                "osCommerce",
                "3dcart",
                "Bags",
                "Watches",
              ].map((category, index) => (
                <li key={index}>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="accent-[#E60584] w-4 h-4"
                    />
                    {category}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          {/* Price Filter */}
          <div>
            <h2 className="font-semibold text-lg mb-4 font-sans text-[#151875]">
              Price Filter
            </h2>
            <ul className="space-y-2">
              {[
                "$0.00-$150.00",
                "$150.00-$350.00",
                "$150.00-$504.00",
                "$450.00 +",
              ].map((range, index) => (
                <li key={index}>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="accent-[#E60584] w-4 h-4"
                    />
                    {range}
                  </label>
                </li>
              ))}
            </ul>
            <div className="flex items-center border border-gray-200 rounded-md p-2 mt-10">
              <input
                type="number"
                placeholder="$10 - $50,000"
                className="outline-none w-[calc(100%-10px)]"
              />
              <Search className="opacity-50" />
            </div>
          </div>
          {/* Color Filter */}
          <div>
            <h2 className="font-semibold text-lg mb-4 font-sans text-[#151875]">
              Filter by Color
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-2 gap-3">
              {filterByColor.map((item, index) => (
                    
                <div key={index} className="flex items-center gap-2">
                  <span
                    className={`w-4 h-4 rounded-full border border-gray-300 ${item.color}`}
                  />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Listings */}
        <section className="space-y-6">
          {shopLeftSideProducts.map((product) => (
            <div
              key={product.slug}
              className="flex lg:items-center flex-col lg:flex-row bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.name}
                width={284}
                height={200}
                className="rounded-md h-[197px]"
              />

              {/* Product Details */}
              <div className="lg:w-2/3 lg:ml-6 mt-4 lg:mt-0 text-[#111C85] font-sans">
                <div className="flex items-center gap-20">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  {/* Color Options */}
                  <div className="mt-2 flex items-start gap-1">
                    {product.colors?.map((color, index) => (
                      <span
                        key={index}
                        className={`w-3 h-3 ${color} rounded-full`}
                      ></span>
                    ))}
                  </div>
                </div>
                {/* Price and Old Price and rating */}
                <div className="mt-2 flex items-center gap-12">
                  <div className="flex items-center space-x-4 text-sm">
                    <span>${product.price}.00</span>
                    <span className="text-[#FF2AAA] line-through">
                      ${product.oldPrice}.00
                    </span>
                  </div>
                  {/* Rating */}
                  <div className="flex items-center">
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
                </div>
                <p className="mt-2 text-[#9295AA] text-base">
                  {product.descruption}
                </p>
                {/* Action Buttons */}
                <div className="mt-4 flex space-x-4">
                  <button className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300">
                    <Image
                      src={"/icons/heart-b.svg"}
                      alt={"heart"}
                      width={20}
                      height={20}
                    />
                  </button>
                  <button onClick={()=>addToCart(product)} className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300">
                    <Image
                      src={"/icons/cart-b.svg"}
                      alt={"cart"}
                      width={20}
                      height={20}
                    />
                  </button>
                  <Link href={`/product/${product.slug}`}>
                  <button className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300">
                    <Image
                      src={"/icons/view.svg"}
                      alt={"view"}
                      width={20}
                      height={20}
                      />
                  </button>
                      </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ShopLeftSider;
