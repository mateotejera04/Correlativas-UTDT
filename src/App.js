import './App.css';
import React, { useCallback, useEffect, useState, useMemo } from 'react';
import ReactFlow, {
  addEdge,
  Controls,
  ControlButton,
  Background,
  useNodesState,
  useEdgesState,
} from 'react-flow-renderer';
import CourseNode from './CourseNode.js';
import YearNode from './YearNode.js';
import { carreras, defaultCarreraId } from './data';
import { toPng } from 'html-to-image';

const nodeTypes = { course: CourseNode, year: YearNode };

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function forward_path(n, edges) {
  var nodes = [];
  edges.forEach(function (edge) {
    if (edge[0] === n) {
      nodes.push(edge[1]);
      forward_path(edge[1], edges).forEach(function (node) {
        nodes.push(node);
      });
    }
  });
  return nodes.filter(onlyUnique);
}

function backward_path(n, edges) {
  var nodes = [];
  edges.forEach(function (edge) {
    if (edge[1] === n) {
      nodes.push(edge[0]);
      backward_path(edge[0], edges).forEach(function (node) {
        nodes.push(node);
      });
    }
  });
  return nodes.filter(onlyUnique);
}

function downloadImage(dataUrl) {
  const a = document.createElement('a');
  a.setAttribute('download', 'Correlativas_UTDT.png');
  a.setAttribute('href', dataUrl);
  a.click();
}

const screenshot = () => {
  toPng(document.querySelector('.react-flow'), {
    filter: (node) => {
      if (
        node?.classList?.contains('react-flow__minimap') ||
        node?.classList?.contains('react-flow__controls')
      ) {
        return false;
      }
      return true;
    },
  }).then(downloadImage);
};

