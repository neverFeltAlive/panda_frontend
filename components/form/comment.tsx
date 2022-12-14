import React, {FC} from "react";
import {Hr} from "../UI";
import Form, {InputProps} from "./form";
import {ApiRoot} from "../../constants";
import {ModalFormProps} from "./appointment";

const items: InputProps[] = [
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
        name: "сomment",
        label: "Ваш комментарий",
        className: "input",
        type: "textarea",
        placeholder: "...",
    }
]

const CommentForm = ({onSubmit}: ModalFormProps): JSX.Element => {
    return (
        <section>
            <h5 className="section-title" style={{textAlign: "center"}}>Оставить комментарий</h5>
            <Hr/>
            <Form apiEndpoint={`${ApiRoot}/create-comment`} items={items} buttonText="Отправить" onSubmit={onSubmit}/>
        </section>
    );
}

export default CommentForm;