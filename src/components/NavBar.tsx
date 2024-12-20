'use client'
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Logo from '@/assets/Logo Full.png'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      whileHover={{
        boxShadow: "0 10px 40px 0 rgba(0,0,0,0.25)",
        transition: { duration: 0.3 }
      }}
      className="max-w-5xl md:mx-auto 
        rounded-2xl 
        backdrop-blur-lg 
        bg-background/20
        border border-white/[0.05]
        shadow-[0_8px_32px_0_rgba(0,0,0,0.26)]
        z-50
        before:absolute before:inset-0 before:-z-10 before:rounded-2xl  
        before:backdrop-blur-lg
        transition-all duration-300
        mx-8
        "
    >
      <div className="px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center"
        >
          <Link href="/">
              <Image
                src={Logo}
                alt="Try N Test Logo"
                width={200}
                height={100}
                className="h-20 w-auto"
                priority
              />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
            >
              <Link 
                href={item.href}
                className="text-white/90 hover:text-primary-400 transition-colors duration-300"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white/90 text-center hover:text-primary-400"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, height: 0 },
          visible: { opacity: 1, height: "auto" }
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden"
      >
        <div className="px-4 py-3 space-y-3">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className="block text-center text-white/90 hover:text-primary-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;