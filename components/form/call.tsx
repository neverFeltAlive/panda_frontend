import React, {FC} from "react";
import {Hr} from "../UI";
import Form, {InputProps} from "./form";
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

const CallForm : FC = () => {
    return (
        <section className="content-section">
            <h5 className="section-title" style={{textAlign: "center"}}>Заказать звонок</h5>
            <Hr/>
            <Form apiEndpoint={`${ApiRoot}/create-phone-request`} items={items} buttonText="Отправить"/>
        </section>
    );
};

export default CallForm;