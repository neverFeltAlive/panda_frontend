import React, {FC, useState} from 'react';
import styled from "styled-components";
import {AnimatePresence, motion} from "framer-motion";
import {SliderContainer} from "../UI";
import {Animations, Colors, DefaultAnimationProps, Rems} from "../../constants";
import {setViewerType} from "../../pages/_app";

//region TSProps
export interface ImageData {
    id: number,
    title: string,
    text: string,
    image: string,
}
//endregion

//region Styled
const Img = styled.img`
  width: 90%;
  border-radius: ${Rems.borderRadius};
  height: 250px;
  box-shadow: ${Rems.boxShadow} ${Colors.accent.normal};
  
  @media (min-width: 992px){
    height: 600px;
    width: 900px;
  }
  @media (min-width: 1200px){
    height: 900px;
    width: 1200px;
  }
  @media (min-width: 1800px){
    height: 1000px;
    width: 1700px;
  }
`;

const Wrapper = styled.section`
  text-align: center;
  border: 2px solid ${Colors.accent.normal};
  border-left: none;
  border-right: none;
  padding: 10px 0;
  
  @media (min-width: 992px){
    padding: 100px 0;
  }
`;

const Container = styled(SliderContainer)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageDiv = styled.div`
  display: none;
  margin: 40px 0;
  padding: 10px;
  width: 50%;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 25%;
  z-index: 2;
  color: ${Colors.accent.normal};
  text-shadow: 1px 1px #40322F;

  @media (min-width: 992px){
    display: block;
  }
`;

const ImageText = styled.p`
  color: ${Colors.main.normal};
  margin: 0;
`;

const ImageTitle = styled.h4`
  text-transform: uppercase;
`;
//endregion

interface CarouselProps {
    images: ImageData[],
    setViewer?: setViewerType,
}

const Carousel : FC<CarouselProps> = ({images, setViewer}) => {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const next = (current === length - 1) ? 0 : current + 1;
    const previous = (current === 0) ? length - 1 : current - 1;

    if (images.length <= 0)
        return null;

    return (
        <Wrapper>
            <Container
                onClickRight={() => {setCurrent(next)}} onClickLeft={() => {setCurrent(previous)}}
                arrowsStyle={{padding: "0.5rem"}}
            >
                <motion.div
                    {...DefaultAnimationProps()}
                >
                    <AnimatePresence>
                        {images.map((image, index) => {
                            return (
                                <motion.div
                                    animate={Animations.slideInAnimation()}
                                    exit={Animations.slideOutAnimation()}
                                    key={image.id}
                                >
                                    {index === current && (
                                        <>
                                            <Img
                                                src={image.image}
                                                alt={image.text}
                                                onClick={() => {
                                                    if (setViewer !== undefined){
                                                        setViewer(images, index);
                                                    }
                                                }}
                                            />
                                            <ImageDiv>
                                                <ImageTitle>{image.title}</ImageTitle>
                                                <ImageText>{image.text}</ImageText>
                                            </ImageDiv>
                                        </>
                                    )}
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </motion.div>
            </Container>
        </Wrapper>
    );
};

export default Carousel;