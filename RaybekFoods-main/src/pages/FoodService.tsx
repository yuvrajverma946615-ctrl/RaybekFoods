import { motion } from "motion/react";
import { ChefHat, Truck, Package, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function FoodService() {
  return (
    <div className="bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent uppercase tracking-[0.3em] font-semibold text-sm mb-6 block">For Professionals</span>
            <h1 className="font-serif text-5xl md:text-6xl text-primary font-bold mb-6 leading-tight">
              Premium Food Service Solutions
            </h1>
            <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
              We partner with restaurants, hotels, cafes, and catering businesses to supply premium gourmet products in bulk packaging. Elevate your menu with our high-quality cheeses, yoghurts, antipasto, and sauces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">Request Wholesale Pricing</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-light">
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop" 
              alt="Professional Kitchen" 
              className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-8 -left-8 bg-light p-6 rounded-xl shadow-xl hidden md:block">
              <div className="font-serif text-4xl font-bold text-accent mb-1">10kg</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-primary">Bulk Sizes Available</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: ChefHat, title: "Restaurants & Cafes", desc: "Premium ingredients designed to impress your diners." },
            { icon: Package, title: "Bulk Packaging", desc: "Available in 1kg, 2kg, 5kg and 10kg buckets for high volume." },
            { icon: Truck, title: "Reliable Distribution", desc: "Consistent supply across QLD, NSW, and VIC." },
            { icon: Phone, title: "Dedicated Support", desc: "Direct relationship with our food service team." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-secondary p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 mx-auto bg-light rounded-full flex items-center justify-center mb-6 shadow-sm">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-dark mb-3">{item.title}</h3>
              <p className="text-foreground/70 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
