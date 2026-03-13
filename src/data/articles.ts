import { getCollection, type CollectionEntry } from 'astro:content';

export type ArticleEntry = CollectionEntry<'articles'>;

function toSourceArticleId(article: ArticleEntry) {
  return article.id.replace(/\\.[^.]+$/, '');
}

export function getArticleSlug(article: ArticleEntry) {
  return article.data.slug;
}

export function getArticleRouteSlugs(article: ArticleEntry) {
  return [getArticleSlug(article), ...(article.data.redirectFrom ?? [])];
}

export function getArticleLegacyIds(article: ArticleEntry) {
  return [article.id, toSourceArticleId(article), ...getArticleRouteSlugs(article)];
}

export function getArticleUrl(article: ArticleEntry, baseUrl = '/') {
  return `${baseUrl}articles/${getArticleSlug(article)}/`;
}

export function getArticleLanguage(_article: ArticleEntry) {
  return 'en';
}

export function getArticleOgLocale(_article: ArticleEntry) {
  return 'en_US';
}

export function getArticleSchemaLanguage(_article: ArticleEntry) {
  return 'en-US';
}

function assertUniqueArticleRoutes(articles: ArticleEntry[]) {
  const seen = new Map<string, string>();

  for (const article of articles) {
    for (const routeSlug of getArticleRouteSlugs(article)) {
      const owner = seen.get(routeSlug);
      if (owner) {
        throw new Error(
          `Duplicate article route slug \"${routeSlug}\" detected between \"${owner}\" and \"${article.id}\". ` +
            'Each canonical slug and redirectFrom alias must be globally unique.',
        );
      }

      seen.set(routeSlug, article.id);
    }
  }

  return articles;
}

export async function getArticles() {
  return assertUniqueArticleRoutes(await getCollection('articles'));
}
