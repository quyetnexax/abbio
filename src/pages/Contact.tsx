import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, MapPin, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - ABBIO</title>
        <meta
          name="description"
          content="Get in touch with ABBIO. We're here to help you scale your digital presence globally."
        />
        <meta property="og:title" content="Contact Us - ABBIO" />
        <meta property="og:description" content="Get in touch with ABBIO. We're here to help you scale your digital presence globally." />
      </Helmet>

      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="pt-32 pb-16 relative overflow-hidden"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-primary-foreground/5" />
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-primary-foreground/5" />
          </div>
          
          <div className="section-container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Get in Touch
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl">
                Let's discuss how we can help you build products that reach billions 
                of users and create lasting impact in the global market.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Email */}
              <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Mail className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Email Us</h3>
                <p className="text-muted-foreground mb-4">
                  Send us an email and we'll respond within 24 hours.
                </p>
                <a
                  href="mailto:ortizross4356636@gmail.com"
                  className="text-primary hover:underline font-medium"
                >
                  ortizross4356636@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Phone className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Call Us</h3>
                <p className="text-muted-foreground mb-4">
                  Give us a call during business hours.
                </p>
                <a
                  href="tel:+840359082860"
                  className="text-primary hover:underline font-medium"
                >
                  (+84) 0359082860
                </a>
              </div>

              {/* Address */}
              <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-colors md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <MapPin className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Visit Us</h3>
                <p className="text-muted-foreground mb-4">
                  Our office is located in South Bend, Indiana.
                </p>
                <address className="text-primary font-medium not-italic">
                  ABBIO XR INC.<br />
                  1400 E Angela Blvd<br />
                  South Bend, IN 46617-1364<br />
                  United States
                </address>
              </div>
            </div>

            {/* Additional Info */}
            <div className="max-w-3xl mx-auto mt-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Scale Your Digital Presence?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you're looking to build a new product from scratch or scale an existing one 
                to billions of users, we're here to help. Our team of experts combines deep technical 
                knowledge with global market insights to deliver exceptional results.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
