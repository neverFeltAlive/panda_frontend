import React, {FC, useState} from 'react';

import {Hr, SectionTitle, Section, Arrow} from "../UI";
import styled from "styled-components";
import {Colors} from "../../constants";

//region TSProps
export interface Image {
    src: string,
    alt: string,
}

export interface Card {
    id: number,
    image: Image,
    title: string,
    text: string,
}

interface CardsProps {
    title: string,
    cards: Card[]
}
//endregion

//region Styled
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  position: relative;
`;

const Card = styled.article`
  text-align: center;
  height: 250px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  background-color: ${Colors.white.normal};
  z-index: 1;
  border: 0.15rem solid transparent;

  &:hover{
    border: 0.15rem solid ${Colors.dark.normal};
  }
  
  @media (min-width: 768px) {
    height: 300px;
  }

  @media (min-width: 1200px) {
    height: 350px;
  }
`;

/* Img
const Img = styled.img`
  width: 100%;
  height: 50%;
`;*/

const CardBody = styled.div`
  width: 100%;
  padding: 20px;
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  
  @media (min-width: 768px){
    width: 45%;
  }

  @media (min-width: 1200px){
    margin: 0;
  }
`;

const WrapperSide = styled(Wrapper)`
  display: none;
  scale: 0.9;
  z-index: 0;

  @media (min-width: 768px){
    display: block;
    opacity: 50%;
  }

  @media (min-width: 1200px){
    opacity: 100%;
    margin: 0 10px;
  }
`;

const WrapperMain = styled(Wrapper)`
  @media (min-width: 768px){
    margin: 0 -180px;
  }

  @media (min-width: 1200px){
    margin: 0;
  }
`;
//endregion

const Cards: FC<CardsProps> = ({cards, title}) => {
    const [current, setCurrent] = useState(0);

    const sectionTitle: SectionTitle = {
        title: title,
        style: {textAlign: "left"}
    }

    const next = (current === cards.length - 1) ? 0 : current + 1;
    const previous = (current === 0) ? cards.length - 1 : current - 1;

    const active = [cards[previous], cards[current], cards[next]];

    return (
        <Section title={sectionTitle} className="content-section__light">
            <Container>
                <Arrow isRight={false} onClick={() => {setCurrent(previous)}}/>
                <Arrow isRight={true} onClick={() => {setCurrent(next)}}/>
                {active.map((card, index) => {
                    /* Img
                    const image = (
                        <Img
                            src={card.image.src}
                            alt={card.image.alt}
                        />
                    );
*/
                    const body = (
                        <CardBody>
                            <h4>{card.title}</h4>
                            <Hr/>
                            <p>{card.text}</p>
                        </CardBody>
                    );

                    const cardFull = (card.id % 3 === 0) ? (
                        <Card>
                            {/*{image}*/}
                            {body}
                        </Card>
                    ) : (
                        <Card>
                            {body}
                            {/*{image}*/}
                        </Card>
                    );

                    if (index === 1){
                        return (
                            <WrapperMain key={card.id}>
                                {cardFull}
                            </WrapperMain>
                        );
                    }
                    else if (index === 0){
                        return (
                            <WrapperSide key={card.id}>
                                {cardFull}
                            </WrapperSide>
                        );
                    }
                    else{
                        return (
                            <WrapperSide key={card.id}>
                                {cardFull}
                            </WrapperSide>
                        );
                    }
                })}
            </Container>
        </Section>
    );
};

export default Cards;
