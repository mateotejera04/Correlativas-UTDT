import React from 'react';
import { MarkerType } from 'react-flow-renderer';

const COLORS = {
    matematica:   { background: '#0D037B', foreground: '#fff' },
    economia:     { background: '#B64A0D', foreground: '#fff' },
    humanidades:  { background: '#232323', foreground: '#fff' },
    programacion: { background: '#D9B600', foreground: '#000' },
    diseno:       { background: '#7B035A', foreground: '#fff' },
    construccion: { background: '#6B3A0F', foreground: '#fff' },
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
    { id: 'a5', type: 'year', data: { label: (<>5to Año</>) }, position: { x: 1700, y: 0 } },
];

export const nodes = [
    // Año 1 - Semestre 1 (Ciclo Introductorio)
    course('1901', 'a1',   0, 100, 'diseno',       'Introducción al Proyecto Arquitectónico'),
    course('1902', 'a1',   0, 200, 'diseno',       'Introducción a los Medios Expresivos'),
    course('1207', 'a1',   0, 300, 'matematica',   'Matemática I'),
    course('1903', 'a1',   0, 400, 'construccion', 'Introducción a las Construcciones'),
    course('9003', 'a1',   0, 500, 'humanidades',  'Comprensión de Textos y Escritura'),

    // Año 1 - Semestre 2
    course('1904', 'a1', 200, 100, 'diseno',       'Introducción al Proyecto Urbano'),
    course('1905', 'a1', 200, 200, 'diseno',       'Morfología'),
    course('1906', 'a1', 200, 300, 'matematica',   'Matemática II'),
    course('1403', 'a1', 200, 400, 'humanidades',  'Arte y Cultura de la Modernidad'),
    course('1518', 'a1', 200, 500, 'economia',     'Introducción a la Administración Pública y a las Organizaciones'),

    // Año 2 - Semestre 1 (Ciclo Disciplinar)
    course('2901', 'a2', 400, 100, 'diseno',       'Proyecto I'),
    course('2902', 'a2', 400, 200, 'diseno',       'Croquis'),
    course('2903', 'a2', 400, 300, 'construccion', 'Estructuras I'),
    course('1907', 'a2', 400, 400, 'humanidades',  'Historia General de la Arquitectura y del Arte'),
    course('1118', 'a2', 400, 500, 'economia',     'Economía'),

    // Año 2 - Semestre 2
    course('2904', 'a2', 600, 100, 'diseno',       'Proyecto II'),
    course('2905', 'a2', 600, 200, 'diseno',       'Materia y Forma'),
    course('2906', 'a2', 600, 300, 'construccion', 'Estructuras II'),
    course('2907', 'a2', 600, 400, 'construccion', 'Construcciones I'),
    course('2908', 'a2', 600, 500, 'humanidades',  'Historia de la Arquitectura Moderna I'),

    // Año 3 - Semestre 1
    course('3901', 'a3', 800, 100, 'diseno',       'Proyecto III'),
    course('3902', 'a3', 800, 200, 'programacion', 'Modelos Informáticos I'),
    course('3903', 'a3', 800, 300, 'construccion', 'Construcciones II'),
    course('3904', 'a3', 800, 400, 'construccion', 'Instalaciones Complementarias I'),
    course('3905', 'a3', 800, 500, 'humanidades',  'Historia de la Arquitectura Moderna II'),
    course('9004', 'a3', 800, 600, 'humanidades',  'Expresión Oral y Escrita'),

    // Año 3 - Semestre 2
    course('3906', 'a3', 1000, 100, 'diseno',       'Proyecto IV'),
    course('3907', 'a3', 1000, 200, 'programacion', 'Modelos Informáticos II'),
    course('3908', 'a3', 1000, 300, 'construccion', 'Construcciones III'),
    course('3909', 'a3', 1000, 400, 'construccion', 'Instalaciones Complementarias II'),
    course('3910', 'a3', 1000, 500, 'humanidades',  'Historia de la Arquitectura en Argentina y América Latina'),

    // Año 4 - Semestre 1
    course('4901', 'a4', 1200, 100, 'diseno',       'Proyecto V'),
    course('4902', 'a4', 1200, 200, 'diseno',       'Arquitectura del Paisaje'),
    course('4908', 'a4', 1200, 300, 'humanidades',  'Estética y Teorías de la Arquitectura'),
    course('4904', 'a4', 1200, 400, 'construccion', 'Estructuras III'),
    course('4905', 'a4', 1200, 500, 'diseno',       'Estudios del Patrimonio'),

    // Año 4 - Semestre 2
    course('4906',     'a4', 1400, 100, 'diseno',       'Proyecto VI'),
    course('4907',     'a4', 1400, 200, 'economia',     'Gerenciamiento de la Edilicia'),
    course('4903',     'a4', 1400, 300, 'humanidades',  'Comunicación'),
    course('4909',     'a4', 1400, 400, 'diseno',       'Planificación Urbana'),
    course('menor-4',  'a4', 1400, 500, 'menor',        'Curso Optativo del Campo Menor'),

    // Año 5 - Semestre 1 (Ciclo de Consolidación)
    course('5901',     'a5', 1600, 100, 'diseno',       'Tesis Proyectual - Primera Parte'),
    course('5906',     'a5', 1600, 200, 'construccion', 'Legislación de Obras'),
    course('5903',     'a5', 1600, 300, 'construccion', 'Tecnologías Avanzadas'),
    course('menor-5a', 'a5', 1600, 400, 'menor',        'Curso Optativo del Campo Menor'),
    course('menor-5b', 'a5', 1600, 500, 'menor',        'Curso Optativo del Campo Menor'),

    // Año 5 - Semestre 2
    course('5904',     'a5', 1800, 100, 'diseno',       'Tesis Proyectual - Segunda Parte'),
    course('5902',     'a5', 1800, 200, 'construccion', 'Dirección de Obras'),
    course('5907',     'a5', 1800, 300, 'humanidades',  'Ética Profesional'),
    course('5910',     'a5', 1800, 400, 'construccion', 'Práctica Profesional'),
    course('menor-5c', 'a5', 1800, 500, 'menor',        'Curso Optativo del Campo Menor'),
];

