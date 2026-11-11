export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  benefits: string[];
  href: string;
};

export const services: Service[] = [
  {
    slug: "cctv",
    title: "Instalación de cámaras y CCTV",
    eyebrow: "Seguridad física",
    summary:
      "Diseño e instalación de sistemas de vigilancia para casas, condominios, empresas y bodegas.",
    description:
      "Implementamos soluciones de CCTV con criterio técnico: cobertura, puntos críticos, grabación, acceso remoto y escalabilidad.",
    benefits: [
      "Evaluación de puntos vulnerables",
      "Cámara adecuada según zona y exposición",
      "Acceso remoto desde celular",
      "Orden tecnico en cableado y configuracion",
    ],
    href: "/instalacion-camaras-cctv",
  },
  {
    slug: "ciberseguridad",
    title: "Ciberseguridad",
    eyebrow: "Protección digital",
    summary:
      "Medidas prácticas para reducir riesgos digitales en redes, cuentas, equipos y operaciones.",
    description:
      "Ayudamos a empresas y equipos a proteger accesos, redes y procesos críticos sin caer en soluciones innecesariamente complejas.",
    benefits: [
      "Revision de accesos y configuraciones",
      "Buenas prácticas para equipos de trabajo",
      "Protección de red y dispositivos",
      "Orientación para continuidad operativa",
    ],
    href: "/ciberseguridad",
  },
  {
    slug: "software",
    title: "Desarrollo de software",
    eyebrow: "Soluciones a medida",
    summary:
      "Sitios, herramientas internas e integraciones para mejorar procesos.",
    description:
      "Construimos software orientado a resolver problemas concretos: captación, gestión, automatización y reportería.",
    benefits: [
      "Landing pages y sitios corporativos",
      "Integraciones entre sistemas",
      "Herramientas internas simples y mantenibles",
      "Arquitectura preparada para crecer",
    ],
    href: "/desarrollo-software",
  },
  {
    slug: "automatizaciones",
    title: "Automatizaciones",
    eyebrow: "Procesos eficientes",
    summary:
      "Automatización de tareas repetitivas, flujos operativos, reportes y conexiones entre herramientas.",
    description:
      "Creamos automatizaciones prácticas para reducir trabajo manual, ordenar información y conectar herramientas que hoy funcionan aisladas.",
    benefits: [
      "Flujos entre formularios, planillas y correo",
      "Alertas y recordatorios automaticos",
      "Reportes operativos periódicos",
      "Integraciones simples entre plataformas",
    ],
    href: "/automatizaciones",
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
