import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import {
  Background,
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  ReactFlowProvider,
} from '@xyflow/react';

import { initialNodes } from '../../../utils/sample-data';
import '@xyflow/react/dist/style.css';
import Layout from '../../../components/Layout';
import { Typography, Box, Container } from '@mui/material';

const HorizontalFlow = () => {
  const router = useRouter();
  const [nodes, _] = useNodesState(
    initialNodes.map((node, index) => ({
      ...node,
      position: { x: (index % 2) * 250, y: Math.floor(index / 2) * 160 },
    }))
  );
  const [edges, setEdges] = useEdgesState([]);

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    [],
  );

  const onNodeClick = useCallback(
    (event, node) => {
      if (node.data.recipeId) {
        router.push(`/recipes/${node.data.recipeId}`);
      }
    },
    [router],
  );

  // Dynamically generate initialEdges with improved layout
  const initialEdges = initialNodes.map((node, index) => {
    if (index === initialNodes.length - 1) return null;
    return {
      id: `horizontal-e${index + 1}-${index + 2}`,
      source: node.id,
      type: 'smoothstep',
      target: initialNodes[index + 1].id,
      animated: true,
    };
  }).filter(edge => edge !== null);

  return (
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Skill Trees
          </Typography>
          <Typography variant="body1" paragraph>
            Click on each recipe to find out more details and start cooking!
          </Typography>
          <div style={{ height: '60vh' }}>
            <ReactFlowProvider>
              <ReactFlow
                nodes={nodes}
                edges={initialEdges}
                onConnect={onConnect}
                onNodeClick={onNodeClick}
                fitView
                attributionPosition="bottom-left"
                style={{ backgroundColor: "#F7F9FB" }}
                zoomOnScroll={false}
                zoomOnPinch={false}
                panOnScroll={false}
                panOnDrag={false}
              >
                <Background />
              </ReactFlow>
            </ReactFlowProvider>
          </div>
        </Box>
      </Container>
  );
};

export default HorizontalFlow;
