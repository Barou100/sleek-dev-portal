
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary-foreground text-sm font-medium">
            About Me
          </span>
          <h2 className="text-3xl font-bold tracking-tight">
            Passionate about building amazing web experiences
          </h2>
          <p className="text-lg text-muted-foreground">
            With [X] years of experience in software development, I specialize in
            building modern web applications using cutting-edge technologies.
            I'm passionate about clean code, user experience, and solving complex
            problems with elegant solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
