import React, { useState, useEffect, useRef } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";

const productImages = {
  "printed-carpets": [
    "/carpet4.jpg",
    "/carpet3.jpg",
    "/carpet2.jpg",
    "/carpet1.jpg",
  ],
  "tote-bags": [
    "tote1.jpeg",
    "tote2.jpeg",
    "tote3.jpeg",
    "tote4.jpeg",
    "tote5.jpeg",
    "tote6.jpeg",
    "tote7.jpeg",
    "tote8.jpeg",
    "tote9.jpeg",
    "tote10.jpeg",
    "tote11.jpeg",
    "tote12.jpeg",
    "tote13.jpeg",
    "tote14.jpeg",
    "tote15.jpeg",
    "tote16.jpeg",
    "tote17.jpeg",
    "tote18.jpeg",
    "tote19.jpeg",
    "tote20.jpeg",
    "tote21.jpeg",
    "tote22.jpeg",
    "tote23.jpeg",
    "tote24.jpeg",
    "tote25.jpeg",
    "tote26.jpeg",
    "tote27.jpeg",
  ],
  "tufted-rugs": [
    "/rug1.jpeg",
    "/rug2.jpeg",
    "/rug3.jpeg",
    "/rug4.jpeg",
    "/rug5.jpeg",
    "/rug6.jpeg",
    "/rug7.jpeg",
    "/rug8.jpeg",
    "/rug9.jpeg",
    "/rug10.jpeg",
    "/rug11.jpeg",
    "/rug12.jpeg",
    "/rug13.jpeg",
    "/rug14.jpeg",
    "/rug15.jpeg",
    "/PE0014.jpg",
    "PE0010.jpg",
    "/PE005.jpg",
    "/PE009.jpg",
    "/PE0045.jpg",
    "/PE0043.jpg",
    "/PE0033.jpg",
    "/PE0039.jpg",
    "/PE0034.jpg",
    "/PE0032.jpg",
    "/PE0030.jpg",
    "/PE0028.jpg",
    "/PE0025.jpg",
    "/PE0022.jpg",
    "/PE0021.jpg",
    "PE001.jpg",
    "/PE0044.jpg",
  ],
  "handtufted-cushions": [
    "handtuf1.jpeg",
    "handtuf2.jpeg",
    "handtuf3.jpeg",
    "handtuf4.jpeg",
    "handtuf5.jpeg",
    "handtuf6.jpeg",
    "handtuf7.jpeg",
    "handtuf8.jpeg",
    "handtuf9.jpeg",
    "handtuf10.jpeg",
    "handtuf11.jpeg",
    "handtuf12.jpeg",
    "handtuf13.jpeg",
    "handtuf14.jpeg",
    "handtuf15.jpeg",
    "handtuf16.jpeg",
    "handtuf17.jpeg",
    "handtuf18.jpeg",
    "handtuf19.jpeg",
    "handtuf20.jpg",
    "woven15.jpg",
    "handtuf21.jpg",
    "woven25.jpg",
    "woven26.jpg",
    "woven33.jpg",
    "woven27.jpg",
    "woven31.jpg",
    "woven29.jpg",
    "woven30.jpg",
    "woven28.jpg",
    "woven32.jpg",
    "woven16.jpg",
  ],
  "handtufted-bathmats": [
    "handtufbath3.jpeg",
    "handtufbath4.jpeg",
    "handtufbath6.jpeg",
    "handtufbath1.jpg",
    "handtufbath5.jpeg",
    "handtufbath2.jpg",
    "handtufbath7.jpeg",
    "handtufbath8.jpeg",
    "handtufbath9.jpeg",
    "handtufbath10.jpeg",
    "handtufbath11.jpeg",
    "handtufbath12.jpeg",
  ],
  "tabletufted-bathmats": [
    "Picture1.jpg",
    "Picture4.png",
    "Picture5.jpg",
    "Picture6.jpg",
    "Picture7.jpg",
    "Picture14.png",
    "Picture4.jpg",
    "Picture27.jpg",
    "Picture19.jpg",
    "Picture24.jpg",
    "Picture25.jpg",
    "Picture26.jpg",
    "Picture28.jpg",
    "Picture29.jpg",
    "Picture30.jpg",
    "Picture31.jpg",
    "Picture32.jpg",
    "Picture35.jpg",
    "Picture36.jpg",
    "Picture37.jpg",
    "Picture38.jpg",
    "Picture39.jpg",
    "Picture40.jpg",
    "Picture41.jpg",
    "Picture42.jpg",
    "Picture43.jpg",
    "Picture44.jpg",
    "Picture45.jpg",
    "Picture46.jpg",
    "Picture47.jpg",
    ,
    "Picture18.png",
    "Picture20.png",
    "Picture23.png",
    "Picture24.png",
    "Picture25.png",
    "Picture26.png",
    "Picture35.png",
  ],
  "woven-cushions": [
    "woven5.jpg",
    "woven2.jpg",
    "woven3.jpg",
    "woven4.jpg",
    "woven1.jpg",
    "woven6.jpg",
    "woven7.jpg",
    "woven8.jpg",
    "woven9.jpg",
    "woven10.jpg",
    "woven11.jpg",
    "woven12.jpg",
    "woven17.jpg",
    "woven14.jpg",
    "woven22.jpg",
    "woven13.jpg",
    "woven18.jpg",
    "woven19.jpg",
    "woven20.jpg",
    "woven21.jpg",
    "woven23.jpg",
  ],
  "woven-throws": [
    "throws1.jpeg",
    "throws18.jpeg",
    "throws12.jpeg",
    "throws4.jpeg",
    "throws5.jpeg",
    "throws6.jpeg",
    "throws7.jpeg",
    "throws8.jpeg",
    "throws9.jpeg",
    "throws10.jpeg",
    "throws3.jpeg",
    "throws15.jpeg",
    "throws13.jpeg",
    "throws14.jpeg",
    "throws11.jpeg",
    "throws16.jpeg",
    "throws17.jpeg",
    "throws2.jpeg",
    "throws19.jpeg",
    "/throws20.jpeg",
  ],
};

