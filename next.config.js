/** @type {import('next').NextConfig} */
const nextConfig = {
    // This is the property you need to add
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },

}

module.exports = nextConfig
