"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { filterProductsByCategory } from "../../data/products";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const TopCatagories = () => {
  const { addToCart } = useCart();
  const topProducts = filterProductsByCategory("topProducts");
  return (
    <div>
      <div className="flex flex-col items-center gap-10 py-6 ">
        <h1 className="text-[#151875] font-sans text-4xl  font-bold text-center">
          Top Catagories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {topProducts.map((product) => (
            <div
              key={product.slug}
              className="group flex flex-col items-center "
            >
              <div className="bg-blue-500 rounded-full">
                <div className=" relative bg-[#eaedf7] px-10 pt-10 pb-2 rounded-full transform translate-x-0 group-hover:translate-x-3 duration-300 group-hover:-translate-y-2">
                  <div className="h-[200px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={178}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                <Link
                  className="absolute bottom-4 right-[85px] invisible group-hover:visible"
                  href={`/product/${product.slug}`}
                >
                  <Button size={"sm"} variant={"green"}>View Details</Button>
                </Link>
                </div>
              </div>
              <div className="text-center flex flex-col items-center gap-3 text-[#151875]">
                <div className=" bottom-2 left-2 flex mt-4 gap-2">
                  <button
                    onClick={() => addToCart(product)}
                    className="w-8 h-8 flex items-center justify-center p-1 bg-white rounded-full shadow hover:bg-gray-200"
                  >
                    <Image
                      src={"/icons/cart-b.svg"}
                      alt={"heart"}
                      width={20}
                      height={20}
                    />
                  </button>
                  <Link
                    href={`/product/${product.slug}`}
                    className="w-8 h-8 flex items-center justify-center p-1 bg-white rounded-full shadow hover:bg-gray-200"
                  >
                    <button>
                      <Image
                        src={"/icons/view.svg"}
                        alt={"heart"}
                        width={20}
                        height={20}
                      />
                    </button>
                  </Link>
                  <button className="w-8 h-8 flex items-center justify-center p-1 bg-white rounded-full shadow hover:bg-gray-200">
                    <Image
                      src={"/icons/heart-b.svg"}
                      alt={"heart"}
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
                <h1 className="text-lg font-bold">{product.name}</h1>
                <div className="flex items-center gap-4">
                  <p className="">${product.price}.00 </p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[url('/images/bg2.png')] bg-cover bg-center w-screen h-[20rem] flex flex-col items-center justify-center ">
        <div className="md:w-[35vw]  flex flex-col items-center gap-6">
          <h1 className="text-3xl text-center ">
            Get Leatest Update By Subscribe 0ur Newslater
          </h1>
          <Button variant={"destructive"} className="py-6 px-10">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopCatagories;
