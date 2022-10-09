import React from "react";
import Header from "./Header/Header";
import ImageSpinner from "./ImageSpinner/ImageSpinner.js"
import styled from "styled-components";
import "./App.css"
import Info from "./Info/Info";

const Container = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  padding-bottom: 40px;

  @media (min-width: 768px) {
    margin-left: 70px;
    margin-right: 70px;
  }
  @media (min-width: 992px) {
    margin-left: 100px;
    margin-right: 100px;
  }
`;

function App() {
  return (
    <Container>
      <Header />
      <ImageSpinner />
      <Info />
    </Container>
  );
}

export default App;
