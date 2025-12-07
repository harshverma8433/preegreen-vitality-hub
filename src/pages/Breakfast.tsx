import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { BreakfastCard } from "@/components/products/BreakfastCard";
import { Button } from "@/components/ui/button";
import { breakfastItems } from "@/data/breakfast-items";
import { Calendar, CheckCircle2, Clock, Heart, Utensils, Leaf } from "lucide-react";

import breakfastBowl from "@/assets/breakfast-bowl.jpg";

const planFeatures = [
  "28 days of unique healthy breakfasts",
  "5 rotating delicious options",
  "Fresh ingredients, zero preservatives",
  "Fully customizable to your preferences",
  "Delivered fresh to your doorstep",
  "Perfect macro balance for fitness",
  "Vegetarian and vegan options available",
  "No cooking required - ready to eat",
];

export default function BreakfastPage() {
  return (
    <>
      <Helmet>
        <title>Monthly Breakfast Subscription | Preegreen - Healthy Breakfast Plan India</title>
        <meta name="description" content="28-day customizable healthy breakfast subscription. Fresh sprouts, microgreens & nutritious meals delivered daily. Perfect for gym-goers and health-conscious families." />
        <meta name="keywords" content="healthy breakfast subscription, customizable breakfast plan, fresh breakfast delivery, healthy morning meals, microgreen breakfast" />
        <link rel="canonical" href="https://preegreen.com/breakfast" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-section relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-48 h-48 bg-gold rounded-full blur-3xl" />
          </div>
          
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">28-Day Customizable Plan</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  Monthly <span className="text-primary">Breakfast</span> Subscription
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Start every morning with a different nutritious meal. Our 28-day plan brings variety, 
                  health, and convenience right to your breakfast table.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">28 Days</p>
                      <p className="text-sm text-muted-foreground">Complete Plan</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Utensils className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">5 Options</p>
                      <p className="text-sm text-muted-foreground">Rotating Menu</p>
                    </div>
                  </div>
                </div>

                <Button variant="cta" size="xl" asChild>
                  <Link to="/contact">
                    Get Your Breakfast Plan
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden shadow-elevated">
                  <img
                    src={breakfastBowl}
                    alt="Healthy breakfast bowl"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-card border border-border"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Starting at</p>
                      <p className="text-lg font-bold text-primary">₹99/day</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Plan Features */}
        <section className="py-16 bg-primary">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {planFeatures.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Menu</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4">
                5 Delicious Options
              </h2>
              <p className="text-muted-foreground">
                Each breakfast is carefully crafted for optimal nutrition and taste. 
                Rotate through these options across 28 days.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {breakfastItems.map((item, index) => (
                <BreakfastCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-cream">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Simple Process</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4">
                How It Works
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Choose Your Plan", desc: "Select your 28-day breakfast subscription" },
                { step: "02", title: "Customize", desc: "Tell us your preferences and dietary needs" },
                { step: "03", title: "We Prepare", desc: "Fresh ingredients prepared daily" },
                { step: "04", title: "Enjoy", desc: "Delivered to your door, ready to eat" },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Features */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-8">
                  Everything You Need for a Healthy Start
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {planFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-hero rounded-3xl p-8 text-center"
              >
                <Leaf className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Ready to Transform Your Mornings?
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Join thousands of healthy eaters who start their day the Preegreen way.
                </p>
                <Button variant="cream" size="xl" asChild>
                  <Link to="/contact">Get Started Today</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
