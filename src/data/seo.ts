export const categoryMeta = {
  comparisons: {
    title: 'AI Comparisons',
    description:
      'Compare leading AI tools and models without recycling vendor marketing.',
    intro:
      'Straight comparisons built around real use cases, not launch-day hype.',
  },
  guides: {
    title: 'AI Guides',
    description:
      'Practical guides for using AI at work, launching projects, and building useful workflows.',
    intro:
      'Concrete playbooks for using AI with structure instead of wasting time.',
  },
  agents: {
    title: 'AI Agents',
    description:
      'Breakdowns and use cases covering AI agents, how they work, and where they fail.',
    intro:
      'Understand what an AI agent is, when it is actually useful, and when it is just rebranding.',
  },
  business: {
    title: 'AI Business',
    description:
      'Business, strategy, and execution angles for avoiding AI theatre and building something real.',
    intro:
      'The business layer of AI: value, execution, guardrails, and credibility.',
  },
  tools: {
    title: 'AI Tools',
    description:
      'Selection and analysis of AI tools that genuinely help teams produce, compare, and work faster.',
    intro:
      'AI tools evaluated through real gains, not novelty effect.',
  },
} as const;

export type CategorySlug = keyof typeof categoryMeta;

export interface PillarSection {
  title: string;
  body: string[];
}

export interface PillarChecklistSection {
  title: string;
  items: string[];
}

export interface PillarFaq {
  question: string;
  answer: string;
}

export interface PillarPage {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  body: string[];
  categories: CategorySlug[];
  featuredArticleIds: string[];
  quickWins?: string[];
  sections?: PillarSection[];
  checklist?: PillarChecklistSection[];
  faqs?: PillarFaq[];
}

