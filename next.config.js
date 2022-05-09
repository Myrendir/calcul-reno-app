/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        URL_JAD_API: process.env.URL_JAD_API
    }
}

module.exports = nextConfig
