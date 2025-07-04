import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashOrTop = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for the DOM to update
      setTimeout(() => {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToHashOrTop;
