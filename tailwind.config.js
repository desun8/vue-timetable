module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "fade-in-down": "fpFadeInDown 0.3s cubic-bezier(.23,1,.32,1) forwards",
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
