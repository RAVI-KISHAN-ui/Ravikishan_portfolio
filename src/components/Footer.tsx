import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="py-12 bg-gradient-to-b from-background to-secondary/20">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-start gap-2"
            >
              <a href="#home" className="text-2xl font-bold gradient-text">
                Ravi Kishan
              </a>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-destructive fill-destructive" /> © {currentYear}
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap justify-center gap-6"
            >
              {["Home", "About", "Skills", "Projects", "Services", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </motion.nav>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <a
                href="mailto:kishanravi@gmail.com"
                className="p-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://github.com/RAVI-KISHAN-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ravi-kishan-a880a5328/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
