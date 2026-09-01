import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const milestones = [
    { year: "2007", title: "Established", description: "Raybek Foods begins its journey." },
    { year: "2012", title: "Expansion", description: "Expanded product lines to include gourmet cheeses." },
    { year: "2018", title: "National Distribution", description: "Supplying across QLD, NSW, and VIC." },
    { year: "2024", title: "Premium Ranges", description: "Launch of our high-end bespoke Food Service products." }
  ];

  return (
    <div className="bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <span className="text-accent uppercase tracking-[0.3em] font-semibold text-sm mb-6 block">Our Story</span>
          <h1 className="font-serif text-5xl md:text-7xl text-primary font-bold mb-8">
            Crafting Culinary Excellence Since 2007
          </h1>
          <p className="text-foreground/80 text-lg md:text-xl font-light leading-relaxed">
            Since establishment in early 2007, Raybek Foods has grown from strength to strength delivering premium gourmet food products across Australia. We continuously strive to produce the freshest products using only the finest quality ingredients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1200&auto=format&fit=crop" 
              alt="Manufacturing Quality" 
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl text-dark font-bold mb-6">Manufacturing Process & Quality</h2>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Our 19+ years of experience has allowed us to perfect our manufacturing process. We maintain strict quality standards, ensuring every batch meets our premium expectations.
            </p>
            <ul className="space-y-4">
              {[
                "Only the finest Australian ingredients",
                "Small batch production for superior quality",
                "Rigorous quality checking",
                "Fresh packaging to preserve taste",
                "Delivered fresh across QLD, NSW, and VIC"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl text-center text-dark font-bold mb-16">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary p-8 rounded-2xl text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <div className="font-serif text-5xl text-primary font-bold mb-4 opacity-20 group-hover:opacity-100 transition-opacity">{milestone.year}</div>
                <h3 className="font-serif text-xl font-bold text-dark mb-2">{milestone.title}</h3>
                <p className="text-sm text-foreground/70">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
