/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        WEATHER_API_KEY: process.env.WEATHER_API_KEY,
        WEATHER_BASE_URL: process.env.WEATHER_BASE_URL
    }
}

module.exports = nextConfig
