import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "Python", "TypeScript", "Rust"],
  },
  {
    title: "Game Dev",
    skills: ["SFML", "Raytracing", "ECS", "Game Physics", "Shaders"],
  },
  {
    title: "Tools & Systems",
    skills: ["Git", "Linux", "CMake", "Docker", "CI/CD"],
  },
  {
    title: "Concepts",
    skills: ["Networking", "Multithreading", "OOP", "Design Patterns", "Algorithms"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-[0.2em] uppercase mb-2">
            // Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Skills
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="text-primary font-mono text-sm font-semibold mb-4 tracking-wider uppercase">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
