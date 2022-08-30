import React, {FC} from 'react';
import {Hr, Section, SectionTitle} from "./UI";
import {Colors} from "../constants";
import styled from "styled-components";
import CallForm from "./form/call";
import ApplicationForm from "./form/application";
import Appointment from "./form/appointment";

//region Styled
const Div = styled.div`
  margin: auto;

  @media (min-width: 992px) {
    width: 45%;
  }
`;

const Strong = styled.strong`
  font-size: 1.2rem;
`;

const A = styled.a`
  font-size: 1.3rem;
  cursor: pointer;
  text-decoration: underline;
  
  &:hover{
    color: var(--accent-color)
  }
`;


const Span = styled.span`
  font-size: 1.2rem;
`;
//endregion

interface ParentsInfoProps {
    setModal: (content: FC) => void;
}

export const ParentsInfo: FC<ParentsInfoProps> = ({setModal}) => {
    return (
        <>
            <section className="content-section content-section__dark">
                <Div className="content-container">
                    <article>
                        <h3 className="section-title">Условия поступления</h3>
                        <Hr/>
                        <p>Набор детей с <Span className="highlight">2</Span> до <Span
                            className="highlight">6.5</Span> лет ведется весь учебный год при наличии свободных мест</p>
                    </article>
                    <br/><br/>
                    <article>
                        <h3 className="section-title">Наш детския сад предлагает несколько режимов посещения</h3>
                        <Hr/>
                        <ul>
                            <li><p>С 7:30 до 13:00 или с 12:30 до 18:00 – <Span className="highlight">неполный
                                день</Span></p></li>
                            <li><p>С 7:30 до 18:00 – <Span className="highlight">полный день</Span></p></li>
                        </ul>
                    </article>
                </Div>
            </section>
            <div style={{display: "flex"}}>
                <svg viewBox="0 0 200 15" preserveAspectRatio="none">
                    <polygon style={{fill: Colors.main.normal}} points="0, 13 200, 0 0, 0"/>
                    <polygon style={{fill: Colors.light.normal}} points="0 15, 0 13, 200 0, 200 2"/>
                    <polygon style={{fill: Colors.light.normal}} points="0 15, 200 2, 200 15"/>
                </svg>
            </div>
            <section className="content-section content-section__light">
                <div className="content-container">
                    <article>
                        <h3 className="section-title">Что делать, чтобы поступить к нам?</h3>
                        <Hr/>
                        <p>
                            <Strong>Для поступления вы можете&nbsp;
                                <A onClick={() => setModal(CallForm)}>связаться по телефону</A> или&nbsp;
                                <A onClick={() => setModal(ApplicationForm)}>оставить заявку онлайн</A>, a также&nbsp;
                                <A onClick={() => setModal(Appointment)}>записаться на экскурсию.</A>&nbsp;
                            </Strong>
                            Вам подберут удобное для вас время для ознакомительной
                            экскурсии по детскому саду: спальни,
                            игровые, комнаты для приема пищи, музыкальный и спортивный зал. Если вам всё понравится, вы
                            приходите к
                            нам на адаптацию, которая начинается с 2 часов в день. В зависимости от индивидуальных
                            особенностей
                            малыша, его время в саду будет увеличиваться. (Это необходимо для безболезненного перехода
                            ребенка в
                            новую среду).
                        </p>
                    </article>
                </div>
            </section>
            <div style={{display: "flex"}}>
                <svg viewBox="0 0 200 15" preserveAspectRatio="none">
                    <polygon style={{fill: Colors.light.normal}} points="0, 13 200, 0 0, 0"/>
                    <polygon style={{fill: Colors.white.normal}} points="0 15, 0 13, 200 0, 200 2"/>
                    <polygon style={{fill: Colors.white.normal}} points="0 15, 200 2, 200 15"/>
                </svg>
            </div>
            <section className="content-section">
                <Div className="content-container">
                    <article>
                        <h3 className="section-title">Для заключения договора о пребывании в детском саду</h3>
                        <h5>родители должны предоставитть следующие документы:</h5>
                        <ul>
                            <li><p>Копию свидетельства о рождении</p></li>
                            <li><p>Копию медицинского страхового полиса</p></li>
                            <li><p>Копию документа удостоверяющего личность одного из родителей</p></li>
                            <li><p>Заявление о приеме в детский сад</p></li>
                            <li><p>Купию СНИЛС</p></li>
                            <li><p>Справку от педиатра о состоянии здоровья</p></li>
                            <li><p>Результаты медицинских анализов на энтербиоз и яица глист</p></li>
                        </ul>
                    </article>
                    <br/><br/>
                    <article>
                        <h3 className="section-title">Правила посещения детского сада</h3>
                        <Hr/>
                        <ul>
                            <li><p>Мы не принимаем детей с симптомами инфекционных заболеваний</p></li>
                            <li><p>Если ребенок отсутствует более 3 рабочих дней, то прием в сад осуществляется только
                                со
                                справкой от педиатра</p></li>
                            <li><p>В шкафчике должна быть обязательно сменная одежда по сезону</p></li>
                            <li><p>Одевайте детей в удобную одежду, соответствующую погоде, чтобы детям было комфортно
                                во
                                время прогулок</p></li>
                        </ul>
                    </article>
                </Div>
            </section>
        </>
    );
};

export const UsInfo: FC = () => {
    return (
        <>
            <section className="content-section content-section__dark">
                <Div className="content-container">
                    <article>
                        <h3 className="section-title">Основные сведения</h3>
                        <Hr/>
                        <p>ИП Федяева Кристина Олеговна</p>
                        <p>дата регистрации: 04.04.2022</p>

                    </article>
                    <br/><br/>
                    <article>
                        <h3 className="section-title">Предмет деятельности</h3>
                        <Hr/>
                        <ul>
                            <li><p>присмотр за детьми в возрасте 2 - 7.5</p></li>
                            <li><p>уход за детьми возрасте 2 - 7.5</p></li>
                            <li><p>оздоровление детей возрасте 2 - 7.5</p></li>

                        </ul>
                    </article>
                </Div>
            </section>
            <div style={{display: "flex"}}>
                <svg viewBox="0 0 200 15" preserveAspectRatio="none">
                    <polygon style={{fill: Colors.main.normal}} points="0, 13 200, 0 0, 0"/>
                    <polygon style={{fill: Colors.light.normal}} points="0 15, 0 13, 200 0, 200 2"/>
                    <polygon style={{fill: Colors.light.normal}} points="0 15, 200 2, 200 15"/>
                </svg>
            </div>
            <section className="content-section content-section__light">
                <div className="content-container">
                    <article>
                        <h3 className="section-title">Место нахождения</h3>
                        <Hr/>
                        <p>Россия, город Владимир, улица Верхне-Лыбедская, 18А</p>
                    </article>
                </div>
            </section>
            <div style={{display: "flex"}}>
                <svg viewBox="0 0 200 15" preserveAspectRatio="none">
                    <polygon style={{fill: Colors.light.normal}} points="0, 13 200, 0 0, 0"/>
                    <polygon style={{fill: Colors.light.normal}} points="0 15, 0 13, 200 0, 200 2"/>
                    <polygon style={{fill: Colors.light.normal}} points="0 15, 200 2, 200 15"/>
                </svg>
            </div>

        </>
    );
};
