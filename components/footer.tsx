import React, {FC} from "react";
import Link from "next/link";
import styled from "styled-components";
import {Highlight, Hr, Links} from "./UI";
import {FaEnvelope, FaHome, FaPhoneAlt} from "react-icons/fa";
import {Colors} from "../constants";
import CommentForm from "./form/comment";
import ApplicationForm from "./form/application";
import CallForm from "./form/call";

//region Styled
const Wrapper = styled.footer`
  background-color: ${Colors.light.normal};
  position: relative;
  bottom: 0;
  width: 100%;
  margin-top: -1rem;
`;

const Container = styled.section`
  padding: 10px 10px;
  
  @media (min-width: 992px){
    text-align: left;
    justify-content: space-between;
    display: flex;
    padding: 0 20px;
  }
`;

const ContainerShort = styled(Container)`
  text-align: center;
  margin: auto;

  @media (min-width: 992px){
    padding: 20px 0;
    text-align: left;
    width: 80%;
  }
`;

const Brand = styled.div`
  display: none;
  text-align: center;
  
  @media (min-width: 992px){
    display: block;
  }
`;

const Block = styled.div`
    margin: 20px 0;
`;

const Button = styled.button`
  background-color: transparent;
  font-family: inherit;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover{
    color: ${Colors.accent.normal} !important;,
  }
`;

const P = styled.p`
  cursor: pointer;
  
  &:hover{
    color: ${Colors.accent.normal} !important;,
  }
`;
//endregion

interface FooterProps {
    setModal: (content: FC) => void,
}

const Footer: FC<FooterProps> = ({setModal}) => {
    return (
        <Wrapper>
            <Hr/>
            <Container>
                <p>свяжитесь с нами в социальных сетях:</p>
                <Links/>
            </Container>
            <Hr/>
            <ContainerShort>
                <Brand>
                    <h3>Частный</h3>
                    <h2>Детский Сад <br/> <span className="highlight" style={{fontSize: "2.6rem"}}><q>Панда</q></span></h2>
                </Brand>
                <Block>
                    <h3>Полезные ссылки:</h3>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div>
                            <Link href="/about">
                                <P>Главная</P>
                            </Link>
                            <Link href="/details">
                                <P>Родителям</P>
                            </Link>
                            <Link href="/contacts">
                                <P>О нас</P>
                            </Link>
                        </div>
                        <div>
                            <Button onClick={() => {setModal(CallForm)}}>
                                Заказать звонок
                            </Button><br/>
                            <Button onClick={() => {setModal(CommentForm)}}>
                                Оставить комментарий
                            </Button><br/>
                            <Button onClick={() => {setModal(ApplicationForm)}}>
                                Оставить заявку
                            </Button><br/>
                        </div>
                    </div>
                </Block>
                <Block>
                    <h3>Наши контакты</h3>
                    <p>
                        <FaHome/> Владимир, Верхне-Лыбедская 18А
                    </p>
                    <p>
                        <FaEnvelope/> panda-kids33@yandex.ru
                    </p>
                    <p>
                        <FaPhoneAlt/> +7 910 170 23 53
                    </p>
                </Block>
            </ContainerShort>
        </Wrapper>
    );
};

export default Footer;