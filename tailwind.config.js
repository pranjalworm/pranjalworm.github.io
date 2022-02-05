module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveUp: {
          '0%': {
            transform: 'translateY(20px)'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        fadeIn: {
          '0%': {
            opacity: '0'
          },
          '50%': {
            opacity: '0.8'
          },
          '100%': {
            opacity: '1'
          }
        }
      },
      fontFamily: {
        title: ["futura-pt, sans-serif"],
        body: ["Helvetica, sans-serif"]
      }
    },
    plugins: [],
  }
}
