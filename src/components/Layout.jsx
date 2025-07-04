import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-softwhite text-navy font-cascadia">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton /> {/* Floats above everything */}
    </div>
  );
};

export default Layout;
