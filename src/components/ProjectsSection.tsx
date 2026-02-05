import { motion } from "framer-motion";
import { ExternalLink, Github, Music, Lock, MessageCircle, Link, Coffee } from "lucide-react";

const projects = [
  {
    title: "Spotify Clone",
    description: "Spotify-inspired music streaming UI with playlists and playback controls.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: Music,
    github: "#",
    demo: "#",
  },
  {
    title: "Password Manager",
    description: "Secure password management app with responsive UI and form handling.",
    tech: ["React", "Tailwind CSS"],
    icon: Lock,
    github: "#",
    demo: "#",
  },
  {
    title: "X.com (Twitter) Clone",
    description: "Responsive social media UI with tweet feed and sidebar navigation.",
    tech: ["Tailwind CSS"],
    icon: MessageCircle,
    github: "#",
    demo: "#",
  },
  {
    title: "Linktree Application",
    description: "Mobile-first app to showcase multiple social/professional links.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: Link,
    github: "#",
    demo: "#",
  },
  {
    title: "GetMeAChai – Patreon Clone",
    description: "Creator-support platform with authentication, profiles, and payments.",
    tech: ["Next.js", "Tailwind CSS"],
    icon: Coffee,
    github: "#",
    demo: "#",
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

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium mb-2">Portfolio</p>
          <h2 className="section-title">Digital Product Showcases</h2>
          <p className="section-subtitle mx-auto">
            A collection of projects that demonstrate my skills and passion for development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-card rounded-xl overflow-hidden card-hover group"
            >
              {/* Project Header */}
              <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <project.icon className="text-primary w-16 h-16 group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
