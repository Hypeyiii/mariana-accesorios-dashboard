import ignoreLoader from "ignore-loader";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.html$/,
      use: "ignore-loader",
      include: /node_modules\/@mapbox\/node-pre-gyp/,
    });
    return config;
  },
};

export default nextConfig;
