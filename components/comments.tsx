import React, {FC} from 'react';
import {Hr} from "./UI";
import {FaRegCommentAlt} from "react-icons/fa";
import styled from "styled-components";
import {Colors, Rems} from "../constants";
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
  box-shadow: ${Rems.boxShadow} ${Colors.accent.normal};
  border-radius: ${Rems.borderRadius};
  border: ${Rems.border} solid transparent;

  &:hover {
    border-color: ${Colors.dark.normal};
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
            <Section className="content-section">
                <h2>Детский Сад <strong className="highlight">Панда</strong></h2>
                <h3>В СЛОВАХ</h3>
                <Hr/>
                <Container className="content-container">
                    <Column>
                        <Article>
                            <strong>ПАПА</strong>
                            <h6><span className="highlight">Виктор</span></h6>
                            <strong>АВГ, 2022</strong>
                            <Hr/>
                            <p>Наш ребенок с радостью идет в Панду и с нетерпением ждёт встречи с друзьями.
                                Внимательный
                                персонал. Доброе, уважительное, заботливое отношение. Спасибо вам огромное</p>
                        </Article>
                        <ArticleEven>
                            <strong>МАМА</strong>
                            <h6><span className="highlight">Дарья</span></h6>
                            <strong>АВГ, 2022</strong>
                            <Hr/>
                            <p>Спасибо за классное начало дня! Все было очень здорово, увлекательно и весело! Ребёнок счастлив :)</p>
                        </ArticleEven>
                    </Column>
                    <ArticleBig>
                        <strong>ВОСПИТАТЕЛЬ</strong>
                        <h6><span className="highlight">Валентина</span></h6>
                        <strong>СЕНТ, 2022</strong>
                        <Hr/>
                        <p>Я воспитатель с большим стажем, работала в муниципальных и частных детских садах. Впервые вижу насколько все продуманно до мелочей: шкафчики с антресолью для хранения одежды, рабочие места воспитателям, комфортные места для занятий, отдельная зона для игры, уютная столовая с красивой посудой и мное другое. Замечательная детская площадка. Поздравляю с открытием.</p>
                    </ArticleBig>
                </Container>
                <br/>
                <Button className="button button__reverse" onClick={onClick}><FaRegCommentAlt/> Оставить отзыв</Button>
                <br/>
            </Section>
        </>
    );
};

export default Comments;