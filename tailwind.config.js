module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth:{
        "10":"10px"
      },
      maxWidth:{
        '32': '8rem'
      }
    },
  },
  variants: {
    extend: {
    
    },
  },
  plugins: [],
};
