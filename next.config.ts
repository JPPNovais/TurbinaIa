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
  // Canonicalização de host (turbinaia.com.br → www) fica no painel da Vercel
  // (Domains → redirect 308), não aqui: o redirect de domínio da Vercel responde
  // antes do app, então uma regra de host neste arquivo nunca rodava e só
  // duplicaria a configuração. http → https é feito pela própria Vercel.
  async redirects() {
    return [
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
      // Posts sobre context engineering consolidados em um só: disputavam a mesma
      // busca. O conteúdo único dos outros foi incorporado ao guia de 2026.
      ...[
        'context-engineering-a-tecnica-que-esta-substituindo-o-prompt-engineering-em-times-de-ia',
        'engenharia-de-contexto-por-que-o-prompt-perfeito-parou-de-ser-suficiente-para-agentes-de-ia',
        'o-que-e-context-engineering-a-tecnica-que-esta-substituindo-o-prompt-perfeito-na-ia',
      ].map((slug) => ({
        source: `/blog/${slug}`,
        destination: '/blog/o-que-e-context-engineering-e-por-que-esta-substituindo-o-prompt-engineering-em-2026',
        statusCode: 301,
      })),
    ];
  },
};

export default nextConfig;
