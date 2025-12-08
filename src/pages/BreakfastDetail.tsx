import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, Flame, Utensils, Leaf, Check, Calendar, Sparkles, Heart, Dumbbell, ChefHat } from "lucide-react";
import { breakfastItems } from "@/data/breakfast-items";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

// Import breakfast images
import sproutMasalaImg from "@/assets/breakfast/sprout-masala.jpg";
import greenSandwichImg from "@/assets/breakfast/green-sandwich.jpg";

const breakfastImages: Record<string, string> = {
  "sprout-masala": sproutMasalaImg,
  "green-sandwich": greenSandwichImg,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

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

  const heroImage = breakfastImages[item.id] || item.image;
  const otherItems = breakfastItems.filter((b) => b.id !== item.id);

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
          <section className="relative min-h-[70vh] overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <motion.div 
              className="absolute inset-0"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <img
                src={heroImage}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-20 right-10 w-20 h-20 rounded-full bg-primary/20 blur-2xl"
              animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-gold/20 blur-3xl"
              animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />

            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end py-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  to="/breakfast"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
                >
                  <motion.div whileHover={{ x: -4 }}>
                    <ArrowLeft className="w-5 h-5" />
                  </motion.div>
                  <span className="group-hover:underline">Back to Menu</span>
                </Link>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                    <Calendar className="w-4 h-4" />
                    {item.dayPlan}
                  </span>
                  <span className="px-4 py-2 bg-card/80 backdrop-blur-sm text-foreground rounded-full text-sm font-medium flex items-center gap-2 border border-border">
                    <Sparkles className="w-4 h-4 text-gold" />
                    Fresh Daily
                  </span>
                </motion.div>
                
                <motion.h1 
                  variants={itemVariants}
                  className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight"
                >
                  {item.name}
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
                >
                  {item.description}
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Quick Stats Bar */}
          <section className="py-6 bg-card border-y border-border sticky top-16 z-20 backdrop-blur-sm bg-card/95">
            <div className="container mx-auto px-4">
              <motion.div 
                className="flex flex-wrap gap-4 md:gap-8 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {[
                  { icon: Flame, label: "Calories", value: item.nutrition.calories, unit: "kcal", color: "text-orange-500" },
                  { icon: Dumbbell, label: "Protein", value: item.nutrition.protein, unit: "g", color: "text-primary" },
                  { icon: Leaf, label: "Carbs", value: item.nutrition.carbs, unit: "g", color: "text-emerald-500" },
                  { icon: Heart, label: "Fiber", value: item.nutrition.fiber, unit: "g", color: "text-rose-500" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="flex items-center gap-3 px-5 py-3 bg-muted/50 rounded-2xl hover:bg-muted transition-colors cursor-default group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <stat.icon className={`w-5 h-5 ${stat.color} group-hover:scale-110 transition-transform`} />
                    <div>
                      <p className="text-xl font-bold text-foreground">{stat.value}<span className="text-sm font-normal text-muted-foreground ml-1">{stat.unit}</span></p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-5 gap-12">
                {/* Left Column - Ingredients & Benefits */}
                <div className="lg:col-span-3 space-y-16">
                  {/* Ingredients Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <ChefHat className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">Fresh Ingredients</h2>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      {item.ingredients.map((ingredient, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group cursor-default"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 4 }}
                        >
                          <span className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-primary/50 group-hover:scale-125 transition-transform" />
                          <span className="text-foreground font-medium">{ingredient}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Fitness Benefits */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center">
                        <Dumbbell className="w-6 h-6 text-gold" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">Fitness Benefits</h2>
                    </div>
                    
                    <div className="space-y-4">
                      {item.fitnessbenefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-4 p-5 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border-l-4 border-primary"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ x: 8 }}
                        >
                          <Check className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                          <span className="text-foreground text-lg">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Right Column - Nutrition Card */}
                <div className="lg:col-span-2">
                  <motion.div
                    className="sticky top-40"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Nutrition Facts Card */}
                    <div className="bg-card rounded-3xl p-8 border border-border shadow-xl overflow-hidden relative">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                      
                      <h2 className="text-2xl font-bold text-foreground mb-6 relative">Nutrition Facts</h2>
                      
                      {/* Macro Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-6 relative">
                        {[
                          { label: "Calories", value: item.nutrition.calories, unit: "", color: "from-orange-500/20 to-orange-500/5" },
                          { label: "Protein", value: item.nutrition.protein, unit: "g", color: "from-primary/20 to-primary/5" },
                          { label: "Carbs", value: item.nutrition.carbs, unit: "g", color: "from-emerald-500/20 to-emerald-500/5" },
                          { label: "Fat", value: item.nutrition.fat, unit: "g", color: "from-amber-500/20 to-amber-500/5" },
                        ].map((macro, index) => (
                          <motion.div
                            key={macro.label}
                            className={`bg-gradient-to-br ${macro.color} rounded-2xl p-4 text-center`}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                          >
                            <p className="text-3xl font-bold text-foreground">{macro.value}<span className="text-lg">{macro.unit}</span></p>
                            <p className="text-sm text-muted-foreground">{macro.label}</p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Vitamins */}
                      <div className="mb-6">
                        <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-gold" />
                          Vitamins
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {item.nutrition.vitamins.map((vitamin, index) => (
                            <motion.span
                              key={vitamin}
                              className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + index * 0.05 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              {vitamin}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Minerals */}
                      <div className="mb-6">
                        <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Leaf className="w-4 h-4 text-emerald-500" />
                          Minerals
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {item.nutrition.minerals.map((mineral, index) => (
                            <motion.span
                              key={mineral}
                              className="px-3 py-1.5 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.6 + index * 0.05 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              {mineral}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Customization */}
                      <div className="pt-6 border-t border-border">
                        <h3 className="font-semibold text-foreground mb-4">Customize Your Order</h3>
                        <div className="space-y-2">
                          {item.customizationOptions.map((option, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.7 + index * 0.05 }}
                            >
                              <Check className="w-4 h-4 text-gold" />
                              {option}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Other Breakfast Options */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Other Breakfast Options
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Explore our rotating menu of 5 delicious, nutritious breakfast options
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {otherItems.map((otherItem, index) => (
                  <motion.div
                    key={otherItem.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={`/breakfast/${otherItem.id}`}
                      className="block group"
                    >
                      <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                        <div className="aspect-video overflow-hidden relative">
                          <img
                            src={breakfastImages[otherItem.id] || otherItem.image}
                            alt={otherItem.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                          <div className="absolute bottom-3 left-3 right-3">
                            <h3 className="text-lg font-bold text-card">{otherItem.name}</h3>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">{otherItem.nutrition.calories} kcal</span>
                            <span className="text-primary font-medium">{otherItem.nutrition.protein}g protein</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-gold/10" />
            <motion.div
              className="absolute top-10 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Ready to Start Your <span className="text-primary">Healthy Journey</span>?
                </h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Get {item.name} and 4 other nutritious breakfasts delivered fresh to your door for 28 days.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-shadow">
                      Contact Us to Subscribe
                    </Button>
                  </Link>
                  <Link to="/breakfast">
                    <Button variant="outline" size="lg" className="px-10 py-6 text-lg">
                      View Full Menu
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
