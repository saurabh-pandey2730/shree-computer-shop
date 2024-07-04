// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     'node_modules/flowbite-react/lib/esm/**/*.js',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [ require('flowbite/plugin')],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js' ,],
  theme: {
    extend: {
      colors: {
        navyLite: "#4a4c7e",
        navy: "#252641",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
   plugins: [ require('flowbite/plugin')],
};
