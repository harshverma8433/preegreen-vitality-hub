import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Fitness Enthusiast",
    location: "Mumbai",
    content: "Preegreen microgreens have transformed my post-workout nutrition. The energy boost is incredible! I've been a subscriber for 6 months and my gym performance has improved significantly.",
    rating: 5,
    image: null,
  },
  {
    name: "Rahul Patel",
    role: "Health Coach",
    location: "Ahmedabad",
    content: "I recommend Preegreen to all my clients. The quality and freshness is unmatched in the market. Their commitment to organic farming really shows in the taste and nutritional value.",
    rating: 5,
    image: null,
  },
  {
    name: "Anita Desai",
    role: "Busy Mom",
    location: "Bangalore",
    content: "The monthly breakfast subscription has made healthy eating so easy for my family. Kids actually love the green sandwich! It's a game-changer for working parents.",
    rating: 5,
    image: null,
  },
  {
    name: "Dr. Vikram Mehta",
    role: "Nutritionist",
    location: "Delhi",
    content: "As a nutritionist, I'm very particular about food sources. Preegreen's microgreens are lab-tested and certified organic. I trust them completely for my patients' dietary recommendations.",
    rating: 5,
    image: null,
  },
  {
    name: "Sneha Agarwal",
    role: "Yoga Instructor",
    location: "Pune",
    content: "The purity and freshness of Preegreen products align perfectly with my yogic lifestyle. The sprouted breakfast options are sattvic and help maintain my energy levels throughout the day.",
    rating: 5,
    image: null,
  },
  {
    name: "Arjun Reddy",
    role: "Bodybuilder",
    location: "Hyderabad",
    content: "I need high-quality protein sources and Preegreen delivers. Their sunflower and pea microgreens are now staples in my diet. Noticeable difference in recovery time.",
    rating: 5,
    image: null,
  },
  {
    name: "Meera Krishnan",
    role: "Corporate Executive",
    location: "Chennai",
    content: "With my hectic schedule, the breakfast subscription is a lifesaver. Fresh, nutritious, and delicious - delivered right when I need it. Worth every rupee!",
    rating: 5,
    image: null,
  },
  {
    name: "Sandeep Joshi",
    role: "Restaurant Owner",
    location: "Jaipur",
    content: "We use Preegreen microgreens in our health-focused menu. Our customers love the freshness and vibrant colors. The consistent quality makes them a reliable partner.",
    rating: 5,
    image: null,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Helmet>
        <title>Customer Testimonials | Preegreen - What Our Customers Say</title>
        <meta name="description" content="Read what our happy customers say about Preegreen microgreens and breakfast subscriptions. Real reviews from fitness enthusiasts, nutritionists, and health-conscious families." />
        <link rel="canonical" href="https://preegreen.com/testimonials" />
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
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-sm font-medium text-primary">5-Star Reviews</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                What Our <span className="text-primary">Customers</span> Say
              </h1>
              <p className="text-lg text-muted-foreground">
                Real stories from real people who've transformed their health with Preegreen.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-primary">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-primary-foreground">5000+</p>
                <p className="text-primary-foreground/80 text-sm">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-foreground">4.9★</p>
                <p className="text-primary-foreground/80 text-sm">Average Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-foreground">98%</p>
                <p className="text-primary-foreground/80 text-sm">Satisfaction Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-foreground">85%</p>
                <p className="text-primary-foreground/80 text-sm">Repeat Customers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-card transition-shadow"
                >
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} • {testimonial.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
