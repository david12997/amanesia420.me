/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
          {
            protocol: 'https',
            hostname:'cms.aipus.co',
            port:'',
            pathname:'/uploads/**',
          }
        ],
      }
}

module.exports = nextConfig
