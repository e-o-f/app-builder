import React, { useRef, useEffect, useCallback, useState } from "react";
import { Layout, Button, Row, Col } from "antd";

import { Wrapper, Toolbar } from "./components";

const { Content } = Layout;

function Draggable() {
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState([0, 0]);

  const handleMouseDown = (event: any) => {
    if(ref.current){
      const box = ref.current.getBoundingClientRect();
      offset.current.x = event.clientX-box.left;
      offset.current.y = event.clientY-box.top;
    }
    dragging.current = true;
    document.addEventListener("mousemove", handleMouseMove);
  };

  const handleMouseUp = () => {
    dragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
  };

  const handleMouseMove = useCallback((event) => {
    if (dragging.current && ref.current) {
      setPosition([
        event.clientX - offset.current.x,
        event.clientY - offset.current.y,
      ]);
    }
  }, []);

  return (
    <div
      style={{
        height: "200px",
        width: "200px",
        backgroundColor: "red",
        position: "absolute",
        left: `${position[0]}px`,
        top: `${position[1]}px`,
      }}
      ref={ref}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  );
}

function App() {
  return (
    <Wrapper>
      <Toolbar />
      <Content style={{ padding: 15, backgroundColor: "#f2f2f2" }}>
        <Row justify="end">
          <Col>
            <Button type="primary">Publish</Button>
          </Col>
        </Row>
        <Draggable />
      </Content>
    </Wrapper>
  );
}

export default App;
