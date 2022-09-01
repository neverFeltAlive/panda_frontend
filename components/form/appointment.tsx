import React, {FC} from "react";
import {Hr} from "../UI";
import Form, {InputProps} from "./form";
import styled from "styled-components";
import {ApiRoot} from "../../constants";

const items: InputProps[] = [
    {
        name: "phone_number",
        label: "Номер телефона",
        className: "input",
        type: "tel",
        title: "Введите ваш номер телефона",
        placeholder: "+7 (___) ___-__-__",
        required: true,
    },
    {
        name: "email",
        label: "E-mail",
        className: "input",
        type: "email",
        title: "Введите ваш e-mail",
        pattern: "^\S+@\S+\.\S+$",
        placeholder: "example@gmail.com",
        required: true,
    },
    {
        name: "name",
        label: "Имя",
        className: "input",
        type: "text",
        maxLength: 15,
        title: "Введите ваше имя",
        placeholder: "Ваше имя",
        required: true,
    },
]

const Container = styled.div`
  margin: auto;
  width: 100%;
  
  @media (min-width: 992px){
    width: 80%;
  }
  
  @media (min-width: 1200px){
    width: 50%;
  }
`;

export const AppointmentForm : FC = () => {
    return (
        <section>
            <h5 className="section-title" style={{textAlign: "center"}}>записаться на экскурсию</h5>
            <Hr/>
            <Form apiEndpoint={`${ApiRoot}/create-application`} items={items} buttonText="Отправить"/>
        </section>
    )
}


const Appointment : FC = () => {
    return (
        <section className="content-section">
            <div className="content-container">
                <h3 className="section-title" style={{textAlign: "center"}}>записаться на экскурсию</h3>
                <h6 className="subtitle" style={{textAlign: "center"}}>Если у вас остались вопросы, вы можете лично познакомиться с
                    пространством и персоналом детского сада</h6>
                <Hr/>

                <Container>
                    <Form apiEndpoint={`${ApiRoot}/create-question`} items={items} buttonText="Отправить"/>
                </Container>
            </div>
        </section>
    );
};

export default Appointment;