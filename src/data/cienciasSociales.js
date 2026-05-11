import React from 'react';
import { MarkerType } from 'react-flow-renderer';

// Plan ingresantes 2025. La carrera tiene 4 orientaciones a partir del 3° año:
//  SyM (Sociedad y Mercado), EyP (Economía y Política),
//  HyC (Historia y Cultura), CyP (Comunicación y Periodismo), Arte.
// El plan muestra materias con prefijo según orientación. Las electivas
// quedan como placeholders.

const COLORS = {
    politica:    { background: '#5A0D7B', foreground: '#fff' },
    matematica:  { background: '#0D037B', foreground: '#fff' },
    economia:    { background: '#B64A0D', foreground: '#fff' },
    humanidades: { background: '#232323', foreground: '#fff' },
    arte:        { background: '#7B035A', foreground: '#fff' },
    menor:       { background: '#504F51', foreground: '#fff' },
    electiva:    { background: '#D9B600', foreground: '#000' },
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
    course('1005', 'a1',   0, 100, 'humanidades', 'La Modernidad en Occidente'),
    course('1502', 'a1',   0, 200, 'politica',    'Introducción a la Ciencia Política'),
    course('1204', 'a1',   0, 300, 'matematica',  'Matemática I'),
    course('1101', 'a1',   0, 400, 'economia',    'Economía I'),
    course('9003', 'a1',   0, 500, 'humanidades', 'Comprensión de Texto y Escritura'),
    // Año 1 - Sem 2
    course('1008', 'a1', 200, 100, 'politica',    'Lógica y Técnicas de la Investigación en Ciencias Sociales'),
    course('1001', 'a1', 200, 200, 'humanidades', 'Problemas Filosóficos'),
    course('2004', 'a1', 200, 300, 'humanidades', 'El Mundo en el Siglo XIX'),
    course('1007', 'a1', 200, 400, 'economia',    'Economía II'),
    // Año 2 - Sem 1
    course('3003', 'a2', 400, 100, 'politica',    'Sociología'),
    course('1006', 'a2', 400, 200, 'humanidades', 'Argentina en el Siglo XIX'),
    course('3005', 'a2', 400, 300, 'politica',    'Estudio del Comportamiento Humano'),
    course('3923', 'a2', 400, 400, 'arte',        'Arte Contemporáneo'),
    // Año 2 - Sem 2
    course('3001', 'a2', 600, 100, 'politica',    'Antropología'),
    course('3004', 'a2', 600, 200, 'humanidades', 'El Mundo en el Siglo XX'),
    course('1004', 'a2', 600, 300, 'politica',    'Historia de las Ideas Políticas'),
    course('2106', 'a2', 600, 400, 'economia',    'Historia Económica Internacional'),
    // Año 3 - Sem 1
    course('2003', 'a3', 800, 100, 'humanidades', 'Argentina en el Siglo XX'),
    course('3002', 'a3', 800, 200, 'economia',    'Política Económica Argentina'),
    course('1205', 'a3', 800, 300, 'matematica',  'Matemática II (SyM / EyP)'),
    course('electiva-cc-3s1a', 'a3', 800, 400, 'electiva', 'Electiva de Ciclo Común (HyC / Arte / CyP)'),
    course('electiva-cc-3s1b', 'a3', 800, 500, 'electiva', 'Electiva de Ciclo Común'),
    course('9004', 'a3', 800, 600, 'humanidades', 'Expresión Oral'),
    // Año 3 - Sem 2
    course('2006', 'a3', 1000, 100, 'politica',   'Estructura Social y Demografía'),
    course('2525', 'a3', 1000, 200, 'matematica', 'Estadística para Ciencias Sociales (HyC / CyP)'),
    course('2203', 'a3', 1000, 300, 'matematica', 'Introducción a la Estadística (SyM / EyC)'),
    course('electiva-cc-3s2a', 'a3', 1000, 400, 'electiva', 'Electiva de Ciclo Común'),
    course('electiva-cc-3s2b', 'a3', 1000, 500, 'electiva', 'Electiva de Ciclo Común (Arte)'),
    course('electiva-cc-3s2c', 'a3', 1000, 600, 'electiva', 'Electiva de Ciclo Común'),
    // Año 4 - Sem 1
    course('2205', 'a4', 1200, 100, 'matematica', 'Análisis Estadístico (SyM / EyP)'),
    course('2103', 'a4', 1200, 200, 'economia',   'Microeconomía (EyP)'),
    course('orient-4s1a', 'a4', 1200, 300, 'electiva', 'Materia de Orientación (SyM / Arte / CyP / HyC)'),
    course('orient-4s1b', 'a4', 1200, 400, 'electiva', 'Materia de Orientación (CyP / Arte / HyC)'),
    course('orient-4s1c', 'a4', 1200, 500, 'electiva', 'Materia de Orientación'),
    course('orient-4s1d', 'a4', 1200, 600, 'electiva', 'Materia de Orientación'),
    // Año 4 - Sem 2
    course('3308', 'a4', 1400, 100, 'matematica', 'Métodos Estadísticos Aplicados (SyM / EyP)'),
    course('2104', 'a4', 1400, 200, 'economia',   'Macroeconomía (EyP)'),
    course('3927', 'a4', 1400, 300, 'humanidades','Seminario de Historia Pública y Digital (HyC)'),
    course('3925', 'a4', 1400, 400, 'humanidades','Seminario de Comunicación y Periodismo (CyP)'),
    course('orient-4s2a', 'a4', 1400, 500, 'electiva', 'Materia de Orientación (Arte)'),
    course('orient-4s2b', 'a4', 1400, 600, 'electiva', 'Materia de Orientación (HyC / SyM / CyP / Arte)'),
    course('orient-4s2c', 'a4', 1400, 700, 'electiva', 'Materia de Orientación'),
    course('orient-4s2d', 'a4', 1400, 800, 'electiva', 'Materia de Orientación'),
    course('4000', 'a4', 1400, 900, 'humanidades','Seminario de Graduación'),
];

export const edges = [
    edge('1005', '2004'),
    edge('2004', '3004'),
    edge('1101', '2106'),
    edge('1006', '2003'),
    edge('1204', '1205'),
    edge('1204', '2525'),
    edge('1205', '2203'),
    edge('1205', '2205'),
    edge('1101', '2103'),
    edge('2205', '3308'),
    edge('1007', '2104'),
];
