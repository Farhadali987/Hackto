import Image from "next/image";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="py-14 bg-[#EEEFFB] mt-6 flex justify-center">
      <div className="text-[#8A8FB9] grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 w-full px-6 lg:px-20">
        {/* Logo and Contact Section */}
        <div>
          <Image
            src={"/images/logo.png"}
            alt="Logo"
            width={70}
            height={38}
            className="mt-2"
          />
          <div className="bg-white flex items-center my-6 w-full max-w-[325px] rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="outline-none px-4 py-2 flex-grow text-sm w-[calc(100%-80px)]"
            />
            <Button variant="destructive" className="px-4 py-2 text-sm">
              Sign Up
            </Button>
          </div>
          <p className="text-sm font-semibold">Contact Info</p>
          <p className="text-sm mt-2">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        {/* Categories Section */}
        <div>
          <h1 className="text-lg font-semibold pb-6 text-black">Categories</h1>
          <div className="space-y-3">
            <p>Laptops & Computers</p>
            <p>Cameras & Photography</p>
            <p>Smart Phones & Tablets</p>
            <p>Video Games & Consoles</p>
            <p>Waterproof Headphones</p>
          </div>
        </div>

        {/* Customer Care Section */}
        <div>
          <h1 className="text-lg font-semibold pb-6 text-black">Customer Care</h1>
          <div className="space-y-3">
            <p>My Account</p>
            <p>Discount</p>
            <p>Returns</p>
            <p>Orders History</p>
            <p>Order Tracking</p>
          </div>
        </div>

        {/* Pages Section */}
        <div>
          <h1 className="text-lg font-semibold pb-6 text-black">Pages</h1>
          <div className="space-y-3">
            <p>Blog</p>
            <p>Browse the Shop</p>
            <p>Category</p>
            <p>Pre-Built Pages</p>
            <p>Visual Composer Elements</p>
            <p>WooCommerce Pages</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
