import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";

const stack = ["C", "C++", "SFML / CSFML", "ECS Architecture", "Networking", "Git"];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-[0.2em] uppercase mb-2">
            // About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto md:mx-0">
              {/* Decorative glow border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 blur-sm" />
              <div className="relative rounded-2xl overflow-hidden border border-border border-glow aspect-[3/4]">
                <img
                  src={profileImg}
                  alt="Enzo Luis"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              {/* Name tag */}
              <div className="absolute -bottom-5 left-6 px-4 py-2 bg-card border border-border rounded-xl shadow-lg">
                <p className="font-mono text-sm text-primary font-semibold">Enzo Luis</p>
                <p className="font-mono text-xs text-muted-foreground">Epitech · 3rd year</p>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                I'm a 20-year-old developer studying at{" "}
                <span className="text-primary font-semibold">Epitech</span>, passionate about
                video games since as long as I can remember. From{" "}
                <span className="text-accent font-semibold">Zelda</span> to{" "}
                <span className="text-accent font-semibold">Destiny</span>, games shaped the
                way I think about code — as a craft, not just a skill.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What drives me is simple: creating experiences that other players will love
                just as much as I loved the ones that inspired me. I'm currently looking for
                a <span className="text-primary font-semibold">4-month internship</span> in
                game development where I can contribute, learn, and build something memorable.
              </p>
            </div>

            {/* Stack */}
            <div>
              <p className="font-mono text-xs text-muted-foreground tracking-[0.2em] uppercase mb-3">
                // Core Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                    className="px-3 py-1.5 text-sm font-mono bg-secondary text-primary rounded-lg border border-border hover:border-primary/50 transition-colors duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Status banner */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card">
              <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_hsl(22_90%_52%/0.8)] animate-pulse flex-shrink-0" />
              <p className="font-mono text-sm text-muted-foreground">
                Looking for a <span className="text-foreground font-semibold">4-month game dev internship</span>
                <span className="text-primary"> — available now</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
