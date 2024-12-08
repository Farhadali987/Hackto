import Image from "next/image";
import Link from "next/link";

const LatestProduct = () => {
  return (
    <div className="px-28 py-6">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-[#1A0B5B] text-4xl font-bold text-center font-sans">Latest Products</h1>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
        <Image src={"/images/image5.png"} alt="pro" width={300} height={306} />
        <Image src={"/images/image6.png"} alt="pro" width={300} height={306} />
        <Image src={"/images/image7.png"} alt="pro" width={300} height={306} />
        <Image src={"/images/image8.png"} alt="pro" width={300} height={306} />
        <Image src={"/images/image9.png"} alt="pro" width={300} height={306} />
        <Image src={"/images/image10.png"} alt="pro" width={300} height={306} />
      </div>
      <div className="w-full flex flex-col items-center justify-center py-10 gap-8">
      <h1 className="text-[#151875] font-sans font-semibold text-4xl text-center">What Shopex Offer!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center shadow-sm shadow-gray-200 p-10 gap-4">
            <Image
              src={"/images/icon1.png"}
              alt="pro"
              width={65}
              height={65}
            />
            <h1 className="text-[#151875] text-xl">24/7 Support</h1>
            <p className="text-[#1A0B5B] opacity-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
          <div className="flex flex-col items-center text-center shadow-sm shadow-gray-200 p-10 gap-4">
            <Image
              src={"/images/icon2.png"}
              alt="pro"
              width={65}
              height={65}
            />
            <h1 className="text-[#151875] text-xl">24/7 Support</h1>
            <p className="text-[#1A0B5B] opacity-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
          <div className="flex flex-col items-center text-center shadow-sm shadow-gray-200 p-10 gap-4">
            <Image
              src={"/images/icon3.png"}
              alt="pro"
              width={65}
              height={65}
            />
            <h1 className="text-[#151875] text-xl">24/7 Support</h1>
            <p className="text-[#1A0B5B] opacity-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
          <div className="flex flex-col items-center text-center shadow-sm shadow-gray-200 p-10 gap-4">
            <Image
              src={"/images/icon4.png"}
              alt="pro"
              width={65}
              height={65}
            />
            <h1 className="text-[#151875] text-xl">24/7 Support</h1>
            <p className="text-[#1A0B5B] opacity-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
