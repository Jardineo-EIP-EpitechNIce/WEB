import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      { source: '/privacy-policy', destination: '/confidentialite', permanent: true },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/landing/index.html' },
        { source: '/mentions-legales', destination: '/landing/mentions-legales.html' },
        { source: '/confidentialite', destination: '/landing/confidentialite.html' },
      ],
    };
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com; connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com; frame-src https://www.googletagmanager.com; frame-ancestors 'none';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
