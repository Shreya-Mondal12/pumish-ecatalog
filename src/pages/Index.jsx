import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';



// --- AnimatedCounter Component ---
const AnimatedCounter = ({
  target,
  suffix = '+',
  duration = 1000,
  className = '',
  label = '',
  labelClassName = '',
  labelShift = '-16px',
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    const incrementTime = Math.max(10, Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <div className="text-center">
      <span
        className={className}
        style={{ position: 'relative', top: '-25px' }}
      >
        {count}{suffix}
      </span>
      {label && (
        <div
          className={labelClassName}
          style={{ position: 'relative', top: labelShift }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

// --- Card, CardContent, Button (stub, replace with your actual components) ---


// --- Data Arrays ---
const productCategories = [
  {
    title: 'Printed Carpets',
    description: 'Premium quality carpets for complete floor coverage,crafted to bring warmth and elegance to every room.',
    image: '/carpetp.jpeg',
  },
  {
    title: 'Tote Bags',
    description: 'Stylish and eco-friendly tote bags for everyday use,designed to carry your essentials with comfort and flair.',
    image: '/totebg.jpeg',
  },
  {
    title: 'Tufted Rugs',
    description: 'Luxurious tufted rugs that add elegance to any space,crafted with premium materials for lasting comfort and style.',
    image: '/rugsbg.jpg',
  },
  {
    title: 'Hand-Tufted Cushions',
    description: 'Experience the perfect blend of artistry and comfort with our hand-tufted cushions.',
    image: 'pillo.png',
  },
  {
    title: 'Hand-Tufted Bathmats',
    description: 'Indulge in luxury with our hand-tufted bathmats, designed for comfort and style.',
    image: 'handtuftedbath.jpeg',
  },
  {
    title: 'Table-Tufted Bathmats',
    description: 'Transform your bathroom with our table-tufted bathmats, combining luxury and functionality.',
    image: 'tabletufbathbg.jpg',
  },
  {
    title: 'Woven Cushions',
    description: 'Elevate your space with our cushions,expertly crafted to deliver both comfort and charm.',
    image: '/wovenbg1.png',
  },
    {
    title: 'Woven Throws',
    description: 'Wrap yourself in warmth with our woven throws,crafted to add a touch of elegance to your home.',
    image: '/throwsbg.png',
  },
];

const cardData = [
  {
    name: "Inclusiveness",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="#E5DFBE" strokeWidth={2}>
        <circle cx="8" cy="8" r="3" />
        <circle cx="16" cy="8" r="3" />
        <path d="M2 21v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" />
        <path d="M14 21v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" />
      </svg>
      
    ),
    image:"/inclu.jpeg",
  },
  {
    name: "Women Empowerment",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="#E5DFBE" strokeWidth={2}>
        <circle cx="12" cy="8" r="5" />
        <path d="M12 13v7" />
        <path d="M9 20h6" />
      </svg>
    ),
    image:"/Women.jpeg",
  },
  {
    name: "Sustainability",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="#E5DFBE" strokeWidth={2}>
        <path d="M12 2C12 2 20 8 20 16C20 19.3137 17.3137 22 14 22C10.6863 22 8 19.3137 8 16C8 8 12 2 12 2Z" />
        <path d="M12 8V16" />
      </svg>
    ),
    image:"/sus.jpg",
  },
  {
    name: "Innovation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="#E5DFBE" strokeWidth={2}>
        <path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3.5 5.5v1a2 2 0 0 1-4 0v-1C6.5 13.5 5 11.5 5 9a7 7 0 0 1 7-7z" />
        <path d="M9 21h6" />
      </svg>
    ),
    image:"/inno.jpg",
  },
  {
    name: "Client-Centric Approach",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="#E5DFBE" strokeWidth={2}>
        <path d="M12 17l-4-4a3 3 0 1 1 4-4l4 4a3 3 0 1 1-4 4z" />
        <path d="M20 7l-2 2" />
        <path d="M4 17l2-2" />
      </svg>
    ),
    image:"/cl.jpg",
  },
  {
    name: "Trust & Credibility",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="#E5DFBE" strokeWidth={2}>
        <path d="M12 2l7 4v6c0 5-3.5 9.74-7 10-3.5-.26-7-5-7-10V6l7-4z" />
        <path d="M9 12l2 2l4-4" />

      </svg>
    ),
    image:"trust.png",
  },
];

