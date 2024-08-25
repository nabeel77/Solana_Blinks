/** @type {import('next').NextConfig} */
const nextConfig = {
    source: "/actions.json",
    headers: [
      { key: "Access-Control-Allow-Origin", value: "*" },
      { key: "Content-Type", value: "application/json" },
    ]
};

export default nextConfig;
