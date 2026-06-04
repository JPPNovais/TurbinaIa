import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Canonicalização de host: força tudo para https://www.turbinaia.com.br
  // O Google estava indexando 4 variantes (www, sem-www, http) e dividindo a
  // autoridade. Estes 301 consolidam todos os sinais em um único domínio.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'turbinaia.com.br' }],
        destination: 'https://www.turbinaia.com.br/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
