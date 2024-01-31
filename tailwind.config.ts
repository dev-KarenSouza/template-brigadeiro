import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				brand: {
					100: "#CBA595",
					200: "#B26538",
					300: "#7C3E15",
					400: "#4A1B00",
					500: "#300E02",
					600: "#0D0502",
				},
			},
			screens: {
				xs: '450px',
				'xxl': "3500px",
			}
		},
	},
	plugins: [require('tailwindcss-animated')
	],
}
export default config
