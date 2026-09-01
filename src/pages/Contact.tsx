import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (e.target instanceof HTMLFormElement) {
        e.target.reset();
      }
      // Reset after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className="bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 text-accent mb-6">
            <div className="w-8 h-[1px] bg-accent"></div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold">Get in Touch</span>
            <div className="w-8 h-[1px] bg-accent"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-dark font-bold mb-6">
            Contact Raybek <span className="italic text-primary">Foods</span>
          </h1>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Whether you are looking for food service supply, retail stock, or just have a general enquiry, our dedicated team is here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto mb-32">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="bg-white p-10 rounded-[32px] shadow-xl shadow-primary/5 border border-primary/10">
              <h3 className="font-serif text-3xl font-bold text-dark mb-8">Direct Contact</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-dark mb-2">Head Office & Production</h4>
                    <p className="text-foreground/70 leading-relaxed">Unit 16/17 3 Dalton Street<br />Upper Coomera QLD 4209</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-dark mb-2">Phone</h4>
                    <p className="text-foreground/70 leading-relaxed">0449 074 593</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-dark mb-2">Fax</h4>
                    <p className="text-foreground/70 leading-relaxed">(07) 5665 6335</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-dark mb-2">Email</h4>
                    <p className="text-foreground/70 leading-relaxed">info@raybekfoods.au</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trading Hours Image/Banner */}
            <div className="relative h-64 rounded-[32px] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=800&auto=format&fit=crop" alt="Production Facility" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-dark/60 flex flex-col items-center justify-center text-white p-6 text-center backdrop-blur-[2px]">
                <Clock className="w-8 h-8 text-accent mb-3" />
                <h4 className="font-serif text-2xl font-bold mb-2">Business Hours</h4>
                <p className="text-white/80">Monday - Friday<br />8:00 AM - 4:00 PM AEST</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white p-10 md:p-12 rounded-[40px] shadow-2xl shadow-primary/10 border border-primary/5 h-full relative overflow-hidden">
              
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center p-10 text-center"
                  >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-dark mb-4">Enquiry Sent!</h3>
                    <p className="text-foreground/70 text-lg">Thank you for reaching out. A member of our team will get back to you shortly.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <h3 className="font-serif text-4xl font-bold text-dark mb-2">Send an Enquiry</h3>
              <p className="text-foreground/60 mb-8">Fill out the form below and we will get back to you shortly.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-xs uppercase tracking-widest font-bold text-dark/70">First Name</label>
                    <input type="text" id="firstName" required className="w-full px-4 py-4 rounded-xl border-2 border-secondary focus:outline-none focus:border-primary focus:ring-0 transition-colors bg-secondary/30 text-dark" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-xs uppercase tracking-widest font-bold text-dark/70">Last Name</label>
                    <input type="text" id="lastName" required className="w-full px-4 py-4 rounded-xl border-2 border-secondary focus:outline-none focus:border-primary focus:ring-0 transition-colors bg-secondary/30 text-dark" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-dark/70">Email Address</label>
                  <input type="email" id="email" required className="w-full px-4 py-4 rounded-xl border-2 border-secondary focus:outline-none focus:border-primary focus:ring-0 transition-colors bg-secondary/30 text-dark" />
                </div>
                <div className="space-y-2 relative">
                  <label htmlFor="enquiryType" className="text-xs uppercase tracking-widest font-bold text-dark/70">Enquiry Type</label>
                  <div className="relative">
                    <select id="enquiryType" className="w-full px-4 py-4 rounded-xl border-2 border-secondary focus:outline-none focus:border-primary focus:ring-0 transition-colors bg-secondary/30 text-dark appearance-none cursor-pointer">
                      <option>Food Service & Wholesale</option>
                      <option>Retail Stockist</option>
                      <option>General Enquiry</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-dark/70">Message</label>
                  <textarea id="message" rows={5} required className="w-full px-4 py-4 rounded-xl border-2 border-secondary focus:outline-none focus:border-primary focus:ring-0 transition-colors bg-secondary/30 text-dark resize-none"></textarea>
                </div>
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full rounded-full py-6 text-sm tracking-wide mt-4 group relative overflow-hidden">
                  <span className={isSubmitting ? "opacity-0" : "opacity-100 flex items-center"}>
                    Submit Enquiry
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {isSubmitting && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Production Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-16 border-t border-primary/10"
        >
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-dark font-bold mb-4">Our Production</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Take a glimpse into our state-of-the-art facility where passion meets precision to create Australia's finest gourmet products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop"
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative h-64 rounded-2xl overflow-hidden group"
              >
                <img 
                  src={img} 
                  alt="Production facility" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
