import React from 'react';
import { MarkerType } from 'react-flow-renderer';

// Paleta de colores por área temática
const COLORS = {
    matematica:   { background: '#0D037B', foreground: '#fff' },
    neurociencia: { background: '#037B1E', foreground: '#fff' },
    psicologia:   { background: '#5A0D7B', foreground: '#fff' },
    economia:     { background: '#B64A0D', foreground: '#fff' },
    humanidades:  { background: '#232323', foreground: '#fff' },
    programacion: { background: '#D9B600', foreground: '#000' },
    diseno:       { background: '#7B035A', foreground: '#fff' },
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
    course('1201', 'a1',   0, 100, 'matematica',   'Matemática I'),
    course('1101', 'a1',   0, 200, 'economia',     'Economía I'),
    course('1401', 'a1',   0, 300, 'humanidades',  'Historia de Occidente a partir de la Modernidad'),
    course('4001', 'a1',   0, 400, 'neurociencia', 'Neurociencia y Psicología Experimental'),
    course('9003', 'a1',   0, 500, 'humanidades',  'Comprensión de Textos y Escritura'),

    // Año 1 - Semestre 2
    course('1202', 'a1', 200, 100, 'matematica',   'Matemática II'),
    course('1850', 'a1', 200, 200, 'neurociencia', 'Estructura y Función del Sistema Nervioso'),
    course('1852', 'a1', 200, 300, 'psicologia',   'Fundamentos de Psicología y Sociedad'),
    course('1851', 'a1', 200, 400, 'programacion', 'Introducción a la Programación'),

    // Año 2 - Semestre 1
    course('2203', 'a2', 400, 100, 'matematica',   'Introducción a la Estadística'),
    course('2850', 'a2', 400, 200, 'neurociencia', 'Técnicas de Medición en Psicología Experimental'),
    course('2851', 'a2', 400, 300, 'neurociencia', 'Neurociencia y Ética'),
    course('2813', 'a2', 400, 400, 'economia',     'Introducción a la Contabilidad y las Finanzas'),

    // Año 2 - Semestre 2
    course('2814', 'a2', 600, 100, 'matematica',   'Inferencia Estadística'),
    course('2852', 'a2', 600, 200, 'psicologia',   'Personalidad y Diferencias Individuales'),
    course('2853', 'a2', 600, 300, 'psicologia',   'Psicología de Masas'),
    course('2810', 'a2', 600, 400, 'diseno',       'Introducción al Diseño'),

    // Año 3 - Semestre 1
    course('3850', 'a3', 800, 100, 'matematica',   'Métodos Estadísticos en Psicología Experimental'),
    course('4358', 'a3', 800, 200, 'neurociencia', 'Neurociencia del Aprendizaje'),
    course('3303', 'a3', 800, 300, 'economia',     'Teoría de las Decisiones'),
    course('3814', 'a3', 800, 400, 'diseno',       'Diseño Interactivo'),
    course('9004', 'a3', 800, 500, 'humanidades',  'Expresión Oral y Escrita'),

    // Año 3 - Semestre 2
    course('3851', 'a3', 1000, 100, 'economia',     'Economía del Comportamiento'),
    course('4327', 'a3', 1000, 200, 'economia',     'Marketing'),
    course('3852', 'a3', 1000, 300, 'programacion', 'Inteligencia Artificial Aplicada'),
    course('3811', 'a3', 1000, 400, 'diseno',       'Visualización de Datos'),

    // Año 4 - Semestre 1
    course('4850',   'a4', 1200, 100, 'neurociencia', 'Datos y Neurociencia'),
    course('4851',   'a4', 1200, 200, 'economia',     'Comportamiento Organizacional y Gestión de Cambio'),
    course('menor1', 'a4', 1200, 300, 'menor',        'Curso de Campo Menor'),
    course('menor2', 'a4', 1200, 400, 'menor',        'Curso de Campo Menor'),

    // Año 4 - Semestre 2
    course('4852',   'a4', 1400, 100, 'neurociencia', 'Lenguaje y Cognición'),
    course('4853',   'a4', 1400, 200, 'programacion', 'Proyecto Final'),
    course('menor3', 'a4', 1400, 300, 'menor',        'Curso de Campo Menor'),
    course('menor4', 'a4', 1400, 400, 'menor',        'Curso de Campo Menor'),
];

export const edges = [
    edge('1201', '1202'),
    edge('1202', '2203'),
    edge('4001', '2850'),
    edge('4001', '2851'),
    edge('2203', '2814'),
    edge('1852', '2852'),
    edge('1852', '2853'),
    edge('4001', '4358'),
    edge('1101', '3303'),
    edge('2203', '3303'),
    edge('2810', '3814'),
    edge('2814', '3850'),
    edge('1851', '3850'),
    edge('4001', '3850'),
    edge('1101', '3851'),
    edge('2814', '3852'),
    edge('1851', '3852'),
    edge('1851', '3811'),
    edge('2810', '3811'),
    edge('2814', '4850'),
    edge('1851', '4850'),
    edge('2850', '4850'),
    edge('2814', '4852'),
    edge('1851', '4852'),
    edge('4001', '4852'),
    edge('3850', '4853'),
    edge('2850', '4853'),
];
