/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-gradient":
          "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(232,75,23,0) 50%, rgba(0,0,0,0.99781162464986) 100%)",
      },
    },
  },
  plugins: [],
};
