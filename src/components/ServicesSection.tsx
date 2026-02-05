import { motion } from "framer-motion";
import { Globe, PenTool } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive, modern, and performance-optimized websites using the latest technologies and best practices.",
    icon: Globe,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive, clean user interfaces with a focus on usability, aesthetics, and creating delightful user experiences.",
    icon: PenTool,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium mb-2">Services</p>
          <h2 className="section-title">Expertise Service! Let's Check It Out</h2>
          <p className="section-subtitle mx-auto">
            Professional services to help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl p-8 card-hover group text-center"
            >
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