export const edges = [
    // Año 1
    edge('1901', '1904'),
    edge('1207', '1906'),
    // Año 2 - Sem 1
    edge('1403', '2901'), edge('1902', '2901'), edge('1903', '2901'), edge('1904', '2901'), edge('1905', '2901'),
    edge('1902', '2902'),
    edge('1906', '2903'),
    edge('1403', '1907'),
    // Año 2 - Sem 2
    edge('2901', '2904'),
    edge('2903', '2906'),
    edge('1903', '2907'),
    edge('1403', '2908'),
    // Año 3 - Sem 1
    edge('2904', '3901'),
    edge('2907', '3903'),
    edge('1903', '3904'),
    edge('1907', '3905'), edge('2908', '3905'),
    // Año 3 - Sem 2
    edge('2905', '3906'), edge('3901', '3906'),
    edge('3902', '3907'),
    edge('3903', '3908'),
    edge('3904', '3909'),
    edge('2908', '3910'),
    // Año 4 - Sem 1
    edge('3906', '4901'),
    edge('2907', '4902'), edge('3901', '4902'), edge('3905', '4902'),
    edge('3905', '4908'),
    edge('2906', '4904'),
    edge('2906', '4905'), edge('2907', '4905'), edge('3904', '4905'), edge('3910', '4905'),
    // Año 4 - Sem 2
    edge('4901', '4906'),
    edge('1118', '4907'),
    edge('3905', '4903'),
    edge('3906', '4909'),
    // Año 5 - Sem 1
    edge('3907', '5901'), edge('3908', '5901'), edge('3909', '5901'), edge('3910', '5901'), edge('4906', '5901'),
    edge('1518', '5906'), edge('3906', '5906'),
    edge('4904', '5903'), edge('3909', '5903'), edge('3908', '5903'),
    // Año 5 - Sem 2
    edge('5901', '5904'),
    edge('3908', '5902'), edge('3909', '5902'), edge('4904', '5902'),
    edge('1518', '5907'), edge('3906', '5907'),
    edge('3903', '5910'), edge('3907', '5910'), edge('3909', '5910'), edge('3910', '5910'), edge('4901', '5910'),
];
