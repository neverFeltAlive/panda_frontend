import React, {FC} from 'react';
import styled from "styled-components";
import {FaTimes} from "react-icons/fa";
import {Colors} from "../constants";
import ReactDOM from 'react-dom';

//region Styled
const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: ${Colors.white.transparent};
`;

const Container = styled.section`
  position: relative;
  width: 90%;
  padding: 30px;
  background-color: ${Colors.white.normal};
  border: 0.15rem solid ${Colors.dark.normal};
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem ${Colors.dark.normal};
  
  @media (min-width: 992px){
    width: 60%;
    padding: 40px 30px;
  }
  @media (min-width: 1200px){
    width: 50%;
    padding: 80px;
  }
`;

const Cross = styled(FaTimes)`
  position: absolute;
  font-size: 1.8rem;
  top:5%;
  right: 5%;

  &:hover {
    color: ${Colors.accent.normal};
    cursor: pointer;
  }
`;
//endregion

interface ModalProps {
    isVisible: boolean,
    setVisible: (state: boolean) => void,
    content: null | FC,
}

const Modal = ({isVisible, setVisible, content} : ModalProps): null | JSX.Element => {
    if (isVisible) {
        return ReactDOM.createPortal(
            (
                <Wrapper onClick={(event) => {
                    event.stopPropagation();
                    setVisible(false);
                }}>
                    <Container onClick={(event) => {
                        event.stopPropagation();
                    }}>
                        <>
                            <Cross onClick={(event) => {
                                setVisible(false)
                            }}/>
                            <br/>
                            {content}
                        </>
                    </Container>
                </Wrapper>
            ),
            document.getElementById("modal") as HTMLElement
        )
    } else {
        return null;
    }
};

export default Modal;