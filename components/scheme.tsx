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
                <h1>Детский Сад <span className="highlight highlight__light" style={{fontSize: "3.1rem"}}><q>Панда</q></span></h1>
            </Container>
            <div style={{display: "flex"}}>
                <svg viewBox="0 0 200 15" preserveAspectRatio="none">
                    <polygon style={{fill: Colors.main.normal}} points="0, 13 200, 0 0, 0"/>
                    <polygon style={{fill: Colors.light.normal}} points="0 15, 0 13, 200 0, 200 2"/>
                    <polygon style={{fill: Colors.light.normal}} points="0 15, 200 2, 200 15"/>
                </svg>
            </div>
        </>
    );
};

export default Scheme;