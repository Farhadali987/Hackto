import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function DiscountSection() {
  return (
    <div>
      <div className="flex flex-col items-center py-16 gap-6">
        <h2 className="text-3xl font-bold text-blue-900 font-sans">Discount Item</h2>
        <div className="space-x-4 text-pink-600 font-semibold">
          <ul className="flex items-center justify-center flex-shrink-0 gap-4 sm:gap-8 text-[#0D0E43] font-semibold">
            <li>
              <Link
                href={""}
                className="group flex items-center gap-1 hover:text-[#FB2E86]"
              >
                <p>Wood Chair</p>
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="group flex items-center gap-1 hover:text-[#FB2E86]"
              >
                <p>Plastic Chair</p>
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="group flex items-center gap-1 hover:text-[#FB2E86]"
              >
                <p>Sofa Collection</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 bg-white px-8 py-12 ">
        {/* Left Section */}
        <div className=" space-y-4 ">
          <h3 className="text-2xl font-bold text-[#151875] font-sans">
            20% Discount Of All Products
          </h3>
          <h4 className="text-xl text-[#FB2E86]">Eams Sofa Compact</h4>
          <p className="text-[#B7BACB] text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Eu
            eget feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="grid grid-cols-2 gap-2   text-base text-[#B7BACB] ">
            <li>✔ Material expose like metals</li>
            <li>✔ Simple neutral colours</li>
            <li>✔ Clear lines and geometric figures</li>
            <li>✔ Material expose like metals</li>
          </ul>
          <Button variant={"destructive"} className=" px-8 py-6 ">
            Shop Now
          </Button>
        </div>
        {/* Right Section */}
        <div className=" flex items-center justify-center relative ">
          <div className="absolute bg-pink-100 rounded-full h-96 w-96"></div>
          <Image
            src="/images/image20.png" // Replace with your image path
            alt="Eams Sofa Compact"
            width={500}
            height={500}
            className="relative z-10 w-80"
          />
        </div>
      </div>
    </div>
  );
}
