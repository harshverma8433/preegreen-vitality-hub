import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Leaf, 
  Heart, 
  ShieldCheck, 
  Users, 
  Target, 
  Award,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

import aboutBanner from "@/assets/about-banner.jpg";
import teamPhoto from "@/assets/team-photo.jpg";

const values = [
  {
    icon: ShieldCheck,
    title: "100% Organic",
    description: "Every seed we plant is certified organic and non-GMO. No pesticides, no chemicals, just pure nature.",
  },
  {
    icon: Heart,
    title: "Health First",
    description: "We're driven by a passion to make nutritious food accessible to everyone who cares about their health.",
  },
  {
    icon: Leaf,
    title: "Sustainable Farming",
    description: "Our vertical farming uses 95% less water and produces zero agricultural runoff.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "We support local farmers and provide employment opportunities in sustainable agriculture.",
  },
];

const milestones = [
  { year: "2020", title: "Founded", description: "Started with a small greenhouse and a big dream" },
  { year: "2021", title: "First 1000 Customers", description: "Reached our first milestone of happy customers" },
  { year: "2022", title: "Vertical Farm Launch", description: "Opened our state-of-the-art vertical farm" },
  { year: "2023", title: "Breakfast Subscription", description: "Launched our 28-day meal plan" },
  { year: "2024", title: "5000+ Happy Customers", description: "Serving health-conscious families across India" },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Preegreen | Organic Microgreens Farm India - Our Story & Mission</title>
        <meta name="description" content="Learn about Preegreen's mission to make organic nutrition accessible. Our vertical farm grows 13+ microgreen varieties using sustainable, pesticide-free methods." />
        <link rel="canonical" href="https://preegreen.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Preegreen",
            "url": "https://preegreen.com",
            "logo": "https://preegreen.com/logo.png",
            "description": "Premium organic microgreens and healthy breakfast subscription service",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Organic Farm, Green Valley",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "postalCode": "380015",
              "addressCountry": "IN"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-section relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80 z-10" />
            <img src={aboutBanner} alt="Preegreen vertical farm" className="w-full h-full object-cover" />
          </div>
          
          <div className="container relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <Leaf className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Our Story</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Growing a <span className="text-primary">Healthier</span> Tomorrow
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                At Preegreen, we believe everyone deserves access to fresh, nutrient-dense food. 
                Our mission is to revolutionize nutrition through sustainable vertical farming.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Must Be Nutritional For You
                </h2>
                <p className="text-muted-foreground mb-6">
                  Preegreen was born from a simple belief: nutrition should never be compromised. 
                  We started in 2020 with a small greenhouse and a mission to grow the purest, 
                  most nutrient-dense microgreens possible.
                </p>
                <p className="text-muted-foreground mb-8">
                  Today, our state-of-the-art vertical farm produces over 13 varieties of 
                  microgreens, serving thousands of health-conscious customers across India. 
                  Every sprout we grow is a step towards a healthier nation.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-secondary rounded-xl">
                    <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-foreground">Our Mission</p>
                    <p className="text-sm text-muted-foreground">Make organic nutrition accessible</p>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-xl">
                    <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-foreground">Our Vision</p>
                    <p className="text-sm text-muted-foreground">Healthier India by 2030</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="rounded-3xl overflow-hidden shadow-elevated">
                  <img 
                    src={teamPhoto} 
                    alt="Preegreen team in our greenhouse" 
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-cream">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Values</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4">
                What We Stand For
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border shadow-soft text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Journey</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4">
                Milestones Along the Way
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-semibold text-foreground text-lg">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                Join the Preegreen Family
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Ready to start your journey towards better nutrition? 
                Explore our products or get in touch with us today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="cream" size="xl" asChild>
                  <Link to="/microgreens">
                    Explore Products
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
