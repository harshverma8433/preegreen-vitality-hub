import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Truck, Clock, MapPin, Package, CheckCircle, Phone } from "lucide-react";

const deliveryFeatures = [
  {
    icon: Truck,
    title: "Same Day Delivery",
    description: "Orders placed before 10 AM are delivered the same day within Ahmedabad city limits.",
  },
  {
    icon: Clock,
    title: "Fresh & Fast",
    description: "Our microgreens are harvested fresh on the day of delivery to ensure maximum nutrition.",
  },
  {
    icon: MapPin,
    title: "Wide Coverage",
    description: "We deliver across Ahmedabad and surrounding areas within a 50km radius.",
  },
  {
    icon: Package,
    title: "Secure Packaging",
    description: "Temperature-controlled packaging keeps your greens fresh during transit.",
  },
];

const deliveryZones = [
  {
    zone: "Zone A - City Center",
    areas: ["Satellite", "Vastrapur", "Bodakdev", "Prahlad Nagar", "SG Highway", "Thaltej"],
    timing: "Same day (before 6 PM)",
    charges: "Free above ₹500",
  },
  {
    zone: "Zone B - Extended City",
    areas: ["Gota", "Chandkheda", "Motera", "Sabarmati", "Naroda", "Vastral"],
    timing: "Same day (before 8 PM)",
    charges: "Free above ₹700",
  },
  {
    zone: "Zone C - Outskirts",
    areas: ["Sanand", "Bopal", "South Bopal", "Shela", "Ghuma"],
    timing: "Next day delivery",
    charges: "Free above ₹1000",
  },
];

export default function DeliveryInfoPage() {
  return (
    <>
      <Helmet>
        <title>Delivery Information | Preegreen - Fresh Microgreens Delivery</title>
        <meta
          name="description"
          content="Get fresh microgreens delivered to your doorstep. Same day delivery in Ahmedabad. Free delivery on orders above ₹500."
        />
      </Helmet>

      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Delivery Information
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Fresh to Your <span className="text-primary">Doorstep</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                We ensure your microgreens reach you at peak freshness with our reliable delivery network across Ahmedabad.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliveryFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Zones */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Delivery Zones</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Check your area and delivery charges below
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {deliveryZones.map((zone, index) => (
                <motion.div
                  key={zone.zone}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-card border border-border rounded-2xl"
                >
                  <h3 className="text-lg font-semibold text-primary mb-4">{zone.zone}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Areas covered:</p>
                      <div className="flex flex-wrap gap-2">
                        {zone.areas.map((area) => (
                          <span
                            key={area}
                            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-foreground">{zone.timing}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-foreground">{zone.charges}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Order Process */}
        <section className="py-16 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Simple steps to get fresh microgreens delivered
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Place Order", desc: "Call us or WhatsApp your order" },
                { step: "02", title: "Confirmation", desc: "We confirm and schedule delivery" },
                { step: "03", title: "Harvest", desc: "Fresh harvest on delivery day" },
                { step: "04", title: "Delivery", desc: "Receive at your doorstep" },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-primary/10">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">Have Questions?</h2>
              <p className="text-muted-foreground mb-6">Contact us for delivery inquiries</p>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-glow transition-shadow"
              >
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
