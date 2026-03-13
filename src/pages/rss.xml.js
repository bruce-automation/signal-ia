import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteDescription, siteName } from '../data/site';
import { getArticleUrl } from '../data/articles';

export async function GET(context) {
  const articles = (await getCollection('articles')).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );
  const basePath = import.meta.env.BASE_URL.replace(/^\/?|\/?$/g, '');
  const baseUrl = basePath ? `/${basePath}/` : '/';
  const site = new URL(baseUrl, context.site).toString();

  return rss({
    title: siteName,
    description: siteDescription,
    site,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.pubDate,
      link: getArticleUrl(article, baseUrl),
      categories: [article.data.category],
    })),
  });
}
