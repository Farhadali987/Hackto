const mockProducts: Record<
  string,
  { name: string; slug: string; description: string; price: number }
> = {
  "1": {
    name: "Headphone",
    slug: "Headphone",
    description: "This is Product 1.",
    price: 100,
  },
  "2": {
    name: "Bag",
    slug: "Bag",
    description: "This is Product 2.",
    price: 200,
  },
  "3": {
    name: "Gamepad",
    slug: "Gamepad",
    description: "This is Product 3.",
    price: 300,
  },
};

export function getProductBySlug(slug: string) {
  return (
    Object.values(mockProducts).find((product) => product.slug === slug) || null
  );
}

export default mockProducts;

export const products = [
  {
    id: 1,
    name: "Vel elit euismod",
    price: "$26.00",
    oldPrice: "$42.00",
    image: "/products/p1.png",
  },
  {
    id: 2,
    name: "Ultrices condimentum imperdiet",
    price: "$26.00",
    oldPrice: "$42.00",
    image: "/products/p2.png",
  },
  {
    id: 3,
    name: "Vitae suspendisse sed",
    price: "$26.00",
    oldPrice: "$42.00",
    image: "/products/p3.png",
  },
  {
    id: 4,
    name: "Sed at fermentum",
    price: "$26.00",
    oldPrice: "$42.00",
    image: "/products/p4.png",
  },
  {
    id: 5,
    name: "Fusce pellentesque at",
    price: "$26.00",
    oldPrice: "$42.00",
    image: "/products/p5.png",
  },
  {
    id: 6,
    name: "Vestibulum magna laoreet",
    price: "$26.00",
    oldPrice: "$42.00",
    image: "/products/p6.png",
  },
  {
    id: 7,
    name: "Sollicitudin amet orci",
    price: "$26.00",
    oldPrice: "$42.00",
    image: "/products/p7.png",
  },
  {
    id: 8,
    name: "Ultrices mauris sit",
    price: "$26.00",
    oldPrice: "$42.00",
    image: "/products/p8.png",
  },
];
export const shoplist = [
  {
    id: 1,
    name: "Accumsan tincidunt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
    price: "$26.00",
    oldPrice: "$52.00",
    rating: 4,
    colors: ["bg-purple-500", "bg-yellow-500", "bg-pink-500", "bg-blue-500"],
    image: "/products/l1.jpg",
  },
  {
    id: 2,
    name: "In nulla",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
    price: "$26.00",
    oldPrice: "$52.00",
    rating: 5,
    colors: ["bg-orange-500", "bg-yellow-500", "bg-purple-500"],
    image: "/products/l2.jpg",
  },
  {
    id: 3,
    name: "Vel sem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
    price: "$26.00",
    oldPrice: "$52.00",
    rating: 5,
    colors: ["bg-yellow-500", "bg-purple-500"],
    image: "/products/l3.jpg",
  },
  {
    id: 4,
    name: "Accumsan tincidunt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
    price: "$26.00",
    oldPrice: "$52.00",
    rating: 4,
    colors: ["bg-purple-500", "bg-yellow-500", "bg-pink-500", "bg-blue-500"],
    image: "/products/l4.jpg",
  },
  {
    id: 5,
    name: "In nulla",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
    price: "$26.00",
    oldPrice: "$52.00",
    rating: 5,
    colors: ["bg-orange-500", "bg-yellow-500", "bg-purple-500"],
    image: "/products/l5.jpg",
  },
  {
    id: 6,
    name: "Vel sem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
    price: "$26.00",
    oldPrice: "$52.00",
    rating: 5,
    colors: ["bg-yellow-500", "bg-purple-500", "bg-pink-500", "bg-yellow-500", "bg-orange-500", "bg-purple-500"],
    image: "/products/l6.jpg",
  },
];

// data/product.ts
export const cartproducts = [
  {
    id: 1,
    name: "Ultricies Vulputate",
    color: "Brown",
    size: "XL",
    price: 32.0,
    quantity: 1,
    image: "/cart/cart.jpg",
  },
  {
    id: 2,
    name: "Elit Faucibus Posuere",
    color: "Brown",
    size: "XL",
    price: 32.0,
    quantity: 1,
    image: "/cart/cart5.jpg",
  },
  {
    id: 3,
    name: "Ac Vitae Vestibulum",
    color: "Brown",
    size: "XL",
    price: 32.0,
    quantity: 1,
    image: "/cart/cart2.jpg",
  },
  {
    id: 4,
    name: "Elit Massa Diam",
    color: "Brown",
    size: "XL",
    price: 32.0,
    quantity: 1,
    image: "/cart/cart3.jpg",
  },
  {
    id: 5,
    name: "Proin Pharetra Elementum",
    color: "Brown",
    size: "XL",
    price: 32.0,
    quantity: 1,
    image: "/cart/cart4.jpg",
  },
];

export const blogs = [
  {
    id: 1,
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    date: "11 Aug 2023",
    category: "Art",
    author: "John Doe",
    image: "/images/mia.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    id: 2,
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    date: "8 Aug 2023",
    category: "Travel",
    author: "Jane Smith",
    image: "/images/blog4.jpg",
    excerpt:
      "Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  },
  {
    id: 3,
    title: "Cras vehicula libero sed dignissim.",
    date: "5 Aug 2023",
    category: "Lifestyle",
    author: "Emily Johnson",
    image: "/images/blog5.jpg",
    excerpt:
      "Etiam aliquet commodo elit, sed consequat sapien vehicula at. Nulla facilisi. Cras vehicula libero sed dignissim.",
  },
];
