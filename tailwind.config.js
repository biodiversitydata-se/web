module.exports = {
    content: [
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './pages/**/*.md',
      './pages/**/*.html',
      './*.md',
      './*.html',
    ],
    darkMode: 'class',
    theme: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1040px',
        'xl': '1280px',
      },
      container: {
        center: true,
      },
      extend: {
        colors: {
        },
        fontFamily: {
          sans: [
            'Roboto',
            'ui-sans-serif',
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            '"Noto Sans"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"',
          ],
          text: [ 
            'Calibri',
            'ui-sans-serif',
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            '"Noto Sans"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"',
          ]
        }
      },
    },
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }