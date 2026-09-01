import { motion } from "motion/react";
import { Store, Tag, TrendingUp, Users } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function Retail() {
  return (
    <div className="bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-accent uppercase tracking-[0.3em] font-semibold text-sm mb-6 block">Retail Partners</span>
            <h1 className="font-serif text-5xl md:text-6xl text-primary font-bold mb-6 leading-tight">
              Stock Raybek Foods
            </h1>
            <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
              We supply supermarkets, independent grocers, and specialty delis with premium retail-ready products. Attract discerning customers with our beautifully packaged, high-quality gourmet range.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">Become a Stockist</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=1200&auto=format&fit=crop" 
              alt="Supermarket Shelf" 
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl text-center text-dark font-bold mb-16">Why Stock Raybek?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Store, title: "Shelf Appeal", desc: "Premium, clean packaging design that stands out on the shelf." },
              { icon: TrendingUp, title: "Strong Margins", desc: "Competitive wholesale pricing allowing for excellent retail margins." },
              { icon: Users, title: "Customer Loyalty", desc: "High repeat purchase rates driven by exceptional product quality." },
              { icon: Tag, title: "Versatile Range", desc: "From everyday yoghurts to specialty entertaining antipasto." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-6 p-8 bg-secondary rounded-2xl"
              >
                <div className="w-12 h-12 shrink-0 bg-primary rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-light" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
