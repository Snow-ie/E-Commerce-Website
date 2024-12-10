/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppin", sans-serif'],
      },
      colors: {
        primary: "#FAFAFA",
        primary2: "#000000",
        secondary: "#F5F5F5",
        secondary1: "#DB4444",
        secondary2: "#FFAD33",
        button1: "#00FF66",
        button2: "#DB4444",
        hoverbutton: "#E07575",
        frame: "#0D0D0D",
        circle: "#2F2E30",
        secondary3: "#CBE4E8",
        button3: "#00000066",
        button4: "#EB7EA8",
        secondary4: "#F5F5F5",
        button5: "#A0BCE0",
      },
      clipPath: {
        triangle: "polygon(0 0, 100% 0, 100% 50%, 0 100%)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/forms")],
};
