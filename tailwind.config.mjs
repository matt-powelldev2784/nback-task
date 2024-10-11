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
        xs: ['14px', '20px'],
        sm: ['17px', '23px'],
        base: ['20px', '30px'],
        lg: ['20px', '30px'],
        xl: ['22px', '30px'],
        '2xl': ['26px', '34px'],
        '3xl': ['32px', '40px'],
        '4xl': ['38px', '42px'],
        '5xl': ['50px', '54px'],
        '6xl': ['62px', '66px'],
        '7xl': ['74px', '82px'],
        '8xl': ['98px', '106px'],
        '9xl': ['130px', '138px'],
        '10xl': ['162px', '170px']
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
