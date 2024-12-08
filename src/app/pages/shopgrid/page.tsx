import Link from "next/link";
import Image from "next/image";
import { products } from "../../../../data/products";

const ShopingGrid = () => {
  return (
    <div className="font-sans text-[#151875]">
      <div className="py-28 px-8">
        <h1 className="text-4xl font-bold">Shop Grid Default</h1>
        <div className="flex item center gap-2">
          <Link href={"/"}>Home</Link>
          <p>Pages</p>
          <p className="text-[#FB2E86]">Shoping Grid Default</p>
        </div>
      </div>
      <div className="py-4 flex flex-col lg:flex-row justify-between px-8">
       <div>
       <h1 className="text-2xl font-semibold font-[Josefin Sans] mb-2">
          Ecommerce Accesories & Fashion Item
        </h1>
        <p className="text-sm text-gray-500 mb-4">
          About 9,620 results (0.62 seconds)
        </p>
       </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Per Page */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="perPage"
              className="text-sm font-medium text-gray-700"
            >
              Per Page:
            </label>
            <input
              type="text"
              id="perPage"
              className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="sortBy"
              className="text-sm font-medium text-gray-700"
            >
              Sort By:
            </label>
            <select
              id="sortBy"
              className="p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="bestMatch">Best Match</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
          </div>

          {/* View */}
          <div className="flex items-center gap-2">
            <label htmlFor="view" className="text-sm font-medium text-gray-700">
              View:
            </label>
            <input
              type="text"
              id="view"
              className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Image */}
            <div className="relative p-4 h-48 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={200}
                className=""
              />
              <div className="absolute bottom-2 left-2 flex flex-col gap-2">
                <button className="p-2 bg-white rounded-full shadow hover:bg-gray-200">
                <Image
                src={"/icons/cart-b.svg"}
                alt={"heart"}
                width={24}
                height={24}
              />
                </button>
                <button className="p-2 bg-white rounded-full shadow hover:bg-gray-200">
                <Image
                src={"/icons/view.svg"}
                alt={"heart"}
                width={24}
                height={24}
              />
                </button>
                <button className="p-2 bg-white rounded-full shadow hover:bg-gray-200">
                <Image
                src={"/icons/heart-b.svg"}
                alt={"heart"}
                width={24}
                height={24}
              />
                </button>
              </div>
            </div>

            {/* Name */}
            <h3 className="mt-4 text-center text-lg font-medium text-gray-800">
              {product.name}
            </h3>
            {/* Color Indicators */}
            <div className="mt-2 flex justify-center gap-1">
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            </div>
            
            {/* Price */}
            <div className="mt-2 flex items-center justify-center space-x-2">
              <span className="text-lg font-bold">
                {product.price}
              </span>
              <span className="text-red-500 line-through">{product.oldPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ShopingGrid;
