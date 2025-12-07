import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Leaf, 
  ShieldCheck, 
  Truck, 
  Star, 
  CheckCircle2,
  Dumbbell,
  Heart,
  Sparkles,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { MicrogreenCard } from "@/components/products/MicrogreenCard";
import { BreakfastCard } from "@/components/products/BreakfastCard";
import { microgreens } from "@/data/microgreens";
import { breakfastItems } from "@/data/breakfast-items";

import heroImage from "@/assets/hero-microgreens.jpg";
import breakfastBowl from "@/assets/breakfast-bowl.jpg";

const benefits = [
  {
    icon: ShieldCheck,
    title: "100% Organic",
    description: "Certified organic, non-GMO seeds with zero pesticides",
  },
  {
    icon: Sparkles,
    title: "40x More Nutrients",
    description: "Microgreens contain up to 40x more vitamins than mature plants",
  },
  {
    icon: Truck,
    title: "Fresh Delivery",
    description: "Harvested and delivered within 24 hours to your doorstep",
  },
  {
    icon: Dumbbell,
    title: "Gym Ready",
    description: "Perfect for pre/post workout nutrition and muscle recovery",
  },
];

const stats = [
  { value: "13+", label: "Microgreen Varieties" },
  { value: "28", label: "Day Breakfast Plan" },
  { value: "5000+", label: "Happy Customers" },
  { value: "100%", label: "Organic & Fresh" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Fitness Enthusiast",
    content: "Preegreen microgreens have transformed my post-workout nutrition. The energy boost is incredible!",
    rating: 5,
  },
  {
    name: "Rahul Patel",
    role: "Health Coach",
    content: "I recommend Preegreen to all my clients. The quality and freshness is unmatched in the market.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Busy Mom",
    content: "The monthly breakfast subscription has made healthy eating so easy for my family. Kids love it!",
    rating: 5,
  },
];

export default function Index() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden grain-overlay">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/80 to-transparent z-10" />
          <img
            src={heroImage}
            alt="Fresh organic microgreens"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-32 right-20 w-20 h-20 rounded-full bg-primary/20 blur-2xl"
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-32 h-32 rounded-full bg-gold/20 blur-3xl"
            animate={{ y: [20, -20, 20] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <motion.div 
          className="container relative z-20 pt-24"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6"
            >
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">100% Organic & Non-GMO</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-accent-foreground leading-tight mb-6"
            >
              Must Be{" "}
              <span className="text-primary">Nutritional</span>{" "}
              For You
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-accent-foreground/80 mb-8 max-w-lg"
            >
              Premium organic microgreens and customizable breakfast plans designed for gym-goers, health enthusiasts, and nutrition-conscious families.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/microgreens">
                  Explore Microgreens
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/breakfast">
                  Get Breakfast Plan
                </Link>
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6 mt-12"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm text-accent-foreground/80">Certified Organic</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm text-accent-foreground/80">Fresh Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm text-accent-foreground/80">No Pesticides</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4">
              The Preegreen Difference
            </h2>
            <p className="text-muted-foreground">
              We're not just growing greens – we're growing a healthier future for you and your family.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Microgreens */}
      <section className="py-20 bg-cream">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          >
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Products</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4">
                Premium Microgreens
              </h2>
            </div>
            <Button variant="outline" asChild>
              <Link to="/microgreens">
                View All 13 Varieties
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {microgreens.slice(0, 4).map((green, index) => (
              <MicrogreenCard key={green.id} microgreen={green} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Breakfast Subscription Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">28-Day Plan</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6">
                Monthly Breakfast Subscription
              </h2>
              <p className="text-muted-foreground mb-6">
                Start each day with a different nutritious meal. Our 28-day customizable breakfast plan delivers fresh, healthy options right to your doorstep.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "New healthy breakfast every day",
                  "5 delicious rotating options",
                  "Fully customizable to your taste",
                  "Fresh ingredients, zero preservatives",
                  "Perfect for busy health-conscious individuals",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/breakfast">
                    <Calendar className="w-5 h-5" />
                    Get Your Breakfast Plan
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={breakfastBowl}
                  alt="Healthy breakfast bowl with microgreens"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-card/95 backdrop-blur-lg rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">28-Day Breakfast Plan</p>
                      <p className="text-sm text-muted-foreground">Starting from ₹99/day</p>
                    </div>
                    <Button variant="default" size="sm" asChild>
                      <Link to="/breakfast">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <motion.div
                className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-card border border-border"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">5000+</p>
                    <p className="text-xs text-muted-foreground">Happy Subscribers</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Breakfast Items */}
      <section className="py-20 bg-cream">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Breakfast Menu</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4">
              What's On Your Plate
            </h2>
            <p className="text-muted-foreground">
              Each day brings a new delicious, nutritious option to keep your mornings exciting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {breakfastItems.slice(0, 3).map((item, index) => (
              <BreakfastCard key={item.id} item={item} index={index} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/breakfast">
                View Complete Menu
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4">
              What Our Customers Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-soft"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/testimonials">
                Read More Reviews
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Health?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Join thousands of health-conscious individuals who have made Preegreen their daily nutrition partner.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="cream" size="xl" asChild>
                <Link to="/microgreens">
                  Explore Microgreens
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
