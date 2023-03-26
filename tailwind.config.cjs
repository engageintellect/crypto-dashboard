/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},

	daisyui: {
		themes: [
			{
				dracula: {
					primary: '#14b8a6',
					'primary-focus': '#570df8',
					'primary-content': '#ffffff',
					secondary: '#5eead4',
					'secondary-focus': '#0d9488',
					'secondary-content': '#ffffff',
					accent: '#2dd4bf',
					'accent-focus': '#2aa79b',
					'accent-content': '#ffffff',
					neutral: '#2a2e37',
					'neutral-focus': '#16181d',
					'neutral-content': '#ffffff',
					'base-100': '#334155',
					'base-200': '#1e293b',
					'base-300': '#131722',
					'base-content': '#ebecf0',
					info: '#66c6ff',
					success: '#87d039',
					warning: '#e2d562',
					error: '#ff6f6f'
				}
			},
			'light'
		]
	},
	plugins: [require('daisyui')]
};
