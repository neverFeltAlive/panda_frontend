import styled from "styled-components";
import React, {FC, ReactComponentElement} from "react";
import {FaArrowLeft, FaArrowRight, FaVk} from "react-icons/fa";
import {Colors, DefaultAnimationProps} from "../constants";
import {motion} from "framer-motion";

export const Hr = styled.hr`
  border: 1px solid ${Colors.dark.normal};
  opacity: 1;
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

export const Section: FC<SectionProps> = ({title, children, className}) => {
    return (
        <section className={[className, "content-section"].join(" ")}>
            <div className="content-container">
                {title !== undefined && (
                    <>
                        <h3
                            className="section-title"
                            style={title.style}
                        >
                            {title.title}
                        </h3>
                        <Hr/><br/>
                    </>
                )}
                {children}
            </div>
        </section>
    );
};
//endregion

//region Transition
interface TransitionProps {
    from: null | string,
    through: null | string,
    to: null | string,
}

export const Transition: FC<TransitionProps> = (props) => {
    return (
        <div style={{display: "flex"}}>
            <svg viewBox="0 0 200 15" preserveAspectRatio="none">
                {props.from && (<polygon style={{fill: props.from}} points="0, 13 200, 0 0, 0"/>)}
                {props.through && (<polygon style={{fill: props.through}} points="0 15, 0 13, 200 0, 200 2"/>)}
                {props.to && (<polygon style={{fill: props.to}} points="0 15, 200 2, 200 15"/>)}
            </svg>
        </div>
    )
}
//endregion

//region Arrow symbols
interface ArrowProps {
    onClick: React.MouseEventHandler
    isRight: boolean,
}

const ArrowContainer = styled.div`
  position: absolute;
  margin: 0;
  height: 100%;
  padding: 0;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.dark.normal};
  background-color: transparent;
  border: none;
  z-index: 10;
  user-select: none;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    color: ${Colors.accent.normal};
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Arrow: FC<ArrowProps> = ({onClick, isRight}) => {
    return (
        <ArrowContainer
            onClick={onClick}
            style={isRight ? {right: "0"} : {left: "0"}}
        >
            {isRight ? (
                <FaArrowRight/>
            ) : (
                <FaArrowLeft/>
            )}
        </ArrowContainer>
    );
}

//endregion

//region Slider
interface SliderContainerProps {
    onClickRight: () => void,
    onClickLeft: () => void,
    children: JSX.Element,
    className?: string,
}


export const SliderContainer: FC<SliderContainerProps> = ({children, ...props}) => {
    return (
        <div className={props.className}>
            <Arrow isRight={false} onClick={props.onClickLeft}/>
            <Arrow isRight={true} onClick={props.onClickRight}/>
            {children}
        </div>
    )
}
//endregion

//region Links
type LinkProps = {
    style?: React.CSSProperties;
}

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  font-size: 1.1rem;

  &:hover {
    cursor: pointer;
    color: ${Colors.accent.normal};
  }
`;

export const Links: FC<LinkProps> = ({style}) => {
    return (
        <LinksContainer style={style}>
            <Link href="https://vk.com/panda.detsad33">
                <FaVk/>
            </Link>
        </LinksContainer>
    );
};
//endregion