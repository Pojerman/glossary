import Header from "../../components/header/header";
import {
  Background,
  Controls,
  ReactFlow,
  useEdgesState,
  useNodesState
} from "reactflow";
import "./semantic-graph.css";
import 'reactflow/dist/style.css';
import mindMap from "../../const/mindMap";

export default function SemanticGraph() {

  const [nodes, , onNodesChange] = useNodesState(mindMap.nodes);
  const [edges, , onEdgesChange] = useEdgesState(mindMap.edges);


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
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </>
  )
}
