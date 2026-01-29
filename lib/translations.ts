export type Language = "nl" | "en" | "es" | "zh"

export const translations = {
  // Header
  nav: {
    services: { nl: "Diensten", en: "Services", es: "Servicios", zh: "服务" },
    sectors: { nl: "Sectoren", en: "Sectors", es: "Sectores", zh: "行业" },
    countries: { nl: "Landen", en: "Countries", es: "Países", zh: "国家" },
    about: { nl: "Over Ons", en: "About Us", es: "Sobre Nosotros", zh: "关于我们" },
    register: { nl: "Aanmelden", en: "Register", es: "Registrarse", zh: "注册" },
    asEmployer: { nl: "Als Werkgever", en: "As Employer", es: "Como Empleador", zh: "作为雇主" },
    asEmployee: { nl: "Als Werknemer", en: "As Employee", es: "Como Empleado", zh: "作为员工" },
    contact: { nl: "Contact", en: "Contact", es: "Contacto", zh: "联系我们" },
  },

  // Hero
  hero: {
    title: {
      nl: "Het juiste talent voor",
      en: "The right talent for",
      es: "El talento adecuado para",
      zh: "为您的组织找到",
    },
    titleHighlight: {
      nl: "uw organisatie",
      en: "your organization",
      es: "su organización",
      zh: "合适的人才",
    },
    description: {
      nl: "Go-team verbindt nationale en internationale werknemers met bedrijven in diverse sectoren. Betrouwbaar, professioneel en toegankelijk.",
      en: "Go-team connects national and international employees with companies in various sectors. Reliable, professional, and accessible.",
      es: "Go-team conecta empleados nacionales e internacionales con empresas en diversos sectores. Confiable, profesional y accesible.",
      zh: "Go-team将国内外员工与各行业公司联系起来。可靠、专业、易于接触。",
    },
    employerBtn: { nl: "Ik ben werkgever", en: "I am an employer", es: "Soy empleador", zh: "我是雇主" },
    seekerBtn: { nl: "Ik zoek werk", en: "I'm looking for work", es: "Busco trabajo", zh: "我在找工作" },
  },

  // Dual Audience
  dual: {
    title: { nl: "Voor wie zijn wij er?", en: "Who are we here for?", es: "¿Para quién estamos?", zh: "我们服务谁？" },
    subtitle: {
      nl: "Go-team biedt oplossingen voor zowel werkgevers als werkzoekenden",
      en: "Go-team offers solutions for both employers and job seekers",
      es: "Go-team ofrece soluciones tanto para empleadores como para buscadores de empleo",
      zh: "Go-team为雇主和求职者提供解决方案",
    },
    employers: { nl: "Voor werkgevers", en: "For employers", es: "Para empleadores", zh: "雇主专区" },
    employersDesc: {
      nl: "Vind gekwalificeerd personeel voor uw organisatie. Wij nemen het recruitmentproces volledig uit handen.",
      en: "Find qualified staff for your organization. We take care of the entire recruitment process.",
      es: "Encuentre personal calificado para su organización. Nos encargamos de todo el proceso de reclutamiento.",
      zh: "为您的组织找到合格的员工。我们全程负责招聘流程。",
    },
    employersBenefits: {
      nl: [
        "Snelle plaatsing van gekwalificeerde kandidaten",
        "Volledige ondersteuning bij internationale werving",
        "Flexibele arbeidscontracten op maat",
        "Nazorg en begeleiding na plaatsing",
      ],
      en: [
        "Fast placement of qualified candidates",
        "Full support for international recruitment",
        "Flexible employment contracts tailored to your needs",
        "Aftercare and guidance after placement",
      ],
      es: [
        "Colocación rápida de candidatos calificados",
        "Soporte completo para reclutamiento internacional",
        "Contratos de trabajo flexibles a medida",
        "Seguimiento y orientación después de la colocación",
      ],
      zh: ["快速安置合格候选人", "全面支持国际招聘", "量身定制的灵活劳动合同", "安置后的后续关怀和指导"],
    },
    contactBtn: { nl: "Neem contact op", en: "Contact us", es: "Contáctenos", zh: "联系我们" },
    seekers: { nl: "Voor werkzoekenden", en: "For job seekers", es: "Para buscadores de empleo", zh: "求职者专区" },
    seekersDesc: {
      nl: "Ontdek interessante vacatures in Nederland en internationaal. Wij begeleiden je bij elke stap.",
      en: "Discover interesting vacancies in the Netherlands and internationally. We guide you every step of the way.",
      es: "Descubra vacantes interesantes en los Países Bajos e internacionalmente. Le guiamos en cada paso.",
      zh: "发现荷兰和国际的有趣职位空缺。我们将全程指导您。",
    },
    seekersBenefits: {
      nl: [
        "Toegang tot exclusieve vacatures",
        "Hulp bij visa en werkvergunningen",
        "Begeleiding in huisvesting en inburgering",
        "Persoonlijke carrièreadvies",
      ],
      en: [
        "Access to exclusive vacancies",
        "Help with visas and work permits",
        "Guidance with housing and integration",
        "Personal career advice",
      ],
      es: [
        "Acceso a vacantes exclusivas",
        "Ayuda con visas y permisos de trabajo",
        "Orientación en vivienda e integración",
        "Asesoramiento profesional personalizado",
      ],
      zh: ["获取独家职位空缺", "签证和工作许可帮助", "住房和融入指导", "个人职业建议"],
    },
    vacanciesBtn: { nl: "Bekijk vacatures", en: "View vacancies", es: "Ver vacantes", zh: "查看职位" },
  },

  // Services
  services: {
    title: { nl: "Onze diensten", en: "Our services", es: "Nuestros servicios", zh: "我们的服务" },
    subtitle: {
      nl: "Een compleet aanbod voor al uw personeelsbehoeften",
      en: "A complete range for all your staffing needs",
      es: "Una gama completa para todas sus necesidades de personal",
      zh: "满足您所有人员配置需求的完整服务",
    },
    items: {
      recruitment: {
        title: {
          nl: "Werving & Selectie",
          en: "Recruitment & Selection",
          es: "Reclutamiento y Selección",
          zh: "招聘与选拔",
        },
        desc: {
          nl: "Wij zoeken en selecteren de beste kandidaten die perfect aansluiten bij uw organisatie en bedrijfscultuur.",
          en: "We search and select the best candidates who perfectly match your organization and company culture.",
          es: "Buscamos y seleccionamos los mejores candidatos que se ajustan perfectamente a su organización y cultura empresarial.",
          zh: "我们寻找并选择最适合您组织和企业文化的最佳候选人。",
        },
      },
      international: {
        title: {
          nl: "Internationale Plaatsing",
          en: "International Placement",
          es: "Colocación Internacional",
          zh: "国际安置",
        },
        desc: {
          nl: "Specialist in het plaatsen van internationale werknemers met volledige ondersteuning voor visa en documentatie.",
          en: "Specialist in placing international employees with full support for visas and documentation.",
          es: "Especialista en colocación de empleados internacionales con soporte completo para visas y documentación.",
          zh: "专门安置国际员工，提供签证和文件的全面支持。",
        },
      },
      temp: {
        title: { nl: "Uitzendwerk", en: "Temporary Work", es: "Trabajo Temporal", zh: "临时工作" },
        desc: {
          nl: "Flexibele uitzendoplossingen voor tijdelijke en permanente functies in diverse sectoren en op elk niveau.",
          en: "Flexible staffing solutions for temporary and permanent positions in various sectors at every level.",
          es: "Soluciones de personal flexibles para puestos temporales y permanentes en diversos sectores a todos los niveles.",
          zh: "为各行业各级别的临时和永久职位提供灵活的人员配置解决方案。",
        },
      },
      secondment: {
        title: { nl: "Detachering", en: "Secondment", es: "Destacamento", zh: "借调" },
        desc: {
          nl: "Hoogopgeleide professionals beschikbaar voor detachering bij uw organisatie voor specifieke projecten.",
          en: "Highly educated professionals available for secondment to your organization for specific projects.",
          es: "Profesionales altamente cualificados disponibles para destacamento en su organización para proyectos específicos.",
          zh: "高素质专业人员可借调到您的组织从事特定项目。",
        },
      },
    },
  },

  // Sectors
  sectors: {
    title: {
      nl: "Actief in diverse sectoren",
      en: "Active in various sectors",
      es: "Activo en diversos sectores",
      zh: "活跃于各行业",
    },
    subtitle: {
      nl: "Van bouw tot zorg, wij leveren gekwalificeerd personeel",
      en: "From construction to healthcare, we deliver qualified personnel",
      es: "Desde construcción hasta salud, entregamos personal calificado",
      zh: "从建筑到医疗保健，我们提供合格的人员",
    },
    items: {
      construction: {
        nl: "Bouw & Techniek",
        en: "Construction & Tech",
        es: "Construcción y Técnica",
        zh: "建筑与技术",
      },
      hospitality: { nl: "Horeca", en: "Hospitality", es: "Hostelería", zh: "餐饮业" },
      logistics: { nl: "Logistiek", en: "Logistics", es: "Logística", zh: "物流" },
      industry: { nl: "Industrie", en: "Industry", es: "Industria", zh: "工业" },
      healthcare: { nl: "Zorg", en: "Healthcare", es: "Salud", zh: "医疗保健" },
      retail: { nl: "Retail", en: "Retail", es: "Retail", zh: "零售" },
    },
    placements: { nl: "plaatsingen", en: "placements", es: "colocaciones", zh: "安置" },
  },

  // Countries
  countries: {
    badge: { nl: "Europees Netwerk", en: "European Network", es: "Red Europea", zh: "欧洲网络" },
    title: { nl: "Internationaal netwerk", en: "International network", es: "Red internacional", zh: "国际网络" },
    subtitle: {
      nl: "Wij hebben een sterk netwerk in Europa en daarbuiten",
      en: "We have a strong network in Europe and beyond",
      es: "Tenemos una fuerte red en Europa y más allá",
      zh: "我们在欧洲及其他地区拥有强大的网络",
    },
    list: {
      nl: [
        "Nederland",
        "België",
        "Duitsland",
        "Polen",
        "Roemenië",
        "Bulgarije",
        "Portugal",
        "Spanje",
        "Italië",
        "Frankrijk",
        "Tsjechië",
        "Slowakije",
        "Hongarije",
        "Kroatië",
      ],
      en: [
        "Netherlands",
        "Belgium",
        "Germany",
        "Poland",
        "Romania",
        "Bulgaria",
        "Portugal",
        "Spain",
        "Italy",
        "France",
        "Czech Republic",
        "Slovakia",
        "Hungary",
        "Croatia",
      ],
      es: [
        "Países Bajos",
        "Bélgica",
        "Alemania",
        "Polonia",
        "Rumania",
        "Bulgaria",
        "Portugal",
        "España",
        "Italia",
        "Francia",
        "República Checa",
        "Eslovaquia",
        "Hungría",
        "Croacia",
      ],
      zh: [
        "荷兰",
        "比利时",
        "德国",
        "波兰",
        "罗马尼亚",
        "保加利亚",
        "葡萄牙",
        "西班牙",
        "意大利",
        "法国",
        "捷克共和国",
        "斯洛伐克",
        "匈牙利",
        "克罗地亚",
      ],
    },
  },

  // CTA
  cta: {
    employersTitle: { nl: "Voor werkgevers", en: "For employers", es: "Para empleadores", zh: "雇主专区" },
    employersDesc: {
      nl: "Bent u op zoek naar betrouwbare werknemers? Wij helpen u met het vinden van de juiste kandidaten voor uw organisatie.",
      en: "Looking for reliable employees? We help you find the right candidates for your organization.",
      es: "¿Busca empleados confiables? Le ayudamos a encontrar los candidatos adecuados para su organización.",
      zh: "寻找可靠的员工？我们帮助您为您的组织找到合适的候选人。",
    },
    employersBenefits: {
      nl: [
        "Snelle plaatsing van gekwalificeerd personeel",
        "Uitgebreide screening en selectie",
        "Nazorg en begeleiding",
      ],
      en: ["Fast placement of qualified personnel", "Extensive screening and selection", "Aftercare and guidance"],
      es: [
        "Colocación rápida de personal calificado",
        "Selección y evaluación exhaustiva",
        "Seguimiento y orientación",
      ],
      zh: ["快速安置合格人员", "广泛的筛选和选拔", "后续关怀和指导"],
    },
    seekersTitle: {
      nl: "Voor werkzoekenden",
      en: "For job seekers",
      es: "Para buscadores de empleo",
      zh: "求职者专区",
    },
    seekersDesc: {
      nl: "Op zoek naar een nieuwe uitdaging? Wij bieden aantrekkelijke vacatures bij gerenommeerde bedrijven in diverse sectoren.",
      en: "Looking for a new challenge? We offer attractive vacancies at renowned companies in various sectors.",
      es: "¿Busca un nuevo desafío? Ofrecemos vacantes atractivas en empresas reconocidas de diversos sectores.",
      zh: "寻找新挑战？我们在各行业知名公司提供有吸引力的职位。",
    },
    seekersBenefits: {
      nl: [
        "Toegang tot exclusieve vacatures",
        "Persoonlijke begeleiding en ondersteuning",
        "Hulp bij huisvesting en administratie",
      ],
      en: ["Access to exclusive vacancies", "Personal guidance and support", "Help with housing and administration"],
      es: ["Acceso a vacantes exclusivas", "Orientación y apoyo personal", "Ayuda con vivienda y administración"],
      zh: ["获取独家职位空缺", "个人指导和支持", "住房和行政帮助"],
    },
  },

  // Contact
  contact: {
    title: { nl: "Neem contact met ons op", en: "Contact us", es: "Contáctenos", zh: "联系我们" },
    subtitle: {
      nl: "Wij staan klaar om uw vragen te beantwoorden",
      en: "We are ready to answer your questions",
      es: "Estamos listos para responder a sus preguntas",
      zh: "我们随时准备回答您的问题",
    },
    phone: { nl: "Telefoon", en: "Phone", es: "Teléfono", zh: "电话" },
    hours: {
      nl: "Ma-Vr: 8:00-18:00",
      en: "Mon-Fri: 8:00-18:00",
      es: "Lun-Vie: 8:00-18:00",
      zh: "周一至周五: 8:00-18:00",
    },
    email: { nl: "Email", en: "Email", es: "Correo electrónico", zh: "电子邮件" },
    response: {
      nl: "Reactie binnen 24 uur",
      en: "Response within 24 hours",
      es: "Respuesta en 24 horas",
      zh: "24小时内回复",
    },
    location: { nl: "Locatie", en: "Location", es: "Ubicación", zh: "位置" },
    visit: { nl: "Bezoek op afspraak", en: "Visit by appointment", es: "Visita con cita", zh: "预约参观" },
    form: {
      name: { nl: "Naam", en: "Name", es: "Nombre", zh: "姓名" },
      namePlaceholder: { nl: "Uw naam", en: "Your name", es: "Su nombre", zh: "您的姓名" },
      emailPlaceholder: { nl: "uw@email.nl", en: "your@email.com", es: "su@correo.com", zh: "您的邮箱" },
      phonePlaceholder: { nl: "+31 6 1234 5678", en: "+31 6 1234 5678", es: "+31 6 1234 5678", zh: "+31 6 1234 5678" },
      company: { nl: "Bedrijf", en: "Company", es: "Empresa", zh: "公司" },
      companyPlaceholder: { nl: "Bedrijfsnaam", en: "Company name", es: "Nombre de la empresa", zh: "公司名称" },
      message: { nl: "Bericht", en: "Message", es: "Mensaje", zh: "留言" },
      messagePlaceholder: {
        nl: "Vertel ons over uw personeelsbehoefte of interesse...",
        en: "Tell us about your staffing needs or interest...",
        es: "Cuéntenos sobre sus necesidades de personal o interés...",
        zh: "告诉我们您的人员配置需求或兴趣...",
      },
      submit: { nl: "Verstuur bericht", en: "Send message", es: "Enviar mensaje", zh: "发送消息" },
    },
  },

  // Footer
  footer: {
    description: {
      nl: "Uw partner voor nationale en internationale werving en selectie. Wij verbinden talent met mogelijkheden.",
      en: "Your partner for national and international recruitment and selection. We connect talent with opportunities.",
      es: "Su socio para reclutamiento y selección nacional e internacional. Conectamos talento con oportunidades.",
      zh: "您的国内外招聘和选拔合作伙伴。我们将人才与机会联系起来。",
    },
    forEmployers: { nl: "Voor werkgevers", en: "For employers", es: "Para empleadores", zh: "雇主专区" },
    recruitment: {
      nl: "Werving & Selectie",
      en: "Recruitment & Selection",
      es: "Reclutamiento y Selección",
      zh: "招聘与选拔",
    },
    tempWork: { nl: "Uitzendwerk", en: "Temporary Work", es: "Trabajo Temporal", zh: "临时工作" },
    secondment: { nl: "Detachering", en: "Secondment", es: "Destacamento", zh: "借调" },
    payroll: { nl: "Payrolling", en: "Payrolling", es: "Nómina", zh: "工资管理" },
    forSeekers: { nl: "Voor werknemers", en: "For employees", es: "Para empleados", zh: "员工专区" },
    vacancies: { nl: "Vacatures", en: "Vacancies", es: "Vacantes", zh: "职位空缺" },
    uploadCV: { nl: "CV Uploaden", en: "Upload CV", es: "Subir CV", zh: "上传简历" },
    workAreas: { nl: "Werkgebieden", en: "Work Areas", es: "Áreas de trabajo", zh: "工作领域" },
    faq: { nl: "FAQ", en: "FAQ", es: "Preguntas frecuentes", zh: "常见问题" },
    rights: {
      nl: "Alle rechten voorbehouden.",
      en: "All rights reserved.",
      es: "Todos los derechos reservados.",
      zh: "版权所有。",
    },
    privacy: { nl: "Privacy", en: "Privacy", es: "Privacidad", zh: "隐私" },
    terms: { nl: "Algemene Voorwaarden", en: "Terms & Conditions", es: "Términos y Condiciones", zh: "条款和条件" },
  },
}

export function t<T>(obj: { [key in Language]: T }, lang: Language): T {
  return obj[lang] || obj.nl
}
