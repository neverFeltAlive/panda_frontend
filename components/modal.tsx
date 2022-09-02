import React, {FC} from 'react';
import styled from "styled-components";
import {FaTimes} from "react-icons/fa";
import {Animations, Colors} from "../constants";
import ReactDOM from 'react-dom';
import {AnimatePresence, motion} from "framer-motion";


//region Styled
export const OverlayWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
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

  @media (min-width: 992px) {
    width: 60%;
    padding: 40px 30px;
  }
  @media (min-width: 1200px) {
    width: 50%;
    padding: 80px;
  }
`;

const Cross = styled(FaTimes)`
  position: absolute;
  font-size: 1.8rem;
  top: 5%;
  right: 5%;

  &:hover {
    color: ${Colors.accent.normal};
    cursor: pointer;
  }
`;

//endregion

export interface OverlayProps {
    closeModal: () => void,
    content: null | JSX.Element,
}

const Modal: FC<OverlayProps> = ({closeModal, content}) => {
    return (
        <OverlayWrapper
            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                event.stopPropagation();
                closeModal();
            }}
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Container
                onClick={(event:React.MouseEvent<HTMLSelectElement>) => {
                    event.stopPropagation();
                }}
                as={motion.section}
                animate={Animations.slideInAnimation()}
                exit={Animations.slideOutAnimation()}
            >
                <>
                    <Cross onClick={(event) => {
                        closeModal()
                    }}/>
                    <br/>
                    {content}
                </>
            </Container>
        </OverlayWrapper>
    );
};

export default Modal;