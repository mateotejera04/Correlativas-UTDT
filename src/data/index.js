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
        url: 'https://www.utdt.edu/ver_contenido.php?id_contenido=19866&id_item_menu=31534',
        nodes: ltd.nodes,
        edges: ltd.edges,
        year_labels: ltd.year_labels,
    },
    {
        id: 'administracion-empresas',
        name: 'Licenciatura en Administración de Empresas',
        url: 'https://www.utdt.edu/ver_contenido.php?id_contenido=7907&id_item_menu=15483',
        nodes: administracionEmpresas.nodes,
        edges: administracionEmpresas.edges,
        year_labels: administracionEmpresas.year_labels,
    },
    {
        id: 'economia-empresarial',
        name: 'Licenciatura en Economía Empresarial',
        url: 'https://www.utdt.edu/ver_contenido.php?id_contenido=571&id_item_menu=221',
        nodes: economiaEmpresarial.nodes,
        edges: economiaEmpresarial.edges,
        year_labels: economiaEmpresarial.year_labels,
    },
    {
        id: 'ciencias-comportamiento',
        name: 'Licenciatura en Ciencias del Comportamiento',
        url: 'https://www.utdt.edu/ver_contenido.php?id_contenido=24484&id_item_menu=40415',
        nodes: cienciasComportamiento.nodes,
        edges: cienciasComportamiento.edges,
        year_labels: cienciasComportamiento.year_labels,
    },
    {
        id: 'abogacia',
        name: 'Carrera de Abogacía',
        url: 'https://www.utdt.edu/ver_contenido.php?id_contenido=280&id_item_menu=1045',
        nodes: abogacia.nodes,
        edges: abogacia.edges,
        year_labels: abogacia.year_labels,
    },
    {
        id: 'arquitectura',
        name: 'Carrera de Arquitectura',
        url: 'https://www.utdt.edu/ver_contenido.php?id_contenido=23863&id_item_menu=39620',
        nodes: arquitectura.nodes,
        edges: arquitectura.edges,
        year_labels: arquitectura.year_labels,
    },
    {
        id: 'ciencia-politica',
        name: 'Licenciatura en Ciencia Política y Gobierno',
        url: 'https://www.utdt.edu/ver_contenido.php?id_contenido=120&id_item_menu=730',
        nodes: cienciaPolitica.nodes,
        edges: cienciaPolitica.edges,
        year_labels: cienciaPolitica.year_labels,
    },
    {
        id: 'ciencias-sociales',
        name: 'Licenciatura en Ciencias Sociales',
        url: 'https://www.utdt.edu/ver_contenido.php?id_contenido=23351&id_item_menu=19217',
        nodes: cienciasSociales.nodes,
        edges: cienciasSociales.edges,
        year_labels: cienciasSociales.year_labels,
    },
    {
        id: 'diseno',
        name: 'Carrera de Diseño',
        url: 'https://www.utdt.edu/ver_contenido.php?id_contenido=15641&id_item_menu=26535',
        nodes: diseno.nodes,
        edges: diseno.edges,
        year_labels: diseno.year_labels,
    },
    {
        id: 'economia',
        name: 'Licenciatura en Economía',
        url: 'https://www.utdt.edu/ver_contenido.php?id_contenido=123&id_item_menu=643',
        nodes: economia.nodes,
        edges: economia.edges,
        year_labels: economia.year_labels,
    },
    {
        id: 'estudios-internacionales',
        name: 'Licenciatura en Estudios Internacionales',
        url: 'https://www.utdt.edu/ver_contenido.php?id_contenido=153&id_item_menu=772',
        nodes: estudiosInternacionales.nodes,
        edges: estudiosInternacionales.edges,
        year_labels: estudiosInternacionales.year_labels,
    },
    {
        id: 'historia',
        name: 'Licenciatura en Historia',
        url: 'https://www.utdt.edu/ver_contenido.php?id_contenido=23420&id_item_menu=115',
        nodes: historia.nodes,
        edges: historia.edges,
        year_labels: historia.year_labels,
    },
];

export const defaultCarreraId = 'ltd';
