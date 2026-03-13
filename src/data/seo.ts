export const categoryMeta = {
  comparatifs: {
    title: 'Comparatifs IA',
    description:
      'Comparer les principaux outils et modèles IA sans reprendre le marketing des éditeurs.',
    intro:
      'Des comparatifs simples pour choisir un outil IA selon ton usage réel, pas selon le bruit.',
  },
  guides: {
    title: 'Guides IA',
    description:
      'Guides pratiques pour utiliser l’IA au travail, lancer un projet ou structurer un usage utile.',
    intro:
      'Des guides concrets pour utiliser l’IA avec méthode et sans perdre du temps.',
  },
  agents: {
    title: 'Agents IA',
    description:
      'Décryptages et cas d’usage sur les agents IA, leur fonctionnement et leurs limites.',
    intro:
      'Comprendre ce qu’est un agent IA, quand il sert vraiment, et quand c’est juste du rebranding.',
  },
  business: {
    title: 'Business IA',
    description:
      'Angles business, stratégie et exécution pour éviter le théâtre IA et construire quelque chose de réel.',
    intro:
      'La couche business de l’IA : valeur, exécution, garde-fous et crédibilité.',
  },
  outils: {
    title: 'Outils IA',
    description:
      'Sélection et analyse d’outils IA utiles pour produire, comparer et travailler plus vite.',
    intro:
      'Des outils IA vus par le prisme du gain réel, pas de l’effet waouh.',
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
    slug: 'bien-utiliser-ia-au-travail',
    title: 'Bien utiliser l’IA au travail',
    description:
      'Le hub Signal IA pour cadrer les bons usages de l’IA au travail : méthode, outils et garde-fous.',
    eyebrow: 'Pillar page',
    intro:
      'Si tu veux intégrer l’IA dans le travail quotidien sans tomber dans le gadget, commence ici.',
    body: [
      'Cette page rassemble les contenus Signal IA les plus utiles pour utiliser l’IA avec méthode : choisir les bons cas d’usage, éviter les pertes de temps et garder du jugement humain.',
      'Le but n’est pas de demander plus de choses à l’IA. Le but est de supprimer de la friction dans le travail réel : préparer, trier, clarifier, comparer, documenter et relire plus vite.',
      'En pratique, les meilleurs gains viennent rarement des prompts “magiques”. Ils viennent d’un petit système stable : un usage clair, un format de sortie clair, un moment de vérification clair.',
    ],
    categories: ['guides', 'outils', 'agents'],
    featuredArticleIds: [
      '05-comment-utiliser-lia-au-travail-sans-perdre-du-temps',
      '04-meilleurs-outils-ia-pour-creer-du-contenu',
      '02-quest-ce-quun-agent-ia',
    ],
    quickWins: [
      'Commence par une tâche pénible et répétitive : résumé, synthèse, nettoyage de notes, préparation de briefings.',
      'Impose toujours un format de sortie : tableau comparatif, plan en 5 points, checklist, draft court.',
      'Sépare les usages “brouillon” des usages “publication” pour éviter de confondre vitesse et qualité.',
      'Relis systématiquement ce qui touche à l’argent, la réputation, les clients ou une décision sensible.',
    ],
    sections: [
      {
        title: '1. Où l’IA fait vraiment gagner du temps au travail',
        body: [
          'Les meilleurs cas d’usage ne sont pas les plus spectaculaires. Ce sont les tâches qui te prennent du temps sans demander ton meilleur jugement : résumer un document long, préparer un cadrage, transformer des notes brutes en version lisible, comparer trois options, classer une matière dispersée.',
          'C’est pour ça que les usages les plus rentables sont souvent en amont du travail visible. L’IA sert bien à préparer, pas à signer à ta place. Quand elle enlève 20 minutes de friction avant chaque livrable, le gain cumulé devient massif.',
          'À l’inverse, si tu l’utilises sur une tâche encore floue ou très politique, tu risques surtout d’ajouter un intermédiaire de plus entre toi et le vrai problème.',
        ],
      },
      {
        title: '2. Le cadre minimal pour éviter le gaspillage',
        body: [
          'Un usage propre de l’IA au travail tient sur quatre briques : un objectif net, un contexte utile, un format de sortie, un critère de validation. Sans ça, tu obtiens des réponses parfois jolies, mais rarement opératoires.',
          'Exemple simple : au lieu de demander “aide-moi sur ce dossier”, demande “résume ce document en 8 points, sépare faits / hypothèses / risques, puis propose 3 actions”. Là, tu transformes un outil vague en accélérateur de travail.',
          'Ce cadre évite aussi le piège des itérations infinies. Si tu sais à quoi doit ressembler une bonne sortie, tu vois plus vite si l’outil aide ou si tu es juste en train de piloter du bruit.',
        ],
      },
      {
        title: '3. Quels outils choisir selon le métier réel',
        body: [
          'Il n’existe pas une “meilleure IA pour le travail”. Il existe un meilleur assemblage selon le job : un modèle généraliste pour raisonner et rédiger, un outil spécialisé pour la recherche, éventuellement un agent cadré pour faire des tâches internes multi-étapes.',
          'Si tu écris, synthétises ou analyses beaucoup, privilégie la qualité du raisonnement, de la structure et de la reformulation. Si tu gères des opérations internes, regarde surtout les garde-fous, l’accès aux sources et la traçabilité.',
          'La bonne stack est souvent petite : un outil principal, un usage secondaire, et une routine de vérification. Dès que tu accumules des couches sans savoir laquelle retire une vraie friction, tu dégrades ton système.',
        ],
      },
      {
        title: '4. Les garde-fous non négociables',
        body: [
          'L’IA est forte pour accélérer, pas pour porter seule la responsabilité. Tout ce qui est public, client-facing, financier, juridique ou réputationnel doit rester sous contrôle humain explicite.',
          'Les erreurs les plus coûteuses viennent rarement d’un modèle “stupide”. Elles viennent d’un usage paresseux : contexte insuffisant, absence de source de vérité, confiance excessive dans une réponse proprement formulée.',
          'La règle simple : plus l’impact d’une sortie est élevé, plus la validation doit être proche, humaine et documentée.',
        ],
      },
      {
        title: '5. La progression réaliste pour une équipe ou un freelance',
        body: [
          'Premier niveau : utiliser l’IA comme assistant de préparation. Deuxième niveau : standardiser quelques formats utiles. Troisième niveau : automatiser seulement les tâches répétitives dont les erreurs sont détectables.',
          'Cette progression est importante parce qu’elle garde le système gouvernable. On peut mesurer le gain, voir les erreurs, retirer une brique si elle dégrade le flux de travail.',
          'Les équipes qui vont trop vite vers “l’autonomie” finissent souvent avec des workflows fragiles, mal compris et impossibles à auditer. Les équipes qui construisent par couches gardent le contrôle et apprennent plus vite.',
        ],
      },
    ],
    checklist: [
      {
        title: 'Checklist avant d’ajouter l’IA à un workflow',
        items: [
          'La tâche revient souvent et suit un schéma reconnaissable.',
          'Le gain attendu est concret : temps gagné, friction réduite, clarté améliorée.',
          'La sortie attendue peut être décrite clairement.',
          'Une personne sait vérifier rapidement le résultat.',
          'Le rollback est simple si l’usage ne tient pas la route.',
        ],
      },
      {
        title: 'Checklist de validation avant publication ou envoi',
        items: [
          'Les faits sensibles ont été relus.',
          'Les chiffres, noms et liens ont été vérifiés.',
          'Le ton et la responsabilité finale restent humains.',
          'Le texte n’a pas perdu en précision juste pour gagner en vitesse.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Comment utiliser l’IA au travail sans perdre du temps ?',
        answer:
          'En la limitant d’abord aux tâches répétitives et préparatoires, avec un format de sortie clair et une validation humaine sur ce qui compte.',
      },
      {
        question: 'Quelles tâches déléguer en premier à l’IA au bureau ?',
        answer:
          'Résumé, synthèse, préparation de briefings, comparaison d’options, nettoyage de notes, structuration de brouillons et classement d’information.',
      },
      {
        question: 'Faut-il utiliser des agents IA au travail ?',
        answer:
          'Oui, mais seulement pour des tâches internes, cadrées et vérifiables. Un agent sans garde-fous ajoute plus de risque que de valeur.',
      },
    ],
  },
  {
    slug: 'choisir-les-bons-outils-ia',
    title: 'Choisir les bons outils IA',
    description:
      'Le hub Signal IA pour comparer les modèles et outils IA utiles avant de payer pour du storytelling.',
    eyebrow: 'Pillar page',
    intro:
      'Un point d’entrée simple pour comparer les outils IA avant d’acheter des slogans.',
    body: [
      'Ce hub regroupe les comparatifs et sélections d’outils qui aident à choisir une stack IA cohérente selon les usages réels.',
      'Le mauvais réflexe consiste à choisir selon la hype, la démo ou le branding du moment. Le bon réflexe consiste à partir d’un travail concret : rédiger, chercher, synthétiser, automatiser, comparer ou produire plus proprement.',
      'Un bon outil IA ne se juge pas seulement à la qualité brute de ses réponses. Il se juge à sa place dans ton système : qualité, vitesse, friction, gouvernance, coût et stabilité.',
    ],
    categories: ['comparatifs', 'outils', 'guides'],
    featuredArticleIds: [
      '01-chatgpt-vs-claude-vs-gemini-2026',
      '04-meilleurs-outils-ia-pour-creer-du-contenu',
      '07-meilleures-ia-gratuites-le-vrai-comparatif',
    ],
    quickWins: [
      'Choisis d’abord un usage principal, pas un “meilleur outil absolu”.',
      'Teste les outils sur une vraie tâche répétée pendant plusieurs jours, pas sur un benchmark de 5 minutes.',
      'Regarde la friction de l’interface, des exports et des limites avant de regarder la démo marketing.',
      'Si tu paies, exige un gain mesurable : qualité, temps, volume ou cohérence.',
    ],
    sections: [
      {
        title: '1. Commencer par le job à faire',
        body: [
          'Le choix d’un outil IA devient simple dès que tu remplaces la question “quel est le meilleur ?” par “quel travail dois-je mieux faire ?”. Rédiger un brouillon, résumer un corpus, comparer des options, recycler du contenu, ou orchestrer des tâches internes ne demandent pas les mêmes forces.',
          'Cette approche évite les comparatifs paresseux qui mettent tout dans le même sac. Un excellent outil de rédaction peut être médiocre en intégration. Un bon outil gratuit pour tester plusieurs modèles peut être mauvais comme brique centrale de production.',
          'En clair : choisis par fonction, pas par prestige.',
        ],
      },
      {
        title: '2. Les critères qui comptent vraiment',
        body: [
          'Pour juger un outil IA sérieusement, regarde au minimum six critères : qualité de sortie, vitesse, stabilité, friction d’usage, intégration au workflow et coût réel. Le coût réel inclut le temps perdu quand l’outil fait joli mais t’oblige à retravailler tout ce qu’il produit.',
          'Ajoute ensuite un critère souvent négligé : la gouvernance. Si l’outil doit être utilisé en équipe, il faut regarder la visibilité, le contrôle, la reprise en main et la facilité de validation.',
          'Un outil légèrement moins impressionnant mais plus stable, plus sobre et mieux cadré est souvent un meilleur achat qu’un produit très démonstratif.',
        ],
      },
      {
        title: '3. Comment comparer les grands modèles sans se raconter d’histoires',
        body: [
          'Les grands modèles généralistes doivent être comparés sur des cas réels : même document, même consigne, même format attendu. Sinon, tu juges surtout ton ressenti du moment.',
          'Pour la rédaction et l’analyse, la structure et la tenue du raisonnement comptent souvent plus que l’effet “wow”. Pour un usage grand public ou multi-usage, l’écosystème et la polyvalence prennent du poids. Pour une équipe déjà installée dans un environnement précis, l’intégration peut l’emporter sur la qualité perçue brute.',
          'Le bon verdict n’est pas “X gagne”. Le bon verdict est “X est le meilleur compromis pour ce type d’usage”.',
        ],
      },
      {
        title: '4. Outils gratuits, spécialisés et agents : quand chacun devient rationnel',
        body: [
          'Les outils gratuits sont excellents pour découvrir, tester et comparer. Ils sont rarement la meilleure base d’un process critique à long terme. Les outils spécialisés gagnent quand la tâche est claire : transcription, résumé, réutilisation de contenu, recherche documentaire.',
          'Les agents et orchestrateurs deviennent intéressants quand le travail est multi-étapes, interne et vérifiable. Ils n’ont de valeur que si le périmètre est clair et les actions traçables.',
          'Autrement dit : plus le besoin est stable et répétitif, plus un outil spécialisé ou orchestré devient logique. Plus tu explores, plus un généraliste ou un comparateur de modèles suffit.',
        ],
      },
      {
        title: '5. Construire une stack légère au lieu d’une collection de jouets',
        body: [
          'Une bonne stack IA n’est pas large. Elle est cohérente. Souvent, un outil principal pour penser / rédiger, un outil secondaire pour un besoin pointu, et éventuellement une couche d’automatisation interne suffisent.',
          'Le piège classique est d’acheter plusieurs outils qui se recouvrent presque entièrement. On croit acheter de la puissance, on achète surtout de la confusion, des abonnements et des routines éclatées.',
          'Si tu ne peux pas expliquer en une phrase le rôle de chaque outil dans ton système, ta stack est probablement déjà trop grosse.',
        ],
      },
    ],
    checklist: [
      {
        title: 'Checklist avant de payer un outil IA',
        items: [
          'L’outil a été testé sur un vrai workflow, pas seulement sur une démo.',
          'Le gain attendu est mesurable sur la qualité ou le temps.',
          'La sortie est exploitable sans réécriture totale.',
          'Le coût mensuel reste proportionné au gain observé.',
          'Le rôle de l’outil dans la stack est clair et non redondant.',
        ],
      },
      {
        title: 'Checklist de comparaison entre deux outils',
        items: [
          'Même tâche, même consigne, même corpus, même format de sortie.',
          'Comparaison de la qualité mais aussi de la vitesse et de la friction.',
          'Vérification de l’export, des limites et de la stabilité.',
          'Verdict rédigé par usage : rédaction, recherche, synthèse, automatisation.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Quel est le meilleur outil IA en 2026 ?',
        answer:
          'Il n’y en a pas un pour tout. Le meilleur choix dépend du job à faire : écrire, comparer, chercher, recycler du contenu ou automatiser un workflow.',
      },
      {
        question: 'Comment choisir entre ChatGPT, Claude et Gemini ?',
        answer:
          'En testant le même usage réel sur chacun, puis en jugeant le meilleur compromis entre qualité, intégration, vitesse et confort de travail.',
      },
      {
        question: 'Les outils IA gratuits suffisent-ils ?',
        answer:
          'Oui pour explorer et apprendre. Rarement pour structurer un usage pro intensif durable.',
      },
    ],
  },
  {
    slug: 'business-ia-credible',
    title: 'Construire un business IA crédible',
    description:
      'Le hub Signal IA pour éviter le théâtre IA et construire une offre utile, crédible et vérifiable.',
    eyebrow: 'Pillar page',
    intro:
      'Pour les équipes et indépendants qui veulent faire du business IA sans vendre du vent.',
    body: [
      'Ce hub relie les contenus Signal IA sur la valeur réelle, le cadrage d’offre et les pièges fréquents des projets IA mal pensés.',
      'Commencer petit, vérifier vite, mesurer le gain : c’est plus utile que brander du brouillard.',
    ],
    categories: ['business', 'guides', 'agents'],
    featuredArticleIds: [
      '03-pourquoi-90-des-projets-ia-sont-du-theatre',
      '06-comment-construire-un-business-avec-lia-sans-vendre-du-vent',
      '02-quest-ce-quun-agent-ia',
    ],
  },
];
