import { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'index.html',
		'./src/**/*.{html,vue,js}'
	],
	theme: {
		extend: {
			colors: {
				primary: '#3257ec',
				secondary: '#26ce85',
				tertiary: '#ffb800',
			},
			fontFamily: {
				sans: ['"Gabarito"', 'sans-serif']
			}
		},
	},
	plugins: [],
};

export default config;