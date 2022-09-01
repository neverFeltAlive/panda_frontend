import React from 'react';
import {Colors} from "../constants";
import styled from "styled-components";

const Container = styled.section`
  padding: 40px 0;
  text-align: center;
  background-color: ${Colors.main.normal};
  
  @media (min-width: 992px){
    padding: 100px 0;
  }
`;

const Scheme = () => {
    return (
        <>
            <Container>
                <h2>Частный</h2>
                <h1>Детский Сад <span className="highlight highlight__light">Панда</span></h1>
            </Container>
        </>
    );
};

export default Scheme;