import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative  flex flex-col md:flex-row items-center bg-[#F2F0FF] px-4 sm:px-10 md:px-40">
      <div className="space-y-7 px-4 md:px-10">
      <div className="">
        <Image
          src={"/images/lamp.png"}
          alt="lamp"
          width={225}
          height={225}
          className="absolute top-0 left-0 hidden md:block"
        />
      </div>
        <p className="text-[#FB2E86]">Best Furniture For Your Castle....</p>
        <h1 className="text-4xl text-[#151875] font-sans">New Furniture Collection Trends in 2020</h1>
        <p className="text-[#8A8FB9]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <Button variant={"destructive"}>Shop Now</Button>
      </div>
      <div>
        <Image
          src={"/images/chair.png"}
          alt="chair"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default Hero;
