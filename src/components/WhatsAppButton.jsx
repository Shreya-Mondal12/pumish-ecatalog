import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const phoneNumber = "919896242290";
const message = encodeURIComponent(
  "Hello! I'm interested in your handcrafted home furnishing products. Could you please provide more information?"
);
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

const WhatsAppButton = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only apply scroll logic on home page
    if (location.pathname === "/") {
      const onScroll = () => {
        setShow(window.scrollY > 50); // Show after scrolling 50px
      };
      window.addEventListener("scroll", onScroll);
      // Hide button at top
      setShow(window.scrollY > 50);
      return () => window.removeEventListener("scroll", onScroll);
    } else {
      // On other pages, always show
      setShow(true);
    }
  }, [location.pathname]);

  if (!show) return null;

  return (
    <div className="fixed right-4 z-50" style={{ bottom: '10px' }}>
      <button
        type="button"
        onClick={() => window.open(whatsappUrl, "_blank")}
        className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full shadow-lg flex items-center gap-2 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 relative group"
        aria-label="Chat with us on WhatsApp"
        style={{ minWidth: "40px", minHeight: "40px" }}
      >
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={22}
          height={20}
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.627 5.373-11.997 12-11.997 3.191.001 6.191 1.24 8.447 3.501 2.256 2.26 3.497 5.26 3.496 8.451-.003 6.627-5.373 11.997-12 11.997-1.99-.001-3.951-.5-5.688-1.449l-6.355 1.606zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.877.002-5.462-4.415-9.89-9.881-9.892-5.447 0-9.885 4.434-9.888 9.876-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.741-.977zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.166-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppButton;
