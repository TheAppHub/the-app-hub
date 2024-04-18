module.exports = {
	content: ['./assets/**/*.{html,js}', './*.html'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				lg: '1124px',
				xl: '1124px',
				'2xl': '1124px',
			},
		},
		fontFamily: {
			Nunito: ['Nunito', 'sans-serif'],
		},
		extend: {
			colors: {
				'apphub-blue': '#0082c6',
				'apphub-blue2': '#1e3f6d',
				'apphub-red': '#C64400',
				'apphub-grey': '#9194a2',
				'apphub-white': '#f7f7f7',
			},
			animation: {
				floating:
					'moving-icon 25s linear infinite reverse, floating-icon 5s ease-in-out infinite',
			},
			keyframes: {
				'moving-icon': {
					from: {
						transform: 'translateX(-200px)',
					},
					to: {
						transform: 'translateX(calc(100vw + 100px))',
					},
				},
				'floating-icon': {
					'0%': {
						top: '0',
					},
					'50%': {
						top: '5%',
					},
					'100%': {
						top: '0',
					},
				},
			},
		},
	},
	plugins: [require('tailwindcss'), require('autoprefixer')],
};
