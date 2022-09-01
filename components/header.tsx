import React, {FC} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import styled from "styled-components";
import {Colors, ContactData, Rems} from "../constants";
import ApplicationForm from "./form/application";
import CallForm from "./form/call";
import {FaPhoneAlt} from "react-icons/fa";
import {setModalType} from "../pages/_app";

//region Styled
const Img = styled.img`
  margin: 10px;
  display: none;

  @media (min-width: 576px) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 992px) {
    width: 60px;
    height: 60px;
  }

  @media (min-width: 1200px) {
    width: 90px;
    height: 90px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: ${Colors.white.normal};
  padding: ${Rems.windowPaddings};
  border-bottom: ${Rems.border} solid ${Colors.dark.normal};
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 992px) {
    justify-content: space-between;
  }
`;

const ContentBottom = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 992px) {
    width: 60%;
  }
`;

const Brand = styled.nav`
  display: flex;
  float: left;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  display: none;
  float: right;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Button = styled.button`
  font-size: 0.7rem;
  margin-left: 10px;
`;

//endregion

interface HeaderProps {
    setModal: setModalType,
}

const Header: FC<HeaderProps> = ({setModal}) => {
    const router = useRouter();

    return (
        <header>
            <Wrapper>
                <Content className="content-container">
                    <Brand>
                        <Link href="/">
                            <Img
                                src="/images/logo.png"
                                alt="Логотип компании"
                            />
                        </Link>
                        <Link href="/">
                            <h6>
                                <a>Детский сад <span
                                    className="highlight">Панда</span>
                                </a>
                            </h6>
                        </Link>
                    </Brand>
                    <Nav>
                        <Button className="button button__accent" onClick={() => {
                            setModal(CallForm);
                        }}>
                            <FaPhoneAlt/> {ContactData.phoneNumber}
                        </Button>
                        <Button className="button button__accent" onClick={() => {
                            setModal(ApplicationForm)
                        }}>Оставить заявку
                        </Button>
                    </Nav>
                </Content>
            </Wrapper>
            <Wrapper>
                <ContentBottom className="content-container">
                    <Link href="/about">
                        <a className={router.pathname === "/about" ? "nav-link nav-link__active" : "nav-link"}>Главная</a>
                    </Link>
                    <Link href="/details">
                        <a className={router.pathname === "/details" ? "nav-link nav-link__active" : "nav-link"}>Родителям</a>
                    </Link>
                    <Link href="/contacts">
                        <a className={router.pathname === "/contacts" ? "nav-link nav-link__active" : "nav-link"}>О
                            нас
                        </a>
                    </Link>
                    <Link href="/feed">
                        <a className={router.pathname === "/feed" ? "nav-link nav-link__active" : "nav-link"}>Галерея
                        </a>
                    </Link>
                </ContentBottom>
            </Wrapper>
        </header>
    );
};

export default Header;