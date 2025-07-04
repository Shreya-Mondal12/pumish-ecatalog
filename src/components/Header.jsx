import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPortal } from "react-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Show header only at the very top
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Check on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Mission & Vision', href: '/mission' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`
        bg-[#E5DFBE] text-[#584130]  shadow-sm border-b border-[#a08b6d] sticky top-0 z-70
        transition-transform duration-300
        ${showHeader ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="max-w-7xl mx-auto px-3 md:pl-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center justify-start md:-ml-10">
            <Link to="/" className="flex items-center space-x">
              <img 
                src="logo.png" 
                alt="Pumish Enterprise Logo" 
                className="w-15 h-12 rounded-lg" 
              />
              <span className="text-3xl font-bold bg-gradient-to-r from-[#584130] via-[#7c6652] to-[#584130] bg-clip-text text-transparent">
                Pumish Enterprise
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors group ${
                    active
                      ? "text-[#584130]"
                      : "text-[#6f4b29] hover:text-[#5a371e]"
                  }`}
                >
                  {item.name}
                  {/* Animated underline */}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-0.5 bg-[#584130] transition-all duration-300
                      w-0 group-hover:w-full ${active ? "w-full" : ""}
                    `}
                  ></span>
                </Link>
              );
            })}
          </nav>

          {/* Hamburger Button (Mobile Only) */}
          <div className="md:hidden fixed top right-4 z-[9999]">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-[#E5DFBE] bg-opacity-95 shadow-xl border border-[#a08b6d] hover:bg-[#f7f3e2] transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-6 h-6 flex flex-col justify-around items-center">
                <span
                  className={`block w-full h-0.5 bg-[#584130] rounded transition-all duration-300
                    ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}
                  `}
                ></span>
                <span
                  className={`block w-full h-0.5 bg-[#584130] rounded transition-all duration-300
                    ${isMenuOpen ? 'opacity-0' : ''}
                  `}
                ></span>
                <span
                  className={`block w-full h-0.5 bg-[#584130] rounded transition-all duration-300
                    ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}
                  `}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (shows only when open) - PORTAL */}
      {isMenuOpen && createPortal(
        <>
          {/* Optional: Backdrop */}
          <div
            className="fixed inset-0 z-[9997] bg-[#584130] bg-opacity-30 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Half-width, corner-rounded menu */}
          <nav className="md:hidden fixed top-0 right-0 h-full w-1/2 max-w-xs z-[9998] bg-[#E5DFBE] bg-opacity-95 shadow-2xl rounded-l-3xl transition-transform duration-300 ease-out flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-[#E5DFBE] shadow-lg border border-[#a08b6d] hover:bg-[#f7f3e2] transition"
              aria-label="Close menu"
            >
              {/* SVG X Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#584130]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col space-y-4 px-4 py-6 mt-12">
              {navigation.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block transition-colors font-medium py-2 text-base ${
                      active
                        ? "text-[#584130] font-semibold"
                        : "text-[#7c6652] hover:text-[#584130]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>
        </>,
        document.body
      )}
    </header>
  );
};

export default Header;
