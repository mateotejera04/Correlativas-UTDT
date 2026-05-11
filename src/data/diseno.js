import React from 'react';
import { MarkerType } from 'react-flow-renderer';

const COLORS = {
    matematica:   { background: '#0D037B', foreground: '#fff' },
    economia:     { background: '#B64A0D', foreground: '#fff' },
    humanidades:  { background: '#232323', foreground: '#fff' },
    programacion: { background: '#D9B600', foreground: '#000' },
    diseno:       { background: '#7B035A', foreground: '#fff' },
    menor:        { background: '#504F51', foreground: '#fff' },
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
    course('1602', 'a1',   0, 100, 'diseno',      'Laboratorio de Diseño I'),
    course('1603', 'a1',   0, 200, 'diseno',      'Forma e Imagen'),
    course('1403', 'a1',   0, 300, 'humanidades', 'Arte y Cultura de la Modernidad'),
    course('1207', 'a1',   0, 400, 'matematica',  'Matemática'),
    // Año 1 - Sem 2
    course('1604', 'a1', 200, 100, 'diseno',      'Laboratorio de Diseño II'),
    course('1605', 'a1', 200, 200, 'humanidades', 'Teorías de la Comunicación'),
    course('2604', 'a1', 200, 300, 'humanidades', 'Historia del Diseño Moderno'),
    course('1501', 'a1', 200, 400, 'humanidades', 'Instituciones Políticas y de Gobierno'),
    course('9003', 'a1', 200, 500, 'humanidades', 'Comprensión de Textos y Escritura'),
    // Año 2 - Sem 1
    course('2601', 'a2', 400, 100, 'diseno',      'Laboratorio de Diseño III'),
    course('2602', 'a2', 400, 200, 'diseno',      'Objeto y Materialidad'),
    course('2603', 'a2', 400, 300, 'humanidades', 'Introducción a los Estudios Visuales'),
    course('2608', 'a2', 400, 400, 'economia',    'Economía'),
    // Año 2 - Sem 2
    course('2605', 'a2', 600, 100, 'diseno',      'Laboratorio de Diseño IV'),
    course('2606', 'a2', 600, 200, 'diseno',      'Teoría y Metodología del Diseño'),
    course('2607', 'a2', 600, 300, 'diseno',      'Ingeniería de Materiales'),
    course('3003', 'a2', 600, 400, 'humanidades', 'Sociología'),
    // Año 3 - Sem 1
    course('3620', 'a3', 800, 100, 'diseno',       'Laboratorio de Diseño V'),
    course('3621', 'a3', 800, 200, 'diseno',       'Visualización de la Información'),
    course('3622', 'a3', 800, 300, 'programacion', 'Programación Orientada al Diseño'),
    course('3623', 'a3', 800, 400, 'humanidades',  'Historia del Diseño Latinoamericano'),
    // Año 3 - Sem 2
    course('3624',      'a3', 1000, 100, 'diseno',      'Laboratorio de Diseño VI'),
    course('3625',      'a3', 1000, 200, 'diseno',      'Diseño de Interactividad'),
    course('4327',      'a3', 1000, 300, 'economia',    'Marketing'),
    course('9004',      'a3', 1000, 400, 'humanidades', 'Expresión Oral y Escrita'),
    course('menor-3',   'a3', 1000, 500, 'menor',       'Curso de Campo Menor'),
    // Año 4 - Sem 1
    course('4630',    'a4', 1200, 100, 'diseno',      'Laboratorio de Diseño VII'),
    course('4631',    'a4', 1200, 200, 'humanidades', 'Diseño y Gestión Cultural'),
    course('4632',    'a4', 1200, 300, 'economia',    'Gestión Estratégica del Diseño'),
    course('menor-4a','a4', 1200, 400, 'menor',       'Curso de Campo Menor'),
    // Año 4 - Sem 2
    course('4633',    'a4', 1400, 100, 'diseno',      'Laboratorio de Diseño VIII'),
    course('4634',    'a4', 1400, 200, 'humanidades', 'Narrativas y Medios'),
    course('4635',    'a4', 1400, 300, 'diseno',      'Diseño Sustentable'),
    course('menor-4b','a4', 1400, 400, 'menor',       'Curso de Campo Menor'),
];

export const edges = [
    edge('1602', '1604'),
    edge('1602', '2601'), edge('1604', '2601'),
    edge('1602', '2605'), edge('1604', '2605'),
    edge('2601', '3620'), edge('2605', '3620'),
    edge('2605', '3624'), edge('3620', '3624'),
    edge('2608', '4327'),
    edge('3620', '4630'), edge('3624', '4630'),
    edge('3624', '4633'),
];
