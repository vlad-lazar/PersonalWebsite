/** @type {import('next-pwa').PWAConfig} */
const runtimeCaching = require("next-pwa/cache");

module.exports = {
  dest: "public",
  runtimeCaching,
  register: true,
  skipWaiting: true,
};
