import Image from "next/image";
import { blogs, offer } from "../../../../data/products";
import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="text-[#151875] font-sans">
      <div className="bg-[#F6F5FF] py-16 px-4 sm:px-8">
        <h1 className="text-4xl font-bold">Blog Page</h1>
        <p className="flex gap-2">
          <span>Home.</span>
          <span>Page.</span>
          <span className="text-[#FB2E86]">Blog Page</span>
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center px-6 lg:px-20 py-10">
        {/* Blog Posts Section */}
        <div className="lg:w-1/2">
          {blogs.slice(0, 3).map((blog) => (
            <div key={blog.slug} className="mb-10">
              <Image
                src={blog.image}
                alt={blog.title}
                width={870}
                height={453}
                className="w-[35rem] h-80 object-cover rounded-md"
              />
              <div className="mt-4">
                <div className="flex items-center text-sm  space-x-16">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/icons/pen.svg"
                      alt="facebook"
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
                      alt="facebook"
                      width={24}
                      height={24}
                      className="w-4 h-4 object-cover rounded-md"
                    />
                    <span className="bg-[#FFE7F9] rounded text-center content-center px-4 py-0.5">
                      {blog.date}
                    </span>
                  </div>
                  <span className="bg-[#FFE7F9] rounded text-center content-center px-4 py-0.5">
                    {blog.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold mt-2">{blog.title}</h2>
                <p className="text-[#8A8FB9]">{blog.excerpt}</p>
                <a
                  href="#"
                  className="font-semibold mt-2 inline-block"
                >
                  Read More
                  <span className="text-[#FB2E86]"> •</span>
                </a>
              </div>
            </div>
          ))}
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
