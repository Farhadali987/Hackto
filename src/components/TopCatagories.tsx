import Image from "next/image"
import { Button } from "./ui/button"

const TopCatagories = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-10 py-6 ">
        <h1 className="text-[#151875] font-sans text-4xl  font-bold text-center">
          Top Catagories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col items-center ">
            <div className="bg-[#F6F7FB] px-10 pt-10 pb-2 rounded-full">
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
          <div className="flex flex-col items-center ">
            <div className="bg-[#F6F7FB] px-10 pt-10 pb-2 rounded-full">
              <div className="h-[178px]">
                <Image
                  src={"/images/image8.png"}
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
          <div className="flex flex-col items-center ">
            <div className="bg-[#F6F7FB] px-10 pt-10 pb-2 rounded-full">
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
          <div className="flex flex-col items-center ">
            <div className="bg-[#F6F7FB] px-10 pt-10 pb-2 rounded-full">
              <div className="h-[178px]">
                <Image
                  src={"/images/image20.png"}
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
      <div className="bg-[url('/images/bg2.png')] bg-cover bg-center w-screen h-[20rem] flex flex-col items-center justify-center ">
        <div className="md:w-[35vw]  flex flex-col items-center gap-6">
            <h1 className="text-3xl text-center ">Get Leatest Update By Subscribe
            0ur Newslater</h1>
            <Button variant={"destructive"} className="py-6 px-10">Shop Now</Button>
        </div>
      </div>
    </div>
  )
}

export default TopCatagories
