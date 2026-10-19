'use client';

import { unsplashUrl } from './unsplash';

/**
 * Loader global do next/image (next.config.ts → images.loaderFile): pede ao
 * CDN do Unsplash a largura exata de cada entrada do srcset, em AVIF/WebP.
 * Imagens de outras origens seguem como estão.
 */
export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  return unsplashUrl(src, width, { quality });
}
