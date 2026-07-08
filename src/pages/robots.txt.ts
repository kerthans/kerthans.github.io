export function GET() {
  return new Response(`User-agent: *\nAllow: /\nSitemap: https://kerthans.github.io/sitemap-index.xml\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
