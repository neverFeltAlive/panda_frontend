import React, {FC, useEffect, useState} from 'react';
import {ImageData} from "./carousel/carousel";
import {Section} from "./UI";
import styled from "styled-components";
import {ApiRoot, Colors, Rems} from "../constants";
import {setViewerType} from "../pages/_app";


//region Styled
const Container = styled.div`
  display: grid;
  grid-template-columns: auto;

  @media (min-width: 768px) {
    grid-template-columns: auto auto;
  }
  @media (min-width: 1200px) {
    grid-template-columns: auto auto auto;
  }
  @media (min-width: 1800px) {
  }
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  border-radius: ${Rems.borderRadius};
  cursor: pointer;

  @media (min-width: 992px) {
    height: 250px;
  }
  @media (min-width: 1200px) {
    height: 200px;
  }
  @media (min-width: 1800px) {
    height: 300px;
  }
`;

const Card = styled.article`
  margin: 20px;
  padding: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: ${Colors.white.transparent};
  position: relative;
  border-radius: ${Rems.borderRadius};
`;

const H6 = styled.h6`
  text-transform: uppercase;
  opacity: 0.4;
  position: static;
  background-color: ${Colors.white.transparent};
  transform: translateY(-2rem);
  width: 100%;
  z-index: 2;

  &:hover {
    opacity: 1;
  }
`;

const StyledSection = styled(Section)`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  margin: auto;
  font-size: 0.6rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

//endregion

interface GramProps {
    images: ImageData[],
    setViewer: setViewerType,
}

const Gram: FC<GramProps> = ({images, setViewer}) => {
    const offset = 9;
    const [more, setMore] = useState(false);
    const [activeImages, setActiveImages] = useState(images);
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        setMore(activeImages.length > offset * currentPage);
    }, [activeImages, currentPage]);

    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try{
            const data = await fetch(`${ApiRoot}/get-pictures?offset=${offset + 1}&page=${currentPage}`);
            console.log(data);
            const list: ImageData[] = await data.json();
            setActiveImages([...activeImages, ...list]);
            setCurrentPage(currentPage + 1);
        }
        catch(error){
            console.log(error);
            return;
        }

    }

    return (
        <>
            <StyledSection className="content-section__light">
                <Container>
                    {activeImages.map((image, index) => {
                        if (index < offset * currentPage) {
                            return (
                                <Card key={index} onClick={() => {
                                    setViewer(images, index)
                                }}>
                                    <div>
                                        <Img src={image.image} alt={image.text}/>
                                        <H6>{image.title}</H6>
                                    </div>
                                </Card>
                            );
                        }
                    })}
                </Container>
                {more && (
                    <ButtonContainer>
                        <Button className="button" onClick={handleClick}>показать ещё</Button>
                    </ButtonContainer>
                )}
            </StyledSection>
        </>
    );
};

export default Gram;