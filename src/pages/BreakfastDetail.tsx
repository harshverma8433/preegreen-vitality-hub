import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Flame, Utensils, Leaf, Check, Calendar } from "lucide-react";
import { breakfastItems } from "@/data/breakfast-items";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function BreakfastDetailPage() {
  const { id } = useParams<{ id: string }>();
  const item = breakfastItems.find((b) => b.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Breakfast item not found</h1>
            <Link to="/breakfast">
              <Button variant="outline">Back to Breakfast Menu</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{item.name} - Preegreen Breakfast Subscription</title>
        <meta
          name="description"
          content={`${item.name}: ${item.description} Part of our 28-day healthy breakfast subscription.`}
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative h-[50vh] min-h-[400px]">
            <div className="absolute inset-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-8">
              <Link
                to="/breakfast"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 w-fit"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Menu
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.dayPlan}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                  {item.name}
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  {item.description}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Quick Stats */}
          <section className="py-8 border-b border-border">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap gap-6 justify-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                  <Flame className="w-5 h-5 text-gold" />
                  <span className="font-semibold text-foreground">{item.nutrition.calories} kcal</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                  <Utensils className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">{item.nutrition.protein}g protein</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                  <Leaf className="w-5 h-5 text-secondary" />
                  <span className="font-semibold text-foreground">{item.nutrition.fiber}g fiber</span>
                </div>
              </div>
            </div>
          </section>

          {/* Content Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="space-y-10">
                  {/* Ingredients */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <Leaf className="w-6 h-6 text-primary" />
                      Ingredients
                    </h2>
                    <ul className="space-y-3">
                      {item.ingredients.map((ingredient, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 text-muted-foreground"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Fitness Benefits */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Fitness Benefits
                    </h2>
                    <ul className="space-y-3">
                      {item.fitnessbenefits.map((benefit, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Right Column */}
                <div className="space-y-10">
                  {/* Nutrition Facts */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-2xl p-6 border border-border"
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Nutrition Facts
                    </h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-muted/50 rounded-lg p-4 text-center">
                          <p className="text-2xl font-bold text-foreground">{item.nutrition.calories}</p>
                          <p className="text-sm text-muted-foreground">Calories</p>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-4 text-center">
                          <p className="text-2xl font-bold text-primary">{item.nutrition.protein}g</p>
                          <p className="text-sm text-muted-foreground">Protein</p>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-4 text-center">
                          <p className="text-2xl font-bold text-foreground">{item.nutrition.carbs}g</p>
                          <p className="text-sm text-muted-foreground">Carbs</p>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-4 text-center">
                          <p className="text-2xl font-bold text-foreground">{item.nutrition.fat}g</p>
                          <p className="text-sm text-muted-foreground">Fat</p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <h3 className="font-semibold text-foreground mb-2">Vitamins</h3>
                        <div className="flex flex-wrap gap-2">
                          {item.nutrition.vitamins.map((vitamin) => (
                            <span
                              key={vitamin}
                              className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                            >
                              {vitamin}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <h3 className="font-semibold text-foreground mb-2">Minerals</h3>
                        <div className="flex flex-wrap gap-2">
                          {item.nutrition.minerals.map((mineral) => (
                            <span
                              key={mineral}
                              className="px-2 py-1 bg-secondary/20 text-secondary-foreground rounded text-xs"
                            >
                              {mineral}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Customization Options */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Customization Options
                    </h2>
                    <ul className="space-y-3">
                      {item.customizationOptions.map((option, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 text-muted-foreground"
                        >
                          <Check className="w-4 h-4 text-gold" />
                          {option}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary/5">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Want this in your breakfast plan?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                {item.name} is part of our 28-day breakfast subscription. Get it delivered fresh along with 4 other rotating options.
              </p>
              <Link to="/contact">
                <Button size="lg" className="px-8">
                  Contact Us to Subscribe
                </Button>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
