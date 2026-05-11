import React from 'react';
import { MarkerType } from 'react-flow-renderer';

// En Y1S2 el plan ofrece elegir UNA entre Estadística (2209) o Matemática I
// (1201). Se incluyen las dos materias como nodos separados.

const COLORS = {
    historia:    { background: '#8B4000', foreground: '#fff' },
    politica:    { background: '#5A0D7B', foreground: '#fff' },
    matematica:  { background: '#0D037B', foreground: '#fff' },
    economia:    { background: '#B64A0D', foreground: '#fff' },
    humanidades: { background: '#232323', foreground: '#fff' },
    arte:        { background: '#7B035A', foreground: '#fff' },
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
    course('1404', 'a1',   0, 100, 'humanidades', 'Historia y Literatura'),
    course('1001', 'a1',   0, 200, 'humanidades', 'Problemas Filosóficos'),
    course('1502', 'a1',   0, 300, 'politica',    'Introducción a la Ciencia Política'),
    course('1101', 'a1',   0, 400, 'economia',    'Economía I'),
    course('1402', 'a1',   0, 500, 'humanidades', 'Teoría y Práctica de la Escritura'),
    // Año 1 - Sem 2
    course('1407', 'a1', 200, 100, 'historia',    'Historia de Occidente hasta la Modernidad'),
    course('1004', 'a1', 200, 200, 'politica',    'Historia de las Ideas Políticas'),
    course('2409', 'a1', 200, 300, 'historia',    'Historia de América Latina en el Período Colonial'),
    course('2209', 'a1', 200, 400, 'matematica',  'Estadística (electiva)'),
    course('1201', 'a1', 200, 500, 'matematica',  'Matemática I (electiva)'),
    // Año 2 - Sem 1
    course('1405', 'a2', 400, 100, 'historia',    'Historia Argentina I'),
    course('2410', 'a2', 400, 200, 'historia',    'Historia de Europa I'),
    course('3405', 'a2', 400, 300, 'historia',    'Historia de América Latina en el siglo XIX'),
    course('2405', 'a2', 400, 400, 'arte',        'Historia del Arte'),
    // Año 2 - Sem 2
    course('3409', 'a2', 600, 100, 'historia',    'Historia Contemporánea de América Latina'),
    course('3413', 'a2', 600, 200, 'historia',    'Historia de Europa II'),
    course('2408', 'a2', 600, 300, 'historia',    'Historia de la Ciencia y de la Técnica'),
    course('2106', 'a2', 600, 400, 'economia',    'Historia Económica Internacional'),
    // Año 3 - Sem 1
    course('3422', 'a3', 800, 100, 'historia',    'Historia Argentina II'),
    course('1403', 'a3', 800, 200, 'arte',        'Arte y Cultura de la Modernidad'),
    course('4114', 'a3', 800, 300, 'economia',    'Historia Económica Argentina'),
    course('3916', 'a3', 800, 400, 'humanidades', 'Literatura Argentina'),
    course('9004', 'a3', 800, 500, 'humanidades', 'Expresión Oral y Escrita'),
    // Año 3 - Sem 2
    course('4419',    'a3', 1000, 100, 'historia', 'Historia Argentina III (Problemas historiográficos)'),
    course('3416',    'a3', 1000, 200, 'historia', 'Historia de Europa III'),
    course('4416',    'a3', 1000, 300, 'historia', 'Historia del siglo XX'),
    course('menor-3', 'a3', 1000, 400, 'menor',    'Curso de Campo Menor'),
    // Año 4 - Sem 1
    course('4401',     'a4', 1200, 100, 'historia', 'Seminario de Investigación Histórica I'),
    course('4415',     'a4', 1200, 200, 'historia', 'Historiografía'),
    course('menor-4a', 'a4', 1200, 300, 'menor',    'Curso de Campo Menor'),
    course('menor-4b', 'a4', 1200, 400, 'menor',    'Curso de Campo Menor'),
    // Año 4 - Sem 2
    course('4412',     'a4', 1400, 100, 'historia',    'Historia de los Estados Unidos'),
    course('4402',     'a4', 1400, 200, 'historia',    'Seminario de Investigación en Historia II'),
    course('4535',     'a4', 1400, 300, 'historia',    'Seminario sobre Ideas y Cultura en Argentina'),
    course('menor-4c', 'a4', 1400, 400, 'menor',       'Curso de Campo Menor'),
    course('5401',     'a4', 1400, 500, 'humanidades', 'Seminario de Graduación'),
];

export const edges = [
    edge('1407', '2410'),
    edge('2409', '3405'),
    edge('3405', '3409'),
    edge('2410', '3413'),
    edge('1405', '3422'),
    edge('3422', '4419'),
    edge('3413', '3416'),
    edge('4401', '4402'),
];
