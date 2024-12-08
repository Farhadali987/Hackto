import Image from "next/image";

const TrendindProducts = () => {
  return (
    <div >
      <div className="flex flex-col items-center gap-10 py-6 mt-6">
        <h1 className="text-[#151875] font-sans text-4xl  font-bold text-center">
          Trending Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col items-center shadow-sm shadow-gray-300">
            <div className="bg-[#F6F7FB] px-10 pt-10 pb-2">
              <div className="h-[178px]">
                <Image
                  src={"/images/image11.png"}
                  alt="Logo"
                  width={178}
                  height={178}
                />
              </div>
            </div>
            <div className="text-center flex flex-col items-center gap-3 text-[#151875]">
              <h1 className="text-lg font-bold">Cantilever chair</h1>
              <div className="flex items-center gap-4">
                <p className="">$26.00 </p>
                <p className="opacity-30">$42.00</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center shadow-sm shadow-gray-300">
            <div className="bg-[#F6F7FB] px-10 pt-10 pb-2">
              <div className="h-[178px]">
                <Image
                  src={"/images/image12.png"}
                  alt="Logo"
                  width={178}
                  height={178}
                />
              </div>
            </div>
            <div className="text-center flex flex-col items-center gap-3 text-[#151875]">
              <h1 className="text-lg font-bold">Cantilever chair</h1>
              <div className="flex items-center gap-4">
                <p className="">$26.00 </p>
                <p className="opacity-30">$42.00</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center shadow-sm shadow-gray-300">
            <div className="bg-[#F6F7FB] px-10 pt-10 pb-2">
              <div className="h-[178px]">
                <Image
                  src={"/images/image13.png"}
                  alt="Logo"
                  width={178}
                  height={178}
                />
              </div>
            </div>
            <div className="text-center flex flex-col items-center gap-3 text-[#151875]">
              <h1 className="text-lg font-bold">Cantilever chair</h1>
              <div className="flex items-center gap-4">
                <p className="">$26.00 </p>
                <p className="opacity-30">$42.00</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center shadow-sm shadow-gray-300">
            <div className="bg-[#F6F7FB] px-10 pt-10 pb-2">
              <div className="h-[178px]">
                <Image
                  src={"/images/image14.png"}
                  alt="Logo"
                  width={178}
                  height={178}
                />
              </div>
            </div>
            <div className="text-center flex flex-col items-center gap-3 text-[#151875]">
              <h1 className="text-lg font-bold">Cantilever chair</h1>
              <div className="flex items-center gap-4">
                <p className="">$26.00 </p>
                <p className="opacity-30">$42.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col lg:flex-row justify-center gap-28 mt-10">
        <div className="flex flex-col bg-[#FFF6FB] px-4  relative">
          <h1 className="text-2xl font-semibold font-[Josefin Sans] text-[#151875]">
            23% off in all products
          </h1>
          <button className="text-[#F52B70] underline text-sm font-semibold text-start">
            Shop Now
          </button>
          <Image
            src={"/images/image15.png"}
            alt="Logo"
            width={150}
            height={178}
            className="self-end absolute top-10 right-0"
          />
        </div>
        <div className="flex flex-col bg-[#EEEFFB] p-4">
          <h1 className="text-2xl font-semibold font-[Josefin Sans] text-[#151875]">
            23% off in all products
          </h1>
          <button className="text-[#F52B70] underline text-sm font-semibold text-start">
            View Collection
          </button>
          <Image
            src={"/images/image16.png"}
            alt="Logo"
            width={178}
            height={178}
            className="self-end"
          />
        </div>
        <div className="space-y-2">
          <div className="flex  items-center ">
            <div className="bg-[#F6F7FB] p-1 ">
              <div className="">
                <Image
                  src={"/images/image17.png"}
                  alt="Logo"
                  width={50}
                  height={64}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 text-[#151875]">
              <h1 className="text-base font-bold">Executive Seat chair</h1>
              <div className="flex items-center gap-4">
                <p className="">$26.00 </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center ">
            <div className="bg-[#F6F7FB] p-1 ">
              <div className="">
                <Image
                  src={"/images/image18.png"}
                  alt="Logo"
                  width={50}
                  height={64}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 text-[#151875]">
              <h1 className="text-base font-bold">Executive Seat chair</h1>
              <div className="flex items-center gap-4">
                <p className="">$26.00 </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center ">
            <div className="bg-[#F6F7FB] p-1 ">
              <div className="">
                <Image
                  src={"/images/image19.png"}
                  alt="Logo"
                  width={50}
                  height={64}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 text-[#151875]">
              <h1 className="text-base font-bold">Executive Seat chair</h1>
              <div className="flex items-center gap-4">
                <p className="">$26.00 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendindProducts;
