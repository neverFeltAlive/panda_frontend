import React, {useEffect, useState} from 'react';
import {Colors, Rems, Animations, DefaultAnimationProps} from "../constants";
import styled from "styled-components";
import {AnimatePresence, motion} from "framer-motion";

//region Styled
const Container = styled.section`
  display: flex;
  padding: 100px 0;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.main.normal};
`;

const BrandContainer = styled.div`
  @media (min-width: 768px) {
    width: 40%;
  }
`;

const Brand = styled.div`
  float: right;

  @media (min-width: 768px) {
    padding-right: 2rem;
  }
  @media (min-width: 992px) {
    padding-right: 3rem;
  }
  @media (min-width: 1200px) {
    padding-right: 4rem;
  }
`;

const TextContainer = styled.div`
  display: none;
  height: 160px;
  border-left: ${Rems.border} solid ${Colors.dark.normal};
  text-align: left;
  width: 40%;

  @media (min-width: 768px) {
    display: block;
    padding-left: 2rem;
  }
  @media (min-width: 992px) {
    padding-left: 3rem;
  }
  @media (min-width: 1200px) {
    padding-left: 4rem;
  }
`;

const Strong = styled.strong`
  font-size: 1.1rem;
  line-height: inherit;
`;
//endregion



const Scheme = () => {
    const texts = [
        (
            <motion.p
                style={{textAlign: "justify"}}
                key={0}
                animate={Animations.slideInAnimation()}
                exit={Animations.slideOutAnimation()}
            >
                <Strong>уникальное пространство</Strong>, где каждый ребёнок может вырасти гармоничным и счастливым человеком.
            </motion.p>
        ),
        (
            <motion.p
                key={1}
                animate={Animations.slideInAnimation()}
                exit={Animations.slideOutAnimation()}
            >
                <Strong>отдельно стоящий коттедж</Strong> с огражденной территорией, где каждый ребёнок находится не
                только в комфорте, но и в полной безопасности.
            </motion.p>
        ),
        (
            <motion.p
                key={2}
                animate={Animations.slideInAnimation()}
                exit={Animations.slideOutAnimation()}
            >
                <Strong>собственная кухня</Strong> и <Strong>хорошо проработанным меню</Strong>, способное удовлетворить
                любые желания и потребности даже самых привередливых малышей.
            </motion.p>
        ),
    ];

    const [currentText, setCurrentText] = useState(texts[0]);
    const next = () => {
        const current = parseInt(currentText.key as string);
        return current === texts.length - 1 ? 0 : current + 1;
    };

    useEffect(() => {
        setTimeout(() => {
            setCurrentText(texts[next()]);
        }, 10000);
    }, [currentText]);

    return (
        <Container>
            <BrandContainer
                as={motion.div}
                {...DefaultAnimationProps(1)}
            >
                <Brand>
                    <h2>Частный</h2>
                    <h1>Детский Сад <br/>
                        <motion.span
                            className="highlight highlight__light"

                        >Панда
                        </motion.span>
                    </h1>
                </Brand>
            </BrandContainer>
            <TextContainer
                as={motion.div}
                {...DefaultAnimationProps()}
            >
                <Strong style={{float: "left"}}>Садик Панда - это&nbsp;</Strong>
                <AnimatePresence>
                    {currentText}
                </AnimatePresence>
            </TextContainer>
        </Container>
    );
};

export default Scheme;