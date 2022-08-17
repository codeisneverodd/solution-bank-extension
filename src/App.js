import styled from "styled-components";
import React from "react";
import CopySolution from "./pages/Home";

function App() {
  return (
    <Wrapper>
      <CopySolution />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 13.2rem;
`;
