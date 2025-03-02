"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";
import { useRef } from "react";
import { projects } from "@/data/project";
import ProjectCard from "./ProjectCard";

export default function ProjectsContainer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      container: containerRef,
    });
  
    const smoothProgress = useSpring(scrollYProgress, {
      damping: 15,
      mass: 0.27,
      stiffness: 55,
    });
  
    // Create individual transforms for each project
    const transform1 = useTransform(smoothProgress, [0, 0.25], [0, -50]);
  
    const transform2 = useTransform(smoothProgress, [0.25, 0.5], [0, -50]);
  
    const transform3 = useTransform(smoothProgress, [0.5, 0.75], [0, -50]);
  
    const transform4 = useTransform(smoothProgress, [0.75, 1], [0, -50]);
  
    const transforms = [transform1, transform2, transform3, transform4];
  
    return (
      <div className="relative w-full px-2">
        <div className="absolute -right-4 top-0 bottom-0 w-4 flex flex-col justify-between pointer-events-none text-sm text-primary-400">
          <span>01</span>
          <span>{projects.length.toString().padStart(2, "0")}</span>
        </div>
  
        <div
          ref={containerRef}
          className="h-[70vh] overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-black/20 scrollbar-thumb-primary-500 w-full"
        >
          <div className="flex flex-col gap-8 md:gap-20">
            {projects.map((project, index) => (
              <motion.div key={project.id} style={{ y: transforms[index] }}>
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