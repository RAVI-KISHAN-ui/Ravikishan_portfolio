import { motion } from "framer-motion";
import { 
  Code, 
  Server, 
  Languages, 
  Palette, 
  Database, 
  Cloud 
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Next.js"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Languages",
    icon: Languages,
    skills: ["Java", "Python", "C"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Design Tools",
    icon: Palette,
    skills: ["Figma"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Libraries & Data",
    icon: Database,
    skills: ["Pandas", "NumPy", "Matplotlib"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Cloud Computing",
    icon: Cloud,
    skills: ["AWS EC2", "S3", "IAM", "Cloud Security"],
    color: "from-indigo-500 to-purple-500",
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium mb-2">My Skills</p>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle mx-auto">
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
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-card rounded-xl p-6 card-hover group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
