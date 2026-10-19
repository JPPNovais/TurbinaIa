import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Capas LCP passam pelo otimizador (mesma origem). Cards, miniaturas e
    // imagens do texto usam o CDN do Unsplash direto (src/components/CdnImage).
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
      // Os filtros antigos da home (/?category=tutoriais) viraram páginas de
      // categoria indexáveis. 301 preserva links externos e o que já foi indexado.
      {
        source: '/',
        has: [{ type: 'query', key: 'category', value: '(?<cat>tutoriais|noticias|ferramentas)' }],
        destination: '/categoria/:cat',
        statusCode: 301,
      },
      // O hub de prompts é a própria Biblioteca de Prompts.
      {
        source: '/categoria/prompts',
        destination: '/prompts',
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