function App() {
  const [carreraId, setCarreraId] = useState(defaultCarreraId);
  const carrera = useMemo(
    () => carreras.find((c) => c.id === carreraId) || carreras[0],
    [carreraId]
  );

  // Datos derivados por carrera: clonamos nodos y calculamos handles, edges, corrAmm
  const { initialNodes, initialEdges, years, corrAmm, pathFor } = useMemo(() => {
    const years = carrera.year_labels;
    const initialEdges = carrera.edges;

    const lefts = [];
    const rights = [];
    const fullEdges = [];
    initialEdges.forEach((e) => {
      fullEdges.push([e.source, e.target]);
      lefts.push(e.target);
      rights.push(e.source);
    });

    const initialNodes = carrera.nodes.map((n) => ({
      ...n,
      data: {
        ...n.data,
        hasLeft: lefts.includes(n.id),
        hasRight: rights.includes(n.id),
      },
    }));

    const pathFor = (id) =>
      forward_path(id, fullEdges).concat(backward_path(id, fullEdges)).concat([id]);

    const corrAmm = {};
    initialNodes.forEach((n) => {
      corrAmm[n.id] = pathFor(n.id).length - 1;
    });

    return { initialNodes, initialEdges, years, corrAmm, pathFor };
  }, [carrera]);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  const [pathview, setPathview] = useState(true);
  const [label, setLabel] = useState("Clickea en una materia para ver todas sus correlativas");
  const [preLabel, setPreLabel] = useState("");
  const [clickedCourse, setClickedCourse] = useState("");
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  // Cuando cambia la carrera, resetear vista
  useEffect(() => {
    setNodes(years.concat(initialNodes));
    setEdges(initialEdges);
    setClickedCourse("");
    setPathview(false);
    setLabel("Clickea en una materia para ver todas sus correlativas");
  }, [years, initialNodes, initialEdges, setNodes, setEdges]);

  const filterNodesByID = (id) => {
    const p = pathFor(id);
    return initialNodes.filter((n) => p.includes(n.id));
  };

  const filterNodesByYear = (year) => initialNodes.filter((n) => n.data.year === year);

  const courseById = (id) => initialNodes.find((n) => n.id === id);

  const getNodeYear = (year) => years.find((y) => y.id === year);

  const updateNodes = (id, reducedView) => {
    setPathview(reducedView);
    if (reducedView) {
      setNodes(filterNodesByID(id));
    } else {
      setNodes(years.concat(initialNodes));
    }
    setEdges(initialEdges);
  };

  const reset = () => {
    updateNodes(null, false);
    setLabel("Clickea en una materia para ver todas sus correlativas");
  };

  const nodeClick = (event, element) => {
    if (element.type === "course") {
      if (clickedCourse !== element.id) {
        setClickedCourse(element.id);
        updateNodes(element.id, true);
        if (!pathview) {
          setLabel("Clickea en una materia para ver todas sus correlativas");
        } else {
          setLabel("Clickea en cualquier materia para resetear vista");
        }
      } else {
        reset();
        setClickedCourse(null);
      }
    } else if (element.type === "year") {
      setNodes(filterNodesByYear(element.id).concat(getNodeYear(element.id)));
      setEdges(initialEdges);
      setLabel("Clickea en cualquier materia para resetear vista");
    }
  };

  const mapClick = (e) => {
    if (e.target.className === "react-flow__pane react-flow__container") {
      reset();
    }
  };

  const nodeMouseEnter = (event, element) => {
    setPreLabel(label);
    const courseLabel = courseById(element.id)?.data?.label?.props?.children;
    if (element.id !== clickedCourse) {
      if (corrAmm[element.id] > 1) {
        setLabel("Clickea en " + courseLabel + " para ver sus " + corrAmm[element.id] + " correlativas");
      } else if (corrAmm[element.id] === 1) {
        setLabel("Clickea en " + courseLabel + " para ver su correlativa");
      } else {
        setLabel(courseLabel + " no tiene correlativas");
      }
    } else {
      if (corrAmm[element.id] > 1) {
        setLabel(courseLabel + " tiene " + corrAmm[element.id] + " correlativas");
      } else if (corrAmm[element.id] === 1) {
        setLabel(courseLabel + " tiene 1 correlativa");
      } else if (corrAmm[element.id] === 0) {
        setLabel(courseLabel + " no tiene correlativas");
      } else {
        setLabel("Clickea en una materia para ver todas sus correlativas");
      }
    }
  };

  const nodeMouseLeave = () => {
    setLabel("Clickea en una materia para ver todas sus correlativas");
  };

  useEffect(() => {
    if (reactFlowInstance) {
      reactFlowInstance.fitView({ duration: 800, padding: 0.1, center: true });
    }
  }, [nodes, reactFlowInstance]);

  const onInit = (instance) => setReactFlowInstance(instance);

  return (
    <div className="App">
      {/* Selector de carrera */}
      <div style={{
        position: 'absolute',
        top: '15px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 12,
        fontFamily: '"Inter", sans-serif',
      }}>
        <select
          value={carreraId}
          onChange={(e) => setCarreraId(e.target.value)}
          style={{
            backgroundColor: "#1E1E1E",
            color: "#FFDD55",
            padding: "6px 12px",
            borderRadius: 5,
            border: "1px solid #333",
            fontFamily: '"Inter", sans-serif',
            fontSize: '14px',
            cursor: 'pointer',
            outline: 'none',
          }}
        >
          {[...carreras].sort((a, b) => a.name.localeCompare(b.name, 'es')).map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      </div>

      <div>
        <img
          style={{ cursor: 'pointer', position: 'absolute', bottom: 10, right: 10, zIndex: 10, objectFit: 'cover' }}
          src="micro_ditella_dark.png"
          alt="MicroDiTella"
          width="80"
          height="80"
          onClick={() => window.open("https://www.utdt.edu/ver_contenido.php?id_contenido=19866&id_item_menu=31534", '_blank', 'noopener,noreferrer')} />
      </div>
      <div style={{
        position: 'absolute',
        top: '60px',
        width: "100vw",
        zIndex: 11,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#aaa",
        fontFamily: '"Inter", sans-serif',
      }}>
        <div style={{
          backgroundColor: "#1E1E1E",
          padding: "2px",
          borderRadius: "5px",
          width: 'auto',
          height: 'auto',
          zIndex: 20,
          fontFamily: '"Inter", sans-serif',
        }}>
          {label}
        </div>
      </div>
      <div style={{
        position: 'absolute',
        bottom: '20px',
        width: "100vw",
        zIndex: 11,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#aaa",
        fontFamily: '"Inter", sans-serif',
      }}>
        <div style={{
          backgroundColor: "#1E1E1E",
          padding: "2px",
          borderRadius: "5px",
          width: 'auto',
          height: 'auto',
          zIndex: 20,
          fontFamily: '"Inter", sans-serif',
          color: "#FFDD55",
          display: 'flex',
          textDecoration: 'none !important',
        }}>
          <a style={{
            fontFamily: '"Inter", sans-serif',
            color: "#FFDD55",
            display: 'flex',
            textDecoration: 'none !important',
          }} href='https://github.com/mateotejera04/Correlativas-UTDT'>
            <svg style={{ width: "20px", marginRight: 8, fill: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
            GitHub
          </a>
        </div>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodesDraggable={true}
        nodesConnectable={false}
        onConnect={onConnect}
        onInit={onInit}
        fitView={true}
        attributionPosition="top-right"
        nodeTypes={nodeTypes}
        onClick={mapClick}
        onNodeClick={nodeClick}
        onNodeMouseEnter={nodeMouseEnter}
        onNodeMouseLeave={nodeMouseLeave}
      >
        <Controls
          style={{ color: '#4A4A4A', backgroundColor: '#181818', borderRadius: '2px', padding: '5px', zIndex: 100 }}
          showInteractive={false}
        >
          <ControlButton onClick={reset}
            onMouseEnter={() => {
              setPreLabel(label);
              setLabel("Resetear vista");
            }}
            onMouseLeave={() => {
              setLabel(preLabel);
            }}
          >
            <>⌘</>
          </ControlButton>
          <ControlButton onClick={screenshot}
            style={{ transform: 'rotate(180deg)' }}
            onMouseEnter={() => {
              setPreLabel(label);
              setLabel("Descargar imagen");
            }}
            onMouseLeave={() => {
              setLabel(preLabel);
            }}
          >
            <>⏏︎</>
          </ControlButton>
        </Controls>
        <Background color="#aaa" gap={16} className="reactFlowBackgroundPattern" />
      </ReactFlow>
    </div>
  );
}

export default App;
