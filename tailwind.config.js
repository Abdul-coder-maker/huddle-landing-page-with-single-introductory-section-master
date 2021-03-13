module.exports = {
  purge: {
    content: ['./public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      "3xl": "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    },
    fontFamily: {
      'poppins': "Poppins, sans-serif",
      'sans': "Open Sans, sans-serif",
      'courgette': "Courgette, cursive",
    },
    extend: {
      spacing: {
        '5.5': "1.42rem",
      },
      colors: {
        'violet': "hsl(257, 40%, 49%)",
        "soft-magenta": "hsl(300, 69%, 71%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
