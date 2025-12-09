import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Shield, Lock, Eye, Database, Bell, Users } from "lucide-react";

const highlights = [
  { icon: Shield, title: "Data Protection", desc: "Your data is securely stored" },
  { icon: Lock, title: "Encrypted", desc: "All transactions are encrypted" },
  { icon: Eye, title: "Transparency", desc: "Clear data usage policies" },
  { icon: Database, title: "Minimal Data", desc: "We collect only what's needed" },
];

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly, including:
    • Name and contact details (phone number, email, address)
    • Delivery preferences and addresses
    • Order history and preferences
    • Payment information (processed securely by third-party providers)
    • Communication preferences`,
  },
  {
    title: "How We Use Your Information",
    content: `Your information is used to:
    • Process and deliver your orders
    • Communicate about your orders and subscriptions
    • Send promotional offers (with your consent)
    • Improve our products and services
    • Ensure food safety and quality tracking`,
  },
  {
    title: "Information Sharing",
    content: `We do not sell your personal information. We may share data with:
    • Delivery partners (limited to delivery information)
    • Payment processors (for transaction processing)
    • Legal authorities (when required by law)`,
  },
  {
    title: "Data Security",
    content: `We implement industry-standard security measures:
    • Encrypted data transmission
    • Secure storage systems
    • Regular security audits
    • Limited employee access to personal data`,
  },
  {
    title: "Your Rights",
    content: `You have the right to:
    • Access your personal data
    • Correct inaccurate information
    • Request deletion of your data
    • Opt-out of marketing communications
    • Request data portability`,
  },
  {
    title: "Cookies and Tracking",
    content: `Our website uses cookies to:
    • Remember your preferences
    • Analyze website traffic
    • Improve user experience
    You can disable cookies in your browser settings.`,
  },
  {
    title: "Third-Party Links",
    content: `Our website may contain links to third-party sites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.`,
  },
  {
    title: "Children's Privacy",
    content: `Our services are not directed to children under 18. We do not knowingly collect personal information from children. If we discover such data has been collected, we will delete it promptly.`,
  },
  {
    title: "Policy Updates",
    content: `We may update this privacy policy periodically. Changes will be posted on this page with an updated effective date. Continued use of our services after changes constitutes acceptance.`,
  },
  {
    title: "Contact Us",
    content: `For privacy-related questions or to exercise your rights:
    Email: privacy@preegreen.com
    Phone: +91 98765 43210
    Address: Organic Farm, Green Valley, Ahmedabad, Gujarat 380015`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Preegreen - Your Data Privacy</title>
        <meta
          name="description"
          content="Learn how Preegreen protects your privacy and handles your personal data. We are committed to transparent and secure data practices."
        />
      </Helmet>

      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Privacy <span className="text-primary">Policy</span>
              </h1>
              <p className="text-muted-foreground">
                Last updated: December 2024
              </p>
            </motion.div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
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
              >
                <p className="text-muted-foreground mb-8 text-lg">
                  At Preegreen, we are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.
                </p>

                <div className="space-y-6">
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
                      <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
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
