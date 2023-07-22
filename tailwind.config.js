/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      primary:'#0b2926',
      secondary:'#95ce45',
      tertiary:'#0aedb7',
      quaternary:'#ffed4b',
      white:'#ffffff',
      black:'#000000',
      gray:'#E1E1E1',
      gray2:'#898989',
      

    },
    extend: {
      
    },
  },
  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      {
        myTheme: {
          primary:'#0b2926',
          secondary:'#95ce45',
          tertiary:'#0aedb7',
          quaternary:'#ffed4b',
          white:'#ffffff',
          black:'#000000',
          gray:'#E1E1E1',
          gray2:'#898989',
          success:'#2d801a',
        }
      }
    ]
  }
}
