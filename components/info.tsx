import React, {FC} from 'react';
import {Hr} from "./UI";
import {Colors, DefaultAnimationProps} from "../constants";
import styled from "styled-components";
import CallForm from "./form/call";
import ApplicationForm from "./form/application";
import Appointment, {AppointmentForm} from "./form/appointment";
import {motion} from "framer-motion";
import {setModalType} from "../pages/_app";

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

  &:hover {
    color: var(--accent-color)
  }
`;


const Span = styled.span`
  font-size: 1.2rem;
`;

//endregion

interface ParentsInfoProps {
    setModal: setModalType;
}

export const ParentsInfo = ({setModal} : ParentsInfoProps) => {
    return (
        <>
            <section className="content-section content-section__dark">
                <Div className="content-container">
                    <motion.article {...DefaultAnimationProps()}>
                        <h3 className="section-title">Условия поступления</h3>
                        <Hr/>
                        <p>Набор детей с <Span className="highlight">2</Span> до <Span
                            className="highlight">6.5</Span> лет ведется весь учебный год при наличии свободных мест</p>
                    </motion.article>
                    <br/><br/>
                    <motion.article {...DefaultAnimationProps(0.3)}>
                        <h3 className="section-title">Наш детский сад предлагает несколько режимов посещения</h3>
                        <Hr/>
                        <ul>
                            <li><p>С 7:30 до 13:00 или с 12:30 до 18:00 – <Span className="highlight">неполный
                                день</Span></p></li>
                            <li><p>С 7:30 до 18:00 – <Span className="highlight">полный день</Span></p></li>
                        </ul>
                    </motion.article>
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
                    <motion.article {...DefaultAnimationProps(0.3)}>
                        <h3 className="section-title">Что делать, чтобы поступить к нам?</h3>
                        <Hr/>
                        <p>
                            <Strong>Для поступления вы можете&nbsp;
                                <A onClick={() => setModal(<CallForm onSubmit={() => {setModal(null)}}/>)}>связаться по телефону</A> или&nbsp;
                                <A onClick={() => setModal(<ApplicationForm onSubmit={() => {setModal(null)}}/>)}>оставить заявку онлайн</A>, a также&nbsp;
                                <A onClick={() => setModal(<AppointmentForm onSubmit={() => {setModal(null)}}/>)}>записаться на экскурсию.</A>&nbsp;
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
                    </motion.article>
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
                    <motion.article {...DefaultAnimationProps(0)}>
                        <h3 className="section-title">Для заключения договора о пребывании в детском саду</h3>
                        <h5>родители должны предоставитть следующие документы:</h5>
                        <ul>
                            <li><p>Копию свидетельства о рождении</p></li>
                            <li><p>Копию медицинского страхового полиса</p></li>
                            <li><p>Копию документа удостоверяющего личность одного из родителей</p></li>
                            <li><p>Заявление о приеме в детский сад</p></li>
                            <li><p>Копию СНИЛС</p></li>
                            <li><p>Справку от педиатра о состоянии здоровья</p></li>
                            <li><p>Результаты медицинских анализов на энтербиоз и яица глист</p></li>
                        </ul>
                    </motion.article>
                    <br/><br/>
                    <motion.article {...DefaultAnimationProps(0.3)}>
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
                    </motion.article>
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
                    <motion.article {...DefaultAnimationProps(0)}>
                        <h3 className="section-title">Основные сведения</h3>
                        <Hr/>
                        <p>ИП Федяева Кристина Олеговна</p>
                        <p>дата регистрации: 04.04.2022</p>

                    </motion.article>
                    <br/><br/>
                    <motion.article {...DefaultAnimationProps(0.3)}>
                        <h3 className="section-title">Предмет деятельности</h3>
                        <Hr/>
                        <ul>
                            <li><p>присмотр за детьми в возрасте 2 - 7</p></li>
                            <li><p>уход за детьми в возрасте 2 - 7</p></li>
                            <li><p>оздоровление детей в возрасте 2 - 7</p></li>
                            <li><p>дополнительное развитие детей в возресте 3 - 7</p></li>
                            <li><p>индивидуальные занятия детей в возресте 3.5 - 7</p></li>
                        </ul>
                    </motion.article>
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
                    <motion.article {...DefaultAnimationProps(0)}>
                        <h3 className="section-title">Место нахождения</h3>
                        <Hr/>
                        <p>Россия, город Владимир, улица Верхне-Лыбедская, 18А</p>
                    </motion.article>
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
