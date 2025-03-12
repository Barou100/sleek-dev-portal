
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with React and TypeScript.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "Project Two",
    description: "Full-stack application with real-time features.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-6 mb-12">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary-foreground text-sm font-medium">
            Projects
          </span>
          <h2 className="text-3xl font-bold tracking-tight">
            Featured Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow glass">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-sm bg-secondary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    Source
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
