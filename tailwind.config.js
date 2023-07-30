// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./apps/Main.vue",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "450px",
      sm: "640px"
    },
    extend: {
      backgroundImage: {
        "auth-white": "url('/src/assets/images/bg-auth.jpeg')",
        "auth-dark1": "url('/src/assets/images/bg-auth-dark-1.jpeg')",
        "auth-dark2": "url('/src/assets/images/bg-auth-dark-2.jpeg')",
      },
    },
  },
  plugins: [],
};
