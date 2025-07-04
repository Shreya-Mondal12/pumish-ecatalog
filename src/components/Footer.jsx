import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#dc9c48b4] via-[#a4754bb4] to-[#dc9c48b4] text-darkbrown font-aptos">
      {/* Gradient border using darkbrown and beige */}
      <div className="h-1 w-full bg-gradient-to-r from-[#584130] via-[#7c6652] to-[#584130] shadow-lg" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 gap-x-20 md:gap-x-24 lg:gap-x-32 items-start">
          {/* Left: Company Box */}
          <div className="md:col-span-1 flex flex-col items-start space-y-4">
            {/* Logo or Initials in a box */}
            <div className="bg-[#E5DFBE] rounded-lg flex items-center justify-center w-14 h-14 mb-2 shadow">
              {/* Replace with your logo if you have one */}
              <span className="text-3xl font-bold text-[#584130]">P</span>
            </div>
            <div>
              <p className="text-sm font-medium text-[#584130]">Pumish Enterprise</p>
              <p className="text-xs mt-2 text-[#5d3b0d]">📍Panipat, Haryana, India</p>
              <p className="text-xs mt-2 text-[#5d3b0d] ">
                Phone: <a href="tel:+919896242290" className="hover:underline text-[#5d3b0d]">+91-9896242290</a>
              </p>
              <p className="text-xs mt-2 text-[#5d3b0d] font- italic">
                Email: <a href="mailto:anshul.singh@pumishenterprises.com" className="hover:underline text-[#5d3b0d]">anshul.singh@pumishenterprises.com</a>
              </p>
              <p className="text-xs mt-2 text-[#5d3b0d]font- italic">
                Email: <a href="mailto:abby@pumishenterprises.com" className="hover:underline text-[#5d3b0d]">abby@pumishenterprises.com</a>
              </p>
            </div>
            {/* Social icons */}
            <div className="flex space-x-4 mt-2">
              <a href="https://wa.me/919896242290" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg className="w-5 h-5 text-[#5d3b0d] hover:text-[#96613c]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2.003a9.993 9.993 0 0 0-8.68 15.002l-1.32 3.84a1 1 0 0 0 1.27 1.27l3.84-1.32A9.993 9.993 0 1 0 12.04 2.003zm0 2a7.993 7.993 0 1 1 0 15.986 7.993 7.993 0 0 1 0-15.986zm-4.2 5.63a.7.7 0 0 0-.7.7c0 4.12 3.36 7.48 7.48 7.48a.7.7 0 0 0 .7-.7v-1.13a.7.7 0 0 0-.7-.7c-1.02 0-2.02-.37-2.8-1.05a.7.7 0 0 0-.98.04l-.8.8a6.01 6.01 0 0 1-2.2-2.2l.8-.8a.7.7 0 0 0 .04-.98c-.68-.78-1.05-1.78-1.05-2.8v-1.13a.7.7 0 0 0-.7-.7z"/>
                </svg>
              </a>
              <a href="mailto:anshul.singh@pumishenterprises.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <svg className="w-5 h-5 text-[#5d3b0d] hover:text-[#96613c]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 text-[#584130] text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm sm:text-base hover:text-[#E5DFBE] hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm sm:text-base hover:text-[#E5DFBE] hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm sm:text-base hover:text-[#E5DFBE] hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/mission" className="text-sm sm:text-base hover:text-[#E5DFBE] hover:underline">
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm sm:text-base hover:text-[#E5DFBE] hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products List with hash links */}
          <div>
            <h3 className="font-semibold mb-3 text-[#584130] text-base sm:text-lg">Products</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <NavLink
                  to="/products#printed-carpets"
                  className="hover:text-[#E5DFBE] hover:underline transition"
                >
                  Printed Carpets
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products#tote-bags"
                  className="hover:text-[#E5DFBE] hover:underline transition"
                >
                  Tote Bags
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products#tufted-rugs"
                  className="hover:text-[#E5DFBE] hover:underline transition"
                >
                  Tufted Rugs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products#handtufted-cushions"
                  className="hover:text-[#E5DFBE] hover:underline transition"
                >
                  Hand-Tufted Cushions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products#handtufted-bathmats"
                  className="hover:text-[#E5DFBE] hover:underline transition"
                >
                  Hand-Tufted Bathmats
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products#tabletufted-bathmats"
                  className="hover:text-[#E5DFBE] hover:underline transition"
                >
                  Table-Tufted Bathmats
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products#woven-cushions"
                  className="hover:text-[#E5DFBE] hover:underline transition"
                >
                  Woven Cushions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products#woven-throws"
                  className="hover:text-[#E5DFBE] hover:underline transition"
                >
                  Woven Throws
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold mb-3 text-[#584130] text-base sm:text-lg">Address</h3>
            <div className="space-y-2 text-sm sm:text-base text-[#584130]">
              <p>Corporate Office<br />Building-1, Street-2, Shiv Nagar,📍Panipat, Haryana-132103</p>
              <p>Phone: <a href="tel:+919896242290" className="hover:underline text-[#584130]">+91-9896242290</a></p>
            </div>
          </div>
        </div>

        {/* Centered copyright */}
        <div className="mt-8 pt-4 text-center border-t border-[#584130]/60">
          <p className="text-xs sm:text-sm text-[#584130]">
            © 2025 Pumish Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
