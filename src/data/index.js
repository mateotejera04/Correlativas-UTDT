import * as ltd from './ltd';
import * as cienciasComportamiento from './cienciasComportamiento';
import * as economiaEmpresarial from './economiaEmpresarial';
import * as administracionEmpresas from './administracionEmpresas';
import * as abogacia from './abogacia';
import * as arquitectura from './arquitectura';
import * as cienciaPolitica from './cienciaPolitica';
import * as cienciasSociales from './cienciasSociales';
import * as diseno from './diseno';
import * as economia from './economia';
import * as estudiosInternacionales from './estudiosInternacionales';
import * as historia from './historia';

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
    {
        id: 'arquitectura',
        name: 'Carrera de Arquitectura',
        nodes: arquitectura.nodes,
        edges: arquitectura.edges,
        year_labels: arquitectura.year_labels,
    },
    {
        id: 'ciencia-politica',
        name: 'Licenciatura en Ciencia Política y Gobierno',
        nodes: cienciaPolitica.nodes,
        edges: cienciaPolitica.edges,
        year_labels: cienciaPolitica.year_labels,
    },
    {
        id: 'ciencias-sociales',
        name: 'Licenciatura en Ciencias Sociales',
        nodes: cienciasSociales.nodes,
        edges: cienciasSociales.edges,
        year_labels: cienciasSociales.year_labels,
    },
    {
        id: 'diseno',
        name: 'Carrera de Diseño',
        nodes: diseno.nodes,
        edges: diseno.edges,
        year_labels: diseno.year_labels,
    },
    {
        id: 'economia',
        name: 'Licenciatura en Economía',
        nodes: economia.nodes,
        edges: economia.edges,
        year_labels: economia.year_labels,
    },
    {
        id: 'estudios-internacionales',
        name: 'Licenciatura en Estudios Internacionales',
        nodes: estudiosInternacionales.nodes,
        edges: estudiosInternacionales.edges,
        year_labels: estudiosInternacionales.year_labels,
    },
    {
        id: 'historia',
        name: 'Licenciatura en Historia',
        nodes: historia.nodes,
        edges: historia.edges,
        year_labels: historia.year_labels,
    },
];

export const defaultCarreraId = 'ltd';