// --- Main Page Component ---
const Index = () => {
  // Slideshow state
  const heroBgImages = [
    '/bg11.png','/bg3.png', '/bg4.jpeg', '/bg5.jpeg', '/bg1.jpeg', '/bg7.png'
  ];
  const HERO_SLIDE_DURATION = 3000;
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroBgImages.length);
    }, HERO_SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-softwhite text-navy font-aptos">
      {/* Hero Section with Slideshow */}
      <section className="relative w-full min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-navy text-white py-[44px] sm:py-[58px] md:py-16 lg:py-[120px]">
        {/* Blue overlay for tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-navy opacity-30 z-10"></div> {/* Added z-10 to overlay */}

        {/* Slideshow Images */}
        {heroBgImages.map((img, idx) => (
          <div
            key={img}
            // Use inset-0, w-full, h-full, and flex for parent div
            className={`
              absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-1000 ease-in-out
              ${idx === bgIndex ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
            style={{
              zIndex: 0,
              transition: "opacity 1.5s",
            }}
          >
            <img
              src={img}
              alt=""
              className={`w-full h-full opacity-85 transition-opacity 1.5s ${idx === bgIndex ? "animate-kenburns" : ""}`}
              draggable={false}
              style={{
                pointerEvents: "none",
                objectFit: (idx === 4 && typeof window !== 'undefined' && window.innerWidth >= 768) ? 'top center' : 'cover',
                // Optional: You can experiment with explicit width/height for 'contain' if needed
                // minWidth: (idx === 4 && typeof window !== 'undefined' && window.innerWidth >= 768) ? '100vw' : 'auto',
                // minHeight: (idx === 4 && typeof window !== 'undefined' && window.innerWidth >= 768) ? 'auto' : 'auto',
              }}
            />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute -inset-2 bg-[rgba(44,26,13,0.41)] bg-opacity-40 z-[-1]"></div>
          <div className="text-center animate-fade-in relative">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-[#cd853f] drop-shadow-xl leading-tight">
              Premium Handcrafted
              <span className="block text-[#ffe4c4] mt-2 font-bold">
                Home Furnishings
              </span>
            </h1>
            <p className="font-aptos italic text-sm sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 max-w-3xl mx-auto px-2 drop-shadow">
              Redefining home textiles with innovative and eco-friendly solutions. 
              Creating a harmonious blend of aesthetics and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link to="/products">
                <Button
                  size="lg"
                  className="
                    block mx-auto
                    px-4 sm:px-10
                    py-2 sm:py-6
                    text-base sm:text-lg
                    font-semibold
                    rounded-xl
                    shadow-xl hover:shadow-2xl
                    transition-all duration-300
                    transform hover:-translate-y-1
                    flex items-center justify-center
                    mb-2
                    bg-gradient-to-r from-[#91613e] via-[#a7713f] to-[#b37842]
                    text-white
                  "
                >
                  <span>Explore Collections</span>
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
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Counters Section */}
      <section className="bg-[#efe9d0] border-t border-b border-darkbrown py-8 ">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-around items-center gap-8">
          <div className="text-center">
            <AnimatedCounter target={4} suffix="+" className="text-4xl font-bold text-[#6b4022] " />
            <div className="text-steel -translate-y-3 text-lg font-aptos font-bold italic ">Years of Excellence</div>
          </div>
          <div className="text-center">
            <AnimatedCounter target={10} suffix="+" className="text-4xl font-bold text-[#6b4022]" />
            <div className="text-steel -translate-y-3 text-lg font-aptos font-bold italic">Client Served</div>
          </div>
          <div className="text-center">
            <AnimatedCounter target={100} suffix="%" className="text-4xl font-bold text-[#6b4022]" />
            <div className="text-steel -translate-y-3 text-lg font-aptos font-bold italic">Client Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Product Categories - Horizontal Scroll */}
      <section className="py-4 sm:py-8 md:py-12 bg-beige border-b text-darkbrown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#6b4022] mb-2 sm:mb-4">
              Our Product Categories
            </h2>
            <p className="text-sm sm:text-lg text-[rgb(139,69,19)] px-2 font-italic">
              Scroll horizontally to explore our premium collection
            </p>
          </div>
          <div className="overflow-x-auto horizontal-scroll">
            <div className="flex space-x-4 sm:space-x-6 pb-4" style={{ width: 'max-content' }}>
              {productCategories.map((category, index) => (
                <Card 
                  key={index} 
                  className="w-72 sm:w-80 flex-shrink-0 hover:shadow-lg transition-shadow duration-300 animate-fade-in bg-[rgba(183,139,85,0.56)] border border-darkbrown"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[rgb(125,70,31)]">
                      {category.title}
                    </h3>
                    <p className="text-sm sm:text-base font- italic text-[rgb(139,69,19)]">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* Core Values */}
<section className="py-8 sm:py-12 md:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#6b4022] mb-2 sm:mb-4">
        Our Core Values
      </h2>
      <p className="text-sm sm:text-lg text-[rgb(139,69,19)] px-2">
        Built on principles that drive our commitment to excellence
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg border border-darkbrown shadow-xl transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl animate-fade-in"
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        >
          {/* Proper image */}
          <img
            src={card.image}
            alt={card.name}
            className="w-full h-60 object-cover"
          />

          {/* Optional overlay */}
          <div className="absolute inset-0 bg-[#E5DFBE]/30"></div>

          {/* Icon + name in absolute center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-darkbrown rounded-full flex items-center justify-center mb-11 shadow-xl">
              {card.icon}
            </div>
            <div className="inline-block px-1 border rounded-md bg-[#E5DFBE] bg-opacity-90 shadow text-darkbrown font-semibold text-base sm:text-lg">
              {card.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Call to Action */}
      <section className="py-5 sm:py-12 md:py-16 bg-beige border text-darkbrown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#6b4022] mb-3 sm:mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 text-[rgb(139,69,19)]  px-2">
            Connect with us to explore our premium collection and discover sustainable home solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-green-500 text-beige bg-green-700 hover:bg-green-800 text-base font-semibold  hover:text-[beige] transition-all duration-300 flex items-center justify-center"
              onClick={() => window.open('https://wa.me/919896242290', '_blank')}
            >
              WhatsApp Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto  bg-[#8e7055] hover:bg-[#584130] text-[#E5DFBE] text-base font-semibold shadow transition-all duration-300 flex items-center justify-center"
              onClick={() => window.open('mailto:anshul.singh@pumishenterprises.com', '_blank')}
            >
              Send Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
