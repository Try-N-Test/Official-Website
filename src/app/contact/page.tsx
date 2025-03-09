import { V2 } from "@/lib/fonts";
import MotionDiv from "@/components/animations/MotionDiv";
import Link from "next/link";
import { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import Dipesh from "@/assets/Team/Dipesh.jpg";
import Isheta from "@/assets/Team/Isheta.jpg";
import Rajat from "@/assets/Team/Rajat.jpg";
import Kislay from "@/assets/Team/Kislay.jpg";
import Ankit from "@/assets/Team/Ankit.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contact Us | Try N Test Foundation",
  description: "Get in touch with the Try N Test Foundation team. Connect with our developers, designers and engineers for your next project or collaboration.",
  openGraph: {
    title: "Contact Us | Try N Test Foundation",
    description: "Connect with our team of developers, designers and engineers for your next project or collaboration.",
    url: "https://tryntest.in/contact",
    siteName: "Try N Test Foundation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Try N Test Foundation",
    description: "Connect with our team of developers, designers and engineers for your next project or collaboration.",
  },
  alternates: {
    canonical: "https://tryntest.in/contact",
  },
};

interface TeamMemberContactProps {
  name: string;
  image: StaticImageData;
  role: string;
  email: string;
  github: string;
  linkedin?: string;
}

const TeamMemberContact = ({ name, image, role, email, github, linkedin }: TeamMemberContactProps) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center gap-6 rounded-2xl bg-primary-900/30 border border-primary-700/30 p-6 hover:border-primary-600/50 transition-all duration-300"
    >
      <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-teal-400/20 flex-shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="flex flex-col text-center md:text-left">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-primary-300 mb-2">{role}</p>
        <div className="space-y-1">
          <p className="text-white/80">
            <span className="text-primary-400">Email: </span>
            <Link href={`mailto:${email}`} className="hover:text-primary-300 transition-colors">
              {email}
            </Link>
          </p>
          <p className="text-white/80">
            <span className="text-primary-400">GitHub: </span>
            <Link href={github} target="_blank" rel="noopener noreferrer" className="hover:text-primary-300 transition-colors">
              {github.replace("https://github.com/", "")}
            </Link>
          </p>
          {linkedin && (
            <p className="text-white/80">
              <span className="text-primary-400">LinkedIn: </span>
              <Link href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary-300 transition-colors">
                {name}
              </Link>
            </p>
          )}
        </div>
      </div>
    </MotionDiv>
  );
};

export default function Contact() {
  const teamMembers: TeamMemberContactProps[] = [
    {
      name: "Dipesh Ranjan",
      image: Dipesh,
      role: "Team Lead & Full Stack Developer",
      email: "sinhadipesh25@gmail.com",
      github: "https://github.com/dipesh2508",
      linkedin: "https://linkedin.com/in/dipesh-ranjan"
    },
    {
      name: "Isheta Aggarwal",
      image: Isheta,
      role: "UI/UX Designer & Interface Developer",
      email: "aggarwalisheta20@gmail.com",
      github: "https://github.com/Isheta20",
      linkedin: "https://www.linkedin.com/in/isheta-aggarwal"
    },
    {
      name: "Rajat Srivastava",
      image: Rajat,
      role: "Backend Developer & DSA Expert",
      email: "rajatsrivastava4279@gmail.com",
      github: "https://github.com/Rajat4279",
      linkedin: "https://www.linkedin.com/in/rajat9305"
    },
    {
      name: "Kislay Gupta",
      image: Kislay,
      role: "Mobile Developer & Front End Developer",
      email: "kislaygupta007@gmail.com",
      github: "https://github.com/kislay-gupta",
      linkedin: 'https://www.linkedin.com/in/kislay-gupta'
    },
    {
      name: "Ankit Panigrahi",
      image: Ankit,
      role: "Devops Engineer & AI Enthusiast",
      email: "ankitpanigrahi0@gmail.com",
      github: "https://github.com/PanigrahiAnkit",
      linkedin: "https://www.linkedin.com/in/panigrahi0702/"
    },
  ];

  return (
    <main className="min-h-screen bg-background pt-24">
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16">
        <div className="relative rounded-[2.5rem] bg-transparent overflow-hidden border-background/20 border-2">
          <div className="relative px-8 py-12 z-30">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className={`text-4xl md:text-6xl font-bold text-center mb-8 ${V2.className} bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-primary-50 to-primary-500`}
              >
                Contact Us
              </h1>
              
              <div className="max-w-3xl mx-auto text-center mb-12">
                <p className="text-white/80 text-lg">
                  We&apos;d love to hear from you! Whether you have a project in mind, want to join our community, 
                  or just want to say hello, feel free to reach out to our team.
                </p>
              </div>

              <div className="mb-16">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 rounded-2xl bg-primary-800/30 border border-primary-700/30 p-6 max-w-3xl mx-auto">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-white mb-2">General Inquiries</h3>
                    <p className="text-white/80 mb-4">
                      For general questions, project inquiries, or collaboration opportunities:
                    </p>
                    <p className="text-xl text-primary-300">
                      <Link href="mailto:tnt.tryntest@gmail.com" className="hover:text-primary-200 transition-colors">
                        tnt.tryntest@gmail.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              <h2 className={`text-3xl font-bold text-center mb-10 ${V2.className} text-primary-300`}>
                Our Team Members
              </h2>

              <div className="space-y-6">
                {teamMembers.map((member, index) => (
                  <TeamMemberContact key={index} {...member} />
                ))}
              </div>

              <div className="mt-16 text-center">
                <h3 className={`text-2xl font-bold mb-4 ${V2.className} text-primary-300`}>
                  Connect With Us
                </h3>
                <p className="text-white/80 mb-6">
                  Follow us on social media to stay updated with our latest projects and events.
                </p>
                <div className="flex justify-center gap-8">
                  <Link 
                    href="https://github.com/try-n-test" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary-300 transition-colors text-3xl"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </Link>
                  <Link 
                    href="https://twitter.com/tryntest" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary-300 transition-colors text-3xl"
                    aria-label="X (Twitter)"
                  >
                    <FaXTwitter />
                  </Link>
                  <Link 
                    href="https://linkedin.com/company/tryntest" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary-300 transition-colors text-3xl"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </main>
  );
}
