import type { CollectionEntry } from 'astro:content';

export function getArticleSlug(article: CollectionEntry<'articles'>) {
  return article.data.slug;
}

export function getArticleUrl(article: CollectionEntry<'articles'>, baseUrl = '/') {
  return `${baseUrl}articles/${getArticleSlug(article)}/`;
}

export function getArticleLanguage(article: CollectionEntry<'articles'>) {
  return article.data.locale === 'en' ? 'en' : 'fr';
}

export function getArticleOgLocale(article: CollectionEntry<'articles'>) {
  return article.data.locale === 'en' ? 'en_US' : 'fr_FR';
}

export function getArticleSchemaLanguage(article: CollectionEntry<'articles'>) {
  return article.data.locale === 'en' ? 'en-US' : 'fr-FR';
}
