# Signal IA — English Migration Blueprint

## Scope
This document is the concrete migration board for moving Signal IA from a French-first Astro build to an English-first editorial and SEO system without breaking the current site.

## Ground rules
- Do **not** mass-translate every article in one pass.
- Keep current route slugs live until English replacements exist and redirects are ready.
- Migrate the shell first: navigation, homepage, list pages, category labels, metadata, internal naming.
- Then migrate revenue/traffic pages in priority order.
- Only switch a page's canonical target after English content is actually published.

## Audit summary
### What exists now
- Astro static site with 1 homepage, 3 listing layers, 5 category pages, 3 pillar pages, 9 article pages.
- Current content language is mostly French.
- Category slugs are partly French (`comparatifs`, `outils`) but technically stable.
- Pillar pages and article markdown filenames are French-first.
- Site shell text was French; this pass moves the highest-leverage shell pieces to English.

### Structural decisions
1. **Keep current URLs live during phase 1.**
   - Low risk.
   - Avoids breaking indexed pages.
2. **Translate labels before renaming slugs.**
   - Users and crawlers see English UX sooner.
   - Redirect work can happen later with less risk.
3. **Introduce English targets explicitly, page by page.**
   - Each French page gets a target English route and rewrite decision.
4. **Treat pillar pages as separate editorial rewrites.**
   - Their bodies are long enough that partial translation would create low-quality mixed pages.
5. **Preserve article pages in French until rewritten.**
   - Better than fake-English shells wrapped around untranslated longform.

## Route-by-route migration map

### Core shell pages
| Current route | Current state | Target English route | Decision | Priority |
|---|---|---:|---|---|
| `/` | French hero + shell | `/` | Keep route, rewrite shell fully in English | P0 |
| `/articles/` | French archive shell | `/articles/` | Keep route, rewrite shell in English | P0 |
| `/categories/` | French taxonomy shell | `/categories/` | Keep route, rewrite shell in English | P0 |
| `/dossiers/` | French hub index shell | `/guides/` preferred later | Keep current route for now, switch listing shell to English, add route rename later with redirects | P1 |
| `/rss.xml` | Neutral | `/rss.xml` | Keep | P0 |
| `/robots.txt` | Neutral | `/robots.txt` | Keep | P0 |

### Category pages
| Current route | Proposed future route | Current title | English target title | Decision | Priority |
|---|---|---|---|---|---|
| `/categories/comparatifs/` | `/categories/ai-comparisons/` | Comparatifs IA | AI Comparisons | Keep slug for now, switch visible labels and metadata to English | P0 |
| `/categories/guides/` | `/categories/ai-guides/` | Guides IA | AI Guides | Keep slug for now, switch visible labels and metadata to English | P0 |
| `/categories/agents/` | `/categories/ai-agents/` | Agents IA | AI Agents | Keep slug for now, switch visible labels and metadata to English | P0 |
| `/categories/business/` | `/categories/ai-business/` | Business IA | AI Business | Keep slug for now, switch visible labels and metadata to English | P0 |
| `/categories/outils/` | `/categories/ai-tools/` | Outils IA | AI Tools | Keep slug for now, switch visible labels and metadata to English | P0 |

### Pillar pages / hubs
| Current route | Proposed future route | Current title | English rewrite target | Decision | Priority |
|---|---|---|---|---|---|
| `/dossiers/bien-utiliser-ia-au-travail/` | `/guides/use-ai-at-work/` | Bien utiliser l’IA au travail | Use AI at work without wasting time | Full editorial rewrite needed; keep current page live until English hub is written | P1 |
| `/dossiers/choisir-les-bons-outils-ia/` | `/guides/choose-the-right-ai-tools/` | Choisir les bons outils IA | Choose the right AI tools | Full editorial rewrite needed; keep current page live until English hub is written | P1 |
| `/dossiers/business-ia-credible/` | `/guides/build-a-credible-ai-business/` | Construire un business IA crédible | Build a credible AI business | Full editorial rewrite needed; keep current page live until English hub is written | P1 |

