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
  // If your repo is NOT your-username.github.io (project page),
  // e.g. https://your-username.github.io/portfolio
  // then uncomment and set basePath and assetPrefix:
  //
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio/',
};

module.exports = nextConfig;
