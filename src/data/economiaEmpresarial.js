import React from 'react';
import { MarkerType } from 'react-flow-renderer';

const COLORS = {
    matematica:   { background: '#0D037B', foreground: '#fff' },
    economia:     { background: '#B64A0D', foreground: '#fff' },
    humanidades:  { background: '#232323', foreground: '#fff' },
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
    { id: 'a1', type: 'year', data: { label: (<>1er Año</>) }, position: { x: 100, y: 0 } },
    { id: 'a2', type: 'year', data: { label: (<>2do Año</>) }, position: { x: 500, y: 0 } },
    { id: 'a3', type: 'year', data: { label: (<>3er Año</>) }, position: { x: 900, y: 0 } },
    { id: 'a4', type: 'year', data: { label: (<>4to Año</>) }, position: { x: 1300, y: 0 } },
];

export const nodes = [
    // Año 1 - Semestre 1
    course('1201', 'a1',   0, 100, 'matematica',  'Matemática I'),
    course('1101', 'a1',   0, 200, 'economia',    'Economía I'),
    course('1302', 'a1',   0, 300, 'economia',    'Administración I'),
    course('2002', 'a1',   0, 400, 'humanidades', 'Introducción al Derecho'),

    // Año 1 - Semestre 2
    course('1202', 'a1', 200, 100, 'matematica',  'Matemática II'),
    course('1102', 'a1', 200, 200, 'economia',    'Economía II'),
    course('1301', 'a1', 200, 300, 'economia',    'Contabilidad Básica'),
    course('1401', 'a1', 200, 400, 'humanidades', 'Historia de Occidente a partir de la Modernidad'),
    course('9003', 'a1', 200, 500, 'humanidades', 'Comprensión de Textos y Escritura'),

    // Año 2 - Semestre 1
    course('2203', 'a2', 400, 100, 'matematica', 'Introducción a la Estadística'),
    course('2204', 'a2', 400, 200, 'matematica', 'Economía Matemática'),
    course('2103', 'a2', 400, 300, 'economia',   'Microeconomía'),
    course('1303', 'a2', 400, 400, 'economia',   'Información y Contabilidad Gerencial I'),

    // Año 2 - Semestre 2
    course('2205', 'a2', 600, 100, 'matematica',  'Análisis Estadístico'),
    course('1501', 'a2', 600, 200, 'humanidades', 'Instituciones Políticas y de Gobierno'),
    course('2106', 'a2', 600, 300, 'economia',    'Historia Económica Internacional'),
    course('3312', 'a2', 600, 400, 'economia',    'Información y Contabilidad Gerencial II'),

    // Año 3 - Semestre 1
    course('2104', 'a3', 800, 100, 'economia',     'Macroeconomía'),
    course('3308', 'a3', 800, 200, 'matematica',   'Métodos Estadísticos aplicados a los Negocios'),
    course('4327', 'a3', 800, 300, 'economia',     'Marketing'),
    course('3313', 'a3', 800, 400, 'programacion', 'Métodos Analíticos aplicados a los Negocios'),

    // Año 3 - Semestre 2
    course('3306',         'a3', 1000, 100, 'economia',     'Riesgo, Incertidumbre y Finanzas'),
    course('3303',         'a3', 1000, 200, 'economia',     'Teoría de las Decisiones'),
    course('3311',         'a3', 1000, 300, 'economia',     'Dirección de Operaciones y Tecnología I'),
    course('electiva-nd',  'a3', 1000, 400, 'programacion', 'Materia electiva del Núcleo Digital'),
    course('9004',         'a3', 1000, 500, 'humanidades',  'Expresión Oral y Escrita'),

    // Año 4 - Semestre 1
    course('4311',   'a4', 1200, 100, 'economia', 'Finanzas Internacionales'),
    course('4308',   'a4', 1200, 200, 'economia', 'Finanzas de la Empresa'),
    course('menor1', 'a4', 1200, 300, 'menor',    'Curso de Campo Menor'),
    course('menor2', 'a4', 1200, 400, 'menor',    'Curso de Campo Menor'),

    // Año 4 - Semestre 2
    course('4326',   'a4', 1400, 100, 'economia', 'Desarrollo de Nuevos Negocios'),
    course('4368',   'a4', 1400, 200, 'economia', 'Estrategia Competitiva y Digital'),
    course('4337',   'a4', 1400, 300, 'economia', 'Dirección de Operaciones y Tecnología II'),
    course('menor3', 'a4', 1400, 400, 'menor',    'Curso de Campo Menor'),
];

export const edges = [
    edge('1201', '1202'),
    edge('1202', '2203'),
    edge('1202', '2204'),
    edge('1101', '2103'),
    edge('1301', '1303'),
    edge('2203', '2205'),
    edge('1101', '2106'),
    edge('1102', '2106'),
    edge('1303', '3312'),
    edge('1102', '2104'),
    edge('2205', '3308'),
    edge('1101', '4327'),
    edge('2103', '3306'),
    edge('2103', '3303'),
    edge('3306', '4311'),
    edge('3306', '4308'),
    edge('3312', '4308'),
    edge('1302', '4326'),
    edge('3312', '4326'),
    edge('3306', '4326'),
    edge('2103', '4368'),
    edge('3313', '4337'),
    edge('3311', '4337'),
];
