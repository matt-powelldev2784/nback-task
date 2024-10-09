export default {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#356597',
        lightBlue: '#337bcc'
      },
      screens: {
        sm: '0px',
        md: '600px',
        lg: '1100px'
      },
      fontSize: {
        xs: ['12px', '18px'],
        sm: ['15px', '21px'],
        base: ['18px', '28px'],
        lg: ['18px', '28px'],
        xl: ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
        '4xl': ['36px', '40px'],
        '5xl': ['48px', '52px'],
        '6xl': ['60px', '64px'],
        '7xl': ['72px', '80px'],
        '8xl': ['96px', '104px'],
        '9xl': ['128px', '136px'],
        '10xl': ['160px', '168px']
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.flexCol': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          flexWrap: 'wrap',
          width: '100%'
        },
        '.flexRow': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '100%'
        }
      })
    }
  ]
}
