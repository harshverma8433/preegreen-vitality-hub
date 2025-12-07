import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { NutritionCard } from "@/components/ui/NutritionCard";
import { Button } from "@/components/ui/button";
import { microgreens } from "@/data/microgreens";
import { ArrowLeft, CheckCircle2, Dumbbell, Heart, Leaf, Shield } from "lucide-react";

import radishImg from "@/assets/microgreens/radish.jpg";
import broccoliImg from "@/assets/microgreens/broccoli.jpg";
import peaImg from "@/assets/microgreens/pea.jpg";
import sunflowerImg from "@/assets/microgreens/sunflower.jpg";

const imageMap: Record<string, string> = {
  radish: radishImg,
  broccoli: broccoliImg,
  pea: peaImg,
  sunflower: sunflowerImg,
};

export default function MicrogreenDetailPage() {
  const { id } = useParams();
  const microgreen = microgreens.find((m) => m.id === id);

  if (!microgreen) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Microgreen not found</h1>
          <Button asChild>
            <Link to="/microgreens">Back to Microgreens</Link>
          </Button>
        </div>
      </div>
    );
  }

  const displayImage = imageMap[microgreen.id] || microgreen.image;

  return (
    <>
      <Helmet>
        <title>{microgreen.name} Microgreens | Preegreen - Buy Fresh {microgreen.name} Online</title>
        <meta name="description" content={`${microgreen.description} Rich in ${microgreen.nutrition.vitamins.slice(0, 3).join(", ")}. Perfect for ${microgreen.suitableFor.join(", ")}.`} />
        <link rel="canonical" href={`https://preegreen.com/microgreens/${microgreen.id}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": `${microgreen.name} Microgreens`,
            "description": microgreen.description,
            "image": displayImage,
            "brand": {
              "@type": "Brand",
              "name": "Preegreen"
            },
            "nutrition": {
              "@type": "NutritionInformation",
              "calories": `${microgreen.nutrition.calories} kcal`,
              "proteinContent": `${microgreen.nutrition.protein}g`,
              "carbohydrateContent": `${microgreen.nutrition.carbs}g`,
              "fatContent": `${microgreen.nutrition.fat}g`,
              "fiberContent": `${microgreen.nutrition.fiber}g`
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <section className="pt-28 pb-16">
          <div className="container">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <Link to="/microgreens" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Microgreens
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden shadow-elevated">
                  <img
                    src={displayImage}
                    alt={`${microgreen.name} microgreens`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {microgreen.suitableFor.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                  <Leaf className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Premium Microgreen</span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  {microgreen.name} Microgreens
                </h1>

                <p className="text-lg text-muted-foreground mb-8">
                  {microgreen.description}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-secondary rounded-xl">
                    <p className="text-2xl font-bold text-foreground">{microgreen.nutrition.calories}</p>
                    <p className="text-sm text-muted-foreground">Calories/100g</p>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-xl">
                    <p className="text-2xl font-bold text-foreground">{microgreen.nutrition.protein}g</p>
                    <p className="text-sm text-muted-foreground">Protein</p>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-xl">
                    <p className="text-2xl font-bold text-foreground">{microgreen.nutrition.fiber}g</p>
                    <p className="text-sm text-muted-foreground">Fiber</p>
                  </div>
                </div>

                {/* Why Preegreen */}
                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20 mb-8">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Why Preegreen {microgreen.name}?</h3>
                      <p className="text-muted-foreground text-sm">{microgreen.whyPreegreen}</p>
                    </div>
                  </div>
                </div>

                <Button variant="cta" size="xl" className="w-full" asChild>
                  <Link to="/contact">Contact for Orders</Link>
                </Button>
              </motion.div>
            </div>

            {/* Benefits Sections */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              {/* Health Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 border border-border shadow-soft"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Health Benefits</h3>
                </div>
                <ul className="space-y-3">
                  {microgreen.healthBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Fitness Gains */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-soft"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Dumbbell className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Fitness Gains</h3>
                </div>
                <ul className="space-y-3">
                  {microgreen.fitnessGains.map((gain) => (
                    <li key={gain} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{gain}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Nutrition Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Complete Nutrition Profile</h2>
              <NutritionCard nutrition={microgreen.nutrition} />
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
