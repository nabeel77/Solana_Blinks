/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
      return [
        {
          source: "/actions.json",
          headers: [
            { key: "Access-Control-Allow-Origin", value: "*" },
            { key: "Content-Type", value: "application/json" },
          ],
        },
  
      ];
    },
    async rewrites() {
      return [
        {
          source: "/",
          destination: "/",
        },
      ];
    },
  };
  
  export default nextConfig;