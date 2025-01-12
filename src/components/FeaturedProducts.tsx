'use client'

import Image from "next/image";
import { filterProductsByCategory } from "../../data/products";
import { Button } from "./ui/button";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const FeaturedProducts = () => {
  const {addToCart} = useCart()
  
  const featuredProducts = filterProductsByCategory("featuredProducts");
  
  return (
    <div>
      <div className="flex flex-col items-center gap-10 py-6">
        <h1 className="text-[#151875] font-sans text-4xl  font-bold text-center">
          Featured Products
        </h1>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col items-center shadow-sm shadow-gray-300">
            <div className="bg-[#F6F7FB] px-10 pt-10 pb-2">
              <div className="h-[178px]">
                <Image
                  src={"/images/image1.png"}
                  alt="Logo"
                  width={178}
                  height={178}
                />
              </div>
            </div>
            <div className="text-center flex flex-col items-center gap-3">
              <h1 className="text-[#FB2E86] text-lg font-bold">
                Cantilever chair
              </h1>
              <Image
                src={"/images/color.png"}
                alt="co"
                width={80}
                height={100}
              />
              <p className="text-[#151875]">Code - Y523201</p>
              <p className="text-[#151875]">$42.00</p>
            </div>
          </div>
          <div className="flex flex-col items-center shadow-sm shadow-gray-300">
            <div className="bg-[#F6F7FB] px-10 pt-10 pb-2">
              <div className="h-[178px]">
                <Image
                  src={"/images/image2.png"}
                  alt="Logo"
                  width={178}
                  height={178}
                />
              </div>
            </div>
            <div className="text-center flex flex-col items-center gap-3">
              <h1 className="text-[#FB2E86] text-lg font-bold">
                Cantilever chair
              </h1>
              <Image
                src={"/images/color.png"}
                alt="co"
                width={80}
                height={100}
              />
              <p className="text-[#151875]">Code - Y523201</p>
              <p className="text-[#151875]">$42.00</p>
            </div>
          </div>
          <div className="flex flex-col items-center shadow-sm shadow-gray-300">
            <div className="bg-[#F6F7FB] px-10 pt-10 pb-2">
              <div className="h-[178px]">
                <Image
                  src={"/images/image3.png"}
                  alt="Logo"
                  width={178}
                  height={178}
                />
              </div>
            </div>
            <div className="text-center flex flex-col items-center gap-3">
              <h1 className="text-[#FB2E86] text-lg font-bold">
                Cantilever chair
              </h1>
              <Image
                src={"/images/color.png"}
                alt="co"
                width={80}
                height={100}
              />
              <p className="text-[#151875]">Code - Y523201</p>
              <p className="text-[#151875]">$42.00</p>
            </div>
          </div>
          <div className="flex flex-col items-center shadow-sm shadow-gray-300">
            <div className="bg-[#F6F7FB] px-10 pt-10 pb-2">
              <div className="h-[178px]">
                <Image
                  src={"/images/image4.png"}
                  alt="Logo"
                  width={178}
                  height={178}
                />
              </div>
            </div>
            <div className="text-center flex flex-col items-center gap-3">
              <h1 className="text-[#FB2E86] text-lg font-bold">
                Cantilever chair
              </h1>
              <Image
                src={"/images/color.png"}
                alt="co"
                width={80}
                height={100}
              />
              <p className="text-[#151875]">Code - Y523201</p>
              <p className="text-[#151875]">$42.00</p>
            </div>
          </div>
        </div> */}
        <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <div
            key={product.slug}
            className="group bg-white pb-4 border rounded-xl shadow-md hover:shadow-lg transition-shadow hover:bg-[#00009D] hover:text-white relative"
          >
            {/* Image */}
            <div className=" p-16 h-72 bg-gray-100 rounded-t-lg overflow-hidden flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="w-[200px] mb-8"
              />
              <Link className="absolute bottom-36 invisible group-hover:visible" href={`/product/${product.slug}`}>
              <Button
              variant={"green"}
              
              >View Details</Button>
              </Link>
              <div onClick={()=>addToCart(product)} className="absolute top-2 left-2  space-x-2">
                <button className="p-1 bg-white rounded-full shadow hover:bg-gray-200">
                <Image
                src={"/icons/cart-b.svg"}
                alt={"heart"}
                width={24}
                height={24}
              />
                </button>
                <button className="p-1 bg-white rounded-full shadow hover:bg-gray-200">
                <Image
                src={"/icons/view.svg"}
                alt={"heart"}
                width={24}
                height={24}
              />
                </button>
                <button className="p-1 bg-white rounded-full shadow hover:bg-gray-200">
                <Image
                src={"/icons/heart-b.svg"}
                alt={"heart"}
                width={24}
                height={24}
              />
                </button>
              </div>
            </div>

            {/* Name */}
            <h3 className="mt-4 text-center text-lg font-bold text-[#F701A8] font-lato group-hover:text-white">
              {product.name}
            </h3>
            {/* Color Indicators */}
            <div className="mt-2 flex justify-center gap-1">
              <span className="w-[14px] h-1 bg-[#05E6B7] rounded-full"></span>
              <span className="w-[14px] h-1 bg-[#F701A8] rounded-full"></span>
              <span className="w-[14px] h-1 bg-[#00009D] rounded-full group-hover:bg-[#FFEAC1]"></span>
            </div>
            
            {/* Price */}
            <div className="mt-2 flex flex-col items-center justify-center ">
              <span className="text-lg font-bold">
                {product.code}
              </span>
              <span className="text-lg font-bold">
                ${product.price}.00
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
