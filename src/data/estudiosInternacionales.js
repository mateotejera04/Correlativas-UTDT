import React from 'react';
import { MarkerType } from 'react-flow-renderer';

const COLORS = {
    politica:    { background: '#5A0D7B', foreground: '#fff' },
    matematica:  { background: '#0D037B', foreground: '#fff' },
    economia:    { background: '#B64A0D', foreground: '#fff' },
    humanidades: { background: '#232323', foreground: '#fff' },
    menor:       { background: '#504F51', foreground: '#fff' },
};

const course = (id, year, x, y, area, label) => ({
    id, type: 'course', targetPosition: 'right',
    data: {
        year, hasRight: false, hasLeft: false,
        foreground: COLORS[area].foreground, background: COLORS[area].background, done: false,
        label: (<>{label}</>),
    },
    position: { x, y },
});

const edge = (source, target) => ({
    id: `${source}-${target}`, source, target,
    markerEnd: { type: MarkerType.ArrowClosed },
});

export const year_labels = [
    { id: 'a1', type: 'year', data: { label: (<>1er Año</>) }, position: { x: 100,  y: 0 } },
    { id: 'a2', type: 'year', data: { label: (<>2do Año</>) }, position: { x: 500,  y: 0 } },
    { id: 'a3', type: 'year', data: { label: (<>3er Año</>) }, position: { x: 900,  y: 0 } },
    { id: 'a4', type: 'year', data: { label: (<>4to Año</>) }, position: { x: 1300, y: 0 } },
];

export const nodes = [
    // Año 1 - Sem 1
    course('1502', 'a1',   0, 100, 'politica',    'Introducción a la Ciencia Política'),
    course('1519', 'a1',   0, 200, 'politica',    'Introducción a las Relaciones Internacionales'),
    course('1101', 'a1',   0, 300, 'economia',    'Economía I'),
    course('1204', 'a1',   0, 400, 'matematica',  'Matemática I'),
    course('9003', 'a1',   0, 500, 'humanidades', 'Comprensión de Textos y Escritura'),
    // Año 1 - Sem 2
    course('1503', 'a1', 200, 100, 'politica',    'Lógica y Técnicas de Investigación en Ciencias Sociales'),
    course('2505', 'a1', 200, 200, 'politica',    'Teoría Política I'),
    course('1408', 'a1', 200, 300, 'humanidades', 'Historia de Occidente a partir de la Modernidad'),
    course('1205', 'a1', 200, 400, 'matematica',  'Matemática II'),
    // Año 2 - Sem 1
    course('2504', 'a2', 400, 100, 'politica',    'Política Comparada'),
    course('2522', 'a2', 400, 200, 'politica',    'Política y Sociedad en la Argentina (S. XIX y XX)'),
    course('2524', 'a2', 400, 300, 'humanidades', 'Historia del Mundo Contemporáneo (1914-2000)'),
    course('1104', 'a2', 400, 400, 'economia',    'Economía II'),
    // Año 2 - Sem 2
    course('3510', 'a2', 600, 100, 'politica',    'Introducción a las Políticas Públicas'),
    course('2521', 'a2', 600, 200, 'politica',    'Política y Sociedad en América Latina'),
    course('3507', 'a2', 600, 300, 'politica',    'Teoría Política II'),
    course('4513', 'a2', 600, 400, 'politica',    'Teoría de las Relaciones Internacionales'),
    // Año 3 - Sem 1
    course('2526', 'a3', 800, 100, 'matematica',  'Diseño y Metodología de las Ciencias Sociales'),
    course('2520', 'a3', 800, 200, 'politica',    'Organizaciones y Teoría de la Decisión'),
    course('4516', 'a3', 800, 300, 'politica',    'Política Exterior Argentina'),
    course('3508', 'a3', 800, 400, 'economia',    'Política y Economía'),
    course('9004', 'a3', 800, 500, 'humanidades', 'Expresión Oral y Escrita'),
    // Año 3 - Sem 2
    course('2525', 'a3', 1000, 100, 'matematica', 'Estadística para las Ciencias Sociales'),
    course('3511', 'a3', 1000, 200, 'politica',   'Relaciones Internacionales Contemporáneas'),
    course('3616', 'a3', 1000, 300, 'politica',   'Política Exterior de los Estados Unidos'),
    course('2503', 'a3', 1000, 400, 'politica',   'Política y Derecho'),
    // Año 4 - Sem 1
    course('3208',     'a4', 1200, 100, 'economia', 'Comercio Internacional'),
    course('4618',     'a4', 1200, 200, 'politica', 'Derecho Internacional'),
    course('menor-4s1a', 'a4', 1200, 300, 'menor',  'Curso de Campo Menor'),
    course('menor-4s1b', 'a4', 1200, 400, 'menor',  'Curso de Campo Menor'),
    // Año 4 - Sem 2
    course('4619',     'a4', 1400, 100, 'politica',    'Organismos Internacionales'),
    course('4617',     'a4', 1400, 200, 'politica',    'Conflictos Internacionales y Seguridad'),
    course('menor-4s2a', 'a4', 1400, 300, 'menor',     'Curso de Campo Menor'),
    course('menor-4s2b', 'a4', 1400, 400, 'menor',     'Curso de Campo Menor'),
    course('5601',     'a4', 1400, 500, 'humanidades', 'Seminario de Graduación'),
];

export const edges = [
    edge('1204', '1205'),
    edge('1101', '1104'),
    edge('2505', '3507'),
];
