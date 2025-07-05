import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Mission from "./pages/Mission";
import NotFound from "./pages/NotFound";
import ScrollToHashOrTop from "./components/ScrollToHashOrTop";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Function to hide the spinner overlay
    function hideSpinner() {
      const overlay = document.getElementById("spinner-overlay");
      if (overlay) {
        overlay.classList.add('hide');
        setTimeout(() => {
          overlay.style.display = 'none';
        }, 400); // matches CSS transition duration
      }
    }

    // Hide spinner when the window is fully loaded (including images)
    if (document.readyState === "complete") {
      hideSpinner();
    } else {
      window.addEventListener("load", hideSpinner);
      return () => window.removeEventListener("load", hideSpinner);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToHashOrTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
