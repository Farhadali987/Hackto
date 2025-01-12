import Image from "next/image";
import { blogs, offer, blogProducts } from "../../../../data/products";
import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="text-[#151875] font-sans">
      <div className="bg-[#F6F5FF] py-16 px-4 sm:px-8">
        <h1 className="text-4xl font-bold">Single Blog</h1>
        <p className="flex gap-2">
          <span>Home.</span>
          <span>Page.</span>
          <span className="text-[#FB2E86]">Single Blog</span>
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center px-6 lg:px-20 py-10">
        {/* Blog Posts Section */}
        <div className="lg:w-2/3">
          {blogs.slice(0, 1).map((blog) => (
            <div key={blog.slug} className="mb-10">
              <Image
                src={blog.image}
                alt={blog.title}
                width={870}
                height={453}
                className="w-[35rem] h-80 object-cover rounded-md"
              />
              <div className="mt-4">
                <div className="flex items-center text-sm space-x-2 sm:space-x-16">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/icons/pen.svg"
                      alt="pen"
                      width={24}
                      height={24}
                      className="w-4 h-4 object-cover rounded-md"
                    />
                    <span className="bg-[#FFE7F9] rounded text-center content-center px-4 py-0.5">
                      {blog.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/icons/calander.svg"
                      alt="calender"
                      width={24}
                      height={24}
                      className="w-4 h-4 object-cover rounded-md"
                    />
                    <span className="bg-[#FFE7F9] rounded text-center content-center px-2 sm:px-4 py-0.5">
                      {blog.date}
                    </span>
                  </div>
                  <span className="bg-[#FFE7F9] rounded text-center content-center px-2 sm:px-4 py-0.5">
                    {blog.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold mt-4">{blog.title}</h2>
                <br />
                <p className="text-[#8A8FB9]">{blog.excerpt}</p>
                <br />
                <p className="text-[#8A8FB9]">{blog.descruption}</p>
                <br />
                <p className="text-[#969CB4] bg-[#FAFAFB] p-4 leading-8 font-semibold border-l-2 border-l-[#FC45A0]">
                  <i>{blog.headlines}</i>
                </p>
              </div>
            </div>
          ))}
          <div>
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <Image
                src="/images/videoimg.jpg"
                alt="video"
                width={390}
                height={250}
                className="object-cover"
              />
              <Image
                src="/images/singleblog6.jpg"
                alt="video"
                width={390}
                height={250}
                className=" object-cover"
              />
            </div>
            <br />
            <p className="text-[#8A8FB9]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              dapibus est, nunc, montes, lacus consequat integer viverra. Sit
              morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
              posuere malesuada.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat
              integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu
              platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Velit dapibus est, nunc,{" "}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 mt-6 py-6">
            {blogProducts.map((product) => (
              <div key={product.slug}>
                <Image
                  src={product.image}
                  alt={product.slug}
                  width={210}
                  height={250}
                  className="w-full sm:w-52 object-cover rounded-md"
                />
                <h3 className="text-lg px-4 mt-4">{product.name}</h3>
                <div className="flex items-center lg:justify-between px-2 gap-2 text-sm">
                  <p>${product.price.toFixed(2)}</p>
                  <p className="line-through text-[#FF38B0]">
                    ${product.oldPrice.toFixed(2)}
                  </p>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span
                        key={index}
                        className={`${
                          index < product.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        } `}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <br />
            <p className="text-[#8A8FB9]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              dapibus est, nunc, montes, lacus consequat integer viverra. Sit
              morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
              posuere malesuada.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat
              integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu
              platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Velit dapibus est, nunc,{" "}
            </p>
            <br />
            <p className="text-[#8A8FB9]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              dapibus est, nunc, montes, lacus consequat integer viverra. Sit
              morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
              posuere malesuada.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat
              integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu
              platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Velit dapibus est, nunc,
            </p>
          </div>
          {/* social  */}
          <div className="flex justify-center py-4">
            <div className="flex items-center gap-4">
              <Link href={""}>
                <Image
                  src="/images/fb.png"
                  alt="facebook"
                  width={126}
                  height={126}
                  className="w-6 h-6 object-cover rounded-md"
                />
              </Link>
              <Link href={""}>
                <Image
                  src="/images/instagram.png"
                  alt="instagram"
                  width={126}
                  height={126}
                  className="w-6 h-6 object-cover rounded-md"
                />
              </Link>
              <Link href={""}>
                <Image
                  src="/images/twitter2.png"
                  alt="twitter"
                  width={126}
                  height={126}
                  className="w-6 h-6 object-cover rounded-md"
                />
              </Link>
            </div>
          </div>
          <div className="p-8 max-w-4xl mx-auto">
            {/* Comment Cards */}
            <div className="space-y-6 text-[#A3A2B6]">
              <div className="flex flex-col sm:flex-row items-start p-4 shadow-lg rounded-lg bg-white">
                <Image
                  src="/images/user1.jpg"
                  alt="User"
                  width={100}
                  height={100}
                  className="w-full sm:w-28 object-cover rounded-md mr-4"
                />
                <div>
                  <div className="flex items-center gap-6">
                    <h3 className="text-lg font-semibold text-[#363385]">
                      Sapien ac
                    </h3>
                    <p className="text-sm ">Jan 09 2020</p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    in vitae rutrum vulputate .
                  </p>
                  <p>consectetur</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start p-4 shadow-lg rounded-lg bg-white">
                <Image
                  src="/images/user2.jpg"
                  alt="User"
                  width={100}
                  height={100}
                  className="w-full sm:w-28 object-cover rounded-md mr-4"
                />
                <div>
                  <div className="flex items-center gap-6">
                    <h3 className="text-lg font-semibold text-[#363385]">
                      Augue conva
                    </h3>
                    <p className="text-sm">Aug 18 2020</p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    in vitae rutrum vulputate.
                  </p>
                  <p>consectetur</p>
                </div>
              </div>
            </div>

            {/* Comment Form */}
            <form className="mt-8 space-y-6 py-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex col-span-2 sm:col-span-1 gap-2 p-3 border border-[#8A8FB9] focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <Image
                    src="/icons/user2.svg"
                    alt="User"
                    width={16}
                    height={16}
                    className="w-3 h-3 object-cover rounded-md mt-1"
                  />
                  <input type="text" placeholder="Your Name*" />
                </div>
                <div className="flex col-span-2 sm:col-span-1 gap-2 p-3 border border-[#8A8FB9] focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <Image
                    src="/icons/mail.svg"
                    alt="User"
                    width={16}
                    height={16}
                    className="w-3 h-3 object-cover rounded-md mt-1"
                  />
                  <input type="email" placeholder="Write Your Email*" />
                </div>
                <div className="flex gap-2 col-span-2 p-3 border border-[#8A8FB9] focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <Image
                    src="/icons/message.svg"
                    alt="User"
                    width={16}
                    height={16}
                    className="w-3 h-3 object-cover rounded-md mt-1"
                  />
                  <textarea
                    placeholder="Write your comment*"
                    rows={4}
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="save-info" className="w-4 h-4" />
                <label htmlFor="save-info" className="text-sm">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>
            </form>

            {/* Continue Shipping Button */}
            <button className="w-full bg-pink-500 text-white py-3 rounded-md text-lg font-medium mt-6 hover:bg-pink-600 transition duration-200">
              Continue Shipping
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/4 lg:pl-10 mt-10 lg:mt-0">
          {/* Search */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Search</h3>
            <input
              type="text"
              placeholder="Search here"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Categories */}
          <div className="mb-6 ">
            <h3 className="text-lg font-bold mb-2">Categories</h3>
            <ul className=" text-[#3F509E] grid grid-cols-2 gap-2">
              <li className="hover:bg-[#F939BF] py-1 rounded-sm px-3 hover:text-white cursor-pointer">
                Women (21)
              </li>
              <li className="hover:bg-[#F939BF] py-1 rounded-sm px-3 hover:text-white cursor-pointer">
                Women (21)
              </li>
              <li className="hover:bg-[#F939BF] py-1 rounded-sm px-3 hover:text-white cursor-pointer">
                Men (15)
              </li>
              <li className="hover:bg-[#F939BF] py-1 rounded-sm px-3 hover:text-white cursor-pointer">
                Men (15)
              </li>
              <li className="hover:bg-[#F939BF] py-1 rounded-sm px-3 hover:text-white cursor-pointer">
                Kids (9)
              </li>
              <li className="hover:bg-[#F939BF] py-1 rounded-sm px-3 hover:text-white cursor-pointer">
                Kids (9)
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Recent Posts</h3>
            <ul className="space-y-2 text-[#3F509E]">
              {blogs.slice(3, 7).map((blog) => (
                <li key={blog.slug} className="flex items-center space-x-4">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={100}
                    height={100}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h4 className="text-sm font-semibold whitespace-nowrap">
                      {blog.title}
                    </h4>
                    <p className="text-sm text-[#8A8FB9]">{blog.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Sale Product*/}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Sale Product</h3>
            <ul className="space-y-2 text-[#3F509E]">
              {blogs.slice(7).map((blog) => (
                <li key={blog.slug} className="flex items-center space-x-4">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={100}
                    height={100}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h4 className="text-sm font-semibold whitespace-nowrap">
                      {blog.title}
                    </h4>
                    <p className="text-sm text-[#8A8FB9]">{blog.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Offer product  */}
          <div className="mb-6">
            <h1 className="text-lg font-bold mb-2">Offer Product</h1>
            <ul className="grid grid-cols-2 gap-4">
              {offer.map((offer) => (
                <li
                  key={offer.slug}
                  className="flex flex-col items-center space-y-2"
                >
                  <Image
                    src={offer.image}
                    alt={offer.slug}
                    width={126}
                    height={80}
                    className="w-32 h-20 object-cover rounded-md"
                  />
                  <div className="space-y-1">
                    <h4 className="text-sm text-center font-semibold whitespace-nowrap">
                      {offer.name}
                    </h4>
                    <div className="flex items-center text-sm gap-1 text-[#8A8FB9]">
                      <p>${offer.price.toFixed(2)}</p>-
                      <p>${(offer.price + 3).toFixed(2)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* social  */}
          <div className="mb-6">
            <h1 className="text-lg font-bold mb-2">Follow</h1>
            <div className="flex items-center gap-4">
              <Link href={""}>
                <Image
                  src="/images/fb.png"
                  alt="facebook"
                  width={126}
                  height={126}
                  className="w-6 h-6 object-cover rounded-md"
                />
              </Link>
              <Link href={""}>
                <Image
                  src="/images/instagram.png"
                  alt="instagram"
                  width={126}
                  height={126}
                  className="w-6 h-6 object-cover rounded-md"
                />
              </Link>
              <Link href={""}>
                <Image
                  src="/images/twitter2.png"
                  alt="twitter"
                  width={126}
                  height={126}
                  className="w-6 h-6 object-cover rounded-md"
                />
              </Link>
            </div>
          </div>
          {/* Tags */}
          <div>
            <h3 className="text-lg font-bold mb-2">Tags</h3>
            <div className="flex flex-wrap gap-4">
              {["Genral", "Atsanil", "Insas", "Bibsas", "Nulla", "Chairs"].map(
                (tag, index) => (
                  <span
                    key={index}
                    className="underline font-lato underline-offset-4 text-lg hover:text-[#FB2E86] cursor-pointer"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
