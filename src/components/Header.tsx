import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <div className="font-sans">
      {/* upper Header */}
      <div className="flex items-center justify-center lg:justify-around bg-[#7E33E0] text-white">
        <div className="lg:flex items-center gap-6 hidden">
          <div className="flex items-center gap-2">
            <Image
              src={"/icons/envelope.svg"}
              alt="env"
              width={16}
              height={16}
            />
            <p>akbardal@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={"/icons/phone.svg"}
              alt="phone"
              width={16}
              height={16}
            />
            <p>(0321)3011912</p>
          </div>
        </div>
        <div className="flex items-center gap-4 py-3">
          <div className="flex items-center gap-1">
            <p>English</p>
            <Image
              src={"/icons/arrow-down.svg"}
              alt="env"
              width={16}
              height={16}
            />
          </div>
          <div className="flex items-center gap-1">
            <p>USD</p>
            <Image
              src={"/icons/arrow-down.svg"}
              alt="env"
              width={16}
              height={16}
            />
          </div>
          <div className="flex items-center gap-1">
            <p>Login</p>
            <Image src={"/icons/user.svg"} alt="env" width={16} height={16} />
          </div>
          <div className="flex items-center gap-1">
            <p>Wishlist</p>
            <Image src={"/icons/heart.svg"} alt="env" width={16} height={16} />
          </div>
          <div className="flex items-center gap-1">
            <Link href={"/cart"}>
              <Image src={"/icons/cart.svg"} alt="env" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
      {/* Header  */}
      <div className=" flex flex-col items-center py-5">
        <div className="flex items-center gap-4 sm:gap-10 md:gap-20">
          <div className="flex items-center gap-1">
            <Image src={"/images/logo.png"} alt="Logo" width={98} height={34} />
          </div>
          <div className="flex">
            <ul className="hidden lg:flex items-center space-x-8 text-[#0D0E43] font-semibold">
              <li>
                <Link
                  href={"/"}
                  className="group flex items-center gap-1 hover:text-[#FB2E86]"
                >
                  <p>Home</p>
                  <Image
                    src={"/icons/arrow-down-p.svg"}
                    alt="env"
                    width={16}
                    height={16}
                    className="invisible group-hover:visible"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={"/pages/shopgrid"}
                  className="group flex items-center gap-1 hover:text-[#FB2E86]"
                >
                  <p>Pages</p>
                  <Image
                    src={"/icons/arrow-down-p.svg"}
                    alt="env"
                    width={16}
                    height={16}
                    className="invisible group-hover:visible"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="group flex items-center gap-1 hover:text-[#FB2E86]"
                >
                  <p>Products</p>
                  <Image
                    src={"/icons/arrow-down-p.svg"}
                    alt="env"
                    width={16}
                    height={16}
                    className="invisible group-hover:visible"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={"/blog"}
                  className="group flex items-center gap-1 hover:text-[#FB2E86]"
                >
                  <p>Blog</p>
                  <Image
                    src={"/icons/arrow-down-p.svg"}
                    alt="env"
                    width={16}
                    height={16}
                    className="invisible group-hover:visible"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={"/pages/shoplist"}
                  className="group flex items-center gap-1 hover:text-[#FB2E86]"
                >
                  <p>Shop</p>
                  <Image
                    src={"/icons/arrow-down-p.svg"}
                    alt="env"
                    width={16}
                    height={16}
                    className="invisible group-hover:visible"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={"contact"}
                  className="group flex items-center gap-1 hover:text-[#FB2E86]"
                >
                  <p>Contact</p>
                  <Image
                    src={"/icons/arrow-down-p.svg"}
                    alt="env"
                    width={16}
                    height={16}
                    className="invisible group-hover:visible"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center border-2 corder-[#E7E6EF] ">
            <input type="text" className="outline-none" />
            <div className="bg-[#FB2E86] p-1">
              <Image
                src={"/icons/search.svg"}
                alt="Logo"
                width={24}
                height={24}
              />
            </div>
          </div>
          <Sheet>
            <SheetTrigger className="lg:hidden">
              <Image src={"/icons/ham.svg"} alt="env" width={16} height={16} />
            </SheetTrigger>
            <SheetContent>
              <SheetDescription>
                <ul className="flex flex-col items-center justify-around h-[60vh] text-[#0D0E43] font-semibold">
                  <li>
                    <Link
                      href={"/"}
                      className="group flex items-center gap-1 hover:text-[#FB2E86]"
                    >
                      <p>Home</p>
                      <Image
                        src={"/icons/arrow-down-p.svg"}
                        alt="env"
                        width={16}
                        height={16}
                        className="invisible group-hover:visible"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/pages/shopgrid"}
                      className="group flex items-center gap-1 hover:text-[#FB2E86]"
                    >
                      <p>Pages</p>
                      <Image
                        src={"/icons/arrow-down-p.svg"}
                        alt="env"
                        width={16}
                        height={16}
                        className="invisible group-hover:visible"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={""}
                      className="group flex items-center gap-1 hover:text-[#FB2E86]"
                    >
                      <p>Products</p>
                      <Image
                        src={"/icons/arrow-down-p.svg"}
                        alt="env"
                        width={16}
                        height={16}
                        className="invisible group-hover:visible"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/blog"}
                      className="group flex items-center gap-1 hover:text-[#FB2E86]"
                    >
                      <p>Blog</p>
                      <Image
                        src={"/icons/arrow-down-p.svg"}
                        alt="env"
                        width={16}
                        height={16}
                        className="invisible group-hover:visible"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/pages/shoplist"}
                      className="group flex items-center gap-1 hover:text-[#FB2E86]"
                    >
                      <p>Shop</p>
                      <Image
                        src={"/icons/arrow-down-p.svg"}
                        alt="env"
                        width={16}
                        height={16}
                        className="invisible group-hover:visible"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/contact"}
                      className="group flex items-center gap-1 hover:text-[#FB2E86]"
                    >
                      <p>Contact</p>
                      <Image
                        src={"/icons/arrow-down-p.svg"}
                        alt="env"
                        width={16}
                        height={16}
                        className="invisible group-hover:visible"
                      />
                    </Link>
                  </li>
                </ul>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
