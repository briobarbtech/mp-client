import React from "react";
import {kanit} from '../../utils/fonts'
import styled from "styled-components";
import IndexContent from "./IndexContent";

function Index() {
  return (
    <>
      <IndexContainer>
        <div className="index-section">
            <h1 className="classTitle">Bienvenido</h1>
            <IndexContent/>
        </div>
      </IndexContainer>
    </>
  );
}

export default Index;

const IndexContainer = styled.div`
  .index-section {
    height: 850px;
    background: #fff2e1;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .classTitle {
    padding: 20px;
    font-size: 3rem;
    font-family: ${kanit};
color: #B3381D;
  }
`;
