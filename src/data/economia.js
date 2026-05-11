import React from 'react';
import { MarkerType } from 'react-flow-renderer';

const COLORS = {
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
    course('1201', 'a1',   0, 100, 'matematica',  'Matemática I'),
    course('1101', 'a1',   0, 200, 'economia',    'Economía I'),
    course('1301', 'a1',   0, 300, 'economia',    'Contabilidad Básica'),
    course('1501', 'a1',   0, 400, 'humanidades', 'Instituciones Políticas y de Gobierno'),
    course('9003', 'a1',   0, 500, 'humanidades', 'Comprensión de Textos y Escritura'),
    // Año 1 - Sem 2
    course('1102', 'a1', 200, 100, 'economia',    'Economía II'),
    course('1001', 'a1', 200, 200, 'humanidades', 'Problemas Filosóficos'),
    course('1202', 'a1', 200, 300, 'matematica',  'Matemática II'),
    course('1401', 'a1', 200, 400, 'humanidades', 'Historia de Occidente a partir de la Modernidad'),
    // Año 2 - Sem 1
    course('2103', 'a2', 400, 100, 'economia',    'Microeconomía'),
    course('2203', 'a2', 400, 200, 'matematica',  'Introducción a la Estadística'),
    course('2204', 'a2', 400, 300, 'matematica',  'Economía Matemática'),
    course('2002', 'a2', 400, 400, 'humanidades', 'Introducción al Derecho'),
    // Año 2 - Sem 2
    course('2104', 'a2', 600, 100, 'economia',   'Macroeconomía'),
    course('2205', 'a2', 600, 200, 'matematica', 'Análisis Estadístico'),
    course('3107', 'a2', 600, 300, 'economia',   'Tópicos de Microeconomía'),
    course('2106', 'a2', 600, 400, 'economia',   'Historia Económica Internacional'),
    // Año 3 - Sem 1
    course('3109', 'a3', 800, 100, 'economia',    'Comercio Internacional'),
    course('3111', 'a3', 800, 200, 'economia',    'Hist. del Pensamiento Económico'),
    course('3206', 'a3', 800, 300, 'matematica',  'Econometría'),
    course('4118', 'a3', 800, 400, 'matematica',  'Economía Matemática II'),
    course('9004', 'a3', 800, 500, 'humanidades', 'Expresión Oral y Escrita'),
    // Año 3 - Sem 2
    course('4117', 'a3', 1000, 100, 'economia', 'Organización Industrial'),
    course('3110', 'a3', 1000, 200, 'economia', 'Riesgo, Incertidumbre y Finanzas'),
    course('3108', 'a3', 1000, 300, 'economia', 'Tópicos de Macroeconomía'),
    course('menor-3s2', 'a3', 1000, 400, 'menor', 'Materia Electiva de Campo Menor'),
    // Año 4 - Sem 1
    course('4115', 'a4', 1200, 100, 'economia', 'Desarrollo Económico'),
    course('4113', 'a4', 1200, 200, 'economia', 'Finanzas Públicas'),
    course('4116', 'a4', 1200, 300, 'economia', 'Moneda y Bancos'),
    course('menor-4s1', 'a4', 1200, 400, 'menor', 'Materia Electiva de Campo Menor'),
    // Año 4 - Sem 2
    course('4112', 'a4', 1400, 100, 'economia',    'Economía Monetaria Internacional'),
    course('4155', 'a4', 1400, 200, 'economia',    'Historia Económica Argentina'),
    course('4136', 'a4', 1400, 300, 'economia',    'Tópicos de Economía Aplicada'),
    course('menor-4s2', 'a4', 1400, 400, 'menor',  'Materia Electiva de Campo Menor'),
    course('seminario', 'a4', 1400, 500, 'humanidades', 'Seminario de Graduación'),
];

export const edges = [
    edge('1201', '1202'),
    edge('1101', '2103'),
    edge('1202', '2203'),
    edge('1202', '2204'),
    edge('1102', '2104'),
    edge('2203', '2205'),
    edge('2103', '3107'), edge('1202', '3107'),
    edge('1101', '2106'), edge('1102', '2106'),
    edge('2103', '3109'),
    edge('2103', '3111'), edge('2104', '3111'),
    edge('2205', '3206'),
    edge('2204', '4118'),
    edge('2103', '4117'),
    edge('2103', '3110'),
    edge('2204', '3108'), edge('2104', '3108'),
    edge('2104', '4115'), edge('2103', '4115'),
    edge('2104', '4113'), edge('2103', '4113'),
    edge('2104', '4116'), edge('2103', '4116'),
    edge('2104', '4112'), edge('2103', '4112'),
    edge('2104', '4155'), edge('2103', '4155'),
    edge('3206', '4136'),
];
