import Image from "next/image";

// src/pages/about.tsx
const AboutPage = () => {
  return (
    <div className="px-6 lg:px-20 py-10">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div>
          <Image
            src="/images/about.jpg"
            alt="Business Meeting"
            width={800}
            height={800}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Know About Our Ecommerce Business, History
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
            ligula et libero sodales suscipit. Morbi arcu eros, tincidunt non
            turpis non, bibendum porttitor nisi.
          </p>
          <button className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-md shadow-md">
            Contact Us
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="my-16 text-center">
        <h2 className="text-2xl font-bold mb-8">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "/images/icon1.png",
              title: "Free Delivery",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing.",
            },
            {
              icon: "/images/icon2.png",
              title: "100% Cash Back",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing.",
            },
            {
              icon: "/images/icon3.png",
              title: "Quality Product",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing.",
            },
            {
              icon: "/images/icon4.png",
              title: "24/7 Support",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-md hover:shadow-lg flex flex-col items-center"
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
      <section className="my-16 text-center">
        <h2 className="text-2xl font-bold mb-8">Our Client Say!</h2>
        <div className="flex justify-center items-center space-x-6">
          {[
            { name: "Selina Gomez", image: "/images/client1.jpg" },
            { name: "John Doe", image: "/images/client2.jpg" },
            { name: "akbar", image: "/images/client3.png" },
          ].map((client, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={client.image}
                alt={client.name}
                width={500}
                height={500}
                className="w-16 h-16 rounded-full object-cover shadow-md mb-2"
              />
              <p className="text-gray-800 font-semibold">{client.name}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non odio
          eleifend nisl sollicitudin aliquet ut non felis.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
