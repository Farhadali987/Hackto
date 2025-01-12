import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const OrderCompeleted = () => {
  return (
    <div className="font-sans text-[#151875]">
      <div className="text-[#101750] font-sans bg-[#F6F5FF] py-16 px-4 sm:px-8">
        <h1 className="text-4xl font-bold">Order Compeleted</h1>
        <p className="flex gap-2">
          <span>Home</span>
          <span>. Page</span>
          <span className="text-[#FB2E86]">. Order Compeleted</span>
        </p>
      </div>
      <div className="flex justify-center items-center py-4 px-12">
        <div className="relative  flex items-center justify-center border-l border-b border-dashed border-[#D2D1D1]  px-16 pb-8">
          <Image
            src={"/images/clock.png"}
            alt="clock"
            width={90}
            height={90}
            className="absolute top-0 -left-11"
          />
          <Image
            src={"/images/checklist.png"}
            alt="checklist"
            width={70}
            height={70}
            className="absolute -bottom-7 -right-4"
          />
          <div className="max-w-2xl flex flex-col items-center justify-center text-center p-4 space-y-6">
            <Image
              src={"/images/tick.png"}
              alt="check"
              width={100}
              height={100}
            />
            <h1 className="text-3xl font-bold">Your Order Is Completed!</h1>
            <p className="text-[#8D92A7] font-semibold">
              Thank you for your order! Your order is being processed and will
              be completed within 3-6 hours. You will receive an email
              confirmation when your order is completed.
            </p>
            <Link href={"/"}>
              <Button className="py-6 px-10" variant={"destructive"}>
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCompeleted;
