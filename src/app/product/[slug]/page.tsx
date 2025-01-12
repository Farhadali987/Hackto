'use client'

import Tabs from "@/components/Tabs";
import RelatedProducts from "@/components/RelatedProducts";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { allProducts} from "../../../../data/products";

type ProductDetailsProps = {
  params: { slug: string };
};

export default function ProductDetailsPage({ params }: ProductDetailsProps) {
  const {addToCart} = useCart()
  const randomNum = Math.floor(Math.random() * 10)
console.log(randomNum);
  const product = allProducts.find((p) => p.slug ===  params.slug);

  if (!product) {
    return <div className="text-center py-20 text-2xl">Product not found</div>;
  }

  return (
    <div className="px-4 md:px-8 lg:px-20 space-y-8 font-sans text-[#151875]">
      <div className="py-10 md:py-20 space-y-2">
        <h1 className="text-2xl md:text-4xl font-bold">Product Details</h1>
        <div className="flex items-center gap-2 text-sm md:text-base">
          <Link href={"/"} className="hover:underline text-gray-500">
            Home
          </Link>
          <p className="text-gray-500">/ Pages</p>
          <p className="text-[#FB2E86] font-medium">Product Details</p>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Images Section */}
        <div className="w-full flex-1 flex flex-col-reverse md:flex-row gap-4">
          <div className="flex gap-2 md:flex-col justify-between md:py-6">
            {Array(3)
              .fill(product?.image)
              .map((img, index) => (
                <Image
                  key={index}
                  width={200}
                  height={200}
                  src={img}
                  alt={` ${product?.slug}`}
                  className="w-20 h-20 md:w-28 md:h-28 rounded-lg cursor-pointer bg-gray-200"
                />
              ))}
          </div>
          <Image
            width={600}
            height={600}
            src={product?.image || "/placeholder.png"}
            alt="Main Product"
            className="w-full md:w-3/4 h-auto md:h3/4 rounded-lg bg-gray-200 p-8"
          />
        </div>

        {/* Details Section */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{product?.name}</h1>
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={`${
                    index < product.rating ? "text-yellow-400" : "text-gray-300"
                  } text-lg`}
                >
                  ★
                </span>
              ))}
              <span className="ml-2">{`(${(randomNum+1) * product.rating})`}</span>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="text-xl font-semibold">${product?.price}.00</p>
            <p className="text-red-600 font-semibold line-through">
              ${product?.oldPrice}.00
            </p>
          </div>
          <p className="font-semibold">Color</p>
          <p className="text-[#A9ACC6] leading-7">
            High-quality plywood chair with ergonomic design. Corporis
            architecto dicta, in voluptate eius cupiditate vitae, soluta.
          </p>
          <button onClick={()=>addToCart(product)} className="font-semibold flex items-center gap-8 ">
            <p>Add to Cart</p>
            <Image
              width={20}
              height={20}
              src="/icons/heart-b.svg"
              alt="Add to Wishlist"
            />
          </button>

          <p className="font-semibold">Tags</p>
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <p className="font-semibold">Share</p>
            <Link href="#" className="hover:opacity-80">
              <Image
                width={20}
                height={24}
                src="/images/fb.png"
                alt="Facebook"
              />
            </Link>
            <Link href="#" className="hover:opacity-80">
              <Image
                width={20}
                height={24}
                src="/images/instagram.png"
                alt="Instagram"
              />
            </Link>
            <Link href="#" className="hover:opacity-80">
              <Image
                width={20}
                height={24}
                src="/images/twitter.png"
                alt="Twitter"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Tabs and Related Products */}
      <Tabs />
      <RelatedProducts />
    </div>
  );
}
