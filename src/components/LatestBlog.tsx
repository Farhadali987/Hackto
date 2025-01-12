import Image from "next/image";

const Blog = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold py-10">Latest Blog</h1>
      <div className="flex flex-col items-center lg:flex-row justify-evenly p-4">
        <div className="group p-4">
          <div className="space-y-4">
            <Image
              src={"/images/blog1.jpg"}
              alt="blog"
              width={370}
              height={225}
              className="rounded-lg transform scale-100 group-hover:scale-105 duration-300"
            />
            <div className="flex gap-10 ">
              <div className="flex gap-2">
                <Image
                  src={"/icons/pen.svg"}
                  alt="pen"
                  width={15}
                  height={15}
                  className="rounded-lg"
                />
                <p>Saber Ali</p>
              </div>
              <div className="flex gap-2">
                <Image
                  src={"/icons/calander.svg"}
                  alt="pen"
                  width={15}
                  height={15}
                  className="rounded-lg"
                />
                <p>Saber Ali</p>
              </div>
            </div>
            <h1 className="text-lg font-bold group-hover:text-[#FB2E86]">
              Top esssential Trends in 2021
            </h1>
            <p className="text-[#72718F]">
              More off this less hello samlande lied much <br />
              over tightly circa horse taped mightly
            </p>
            <button className="border-b-2 border-b-[#151875] text-[#151875] group-hover:text-[#FB2E86] group-hover:border-b-[#FB2E86]">
              Read More
            </button>
          </div>
        </div>
        <div className="group p-4">
          <div className="space-y-4">
            <Image
              src={"/images/blog2.jpg"}
              alt="blog"
              width={370}
              height={225}
              className="rounded-lg transform scale-100 group-hover:scale-105 duration-300"
            />
            <div className="flex gap-10 ">
              <div className="flex gap-2">
                <Image
                  src={"/icons/pen.svg"}
                  alt="pen"
                  width={15}
                  height={15}
                  className="rounded-lg"
                />
                <p>Saber Ali</p>
              </div>
              <div className="flex gap-2">
                <Image
                  src={"/icons/calander.svg"}
                  alt="pen"
                  width={15}
                  height={15}
                  className="rounded-lg"
                />
                <p>Mudsir Ali</p>
              </div>
            </div>
            <h1 className="text-lg font-bold group-hover:text-[#FB2E86]">
              Top esssential Trends in 2021
            </h1>
            <p className="text-[#72718F]">
              More off this less hello samlande lied much <br />
              over tightly circa horse taped mightly
            </p>
            <button className="border-b-2 border-b-[#151875] text-[#151875] group-hover:text-[#FB2E86] group-hover:border-b-[#FB2E86]">
              Read More
            </button>
          </div>
        </div>
        <div className="group p-4">
          <div className="space-y-4">
            <Image
              src={"/images/blog3.jpg"}
              alt="blog"
              width={370}
              height={225}
              className="rounded-lg transform scale-100 group-hover:scale-105 duration-300"
            />
            <div className="flex gap-10 ">
              <div className="flex gap-2">
                <Image
                  src={"/icons/pen.svg"}
                  alt="pen"
                  width={15}
                  height={15}
                  className="rounded-lg"
                />
                <p>Ayaz Ali Laghari</p>
              </div>
              <div className="flex gap-2">
                <Image
                  src={"/icons/calander.svg"}
                  alt="pen"
                  width={15}
                  height={15}
                  className="rounded-lg"
                />
                <p>Farhad</p>
              </div>
            </div>
            <h1 className="text-lg font-bold group-hover:text-[#FB2E86]">
              Top esssential Trends in 2021
            </h1>
            <p className="text-[#72718F]">
              More off this less hello samlande lied much <br />
              over tightly circa horse taped mightly
            </p>
            <button className="border-b-2 border-b-[#151875] text-[#151875] group-hover:text-[#FB2E86] group-hover:border-b-[#FB2E86]">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
