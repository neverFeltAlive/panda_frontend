import type {NextPage} from 'next';
import Link from "next/link";
import Head from 'next/head';
import styled from "styled-components";
import {Hr} from "../components/UI"
import {Colors} from "../constants";

//region Styled
const Wrapper = styled.div`
  background-color: ${Colors.main.transparent};
  background-image: url("/images/logo-mask.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Section = styled.section`
  width: 100%;
  text-align: center;
  
  @media (min-width: 576px){
    max-width: 540px;
  }
  @media (min-width: 768px){
    max-width: 720px;
  }
`;

const MiddleGround = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.dark.transparent};
  
`;

const Space = styled(Hr)`
  margin: 30px;
`;
//endregion

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Частный детский сад Панда во Владимире"/>
                <title>Частный Детский Сад Панда</title>
            </Head>
            <main>
                <Wrapper>
                    <MiddleGround>
                        <Section>
                            <h2>Частный</h2>
                            <h1>Детский Сад <span className="highlight highlight__shadow">Панда</span></h1>
                            <h6>Лучший детский сад со спортивным уклоном, речевым развитием и заботой о каждом ребёнке во
                                Владимире.</h6>
                            <Space/>
                            <Link href="/about">
                                <button className="button button__accent">
                                    Узнать подробнее
                                </button>
                            </Link>
                        </Section>
                    </MiddleGround>
                </Wrapper>
            </main>
        </>
    )
}

export default Home;
