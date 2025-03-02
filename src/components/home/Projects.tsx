import { V2 } from "@/lib/fonts";
import ProjectsContainer from "@/components/project/ProjectContainer";
import MotionH2 from "@/components/animations/MotionH2";

export default function Projects() {
  return (
    <section className="py-24 px-0 w-full bg-background">
      <div className="px-8 md:px-16 w-full">
        <MotionH2
          className={`text-4xl md:text-6xl mx-auto font-bold mb-16 text-center ${V2.className} bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-primary-50 to-primary-500`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Projects
        </MotionH2>

        <ProjectsContainer />
      </div>
    </section>
  );
}
