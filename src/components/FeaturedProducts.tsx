import Image from "next/image";
const FeaturedProducts = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-10 py-6">
        <h1 className="text-[#151875] font-sans text-4xl  font-bold text-center">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
