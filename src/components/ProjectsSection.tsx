import { motion } from "framer-motion";
import raytracerImg from "@/assets/raytracer.png";
import rpgImg from "@/assets/rpg.png";
import rtypeImg from "@/assets/rtype.png";
import rtypeVideo from "@/assets/rtype.gif";
import rpgVideo from "@/assets/rpg.mov";
import saoubImg from "@/assets/saoub.png";

const projects = [
  {
    title: "R-Type",
    description:
      "A networked multiplayer recreation of the classic R-Type shoot'em up. Features client-server architecture, entity component system, and real-time synchronization.",
    tags: ["C++", "Networking", "UDP", "ECS", "Multiplayer"],
    image: rtypeImg,
    video: rtypeVideo,
  },
  {
    title: "Raytracer",
    description:
      "A fully custom raytracing engine built from scratch. Handles reflections, refractions, shadows, and multiple light sources with configurable scenes and materials.",
    tags: ["C++", "Mathematics", "3D Rendering", "Multithreading"],
    image: raytracerImg,
  },
  {
    title: "My_RPG",
    description:
      "A self-made RPG featuring an inventory system, combat mechanics, and NPC interactions. Built with a custom game loop and rendering pipeline.",
    tags: ["C", "CSFML", "Game Design"],
    image: rpgImg,
    video: rpgVideo,
  },
  {
    title: "SAOUB Private Server",
    description:
      "Reverse engineering project to revive SAO Alicization Rising Steel. Includes APK decompilation, network protocol analysis, custom backend server, and modified Android client to connect to private infrastructure.",
    tags: ["Reverse Engineering", "Android", "Unity", "Python/Node.js", "Network Protocols"],
    image: saoubImg,
  },
];

const isGif = (src: string) =>
  typeof src === "string" && src.toLowerCase().endsWith(".gif");

const ProjectsSection = () => {
  return (
    <section id="projects">
      {/* Section header */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-primary text-sm tracking-[0.2em] uppercase mb-2">
              // Featured Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Projects
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Full-screen project slides */}
      {projects.map((project, i) => (
        <div
          key={project.title}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={`${project.title} project screenshot`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-[92rem] mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-6xl md:text-7xl font-bold text-foreground mt-2 mb-8">
                {project.title}
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-sm font-mono bg-secondary text-primary rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Image / Video side */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden border border-border border-glow">
                {"video" in project && project.video ? (
                  isGif(project.video) ? (
                    <img
                      src={project.video}
                      alt={`${project.title} showcase`}
                      className="w-full aspect-video object-cover"
                    />
                  ) : (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-video object-cover"
                    />
                  )
                ) : (
                  <img
                    src={project.image}
                    alt={`${project.title} showcase`}
                    className="w-full aspect-video object-cover"
                  />
                )}
              </div>
            </motion.div>
          </div>

          {/* Project number watermark
          <div className="absolute bottom-10 right-10 font-mono text-[8rem] font-bold text-foreground/[0.03] leading-none select-none">
            {String(i + 1).padStart(2, "0")}
          </div> */}
        </div>
      ))}
    </section>
  );
};

export default ProjectsSection;
