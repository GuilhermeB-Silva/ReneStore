module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        maxWidth:{
          'maxW':'87.28%',
          'max75%':'75%',
          '630px':'630px',
          '500px':'500px',
          '330px':'20.625rem',
          '530px':'33.125rem',
          '754px':'754px'
        },
        width:{
          'logoImg':'9.26rem',
          'iconMenu':'3.16rem',
          'renee':'210px',
          '269':"269px",
          'inherit':'inherit',
          '210px':'13.125rem',
          '138px':'8.6625rem',
          '40%':'40%',
          '80.8%':'80.8%',
        },
        height:{
          'logoImg':'4.125rem',
          'iconMenu':'2.59rem',
          'banner':'calc(100vh - 10rem)',
          'renee':'212.53px',
          '270':'270px',
          '360px':'360px',
          '700px':'700px'

        },
        padding:{
          'xpad':'1.395625rem',
          '50':'3.125rem',
          '60':'3.75rem',
          'py13':'0.8125rem',
          '39px':'2.4375rem',
          '59px':'3.6875rem',
          '13px':'0.8125rem',
          '59px':'3.6875rem',
          '41px':'2.5625rem',
          '25px':'1.5625rem',
          '120px':'7.5rem',
          '152px':'9.5rem',
          '62px':'3.875rem',
          '86px':'5.375rem',
          '49px':'3.0625rem'
        },
        boxShadow:{
          'boxbutton':'0px 0px 3px #000'
        },
        backgroundImage: theme => ({
          'banner': "url('/src/Assets/images/banner.png')",
          'linearheader':'linear-gradient(180deg, #000000 29.73%, rgba(0, 0, 0, 0) 100%)',
         }),
         textColor:{
            'brownTxt':'#BE9667',
            'darkBlueTxt':'#014561',
            'dark2BlueTxt':'rgba(2, 75, 104, 0.68)',
            'lightBlueTxt':'#1C86A4',
            'gray1Txt':'#E5E5E5',
            'gray2Txt':'#4F4F4F',
            'gray3Txt':'#828282',
            'gray4Txt':'#E0E0E0',
            'gray5Txt':'#C4C4C4',
            'gray6Txt':'#727272',
            'gray7Txt':'#BDBDBD',
            'gray8Txt':'#F2F2F2',
            'gray9Txt':'#949494'
         },
         colors:{
          'darkBlue':'#014561',
          'backrgba':'rgba(2, 75, 104, 0.81)',
          'backrgba2':'rgba(1, 69, 97, 1)',
          'blue-hover':'rgba(2, 75,120, 0.81)',
          'brown':'#BE9667',
          'headerbg':'rgba(10,10,10,1)',
          'condition':'rgba(0, 36, 50, 0.85)',
          'linearheader':'linear-gradient(180deg, #000000 29.73%, rgba(0, 0, 0, 0) 100%)',
          'backgroundgray':'#EFF7F9'
         },
         fontFamily:{
          'playFair':['"Playfair Display"','sans-serif'],
          'cormorant':['Cormorant','sans-serif'],
          'poppins':['Poppins','sans-serif'],
          'lato':['Lato','sans-serif'],

        },
         fontSize:{
           '11875':'1.1875rem',
           '1375':'1.375rem',
           '26':'1.625rem',
           '28':'1.75rem',
           '2375':'2.375rem',
           '33125':'3.3125rem',
           '18px':'1.125rem'
         },
         lineHeight: {
          'line16':'1.6rem',
          'line6': '6rem',
          'line19525':'1.9525rem',
          'line287625':"2.87625rem",
         },
         margin:{
           '146':'9.14375rem',
           '41':'2.5625rem',
           '25px':'25px',
           '33':'2.0625rem',
           '11':'0.6875rem',
           '29':'1.8125rem',
           '42':'2.625rem',
           '5029':'3.143125rem',
           '18px':'1.125rem',
           '39px':'2.4375rem',
           '23px':'1.14375rem',
           '43px':'2.6875rem',
           '30px':'1.875rem',
           '28px':'1.75rem',
           '54px':'3.375rem',
           '60px':'3.75rem',
           '30px':'1.875rem',
           '19px':'1.1875rem',
           '68.23px':'4.264375rem',
           '46px':'2.875rem',
           '87.52px':'5.47rem',
           '66px':'4.125rem',
           '93px':'5.8125rem',
           '50px':'3.125rem',
           '27px':'1.6875rem',
           '57px':'3.5625rem',
           '53px':'3.3125rem'
         },
         zIndex: {
          '1-': '-1',
         },
         borderColor:{
           'blueBorder':'#1C86A4',
           'brown':'#BE9667',
           'grayBorder':'#C4C4C4',
           'lightgray':'#CCCCCC'
         },
         gridTemplateColumns:{
           'maingrid':'auto, 1fr'
         },
         gridTemplateRows:{
           'rows3':'repeat(2,auto)'
         },
         inset: {
          '-25': '-8rem',
         }
      },
      fontFamily:{
        'sans':['Lato','sans-serif'],
        'serif': ['Merriweather', 'serif'],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }