const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,svelte,ts}'
    ],
    theme: {
        screens: {
            xs: '475px',
            ...defaultTheme.screens,
        },

        extend: {},
    },
    variants: {},
    // TODO: remove flowbite plugin?
    plugins: [require('flowbite/plugin')],
    darkMode: 'class'
}
