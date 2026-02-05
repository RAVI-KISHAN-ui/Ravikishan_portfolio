import { motion } from "framer-motion";
import { ExternalLink, Github, Music, Lock, MessageCircle, Link, Coffee, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Spotify Clone",
    description: "Spotify-inspired music streaming UI with playlists, playback controls, and responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: Music,
    gradient: "from-accent-emerald to-accent-teal",
    github: "#",
    demo: "#",
  },
  {
    title: "Password Manager",
    description: "Secure password management app with encrypted storage and intuitive form handling.",
    tech: ["React", "Tailwind CSS"],
    icon: Lock,
    gradient: "from-primary to-accent",
    github: "#",
    demo: "#",
  },
  {
    title: "X.com Clone",
    description: "Twitter-inspired social media UI with tweet feed, sidebar navigation, and real-time feel.",
    tech: ["Tailwind CSS", "JavaScript"],
    icon: MessageCircle,
    gradient: "from-accent-violet to-accent-purple",
    github: "#",
    demo: "#",
  },
  {
    title: "Linktree App",
    description: "Mobile-first link aggregator to showcase multiple social and professional profiles.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: Link,
    gradient: "from-accent-yellow to-accent-orange",
    github: "#",
    demo: "#",
  },
  {
    title: "GetMeAChai",
    description: "Patreon-style creator support platform with authentication, profiles, and payment integration.",
    tech: ["Next.js", "Tailwind CSS", "Auth"],
    icon: Coffee,
    gradient: "from-accent-orange to-destructive",
    github: "#",
    demo: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
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
            Portfolio
          </motion.span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle mx-auto mt-4">
            A collection of projects showcasing my skills and passion for development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                {/* Project Header with Icon */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-50" />
                  
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl"
                  >
                    <project.icon className="w-12 h-12 text-primary-foreground" />
                  </motion.div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-3">
                      <a
                        href={project.demo}
                        className="p-3 bg-primary-foreground rounded-full hover:scale-110 transition-transform"
                      >
                        <ExternalLink className="w-5 h-5 text-foreground" />
                      </a>
                      <a
                        href={project.github}
                        className="p-3 bg-primary-foreground rounded-full hover:scale-110 transition-transform"
                      >
                        <Github className="w-5 h-5 text-foreground" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/RAVI-KISHAN-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
