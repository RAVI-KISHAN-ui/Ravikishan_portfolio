import { motion } from "framer-motion";
import { 
  Code, 
  Server, 
  Languages, 
  Palette, 
  Database, 
  Cloud,
  CheckCircle2
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
    gradient: "from-primary to-accent",
    level: 90,
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Next.js"],
    gradient: "from-accent-emerald to-accent-teal",
    level: 85,
  },
  {
    title: "Languages",
    icon: Languages,
    skills: ["Java", "Python", "C"],
    gradient: "from-accent-violet to-accent-purple",
    level: 88,
  },
  {
    title: "Design Tools",
    icon: Palette,
    skills: ["Figma"],
    gradient: "from-accent-orange to-destructive",
    level: 75,
  },
  {
    title: "Libraries & Data",
    icon: Database,
    skills: ["Pandas", "NumPy", "Matplotlib"],
    gradient: "from-accent-yellow to-accent-orange",
    level: 70,
  },
  {
    title: "Cloud Computing",
    icon: Cloud,
    skills: ["AWS EC2", "S3", "IAM", "Cloud Security"],
    gradient: "from-primary to-accent-violet",
    level: 65,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

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
            My Skills
          </motion.span>
          <h2 className="section-title">Technical <span className="gradient-text">Expertise</span></h2>
          <p className="section-subtitle mx-auto mt-4">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} text-primary-foreground`}>
                      <category.icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold">{category.title}</h3>
                  </div>
                  <span className="text-sm font-semibold text-primary">{category.level}%</span>
                </div>

                {/* Progress bar */}
                <div className="h-1.5 bg-secondary rounded-full mb-6 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${category.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                  />
                </div>

                {/* Skills list */}
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Always learning and exploring new technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["REST APIs", "Git", "DSA", "Authentication", "Responsive Design", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-secondary/80 text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
