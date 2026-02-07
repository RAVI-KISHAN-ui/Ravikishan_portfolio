import { motion } from "framer-motion";
import { Globe, PenTool } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Building responsive, modern, and performance-optimized websites using React, Next.js, and the latest web technologies.",
    icon: Globe,
    features: ["Responsive Design", "SEO Optimization", "Fast Performance", "Modern Stack"],
    gradient: "from-primary to-accent",
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive, clean user interfaces with a focus on usability, aesthetics, and creating delightful experiences.",
    icon: PenTool,
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
    gradient: "from-accent-violet to-accent-purple",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Services
          </motion.span>
          <h2 className="section-title">What I <span className="gradient-text">Offer</span></h2>
          <p className="section-subtitle mx-auto mt-4">
            Professional services to help bring your ideas to life
          </p>
        </motion.div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
              
              <div className="relative bg-card rounded-3xl p-8 md:p-10 border border-border group-hover:border-primary/30 transition-all duration-500 h-full">
                <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${service.gradient} text-primary-foreground mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={32} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
