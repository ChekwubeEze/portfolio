/* @type {import('next').NextConfig} */
/*const nextConfig = {
  reactStrictMode: true,
}

/*module.exports = nextConfig*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
};

module.exports = nextConfig;

