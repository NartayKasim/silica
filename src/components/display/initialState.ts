export const initialState = `
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div\`
   width: 100vw;
   height: 100vh;
   background: rgb(0, 12, 2);
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
\`;

const Logo = styled.h1\`
   font-size: 50px;
\`;

function App() {
  return (
    <Container>
      <Logo>SILICA</Logo>
    </Container>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
`;
