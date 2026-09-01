import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { categories, products } from "../data/products";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-dark flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <img 
            src="https://www.raybekfoods.com/static/991e2ceed14efb4f1ea2664086b8f9c7/159ea/banner-2.png" 
            alt="Premium Gourmet Foods" 
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
        
        {/* Floating particles/ingredients simulation */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-accent/20 backdrop-blur-xl"
          />
          <motion.div
            animate={{ 
              y: [0, 30, 0],
              rotate: [0, -15, 15, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-16 h-16 rounded-full bg-primary/20 backdrop-blur-xl"
          />
        </div>

        <div className="container relative z-20 mx-auto px-6 md:px-12 text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4Ny4yNCAyMC44MSI+PHRpdGxlPmxvZ288L3RpdGxlPjxwYXRoIGQ9Ik0xOS43NiwxOS4xN1MxOCw5Ljg1LDE3LjYsNy41cy0uMjEtMi42OS0uMjEtMi42OS0uMjgsMi42MSw1LjIyLDIuNDFTMzguNSw0Ljc3LDQ1LDMuMzEsNjEuMjMuMjQsNjgsMi42NCw3Ni42LDcuNTIsNzYuNiw3LjUyTDczLjQ2LDE5LjE2cy45My0yLjgxLTMuOTUtNEE0OC4wOSw0OC4wOSwwLDAsMCw0MS4zLDE2Ljc0Yy0xMi42OSw0LjQ2LTE2LjYxLDQuNjUtMjEuNTQsMi40MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMzggLTAuNikiIGZpbGw9IiNiZTFlMmQiLz48cGF0aCBkPSJNNzQsMTkuNDZzLS41MSwxLjQzLTIuNjktLjI3Yy00LjQ5LTMuNTEtNiwxLjA5LS43NSwyLjEyLDMuNzkuNzQsNS4xOS0zLjIxLDkuNTItLjg2QTUuNzIsNS43MiwwLDAsMCw4Ni4yNiwyMHMtMS42Ny4zNC00LjE1LTEuNDFjLTEuMjItLjg3LTIuNjMtMi4zOS0yLjQ1LTIuOTEuNzUtMi4wOSw4LC41LDgsLjVzLTMuMzgtNC43MS04LjY4LTUuOTJjLTMtLjY3LTIuNDEtLjI5LTIuNDEtLjI5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMzggLTAuNikiIGZpbGw9IiNiZTFlMmQiLz48cGF0aCBkPSJNMTYuNTYsNC43OVMxNi4xNywzLjA2LDE5LjQ1LDRjMy4wOC45MSw1LjExLjUyLDYuMjMtLjA4LDItMS4wNy0xLjctNi42LTkuODEtLjYxUzEuODEsNC43MywxLjgxLDQuNzNBMTMuNDIsMTMuNDIsMCwwLDAsNC44OSw3LjY0YzIuODMsMS43MSw0LjY2LDEuNjUsNC42MywyLS4xLDEuMTMtMi44MywyLjM5LTMuNTksMi41NWEzNS44NiwzNS44NiwwLDAsMS01LjU1LjM5UzUuNywxNS42NiwxMSwxNC4wNmM2LjA2LTEuODMsNy4xOS4zNCw3LjE5LjM0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMzggLTAuNikiIGZpbGw9IiNiZTFlMmQiLz48cGF0aCBkPSJNMjIuNSwxMS41OWMwLS4yNywwLS40OS0uMDctLjY3LS4xOC0xLTEtLjQ0LTEtLjgxLDAtLjIuMjQtLjI0LjM2LS4yNi41MS0uMDgsMS0uMTMsMS41NC0uMjEuMzEtLjA2LjYyLS4xNS45My0uMkMyNi43LDksMjYuODYsMTAuNzEsMjYuOTIsMTFhMiwyLDAsMCwxLTEuMTgsMi4wOGwxLjM5LDIuMTJjLjU3Ljg5LDEuMDguMiwxLjE1LjYycy0uNTcuNTYtLjgxLjZhMS4wNSwxLjA1LDAsMCwxLTEtLjI4Yy0uMzEtLjIxLS42Ni0uNy0xLjY5LTIuNDktLjE2LS4yNy0uMzMtLjMxLS43My0uMjQtLjEyLDAtLjIsMC0uMjQuMTZhMTYsMTYsMCwwLDAsLjEyLDIuMDZjLjE5LDEuMSwxLjA3LjQ0LDEuMTQuODgsMCwuMjEtLjEyLjI3LS4yNi4yOS0uNDEuMDctLjgzLjEtMS4yNC4xN3MtLjc2LjE2LTEuMTUuMjNjLS4xMSwwLS4yMiwwLS4yNS0uMTQtLjA2LS40Mi42NS0uMS41OS0xLjEyWm0xLjE4Ljg2YTIuNSwyLjUsMCwwLDAsMCwuMzJjLjA1LjMzLjUxLjI1LjkyLjE4LjgxLS4xMywxLjM0LS41LDEuMTctMS41NmExLjcxLDEuNzEsMCwwLDAtMS43Mi0xLjUyYy0uNTMuMDktLjUxLjUxLS40OCwxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMzggLTAuNikiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMzAuMjMsMTEuNzJhMi4xLDIuMSwwLDAsMSwuOS4xYy4zOC0uMDguMzctLjguNi0uODRzLjEzLDAsLjE1LjEzLjEsMy4wOS4yLDMuNTYuMi40Ni4zNi40My4yMy0uNTkuNDQtLjYzYS4xLjEsMCwwLDEsLjEzLjA3LDEuNDksMS40OSwwLDAsMS0xLDEuNDljLS41NC4xMS0uNzYtLjUxLS44Ny0uNzYtLjMyLjU1LS42NiwxLjA3LTEuMjcsMS4xOXMtMS4yNy0uNDMtMS40My0xLjE5Yy0uMjktMS40NC4zLTMuMjYsMS43NS0zLjU1bS0uNzcsM2MuMDguNC4zMywxLC44Ljg4cy43LS43NS43MS0xLjM0YTE1LjI2LDE1LjI2LDAsMCwwLDAtMS45Mi40OC40OCwwLDAsMC0uNjMtLjM2Yy0xLC4xOS0xLDEuOS0uODUsMi43NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMzggLTAuNikiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMzMuMjYsMTAuODljLjctLjE5LDEuNDYsMSwyLjYsMi40N2EzLjgxLDMuODEsMCwwLDAsMC0xLjY4Yy0uMTMtLjUtLjUtLjYyLS41Ny0uODlhLjQ5LjQ5LDAsMCwxLC4zNi0uNTNjLjMzLS4wOS40OC4xOC41Ny41MS4zMSwxLjIxLS4xLDYuMDktMS43OSw2LjU0YS41Ny41NywwLDAsMS0uNzItLjQ1QS40MS40MSwwLDAsMSwzNCwxNi4zYy40NC0uMTIuNDkuMTkuODcuMDlzLjc4LTEuMzQuNy0xLjY2LTEuOTQtMi45My0yLjQyLTIuOC0uMTEuOS0uMzIsMS0uMTUsMC0uMi0uMTljLS4xNC0uNTEsMC0xLjYzLjY3LTEuOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMzggLTAuNikiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMzcuODUsMTFoMGMuMi0uNzEuNDctMS4zOSwxLjI1LTEuNThzMS4zNy40MiwxLjU3LDEuMjFhMi45MywyLjkzLDAsMCwxLTEuODksMy41OSwxLjE3LDEuMTcsMCwwLDEtMS42LS44NGMtLjEzLS41My0uMTUtLjkxLS42My00LjUxLS4xMS0uNzktLjEyLTEtLjE0LTEuMDYtLjA5LS4zNC0uMzMtLjIyLS41NS0uMTdzLS4yNS4wOC0uMjktLjExYS4yLjIsMCwwLDEsLjExLS4yMWMxLjEyLS40MiwxLjI1LS41NSwxLjM3LS41OHMuMiwwLC4yMy4xNy4xOCwxLjM3LjI3LDJabTEuMDcsMi44M2MuNzktLjIsMS4wNi0xLjU3LjgyLTIuNTQtLjA5LS4zOC0uMzgtMS4xMi0uOTQtMS0uNzMuMTgtMSwxLjY1LS43MiwyLjgxLjEyLjQ3LjM1LjgzLjg0LjcyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4zOCAtMC42KSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik00My41OCwxMi41M2MuNzMtLjEzLjgzLS43OCwxLjA4LS44MiwwLDAsLjExLDAsLjEzLjEyYTIuMTIsMi4xMiwwLDAsMS0xLjczLDEuNDVBMS40MywxLjQzLDAsMCwxLDQxLjMxLDEyYTIuNzUsMi43NSwwLDAsMSwxLjktMy40NS45Mi45MiwwLDAsMSwxLjE0LjYzYy4yMSwxLjA4LTEuMzgsMS44Mi0yLjE0LDIsLjExLjg2LjU0LDEuNDMsMS4zNywxLjI3bS0uMTQtMy4wOGMwLS4yNS0uMjItLjQ3LS40Ni0uNDItLjcuMTItLjk0LDEuMjEtLjgxLDEuODguNjEtLjA4LDEuNDEtLjY5LDEuMjctMS40NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMzggLTAuNikiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNNDYuMjMsMTAuMzJhMy41NiwzLjU2LDAsMCwwLDEuNC0yLjA4Yy4wNi0uMTkuMDYtLjM1LjM1LS4zOWEuNDMuNDMsMCwwLDEsLjU0LjM5YzAsLjI5LS40MS43NC0xLjIsMS40OCwxLjA5LDEuNSwxLjI3LDEuNzEsMS40MywxLjY5cy4zNS0uNTIuNDItLjUzYS4xMy4xMywwLDAsMSwuMTYuMTNjLjA1LjM5LS40OSwxLjM1LS45MywxLjQxcy0uNi0uMjItMS44MS0xLjk1Yy0uMzYuMy0uMzQuMjUtLjMzLjQydjEuNDRjMCwuMjgtLjA2LjI3LS40My4zMnMtLjUxLjEtLjUzLS4wOSwwLS4xNi0uMDgtNS40OWMwLS44LDAtMSwwLTEuMDcsMC0uMzUtLjMtLjI1LS41Mi0uMjJzLS4yNiwwLS4yOC0uMTRhLjE5LjE5LDAsMCwxLC4xMy0uMmMxLjE2LS4zLDEuMy0uNDIsMS40My0uNDNzLjE5LjA2LjIxLjE5LDAsMS4zOCwwLDIuMDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4zOCAtMC42KSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik01NS43MSw3Ljc2YzEuMTYsMCwxLTEsMS4yOC0xLC4xMSwwLC4xMy4wOS4xMy4yUzU3LDguODQsNTcsOS4xNWMwLC4xMS0uMDcuMTItLjExLjEyLS4zMiwwLDAtMS4xMy0xLjI3LTEuMDdsLS41NSwwYS42NC42NCwwLDAsMC0uMzYuMTQsOC4xMyw4LjEzLDAsMCwwLS4xOSwyLjE4Yy4wNiwxLjIyLDEsLjU4LDEuMDcsMS4wNywwLC4yMS0uMjIuMjMtLjM2LjI0YTguNDUsOC40NSwwLDAsMS0uODgsMGMtLjg2LDAtMS4xOS4xLTEuNjEuMTItLjEzLDAtLjE4LDAtLjE4LS4xLDAtLjQ4LjctLjA5Ljc2LTEuMDZsLjI3LTQuNDhjMC0uNDcsMC0uNzEsMC0uODcsMC0uNzgtLjkzLS4zOC0xLS43NCwwLS4xNC4xOC0uMTUuMjEtLjE1LjYsMCwxLjE5LDAsMS43OSwwLDIuMTItLjExLDMuMDgtLjE5LDMuMjgtLjJzLjIsMCwuMjEuMWwuMDYsMS4zYzAsLjE5LDAsLjI3LS4xMS4yOC0uMjcsMC0uMjItLjYzLS40NC0uODNzLS4yOS0uMzctMi4xNS0uMjhjLS4xNiwwLS41LDAtLjYxLjE0YTcuNyw3LjcsMCwwLDAtLjI0LDIuMjljMCwuMTksMCwuNDguMi40N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjM4IC0wLjYpIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTYxLjE3LDkuMDZjMCwxLjM1LS43NywyLjc2LTIuMTMsMi43NHMtMS42Ny0xLjI1LTEuNjYtMi4wNWEyLjM4LDIuMzgsMCwwLDEsMi4yLTIuNTMsMS42NCwxLjY0LDAsMCwxLDEuNTksMS44NG0tMi4xMiwyLjM5YzEuMDUsMCwxLjA3LTIuNDYsMS4wOC0yLjg0czAtMS4wNy0uNjMtMS4wOGMtLjkyLDAtMSwyLjEzLTEsMi44NCwwLC4zNywwLDEuMDcuNiwxLjA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4zOCAtMC42KSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik02NS4xMSw5LjM2Yy0uMTEsMS4zNS0xLDIuNy0yLjMzLDIuNTlzLTEuNTctMS4zNy0xLjUtMi4xOGEyLjM4LDIuMzgsMCwwLDEsMi4zNy0yLjM1LDEuNjQsMS42NCwwLDAsMSwxLjQ2LDEuOTRtLTIuMjksMi4yM2MxLC4wOSwxLjI1LTIuMzcsMS4yOC0yLjc0czAtMS4wOC0uNTUtMS4xM2MtLjkyLS4wOC0xLjE5LDItMS4yNSwyLjc1LDAsLjM3LS4wNywxLjA3LjUyLDEuMTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjM4IC0wLjYpIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTY5LDUuOTJjLjA2LS4zNS0uMjEtLjMzLS40NC0uMzdzLS4yNiwwLS4yMy0uMjFhLjE5LjE5LDAsMCwxLC4xOS0uMTVjMS4yLDAsMS4zNiwwLDEuNDksMHMuMTYuMTEuMTQuMjQtLjM1LDEuMzMtLjUyLDJsLTEsMy42M2MwLC4xNC0uMDcuMjYtLjA5LjM4cy4wNS40MS4xOC40M2MuMjkuMDUuNDUtLjUuNjctLjQ2cy4xMS4wOC4xLjE2LS43OCwxLjItMS4zOCwxLjExLS41Ni0uOTEtLjU5LTEuMDdhMS44OCwxLjg4LDAsMCwxLTEuNTcuNzNjLS44MS0uMTItMS4wOC0uOS0xLTEuNzIuMjctMS43MywxLjY5LTIuODEsMi43LTIuNjVhMS41MywxLjUzLDAsMCwxLC42NC4yOFptLTIuMzgsNS43MmMuMTMsMCwxLjExLjE4LDEuNTUtMi42OS4wNi0uMzYsMC0uNTktLjM2LS42NC0uNzItLjEyLTEuNDcsMS0xLjY1LDIuMTQtLjA3LjQ3LS4wNywxLjEuNDYsMS4xOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMzggLTAuNikiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMzAuNTQsOS43MmExLjM0LDEuMzQsMCwwLDEsMS42OS0uOTNjLjUuMDksMSwuNDUuOTIuODlzLS4yNS40LS41MS4zNWMtLjQzLS4wOC0uMTctLjg3LS43Mi0xLDAsMC0uNDItLjA3LS41MS40LS4xMi42NiwxLjM0LDEuMzMsMS4wOSwyLjZhMS40NCwxLjQ0LDAsMCwxLTEuODEsMS4xYy0xLS4xOS0xLjItLjgtMS4xNC0xLjFhLjQ1LjQ1LDAsMCwxLC41Ni0uMzdjLjYuMTEsMCwxLjA2Ljc1LDEuMjFhLjY0LjY0LDAsMCwwLC43Ni0uNThjLjE4LS45Mi0xLjMtMS40Ni0xLjA4LTIuNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMzggLTAuNikiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMjYuNyw0LjIybC4yMiwyLjNzMCwuMTItMSwuMmExOCwxOCwwLDAsMS0zLjA2LjE3Yy0uNjUtLjEsMS4zNS0uMTcsMS44My0uNzJzLjU0LS42OS0uMzYtLjY4LjM4LS40NS45NS0uNjNhOSw5LDAsMCwwLDEuMzktLjY0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4zOCAtMC42KSIgZmlsbD0iI2JlMWUyZCIvPjxwYXRoIGQ9Ik02Ny4zOCwxNy42MmwuNi0yLjQ5YTguNzUsOC43NSwwLDAsMSwxLjc3LjM5YzEuMDcuNCwyLjA5LDEuNTEsMS4zMywxLjE1cy0xLjIzLDAtLjcxLjM3LjIyLjU3LS4yMy4zNy4zNC42NiwxLjUxLDEsMS4zMy44Ni44NS42OC0yLjI5LTEuMjYtMy4zMi0xLjU4Yy0xLjI1LS4zOS0xLjguMTMtMS44LjEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4zOCAtMC42KSIgZmlsbD0iI2JlMWUyZCIvPjwvc3ZnPg==" alt="Raybek Foods Logo" className="h-16 md:h-24 w-auto drop-shadow-2xl" />
            </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-3 text-accent mb-6">
              <div className="w-8 h-[1px] bg-accent"></div>
              <span className="text-xs uppercase tracking-[0.3em] font-bold">Est. 2007 Australia</span>
              <div className="w-8 h-[1px] bg-accent"></div>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5rem] text-light leading-[1.1] max-w-5xl mx-auto mb-8">
              Premium <span className="italic text-primary">Gourmet</span> Foods Crafted With Passion.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-light/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light"
          >
            Delivering Australia's finest gourmet Greek yoghurt, cheeses, antipasto, dips and sauces using only the highest quality ingredients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button asChild size="lg" className="rounded-full px-8 text-sm font-semibold tracking-wide">
              <Link to="/products">Explore Our Range</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-light border-light/30 hover:bg-light hover:text-dark text-sm font-semibold tracking-wide bg-white/5 backdrop-blur-sm">
              <Link to="/about">Our Process</Link>
            </Button>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-light/50 text-sm mb-2 uppercase tracking-widest font-medium">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-light/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* About Overview */}
      <section className="py-24 md:py-32 bg-background text-center px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary font-bold mb-8">
              19+ Years of Culinary Excellence
            </h2>
            <p className="text-foreground/80 text-lg md:text-2xl font-light leading-relaxed mb-12">
              Since establishment in early 2007, Raybek Foods has grown from strength to strength delivering premium gourmet food products across Australia. We continuously strive to produce the freshest products using only the finest quality ingredients.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1200&auto=format&fit=crop" 
              alt="Fresh Ingredients" 
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-accent uppercase tracking-widest font-semibold text-sm mb-4 block">Our Collections</span>
              <h2 className="font-serif text-4xl md:text-5xl text-dark font-bold">Premium Categories</h2>
            </div>
            <Link to="/products" className="group flex items-center gap-2 text-primary font-medium mt-6 md:mt-0">
              View all collections 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 6).map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative h-[320px] rounded-2xl overflow-hidden cursor-pointer bg-white"
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end overflow-hidden">
                  <h3 className="font-serif text-xl text-light font-bold mb-0 group-hover:mb-2 transition-all duration-500 ease-out">
                    {product.name}
                  </h3>
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                    <div className="overflow-hidden text-light/80 text-sm">
                      <p className="line-clamp-3">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Manufacturing */}
      <section className="py-24 bg-primary text-light">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-light/20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-4"
            >
              <div className="font-serif text-5xl md:text-6xl text-accent font-bold mb-4">19+</div>
              <div className="text-light/80 uppercase tracking-widest text-sm font-medium">Years Experience</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="px-4"
            >
              <div className="font-serif text-5xl md:text-6xl text-accent font-bold mb-4">100+</div>
              <div className="text-light/80 uppercase tracking-widest text-sm font-medium">Premium Products</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="px-4"
            >
              <div className="font-serif text-5xl md:text-6xl text-accent font-bold mb-4">3</div>
              <div className="text-light/80 uppercase tracking-widest text-sm font-medium">Australian States</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="px-4"
            >
              <div className="font-serif text-5xl md:text-6xl text-accent font-bold mb-4">100%</div>
              <div className="text-light/80 uppercase tracking-widest text-sm font-medium">Quality Focused</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <span className="text-accent uppercase tracking-widest font-semibold text-sm mb-4 block">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl text-dark font-bold mb-16">What Our Partners Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Raybek's pot-set yoghurt is unmatched in quality. It has become a staple in our breakfast service, and our guests constantly praise its authentic taste.", author: "James T.", role: "Executive Chef, Sydney Hotel" },
              { text: "We have stocked their anti-pasto range for three years now. The freshness and consistent quality makes it our top-selling deli item.", author: "Sarah M.", role: "Owner, Gourmet Grocer" },
              { text: "Their bulk sauces and dips have elevated our catering menus. Reliable delivery and premium ingredients every single time.", author: "David L.", role: "Head of Catering" }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-secondary p-8 rounded-2xl relative"
              >
                <div className="text-accent text-5xl font-serif absolute top-4 left-6 opacity-30">"</div>
                <p className="text-foreground/80 italic mb-6 relative z-10 pt-4 leading-relaxed">"{t.text}"</p>
                <div className="mt-auto">
                  <div className="font-bold text-dark font-serif text-lg">{t.author}</div>
                  <div className="text-sm text-foreground/60">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-33898dd1508c?q=80&w=2000&auto=format&fit=crop" 
            alt="CTA Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm"></div>
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-light font-bold mb-8 max-w-3xl mx-auto leading-tight">
            Elevate Your Culinary Experience with Raybek
          </h2>
          <p className="text-light/80 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Whether you're a high-end restaurant seeking bulk supplies or an independent grocer looking for premium shelf items, we have you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" variant="accent" className="rounded-full px-8">
              <Link to="/food-service">Food Service</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-light border-light/30 hover:bg-light hover:text-dark">
              <Link to="/retail">Retail Enquiries</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
