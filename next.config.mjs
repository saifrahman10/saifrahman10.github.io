/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages (writes to ./out on `next build`).
  output: 'export',
  // next/image optimization needs a server; disable it for static hosting.
  images: { unoptimized: true },
  // basePath is intentionally unset: this repo is a GitHub Pages *user* site
  // (saifrahman10.github.io), so it is served from the domain root.
};

export default nextConfig;
