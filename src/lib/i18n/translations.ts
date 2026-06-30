export type Locale = 'en' | 'it'

export const translations = {
  en: {
    nav: {
      home:        'Home',
      about:       'Studio',
      services:    'Services',
      process:     'Approach',
      contact:     "Let's Talk",
      cta:         "Let's Work Together",
      openMenu:    'Open navigation menu',
      closeMenu:   'Close navigation menu',
      switchLight: 'Switch to light mode',
      switchDark:  'Switch to dark mode',
    },
    footer: {
      tagline:       'Crafting premium digital experiences for businesses that understand design is strategy, not decoration.',
      navHeading:    'Navigation',
      contactHeading:'Contact',
      whatsapp:      'WhatsApp',
      rights:        'All rights reserved.',
      freelance:     'Freelance Web Solutions',
      location:      'Florence, Italy',
    },
    hero: {
      subtitle: 'An architecture-inspired web development studio. Precise, thoughtful, and built for the long term.',
      cta1:     'Start a Project',
      cta2:     'Learn More',
      location: 'Florence, Italy · Working with clients worldwide',
      scroll:   'Scroll',
    },
    previews: {
      about: {
        badge:   'Studio',
        heading: 'Architecture & the Web',
        summary: 'A web studio shaped by an architecture background. Spatial thinking, visual balance, and craft define how every project is approached and executed.',
        cta:     'About me',
      },
      services: {
        badge:   'Services',
        heading: 'Custom Websites, Built to Last',
        summary: 'From initial design to deployment and beyond — responsive websites with ongoing maintenance so your site never stands still.',
        cta:     'View services',
      },
      process: {
        badge:   'Approach',
        heading: 'Transparent from Start to Finish',
        summary: 'A clear workflow from the first brief to delivery and post-launch support. Nothing is handed over until you are fully satisfied.',
        cta:     'See the process',
      },
      contact: {
        badge:   "Let's Talk",
        heading: 'Ready to Build Something?',
        summary: 'Reach out by email, phone, or WhatsApp. Every message is read and answered personally.',
        cta:     'Get in touch',
      },
    },
    aboutSection: {
      badge:           'Studio',
      heading:         'Where architecture meets',
      headingGradient: 'digital design',
      p1: "Firenze Web Lab started as a personal experiment — a way to explore the connection between architecture and digital design. As an architecture student, I've always been drawn to structure, composition, and how people experience space.",
      p2: 'Web design became a natural extension of that curiosity. What began as a hobby quickly turned into a focused practice — building clean, thoughtful, and functional digital experiences with the same attention to detail I apply in architectural work.',
      cta:             'Learn More About Me',
      philosophy: {
        title:  'Design Philosophy',
        values: [
          {
            label:  'Structure',
            detail: 'Clear hierarchy in every layout — the same discipline I apply when reading a building section or plan.',
          },
          {
            label:  'Composition',
            detail: 'Spatial balance and the way people move through space inform decisions about typography, proportion, and flow.',
          },
          {
            label:  'Craft',
            detail: 'No element is arbitrary. Every choice is deliberate, just as it would be in architectural work.',
          },
        ],
      },
    },
    services: {
      eyebrow:     'Services',
      heading:     'What I build for you',
      description: 'Custom websites built to a high standard — responsive, well-crafted, and supported well beyond launch.',
      cta:         'View All Services',
      items: [
        {
          title:       'Web Design & Development',
          description: 'Responsive websites designed and built from the ground up. The focus is on usability and a clean visual language — enough care that the result feels considered, not just functional.',
          features:    ['Responsive Design', 'Clean Architecture', 'Usability-first'],
        },
        {
          title:       'Performance & Scalability',
          description: 'My approach combines design thinking with technical execution, creating websites that are not only visually clean but also efficient, fast, and scalable. Every decision is made with performance and long-term growth in mind.',
          features:    ['Fast Load Times', 'Scalable Codebase', 'Cross-device Ready'],
        },
        {
          title:       'Ongoing Support & Maintenance',
          description: 'Beyond development, I provide ongoing assistance and long-term support. This includes updates, improvements, and technical help to ensure your website continues to evolve and remain aligned with your needs over time.',
          features:    ['Post-launch Updates', 'Technical Assistance', 'Continuous Improvements'],
        },
        {
          title:       'Redesigns & Improvements',
          description: 'Whether building from scratch or improving an existing project, the goal is always the same: to create a reliable digital presence that feels intentional, modern, and easy to use.',
          features:    ['Full Redesigns', 'Feature Additions', 'UX Improvements'],
        },
      ],
    },
    process: {
      eyebrow:     'Approach',
      heading:     'How great projects get built',
      description: 'Every project follows a clear, collaborative process designed to ensure the final result reflects your vision and goals.',
      cta:         'See the Full Process',
      steps: [
        {
          title:       'Understanding Your Needs',
          description: 'Every project begins with understanding your needs, goals, and expectations in detail. This initial step is essential — it defines the direction of the entire project.',
        },
        {
          title:       'Design & Structure',
          description: 'I translate your requirements into structure and design, focusing on clarity, usability, and alignment with your objectives. Throughout this phase, feedback is actively encouraged to ensure everything stays on track.',
        },
        {
          title:       'Development',
          description: 'Development is handled with precision, turning the approved design into a fully functional and responsive website. Technical decisions are made with speed, scalability, and the end user in mind.',
        },
        {
          title:       'Refinement & Support',
          description: 'Before launch, the project is refined based on your final feedback — nothing is considered complete until you are fully satisfied. Even after delivery, support remains available for adjustments, improvements, and future updates.',
        },
      ],
    },
    contact: {
      badge:        "Let's Talk",
      scrollLabel:  'Scroll to continue',
      heading:      'Ready to build something',
      headingGold:  'extraordinary',
      description:  "Tell me about your project. I'll review your brief and get back to you within 24 hours with a clear next step — no commitment required.",
      info: {
        email:    'Email',
        phone:    'Phone',
        whatsapp: 'WhatsApp',
      },
      form: {
        heading:            'Send a message',
        subheading:         'Free initial consultation — no strings attached.',
        nameLabel:          'Full name',
        namePlaceholder:    'Your name',
        emailLabel:         'Email address',
        emailPlaceholder:   'you@company.com',
        messageLabel:       'Message',
        messagePlaceholder: 'Tell me about your project — goals, timeline, any details you have...',
        submit:             'Send Message',
        sending:            'Sending…',
        successHeading:     'Message received!',
        successBody:        "I'll get back to you within 24 hours. Looking forward to learning about your project.",
        successReset:       'Send another message',
        errorPrefix:        'Something went wrong. Please email me directly at',
      },
    },
    pages: {
      about: {
        h1:   'Studio',
        body: "Firenze Web Lab started as a personal experiment, a way to explore the connection between architecture and digital design. As an architecture student, I've always been drawn to structure, composition, and how people experience space. Web design became a natural extension of that curiosity. What began as a hobby quickly turned into a focused practice, building clean, thoughtful, and functional digital experiences with the same attention to detail I apply in architectural work.",
      },
      services: {
        h1: 'Services',
        paragraphs: [
          'I design and develop modern, responsive websites tailored to clarity, performance, and user experience. Each project is built with a focus on structure, usability, and attention to detail, ensuring the final product feels both functional and refined. My approach combines design thinking with technical execution, creating websites that are not only visually clean but also efficient, fast, and scalable.',
          "Beyond development, I provide ongoing assistance and long-term support. This includes updates, improvements, and technical help to ensure your website continues to evolve and remain aligned with your needs over time. I believe a website should not be treated as a static product, but as something that grows and adapts. For this reason, I stay available after launch to support maintenance, small iterations, and future enhancements whenever needed.",
          "Whether it's building from scratch or improving an existing project, the goal is always the same: to create a reliable digital presence that feels intentional, modern, and easy to use.",
        ],
      },
      process: {
        h1: 'Approach',
        paragraphs: [
          'Every project follows a clear and collaborative process designed to ensure the final result reflects your vision and requirements. It begins with understanding your needs, goals, and expectations in detail. This initial step is essential, as it defines the direction of the entire project.',
          'From there, I translate your requirements into structure and design, focusing on clarity, usability, and alignment with your objectives. Throughout this phase, feedback is actively encouraged to ensure everything stays on track.',
          'Development is handled with precision and attention to detail, turning the approved design into a fully functional and responsive website. Every decision is made with performance, scalability, and user experience in mind.',
          'Before launch, the project is refined based on your final feedback, ensuring that every detail meets your expectations. Nothing is considered complete until you are fully satisfied with the result.',
          'Even after delivery, support remains available for adjustments, improvements, and future updates, ensuring the website continues to evolve with your needs.',
        ],
      },
      contact: {
        h1: "Let's Talk",
        paragraphs: [
          "If you're interested in working together or have a project in mind, feel free to reach out.",
          "I'm available for web development projects, redesigns, and ongoing support. Every inquiry is reviewed personally, and I always respond as soon as possible.",
          'You can contact me directly via email, phone, or WhatsApp, or use the form below to describe your project. The more details you provide, the better I can understand your needs and offer the right solution.',
          'I look forward to hearing from you and building something meaningful together.',
        ],
      },
    },
  },

  it: {
    nav: {
      home:        'Home',
      about:       'Studio',
      services:    'Servizi',
      process:     'Approccio',
      contact:     'Parliamone',
      cta:         'Lavoriamo Insieme',
      openMenu:    'Apri il menu di navigazione',
      closeMenu:   'Chiudi il menu di navigazione',
      switchLight: 'Passa alla modalità chiara',
      switchDark:  'Passa alla modalità scura',
    },
    footer: {
      tagline:       'Esperienze digitali di qualità per chi sa che il design è strategia, non decorazione.',
      navHeading:    'Navigazione',
      contactHeading:'Contatti',
      whatsapp:      'WhatsApp',
      rights:        'Tutti i diritti riservati.',
      freelance:     'Soluzioni Web Freelance',
      location:      'Firenze, Italia',
    },
    hero: {
      subtitle: "Uno studio di sviluppo web ispirato all'architettura. Preciso, attento, costruito per durare.",
      cta1:     'Avvia un Progetto',
      cta2:     'Scopri di Più',
      location: 'Firenze, Italia · Disponibile per clienti in tutto il mondo',
      scroll:   'Scorri',
    },
    previews: {
      about: {
        badge:   'Studio',
        heading: 'Architettura & Web',
        summary: "Uno studio web formato dalla cultura architettonica. Il pensiero spaziale, l'equilibrio visivo e la cura del dettaglio definiscono ogni progetto.",
        cta:     'Chi siamo',
      },
      services: {
        badge:   'Servizi',
        heading: 'Siti Web Personalizzati, Costruiti per Durare',
        summary: 'Dal design iniziale al lancio e oltre — siti web responsivi con assistenza continuativa, perché il tuo sito evolva sempre.',
        cta:     'Vedi i servizi',
      },
      process: {
        badge:   'Approccio',
        heading: "Trasparente dall'Inizio alla Fine",
        summary: 'Un flusso di lavoro chiaro dal primo brief alla consegna e al supporto post-lancio. Nulla viene rilasciato finché non sei completamente soddisfatto.',
        cta:     'Vedi il processo',
      },
      contact: {
        badge:   'Parliamone',
        heading: 'Pronto a Costruire Qualcosa?',
        summary: 'Contattami via email, telefono o WhatsApp. Ogni messaggio viene letto e risposto personalmente.',
        cta:     'Scrivimi',
      },
    },
    aboutSection: {
      badge:           'Studio',
      heading:         "Dove l'architettura incontra",
      headingGradient: 'il design digitale',
      p1: "Firenze Web Lab è nato come esperimento personale — un modo per esplorare il legame tra architettura e design digitale. Come studente di architettura, sono sempre stato attratto dalla struttura, dalla composizione e dal modo in cui le persone vivono lo spazio.",
      p2: "Il web design è diventato un'estensione naturale di quella curiosità. Quello che era un hobby si è trasformato rapidamente in una pratica seria — costruire esperienze digitali pulite, ragionate e funzionali con la stessa cura che applico nel lavoro architettonico.",
      cta:             'Scopri di Più su di Me',
      philosophy: {
        title:  'Filosofia di Design',
        values: [
          {
            label:  'Struttura',
            detail: 'Gerarchia chiara in ogni layout — la stessa disciplina che applico quando leggo una sezione o una pianta di un edificio.',
          },
          {
            label:  'Composizione',
            detail: "L'equilibrio spaziale e il modo in cui le persone si muovono nello spazio guidano le scelte tipografiche, proporzionali e di flusso.",
          },
          {
            label:  'Mestiere',
            detail: 'Nessun elemento è arbitrario. Ogni scelta è deliberata, proprio come avviene nel lavoro architettonico.',
          },
        ],
      },
    },
    services: {
      eyebrow:     'Servizi',
      heading:     'Cosa costruisco per te',
      description: 'Siti web personalizzati realizzati con alti standard — responsivi, curati nei dettagli e supportati ben oltre il lancio.',
      cta:         'Vedi Tutti i Servizi',
      items: [
        {
          title:       'Web Design & Sviluppo',
          description: "Siti web responsivi progettati e sviluppati da zero. L'attenzione è sull'usabilità e un linguaggio visivo pulito — abbastanza cura che il risultato sembri ragionato, non semplicemente funzionale.",
          features:    ['Design Responsivo', 'Architettura Pulita', 'Usabilità prima di tutto'],
        },
        {
          title:       'Performance & Scalabilità',
          description: 'Il mio approccio unisce il pensiero progettuale all\'esecuzione tecnica, creando siti web non solo visivamente curati ma anche efficienti, veloci e scalabili. Ogni decisione viene presa con performance e crescita a lungo termine in mente.',
          features:    ['Tempi di Caricamento Rapidi', 'Codebase Scalabile', 'Compatibile con Tutti i Dispositivi'],
        },
        {
          title:       'Supporto & Manutenzione Continua',
          description: 'Oltre allo sviluppo, offro assistenza continuativa e supporto a lungo termine. Questo include aggiornamenti, miglioramenti e assistenza tecnica per garantire che il tuo sito continui a evolversi e rimanga allineato alle tue esigenze nel tempo.',
          features:    ['Aggiornamenti Post-lancio', 'Assistenza Tecnica', 'Miglioramenti Continui'],
        },
        {
          title:       'Redesign & Miglioramenti',
          description: "Che si tratti di costruire da zero o migliorare un progetto esistente, l'obiettivo è sempre lo stesso: creare una presenza digitale affidabile che sembri intenzionale, moderna e facile da usare.",
          features:    ['Redesign Completi', 'Nuove Funzionalità', 'Miglioramenti UX'],
        },
      ],
    },
    process: {
      eyebrow:     'Approccio',
      heading:     'Come nascono i grandi progetti',
      description: 'Ogni progetto segue un processo chiaro e collaborativo, progettato per garantire che il risultato finale rispecchi la tua visione e i tuoi obiettivi.',
      cta:         'Vedi il Processo Completo',
      steps: [
        {
          title:       'Capire le Tue Esigenze',
          description: "Ogni progetto inizia con la comprensione dettagliata delle tue esigenze, obiettivi e aspettative. Questo primo passo è fondamentale — definisce la direzione dell'intero progetto.",
        },
        {
          title:       'Design & Struttura',
          description: "Traduco i tuoi requisiti in struttura e design, con attenzione alla chiarezza, all'usabilità e all'allineamento con i tuoi obiettivi. Durante questa fase, il feedback è attivamente incoraggiato per garantire che tutto rimanga in carreggiata.",
        },
        {
          title:       'Sviluppo',
          description: "Lo sviluppo viene gestito con precisione, trasformando il design approvato in un sito web completamente funzionale e responsivo. Le decisioni tecniche vengono prese con velocità, scalabilità e l'utente finale in mente.",
        },
        {
          title:       'Rifinitura & Supporto',
          description: 'Prima del lancio, il progetto viene rifinito in base al tuo feedback finale — nulla è considerato completo finché non sei completamente soddisfatto. Anche dopo la consegna, il supporto rimane disponibile per aggiustamenti, miglioramenti e aggiornamenti futuri.',
        },
      ],
    },
    contact: {
      badge:        'Parliamone',
      scrollLabel:  'Scorri per continuare',
      heading:      'Pronto a costruire qualcosa di',
      headingGold: 'straordinario',
      description: 'Parlami del tuo progetto. Esaminerò il tuo brief e ti risponderò entro 24 ore con un passo successivo chiaro — senza impegno.',
      info: {
        email:    'Email',
        phone:    'Telefono',
        whatsapp: 'WhatsApp',
      },
      form: {
        heading:            'Invia un messaggio',
        subheading:         'Consulenza iniziale gratuita — senza impegno.',
        nameLabel:          'Nome completo',
        namePlaceholder:    'Il tuo nome',
        emailLabel:         'Indirizzo email',
        emailPlaceholder:   'tu@azienda.com',
        messageLabel:       'Messaggio',
        messagePlaceholder: 'Parlami del tuo progetto — obiettivi, tempi, qualsiasi dettaglio tu abbia...',
        submit:             'Invia Messaggio',
        sending:            'Invio in corso…',
        successHeading:     'Messaggio ricevuto!',
        successBody:        "Ti risponderò entro 24 ore. Non vedo l'ora di sapere del tuo progetto.",
        successReset:       'Invia un altro messaggio',
        errorPrefix:        'Qualcosa è andato storto. Contattami direttamente via email a',
      },
    },
    pages: {
      about: {
        h1:   'Studio',
        body: "Firenze Web Lab è nato come esperimento personale, un modo per esplorare il legame tra architettura e design digitale. Come studente di architettura, sono sempre stato attratto dalla struttura, dalla composizione e dal modo in cui le persone vivono lo spazio. Il web design è diventato un'estensione naturale di quella curiosità. Quello che era un hobby si è trasformato rapidamente in una pratica seria, costruendo esperienze digitali pulite, ragionate e funzionali con la stessa cura che applico nel lavoro architettonico.",
      },
      services: {
        h1: 'Servizi',
        paragraphs: [
          "Progetto e sviluppo siti web moderni e responsivi, orientati alla chiarezza, alle performance e all'esperienza utente. Ogni progetto è realizzato con attenzione alla struttura, all'usabilità e ai dettagli, per garantire che il prodotto finale sia funzionale e curato. Il mio approccio unisce il pensiero progettuale all'esecuzione tecnica, creando siti non solo visivamente puliti ma anche efficienti, veloci e scalabili.",
          "Oltre allo sviluppo, offro assistenza continuativa e supporto a lungo termine. Questo include aggiornamenti, miglioramenti e supporto tecnico per garantire che il tuo sito continui a evolversi e rimanga allineato alle tue esigenze. Sono convinto che un sito web non debba essere trattato come un prodotto statico, ma come qualcosa che cresce e si adatta. Per questo rimango disponibile anche dopo il lancio per manutenzione, piccole iterazioni e miglioramenti futuri.",
          "Che si tratti di costruire da zero o migliorare un progetto esistente, l'obiettivo è sempre lo stesso: creare una presenza digitale affidabile, intenzionale, moderna e facile da usare.",
        ],
      },
      process: {
        h1: 'Approccio',
        paragraphs: [
          "Ogni progetto segue un processo chiaro e collaborativo, progettato per garantire che il risultato finale rispecchi la tua visione e le tue esigenze. Si inizia con la comprensione dettagliata delle tue necessità, obiettivi e aspettative. Questo primo passo è fondamentale, in quanto definisce la direzione dell'intero progetto.",
          "Da lì, traduco i tuoi requisiti in struttura e design, con attenzione alla chiarezza, all'usabilità e all'allineamento con i tuoi obiettivi. Durante questa fase, il feedback è attivamente incoraggiato per garantire che tutto rimanga in carreggiata.",
          "Lo sviluppo viene gestito con precisione e attenzione ai dettagli, trasformando il design approvato in un sito web completamente funzionale e responsivo. Ogni decisione viene presa tenendo conto di performance, scalabilità ed esperienza utente.",
          'Prima del lancio, il progetto viene rifinito in base al tuo feedback finale, garantendo che ogni dettaglio soddisfi le tue aspettative. Nulla è considerato completo finché non sei completamente soddisfatto del risultato.',
          'Anche dopo la consegna, il supporto rimane disponibile per aggiustamenti, miglioramenti e aggiornamenti futuri, garantendo che il sito continui a evolversi con le tue esigenze.',
        ],
      },
      contact: {
        h1: 'Parliamone',
        paragraphs: [
          'Se sei interessato a collaborare o hai un progetto in mente, non esitare a contattarmi.',
          "Sono disponibile per progetti di sviluppo web, redesign e supporto continuativo. Ogni richiesta viene esaminata personalmente e rispondo sempre nel più breve tempo possibile.",
          'Puoi contattarmi direttamente via email, telefono o WhatsApp, oppure usare il modulo qui sotto per descrivere il tuo progetto. Più dettagli fornisci, meglio posso capire le tue esigenze e offrire la soluzione giusta.',
          'Non vedo l\'ora di sentirti e costruire insieme qualcosa di significativo.',
        ],
      },
    },
  },
}

export type Translations = typeof translations.en
