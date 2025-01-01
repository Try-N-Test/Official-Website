"use client";
import { useTransform, MotionValue, motion } from "motion/react";
import { V2 } from "@/lib/fonts";
import { Project } from "@/data/project";
import {} from "motion";
import Image from "next/image";

export default function ProjectCard({
  project,
  index,
  progress,
}: {
  project: Project;
  index: number;
  progress: MotionValue<number>;
}) {
  const scale = useTransform(
    progress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      1,
      index === 0 ? 0.95 : 1,
      index === 1 ? 0.95 : 1,
      index === 2 ? 0.95 : 1,
      index === 3 ? 0.95 : 1,
    ]
  );

  const opacity = useTransform(
    progress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      1,
      index === 0 ? 0.7 : 1,
      index === 1 ? 0.7 : 1,
      index === 2 ? 0.7 : 1,
      index === 3 ? 0.7 : 1,
    ]
  );

  return (
    <motion.div
      style={{ scale, opacity }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start md:pl-6"
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
          <div className="flex items-start gap-4 mx-auto">
            <h3
              className={`text-3xl text-gray-100 md:text-4xl font-bold md:whitespace-nowrap ${V2.className}`}
            >
              Project <span className="text-primary-400">{project.name}</span>
            </h3>
            <div className="text-primary-400 text-sm hidden md:block">
              {(index + 1).toString().padStart(2, "0")}
            </div>
          </div>
          <p className="text-primary-400/80 text-sm md:text-lg leading-relaxed">
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
          className="flex flex-col gap-6 text-sm md:text-base"
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
              transition={{ duration: 0.3, delay: index * 0.3 + i * 0.1 }}
            >
              <feature.icon className="w-6 h-6 text-primary-400 flex-shrink-0" />
              <p className="text-primary-400/80 my-auto">{feature.title}</p>
            </motion.div>
          ))}
          <div>
            <motion.button
              className="bg-transparent hover:bg-primary-400/10 text-primary-400 border-primary-400 border rounded-full px-8 py-2 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
              onClick={() => window.open(project.link, "_blank")}
            >
              Learn More
            </motion.button>
          </div>
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
