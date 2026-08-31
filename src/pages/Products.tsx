import { motion } from "motion/react";
import { products, categories } from "../data/products";
import { useState } from "react";
import { Button } from "../components/ui/button";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent uppercase tracking-[0.3em] font-semibold text-sm mb-4 block">Our Range</span>
            <h1 className="font-serif text-5xl md:text-6xl text-primary font-bold mb-6">
              Premium Gourmet Products
            </h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Explore our wide selection of artisan foods crafted with passion and the finest Australian ingredients.
            </p>
          </motion.div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button 
            variant={activeCategory === "All" ? "default" : "outline"}
            onClick={() => setActiveCategory("All")}
            className={activeCategory === "All" ? "" : "border-primary/20 text-primary"}
          >
            All Products
          </Button>
          {categories.map((cat) => (
            <Button 
              key={cat.id}
              variant={activeCategory === cat.name ? "default" : "outline"}
              onClick={() => setActiveCategory(cat.name)}
              className={activeCategory === cat.name ? "" : "border-primary/20 text-primary"}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-light rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-secondary group"
            >
              <div className="relative h-64 overflow-hidden bg-white/50 flex items-center justify-center p-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-light/90 backdrop-blur text-xs font-semibold px-3 py-1 rounded-full text-primary">
                  {product.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-foreground/70 text-sm mb-6 line-clamp-2">{product.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1">Available Sizes</span>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map(size => (
                        <span key={size} className="text-xs bg-secondary px-2 py-1 rounded text-dark">{size}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1">Features</span>
                    <div className="flex flex-wrap gap-2 text-xs text-foreground/60">
                      {product.features.glutenFree && <span>• Gluten Free</span>}
                      {product.features.fatFree96 && <span>• 96% Fat Free</span>}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
