import React, {FC, useState} from 'react';

import {Hr, SectionTitle, Section, Arrow, SliderContainer} from "../UI";
import styled from "styled-components";
import {Animations, Colors, DefaultAnimationProps, Rems} from "../../constants";
import {motion} from "framer-motion";

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
const Container = styled(SliderContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media (min-width: 1200px){
    padding: 0 40px;
  }
`;

const Card = styled.article`
  text-align: center;
  height: 250px;
  border-radius: ${Rems.borderRadius};
  display: flex;
  align-items: center;
  background-color: ${Colors.white.normal};
  z-index: 1;
  border: ${Rems.border} solid transparent;
  padding: 20px;


  &:hover {
    border-color: ${Colors.dark.normal};
  }

  @media (min-width: 768px) {
    height: 300px;
  }

  @media (min-width: 1200px) {
    height: 350px;
  }
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    width: 45%;
    margin: 0 -180px;
  }

  @media (min-width: 1200px) {
    margin: 0;
  }
`;

const WrapperSide = styled(Wrapper)`
  display: none;
  scale: 0.9;
  z-index: 0;

  @media (min-width: 768px) {
    display: block;
    opacity: 50%;
    margin: 0;
  }

  @media (min-width: 1200px) {
    opacity: 100%;
    margin: 0 10px;
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

    const extendedInitialState = {...Animations.initialState, ...{zIndex: 4, opacity: 0.5} }

    return (
        <Section title={sectionTitle} className="content-section__light">
            <Container onClickRight={() => {
                setCurrent(next)
            }} onClickLeft={() => {
                setCurrent(previous)
            }}>
                <>
                    {active.map((card, index) => {
                        const body = (
                            <Card>
                                <div>
                                    <h4>{card.title}</h4>
                                    <Hr/>
                                    <p>{card.text}</p>
                                </div>
                            </Card>
                        );

                        if (index === 1) {
                            return (
                                <Wrapper
                                    as={motion.div}
                                    {...DefaultAnimationProps()}
                                    initial={extendedInitialState}
                                    key={card.id}
                                >
                                    {body}
                                </Wrapper>
                            );
                        } else {
                            return (
                                <WrapperSide
                                    as={motion.div}
                                    {...DefaultAnimationProps()}
                                    key={card.id}
                                >
                                    {body}
                                </WrapperSide>
                            );
                        }
                    })}
                </>
            </Container>
        </Section>
    );
};

export default Cards;
