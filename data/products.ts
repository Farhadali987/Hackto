export interface Product {
  slug: string;
  name: string;
  price: number;
  oldPrice: number;
  code?: string;
  image: string;
  rating?: number | any;
  category: string | string[];
  isSale?: boolean;
  description?: string;
  colors?: string[];
  descruption?: string;
  quantity: number;
  size?: string[];
}

export const allProducts: Product[] = [
  {
    slug: "product1",
    name: "Vel elit euismod",
    price: 36.0,
    oldPrice: 42.0,
    code: "Y523201",
    image: "/images/image1.png",
    rating: 4,
    category: ["featuredProducts", "latestProducts"],
    quantity: 0,
    colors: ["Red", "Blue", "Green"],
    size: ["x", "xl", "2xl"],
  },
  {
    slug: "product2",
    name: "Ultrices condimentum imperdiet",
    price: 42.0,
    oldPrice: 48.0,
    code: "M523412",
    image: "/images/image2.png",
    quantity: 0,
    colors: ["Red", "Blue", "Green"],
    size: ["x", "xl", "2xl"],
    rating: 5,
    category: "featuredProducts",
  },
  {
    slug: "product3",
    name: "Vitae suspendisse sed",
    price: 26.0,
    oldPrice: 30.0,
    code: "S546201",
    image: "/images/image3.png",
    quantity: 0,
    colors: ["Red", "Blue", "Green"],
    size: ["x", "xl", "2xl"],
    rating: 3,
    category: "featuredProducts",
  },
  {
    slug: "product4",
    name: "Sed at fermentum",
    price: 23.0,
    oldPrice: 28.0,
    code: "Z623201",
    image: "/images/image4.png",
    isSale: true,
    quantity: 0,
    colors: ["Red", "Blue", "Green"],
    size: ["x", "xl", "2xl"],
    rating: 4,
    category: ["featuredProducts", "latestProducts"],
  },
  {
    slug: "product5",
    name: "Comfort Handy Craft",
    price: 42.0,
    oldPrice: 65.0,
    image: "/images/image5.png",
    rating: 4,
    quantity: 0,
    colors: ["Red", "Blue", "Green"],
    size: ["x", "xl", "2xl"],
    isSale: false,
    category: ["latestProducts"],
  },
  {
    slug: "product6",
    name: "Comfort Foam Chair",
    price: 42.0,
    oldPrice: 66.0,
    image: "/images/image6.png",
    quantity: 0,
    colors: ["Red", "Blue", "Green"],
    size: ["x", "xl", "2xl"],
    rating: 4,
    isSale: true,
    category: ["latestProducts"],
  },
  {
    slug: "product7",
    name: "Comfort Handy Craft",
    price: 42.0,
    oldPrice: 66.0,
    image: "/images/image8.png",
    quantity: 0,
    colors: ["Red", "Blue", "Green"],
    size: ["x", "xl", "2xl"],
    rating: 4,
    isSale: true,
    category: ["latestProducts", "topProducts"],
  },
  {
    slug: "product8",
    name: "Comfort Handy Craft",
    price: 42.0,
    oldPrice: 65.0,
    image: "/images/image9.png",
    quantity: 0,
    colors: ["Red", "Blue", "Green"],
    size: ["x", "xl", "2xl"],
    rating: 4,
    isSale: false,
    category: ["latestProducts"],
  },
  {
    slug: "product9",
    name: "Cantilever chair",
    quantity: 0,
    colors: ["Red", "Blue", "Green"],
    size: ["x", "xl", "2xl"],
    rating: 4,
    price: 72.0,
    oldPrice: 88.0,
    image: "/images/image9.png",
    category: ["trendingProducts"],
  },
  {
    slug: "product10",
    name: "Cantilever chair",
    quantity: 0,
    colors: ["Red", "Blue", "Green"],
    size: ["x", "xl", "2xl"],
    rating: 4,
    price: 40.0,
    oldPrice: 52.0,
    image: "/images/image12.png",
    category: ["trendingProducts"],
  },
  {
    slug: "product11",
    name: "Cantilever chair",
    quantity: 0,
    colors: ["Red", "Blue", "Green"],
    size: ["x", "xl", "2xl"],
    rating: 4,
    price: 36.0,
    oldPrice: 47.0,
    image: "/images/image11.png",
    category: ["trendingProducts", "topProducts"],
  },
  {
    slug: "product12",
    name: "Cantilever chair",
    quantity: 0,
    colors: ["Red", "Blue", "Green"],
    size: ["x", "xl", "2xl"],
    rating: 4,
    price: 22.0,
    oldPrice: 27.0,
    image: "/images/image13.png",
    category: ["topProducts"],
  },
  {
    slug: "product13",
    name: "Sampara chair",
    quantity: 0,
    colors: ["Red", "Blue", "Green"],
    size: ["x", "xl", "2xl"],
    rating: 4,
    price: 28.0,
    oldPrice: 36.0,
    image: "/images/image20.png",
    category: ["topProducts"],
  },
  {
    slug: "product14",
    name: "Vel elit euismod",
    quantity: 0,
    colors: ["Red", "Blue", "Green"],
    size: ["x", "xl", "2xl"],
    rating: 4,
    price: 32.0,
    oldPrice: 42.0,
    image: "/products/p1.png",
    category: ["shopGrid", "trendingProducts"],
  },
  {
    slug: "product15",
    name: "Ultrices condimentum imperdiet",
    quantity: 0,
    colors: ["Red", "Blue", "Green"],
    size: ["x", "xl", "2xl"],
    rating: 4,
    price: 88.0,
    oldPrice: 96.0,
    image: "/products/p2.png",
    category: ["shopGrid"],
  },
  {
    slug: "product16",
    name: "Vitae suspendisse sed",
    quantity: 0,
    colors: ["Red", "Blue", "Green"],
    size: ["x", "xl", "2xl"],
    rating: 4,
    price: 57.0,
    oldPrice: 68.0,
    image: "/products/p3.png",
    category: ["shopGrid"],
  },
  {
    slug: "product17",
    name: "Sed at fermentum",
    quantity: 0,
    colors: ["Red", "Blue", "Green"],
    size: ["x", "xl", "2xl"],
    rating: 4,
    price: 70.0,
    oldPrice: 85.0,
    image: "/products/p4.png",
    category: ["shopGrid"],
  },
  {
    slug: "product18",
    name: "Fusce pellentesque at",
    quantity: 0,
    colors: ["Red", "Blue", "Green"],
    size: ["x", "xl", "2xl"],
    rating: 4,
    price: 26.0,
    oldPrice: 42.0,
    image: "/products/p5.png",
    category: ["shopGrid"],
  },
  {
    slug: "product19",
    name: "Vestibulum magna laoreet",
    quantity: 0,
    colors: ["Red", "Blue", "Green"],
    size: ["x", "xl", "2xl"],
    rating: 4,
    price: 42.0,
    oldPrice: 53.0,
    image: "/products/p6.png",
    category: ["shopGrid"],
  },
  {
    slug: "product20",
    name: "Sollicitudin amet orci",
    quantity: 0,
    colors: ["Red", "Blue", "Green"],
    size: ["x", "xl", "2xl"],
    rating: 4,
    price: 32.0,
    oldPrice: 38.0,
    image: "/products/p7.png",
    category: ["shopGrid"],
  },
  {
    slug: "product21",
    name: "Ultrices mauris sit",
    quantity: 0,
    colors: ["Red", "Blue", "Green"],
    size: ["x", "xl", "2xl"],
    rating: 4,
    price: 26.0,
    oldPrice: 42.0,
    image: "/products/p8.png",
    category: ["shopGrid"],
  },
  {
    slug: "product22",
    name: "Accumsan tincidunt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
    price: 26.0,
    oldPrice: 52.0,
    quantity: 0,
    size: ["x", "xl", "2xl"],
    rating: 4,
    colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
    image: "/products/l1.jpg",
    category: ["shopList"],
  },
  {
    slug: "product23",
    name: "In nulla",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
    price: 26.0,
    oldPrice: 52.0,
    quantity: 0,
    size: ["x", "xl", "2xl"],
    rating: 5,
    colors: ["bg-yellow-500", "bg-blue-500", "bg-pink-500"],
    image: "/products/l2.jpg",
    category: ["shopList"],
  },
  {
    slug: "product24",
    name: "Vel sem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
    price: 26.0,
    oldPrice: 52.0,
    quantity: 0,
    size: ["x", "xl", "2xl"],
    rating: 3,
    colors: ["bg-pink-500", "bg-blue-500", "bg-yellow-500"],
    image: "/products/l3.jpg",
    category: ["shopList"],
  },
  {
    slug: "product25",
    name: "Accumsan tincidunt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
    price: 26.0,
    oldPrice: 52.0,
    quantity: 0,
    size: ["x", "xl", "2xl"],
    rating: 4,
    colors: ["bg-blue-500", "bg-yellow-500", "bg-pink-500"],
    image: "/products/l4.jpg",
    category: ["shopList"],
  },
  {
    slug: "product26",
    name: "In nulla",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
    price: 26.0,
    oldPrice: 52.0,
    quantity: 0,
    size: ["x", "xl", "2xl"],
    rating: 5,
    colors: ["bg-pink-500", "bg-yellow-500", "bg-blue-500"],
    image: "/products/l5.jpg",
    category: ["shopList"],
  },
  {
    slug: "product27",
    name: "Vel sem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
    price: 26.0,
    oldPrice: 52.0,
    quantity: 0,
    size: ["x", "xl", "2xl"],
    rating: 4,
    colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
    image: "/products/l6.jpg",
    category: ["shopList"],
  },
  {
    slug: "product28",
    name: "Dictum morbi",
    price: 26.0,
    oldPrice: 52.0,
    quantity: 0,
    size: ["x", "xl", "2xl"],
    rating: 4,
    descruption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
    image: "/images/sls1.jpg",
    category: ["shopLeftSider"],
  },
  {
    slug: "product29",
    name: "Sodales sit",
    price: 35.0,
    oldPrice: 40.0,
    quantity: 0,
    size: ["x", "xl", "2xl"],
    rating: 5,
    descruption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
    image: "/images/sls2.jpg",
    category: ["shopLeftSider"],
  },
  {
    slug: "product30",
    name: "Nibh varius",
    price: 105.0,
    oldPrice: 120.0,
    quantity: 0,
    size: ["x", "xl", "2xl"],
    rating: 4,
    descruption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
    image: "/images/sls3.jpg",
    category: ["shopLeftSider"],
  },
  {
    slug: "product31",
    name: "Mauris quis",
    price: 66.0,
    oldPrice: 75.0,
    quantity: 0,
    size: ["x", "xl", "2xl"],
    rating: 3,
    descruption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
    image: "/images/sls4.jpg",
    category: ["shopLeftSider"],
  },
  {
    slug: "product32",
    name: "Morbi sagittis",
    price: 90.0,
    oldPrice: 102.0,
    quantity: 0,
    size: ["x", "xl", "2xl"],
    rating: 5,
    descruption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
    image: "/images/sls5.jpg",
    category: ["shopLeftSider"],
  },
  {
    slug: "product33",
    name: "Ultricies venenatis",
    price: 64.0,
    oldPrice: 77.0,
    quantity: 0,
    size: ["x", "xl", "2xl"],
    rating: 4,
    descruption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
    image: "/images/sls6.jpg",
    category: ["shopLeftSider"],
  },
  {
    slug: "product34",
    name: "Scelerisque dignissim",
    price: 26.0,
    oldPrice: 52.0,
    quantity: 0,
    size: ["x", "xl", "2xl"],
    rating: 2,
    descruption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
    image: "/images/sls7.jpg",
    category: ["shopLeftSider"],
  },
];

