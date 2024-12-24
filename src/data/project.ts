import { StaticImageData } from 'next/image';
import FirstAid from '@/assets/Projects/1.png'
import HealthOptima from '@/assets/Projects/2.png'
import Projecify from '@/assets/Projects/3.png'
import AnuvaadSangam from '@/assets/Projects/4.png'
import { IconType } from 'react-icons';
import { IoPeopleCircle, IoChatbubbleEllipsesOutline, IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineHealthAndSafety, MdAssignment, MdOutlineTrackChanges } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { BsTranslate } from "react-icons/bs";

export interface Project {
    id: number;
    name: string;
    description: string;
    contributors: string[];
    features: {
      icon: IconType;
      title: string;
    }[];
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
        { 
          icon: IoPeopleCircle,
          title: "Nominee management"
        },
        { 
          icon: MdOutlineHealthAndSafety,
          title: "MPIN-based consent"
        }
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
        {
          icon: IoNewspaperOutline,
          title: "Blog management"
        },
        {
          icon: IoChatbubbleEllipsesOutline,
          title: "Healthcare chatbot"
        }
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
        {
          icon: MdAssignment,
          title: "Task assignment"
        },
        {
          icon: MdOutlineTrackChanges,
          title: "Status tracking"
        }
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
        {
          icon: BiTransfer,
          title: "Cross-language chat"
        },
        {
          icon: BsTranslate,
          title: "Real-time translation"
        }
      ],
      link: "https://github.com/dipesh2508/anuvaad-sangam",
      image: AnuvaadSangam
    }
  ];
  