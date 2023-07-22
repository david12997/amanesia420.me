import './globals.css'
import type { Metadata } from 'next'
import { Gothic_A1 } from 'next/font/google'

//set icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


const gothic = Gothic_A1({ weight: ['100','200','300','400','500','600','800','900'], subsets:['latin']})

export const metadata: Metadata = {
  title: 'Amnesia | Tienda Cannabica |Jardineria',
  description: 'Encuentra accesorios cannabicos y de jardineria para tu cultivo, tales como semillas abono pipas grinders blunts y más',
  keywords:'cannabis, cueros, semillas, abono, pipas, grinders, blunts, cultivo, jardineria, cannabis, marihuana, accesorios, tienda, growshop, grow, indoor, outdoor, cultivo, hidroponico, organico, organica, organicos, organicas, organicas,',
  robots:'index, nofollow'

}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
      <meta property="og:title" content="Amnesia tienda de accesorios cannabicos y jardineria"/>
      <meta property="og:description" content="Encuentra accesorios cannabicos y de jardineria para tu cultivo"/>
      <meta property="og:url" content="https://amnesia420.me/"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="https://cms.aipus.co/uploads/post_principal_45c81f2f8b.webp"/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>
      <meta property="og:image:alt" content="Compra accesorios cannabicos de manera facil y segura"/>

      <meta property="og:site_name" content="Amnesia tienda de accesorios cannabicos y jardineria"/>

        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body className={gothic.className}>
        {children}
      </body>
    </html>
  )
}
