/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},

        fontFamily: {
            Antonio: "Antonio, sans-serif",
        },

        colors: {
            primary: "#fe7a01",
            secondary: {
                main: "#012e2f",
                200: "#011727",
            },
            white: "#edebe9",
        },
    },
    plugins: [],
};
