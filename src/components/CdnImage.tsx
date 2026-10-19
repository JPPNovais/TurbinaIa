'use client';

import Image, { type ImageProps } from 'next/image';
import imageLoader from '@/lib/image-loader';

/**
 * next/image servido direto pelo CDN do Unsplash (AVIF/WebP no tamanho exato),
 * para imagens abaixo da dobra: cards, miniaturas. Não consome a cota de
 * otimização de imagens da Vercel.
 *
 * A imagem principal (LCP) da página continua no <Image> padrão: vinda da mesma
 * origem do HTML ela não paga uma conexão nova antes de pintar.
 */
export default function CdnImage(props: Omit<ImageProps, 'loader'>) {
  return <Image {...props} loader={imageLoader} />;
}
