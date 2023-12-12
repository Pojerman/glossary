import Header from "../../components/header/header";
import {
  Background,
  Controls, EdgeText,
  ReactFlow,
  useEdgesState,
  useNodesState
} from "reactflow";
import "./semantic-graph.css";
import 'reactflow/dist/style.css';
import {useEffect} from "react";

export default function SemanticGraph() {

  const [nodes, setNodes , onNodesChange] = useNodesState([]);
  const [edges, setEdges , onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    const getMindMap = async () => {
      try {
        const response = await fetch('http://localhost:5000/mindmap');
        const data = await response.json();
        setNodes(data.nodes)
        setEdges(data.edges)
        if(!response.ok) {
          throw new Error('Error')
        }
      } catch (error) {
        console.log(error)
      }
    };

    getMindMap();
  }, [setEdges, setNodes])


  return(
    <>
      <Header/>
      <div className="graph">
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges={edges}
          onEdgesChange={onEdgesChange}
          fitView
        >
          <EdgeText x={0} y={0}/>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </>
  )
}
