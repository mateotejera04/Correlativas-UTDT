import * as ltd from './ltd';
import * as cienciasComportamiento from './cienciasComportamiento';
import * as economiaEmpresarial from './economiaEmpresarial';
import * as administracionEmpresas from './administracionEmpresas';
import * as abogacia from './abogacia';

export const carreras = [
    {
        id: 'ltd',
        name: 'Licenciatura en Tecnología Digital',
        nodes: ltd.nodes,
        edges: ltd.edges,
        year_labels: ltd.year_labels,
    },
    {
        id: 'administracion-empresas',
        name: 'Licenciatura en Administración de Empresas',
        nodes: administracionEmpresas.nodes,
        edges: administracionEmpresas.edges,
        year_labels: administracionEmpresas.year_labels,
    },
    {
        id: 'economia-empresarial',
        name: 'Licenciatura en Economía Empresarial',
        nodes: economiaEmpresarial.nodes,
        edges: economiaEmpresarial.edges,
        year_labels: economiaEmpresarial.year_labels,
    },
    {
        id: 'ciencias-comportamiento',
        name: 'Licenciatura en Ciencias del Comportamiento',
        nodes: cienciasComportamiento.nodes,
        edges: cienciasComportamiento.edges,
        year_labels: cienciasComportamiento.year_labels,
    },
    {
        id: 'abogacia',
        name: 'Carrera de Abogacía',
        nodes: abogacia.nodes,
        edges: abogacia.edges,
        year_labels: abogacia.year_labels,
    },
];

export const defaultCarreraId = 'ltd';
