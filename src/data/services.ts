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
    title: "Instalacion de camaras y CCTV",
    eyebrow: "Seguridad fisica",
    summary:
      "Diseno e instalacion de sistemas de vigilancia para casas, condominios, empresas y bodegas.",
    description:
      "Implementamos soluciones de CCTV con criterio tecnico: cobertura, puntos criticos, grabacion, acceso remoto y escalabilidad.",
    benefits: [
      "Evaluacion de puntos vulnerables",
      "Camara adecuada segun zona y exposicion",
      "Acceso remoto desde celular",
      "Orden tecnico en cableado y configuracion",
    ],
    href: "/instalacion-camaras-cctv",
  },
  {
    slug: "ciberseguridad",
    title: "Ciberseguridad",
    eyebrow: "Proteccion digital",
    summary:
      "Medidas practicas para reducir riesgos digitales en redes, cuentas, equipos y operaciones.",
    description:
      "Ayudamos a empresas y equipos a proteger accesos, redes y procesos criticos sin caer en soluciones innecesariamente complejas.",
    benefits: [
      "Revision de accesos y configuraciones",
      "Buenas practicas para equipos de trabajo",
      "Proteccion de red y dispositivos",
      "Orientacion para continuidad operativa",
    ],
    href: "/ciberseguridad",
  },
  {
    slug: "software",
    title: "Desarrollo de software",
    eyebrow: "Soluciones a medida",
    summary:
      "Sitios, herramientas internas, automatizaciones e integraciones para mejorar procesos.",
    description:
      "Construimos software orientado a resolver problemas concretos: captacion, gestion, automatizacion y reporteria.",
    benefits: [
      "Landing pages y sitios corporativos",
      "Automatizacion de procesos",
      "Integraciones entre sistemas",
      "Herramientas internas simples y mantenibles",
    ],
    href: "/desarrollo-software",
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
