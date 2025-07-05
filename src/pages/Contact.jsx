import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const productCategories = [
  "Printed Carpets",
  "Tote Bags",
  "Tufted Rugs",
  "Hand-Tufted Cushions",
  "Hand-Tufted Bathmats",
  "Table-Tufted Bathmats",
  "Woven Cushions ",
  "Woven Throws",
  "Custom Order"
];

// Color palette references for your scheme:
// - Beige: #F5F5DD, #E5DFBE, #e3c099
// - Dark brown: #6b3e2e, #584130, #795644
// - Accent brown: #a08b6d, #a1785c, #c38452

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    productInterest: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Product Interest: ${formData.productInterest}

Message:
${formData.message}
    `;
    const emailSubject = `Inquiry from ${formData.name} - Pumish Enterprise`;
    const mailto = `mailto:anshul.singh@pumishenterprises.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailto, '_blank');
    toast.success('Email client opened! Please send the email to complete your inquiry.');
    setFormData({ name: '', email: '', company: '', productInterest: '', message: '' });
  };

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 bg-[#F5F5DD] text-[#6b3e2e] font-aptos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-[#6b3e2e] mb-4 sm:mb-8 -mt-5 ">
            Contact Us
          </h1>
          <p className="text-base sm:text max-w-3xl mx-auto px-2 text-[#a1785c]">
            Ready to transform your space with premium handcrafted home furnishings? 
            Get in touch with us today to discuss your requirements.
          </p>
        </div>

        <div className="relative bg-[#F5F5DD] pt-4 -mt-8">
          <div className="absolute left-0 right-0"></div>
          {/* Contact Form */}
          <Card className="animate-fade-in bg-[#e3c099] border border-[#a1785c] w-full px-4 sm:px-8 rounded -mt-3">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-[#6b3e2e]">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm sm:text-base text-[#6b3e2e] font-bold">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className=" font- italic text-sm sm:text-base bg-[#F5F5DD] text-[#6b3e2e] border border-[#a1785c]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base text-[#6b3e2e] font-bold">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                    className="font- italic text-sm sm:text-base bg-[#F5F5DD] text-[#6b3e2e] border border-[#a1785c]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm sm:text-base text-[#6b3e2e] font-bold ">Company/Organization</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                    className="font- italic text-sm sm:text-base bg-[#F5F5DD] text-[#6b3e2e] border border-[#a1785c]"
                  />
                </div>
                {/* Product Interest Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="productInterest" className="text-sm sm:text-base text-[#6b3e2e] font-bold">Product Interest *</Label>
                  <select
                    id="productInterest"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleInputChange}
                    required
                    className="font- italic text-sm sm:text-base bg-[#F5F5DD] text-[#795644] border border-[#a1785c] rounded-md w-full p-3 focus:border-[#c38452] focus:outline-none"
                  >
                    <option value="" disabled className="text-gray-500">Select a category</option>
                    {productCategories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm sm:text-base text-[#6b3e2e] font-bold">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your requirements, quantities, timelines, etc."
                    rows={6}
                    className="font- italic text-sm sm:text-base bg-[#F5F5DD] text-[#6b3e2e] border border-[#a1785c]"
                  />
                </div >
                <div className="flex justify-center">
                  <Button type="submit" className="w-1/2 text-sm sm:text-base bg-[#6b3e2e] text-[#F5F5DD] hover:bg-[#795644]">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in mt-8" style={{ animationDelay: '0.2s' }}>
            {/* Quick Contact */}
            <Card className="bg-[#e3c099] border border-[#a1785c]">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-2xl text-[#6b3e2e]">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="flex flex-col space-y-3 sm:space-y-4">
                  <Button
                    onClick={() => window.open('https://wa.me/919896242290', '_blank')}
                    className="bg-[#138d4a] hover:bg-[#0ebf5e] text-[#F5F5DD] justify-start text-sm sm:text-base"
                  >
                    <span className="mr-2">📱</span>
                    WhatsApp: +91-9896242290
                  </Button>
                  <Button
                    onClick={() => window.open('mailto:anshul.singh@pumishenterprises.com', '_blank')}
                    variant="outline"
                    className="justify-start text-xs sm:text-base text-[#6b3e2e] border-[#a1785c] hover:bg-[#907043]"
                  >
                    <span className="mr-2">✉️</span>
                    anshul.singh@pumishenterprises.com
                  </Button>
                  <Button
                    onClick={() => window.open('mailto:abby@pumishenterprises.com', '_blank')}
                    variant="outline"
                    className="justify-start text-sm sm:text-base text-[#6b3e2e] border-[#a1785c] hover:bg-[#907043]"
                  >
                    <span className="mr-2">✉️</span>
                    abby@pumishenterprises.com
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Company Information */}
            <Card className="bg-[#e3c099] border border-[#a1785c]">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-2xl text-[#6b3e2e]">Company Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div>
                  <h3 className="font-semibold text-[#6b3e2e] mb-2 text-sm sm:text-base">
                    Corporate Office
                  </h3>
                  <p className="text-sm sm:text-base text-[rgb(139,69,19)]">
                    Building-1, Street-2, Shiv Nagar,<br />
                    📍Panipat, Haryana-132103<br />
                    <span className="italic text-sm">(Hub of textile manufacturing)</span>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#6b3e2e] mb-2 text-sm sm:text-base">Business Hours</h3>
                  <p className="text-sm sm:text-base text-[rgb(139,69,19)]">
                    Monday - Saturday: 9:00 AM - 6:00 PM (IST)<br />
                    Sunday: Closed
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#6b3e2e] mb-2 text-sm sm:text-base">Response Time</h3>
                  <p className="text-sm sm:text-base text-[rgb(139,69,19)]">
                    We typically respond to inquiries within 24 hours during business days.
                  </p>
                </div>
              </CardContent>
            </Card>
            {/* Target Clients */}
            <Card className="bg-[#e3c099] border border-[#a1785c]">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-2xl text-[#6b3e2e]">We Serve</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm sm:text-base text-[rgb(139,69,19)]">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#c38452] rounded-full mr-3 flex-shrink-0"></span>
                    Retail Clients
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#c38452] rounded-full mr-3 flex-shrink-0"></span>
                    Big Box Retailers
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#c38452] rounded-full mr-3 flex-shrink-0"></span>
                    Interior Designers
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#c38452] rounded-full mr-3 flex-shrink-0"></span>
                    Corporate Office Buyers
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#c38452] rounded-full mr-3 flex-shrink-0"></span>
                    International Clients
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-12 sm:mt-16 md:mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#6b3e2e] mb-2 sm:mb-4">Frequently Asked Questions</h2>
            <p className="text-base sm:text-lg text-[rgb(139,69,19)] px-2">
              Quick answers to common inquiries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                question: 'What is your minimum order quantity?',
                answer: 'Our MOQ varies by product type. Please contact us with your specific requirements for detailed information.'
              },
              {
                question: 'Do you ship internationally?',
                answer: 'Yes, we ship worldwide. We have experience serving clients in 15+ countries and handle all export documentation.'
              },
              {
                question: 'Can you create custom designs?',
                answer: 'Absolutely! We specialize in custom designs and can work with your specifications, colors, and branding requirements.'
              },
              {
                question: 'What are your payment terms?',
                answer: 'We offer flexible payment terms based on order size and client relationship. Please contact us to discuss options.'
              }
            ].map((faq, index) => (
              <Card 
                key={index}
                className="bg-[#e3c099] border border-[#a1785c] animate-fade-in hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c38452] transition-transform duration-300 ease-in-out"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold text-[#6b3e2e] mb-2 sm:mb-3 text-sm sm:text-base">
                    {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-[rgb(139,69,19)] font- italic">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
