import React, {FC} from "react";
import Link from "next/link";
import styled from "styled-components";
import {Hr, Links} from "./UI";
import {FaEnvelope, FaHome, FaPhoneAlt} from "react-icons/fa";
import {Colors, ContactData, Rems} from "../constants";
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
  padding: ${Rems.windowPaddings};

  @media (min-width: 992px) {
    margin: auto;
    text-align: left;
    justify-content: space-between;
    display: flex;
  }
`;

const ContainerShort = styled.div`
  text-align: center;

  @media (min-width: 1200px) {
    justify-content: space-between;
    margin: auto;
    display: flex;
    padding: 20px 0;
    text-align: left;
    width: 80%;
  }
`;

const Brand = styled.div`
  display: none;
  text-align: center;

  @media (min-width: 992px) {
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

  &:hover {
    color: ${Colors.accent.normal} !important;,
  }
`;

const P = styled.p`
  display: none;

  @media (min-width: 992px) {
    display: block;
  }
`;

const A = styled.a`
  cursor: pointer;

  &:hover {
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
            <div>
                <Container>
                    <P>свяжитесь с нами в социальных сетях:</P>
                    <Links/>
                </Container>
            </div>
            <Hr/>
            <ContainerShort>
                <Brand>
                    <h3>Частный</h3>
                    <h2>Детский Сад <br/> <span className="highlight">Панда</span>
                    </h2>
                </Brand>
                <Block>
                    <h3>Полезные ссылки:</h3>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div style={{marginRight: "30px"}}>
                            <Link href="/about">
                                <A>Главная</A>
                            </Link><br/>
                            <Link href="/details">
                                <A>Родителям</A>
                            </Link><br/>
                            <Link href="/contacts">
                                <A>О нас</A>
                            </Link><br/>
                            <Link href="/feed">
                                <A>Галлерея</A>
                            </Link><br/>
                        </div>
                        <div>
                            <Button onClick={() => {
                                setModal(CallForm)
                            }}>
                                Заказать звонок
                            </Button><br/>
                            <Button onClick={() => {
                                setModal(CommentForm)
                            }}>
                                Оставить комментарий
                            </Button><br/>
                            <Button onClick={() => {
                                setModal(ApplicationForm)
                            }}>
                                Оставить заявку
                            </Button><br/>
                        </div>
                    </div>
                </Block>
                <Block>
                    <h3>Наши контакты:</h3>
                    <p>
                        <FaHome/> {ContactData.address.short}
                    </p>
                    <p>
                        <FaEnvelope/> {ContactData.email}
                    </p>
                    <p>
                        <FaPhoneAlt/> {ContactData.phoneNumber}
                    </p>
                </Block>
            </ContainerShort>
        </Wrapper>
    );
};

export default Footer;