### Articles
| Current route | Proposed future route | Current title | English target title | Decision | Priority |
|---|---|---|---|---|---|
| `/articles/01-chatgpt-vs-claude-vs-gemini-2026/` | `/articles/chatgpt-vs-claude-vs-gemini-2026/` | ChatGPT vs Claude vs Gemini : lequel choisir en 2026 ? | ChatGPT vs Claude vs Gemini: which one should you choose in 2026? | Rewrite early; strong search-intent page | P1 |
| `/articles/02-quest-ce-quun-agent-ia/` | `/articles/what-is-an-ai-agent/` | Qu’est-ce qu’un agent IA et à quoi ça sert vraiment ? | What is an AI agent and what is it actually useful for? | Rewrite early; foundational search-intent page | P1 |
| `/articles/03-pourquoi-90-des-projets-ia-sont-du-theatre/` | `/articles/why-90-percent-of-ai-projects-are-theatre/` | Pourquoi 90% des projets IA sont du théâtre | Why 90% of AI projects are theatre | Rewrite after core intent pages | P2 |
| `/articles/04-meilleurs-outils-ia-pour-creer-du-contenu/` | `/articles/best-ai-tools-for-content-creation/` | Meilleurs outils IA pour créer du contenu | Best AI tools for content creation | Rewrite early; commercial intent | P1 |
| `/articles/05-comment-utiliser-lia-au-travail-sans-perdre-du-temps/` | `/articles/how-to-use-ai-at-work-without-wasting-time/` | Comment utiliser l’IA au travail sans perdre du temps | How to use AI at work without wasting time | Rewrite early; strong practical intent | P1 |
| `/articles/06-comment-construire-un-business-avec-lia-sans-vendre-du-vent/` | `/articles/how-to-build-an-ai-business-without-selling-hype/` | Comment construire un business avec l’IA sans vendre du vent | How to build an AI business without selling hype | Rewrite after higher-volume pages | P2 |
| `/articles/07-meilleures-ia-gratuites-le-vrai-comparatif/` | `/articles/best-free-ai-tools-the-real-comparison/` | Meilleures IA gratuites : le vrai comparatif | Best free AI tools: the real comparison | Rewrite early; high-volume search intent | P1 |
| `/articles/08-meilleurs-outils-dagents-ia-en-2026/` | `/articles/best-ai-agent-tools-in-2026/` | Meilleurs outils d’agents IA en 2026 | Best AI agent tools in 2026 | Rewrite early; high commercial + trend intent | P1 |
| `/articles/09-les-outils-ia-les-plus-surcotes-du-moment/` | `/articles/the-most-overrated-ai-tools-right-now/` | Les outils IA les plus surcotés du moment | The most overrated AI tools right now | Rewrite later; editorial, lower urgency | P3 |

## Recommended migration sequence
### Phase 1 — Done / in progress
- Switch site shell copy to English.
- Switch category labels and category metadata to English.
- Keep article bodies and pillar longform in French until rewritten properly.
- Add this migration blueprint to the repo.

### Phase 2 — Routing + content model hardening
- Add a `locale` field to article frontmatter.
- Add a stable `slug` field so filenames stop driving public URLs.
- Add redirect support for future English replacements.
- Split shell labels from taxonomy slugs permanently.

### Phase 3 — Highest-value editorial rewrites
1. `chatgpt-vs-claude-vs-gemini-2026`
2. `best-free-ai-tools-the-real-comparison`
3. `what-is-an-ai-agent`
4. `how-to-use-ai-at-work-without-wasting-time`
5. `best-ai-tools-for-content-creation`
6. `best-ai-agent-tools-in-2026`

### Phase 4 — Hub rewrites
- Publish English versions of the three pillar pages under `/guides/...`.
- Add redirects from `/dossiers/...` to their English replacements once live.
- Update homepage and category CTAs to point to English hubs.

### Phase 5 — Cleanup
- Rename French category slugs only after redirects and internal links are ready.
- Rebuild sitemap, RSS strategy, and canonicals around English-first routes.
- Decide whether French originals stay archived, dual-language, or redirected.

## Implementation notes for the next pass
- Create `src/data/taxonomy.ts` or equivalent so labels, slugs, and future English URLs are separated cleanly.
- Move article IDs off numbered filenames before large-scale rewrites.
- Add redirect mapping in a single source of truth, not ad hoc page by page.
- When an article is rewritten in English, keep the French source in git history or archive it in `/articles/fr/` before removal.
