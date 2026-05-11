import React from 'react';
import { MarkerType } from 'react-flow-renderer';

// Plan 2025. El 4° año ofrece dos orientaciones paralelas:
//  - Ciencia Política (CP): suffix "(CP)" en el label.
//  - Gestión Pública (GP): suffix "(GP)" en el label, color verde.
// Materias compartidas (4536, 4524, 5604) sin sufijo.

const COLORS = {
    politica:     { background: '#5A0D7B', foreground: '#fff' },
    matematica:   { background: '#0D037B', foreground: '#fff' },
    economia:     { background: '#B64A0D', foreground: '#fff' },
    humanidades:  { background: '#232323', foreground: '#fff' },
    gestion:      { background: '#037B1E', foreground: '#fff' },
    programacion: { background: '#D9B600', foreground: '#000' },
    menor:        { background: '#504F51', foreground: '#fff' },
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
];

export const nodes = [
    // Año 1 - Semestre 1
    course('1502', 'a1',   0, 100, 'politica',    'Introducción a la Ciencia Política'),
    course('1519', 'a1',   0, 200, 'politica',    'Introducción a las Relaciones Internacionales'),
    course('1101', 'a1',   0, 300, 'economia',    'Economía I'),
    course('1204', 'a1',   0, 400, 'matematica',  'Matemática I'),
    course('9003', 'a1',   0, 500, 'humanidades', 'Comprensión de Textos y Escritura'),

    // Año 1 - Semestre 2
    course('1503', 'a1', 200, 100, 'politica',    'Lógica y Técnicas de Investigación en Ciencias Sociales'),
    course('2505', 'a1', 200, 200, 'politica',    'Teoría Política I'),
    course('1408', 'a1', 200, 300, 'humanidades', 'Historia de Occidente a partir de la Modernidad'),
    course('1205', 'a1', 200, 400, 'matematica',  'Matemática II'),

    // Año 2 - Semestre 1
    course('2504', 'a2', 400, 100, 'politica',    'Política Comparada'),
    course('2522', 'a2', 400, 200, 'politica',    'Política y Sociedad en la Argentina (S. XIX y XX)'),
    course('2524', 'a2', 400, 300, 'humanidades', 'Historia del Mundo Contemporáneo (1914-2000)'),
    course('1104', 'a2', 400, 400, 'economia',    'Economía II'),

    // Año 2 - Semestre 2
    course('3510', 'a2', 600, 100, 'politica',    'Introducción a las Políticas Públicas'),
    course('2521', 'a2', 600, 200, 'politica',    'Política y Sociedad en América Latina'),
    course('3507', 'a2', 600, 300, 'politica',    'Teoría Política II'),
    course('4513', 'a2', 600, 400, 'politica',    'Teoría de las Relaciones Internacionales'),

    // Año 3 - Semestre 1
    course('2526', 'a3', 800, 100, 'matematica',  'Diseño y Metodología de las Ciencias Sociales'),
    course('2520', 'a3', 800, 200, 'politica',    'Organizaciones y Teoría de la Decisión'),
    course('3508', 'a3', 800, 300, 'economia',    'Política y Economía'),
    course('4527', 'a3', 800, 400, 'politica',    'Estructura Social y Demografía'),
    course('9004', 'a3', 800, 500, 'humanidades', 'Expresión Oral y Escrita'),

    // Año 3 - Semestre 2
    course('2525', 'a3', 1000, 100, 'matematica', 'Estadística para las Ciencias Sociales'),
    course('2503', 'a3', 1000, 200, 'politica',   'Política y Derecho'),
    course('3523', 'a3', 1000, 300, 'politica',   'Política y Comunicación'),
    course('3522', 'a3', 1000, 400, 'politica',   'Estado y Políticas Públicas en Argentina'),

    // Año 4 - Semestre 1 (ambas orientaciones)
    course('4536',          'a4', 1200, 100, 'economia', 'Finanzas Públicas'),
    course('4524',          'a4', 1200, 200, 'economia', 'Política Económica Argentina'),
    course('4560',          'a4', 1200, 300, 'gestion',  'Estructura y Marco Legal del Sector Público (GP)'),
    course('4561',          'a4', 1200, 400, 'gestion',  'Laboratorio de Políticas Públicas (GP)'),
    course('menor-cp-4s1a', 'a4', 1200, 500, 'menor',    'Curso de Campo Menor (CP)'),
    course('menor-cp-4s1b', 'a4', 1200, 600, 'menor',    'Curso de Campo Menor (CP)'),

    // Año 4 - Semestre 2 (ambas orientaciones)
    course('4537',          'a4', 1400, 100, 'politica',     'Tópicos de Teoría Política Social (CP)'),
    course('4514',          'a4', 1400, 200, 'politica',     'Actores y Procesos Políticos (CP)'),
    course('4543',          'a4', 1400, 300, 'gestion',      'Políticas Públicas Comparadas (GP)'),
    course('4562',          'a4', 1400, 400, 'gestion',      'Evaluación de Políticas Públicas (GP)'),
    course('4354',          'a4', 1400, 500, 'gestion',      'Comportamiento Organizacional (GP)'),
    course('4563-4564',     'a4', 1400, 600, 'programacion', 'Gobierno Electrónico y Transparencia / Datos para Cientistas Sociales (GP)'),
    course('5604',          'a4', 1400, 700, 'politica',     'Seminario de Graduación'),
    course('menor-cp-4s2a', 'a4', 1400, 800, 'menor',        'Curso de Campo Menor (CP)'),
    course('menor-cp-4s2b', 'a4', 1400, 900, 'menor',        'Curso de Campo Menor (CP)'),
];

export const edges = [
    edge('1204', '1205'),
    edge('1101', '1104'),
    edge('2505', '3507'),
];