export const pillarPages: PillarPage[] = [
  {
    slug: 'how-to-use-ai-well-at-work',
    title: 'How to Use AI Well at Work',
    description:
      'The Signal IA hub for using AI at work without creating more noise: methods, tools, and non-negotiable guardrails.',
    eyebrow: 'Pillar page',
    intro:
      'If you want AI to remove friction from daily work instead of adding one more shiny layer, start here.',
    body: [
      'This pillar gathers the most useful Signal IA pieces for using AI with method: choose the right use cases, avoid time-wasting workflows, and keep human judgment where it matters.',
      'The goal is not to ask AI to do more things. The goal is to remove friction from real work: prepare faster, sort information, clarify messy inputs, compare options, document decisions, and tighten reviews.',
      'In practice, the biggest gains rarely come from “magic prompts”. They come from a stable operating system: a clear job, a clear output format, and a clear validation step.',
    ],
    categories: ['guides', 'tools', 'agents'],
    featuredArticleIds: [
      '05-comment-utiliser-lia-au-travail-sans-perdre-du-temps',
      '04-meilleurs-outils-ia-pour-creer-du-contenu',
      '02-quest-ce-quun-agent-ia',
    ],
    quickWins: [
      'Start with a painful repetitive task: summaries, note cleanup, briefing prep, or structured comparison.',
      'Always demand an output format: comparison table, five-point plan, checklist, short draft.',
      'Separate “rough work” use cases from “publishable output” use cases so speed does not impersonate quality.',
      'Review anything that touches money, clients, public communication, reputation, or a sensitive decision.',
    ],
    sections: [
      {
        title: '1. Where AI actually saves time at work',
        body: [
          'The highest-value use cases are rarely the most spectacular ones. They are the jobs that consume time without requiring your best judgment: summarising a long document, turning rough notes into something readable, comparing three options, drafting a first structure, classifying scattered information, or preparing a clean brief.',
          'That is why the most profitable AI workflows often sit upstream of visible output. AI is good at preparation. It is not good at taking responsibility for your final call. If it removes 20 minutes of friction before every deliverable, the compound gain becomes serious.',
          'The opposite is also true: if you point AI at a task that is still politically fuzzy, emotionally loaded, or strategically unclear, you usually add another layer between you and the actual problem.',
        ],
      },
      {
        title: '2. The minimal operating frame that prevents waste',
        body: [
          'A clean AI workflow at work usually needs only four parts: a clear objective, useful context, a defined output format, and a validation rule. Without that frame, you may get answers that look polished but are not operational.',
          'Instead of asking “help me with this”, ask for something like: “Summarise this document in eight bullets, separate facts from assumptions and risks, then propose three next actions.” That turns a vague assistant into a concrete acceleration layer.',
          'This frame also stops infinite prompt fiddling. When you know what a good output looks like, you can quickly judge whether the tool is helping or whether you are just steering noise more efficiently.',
        ],
      },
      {
        title: '3. How to choose tools for actual work',
        body: [
          'There is no single best AI tool for work. There is only a better stack for a given job: one general model for thinking and drafting, maybe one specialised tool for research or transcription, and sometimes a tightly-scoped agent for internal multi-step tasks.',
          'If your work is writing-heavy, analysis-heavy, or synthesis-heavy, prioritise reasoning quality, structure, and rewrite discipline. If you run operations, prioritise guardrails, source access, traceability, and ease of verification.',
          'The best stack is usually small: one primary tool, one secondary tool, and one review habit. As soon as you stack products you cannot justify, you are no longer buying leverage. You are buying confusion.',
        ],
      },
      {
        title: '4. The guardrails you should not negotiate away',
        body: [
          'AI is strong at acceleration, not ownership. Anything public, client-facing, financial, legal, or reputation-sensitive should remain under explicit human control.',
          'The most expensive failures rarely come from a model being obviously dumb. They come from lazy operating conditions: weak context, no source of truth, or overconfidence in an answer just because it sounds clean.',
          'The simple rule is this: the higher the impact of the output, the closer, more human, and more documented the validation needs to be.',
        ],
      },
      {
        title: '5. The realistic adoption path for teams and freelancers',
        body: [
          'Level one: use AI as a preparation assistant. Level two: standardise a few high-value output formats. Level three: automate only repetitive tasks whose mistakes are easy to detect.',
          'That progression matters because it keeps the system governable. You can measure the gain, see the failure modes, and remove a layer if it starts degrading the workflow.',
          'Teams that rush toward “autonomy” usually end up with brittle workflows nobody really understands. Teams that build in layers keep control and learn faster.',
        ],
      },
    ],
    checklist: [
      {
        title: 'Checklist before adding AI to a workflow',
        items: [
          'The task happens often and follows a recognisable pattern.',
          'The expected gain is concrete: time saved, less friction, clearer output.',
          'The desired output can be described precisely.',
          'Someone can verify the result quickly.',
          'Rollback is simple if the workflow proves weak.',
        ],
      },
      {
        title: 'Checklist before publishing or sending AI-assisted output',
        items: [
          'Sensitive facts have been reviewed.',
          'Numbers, names, and links have been checked.',
          'Tone and final responsibility remain human.',
          'The text did not lose precision just to gain speed.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How do you use AI at work without wasting time?',
        answer:
          'Start with repetitive preparation work, require a clear output format, and keep human review on anything that actually matters.',
      },
      {
        question: 'Which office tasks should you delegate to AI first?',
        answer:
          'Summaries, briefing prep, option comparison, note cleanup, draft structuring, and information triage are usually the best first candidates.',
      },
      {
        question: 'Should teams use AI agents at work?',
        answer:
          'Yes, but only for internal tasks that are bounded, observable, and easy to verify. An agent without guardrails creates more risk than value.',
      },
    ],
  },
  {
    slug: 'how-to-choose-the-right-ai-tools',
    title: 'How to Choose the Right AI Tools',
    description:
      'The Signal IA hub for comparing models and AI tools before you pay for storytelling instead of leverage.',
    eyebrow: 'Pillar page',
    intro:
      'A clean starting point for choosing AI tools based on real jobs, not the loudest landing page.',
    body: [
      'This hub groups the comparisons and tool roundups that help you build a coherent AI stack around actual use cases.',
      'The bad reflex is to choose by hype, demo effect, or branding. The useful reflex is to begin with a real job: write, research, summarise, automate, compare, or produce cleaner output faster.',
      'A good AI tool should not be judged only by raw output quality. It should be judged by its role inside your system: quality, speed, friction, governance, cost, and stability.',
    ],
    categories: ['comparisons', 'tools', 'guides'],
    featuredArticleIds: [
      '01-chatgpt-vs-claude-vs-gemini-2026',
      '04-meilleurs-outils-ia-pour-creer-du-contenu',
      '07-meilleures-ia-gratuites-le-vrai-comparatif',
    ],
    quickWins: [
      'Choose a primary use case first, not a mythical “best tool overall”.',
      'Test tools on a real repeated task for several days, not a five-minute benchmark ritual.',
      'Measure interface friction, export quality, limits, and stability before you get seduced by the demo.',
      'If you pay, demand a visible gain in quality, time, output volume, or consistency.',
    ],
    sections: [
      {
        title: '1. Start with the job to be done',
        body: [
          'Choosing an AI tool becomes much easier once you stop asking “Which one is best?” and start asking “What work do I need done better?” Drafting, summarising a corpus, comparing options, repurposing content, or orchestrating internal tasks do not require the same strengths.',
          'This mindset protects you from lazy comparisons that throw every product into the same bucket. A great writing tool can be weak on integration. A good free model switcher can be a poor central production layer.',
          'In short: choose by function, not prestige.',
        ],
      },
      {
        title: '2. The criteria that actually matter',
        body: [
          'A serious evaluation should include at least six criteria: output quality, speed, stability, usage friction, workflow integration, and real cost. Real cost includes the rework tax you pay when a tool sounds impressive but forces you to rewrite everything it touches.',
          'Then add a seventh criterion people often ignore: governance. If a team will use the tool, you need visibility, control, reviewability, and easy handover when something goes wrong.',
          'A slightly less dazzling tool that is calmer, cleaner, and more stable is often a better buy than a product built for conference demos.',
        ],
      },
      {
        title: '3. How to compare major models without fooling yourself',
        body: [
          'General-purpose models should be compared on real tasks: same source material, same prompt, same expected output format. Otherwise, you are mostly benchmarking your mood.',
          'For writing and analysis, reasoning quality and structure usually matter more than the “wow” factor. For broad public use, ecosystem and versatility matter more. For teams already committed to one software environment, integration can matter more than small model-quality differences.',
          'The right conclusion is rarely “X wins”. The useful conclusion is “X is the best compromise for this use case”.',
        ],
      },
      {
        title: '4. When free tools, specialised tools, and agents make sense',
        body: [
          'Free AI tools are excellent for exploration, learning, and quick comparison. They are rarely the best foundation for a critical long-term workflow. Specialised tools win when the job is clear: transcription, research, summarisation, repurposing, or source-specific retrieval.',
          'Agents and orchestration layers become rational when the work is multi-step, internal, and verifiable. Their value does not come from the word “agent”. It comes from clarity of scope and traceable execution.',
          'Put differently: the more stable and repetitive the need, the more sensible a specialised or orchestrated tool becomes. The more you are still exploring, the more a strong generalist remains enough.',
        ],
      },
      {
        title: '5. Build a light stack, not a toy collection',
        body: [
          'A good AI stack is not broad. It is coherent. In many cases, one primary tool for thinking and drafting, one secondary tool for a narrow job, and maybe a small internal automation layer are enough.',
          'The classic trap is paying for several products that overlap almost completely. People think they are buying power. They are usually buying subscription sprawl, confusion, and fragmented habits.',
          'If you cannot explain the role of each tool in one sentence, your stack is probably already too big.',
        ],
      },
    ],
    checklist: [
      {
        title: 'Checklist before paying for an AI tool',
        items: [
          'The tool was tested on a real workflow, not just a guided demo.',
          'The expected gain is measurable in quality or time.',
          'The output is usable without a total rewrite.',
          'Monthly cost stays proportional to the gain observed.',
          'The tool has a clear role in the stack and does not duplicate another layer.',
        ],
      },
      {
        title: 'Checklist for comparing two AI tools',
        items: [
          'Same task, same prompt, same corpus, same output format.',
          'Compare not only quality, but also speed and friction.',
          'Check exports, limits, and stability.',
          'Write the verdict by use case: writing, research, summarisation, automation.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the best AI tool in 2026?',
        answer:
          'There is no universal best option. The right tool depends on the job: writing, research, comparison, content repurposing, or workflow automation.',
      },
      {
        question: 'How should you choose between ChatGPT, Claude, and Gemini?',
        answer:
          'Run the same real task through each one and judge the best compromise between quality, integration, speed, and working comfort.',
      },
      {
        question: 'Are free AI tools enough?',
        answer:
          'They are often enough for exploration and learning, but rarely enough to anchor an intensive long-term professional workflow.',
      },
    ],
  },
  {
    slug: 'how-to-build-a-credible-ai-business',
    title: 'How to Build a Credible AI Business',
    description:
      'The Signal IA hub for avoiding AI theatre and building an offer that is useful, credible, and verifiable.',
    eyebrow: 'Pillar page',
    intro:
      'For operators, founders, and independents who want to build something real with AI instead of selling fog.',
    body: [
      'This hub connects the Signal IA content that matters if you care about real value: sharper offer design, tighter execution, and a healthier relationship with AI hype.',
      'The point is not to launch “an AI business” because the label is hot. The point is to solve an expensive, repeated problem with a system that can be explained, delivered, and checked.',
      'Start small, validate early, measure the gain, and keep the offer narrow enough to prove. That discipline is far more useful than trying to look futuristic.',
    ],
    categories: ['business', 'guides', 'agents'],
    featuredArticleIds: [
      '03-pourquoi-90-des-projets-ia-sont-du-theatre',
      '06-comment-construire-un-business-avec-lia-sans-vendre-du-vent',
      '02-quest-ce-quun-agent-ia',
    ],
    quickWins: [
      'Sell a concrete result, not “AI transformation” as a vague identity.',
      'Start with a service or workflow layer before fantasising about a SaaS.',
      'Choose a narrow customer and a narrow pain point so proof is easier to build.',
      'Keep human responsibility visible instead of pretending the system is magically autonomous.',
    ],
    sections: [
      {
        title: '1. Real AI businesses start with friction, not fascination',
        body: [
          'Most weak AI offers begin with a technology-first question: “How do we build something in AI?” Stronger offers start with a business-first question: “What repeated friction is expensive enough that removing it would matter?”',
          'That distinction sounds basic, but it changes everything. If the problem is real, you can define scope, price value, explain the workflow, and show what gets better. If the starting point is fascination with the technology, you usually end up packaging possibility instead of solving pain.',
          'The market does not need more AI-flavoured abstraction. It needs clearer systems that reduce workload, decision latency, or quality drift in a specific environment.',
        ],
      },
      {
        title: '2. Why so many AI offers collapse into theatre',
        body: [
          'AI theatre happens when the signal of modernity becomes more important than the mechanics of delivery. Teams talk about autonomy, copilots, agents, transformation, and leverage, but they cannot explain the exact job, the exact guardrails, or the exact success metric.',
          'That is why a surprising number of AI projects feel impressive in a pitch and useless in operations. The stack may be technically competent, but the offer is structurally unserious: unclear outcome, weak ownership, no verification, no rollback.',
          'If a buyer cannot tell what improves, how it is checked, and what remains human, the offer is probably selling atmosphere.',
        ],
      },
      {
        title: '3. The smartest path is often service first, product later',
        body: [
          'A lot of founders want to jump straight into AI SaaS. In most cases, the better move is to begin with a service, a productised workflow, or a highly constrained implementation offer. That gives you exposure to real objections, messy data, weak inputs, and client language.',
          'Service work is not a detour. It is field research paid for by reality. It tells you which parts of the workflow repeat, which parts break, and which parts clients actually value enough to buy.',
          'Once those patterns are stable, productisation becomes a strategic choice instead of a fantasy.',
        ],
      },
      {
        title: '4. How to make an AI offer credible',
        body: [
          'Credibility comes from operating clarity. You need a clear customer, a clear pain point, a clear before/after, a clear delivery method, and clear limits. Branding helps later. Proof comes first.',
          'That proof can take several forms: time saved, cleaner handoffs, faster research cycles, fewer repetitive internal steps, or better content throughput with review intact. The exact metric matters less than the fact that it is concrete and observable.',
          'An AI offer sounds serious when it is narrow enough to demonstrate and honest enough to admit what still requires human judgment.',
        ],
      },
      {
        title: '5. The role of agents in a credible business stack',
        body: [
          'Agents can absolutely create value, but mostly on the inside. They are useful when they automate bounded, internal, multi-step tasks that can be monitored and checked. They are not a substitute for offer clarity or accountability.',
          'Used well, agents can improve research prep, internal documentation, triage, monitoring, or workflow coordination. Used badly, they become a way to hide a weak process behind futuristic language.',
          'The right framing is simple: agents are one possible layer inside a credible business system. They are not the business by themselves.',
        ],
      },
    ],
    checklist: [
      {
        title: 'Checklist before packaging an AI offer',
        items: [
          'The target customer and repeated pain point are explicit.',
          'The promised gain is observable and measurable.',
          'The delivery method is understandable without hand-waving.',
          'Human review and responsibility are clearly defined.',
          'There is a simple rollback or fallback path if the AI layer underperforms.',
        ],
      },
      {
        title: 'Checklist before building an AI product',
        items: [
          'You have seen the workflow in the wild, not only in your head.',
          'The repeated parts of delivery are obvious enough to systematise.',
          'You know which edge cases break the process.',
          'Clients value the outcome enough to pay for it consistently.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How do you build a credible AI business?',
        answer:
          'Start from a repeated expensive problem, keep the offer narrow, prove the gain, and make the human responsibility layer explicit.',
      },
      {
        question: 'Should you start with an AI SaaS?',
        answer:
          'Usually not. Starting with a service or productised workflow is often the fastest way to learn what customers actually need and value.',
      },
      {
        question: 'Are AI agents enough to define an offer?',
        answer:
          'No. Agents can support delivery, but a credible offer still needs a clear customer problem, a measurable outcome, and a trustworthy operating frame.',
      },
    ],
  },
];