export const filterProductsByCategory = (
  category: string
): typeof allProducts => {
  return allProducts.filter(
    (product) =>
      Array.isArray(product.category)
        ? product.category.includes(category) // Check for categories stored as arrays
        : product.category === category // Check for categories stored as strings
  );
};

// data/product.ts
export const offer = [
  {
    slug: "product35",
    name: "Duis lectus est.",
    color: "Brown",
    size: "XL",
    price: 12,
    quantity: 1,
    image: "/images/offer1.jpg",
  },
  {
    slug: "product36",
    name: "Sed placerat.",
    color: "Brown",
    size: "XL",
    price: 12,
    quantity: 1,
    image: "/images/bag1a.jpg",
  },
  {
    slug: "product37",
    name: "Netus proin.",
    color: "Brown",
    size: "XL",
    price: 12,
    quantity: 1,
    image: "/images/offer3.jpg",
  },
  {
    slug: "product38",
    name: "Platea in.",
    color: "Brown",
    size: "XL",
    price: 12,
    quantity: 1,
    image: "/images/offer4.jpg",
  },
  
];

export const blogs = [
  {
    slug: "slug40",
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    date: "11 Aug 2023",
    category: "Art",
    author: "Surf Auxion",
    image: "/images/mia.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    descruption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, ",
    headlines:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat toamk risusu”",
  },
  {
    slug: "slug41",
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    date: "8 Aug 2023",
    category: "Travel",
    author: "Jane Smith",
    image: "/images/blog4.jpg",
    excerpt:
      "Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    descruption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, ",
    headlines:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat toamk risusu”",
  },
  {
    slug: "slug42",
    title: "Cras vehicula libero sed dignissim.",
    date: "5 Aug 2023",
    category: "Lifestyle",
    author: "Emily Johnson",
    image: "/images/blog5.jpg",
    excerpt:
      "Etiam aliquet commodo elit, sed consequat sapien vehicula at. Nulla facilisi. Cras vehicula libero sed dignissim.",
    descruption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, ",
    headlines:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat toamk risusu”",
  },
  {
    slug: "slug43",
    title: "It is a long estabilished fact",
    date: "August 09 2024",
    category: "Lifestyle",
    author: "Emily Johnson",
    image: "/images/blog6.jpg",
    excerpt:
      "Etiam aliquet commodo elit, sed consequat sapien vehicula at. Nulla facilisi. Cras vehicula libero sed dignissim.",
  },
  {
    slug: "slug44",
    title: "It is a long estabilished fact",
    date: "August 09 2024",
    category: "Lifestyle",
    author: "Emily Johnson",
    image: "/images/blog7.jpg",
    excerpt:
      "Etiam aliquet commodo elit, sed consequat sapien vehicula at. Nulla facilisi. Cras vehicula libero sed dignissim.",
  },
  {
    slug: "slug45",
    title: "It is a long estabilished fact",
    date: "August 09 2024",
    category: "Lifestyle",
    author: "Emily Johnson",
    image: "/images/blog8.jpg",
    excerpt:
      "Etiam aliquet commodo elit, sed consequat sapien vehicula at. Nulla facilisi. Cras vehicula libero sed dignissim.",
  },
  {
    slug: "slug46",
    title: "It is a long estabilished fact",
    date: "August 09 2024",
    category: "Lifestyle",
    author: "Emily Johnson",
    image: "/images/blog9.jpg",
    excerpt:
      "Etiam aliquet commodo elit, sed consequat sapien vehicula at. Nulla facilisi. Cras vehicula libero sed dignissim.",
  },
  {
    slug: "slug47",
    title: "Elit ornare in enim mauris.",
    date: "August 09 2024",
    category: "Lifestyle",
    author: "Emily Johnson",
    image: "/images/sale1.jpg",
    excerpt:
      "Etiam aliquet commodo elit, sed consequat sapien vehicula at. Nulla facilisi. Cras vehicula libero sed dignissim.",
  },
  {
    slug: "slug48",
    title: "Elit ornare in enim mauris.",
    date: "August 09 2024",
    category: "Lifestyle",
    author: "Emily Johnson",
    image: "/images/sale2.jpg",
    excerpt:
      "Etiam aliquet commodo elit, sed consequat sapien vehicula at. Nulla facilisi. Cras vehicula libero sed dignissim.",
  },
  {
    slug: "slug49",
    title: "Elit ornare in enim mauris.",
    date: "August 09 2024",
    category: "Lifestyle",
    author: "Emily Johnson",
    image: "/images/sale3.jpg",
    excerpt:
      "Etiam aliquet commodo elit, sed consequat sapien vehicula at. Nulla facilisi. Cras vehicula libero sed dignissim.",
  },
  
];
export const blogProducts = [
  {
    slug: "product50",
    name: "Quam sed",
    price: 22,
    oldPrice: 28,
    rating: 4,
    image: "/images/blogProduct1.jpg"
  },
  {
    slug: "product51",
    name: "Tristique sed",
    price: 35,
    oldPrice: 40,
    rating: 4,
    image: "/images/blogProduct2.jpg"
  },
  {
    slug: "product52",
    name: "A etiam",
    price: 72,
    oldPrice: 80,
    rating: 5,
    image: "/images/blogProduct3.jpg"
  },
  {
    slug: "product53",
    name: "Mi nisi",
    price: 46,
    oldPrice: 53,
    rating: 3,
    image: "/images/blogProduct4.jpg"
  },
]

export interface CartContextType {
  cartItems: Product[];
  wishlistItems: Product[];
  addToCart: (product: Product) => void;
  addToWishlist: (product: Product) => void;
  removeFromCart: (slug: string) => void;
  removeFromWishlist: (slug: string) => void;
  clearCart: () => void;
  updateQuantity: (slug: string, quantity: number) => void;
  updateQuantityWishlist: (slug: string, quantity: number) => void;
  getTotalPrice: () => number;
  calculateShipping: (country: string, city: string) => number;
}
