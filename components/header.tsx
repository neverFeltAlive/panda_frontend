import React, {FC} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import styled from "styled-components";
import {Colors} from "../constants";
import ApplicationForm from "./form/application";

//region Styled
const Img = styled.img`
  margin: 10px;
  
  @media (max-width: 574px) {
    display: none;
  }

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

const Wrapper = styled.header`
  width: 100%;
  background-color: ${Colors.white.normal};
  padding: 0 20px;
  border-bottom: 0.15rem solid ${Colors.dark.normal};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

const ContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (min-width: 992px){
    width: 50%;
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

  @media (min-width: 992px) {
    display: flex;
  }
`;

//endregion

interface HeaderProps {
    setModal: (content: FC) => void,
}

const Header: FC<HeaderProps> = ({setModal}) => {
    const router = useRouter();

    return (
        <>
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
                            <h6 className="nav-link" style={{fontWeight: "700"}}>Детский сад <span
                                style={{fontSize: "1.5rem"}} className="highlight"><q>Панда</q></span></h6>
                        </Link>
                    </Brand>
                    <Nav>

                        <button className="button button__accent" style={{marginLeft: "2rem"}} onClick={() => {
                            setModal(ApplicationForm)
                        }}>Оставить заявку
                        </button>
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
                </ContentBottom>
            </Wrapper>
        </>
    );
};

export default Header;