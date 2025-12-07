import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Camera, X, Play } from "lucide-react";

import heroImg from "@/assets/hero-microgreens.jpg";
import breakfastBowl from "@/assets/breakfast-bowl.jpg";
import teamPhoto from "@/assets/team-photo.jpg";
import aboutBanner from "@/assets/about-banner.jpg";
import radishImg from "@/assets/microgreens/radish.jpg";
import broccoliImg from "@/assets/microgreens/broccoli.jpg";
import peaImg from "@/assets/microgreens/pea.jpg";
import sunflowerImg from "@/assets/microgreens/sunflower.jpg";
import sproutMasala from "@/assets/breakfast/sprout-masala.jpg";
import greenSandwich from "@/assets/breakfast/green-sandwich.jpg";

const galleryItems = [
  { id: 1, src: heroImg, alt: "Fresh microgreens growing", category: "farm" },
  { id: 2, src: breakfastBowl, alt: "Healthy breakfast bowl", category: "food" },
  { id: 3, src: teamPhoto, alt: "Preegreen team", category: "team" },
  { id: 4, src: aboutBanner, alt: "Vertical farming", category: "farm" },
  { id: 5, src: radishImg, alt: "Radish microgreens", category: "products" },
  { id: 6, src: broccoliImg, alt: "Broccoli microgreens", category: "products" },
  { id: 7, src: peaImg, alt: "Pea shoots", category: "products" },
  { id: 8, src: sunflowerImg, alt: "Sunflower microgreens", category: "products" },
  { id: 9, src: sproutMasala, alt: "Sprout Masala", category: "food" },
  { id: 10, src: greenSandwich, alt: "Green Sandwich", category: "food" },
];

const categories = ["All", "Products", "Food", "Farm", "Team"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory.toLowerCase());

  return (
    <>
      <Helmet>
        <title>Gallery | Preegreen - Photos & Videos of Our Organic Farm</title>
        <meta name="description" content="Explore our gallery featuring fresh microgreens, organic farming practices, healthy breakfast preparations, and our dedicated team. See the Preegreen difference." />
        <link rel="canonical" href="https://preegreen.com/gallery" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <Camera className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Visual Journey</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Gallery</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                A glimpse into our organic farm, fresh products, and the passion behind every sprout.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-6 bg-background border-b border-border">
          <div className="container">
            <div className="flex justify-center gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
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
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="break-inside-avoid"
                >
                  <div
                    onClick={() => setLightboxImage(item.src)}
                    className="relative group cursor-pointer rounded-2xl overflow-hidden"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center">
                          <Play className="w-5 h-5 text-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card flex items-center justify-center"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
            <img
              src={lightboxImage}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] rounded-lg shadow-elevated"
            />
          </motion.div>
        )}

        <Footer />
      </div>
    </>
  );
}
