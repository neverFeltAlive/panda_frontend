import React, {FC} from 'react';
import {Highlight, Hr} from "./UI";
import {FaRegCommentAlt} from "react-icons/fa";
import styled from "styled-components";
import {Colors} from "../constants";
import CommentForm from "./form/comment";

//region Styled
const Section = styled.section`
  text-align: center;
  background-color: ${Colors.accent.transparent};
  padding: 0 10px 25px 10px;

  @media (min-width: 1200px) {
    padding: 0 20px 45px 20px;
  }
`;

const Container = styled.div`
  display: block;
  justify-content: center;

  @media (min-width: 992px) {
    display: flex;
  }
`;

const Article = styled.article`
  text-align: center;
  padding: 10px;
  margin: 10px 0;
  background-color: ${Colors.white.normal};
  box-shadow: 0 0 1rem ${Colors.accent.normal};
  border-radius: 1rem;
  border: 0.15rem solid transparent;

  &:hover {
    border: 0.15rem solid ${Colors.dark.normal};
  }

  @media (min-width: 992px) {
    text-align: left;
    padding: 20px;
    margin: 20px;
  }
`;

const ArticleEven = styled(Article)`
  box-shadow: 0 0 1rem ${Colors.accent.normal};
  background-color: ${Colors.light.transparent};
  text-align: center;

  @media (min-width: 992px) {
    text-align: right;
  }
`;

const ArticleBig = styled(Article)`
  text-align: center;

  @media (min-width: 992px) {
    max-width: 25%;
  }
`;

const Column = styled.div`
  @media (min-width: 992px) {
    padding: 0 50px 0 0;
    width: 70%;
  }
`;

const Button = styled.button`
  font-size: 1.2rem;
  text-align: center;
  background-color: transparent;
  color: ${Colors.accent.normal};
  border: 2px solid ${Colors.accent.normal};
  border-radius: 0.5rem;
  padding: 0.3rem;
  font-family: inherit;

  &:hover {
    color: ${Colors.dark.normal};
    border-color: ${Colors.dark.normal};
  }

  @media (min-width: 992px) {
    float: left;
  }
`;
//endregion

interface CommentsProps {
    setModal: (content: FC) => void,
}

const Comments : FC<CommentsProps> = ({setModal}) => {

    const onClick = () => {
        setModal(CommentForm);
    }

    return (
        <>
            <div style={{display: "flex"}}>
                <svg viewBox="0 0 200 15" preserveAspectRatio="none">
                    <polygon style={{fill: Colors.white.normal}} points="0, 13 200, 0 0, 0"/>
                    <polygon style={{fill: Colors.accent.transparent}} points="0 15, 0 13, 200 0, 200 2"/>
                    <polygon style={{fill: Colors.accent.transparent}} points="0 15, 200 2, 200 15"/>
                </svg>
            </div>
            <Section className="content-section">
                <h2>Детский Сад <Highlight style={{fontSize: "2.6rem"}}><q>Панда</q></Highlight></h2>
                <h3>В СЛОВАХ</h3>
                <Hr/>
                <Container className="content-container">
                    <Column>
                        <Article>
                            <strong>МАМА</strong>
                            <p><span className="highlight">Ольга</span></p>
                            <strong>СЕНТ, 2022</strong>
                            <Hr/>
                            <p>Наш ребенок с радостью идет в Панду и с нетерпением ждёт встречи с друзьями.
                                Прекрасные
                                нянички. Доброе, уважительное, заботливое отношение. Спасибо вам огромное</p>
                        </Article>
                        <ArticleEven>
                            <strong>ПАПА</strong>
                            <p><span className="highlight">Виктор</span></p>
                            <strong>СЕНТ, 2022</strong>
                            <Hr/>
                            <p>Наш ребенок с радостью идет в Панду и с нетерпением ждёт встречи с друзьями.
                                Прекрасные
                                нянички. Доброе, уважительное, заботливое отношение. Спасибо вам огромное</p>
                        </ArticleEven>
                    </Column>
                    <ArticleBig>
                        <strong>ВОСПИТАТЕЛЬ</strong>
                        <p><span className="highlight">Анастасия</span></p>
                        <strong>СЕНТ, 2022</strong>
                        <Hr/>
                        <p>Наш ребенок с радостью идет в Панду и с нетерпением ждёт встречи с друзьями. Прекрасные
                            нянички. Доброе, уважительное, заботливое отношение. Спасибо вам огромное</p>
                    </ArticleBig>
                </Container>
                <br/>
                <Button onClick={onClick}><FaRegCommentAlt/> Оставить комментарий</Button>
                <br/>
            </Section>
        </>
    );
};

export default Comments;