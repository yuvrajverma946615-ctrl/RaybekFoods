import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Footer() {
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    setTimeout(() => {
      setIsSubscribing(false);
      setIsSuccess(true);
      if (e.target instanceof HTMLFormElement) {
        e.target.reset();
      }
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1000);
  };

  return (
    <footer className="bg-dark text-light pt-20 pb-10 border-t border-primary/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl font-bold text-accent mb-6">Raybek Foods</h3>
            <p className="text-light/70 mb-6 max-w-sm">
              Premium Gourmet Foods Crafted With Passion Since 2007. Delivering Australia's finest gourmet products using only the highest quality ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-light/70 hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link to="/products" className="text-light/70 hover:text-accent transition-colors">All Products</Link></li>
              <li><Link to="/food-service" className="text-light/70 hover:text-accent transition-colors">Food Service</Link></li>
              <li><Link to="/retail" className="text-light/70 hover:text-accent transition-colors">Retail</Link></li>
              <li><Link to="/contact" className="text-light/70 hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/careers" className="text-light/70 hover:text-accent transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-light/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Unit 16/17 3 Dalton Street<br />Upper Coomera QLD 4209</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>0449 074 593</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>Fax: (07) 5665 6335</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>info@raybekfoods.au</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="relative overflow-hidden">
            <AnimatePresence>
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute inset-0 bg-dark z-10 flex flex-col justify-center"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <h4 className="font-serif text-xl font-semibold text-white">Subscribed!</h4>
                  </div>
                  <p className="text-light/70">Thank you for subscribing. Keep an eye on your inbox for our latest updates and exclusive deals.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <h4 className="font-serif text-xl font-semibold mb-6">Newsletter</h4>
            <p className="text-light/70 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-light/10 border border-light/20 rounded-md px-4 py-3 text-light focus:outline-none focus:border-accent transition-colors"
                required
              />
              <button 
                type="submit"
                disabled={isSubscribing}
                className="bg-accent text-dark font-medium px-4 py-3 rounded-md hover:bg-light transition-colors relative overflow-hidden flex items-center justify-center h-12"
              >
                <span className={isSubscribing ? "opacity-0" : "opacity-100"}>Subscribe</span>
                {isSubscribing && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-light/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-light/50">
          <p>&copy; {new Date().getFullYear()} Raybek Foods. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
