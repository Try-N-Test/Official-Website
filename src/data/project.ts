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
        description: "Next-generation blockchain protocol utilizing quantum-resistant cryptography for enhanced security.",
        contributors:["Dipesh Ranjan", "Isheta Aggarwal", "Kislay Gupta", "Ankit Panigrahi"], 
        features: [
          "Post-quantum cryptography",
          "Scalable consensus mechanism"
        ],
        link: "https://the-first-aid.vercel.app/",
        image: FirstAid
      },
      {
        id: 2,
        name: "Health Optima",
        description: "Cross-chain bridge protocol enabling seamless asset transfer between different blockchain networks.",
        contributors: ["Dipesh Ranjan", "Isheta Aggarwal"],
        features: [
          "Multi-chain compatibility",
          "Atomic swap functionality"
        ],
        link: "https://healthoptima.in/",
        image: HealthOptima
      },
      {
        id: 3,
        name: "Projecify",
        description: "Privacy-focused layer-2 scaling solution with zero-knowledge proof implementation.",
        contributors: ["Dipesh Ranjan"],
        features: [
          "Zero-knowledge rollups",
          "Private transaction system"
        ],
        link: "https://projecify.vercel.app/",
        image: Projecify
      },
      {
          id: 4,
          name: "Anuvaad Sangam",
          contributors: ["Dipesh Ranjan", "Isheta Aggarwal", "Rajat Srivastava"],
          description: "Privacy-focused layer-2 scaling solution with zero-knowledge proof implementation.",
          features: [
            "Zero-knowledge rollups",
            "Private transaction system"
          ],
          link: "https://github.com/dipesh2508/anuvaad-sangam",
          image: AnuvaadSangam
        },
      
    ];