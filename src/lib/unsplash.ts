/**
 * URLs de imagem do Unsplash no tamanho exato pedido.
 *
 * O images.unsplash.com é servido pelo imgix: redimensiona por parâmetro de
 * URL e, com `auto=format`, entrega AVIF ou WebP conforme o navegador aceita.
 * Usar o CDN deles direto evita o desvio pelo otimizador da Vercel
 * (/_next/image), que além de mais lento consome a cota de transformações.
 */

const UNSPLASH_HOST = 'images.unsplash.com';

// Parâmetros de tamanho/formato que sempre reescrevemos. `fm=jpg` em especial
// forçaria JPEG mesmo em navegador que aceita AVIF; `crop=entropy` recortaria
// diferente do centro que o CSS (object-fit: cover) mostra.
const SIZE_PARAMS = ['w', 'h', 'q', 'fm', 'fit', 'auto', 'dpr', 'cs', 'crop'];

// q=60 no imgix dá AVIF/WebP visualmente iguais ao JPEG q=80 de origem com
// metade dos bytes (capa de 750px: 187 KB → 88 KB).
export const DEFAULT_QUALITY = 60;

export function isUnsplash(src: string): boolean {
  return src.startsWith(`https://${UNSPLASH_HOST}/`);
}

export function unsplashUrl(
  src: string,
  width: number,
  options: { quality?: number; height?: number } = {},
): string {
  if (!isUnsplash(src)) return src;
  let url: URL;
  try {
    url = new URL(src);
  } catch {
    return src;
  }
  for (const param of SIZE_PARAMS) url.searchParams.delete(param);
  url.searchParams.set('auto', 'format');
  url.searchParams.set('fit', 'crop');
  url.searchParams.set('w', String(Math.round(width)));
  if (options.height) url.searchParams.set('h', String(Math.round(options.height)));
  url.searchParams.set('q', String(options.quality ?? DEFAULT_QUALITY));
  return url.toString();
}

/**
 * Marca a proporção em que a imagem é exibida (o `ar` do imgix). O loader do
 * next/image recebe só a largura; com `ar` o CDN já entrega o recorte que o
 * container mostra, em vez da foto inteira (muitas são quase retrato).
 */
export function withAspectRatio(src: string | undefined, ratio: '16:9' | '16:10' | '1:1'): string {
  if (!src || !isUnsplash(src)) return src || '';
  try {
    const url = new URL(src);
    url.searchParams.set('ar', ratio);
    return url.toString();
  } catch {
    return src;
  }
}
