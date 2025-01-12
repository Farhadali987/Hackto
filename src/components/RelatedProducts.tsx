import Image from "next/image";
import React from "react";

const RelatedProducts: React.FC = () => {
  const products = [
    { id: 1, name: "Winter Coat", image: "/images/pro1.jpg", price: 43, rating: 3, },
    { id: 2, name: "Fashion Wear", image: "/images/pro2.jpg", price: 52, rating: 4.5, },
    { id: 3, name: "Casual Wear", image: "/images/pro3.jpg", price: 65, rating: 3.5, },
    { id: 4, name: "Stylish Hat", image: "/images/pro4.jpg", price: 49, rating: 2.5, },
  ];

  return (
    <div className="text-[#151875]">
      <h2 className="text-xl font-semibold mb-4">Related Products</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <Image
              src={product.image}
              alt={product.name}
              width={270}
              height={340}
              className="w-full rounded-lg mb-2"
            />
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={`${
                    index < product.rating ? "text-yellow-400" : "text-gray-300"
                  } text-lg`}
                >
                  ★
                </span>
              ))}
              <span className="ml-2">{`(${6 * product.rating})`}</span>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
