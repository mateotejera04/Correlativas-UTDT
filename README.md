# Correlativas UTDT

Mapa interactivo de las materias y correlatividades de las **12 carreras de grado** de la Universidad Torcuato Di Tella. Permite explorar el plan de estudios de cada carrera, ver visualmente las dependencias entre materias y, al clickear cualquier materia, resaltar todo su árbol de correlativas (anteriores y posteriores).

Los planes de estudio y correlatividades fueron tomados de las páginas oficiales de cada carrera en [utdt.edu](https://www.utdt.edu).

## 🎓 Carreras incluidas

- Carrera de Abogacía
- Licenciatura en Administración de Empresas
- Carrera de Arquitectura
- Licenciatura en Ciencia Política y Gobierno
- Licenciatura en Ciencias del Comportamiento
- Licenciatura en Ciencias Sociales
- Carrera de Diseño
- Licenciatura en Economía
- Licenciatura en Economía Empresarial
- Licenciatura en Estudios Internacionales
- Licenciatura en Historia
- Licenciatura en Tecnología Digital

## ✨ Funcionalidades

- **Selector de carrera** en la parte superior para cambiar entre los planes de estudio.
- **Vista por correlativas**: al clickear una materia, se filtra el grafo a esa materia y todas sus correlativas (anteriores y posteriores).
- **Vista por año**: al clickear el label de un año, se muestran solo las materias de ese año.
- **Hover sobre una materia** muestra cuántas correlativas tiene.
- **Exportación a PNG** del mapa visible.
- **Link directo** al plan de estudios oficial de la carrera seleccionada en utdt.edu.

## 📕 Librerías

- [React](https://es.reactjs.org/)
- [React Flow](https://reactflow.dev/)
- [html-to-image](https://github.com/bubkoo/html-to-image)

## 🛠 Estructura del proyecto

Cada carrera tiene su propio archivo de datos en `src/data/<carrera>.js` que exporta `nodes`, `edges` y `year_labels`. El registry central `src/data/index.js` lista todas las carreras disponibles para el selector. Para sumar una carrera nueva basta con crear el archivo de datos y agregarla al registry.

## 🙏 Créditos

Este proyecto es una extensión del trabajo original de [@IgnacioPardo](https://github.com/IgnacioPardo/Correlativas-LTD-UTDT), que implementó el mapa interactivo para la Licenciatura en Tecnología Digital. Sobre esa base se refactorizó la app para soportar múltiples carreras y se sumaron los datos y correlatividades de las 11 carreras restantes.

Distribuido bajo licencia MIT (ver [LICENSE](./LICENSE)).

<br/>

<img width="100" alt="micro_DiTella" src="https://user-images.githubusercontent.com/65306107/192430603-af6002c9-8410-4f2f-a68f-1a6b3f1f1337.png">
