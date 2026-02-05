import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium mb-2">About Me</p>
          <h2 className="section-title">Designing Solutions, Not Just Visuals</h2>
          <p className="section-subtitle mx-auto">
            Passionate about building scalable, user-friendly web applications with clean UI and strong problem-solving skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-xl p-6 card-hover"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <h4 className="font-medium text-foreground">
                  Bachelor of Technology (B.Tech)
                </h4>
                <p className="text-muted-foreground">Computer Science</p>
                <p className="text-sm text-muted-foreground mt-2">
                  KIET Group of Institutions, India
                </p>
                <p className="text-sm text-primary font-medium mt-1">
                  September 2024 – June 2028 (Expected)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-xl p-6 card-hover"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Briefcase className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
                <h4 className="font-medium text-foreground">
                  Full-Stack Developer
                </h4>
                <p className="text-muted-foreground">Self-Directed Projects</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Building real-world applications
                </p>
                <p className="text-sm text-primary font-medium mt-1">
                  2024 – Present
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* About paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-card rounded-xl p-8 card-hover"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 hidden sm:block">
              <Code2 className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with a strong focus on creating scalable and user-friendly web applications. 
                My expertise spans across modern frontend technologies like React and Next.js, combined with robust backend solutions using Node.js and Express.js. 
                I believe in writing clean, maintainable code and creating intuitive user interfaces that solve real problems. 
                Currently pursuing my B.Tech in Computer Science, I'm constantly learning and building projects that push my boundaries and expand my skill set.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
