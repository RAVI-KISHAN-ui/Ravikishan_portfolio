import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold gradient-text">RK</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ravi Kishan. All Rights Reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:kishanravi@gmail.com"
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com/RAVI-KISHAN-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ravi-kishan-a880a5328/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
