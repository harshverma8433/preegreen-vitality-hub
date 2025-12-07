import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, BookOpen } from "lucide-react";

const blogPosts = [
  {
    id: "benefits-of-microgreens",
    title: "10 Amazing Health Benefits of Microgreens",
    excerpt: "Discover why microgreens are called superfoods and how they can transform your health with 40x more nutrients than mature vegetables.",
    category: "Health",
    author: "Dr. Priya Sharma",
    date: "2024-12-01",
    readTime: "5 min",
    image: "/blog/microgreens-benefits.jpg",
  },
  {
    id: "microgreens-for-gym",
    title: "Microgreens for Gym & Bodybuilding: Complete Guide",
    excerpt: "How to incorporate microgreens into your fitness diet for better muscle recovery, increased energy, and optimal performance.",
    category: "Fitness",
    author: "Rahul Fitness",
    date: "2024-11-28",
    readTime: "7 min",
    image: "/blog/gym-microgreens.jpg",
  },
  {
    id: "best-breakfast-weight-loss",
    title: "Best Breakfast Options for Weight Loss in 2024",
    excerpt: "Science-backed breakfast choices that boost metabolism, keep you full, and help you achieve your weight loss goals naturally.",
    category: "Nutrition",
    author: "Nutritionist Anita",
    date: "2024-11-25",
    readTime: "6 min",
    image: "/blog/weight-loss-breakfast.jpg",
  },
  {
    id: "why-non-gmo-matters",
    title: "Why Non-GMO Foods Matter for Your Family",
    excerpt: "Understanding the importance of non-GMO foods and how choosing organic affects your family's long-term health and wellness.",
    category: "Health",
    author: "Dr. Vikram Mehta",
    date: "2024-11-20",
    readTime: "8 min",
    image: "/blog/non-gmo.jpg",
  },
  {
    id: "daily-healthy-eating-schedule",
    title: "The Perfect Daily Healthy Eating Schedule",
    excerpt: "A complete guide to timing your meals for maximum energy, better digestion, and optimal nutrient absorption throughout the day.",
    category: "Nutrition",
    author: "Dietitian Sneha",
    date: "2024-11-15",
    readTime: "6 min",
    image: "/blog/eating-schedule.jpg",
  },
  {
    id: "microgreens-vs-vegetables",
    title: "Microgreens vs Regular Vegetables: The Nutritional Comparison",
    excerpt: "A detailed comparison of nutrients, vitamins, and health benefits between microgreens and their mature vegetable counterparts.",
    category: "Education",
    author: "Preegreen Research",
    date: "2024-11-10",
    readTime: "10 min",
    image: "/blog/comparison.jpg",
  },
];

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Health & Nutrition Blog | Preegreen - Expert Tips on Microgreens & Healthy Living</title>
        <meta name="description" content="Expert articles on microgreens, healthy eating, fitness nutrition, and organic living. Learn how to improve your health with science-backed tips from Preegreen." />
        <meta name="keywords" content="microgreens benefits, healthy eating tips, fitness nutrition, organic food blog, weight loss tips, bodybuilding diet" />
        <link rel="canonical" href="https://preegreen.com/blog" />
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
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Knowledge Hub</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Health & <span className="text-primary">Nutrition</span> Blog
              </h1>
              <p className="text-lg text-muted-foreground">
                Expert insights on microgreens, healthy eating, and fitness nutrition to help you live your best life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-card transition-shadow group"
                >
                  <div className="aspect-video bg-secondary relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-hero opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-primary/30" />
                    </div>
                    <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h2 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <User className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{post.author}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary">
                        Read More <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-hero">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-primary-foreground mb-4">
                Get Health Tips in Your Inbox
              </h2>
              <p className="text-primary-foreground/80 mb-6">
                Subscribe to our newsletter for weekly nutrition tips, recipes, and exclusive offers.
              </p>
              <Button variant="cream" size="lg" asChild>
                <Link to="/contact">Subscribe Now</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
