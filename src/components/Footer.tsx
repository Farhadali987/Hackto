import Image from "next/image";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="py-14 bg-[#EEEFFB] mt-6 flex justify-center">
      <div className="text-[#8A8FB9] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src={"/images/logo.png"}
            alt="Logo"
            width={70}
            height={38}
            className="mt-2"
          />
          <div className="bg-white my-6 w-[325px]">
            <input type="text" placeholder="Enter Email Address" className="outline-none px-6" />
            <Button variant={"destructive"} >Sign Up</Button>
          </div>
          <p>Contact Info</p>
          <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
        </div>
        <div>
            <h1 className="text-2xl font-semibold pb-10 text-black">Catagories</h1>
            <div className="text-[#8A8FB9] space-y-3">
                <p>Laptops & Computers</p>
                <p>Cameras & Photography</p>
                <p>Smart Phones & Tablets</p>
                <p>Video Games & Consoles</p>
                <p>Waterproof Headphones</p>
            </div>
        </div>
        <div>
            <h1 className="text-2xl font-semibold pb-10 text-black">Customer Care</h1>
            <div className="text-[#8A8FB9] space-y-3">
                <p>My Account</p>
                <p>Discount</p>
                <p>Returns</p>
                <p>Orders History</p>
                <p>Order Tracking</p>
            </div>
        </div>
        <div>
            <h1 className="text-2xl font-semibold pb-10 text-black">Pages</h1>
            <div className="text-[#8A8FB9] space-y-3">
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
