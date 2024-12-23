import { StaticImageData } from 'next/image';
import FirstAid from '@/assets/Projects/1.png'
import HealthOptima from '@/assets/Projects/2.png'
import Projecify from '@/assets/Projects/3.png'
import AnuvaadSangam from '@/assets/Projects/4.png'

export interface Project {
    id: number;
    name: string;
    description: string;
    contributors: string[];
    features: string[];
    link: string;
    image: StaticImageData;
  }

  export const projects: Project[] = [
    {
      id: 1,
      name: "The First Aid",
      description: "A medical application designed for emergencies, offering tools like nominee management and MPIN-based consent for seamless and secure interactions.",
      contributors: ["Dipesh Ranjan", "Isheta Aggarwal", "Kislay Gupta", "Ankit Panigrahi"],
      features: [
        "Nominee management",
        "MPIN-based consent"
      ],
      link: "https://the-first-aid.vercel.app/",
      image: FirstAid
    },
    {
      id: 2,
      name: "Health Optima",
      description: "A healthcare and wellness application with features for managing blogs and various tools that promote a healthier lifestyle.",
      contributors: ["Dipesh Ranjan", "Isheta Aggarwal"],
      features: [
        "Blog management",
        "Healthcare chatbot"
      ],
      link: "https://healthoptima.in/",
      image: HealthOptima
    },
    {
      id: 3,
      name: "Projecify",
      description: "A comprehensive project management tool that simplifies task assignments and tracks the status of team deliverables effectively.",
      contributors: ["Dipesh Ranjan"],
      features: [
        "Task assignment",
        "Status tracking"
      ],
      link: "https://projecify.vercel.app/",
      image: Projecify
    },
    {
      id: 4,
      name: "Anuvaad Sangam",
      description: "A cross-language chat application enabling real-time translation and communication between users speaking different languages.",
      contributors: ["Dipesh Ranjan", "Isheta Aggarwal", "Rajat Srivastava"],
      features: [
        "Cross-language chat",
        "Real-time translation"
      ],
      link: "https://github.com/dipesh2508/anuvaad-sangam",
      image: AnuvaadSangam
    }
  ];
  
  