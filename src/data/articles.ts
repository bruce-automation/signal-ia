import type { CollectionEntry } from 'astro:content';

export function getArticleSlug(article: CollectionEntry<'articles'>) {
  return article.data.slug;
}

export function getArticleUrl(article: CollectionEntry<'articles'>, baseUrl = '/') {
  return `${baseUrl}articles/${getArticleSlug(article)}/`;
}

export function getArticleLanguage(_article: CollectionEntry<'articles'>) {
  return 'en';
}

export function getArticleOgLocale(_article: CollectionEntry<'articles'>) {
  return 'en_US';
}

export function getArticleSchemaLanguage(_article: CollectionEntry<'articles'>) {
  return 'en-US';
}
