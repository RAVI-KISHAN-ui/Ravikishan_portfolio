import { motion } from "framer-motion";
import { Globe, PenTool, Rocket, Sparkles } from "lucide-react";

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

const process = [
  { step: "01", title: "Discover", description: "Understanding your needs and goals", icon: Sparkles },
  { step: "02", title: "Design", description: "Creating intuitive user experiences", icon: PenTool },
  { step: "03", title: "Develop", description: "Building with modern technologies", icon: Globe },
  { step: "04", title: "Deploy", description: "Launching and optimizing", icon: Rocket },
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

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-2">My Working Process</h3>
          <p className="text-muted-foreground">A streamlined approach to deliver quality results</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                  {item.step}
                </div>
                <div className="pt-4">
                  <div className="inline-flex p-4 rounded-xl bg-secondary mb-4 group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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
