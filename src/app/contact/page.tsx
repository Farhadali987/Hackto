import Image from "next/image";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const contact = [
    {
      text: "+877-7-898-989",
      description: "Support Forum For over 24hr",
      background: "bg-[#5625DF]",
    },
    {
      text: "info@example.com",
      description: "Free standard shipping",
      background: "bg-[#FB2E86]",
    },
    {
      text: "20 Margaret St, London",
      description: "Great Britain, 3NW-98JR",
      background: "bg-[#FFB265]",
      // background: "bg-[#FFB265]",
    },
    {
      text: "20 Margaret St, London",
      description: "Great Britain, 3NW-98JR",
      background: "bg-[#1BE982]",
    },
  ];

  return (
    <div className="text-[#101750] font-sans">
      <div className="bg-[#F6F5FF] py-16 px-4 sm:px-8">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="flex gap-2">
          <span>Home</span>
          <span>. Page</span>
          <span className="text-[#FB2E86]">. Contact Us</span>
        </p>
      </div>
      <div className="px-4 md:px-8 py-10 ">
        {/* Information & Contact Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Information About Us */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Information About Us</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              in ligula et libero sodales suscipit. Morbi arcu eros, tincidunt
              non turpis non, bibendum porttitor nisi.
            </p>
            <div className="flex space-x-4">
              <div className="w-4 h-4 rounded-full bg-[#5625DF]"></div>
              <div className="w-4 h-4 rounded-full bg-[#FF27B7]"></div>
              <div className="w-4 h-4 rounded-full bg-[#37DAF3]"></div>
            </div>
          </div>

          {/* Contact Way */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Way</h2>
            <ul className="grid sm:grid-cols-2 gap-4 ">
              {contact.map((item, index) => (
                <li key={index} className="flex items-start space-x-4 py-2">
                  <div
                    className={`w-8 h-8 rounded-full ${item.background} `}
                  ></div>
                  <div>
                    <p className="font-semibold">{item.text}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Get In Touch Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded-lg px-4 py-4 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 rounded-lg px-4 py-4 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-lg px-4 py-4 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <textarea
                placeholder="Type Your Message"
                className="border border-gray-300 rounded-lg px-4 py-4 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                rows={6}
              ></textarea>
              <Button
                variant={"destructive"}
                type="submit"
                className="px-10 py-6"
              >
                Send Mail
              </Button>
            </form>
          </div>
          {/* Illustration */}
          <div>
            <Image
              src="/images/contact.png"
              alt="Contact Illustration"
              width={723}
              height={692}
              className="w-full"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
