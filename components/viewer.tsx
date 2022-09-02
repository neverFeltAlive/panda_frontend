import React, {FC, useState} from 'react';
import styled from "styled-components";
import ReactDOM from "react-dom";
import {Animations, Colors} from "../constants";
import {OverlayWrapper} from "./modal";
import {ImageData} from "./carousel/carousel";
import {SliderContainer} from "./UI";
import {FaTimes} from "react-icons/fa";
import {AnimatePresence, motion} from "framer-motion";

//region Styled
const Wrapper = styled(OverlayWrapper)`
  background-color: ${Colors.white.transparent};
`;

const Container = styled(SliderContainer)`
  z-index: 21;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
`;

const ImgDiv = styled.div`
  max-width: 90%;
  margin: auto;
  position: relative;
`;

const Img = styled.img`
  max-height: 200px;

  @media (min-width: 768px) {
    max-height: 300px;
  }
  @media (min-width: 992px) {
    max-height: 500px;
  }
  @media (min-width: 1200px) {
    max-height: 650px;
  }
  @media (min-width: 1700px) {
    max-height: 800px;
  }
`;

const Cross = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: ${Colors.main.normal};

  &:hover {
    color: ${Colors.accent.normal};
  }
`;

//endregion

interface ViewerProps {
    closeViewer: () => void,
    images: ImageData[],
    currentId?: number
}

const Viewer: FC<ViewerProps> = ({closeViewer, images, currentId}) => {
    if (currentId === undefined) {
        currentId = 0;
    }
    const [current, setCurrent] = useState<number>(currentId);
    console.log(images);

    const next = (current === images.length - 1) ? 0 : current + 1;
    const previous = (current === 0) ? images.length - 1 : current - 1;

    return ReactDOM.createPortal(
        (
            <Wrapper>
                <Container
                    onClickRight={() => {
                        setCurrent(next)
                    }}
                    onClickLeft={() => {
                        setCurrent(previous)
                    }}
                    arrowsStyle={{padding: "2rem"}}
                >
                    <>
                        <AnimatePresence>
                            {images.map((image, index) => {
                                if (index === current) {
                                    return (
                                        <ImgDiv
                                            key={index}
                                            onClick={() => {
                                                closeViewer();
                                            }}
                                            as={motion.div}
                                            animate={Animations.slideInAnimation()}
                                            exit={Animations.slideOutAnimation()}
                                        >
                                            <Cross>
                                                <FaTimes/>
                                            </Cross>
                                            <Img src={image.image} alt={image.text}/>
                                        </ImgDiv>
                                    );
                                }
                            })}
                        </AnimatePresence>
                    </>
                </Container>
            </Wrapper>
        ),
        document.getElementById("modal") as HTMLElement
    )
};

export default Viewer;