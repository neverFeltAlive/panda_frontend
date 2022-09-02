import React, {FC} from 'react';
import styled from "styled-components";
import {FaPhone} from "react-icons/fa";
import {Colors, DefaultButtonAnimationProps, Rems} from "../constants";
import {motion} from "framer-motion";
import {setModalType} from "../pages/_app";
import CallForm from "./form/call";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem;
  font-size: 2rem;
  position: fixed;
  height: 3rem;
  width: 3rem;
  border-radius: 25%;
  background-color: ${Colors.white.transparent};
  border: ${Rems.border} solid ${Colors.main.normal};
  box-shadow: ${Rems.boxShadow} ${Colors.main.normal};
  color: ${Colors.main.normal};
  bottom: 0;
  right: 0;
  z-index: 50;

  &:hover {
    color: ${Colors.accent.normal};
    border: ${Rems.border} solid ${Colors.accent.normal};
    box-shadow: ${Rems.boxShadow} ${Colors.accent.normal};
  }
`;

interface FloatingButtonProps{
    setModal: setModalType,
}
const FloatingButton: FC<FloatingButtonProps> = ({setModal}) => {
    return (
        <Container
            as={motion.div}
            whileHover={{
                scale: [1, 1.5, 1.5, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["25", "25%", "50%", "50%", "25%"],
                transition: {
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "easeInOut",
                    times: [0, 0.3, 0.5, 0.7, 1],
                    repeatDelay: 0.3,
                }
            }}
            onClick={() => {setModal(<CallForm onSubmit={() => {setModal(null)}}/>)}}
        >
            <FaPhone/>
        </Container>
    );
};

export default FloatingButton;