/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{svelte,ts}","./index.html"],
    theme: {
        extend: {
            colors: {
                "theme-100": "#D3D3D3",
                "theme-200": "#919191 ",
                "theme-300": "#474747",
                "theme-400": "#313131",
                "theme-500": "#292929",
                "theme-600": "#232323",
                "theme-900": "#161616",
                selected: "#2292F1",
                scrollbar: "#474747",
            },
            screens:{
              "xxl":"1450px"
            }
        },
    },
    plugins: [],
};
