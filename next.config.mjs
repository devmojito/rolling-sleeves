/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/food-beverage-consulting",
        destination: "/services/menu-culinary-development",
        permanent: true,
      },
      // Hidden until real case studies and articles are ready.
      { source: "/portfolio", destination: "/", permanent: false },
      { source: "/blog", destination: "/", permanent: false },
    ];
  },
  // Narrow what webpack watches in dev — reduces flaky rebuilds when tooling
  // touches ignored dirs and helps avoid half-written .next chunks on slow disks.
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          "**/node_modules/**",
          "**/.git/**",
          "**/.next/**",
        ],
      };
    }
    return config;
  },
};

export default nextConfig;
