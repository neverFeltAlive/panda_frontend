import styled from "styled-components";
import React from "react";
import {FaArrowLeft, FaArrowRight, FaVk} from "react-icons/fa";
import {Colors} from "../constants";

export const Button = styled.button`
  font-size: 25px;
  padding: 10px;
  font-family: inherit;
  color: ${Colors.dark.normal};
  background-color: transparent;
  border: 2px solid ${Colors.dark.normal};
  border-radius: 10px;

  &:hover {
    color: ${Colors.accent.normal};
    background-color: transparent;
    border-color: ${Colors.accent.normal};
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }

  @media screen and (max-width: 574px) {
    font-size: 18px;
  }

  @media screen and (min-width: 576px) {
    font-size: 20px;
  }

  @media screen and (min-width: 992px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 30px;
  }
`;

export const Hr = styled.hr`
  border: 1px solid ${Colors.dark.normal};
  opacity: 1;
`;

export const Highlight = styled.span`
  color: ${Colors.accent.normal};
  text-shadow: 1px 1px #40322F;
  font-family: 'Rubik Bubbles', cursive;
  letter-spacing: 4px;
  font-size: inherit;
`;

//region Main content section tag
export interface SectionTitle {
    title: string,
    style: React.CSSProperties,
}

type SectionProps = {
    title?: SectionTitle,
    children: React.ReactNode,
    className?: string,
}

export const Section = ({title, children, className}: SectionProps) => {
    return (
        <section className={[className, "content-section"].join(" ")}>
            <div className="content-container">
                {title !== undefined && (
                    <>
                        <h3 className="section-title" style={title.style}>{title.title}</h3>
                        <Hr/><br/>
                    </>
                )}
                {children}
            </div>
        </section>
    );
};
//endregion

//region Arrow symbols
type ArrowProps = {
    onClick: React.MouseEventHandler
    isRight: boolean,
}

const Div = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  
  font-size: 1.5rem;
  color: ${Colors.main.normal};
  background-color: transparent;
  border: none;
  z-index: 10;
  user-select: none;
  overflow: hidden;
  
  &:hover{
    cursor: pointer;
  }
  
  @media (min-width: 768px){
    font-size: 2rem;
  }
`;

export const Arrow = ({onClick, isRight} : ArrowProps) => {
    return (
        <Div onClick={onClick} style={isRight ? {right: "0"} : {left: "0"}}>
            {isRight ? (
                <FaArrowRight/>
            ) : (
                <FaArrowLeft/>
            )}
        </Div>
    );
}
//endregion

//region Links
type LinkProps = {
    style?: React.CSSProperties;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  font-size: 1.1rem;
  
  &:hover{
    cursor: pointer;
    color: ${Colors.accent.normal};
  }
`;

export const Links = ({style}: LinkProps) => {
    return (
        <Container style={style}>
            <Link href="https://vk.com/panda.detsad33">
                <FaVk/>
            </Link>
        </Container>
    );
};
//endregion