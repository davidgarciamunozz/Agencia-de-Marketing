/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "orange-button":"#FF561E",
      },
      transitionProperty: {
        'object-fit': 'object-fit'
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out'
      },
      transitionDuration: {
        '500': '500ms'
      }
    },
    boxShadow:{
      navbar: '0px 10px 8px 0px rgba(3,3,4,0.03), 0 1px 2px -1px rgba(3,3,4,0.03)',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.transition-handled': {
          transition: '0.5s ease-in-out',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

