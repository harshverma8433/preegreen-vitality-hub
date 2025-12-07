import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { MicrogreenCard } from "@/components/products/MicrogreenCard";
import { microgreens } from "@/data/microgreens";
import { Leaf, Search } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Weight Loss", "Muscle Building", "Immunity Boost", "Detox"];

export default function MicrogreensPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMicrogreens = microgreens.filter((green) => {
    const matchesSearch = green.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      green.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || 
      green.suitableFor.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Premium Organic Microgreens | Preegreen - Fresh Non-GMO Microgreens India</title>
        <meta name="description" content="Explore 13+ varieties of fresh, organic microgreens. From radish to kale purple, get nutrient-packed superfoods delivered fresh. Perfect for gym-goers and health enthusiasts." />
        <meta name="keywords" content="buy microgreens online, fresh microgreens India, organic microgreens, non-GMO microgreens, microgreens for gym, microgreens for weight loss" />
        <link rel="canonical" href="https://preegreen.com/microgreens" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": microgreens.map((green, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": green.name,
                "description": green.description,
                "image": green.image,
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <Leaf className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">13 Premium Varieties</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Fresh Organic <span className="text-primary">Microgreens</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Nutrient-dense superfoods packed with up to 40x more vitamins than mature vegetables. 
                Perfect for salads, smoothies, and healthy living.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-background border-b border-border sticky top-[72px] z-30">
          <div className="container">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search microgreens..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container">
            {filteredMicrogreens.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMicrogreens.map((green, index) => (
                  <MicrogreenCard key={green.id} microgreen={green} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Leaf className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No microgreens found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
