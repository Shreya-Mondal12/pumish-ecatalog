import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen py-4 sm:py-6 md:py-8 bg-[#E5DFBE] text-[#584130] font-aptos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-8 md:mb-10 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-[#584130] mb-4 sm:mb-8">
            About Us
          </h1>
          <p className="text-base sm:text text-[#7c6652] max-w-3xl mx-auto px-2">
            A leading manufacturer of superior quality handcrafted home furnishing items, 
            committed to redefining home textiles through innovation and sustainability.
          </p>
        </div>

        {/* Company Story with card-like box styling */}
        <section className="mb-8 sm:mb-12 md:mb-16 px-2 sm:px-4 md:px-8 mt-0">
          <div className="bg-[#f5deb3] rounded-2xl shadow-lg p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start h-100">
            <div className="animate-fade-in self-start">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#584130] mb-4 sm:mb-6">Our Story</h2>
              <p className="text-lg text-[rgb(139,69,19)] mb-6">
                Based in Panipat, India, Pumish Enterprise has established itself as a trusted name 
                in the global home textiles market. Our journey began with a simple vision: to create 
                beautiful, sustainable home furnishings that enhance living spaces while respecting 
                our environment.
              </p>
              <p className="text-lg text-[rgb(139,69,19)]">
                Today, we serve retail clients, big box retailers, interior designers, and corporate 
                office buyers internationally, maintaining our commitment to quality, sustainability, 
                and innovation in every product we create.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="Panipat.jpg"
                alt="Our workspace"
                className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md h-auto border-2 border-[#a08b6d]"
                style={{ animationDelay: '0.2s' }}
              />
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-8 sm:mb-12 md:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#584130] mb-2 sm:mb-4">Our Core Values</h2>
            <p className="text-base sm:text-lg text-[#7c6652] px-2">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: 'Inclusiveness',
                description: 'We believe in creating opportunities for everyone, fostering an inclusive environment that values diversity.'
              },
              {
                title: 'Women Empowerment',
                description: 'Our commitment to empowering women through employment and skill development programs.'
              },
              {
                title: 'Sustainability',
                description: 'Environmental responsibility is at the core of our operations, from sourcing to manufacturing.'
              },
              {
                title: 'Innovation',
                description: 'Continuously pushing boundaries to create products that meet evolving customer needs.'
              },
              {
                title: 'Client-Centric Approach',
                description: 'Your satisfaction is our priority. We work closely with clients to exceed expectations.'
              },
              {
                title: 'Trust & Credibility',
                description: 'Building long-term relationships through transparency, reliability, and consistent quality.'
              }
            ].map((value, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-shadow animate-fade-in bg-[#f5deb3] border border-[#a08b6d]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#584130] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[rgb(139,69,19)] font- italic">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Global Reach */}
        <section className="mb-16 bg-[#f5deb3] rounded-lg p-8 border border-[#a08b6d]">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#584130] mb-4">Global Reach</h2>
            <p className="text-lg text-[#7c6652]">
              Serving customers worldwide with premium home textiles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#ab6c15] via-[#815730] to-[#584130] bg-clip-text text-transparent animate-pulse mb-2">4+</div>
              <div className="text-[rgb(139,69,19)] font-bold italics">Years of Excellence</div>
            </div>
           <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#ab6c15] via-[#7c6652] to-[#584130] bg-clip-text text-transparent animate-pulse mb-2">
                10+
              </div>
              <div className="text-[rgb(139,69,19)] font-bold italics">Clients Served</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#ab6c15] via-[#7c6652] to-[#584130] bg-clip-text text-transparent animate-pulse mb-2">100%</div>
              <div className="text-[rgb(139,69,19)] font-bold italics">Happy Clients</div>
            </div>
          </div>
        </section>

        {/* Sustainability Commitment with card-like box and glow effect */}
        <section className="my-12">
          <div className="relative bg-[#f5deb3] rounded-2xl shadow-lg p-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-zoom-in transition-transform duration-300 ease-in-out h-100">
            <div>
              <img
                src="eco.jpg"
                alt="Sustainability"
                className="rounded-lg shadow-lg w-full h-auto border-2 border-[#a08b6d]"
              />
            </div>
            <div style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold text-[#584130] mb-6">
                Sustainability & Social Responsibility
              </h2>
              <p className="text-lg text-[rgb(139,69,19)] mb-6">
                We are committed to reducing our carbon footprint through sustainable 
                green manufacturing processes. Our eco-friendly approach extends beyond 
                production to include responsible sourcing and waste management.
              </p>
              <p className="text-lg text-[rgb(139,69,19)]">
                Beyond environmental responsibility, we actively engage in charity work 
                and food bank donations, contributing to the welfare of our local 
                communities and society at large.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
