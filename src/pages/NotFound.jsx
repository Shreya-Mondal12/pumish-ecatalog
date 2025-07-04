import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E5DFBE] text-[#584130] font-aptos">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-[#584130]">404</h1>
        <p className="text-xl text-[#7c6652] mb-4">Oops! Page not found</p>
        <a
          href="/"
          className="text-[#584130] hover:text-[#916a32] underline font-semibold transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
