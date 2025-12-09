import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing and using the Preegreen website and services, you accept and agree to be bound by the terms and conditions outlined in this agreement. If you do not agree to these terms, please do not use our services.`,
  },
  {
    title: "2. Products and Services",
    content: `Preegreen provides fresh, organic microgreens and healthy breakfast subscription services. All products are grown using non-GMO seeds and organic farming practices. Product availability may vary based on seasonal factors and demand.`,
  },
  {
    title: "3. Ordering and Payment",
    content: `Orders can be placed via phone, WhatsApp, or through our contact form. Payment is accepted via UPI, bank transfer, or cash on delivery. All prices are in Indian Rupees (INR) and inclusive of applicable taxes unless stated otherwise.`,
  },
  {
    title: "4. Subscription Plans",
    content: `Our monthly breakfast subscription is a 28-day customizable plan. Subscriptions auto-renew unless cancelled 7 days before the renewal date. You may modify your subscription preferences by contacting our support team.`,
  },
  {
    title: "5. Delivery Policy",
    content: `We deliver within Ahmedabad and surrounding areas. Delivery timings and charges vary by zone. We are not responsible for delays caused by circumstances beyond our control including weather, traffic, or natural events.`,
  },
  {
    title: "6. Freshness Guarantee",
    content: `We guarantee the freshness of all our products at the time of delivery. If you receive a product that does not meet our freshness standards, please contact us within 2 hours of delivery for a replacement or refund.`,
  },
  {
    title: "7. Cancellation and Refunds",
    content: `Orders can be cancelled up to 12 hours before scheduled delivery for a full refund. Cancellations within 12 hours may incur a 20% cancellation fee. Refunds are processed within 5-7 business days.`,
  },
  {
    title: "8. User Conduct",
    content: `Users agree to provide accurate information when placing orders. Misuse of our services, fraudulent orders, or abusive behavior towards our staff may result in service termination.`,
  },
  {
    title: "9. Intellectual Property",
    content: `All content on this website including logos, images, and text is the property of Preegreen. Unauthorized use, reproduction, or distribution is prohibited without written consent.`,
  },
  {
    title: "10. Limitation of Liability",
    content: `Preegreen shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services. Our liability is limited to the value of the products purchased.`,
  },
  {
    title: "11. Changes to Terms",
    content: `We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated effective date. Continued use of our services constitutes acceptance of modified terms.`,
  },
  {
    title: "12. Contact Information",
    content: `For questions about these Terms of Service, please contact us at hello@preegreen.com or call +91 98765 43210.`,
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Preegreen - Fresh Microgreens</title>
        <meta
          name="description"
          content="Read the terms and conditions for using Preegreen's microgreens and breakfast subscription services."
        />
      </Helmet>

      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Terms of <span className="text-primary">Service</span>
              </h1>
              <p className="text-muted-foreground">
                Last updated: December 2024
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                <p className="text-muted-foreground mb-8 text-lg">
                  Welcome to Preegreen. These terms and conditions outline the rules and regulations for the use of our website and services.
                </p>

                <div className="space-y-8">
                  {sections.map((section, index) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="p-6 bg-card border border-border rounded-xl"
                    >
                      <h2 className="text-xl font-semibold text-foreground mb-3">
                        {section.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
