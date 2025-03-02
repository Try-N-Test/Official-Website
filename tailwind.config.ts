import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
  		},
  		colors: {
  			background: '#121212',
  			primary: {
  				'50': '#EAFAFA',
  				'100': '#C1F0F0',
  				'200': '#98E5E6',
  				'300': '#6FDBDC',
  				'400': '#46D1D2',
  				'500': '#2DB7B9',
  				'600': '#269B9C',
  				'700': '#257E7F',
  				'800': '#196667',
  				'900': '#0F3D3E',
  				'950': '#051415'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			shine: 'shine var(--duration) infinite linear'
  		},
  		keyframes: {
  			shine: {
  				'0%': {
  					'background-position': '0% 0%'
  				},
  				'50%': {
  					'background-position': '100% 100%'
  				},
  				to: {
  					'background-position': '0% 0%'
  				}
  			}
  		}
  	}
  },
  plugins: [
	require("tailwindcss-animate"),
	require("tailwind-scrollbar")({ nocompatible: true }),
  ],
} satisfies Config;
