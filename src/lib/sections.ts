export const sections = {
  'electronica-basica': {
    id: 'electronica-basica',
    label: 'Electrónica básica',
    navLabel: 'Electrónica',
    title: 'Electrónica básica',
    description: 'Guías sencillas para entender componentes, herramientas y circuitos de baja tensión desde cero.',
    lead: 'Aquí empiezas. Explicamos componentes, herramientas y circuitos con ejemplos claros, sin suponer que ya sabes electrónica.',
    basePath: '/electronica-basica/',
  },
  automatizacion: {
    id: 'automatizacion',
    label: 'Automatización industrial',
    navLabel: 'Automatización',
    title: 'Automatización industrial',
    description: 'Guías prácticas de PLCs, sensores, variadores y comunicaciones industriales.',
    lead: 'Contenido técnico para talleres y plantas reales. Actualmente en preparación.',
    basePath: '/automatizacion/',
  },
} as const;

export type SectionId = keyof typeof sections;

export const visibleSectionIds: SectionId[] = ['electronica-basica'];

export function sectionConfig(id: SectionId) {
  return sections[id];
}

export function isSectionId(value: string): value is SectionId {
  return Object.prototype.hasOwnProperty.call(sections, value);
}
