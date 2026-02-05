import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2, Target, Users, Lightbulb } from "lucide-react";

const highlights = [
  { icon: Target, label: "Goal-Oriented", description: "Focused on delivering results" },
  { icon: Users, label: "Team Player", description: "Collaborative mindset" },
  { icon: Lightbulb, label: "Problem Solver", description: "Creative solutions" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-80 h-80 border border-primary/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -left-20 w-60 h-60 border border-primary/10 rounded-full"
      />

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
            About Me
          </motion.span>
          <h2 className="section-title">Designing Solutions,<br /><span className="gradient-text">Not Just Visuals</span></h2>
          <p className="section-subtitle mx-auto mt-4">
            Passionate about building scalable, user-friendly web applications with clean UI and strong problem-solving skills.
          </p>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 text-center"
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary group-hover:to-accent transition-all duration-300 mb-4">
                <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
          >
            <div className="flex items-start gap-5">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shrink-0">
                <GraduationCap size={28} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold">Education</h3>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-accent-emerald/20 text-accent-emerald font-medium">Current</span>
                </div>
                <h4 className="font-semibold text-foreground text-lg">
                  Bachelor of Technology (B.Tech)
                </h4>
                <p className="text-primary font-medium">Computer Science</p>
                <div className="mt-4 p-4 rounded-xl bg-secondary/50">
                  <p className="text-sm text-muted-foreground">
                    📍 KIET Group of Institutions, India
                  </p>
                  <p className="text-sm font-medium mt-1">
                    September 2024 – June 2028
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
          >
            <div className="flex items-start gap-5">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-accent-violet to-accent-purple text-primary-foreground shrink-0">
                <Briefcase size={28} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold">Experience</h3>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary font-medium">Active</span>
                </div>
                <h4 className="font-semibold text-foreground text-lg">
                  Full-Stack Developer
                </h4>
                <p className="text-primary font-medium">Self-Directed Projects</p>
                <div className="mt-4 p-4 rounded-xl bg-secondary/50">
                  <p className="text-sm text-muted-foreground">
                    🚀 Building real-world applications
                  </p>
                  <p className="text-sm font-medium mt-1">
                    2024 – Present
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* About paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl blur-xl" />
          <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-border">
            <div className="flex items-start gap-5">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-accent-yellow to-accent-orange text-primary-foreground shrink-0 hidden sm:block">
                <Code2 size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I'm a passionate full-stack developer with a strong focus on creating scalable and user-friendly web applications. 
                  My expertise spans across modern frontend technologies like <span className="text-foreground font-medium">React</span> and <span className="text-foreground font-medium">Next.js</span>, combined with robust backend solutions using <span className="text-foreground font-medium">Node.js</span> and <span className="text-foreground font-medium">Express.js</span>. 
                  I believe in writing clean, maintainable code and creating intuitive user interfaces that solve real problems.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
