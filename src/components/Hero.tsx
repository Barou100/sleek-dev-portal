
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center space-y-6 animate-in">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-3 py-1 rounded-full bg-primary/10 text-primary-foreground text-sm font-medium"
        >
          Welcome to my portfolio
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Hi, I'm [Your Name]
          <br />
          Software Developer
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          I build exceptional digital experiences with clean, efficient code.
          Focused on creating intuitive and performant applications.
        </motion.p>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-8"
      >
        <ArrowDown className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
