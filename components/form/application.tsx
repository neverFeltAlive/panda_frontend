import React, {FC} from "react";
import {Hr} from "../UI";
import Form, {InputProps, SelectProps} from "./form";
import {Simulate} from "react-dom/test-utils";
import {ApiRoot} from "../../constants";
import {ModalFormProps} from "./appointment";

const items: (InputProps | SelectProps)[] = [
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
    {
        name: "group_age",
        label: "Выберите подходящую группу",
        className: "input",
        required: true,
        defaultValue: "small",
        options: [
            {
                name: "младшая",
                value: "small",
                className: "input",
            },
            {
                name: "средняя",
                value: "medium",
                className: "input",
            },
            {
                name: "старшая",
                value: "large",
                className: "input",
            }
        ]
    }
]

const ApplicationForm = ({onSubmit} : ModalFormProps): JSX.Element => {
    return (
        <section>
            <h5 className="section-title" style={{textAlign: "center"}}>Оставить заявку</h5>
            <Hr/>
            <Form apiEndpoint={`${ApiRoot}/create-application`} items={items} buttonText="Отправить" onSubmit={onSubmit}/>
        </section>
    );
}

export default ApplicationForm;