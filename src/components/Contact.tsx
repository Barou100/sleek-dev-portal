
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary-foreground text-sm font-medium">
            Contact
          </span>
          <h2 className="text-3xl font-bold tracking-tight">Get in touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>
          <div className="flex justify-center gap-4 pt-6">
            <Button
              variant="outline"
              className="glass"
              onClick={() => window.location.href = 'mailto:your.email@example.com'}
            >
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Button>
            <Button
              variant="outline"
              className="glass"
              onClick={() => window.open('https://github.com/yourusername', '_blank')}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button
              variant="outline"
              className="glass"
              onClick={() => window.open('https://linkedin.com/in/yourusername', '_blank')}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
