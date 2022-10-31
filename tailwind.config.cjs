const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,svelte,ts}',
        './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
    theme: {
        screens: {
            xs: '475px',
            ...defaultTheme.screens,
        },

        extend: {},
    },
    variants: {},
    plugins: [require('flowbite/plugin')],
    darkMode: 'class'
}
