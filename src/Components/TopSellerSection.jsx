import { useRef } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import png1 from "../assets/images/category/1.png";
import ProductCard from "./ui/ProductCard";

export default function TopSellers() {
  const scrollRef = useRef(null);
  const products = [
    {
      id: 1,
      title: "For Original ww38 M47 Wireless Smartwatch",
      price: 2903,
      rating: 4,
      sold: 4000,
      image: png1,
      badges: ["Free Shipping", "COD"],
    },
    {
      id: 2,
      title: "For Original ww38 M47 Wireless Smartwatch",
      price: 2903,
      rating: 4,
      sold: 4000,
      image: png1,
      badges: ["Free Shipping", "COD"],
    },
    {
      id: 3,
      title: "For Original ww38 M47 Wireless Smartwatch",
      price: 2903,
      rating: 4,
      sold: 4000,
      image: png1,
      badges: ["Free Shipping", "COD"],
    },
    {
      id: 4,
      title: "For Original ww38 M47 Wireless Smartwatch",
      price: 2903,
      rating: 4,
      sold: 4000,
      image: png1,
      badges: ["Free Shipping", "COD"],
    },
    {
      id: 5,
      title: "For Original ww38 M47 Wireless Smartwatch",
      price: 2903,
      rating: 4,
      sold: 4000,
      image: png1,
      badges: ["Free Shipping", "COD"],
    },
    {
      id: 6,
      title: "For Original ww38 M47 Wireless Smartwatch",
      price: 2903,
      rating: 4,
      sold: 4000,
      image: png1,
      badges: ["Free Shipping", "COD"],
    },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="py-5 my-10 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl pl-3 font-bold text-left mb-6">Top Sellers</h2>
      <div className="relative flex items-center">
        {/* Scroll Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 bg-white rounded-full shadow p-2 z-10 hidden md:block"
        >
          <BiArrowBack className="text-2xl" />
        </button>

        {/* Scrollable Product List */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-4 w-full"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-60 snap-center md:w-72 lg:w-80">
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Scroll Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 bg-white rounded-full shadow p-2 z-10 hidden md:block"
        >
          <RiArrowRightLine className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
