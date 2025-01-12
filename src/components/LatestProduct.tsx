'use client'

import Image from "next/image";
import Link from "next/link";
import { filterProductsByCategory } from "../../data/products";
import { useCart } from "@/context/CartContext";

const LatestProduct = () => {
  const {addToCart} = useCart()
  const latestProducts = filterProductsByCategory("latestProducts");
  return (
    <div className="px-4 md:px-28 py-6">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-[#1A0B5B] text-4xl font-bold text-center font-sans">
          Latest Products
        </h1>
        <div>
          <ul className="flex items-center gap-8 text-[#0D0E43] font-semibold">
            <li>
              <Link
                href={""}
                className="group flex items-center gap-1 hover:text-[#FB2E86]"
              >
                <p>New Arival</p>
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="group flex items-center gap-1 hover:text-[#FB2E86]"
              >
                <p>Best Seller</p>
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="group flex items-center gap-1 hover:text-[#FB2E86]"
              >
                <p>Featured</p>
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="group flex items-center gap-1 hover:text-[#FB2E86]"
              >
                <p>Featured Offer</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {latestProducts.map((product) => (
          <div
            key={product.slug}
            className="bg-white shadow-md group rounded-lg p-4 hover:shadow-lg transition flex flex-col justify-between"
          >
            <div className="relative h-full p-6 bg-[#EEEFFB]">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full object-cover rounded-t-lg"
              />
              <div className="absolute bottom-2 left-2 flex flex-col gap-2 invisible group-hover:visible">
                <button onClick={()=>addToCart(product)} className="w-8 h-8 flex items-center justify-center p-1 bg-white rounded-full shadow hover:bg-gray-200">
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
              {product.isSale && (
                <span className="absolute top-10 left-0 bg-[#151875] text-white px-8 -rotate-45 py-1 text-xs rounded-s-3xl rounded-e-3xl rounded-se-none rounded-bl-none">
                  Sale
                </span>
              )}
            </div>
            <div className="mt-4 text-center flex items-center justify-between ">
              <h3 className="text-lg font-semibold ">{product.name}</h3>
              <div className="flex items-center text-sm gap-2 ">
                <span className="font-bold">${product.price.toFixed(2)}</span>
                {product.oldPrice && (
                  <span className="line-through text-[#FB2448]">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col items-center justify-center py-10 gap-8">
        <h1 className="text-[#151875] font-sans font-semibold text-4xl text-center">
          What Shopex Offer!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col items-center text-center shadow-sm shadow-gray-200 p-10 gap-4">
            <Image src={"/images/icon1.png"} alt="pro" width={65} height={65} />
            <h1 className="text-[#151875] text-xl">24/7 Support</h1>
            <p className="text-[#1A0B5B] opacity-30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
          <div className="flex flex-col items-center text-center shadow-sm shadow-gray-200 p-10 gap-4">
            <Image src={"/images/icon2.png"} alt="pro" width={65} height={65} />
            <h1 className="text-[#151875] text-xl">24/7 Support</h1>
            <p className="text-[#1A0B5B] opacity-30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
          <div className="flex flex-col items-center text-center shadow-sm shadow-gray-200 p-10 gap-4">
            <Image src={"/images/icon3.png"} alt="pro" width={65} height={65} />
            <h1 className="text-[#151875] text-xl">24/7 Support</h1>
            <p className="text-[#1A0B5B] opacity-30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
          <div className="flex flex-col items-center text-center shadow-sm shadow-gray-200 p-10 gap-4">
            <Image src={"/images/icon4.png"} alt="pro" width={65} height={65} />
            <h1 className="text-[#151875] text-xl">24/7 Support</h1>
            <p className="text-[#1A0B5B] opacity-30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
