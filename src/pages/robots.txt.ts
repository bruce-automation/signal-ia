import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `User-agent: *\nAllow: /\n\nSitemap: ${sitemapURL.href}\n`;

export const GET: APIRoute = ({ site }) => {
  const basePath = import.meta.env.BASE_URL.replace(/^\/?|\/?$/g, '');
  const sitemapURL = new URL(`${basePath ? `${basePath}/` : ''}sitemap-index.xml`, site);

  return new Response(getRobotsTxt(sitemapURL), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
