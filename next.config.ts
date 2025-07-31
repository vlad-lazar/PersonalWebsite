// PWA support
const withPWA = require("next-pwa")(require("./next-pwa.config.ts"));

const nextConfig = withPWA({
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
});

module.exports = nextConfig;
