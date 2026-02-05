import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, Sparkles, Code2, Zap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      {/* Floating orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-[20%] w-96 h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-[10%] w-80 h-80 bg-gradient-to-tr from-accent/15 to-transparent rounded-full blur-3xl"
      />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-32 left-[15%] hidden lg:block"
      >
        <div className="p-3 bg-gradient-to-br from-accent-yellow to-accent-orange rounded-xl shadow-lg">
          <Sparkles className="text-primary-foreground" size={24} />
        </div>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute top-48 right-[10%] hidden lg:block"
      >
        <div className="p-3 bg-gradient-to-br from-accent-emerald to-accent-teal rounded-xl shadow-lg">
          <Code2 className="text-primary-foreground" size={24} />
        </div>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        className="absolute bottom-32 right-[25%] hidden lg:block"
      >
        <div className="p-3 bg-gradient-to-br from-accent-violet to-accent-purple rounded-xl shadow-lg">
          <Zap className="text-primary-foreground" size={24} />
        </div>
      </motion.div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">Available for opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2"
            >
              Hello, I'm
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="gradient-text">Ravi Kishan</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-2 mb-6"
            >
              {["Full-Stack Developer", "Web Development", "Java"].map((tag, i) => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed"
            >
              Building modern web applications with React, Next.js, Node.js & Java. 
              Passionate about creating scalable solutions with clean code and intuitive user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a href="#projects" className="btn-primary group">
                View Projects
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-muted-foreground">Connect with me</span>
              <div className="h-px w-8 bg-border" />
              <a
                href="https://github.com/RAVI-KISHAN-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <Github size={20} className="group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/ravi-kishan-a880a5328/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <Linkedin size={20} className="group-hover:text-primary transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image & Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Animated ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, hsl(var(--primary)), transparent 40%)',
                  opacity: 0.5,
                }}
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl scale-110 opacity-60" />
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-10" />
                <img
                  src={profilePhoto}
                  alt="Ravi Kishan"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating stats cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-8 md:-left-16 top-1/4 p-4 bg-card/90 backdrop-blur-sm rounded-2xl shadow-xl border border-border"
              >
                <div className="text-3xl font-bold gradient-text">8+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -right-4 md:-right-12 top-1/2 p-4 bg-card/90 backdrop-blur-sm rounded-2xl shadow-xl border border-border"
              >
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full shadow-xl flex items-center gap-2"
              >
                <Sparkles size={16} />
                <span className="text-sm font-medium whitespace-nowrap">Open to Work</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
