"use client"

import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { V2 } from "@/lib/fonts";
import { Project, projects } from "@/data/project";
import Link from "next/link";


  function ProjectsContainer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      container: containerRef,
    });
  
    const smoothProgress = useSpring(scrollYProgress, {
      damping: 15,
      mass: 0.27,
      stiffness: 55
    });
  
    // Create individual transforms for each project
    const transform1 = useTransform(
      smoothProgress,
      [0, 0.25],
      [0, -50]
    );
    
    const transform2 = useTransform(
      smoothProgress,
      [0.25, 0.5],
      [0, -50]
    );
    
    const transform3 = useTransform(
      smoothProgress,
      [0.5, 0.75],
      [0, -50]
    );
    
    const transform4 = useTransform(
      smoothProgress,
      [0.75, 1],
      [0, -50]
    );
  
    const transforms = [transform1, transform2, transform3, transform4];
  
    return (
      <div className="relative">
        <div className="absolute -right-4 top-0 bottom-0 w-4 flex flex-col justify-between pointer-events-none text-sm text-primary-400">
          <span>01</span>
          <span>{projects.length.toString().padStart(2, '0')}</span>
        </div>
  
        <div 
          ref={containerRef}
          className="h-[70vh] overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-black/20 scrollbar-thumb-primary-500"
        >
          <div className="flex flex-col gap-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                style={{ y: transforms[index] }}
              >
                <ProjectCard 
                  project={project} 
                  index={index}
                  progress={smoothProgress}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  function ProjectCard({ 
    project, 
    index, 
    progress 
  }: { 
    project: Project; 
    index: number;
    progress: MotionValue<number>;
  }) {
    const scale = useTransform(
      progress,
      [0, 0.25, 0.5, 0.75, 1],
      [1, index === 0 ? 0.95 : 1, index === 1 ? 0.95 : 1, index === 2 ? 0.95 : 1, index === 3 ? 0.95 : 1]
    );
  
    const opacity = useTransform(
      progress,
      [0, 0.25, 0.5, 0.75, 1],
      [1, index === 0 ? 0.7 : 1, index === 1 ? 0.7 : 1, index === 2 ? 0.7 : 1, index === 3 ? 0.7 : 1]
    );
  
    return (
      <motion.div
        style={{ scale, opacity }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
      <div className="space-y-8">
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="flex items-center gap-4">
            <h3 className={`text-3xl text-gray-100 md:text-4xl font-bold ${V2.className}`}>
              Project <span className="text-primary-400">{project.name}</span>
            </h3>
            <div className="text-primary-400 text-sm">
              {(index + 1).toString().padStart(2, '0')}
            </div>
          </div>
          <p className="text-primary-400/80 text-lg leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-100 font-medium">
              Contributors:
            </span>
            {project.contributors.map((contributor, i) => (
              <span 
                key={i} 
                className="text-sm text-primary-400/60 bg-primary-400/5 px-3 py-1 rounded-full"
              >
                {contributor}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
        >
          {project.features.map((feature, i) => (
            <motion.div 
              key={i} 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: (index * 0.3) + (i * 0.1) }}
            >
              <div className="w-6 h-6 border border-primary-400 rounded flex-shrink-0" />
              <p className="text-primary-400/80">{feature}</p>
            </motion.div>
          ))}
        <motion.button
          className="bg-transparent hover:bg-primary-400/10 text-primary-400 border-primary-400 border rounded-full px-8 py-2 text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: (index * 0.3) + 0.5 }} // Appears after features
          >
          <Link href={project.link}>
          Learn More
            </Link>
        </motion.button>
        </motion.div>

      </div>

      <motion.div 
        className="relative rounded-2xl aspect-[19/9] border col-span-2 border-primary-400/20 overflow-hidden bg-primary-950/30"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          quality={100}
          className="object-cover opacity-80"
          sizes="(max-width: 1280px) 100vw, 50vw"
        />
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
      <motion.h2 
          className={`text-4xl md:text-6xl max-w-[28rem] mx-auto font-bold mb-16 text-center ${V2.className} bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-primary-50 to-primary-500`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Projects
        </motion.h2>

        <ProjectsContainer />
      </div>
    </section>
  );
}