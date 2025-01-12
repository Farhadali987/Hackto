import Image from "next/image";
import Link from "next/link";

// src/pages/about.tsx
const AboutPage = () => {
  return (
    <div className="text-[#101750] font-sans">
      <div className="bg-[#F6F5FF] py-16 px-4 sm:px-8">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="flex gap-2">
          <span>Home.</span>
          <span>Page.</span>
          <span className="text-[#FB2E86]">About Us</span>
        </p>
      </div>
      <div className="px-4 sm:px-8 mt-6">
        <section className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16">
          <div className=" md:w-[570px]  bg-[#2B3CAB] rounded-lg">
            <Image
              src="/images/about.jpg"
              alt="Business Meeting"
              width={800}
              height={600}
              className="rounded-lg shadow-md transform duration-300 hover:translate-x-4 hover:-translate-y-4"
            />
          </div>
          <div className="md:w-[700px] space-y-8">
            <h2 className="text-3xl font-bold mb-4">
              Know About Our Ecommerce Business, History
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              in ligula et libero sodales suscipit. Morbi arcu eros, tincidunt
              non turpis non, bibendum porttitor nisi.
            </p>
            <div>
              <Link href={"contact"}>
                <button className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-md shadow-md">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="my-16 lg:px-24 text-center flex flex-col items-center ">
          <h2 className="text-2xl md:text-4xl text-black font-bold mb-8">
            Our Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "/images/icon1.png",
                title: "Free Delivery",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
              },
              {
                icon: "/images/icon2.png",
                title: "100% Cash Back",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
              },
              {
                icon: "/images/icon3.png",
                title: "Quality Product",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
              },
              {
                icon: "/images/icon4.png",
                title: "24/7 Support",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 mx-4 flex flex-col items-center hover:border-b-2 hover:border-b-[#FF9100]"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={200}
                  height={200}
                  className="w-16 h-16"
                />

                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="my-16 text-center flex flex-col items-center">
  <h2 className="text-2xl md:text-4xl text-black font-bold mb-8">
    Our Client Say!
  </h2>
  <div className="flex justify-center items-center space-x-6">
    {[
      { name: "John Doe", title: "CEO At Webexy Digital", image: "/images/client1.jpg" },
      { name: "Selina Gomez", title: "Creative Director", image: "/images/client2.jpg" },
      { name: "Farhad ali", title: "Lead Developer", image: "/images/client3.jpg" },
    ].map((client, index) => (
      <div
        key={index}
        className="group relative flex flex-col items-center cursor-pointer"
      >
        <Image
          src={client.image}
          alt={client.name}
          width={100}
          height={100}
          className="w-20 h-20 rounded-sm object-cover shadow-md transform transition-transform duration-300 group-hover:-translate-y-3"
        />
        <div
          className="absolute top-24 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <p className="text-xl font-semibold font-lato whitespace-nowrap">{client.name}</p>
          <span className="text-sm text-[#8A8FB9] whitespace-nowrap">{client.title}</span>
        </div>
      </div>
    ))}
  </div>
  <p className="mt-24 md:w-[600px] text-[#8A8FB9]">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices
    quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed
    sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat
    praesent.
  </p>
</section>

      </div>
    </div>
  );
};

export default AboutPage;