const products = [
  {
    id: "printed-carpets",
    title: "Printed Carpets",
    tag: "Bestseller",
    description:
      "Explore our exquisite collection of printed carpets, designed to elevate your home decor with vibrant patterns and luxurious textures. Each piece is crafted with care, ensuring both beauty and durability.",
    features: [
      "Vibrant Patterns",
      "High-Quality Materials",
      "Durable and Easy to Clean",
      "Eco-Friendly Options",
    ],
    image: "/carpetp.jpeg",
    wa: "https://wa.me/919896242290?text=I%20am%20interested%20in%20Wall%20to%20Wall%20Carpets",
  },
  {
    id: "tote-bags",
    title: "Tote Bags",
    tag: "New Arrival",
    description:
      "Discover our stylish and eco-friendly tote bags, perfect for everyday use or special occasions. Made with sustainable materials, these bags combine functionality with modern design, making them a must-have accessory.",
    features: [
      "Eco-Friendly Materials",
      "Spacious Design",
      "Durable and Stylish",
      "Customizable Options",
    ],

    image: "/totebg.jpeg",
    wa: "https://wa.me/919896242290?text=I%20am%20interested%20in%20Tote%20Bags",
  },
  {
    id: "tufted-rugs",
    title: "Tufted Rugs",
    tag: "Heritage",
    description:
      "Transform your living space with our hand-tufted rugs, where tradition meets contemporary design. Each rug is a masterpiece, crafted by skilled artisans using sustainable materials, ensuring both beauty and durability.",
    features: [
      "Handcrafted Quality",
      "Soft and Plush",
      "Variety of Designs",
      "Sustainable Materials",
    ],

    image: "rugsbg.jpg",
    wa: "https://wa.me/919896242290?text=I%20am%20interested%20in%20Rugs%20and%20Bathmats",
  },
  {
    id: "handtufted-cushions",
    title: "Hand-Tufted Cushions",
    tag: "Popular",
    description:
      "Experience the perfect blend of artistry and comfort with our hand-tufted cushions.Each piece is meticulously crafted by skilled artisans, resulting in plush, durable cushions that add warmth and elegance to any space.",
    features: [
      "Artisan Crafted",
      "Soft and Comfortable",
      "Unique Designs",
      "Sustainable Materials",
    ],
    image: "pillo.png",
    wa: "https://wa.me/919896242290?text=I%20am%20interested%20in%20Throws%20and%20Cushions",
  },
  {
    id: "handtufted-bathmats",
    title: "Hand-Tufted Bathmats",
    tag: "Bestseller",
    description:
      "Essential textiles for modern living, including hand-tufted bathmats, crafted for durability and elegance. Each piece is designed to enhance your bathroom experience with style and comfort.",
    features: [
      "Premium Cotton",
      "Stain Resistant",
      "Modern Designs",
      "Multi-use",
    ],
    image: "handtuftedbath.jpeg",
    wa: "https://wa.me/919896242290?text=I%20am%20interested%20in%20Home%20and%20Kitchen%20Linen",
  },
  {
    id: "tabletufted-bathmats",
    title: "Table-Tufted Bathmats",
    tag: "Essential",
    description:
      "Essential textiles for modern living, including table-tufted bathmats, crafted for durability and elegance. Each piece is designed to enhance your bathroom experience with style and comfort.",
    features: [
      "Ultra-Soft Texture",
      "Stain Resistant",
      "Non-Slip Backing",
      "Fade-Resistant Colors",
    ],
    image: "Picture5.jpg",
    wa: "https://wa.me/919896242290?text=I%20am%20interested%20in%20Home%20and%20Kitchen%20Linen",
  },
  {
    id: "woven-cushions",
    title: "Woven Cushions",
    tag: "Bestseller",
    description:
      "Elevate your space with our handwoven cushions, where comfort meets craftsmanship. Each cushion is a testament to traditional weaving techniques, offering unique textures and vibrant colors that enhance any decor.",
    features: [
      " Handwoven Artistry",
      "Soft and Comfortable",
      "Unique Textures",
      "Sustainable Materials",
    ],
    image: "wovenbg1.png",
    wa: "https://wa.me/919896242290?text=I%20am%20interested%20in%20Home%20and%20Kitchen%20Linen",
  },
  {
    id: "woven-throws",
    title: "Woven Throws",
    tag: "New Arrival",
    description:
      "Elevate your space with our handwoven throws, where comfort meets craftsmanship. Each throw is a testament to traditional weaving techniques, offering unique textures and vibrant colors that enhance any decor.",
    features: [
      " Lightweight Warmth",
      "Soft and Comfortable",
      "Versatile Home Accent",
      "Breathable Natural Fibers",
    ],
    image: "throwsbg.png",
    wa: "https://wa.me/919896242290?text=I%20am%20interested%20in%20Home%20and%20Kitchen%20Linen",
  },
];

const ProductsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const modalContentRef = useRef(null);

  // Disable scroll when modal is open
  useEffect(() => {
    if (openIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#E5DFBE] text-[#584130] font-aptos">
      {/* Heading and Subheading */}
      <div className="text-center mb-2 sm:mb-4 md:mb-6 mt-0 pt-0 animate-fade-in">
        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-[#584130] mb-4 sm:mb-8 -mt-5 ">
          Product Range
        </h2>
        <p className="text-base sm:text text-[#7c6652] max-w-3xl mx-auto py-2 -mt-2 mb-4">
          Discover our comprehensive collection of handcrafted home furnishing
          items, each piece designed with meticulous attention to detail and
          sustainability.
        </p>
      </div>

      {/* Product Cards */}
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 ${
          openIndex !== null
            ? "filter blur-sm pointer-events-none select-none"
            : ""
        }`}
      >
        {products.map((product, idx) => (
          <Card
            key={product.title}
            id={product.id} // <-- For hash link scroll
            className="bg-[#f5deb3] shadow-md p-0 overflow-hidden flex flex-col md:flex-row-reverse items-center border border-[#6a4f2a]"
          >
            {/* Product Image (landscape, right side) */}
            <div
              className={`
                w-full md:w-1/2 flex-shrink-0 relative group flex items-center justify-center overflow-hidden
                ${
                  // The condition `product.image.includes("handtuftedcushions.jpeg")` was looking for a specific path.
                  // Instead, we can apply a consistent background or adjust based on image content if truly needed.
                  // For now, let's keep it simple or make the background based on the overall card.
                  // If some images have transparent backgrounds, and need a specific color, that would be different.
                  // For the sake of this issue, let's assume a consistent background or ensure it's contained.
                  "bg-[#e9dcc5] rounded-lg" // A slightly lighter, cohesive background for the image container
                }
              `}
            >
              <img
                src={product.image}
                alt={product.title}
                className={`
                  w-full
                  h-56
                  sm:h-auto
                  md:h-72
                  ${
                    product.id === "handtufted-cushions"
                      ?"object-fill"
                      : "object-cover"
                  }
                  rounded-lg 
                  transition-transform duration-500 group-hover:scale-105
                `}
                loading="lazy"
              />

              {/* Tag */}
              <span className="absolute top-4 left-4 bg-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                {product.tag}
              </span>
            </div>
            {/* Product Info */}
            <CardContent className="flex-1 flex flex-col justify-between p-6 md:p-10 w-full md:w-1/2 min-w-0">
              {" "}
              {/* Changed min-w-4 to min-w-0 for better flex shrinking */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#584130] mb-2">
                  {product.title}
                </h2>
                <p className="text-base sm:text-lg text-[#7c6652] mb-4 font- italic mt-4 ">
                  {product.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 mt-10">
                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center bg-[#E5DFBE] rounded-xl px-4 py-2 text-[#7c6652] font-bold medium text-sm border border-[#a08b6d]"
                    >
                      <span className="w-2 h-2 bg-[#a58b16] rounded-full mr-2 flex-shrink-0"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-12">
                <Button
                  className="group bg-[#7c6652] hover:bg-[#584130] text-[#E5DFBE] text-base font-semibold rounded-xl shadow transition-all duration-300 flex items-center justify-center w-full sm:w-fit"
                  onClick={() => setOpenIndex(idx)}
                >
                  <span>View Collection</span>
                  <svg
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
                <Button
                  asChild
                  className="border-emerald-600 text-[#E5DFBE] bg-green-800 hover:bg-green-700 px-8 py-3 text-base font-semibold rounded-xl shadow transition-all duration-300 flex items-center justify-center w-full sm:w-fit -mt-"
                >
                  <a
                    href={product.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.19 1.6 6.02L0 24l6.25-1.64A12.03 12.03 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zm-8.52 19.2c-1.71 0-3.38-.45-4.82-1.3l-.34-.2-3.71.97.99-3.62-.22-.37A10.07 10.07 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.47-7.59c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.65-1.57-.89-2.16-.23-.56-.47-.48-.65-.49h-.56c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26s.97 2.62 1.1 2.8c.13.18 1.91 2.92 4.62 3.98.65.28 1.16.45 1.56.57.65.21 1.24.18 1.71.11.52-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.09-.13-.27-.2-.57-.35z" />
                    </svg>
                    WhatsApp Enquiry
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {openIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={modalContentRef}
            className="bg-[#a08b6d] border-2 shadow-2xl p-6 max-w-xl w-full relative animate-fade-in max-h-[80vh] overflow-y-auto"
          >
            <button
              className="absolute top-2 right-2 text-2xl text-[#584130] hover:text-[#7c6652]"
              onClick={() => setOpenIndex(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4 text-center text-[#584130]">
              {products[openIndex].title} Collection
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full mb-2">
              {(productImages[products[openIndex].id] || []).map((img, i) => (
                <Zoom key={i}>
                  <img
                    src={img}
                    alt={`${products[openIndex].title} ${i + 1}`}
                    className="w-full h-48 object-contain rounded-lg shadow cursor-zoom-in"
                    loading="lazy"
                  />
                </Zoom>
              ))}
            </div>
            <p className="text-center text-[#4b341e]">
              {products[openIndex].description}
            </p>
            {/* Scroll Up Button at bottom right inside modal */}
            <div className="flex justify-end mt-6 mb-2">
              <button
                className="bg-[#584130] text-[#E5DFBE] rounded-full p-3 shadow-lg hover:bg-[#7c6652] transition"
                onClick={() => {
                  if (modalContentRef.current) {
                    modalContentRef.current.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }
                }}
                aria-label="Scroll to top"
              >
                ↑
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default ProductsSection;
