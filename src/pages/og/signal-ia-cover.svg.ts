import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0B1020"/>
        <stop offset="1" stop-color="#182241"/>
      </linearGradient>
      <linearGradient id="accent" x1="180" y1="120" x2="960" y2="520" gradientUnits="userSpaceOnUse">
        <stop stop-color="#8AB4FF"/>
        <stop offset="1" stop-color="#6EE7C8"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" rx="32" fill="url(#bg)"/>
    <circle cx="980" cy="122" r="140" fill="#8AB4FF" fill-opacity="0.08"/>
    <circle cx="208" cy="516" r="170" fill="#6EE7C8" fill-opacity="0.08"/>
    <rect x="90" y="80" width="1020" height="470" rx="28" fill="#111832" stroke="rgba(255,255,255,0.08)"/>
    <text x="140" y="190" fill="#8AB4FF" font-size="28" font-family="Inter, Arial, sans-serif" font-weight="700">Signal IA</text>
    <text x="140" y="290" fill="#EDF2FF" font-size="72" font-family="Inter, Arial, sans-serif" font-weight="800">Le média francophone</text>
    <text x="140" y="370" fill="#EDF2FF" font-size="72" font-family="Inter, Arial, sans-serif" font-weight="800">qui filtre le bruit</text>
    <text x="140" y="450" fill="#EDF2FF" font-size="72" font-family="Inter, Arial, sans-serif" font-weight="800">de l’IA.</text>
    <text x="140" y="510" fill="#A6B2D9" font-size="30" font-family="Inter, Arial, sans-serif">Comparatifs, guides, agents, outils, business.</text>
    <rect x="140" y="112" width="82" height="6" rx="3" fill="url(#accent)"/>
  </svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
