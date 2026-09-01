import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Food Service", path: "/food-service" },
  { name: "Retail", path: "/retail" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
          isScrolled || !isHome
            ? "bg-light/80 backdrop-blur-md shadow-sm py-4 border-primary/10"
            : "bg-transparent py-6 border-transparent"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-32 h-auto flex items-center justify-center transition-transform group-hover:scale-105">
              <img src="/logo.svg" alt="Raybek Foods Logo" className="w-full h-full object-contain" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-xs uppercase tracking-[0.2em] font-semibold transition-colors relative group",
                  !isScrolled && isHome ? "text-light hover:text-accent" : "text-dark hover:text-primary"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full",
                  !isScrolled && isHome ? "bg-accent" : "bg-primary"
                )}></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu
              className={cn(
                "w-6 h-6",
                !isScrolled && isHome ? "text-light" : "text-foreground"
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-background flex flex-col"
          >
            <div className="flex items-center justify-between p-6">
              <span className="font-serif text-2xl font-bold text-primary">
                Raybek Foods
              </span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-foreground" />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-serif text-3xl text-dark hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
