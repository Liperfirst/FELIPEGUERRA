export type Language = "en" | "es" | "pt";

export const translations = {
  pt: {
    hero: {
      title: ["Formação.", "Adoração.", "Alcance."],
      subtitle: "Uma proposta estratégica para a igreja New Beginning.",
      cta: "Começar a Experiência",
    },
    problem: {
      statements: [
        "O culto acontece.",
        "Mas nem sempre conecta.",
        "Não é falta de vontade.",
        "É falta de estrutura."
      ]
    },
    solution: {
      subtitle: "A solução não é mais esforço.",
      title: "É sistema."
    },
    pillarsIntro: {
      pillars: [
        { title: "Ministério de Louvor", action: "Organiza", desc: "Estruturar, formar e sustentar a adoração com excelência." },
        { title: "Escola de Música", action: "Forma", desc: "Formar músicos e pessoas dentro da igreja e da comunidade." },
        { title: "Rádio Web Bilíngue", action: "Expande", desc: "Levar a presença da igreja para além do culto - todos os dias." }
      ],
      conclusion: "Separados funcionam.\nJuntos transformam."
    },
    worship: {
      title: "Ministério de Louvor",
      subtitle: "Estrutura · Formação · Direção Musical · Missão",
      overview: "Boa vontade sustenta. Mas não organiza crescimento. O objetivo é fortalecer o que já existe, organizar o que já funciona e desenvolver pessoas com intencionalidade.",
      problemSolution: {
        title: "Quando o culto acontece, mas não conecta",
        before: ["A igreja acompanha... mas não participa.", "Ensaios começam do zero.", "Decisões improvisadas."],
        after: ["Congregação chega preparada.", "Ensaios avançam a cada semana.", "Decisões têm base e direção."]
      },
      roles: {
        title: "Papéis que Sustentam o Sistema",
        items: [
          { role: "Diretor Musical", desc: "Planeja, organiza e desenvolve o sistema completo." },
          { role: "Líder de Louvor", desc: "Conduz ensaios e o culto." },
          { role: "Coordenador Vocal", desc: "Cuida dos grupos e da comunicação interna." }
        ]
      },
      cycle: {
        title: "Fase de Imersão: 12 Semanas",
        points: ["Banda: Ritmo, conjunto, consistência", "Vocais: Afinação, divisão, segurança", "Sistema: Uso do app, comunicação, devocional"]
      },
      features: [
        "Repertório 12 Semanas (60% base, 25% dev, 15% livre)",
        "Política Bilíngue (Culto multicultural)",
        "App Próprio: Preparação que começa antes do ensaio",
        "Tracks, Cliks e Direção Musical: Estabilidade"
      ],
      visualSystem: {
        title: "Sistema Visual para Louvor",
        subtitle: "Uma camada visual de direção musical.",
        overview: "O VS funciona como uma camada visual ajudando músicos, vocalistas e equipe a saberem exatamente onde estão na música, no compasso e na estrutura do culto.",
        before: {
          title: "Sem VS",
          points: [
            "Entradas inseguras",
            "Músicos olhando uns para os outros",
            "Transições confusas",
            "Dependência excessiva do diretor musical"
          ]
        },
        after: {
          title: "Com VS",
          points: [
            "Todos sabem onde estão",
            "Transições mais limpas",
            "Ensaios mais eficientes",
            "Culto mais fluido",
            "Menos distração e mais adoração"
          ]
        },
        quotes: [
          "Quando a banda sabe exatamente onde está, a congregação sente segurança.",
          "VS não substitui direção musical. Ele remove ruído, reduz improviso e aumenta consistência.",
          "O resultado não é tecnologia aparecendo. É adoração fluindo melhor."
        ],
        simulateBtn: "Simular música",
        nextSection: "Próximo"
      }
    },
    school: {
      title: "Escola de Música",
      subtitle: "Formação · Comunidade · Missão",
      overview: "A escola forma. O ministério aplica. A missão colhe. Uma proposta de formação contínua desenvolvida para fortalecer o louvor e ampliar a conexão com Austin.",
      opportunity: {
        title: "Austin: Live Music Capital",
        stats: ["311.890 hispânicos (32% da pop)", "+35% crescimento acelerado", "Música: porta de entrada para famílias"]
      },
      methodology: {
        title: "Sistema Integrado de 12 Semanas",
        points: [
          "Percepção Musical em Grupo", 
          "Prática de Instrumento", 
          "Recitais Comunitários", 
          "App como Extensão da Aula"
        ]
      },
      simulator: {
        title: "Sustentabilidade Financeira",
        subtitle: "Acessível, seguro e sustentável. Sem risco para a igreja.",
        costPerStudent: 200, 
        costPerTeacher: 1800,
        baseStudents: 10,
        labels: {
          students: "Alunos / Turma",
          revenue: "Receita do Ciclo",
          cost: "Custo Professor",
          profit: "Fundo de Reinvestimento",
          breakeven: "Ponto de Equilíbrio"
        }
      },
      destiny: {
        title: "O Destino dos Recursos",
        items: [
          "Bolsas para famílias",
          "Compra de instrumentos",
          "Expansão de turmas",
          "Fortalecimento do louvor"
        ]
      }
    },
    radio: {
      title: "Rádio Web Bilíngue",
      subtitle: "Espanhol · Inglês · Comunidade",
      overview: "A igreja não existe só no sábado. A rádio é presença diária no carro, no trabalho e na vida real.",
      stats: [
        { label: "Hispânicos em Austin", value: "311k+" },
        { label: "Consumo de áudio/dia", value: "3h54m" }
      ],
      programming: [
        "Cultos ao vivo e reprises",
        "Entrevistas bilíngues",
        "Música cristã licenciada",
        "Jornalismo cristão sindicado",
        "Programação infantil"
      ],
      costs: {
        title: "Estrutura Legal e Custos (Anual)",
        items: [
          { name: "SoundExchange", cost: 1000 },
          { name: "ASCAP + BMI", cost: 400 },
          { name: "CCLI Streaming", cost: 108 },
          { name: "Hospedagem", cost: 42 }
        ],
        total: 1550,
        monthly: 130
      },
      timeline: [
        { phase: "Tri 1", desc: "Construção da base" },
        { phase: "Tri 2", desc: "Primeiros programas" },
        { phase: "Tri 3", desc: "Consolidação e parcerias" },
        { phase: "Tri 4", desc: "Avaliação de impacto" }
      ],
      radioSimulator: {
        title: "Simulador da Rádio Web",
        reachText: "A igreja deixa de estar presente apenas no culto e passa a acompanhar pessoas durante a semana.",
        player: {
          name: "New Beginning Radio",
          status: "Live Demo",
          onAir: "On Air"
        },
        programs: [
          { id: "live", title: "Culto ao vivo", lang: "en/es", desc: "Transmissão bilíngue direta do santuário." },
          { id: "replay", title: "Replay da mensagem", lang: "en/es", desc: "Série de mensagens para ouvir no trânsito." },
          { id: "interview", title: "Entrevista bilíngue", lang: "en/es", desc: "Histórias inspiradoras da nossa comunidade." },
          { id: "music", title: "Música cristã licenciada", lang: "en/es", desc: "O melhor da adoração contemporânea." },
          { id: "devotional", title: "Devocional pastoral", lang: "pt/es", desc: "Palavras de encorajamento para começar o dia." },
          { id: "kids", title: "Programa infantil", lang: "en", desc: "Conteúdo seguro e divertido para crianças." },
          { id: "prayer", title: "Pedido de oração", lang: "es", desc: "Tempo dedicado a orar pelas necessidades da comunidade." }
        ],
        metrics: {
          title: "Projeção de Impacto Mensal",
          items: [
            { label: "Ouvintes Únicos/sem", value1: "20-50", value2: "150-300+", period1: "Mês 1-3", period2: "Mês 7-12" },
            { label: "Cidades Alcançadas", value1: "2-5", value2: "15+", period1: "Mês 1-3", period2: "Mês 7-12" },
            { label: "Pedidos de Oração", value1: "5-10", value2: "50+", period1: "Mês 1-3", period2: "Mês 7-12" }
          ]
        },
        beforeAfter: {
          beforeTitle: "Sem Rádio",
          beforePoints: [
            "Igreja presente principalmente no culto",
            "Comunidade externa pouco alcançada",
            "Mensagens limitadas ao momento presencial"
          ],
          afterTitle: "Com Rádio",
          afterPoints: [
            "Presença 7 dias por semana",
            "Conteúdo no carro, trabalho, casa e celular",
            "Alcance bilíngue",
            "Novos pontos de contato com a comunidade"
          ]
        },
        costs: {
          title: "Operação completa por menos de USD 130/mês",
          items: [
            { name: "SoundExchange", cost: "Licença de Execução" },
            { name: "ASCAP + BMI", cost: "Direitos Autorais" },
            { name: "CCLI Streaming", cost: "Direitos de Louvor" },
            { name: "Hospedagem", cost: "Servidor Streaming" }
          ]
        }
      }
    },
    profile: {
      headline: "Felipe Guerra",
      subheadline: "Ministro de Louvor · Produtor Musical · Diretor de Rádio",
      points: [
        "+10 anos formando músicos e ministérios",
        "+100 músicas produzidas",
        "Experiência internacional (América Latina, EUA, Europa)",
        "8 anos na Rede Novo Tempo",
        "Foco em estrutura, consistência e desenvolvimento de equipes"
      ],
      quote: "Essa proposta não nasce da teoria. Nasce da prática."
    },
    conclusion: {
      title: "Uma conversa pode mudar tudo.",
      text: "Um projeto. Uma visão. Uma comunidade.\nOs três pilares juntos criam algo maior do que qualquer esforço isolado.\n\nO próximo passo é simples: alinhar visão e avaliar como isso pode tomar forma na sua realidade.",
      cta: "Agendar uma conversa",
      contacts: {
        email: "profguerrapeixe@gmail.com",
        phone: "+1 (740) 513-0243",
        instagram: "@felipeguerraviolao"
      },
      microcopy: "Disponível para conversar e adaptar essa proposta à realidade da sua igreja."
    },
    ui: {
      navStory: "Visão Geral",
      navWorship: "Louvor",
      navSchool: "Escola",
      navRadio: "Rádio Web",
      navContact: "Contato",
      live: "AO VIVO",
      autoMode: "Auto-Pilot",
      manualMode: "Manual",
      play: "Tocar",
      pause: "Pausar",
      restart: "Reiniciar",
      start: "Começar",
      before: "Sem Estrutura",
      after: "Com Estrutura"
    }
  },
  en: {
    hero: {
      title: ["Formation.", "Worship.", "Reach."],
      subtitle: "A strategic proposal for New Beginning church.",
      cta: "Start Experience",
    },
    problem: {
      statements: [
        "The service happens.",
        "But it doesn't always connect.",
        "It's not lack of will.",
        "It's lack of structure."
      ]
    },
    solution: {
      subtitle: "The solution is not more effort.",
      title: "It's system."
    },
    pillarsIntro: {
      pillars: [
        { title: "Worship Ministry", action: "Organizes", desc: "Structure, form and sustain worship with excellence." },
        { title: "Music School", action: "Forms", desc: "Train musicians and people within the church and community." },
        { title: "Bilingual Web Radio", action: "Expands", desc: "Take the church's presence beyond the service - every day." }
      ],
      conclusion: "Separated they work.\nTogether they transform."
    },
    worship: {
      title: "Worship Ministry",
      subtitle: "Structure · Formation · Musical Direction · Mission",
      overview: "Goodwill sustains, but doesn't organize growth. The goal is to strengthen what exists, organize what works, and develop people intentionally.",
      problemSolution: {
        title: "When the service happens, but doesn't connect",
        before: ["The church watches... but doesn't participate.", "Rehearsals start from zero.", "Improvised decisions."],
        after: ["Congregation arrives prepared.", "Rehearsals advance every week.", "Decisions have base and direction."]
      },
      roles: {
        title: "Roles that Sustain the System",
        items: [
          { role: "Musical Director", desc: "Plans, organizes and develops the complete system." },
          { role: "Worship Leader", desc: "Leads rehearsals and the service." },
          { role: "Vocal Coordinator", desc: "Cares for groups and internal communication." }
        ]
      },
      cycle: {
        title: "Immersion Phase: 12 Weeks",
        points: ["Band: Rhythm, ensemble, consistency", "Vocals: Pitch, division, confidence", "System: App usage, communication, devotional"]
      },
      features: [
        "12-Week Repertoire (60% base, 25% dev, 15% free)",
        "Bilingual Policy (Multicultural service)",
        "Custom App: Preparation starts before rehearsal",
        "Tracks, Clicks and Musical Direction"
      ],
      visualSystem: {
        title: "Visual System for Worship",
        subtitle: "A visual layer of musical direction.",
        overview: "VS works as a visual layer helping musicians, vocalists, and the team know exactly where they are in the song, the measure, and the service structure.",
        before: {
          title: "Without VS",
          points: [
            "Insecure entries",
            "Musicians looking at each other",
            "Confusing transitions",
            "Excessive dependence on musical director"
          ]
        },
        after: {
          title: "With VS",
          points: [
            "Everyone knows where they are",
            "Cleaner transitions",
            "More efficient rehearsals",
            "Smoother service flow",
            "Less distraction, more worship"
          ]
        },
        quotes: [
          "When the band knows exactly where they are, the congregation feels secure.",
          "VS doesn't replace musical direction. It removes noise, reduces improvisation, and increases consistency.",
          "The result is not technology showing off. It's worship flowing better."
        ],
        simulateBtn: "Simulate song",
        nextSection: "Next"
      }
    },
    school: {
      title: "Music School",
      subtitle: "Formation · Community · Mission",
      overview: "The school forms. The ministry applies. The mission reaps. A continuous formation proposal developed to strengthen worship and expand connection with Austin.",
      opportunity: {
        title: "Austin: Live Music Capital",
        stats: ["311,890 Hispanics (32% of pop)", "+35% accelerated growth", "Music: entry point for families"]
      },
      methodology: {
        title: "12-Week Integrated System",
        points: [
          "Group Musical Perception", 
          "Instrument Practice", 
          "Community Recitals", 
          "App as Class Extension"
        ]
      },
      simulator: {
        title: "Financial Sustainability",
        subtitle: "Accessible, safe and sustainable. No risk to the church.",
        costPerStudent: 200, 
        costPerTeacher: 1800,
        baseStudents: 10,
        labels: {
          students: "Students / Class",
          revenue: "Cycle Revenue",
          cost: "Teacher Cost",
          profit: "Reinvestment Fund",
          breakeven: "Breakeven Point"
        }
      },
      destiny: {
        title: "Resource Allocation",
        items: [
          "Scholarships for families",
          "Instrument purchase",
          "Class expansion",
          "Worship strengthening"
        ]
      }
    },
    radio: {
      title: "Bilingual Web Radio",
      subtitle: "Spanish · English · Community",
      overview: "The church doesn't exist only on Saturday. The radio is a daily presence in the car, at work and in real life.",
      stats: [
        { label: "Hispanics in Austin", value: "311k+" },
        { label: "Audio consumption/day", value: "3h54m" }
      ],
      programming: [
        "Live services and replays",
        "Bilingual interviews",
        "Licensed Christian music",
        "Syndicated Christian journalism",
        "Children's programming"
      ],
      costs: {
        title: "Legal Structure and Costs (Annual)",
        items: [
          { name: "SoundExchange", cost: 1000 },
          { name: "ASCAP + BMI", cost: 400 },
          { name: "CCLI Streaming", cost: 108 },
          { name: "Hosting", cost: 42 }
        ],
        total: 1550,
        monthly: 130
      },
      timeline: [
        { phase: "Q1", desc: "Building the foundation" },
        { phase: "Q2", desc: "First programs" },
        { phase: "Q3", desc: "Consolidation & partnerships" },
        { phase: "Q4", desc: "Impact evaluation" }
      ],
      radioSimulator: {
        title: "Web Radio Simulator",
        reachText: "The church ceases to be present only at the service and starts to accompany people during the week.",
        player: {
          name: "New Beginning Radio",
          status: "Live Demo",
          onAir: "On Air"
        },
        programs: [
          { id: "live", title: "Live Service", lang: "en/es", desc: "Direct bilingual broadcast from the sanctuary." },
          { id: "replay", title: "Message Replay", lang: "en/es", desc: "Message series to listen to in traffic." },
          { id: "interview", title: "Bilingual Interview", lang: "en/es", desc: "Inspiring stories from our community." },
          { id: "music", title: "Licensed Christian Music", lang: "en/es", desc: "The best of contemporary worship." },
          { id: "devotional", title: "Pastoral Devotional", lang: "en/es", desc: "Words of encouragement to start the day." },
          { id: "kids", title: "Kids Program", lang: "en", desc: "Safe and fun content for children." },
          { id: "prayer", title: "Prayer Request", lang: "es", desc: "Dedicated time to pray for community needs." }
        ],
        metrics: {
          title: "Monthly Impact Projection",
          items: [
            { label: "Unique Listeners/wk", value1: "20-50", value2: "150-300+", period1: "Month 1-3", period2: "Month 7-12" },
            { label: "Cities Reached", value1: "2-5", value2: "15+", period1: "Month 1-3", period2: "Month 7-12" },
            { label: "Prayer Requests", value1: "5-10", value2: "50+", period1: "Month 1-3", period2: "Month 7-12" }
          ]
        },
        beforeAfter: {
          beforeTitle: "Without Radio",
          beforePoints: [
            "Church present mainly at the service",
            "External community little reached",
            "Messages limited to the in-person moment"
          ],
          afterTitle: "With Radio",
          afterPoints: [
            "Presence 7 days a week",
            "Content in the car, work, home and phone",
            "Bilingual reach",
            "New contact points with the community"
          ]
        },
        costs: {
          title: "Complete operation for under USD 130/month",
          items: [
            { name: "SoundExchange", cost: "Performance License" },
            { name: "ASCAP + BMI", cost: "Copyright" },
            { name: "CCLI Streaming", cost: "Worship Rights" },
            { name: "Hosting", cost: "Streaming Server" }
          ]
        }
      }
    },
    profile: {
      headline: "Felipe Guerra",
      subheadline: "Worship Minister · Music Producer · Radio Director",
      points: [
        "+10 years forming musicians and ministries",
        "+100 songs produced",
        "International experience (Latin America, US, Europe)",
        "8 years at Novo Tempo Network",
        "Focus on structure, consistency and team development"
      ],
      quote: "This proposal doesn't come from theory. It comes from practice."
    },
    conclusion: {
      title: "A conversation can change everything.",
      text: "One project. One vision. One community.\nThe three pillars together create something bigger than any isolated effort.\n\nThe next step is simple: align vision and evaluate how this can take shape in your reality.",
      cta: "Schedule a conversation",
      contacts: {
        email: "profguerrapeixe@gmail.com",
        phone: "+1 (740) 513-0243",
        instagram: "@felipeguerraviolao"
      },
      microcopy: "Available to talk and adapt this proposal to your church's reality."
    },
    ui: {
      navStory: "Overview",
      navWorship: "Worship",
      navSchool: "School",
      navRadio: "Web Radio",
      navContact: "Contact",
      live: "LIVE",
      autoMode: "Auto-Pilot",
      manualMode: "Manual",
      play: "Play",
      pause: "Pause",
      restart: "Restart",
      start: "Start",
      before: "No Structure",
      after: "With Structure"
    }
  },
  es: {
    hero: {
      title: ["Formación.", "Adoración.", "Alcance."],
      subtitle: "Una propuesta estratégica para la iglesia New Beginning.",
      cta: "Comenzar Experiencia",
    },
    problem: {
      statements: [
        "El servicio sucede.",
        "Pero no siempre conecta.",
        "No es falta de voluntad.",
        "Es falta de estructura."
      ]
    },
    solution: {
      subtitle: "La solución no es más esfuerzo.",
      title: "Es sistema."
    },
    pillarsIntro: {
      pillars: [
        { title: "Ministerio de Alabanza", action: "Organiza", desc: "Estructurar, formar y sostener la adoración con excelencia." },
        { title: "Escuela de Música", action: "Forma", desc: "Formar músicos y personas dentro de la iglesia y la comunidad." },
        { title: "Radio Web Bilingüe", action: "Expande", desc: "Llevar la presencia de la iglesia más allá del servicio, todos los días." }
      ],
      conclusion: "Separados funcionan.\nJuntos transforman."
    },
    worship: {
      title: "Ministerio de Alabanza",
      subtitle: "Estructura · Formación · Dirección Musical · Misión",
      overview: "La buena voluntad sostiene, pero no organiza el crecimiento. El objetivo es fortalecer lo que existe, organizar lo que funciona y desarrollar personas con intencionalidad.",
      problemSolution: {
        title: "Cuando el servicio sucede, pero no conecta",
        before: ["La iglesia observa... pero no participa.", "Los ensayos empiezan de cero.", "Decisiones improvisadas."],
        after: ["La congregación llega preparada.", "Los ensayos avanzan cada semana.", "Las decisiones tienen base y dirección."]
      },
      roles: {
        title: "Roles que Sostienen el Sistema",
        items: [
          { role: "Director Musical", desc: "Planifica, organiza y desarrolla el sistema completo." },
          { role: "Líder de Alabanza", desc: "Conduce los ensayos y el servicio." },
          { role: "Coordinador Vocal", desc: "Cuida de los grupos y la comunicación interna." }
        ]
      },
      cycle: {
        title: "Fase de Inmersión: 12 Semanas",
        points: ["Banda: Ritmo, conjunto, consistencia", "Voces: Afinación, división, seguridad", "Sistema: Uso de app, comunicación, devocional"]
      },
      features: [
        "Repertorio de 12 Semanas (60% base, 25% des, 15% libre)",
        "Política Bilingüe (Servicio multicultural)",
        "App Propia: Preparación antes del ensayo",
        "Tracks, Clicks y Dirección Musical"
      ],
      visualSystem: {
        title: "Sistema Visual para Alabanza",
        subtitle: "Una capa visual de dirección musical.",
        overview: "El VS funciona como una capa visual ayudando a músicos, vocalistas y al equipo a saber exactamente dónde están en la canción, el compás y la estructura del servicio.",
        before: {
          title: "Sin VS",
          points: [
            "Entradas inseguras",
            "Músicos mirándose unos a otros",
            "Transiciones confusas",
            "Dependencia excesiva del director musical"
          ]
        },
        after: {
          title: "Con VS",
          points: [
            "Todos saben dónde están",
            "Transiciones más limpias",
            "Ensayos más eficientes",
            "Servicio más fluido",
            "Menos distracción, más adoración"
          ]
        },
        quotes: [
          "Cuando la banda sabe exactamente dónde está, la congregación siente seguridad.",
          "El VS no reemplaza la dirección musical. Elimina el ruido, reduce la improvisación y aumenta la consistencia.",
          "El resultado no es tecnología alardeando. Es la adoración fluyendo mejor."
        ],
        simulateBtn: "Simular canción",
        nextSection: "Siguiente"
      }
    },
    school: {
      title: "Escuela de Música",
      subtitle: "Formación · Comunidad · Misión",
      overview: "La escuela forma. El ministerio aplica. La misión cosecha. Una propuesta de formación continua desarrollada para fortalecer la alabanza y ampliar la conexión con Austin.",
      opportunity: {
        title: "Austin: Live Music Capital",
        stats: ["311,890 hispanos (32% de la pob)", "+35% crecimiento acelerado", "Música: puerta de entrada para familias"]
      },
      methodology: {
        title: "Sistema Integrado de 12 Semanas",
        points: [
          "Percepción Musical en Grupo", 
          "Práctica de Instrumento", 
          "Recitales Comunitarios", 
          "App como Extensión de la Clase"
        ]
      },
      simulator: {
        title: "Sostenibilidad Financiera",
        subtitle: "Accesible, seguro y sostenible. Sin riesgo para la iglesia.",
        costPerStudent: 200, 
        costPerTeacher: 1800,
        baseStudents: 10,
        labels: {
          students: "Alumnos / Clase",
          revenue: "Ingresos del Ciclo",
          cost: "Costo del Profesor",
          profit: "Fondo de Reinversión",
          breakeven: "Punto de Equilibrio"
        }
      },
      destiny: {
        title: "Destino de los Recursos",
        items: [
          "Becas para familias",
          "Compra de instrumentos",
          "Expansión de clases",
          "Fortalecimiento de la alabanza"
        ]
      }
    },
    radio: {
      title: "Radio Web Bilingüe",
      subtitle: "Español · Inglés · Comunidad",
      overview: "La iglesia no existe solo el sábado. La radio es presencia diaria en el auto, en el trabajo y en la vida real.",
      stats: [
        { label: "Hispanos en Austin", value: "311k+" },
        { label: "Consumo de audio/día", value: "3h54m" }
      ],
      programming: [
        "Servicios en vivo y repeticiones",
        "Entrevistas bilingües",
        "Música cristiana licenciada",
        "Periodismo cristiano sindicado",
        "Programación infantil"
      ],
      costs: {
        title: "Estructura Legal y Costos (Anual)",
        items: [
          { name: "SoundExchange", cost: 1000 },
          { name: "ASCAP + BMI", cost: 400 },
          { name: "CCLI Streaming", cost: 108 },
          { name: "Hosting", cost: 42 }
        ],
        total: 1550,
        monthly: 130
      },
      timeline: [
        { phase: "Tri 1", desc: "Construcción de la base" },
        { phase: "Tri 2", desc: "Primeros programas" },
        { phase: "Tri 3", desc: "Consolidación y alianzas" },
        { phase: "Tri 4", desc: "Evaluación de impacto" }
      ],
      radioSimulator: {
        title: "Simulador de Radio Web",
        reachText: "La iglesia deja de estar presente solo en el servicio y pasa a acompañar a las personas durante la semana.",
        player: {
          name: "New Beginning Radio",
          status: "Live Demo",
          onAir: "Al Aire"
        },
        programs: [
          { id: "live", title: "Servicio en vivo", lang: "en/es", desc: "Transmisión bilingüe directa del santuario." },
          { id: "replay", title: "Replay del mensaje", lang: "en/es", desc: "Serie de mensajes para escuchar en el tráfico." },
          { id: "interview", title: "Entrevista bilingüe", lang: "en/es", desc: "Historias inspiradoras de nuestra comunidad." },
          { id: "music", title: "Música cristiana licenciada", lang: "en/es", desc: "Lo mejor de la adoración contemporánea." },
          { id: "devotional", title: "Devocional pastoral", lang: "en/es", desc: "Palabras de aliento para comenzar el día." },
          { id: "kids", title: "Programa infantil", lang: "en", desc: "Contenido seguro y divertido para niños." },
          { id: "prayer", title: "Petición de oración", lang: "es", desc: "Tiempo dedicado a orar por las necesidades de la comunidad." }
        ],
        metrics: {
          title: "Proyección de Impacto Mensual",
          items: [
            { label: "Oyentes Únicos/sem", value1: "20-50", value2: "150-300+", period1: "Mes 1-3", period2: "Mes 7-12" },
            { label: "Ciudades Alcanzadas", value1: "2-5", value2: "15+", period1: "Mes 1-3", period2: "Mes 7-12" },
            { label: "Peticiones de Oración", value1: "5-10", value2: "50+", period1: "Mes 1-3", period2: "Mes 7-12" }
          ]
        },
        beforeAfter: {
          beforeTitle: "Sin Radio",
          beforePoints: [
            "Iglesia presente principalmente en el servicio",
            "Comunidad externa poco alcanzada",
            "Mensajes limitados al momento presencial"
          ],
          afterTitle: "Con Radio",
          afterPoints: [
            "Presencia 7 días a la semana",
            "Contenido en el auto, trabajo, casa y teléfono",
            "Alcance bilingüe",
            "Nuevos puntos de contacto con la comunidad"
          ]
        },
        costs: {
          title: "Operación completa por menos de USD 130/mes",
          items: [
            { name: "SoundExchange", cost: "Licencia de Ejecución" },
            { name: "ASCAP + BMI", cost: "Derechos de Autor" },
            { name: "CCLI Streaming", cost: "Derechos de Alabanza" },
            { name: "Hosting", cost: "Servidor Streaming" }
          ]
        }
      }
    },
    profile: {
      headline: "Felipe Guerra",
      subheadline: "Ministro de Alabanza · Productor Musical · Director de Radio",
      points: [
        "+10 años formando músicos y ministerios",
        "+100 canciones producidas",
        "Experiencia internacional (América Latina, EE. UU., Europa)",
        "8 años en la Red Nuevo Tiempo",
        "Enfoque en estructura, consistencia y desarrollo de equipos"
      ],
      quote: "Esta propuesta no nace de la teoría. Nace de la práctica."
    },
    conclusion: {
      title: "Una conversación puede cambiarlo todo.",
      text: "Un proyecto. Una visión. Una comunidad.\nLos tres pilares juntos crean algo mayor que cualquier esfuerzo aislado.\n\nEl próximo paso es simple: alinear la visión y evaluar cómo esto puede tomar forma en su realidad.",
      cta: "Agendar una conversación",
      contacts: {
        email: "profguerrapeixe@gmail.com",
        phone: "+1 (740) 513-0243",
        instagram: "@felipeguerraviolao"
      },
      microcopy: "Disponible para conversar y adaptar esta propuesta a la realidad de su iglesia."
    },
    ui: {
      navStory: "Visión General",
      navWorship: "Alabanza",
      navSchool: "Escuela",
      navRadio: "Radio Web",
      navContact: "Contacto",
      live: "EN VIVO",
      autoMode: "Auto-Pilot",
      manualMode: "Manual",
      play: "Reproducir",
      pause: "Pausar",
      restart: "Reiniciar",
      start: "Comenzar",
      before: "Sin Estructura",
      after: "Con Estructura"
    }
  }
};
