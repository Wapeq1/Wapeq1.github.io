import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-[0.2em] uppercase mb-2">
            // Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build Something
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            I'm actively looking for a game development internship. If you're working on exciting projects, I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-6"
        >
          <a
            href="mailto:enzo.luis@epitech.eu"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold border-glow transition-all duration-300 hover:brightness-110"
          >
            <Mail className="w-4 h-4" />
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/enzo-luis113"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-md font-semibold transition-all duration-300 hover:border-primary hover:text-primary"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Wapeq1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-md font-semibold transition-all duration-300 hover:border-primary hover:text-primary"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
