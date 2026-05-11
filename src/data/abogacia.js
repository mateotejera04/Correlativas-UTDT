import React from 'react';
import { MarkerType } from 'react-flow-renderer';

// El plan de Abogacía no lista correlativas materia-por-materia. Solo define
// "gates" de ciclo: las materias de 4° y 5° (Ciclo Superior, **) requieren
// haber aprobado todo 1° año, y las electivas (***) requieren 1° y 2° año.
// Para no saturar el grafo con cientos de edges, se omiten esas dependencias
// agregadas.

const COLORS = {
    derecho:      { background: '#6B2C91', foreground: '#fff' },
    economia:     { background: '#B64A0D', foreground: '#fff' },
    humanidades:  { background: '#232323', foreground: '#fff' },
    matematica:   { background: '#0D037B', foreground: '#fff' },
    electiva:     { background: '#D9B600', foreground: '#000' },
};

const course = (id, year, x, y, area, label) => ({
    id,
    type: 'course',
    targetPosition: 'right',
    data: {
        year,
        hasRight: false,
        hasLeft: false,
        foreground: COLORS[area].foreground,
        background: COLORS[area].background,
        done: false,
        label: (<>{label}</>),
    },
    position: { x, y },
});

const edge = (source, target) => ({
    id: `${source}-${target}`,
    source,
    target,
    markerEnd: { type: MarkerType.ArrowClosed },
});

export const year_labels = [
    { id: 'a1', type: 'year', data: { label: (<>1er Año</>) }, position: { x: 100,  y: 0 } },
    { id: 'a2', type: 'year', data: { label: (<>2do Año</>) }, position: { x: 500,  y: 0 } },
    { id: 'a3', type: 'year', data: { label: (<>3er Año</>) }, position: { x: 900,  y: 0 } },
    { id: 'a4', type: 'year', data: { label: (<>4to Año</>) }, position: { x: 1300, y: 0 } },
    { id: 'a5', type: 'year', data: { label: (<>5to Año</>) }, position: { x: 1700, y: 0 } },
];

export const nodes = [
    // Año 1 - Semestre 1
    course('1714', 'a1',   0, 100, 'derecho',     'Derecho Constitucional I'),
    course('1715', 'a1',   0, 200, 'derecho',     'Teoría General del Derecho'),
    course('1717', 'a1',   0, 300, 'derecho',     'Fundamentos del Derecho Privado'),
    course('1709', 'a1',   0, 400, 'humanidades', 'Historia Contemporánea'),

    // Año 1 - Semestre 2
    course('1716', 'a1', 200, 100, 'derecho',     'Derecho Constitucional II'),
    course('2716', 'a1', 200, 200, 'humanidades', 'Filosofía Moral'),
    course('2710', 'a1', 200, 300, 'derecho',     'Obligaciones'),
    course('1702', 'a1', 200, 400, 'derecho',     'Derecho Penal I'),

    // Año 2 - Semestre 1
    course('2718', 'a2', 400, 100, 'derecho',    'Derecho de Daños y Seguros'),
    course('2714', 'a2', 400, 200, 'derecho',    'Derecho Penal II'),
    course('2715', 'a2', 400, 300, 'matematica', 'Lógica y Redacción'),
    course('1701', 'a2', 400, 400, 'economia',   'Microeconomía'),

    // Año 2 - Semestre 2
    course('2711',  'a2', 600, 100, 'derecho',     'Análisis Económico del Derecho'),
    course('2719',  'a2', 600, 200, 'derecho',     'Derechos Procesal Penal'),
    course('2717',  'a2', 600, 300, 'derecho',     'Derechos Reales'),
    course('2716b', 'a2', 600, 400, 'humanidades', 'Filosofía Política'),

    // Año 3 - Semestre 1
    course('3715', 'a3', 800, 100, 'derecho', 'Contratos I'),
    course('3716', 'a3', 800, 200, 'derecho', 'Derecho Laboral y de la Seguridad Social'),
    course('3711', 'a3', 800, 300, 'derecho', 'Familia y Sucesiones'),
    course('3717', 'a3', 800, 400, 'derecho', 'Sociedades'),

    // Año 3 - Semestre 2
    course('3710', 'a3', 1000, 100, 'derecho',     'Derecho Administrativo'),
    course('3712', 'a3', 1000, 200, 'derecho',     'Derecho Internacional Público'),
    course('3709', 'a3', 1000, 300, 'derecho',     'Derecho Procesal Civil I'),
    course('3718', 'a3', 1000, 400, 'humanidades', 'Derecho y Sociedad'),

    // Año 4 - Semestre 1
    course('4711',           'a4', 1200, 100, 'derecho',  'Derecho Procesal Civil II'),
    course('5828',           'a4', 1200, 200, 'derecho',  'Derecho Tributario'),
    course('4712',           'a4', 1200, 300, 'economia', 'Macroeconomía'),
    course('electiva-4s1',   'a4', 1200, 400, 'electiva', 'Materias Electivas'),

    // Año 4 - Semestre 2
    course('4702',         'a4', 1400, 100, 'derecho',  'Concursos y Quiebras'),
    course('4707',         'a4', 1400, 200, 'economia', 'Contabilidad y Análisis Financiero'),
    course('4714',         'a4', 1400, 300, 'derecho',  'Contratos II'),
    course('5719',         'a4', 1400, 400, 'derecho',  'Derecho Internacional Privado'),
    course('electiva-4s2', 'a4', 1400, 500, 'electiva', 'Materias Electivas'),

    // Año 5 - Semestre 1
    course('5829',         'a5', 1600, 100, 'derecho',  'Derecho Ambiental y de los Recursos Naturales'),
    course('electiva-5s1', 'a5', 1600, 200, 'electiva', 'Materias Electivas'),

    // Año 5 - Semestre 2
    course('5705',         'a5', 1800, 100, 'derecho',  'Ética Profesional'),
    course('electiva-5s2', 'a5', 1800, 200, 'electiva', 'Materias Electivas'),
    course('5703',         'a5', 1800, 300, 'derecho',  'Seminario: Mediación y Arbitraje'),
];

// El plan oficial no especifica correlatividades materia-por-materia (solo
// gates de ciclo: 4°/5° requieren todo 1°, electivas requieren 1° y 2°).
// Las correlativas listadas acá son inferencias lógicas a partir de la
// secuencia natural de las materias (I → II, prerequisitos evidentes).
export const edges = [
    // Secuencias I → II
    edge('1714', '1716'),  // Constitucional I → Constitucional II
    edge('1702', '2714'),  // Penal I → Penal II
    edge('3715', '4714'),  // Contratos I → Contratos II
    edge('3709', '4711'),  // Procesal Civil I → Procesal Civil II
    edge('2716', '2716b'), // Filosofía Moral → Filosofía Política

    // Prerequisitos lógicos
    edge('1717', '2710'),  // Fundamentos Derecho Privado → Obligaciones
    edge('2710', '2718'),  // Obligaciones → Daños y Seguros
    edge('2710', '3715'),  // Obligaciones → Contratos I
    edge('2710', '2717'),  // Obligaciones → Derechos Reales
    edge('2714', '2719'),  // Penal II → Procesal Penal
    edge('1701', '4712'),  // Microeconomía → Macroeconomía
    edge('1701', '2711'),  // Microeconomía → Análisis Económico del Derecho
];
