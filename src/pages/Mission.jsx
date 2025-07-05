import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Mission = () => {
  return (
    <div className="min-h-screen py-4 sm:py-6 md:py-8 bg-[#E5DFBE] text-[#584130] font-aptos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-2 sm:mb-4 md:mb-6 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-[#584130] mb-4 sm:mb-8">
            Mission & Vision
          </h1>
          <p className="text-base sm:text max-w-3xl mx-auto px-2 text-[#7c6652]">
            Our guiding principles that drive innovation, sustainability, and excellence 
            in everything we do.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-8 sm:mb-12 md:mb-16 px-2 sm:px-4 md:px-6 mt-0">
          <div className="bg-[#f5deb3] rounded-2xl shadow-lg p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            <div className="animate-fade-in self-start">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#584130] mb-4 sm:mb-6 font-aptos">Our Mission</h2>
              <p className="mb-4 text-lg sm:text-xl text-[rgb(139,69,19)] mb-6 font-aptos">
                To redefine home textiles with innovative, eco-friendly solutions that enhance living spaces while preserving our environment for future generations.
              </p>
              <p className="text-base sm:text-lg text-[rgb(139,69,19)] font-aptos">
                We blend artistry and sustainability to ensure every product reflects our commitment to quality, responsible sourcing, and social impact. Through ongoing research and collaboration with local communities, we aim to set new standards in comfort and durability—making every home better for people and the planet.
              </p>
            </div>
            <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img
                src="value.png"
                alt="Our mission"
                className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md h-[300px] object-cover border-2 border-[#a08b6d] mt-10"
              />
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-8 sm:mb-12 md:mb-16 px-2 sm:px-4 md:px-6 mt-0">
          <div className="bg-[#f5deb3] rounded-2xl shadow-lg p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Vision Text */}
            <div className="animate-fade-in lg:order-1 flex-1 flex flex-col justify-center min-h-[220px]">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#584130] mb-4 sm:mb-6 font-aptos">Our Vision</h2>
              <p className="text-lg sm:text-xl text-[rgb(139,69,19)] leading-relaxed font-aptos">
                To be a global leader in sustainable home textiles, inspiring a movement towards eco-conscious living through innovative design and responsible practices.Through collaboration with artisans and designers, we aim to set new standards in quality, durability, and style, making every home a sanctuary of comfort and eco-conscious living.
              </p>
              <p className="text-base sm:text-lg text-[rgb(139,69,19)] mt-4 font-aptos">
                We envision a world where every home reflects a commitment to sustainability, beauty, and social responsibility, creating a positive impact on communities and the environment.
              </p>
            </div>
            {/* Vision Image */}
            <div className="flex justify-center animate-fade-in lg:order-2" style={{ animationDelay: '0.2s' }}>
              <img
                src="mis.png"
                alt="Our vision"
                className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md h-auto border-2 border-[#a08b6d] mt-3"
              />
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#584130] mb-2 sm:mb-4">Our Core Principles</h2>
            <p className="text-base sm:text-lg text-[#7c6652] px-2">
              The fundamental beliefs that shape our approach to business and life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We continuously push the boundaries of traditional textile manufacturing, embracing new technologies and methods to create products that meet evolving customer needs.',
                icon: '💡'
              },
              {
                title: 'Sustainability',
                description: 'Environmental responsibility is woven into every aspect of our operations, from sustainable sourcing to eco-friendly manufacturing processes.',
                icon: '🌱'
              },
              {
                title: 'Quality Excellence',
                description: 'We maintain uncompromising standards in product quality, ensuring every item that leaves our facility meets the highest expectations.',
                icon: '⭐'
              },
              {
                title: 'Global Impact',
                description: 'Our vision extends beyond borders, as we work to make sustainable home textiles accessible to customers worldwide.',
                icon: '🌍'
              }
            ].map((principle, index) => (
              <Card 
                key={index}
                className="shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl animate-fade-in border border-[#a08b6d]"
                style={{ backgroundColor: '#f5deb3', animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{principle.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#584130] mb-3 sm:mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[rgb(139,69,19)] leading-relaxed font- italic">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Impact Stories */}
        <section className="mb-12 sm:mb-16 md:mb-20 bg-[#f5deb3] rounded-lg p-4 sm:p-6 md:p-8 border border-[#a08b6d]">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#584130] mb-2 sm:mb-4">Making a Difference</h2>
            <p className="text-base sm:text-lg text-[#7c6652] px-2">
              How our mission and vision translate into real-world impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Women Empowerment',
                description: 'Creating employment opportunities and skill development programs for women in our community.',
                metric: '200+ Women Employed'
              },
              {
                title: 'Carbon Footprint',
                description: 'Implementing sustainable manufacturing processes to reduce our environmental impact.',
                metric: '30% Reduction in CO2'
              },
              {
                title: 'Community Support',
                description: 'Regular charity work and food bank donations to support local communities.',
                metric: '1000+ Families Helped'
              }
            ].map((story, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in bg-[#E5DFBE] rounded-lg p-4 sm:p-6 mb-3 sm:mb-4 border border-[#a08b6d] shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-[#584130] text-[#E5DFBE] rounded-lg p-4 sm:p-6 mb-3 sm:mb-4">
                  <div className="text-xl sm:text-2xl font-bold mb-2">{story.metric}</div>
                  <div className="text-xs sm:text-sm opacity-90">{story.title}</div>
                </div>
                <p className="text-sm sm:text-base text-[rgb(139,69,19)] font- italic">
                  {story.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Future Goals */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#584130] mb-2 sm:mb-4">Future Goals</h2>
            <p className="text-base sm:text-lg text-[#7c6652] px-2">
              Our roadmap for continued growth and positive impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <Card
              style={{ backgroundColor: '#f5deb3' }}
              className="animate-fade-in border border-[#a08b6d] shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#584130] mb-3 sm:mb-4"> Our Objectives</h3>
                <ul className="space-y-3 text-sm sm:text-base text-[rgb(139,69,19)]">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#a16511] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Expand to 25+ international markets
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#a16511] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Achieve 50% reduction in carbon footprint
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#a16511] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Launch 100% sustainable product line
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card
              style={{ backgroundColor: '#f5deb3' }}
              className="animate-fade-in border border-[#a08b6d] shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#584130] mb-3 sm:mb-4">Long-term Vision</h3>
                <ul className="space-y-3 text-sm sm:text-base text-[rgb(139,69,19)]">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#a16511] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Become a carbon-neutral company by 2030
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#a16511] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Establish global innovation centers
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#a16511] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Impact 10,000+ lives through community programs
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-[#f5deb3] rounded-lg p-6 sm:p-8 md:p-12 border border-[#a08b6d] text-[#584130] shadow-lg animate-fade-in transition-all duration-700 ease-in-out"
          style={{ animationDelay: '0.1s' }}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Join Our Mission
          </h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 text-[#7c6652] px-2">
            Partner with us to create a more sustainable and beautiful world through innovative home textiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="w-full sm:w-auto  border-green-500 text-beige bg-green-700 hover:bg-green-800 font-semibold hover:text-[beige] transition-all duration-300"
              onClick={() => window.open('https://wa.me/919896242290', '_blank')}
            >
              Connect with Us
            </Button>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#8e7055] hover:bg-[#584130] text-[#E5DFBE] text-base font-semibold shadow transition-all duration-300 flex items-center justify-center"
              onClick={() => window.open('mailto:anshul.singh@pumishenterprises.com', '_blank')}
            >
              Learn More
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Mission;
