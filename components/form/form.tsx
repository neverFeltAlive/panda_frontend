import React, {FC, useEffect, useState} from 'react';
import {Hr} from "../UI";
import styled from "styled-components";
import {Colors} from "../../constants";

//region Styled
export const InputContainer = styled.div`
  width: 90%;
  margin: auto;
`;

export const StyledForm = styled.form`
  display: flex;
`;

export const Label = styled.label`
  text-align: left;
  font-size: 0.9rem;
  opacity: 80%;
  margin-top: 10px;
`;

export const ErrorSpan = styled.span`
  color: red;
  opacity: 1;
`;

//endregion

interface Option extends React.OptionHTMLAttributes<HTMLOptionElement> {
    value: string,
    name: string
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string,
    label: string,
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    name: string,
    label: string,
    options: Option[],
}

interface FormProps {
    items: (InputProps | SelectProps)[],
    buttonText: string,
    apiEndpoint: string,
    onSubmit?: () => void,
}

type State = { [key: string]: string };

const Form: FC<FormProps> = ({apiEndpoint, items, buttonText, onSubmit}): JSX.Element => {
    const defaultValues: State = {};

    useEffect(() => {
        for (let i: number = 0; i < items.length; i++) {
            defaultValues[items[i].name] = "";
        }
    }, [items, defaultValues]);

    const [values, setValues] = useState(defaultValues);
    const [errors, setErrors] = useState<null | { [key: string]: string | null }>(null)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let checkValues = true;
        let checkErrors = true;

        for (let i = 0; i < items.length; i++){
            if (values[items[i].name] === "" || values[items[i].name] === undefined || values[items[i].name] === null){
                checkValues = false;
                console.log(values);
            }
            if (errors && errors[items[i].name] !== null){
                checkErrors = false;
                console.log(errors);
            }
        }

        if (checkErrors && checkValues){
            console.log("Submitting form");
            try{
                fetch(apiEndpoint, {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({...values})
                }).then(response => console.log(response.json()));
            }
            catch(error){
                console.log(error);
            }

            if (onSubmit) onSubmit();
        }
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <InputContainer>
                <>
                    {items.map((item, index) => {

                        if ("options" in item) {
                            const {label, options, onChange, ...selectProps} = item as SelectProps;

                            const selectOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
                                event.preventDefault();
                                setValues({...values, [event.target.name]: event.target.value});

                                if (onChange !== undefined) {
                                    onChange(event);
                                }
                            }

                            return (
                                    <Label key={index}>
                                        {label}:<br/>
                                        <select {...selectProps} onChange={selectOnChange} value={values[item.name]}>
                                            {options.map((option, index) => {
                                                const {value, name, ...optionProps} = option;
                                                return (
                                                    <option key={index} value={value} {...optionProps}>{name}</option>
                                                );
                                            })}
                                        </select>
                                    </Label>
                            );
                        } else {
                            const {label, onBlur, onChange, ...itemProps} = item as InputProps;

                            const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                                event.preventDefault();

                                //region Reg Exp Filtering
                                if (event.target.type === "tel") {
                                    let value = event.target.value;

                                    value = value.replace("+7", "").replace(/\D/g, "");

                                    if (value.length > 3) {
                                        if (value.length < 7) {
                                            value = `+7 (${value.slice(0, 3)}) ${value.slice(3)}`
                                        } else if (value.length < 9) {
                                            value = `+7 (${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`
                                        } else if (value.length < 11) {
                                            value = `+7 (${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 8)}-${value.slice(8)}`
                                        } else {
                                            value = `+7 (${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 8)}-${value.slice(8, 10)}`
                                        }
                                    }

                                    event.target.value = value;
                                } else if (event.target.type === "email") {
                                    event.target.value = event.target.value.replace(/^[а-яА-Я]/g, "")
                                }
                                //endregion

                                setValues({...values, [event.target.name]: event.target.value});

                                if (onChange !== undefined) {
                                    onChange(event);
                                }
                            };

                            const inputOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
                                event.preventDefault();

                                //region Validation
                                let errorMessage = null;
                                if (event.target.value) {
                                    if (event.target.name === "name") {
                                        const regExp = /^[а-яА-Я]*$/;

                                        if (event.target.value.length <= 50) {
                                            if (event.target.value.match(regExp)) {
                                                errorMessage = null;
                                            } else {
                                                errorMessage = "Имя содержит недопустимые символы";
                                            }
                                        } else {
                                            errorMessage = "Имя превышает допустимую длинну";
                                        }

                                    }
                                    if (event.target.type === "email") {
                                        const regExp = /^[a-zA-Z\d.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z\d-]+(?:\.[a-zA-Z\d-]+)*$/;

                                        if (event.target.name.length <= 50) {
                                            errorMessage = null;

                                            /*
                                            if (event.target.name.match(regExp)){
                                            }
                                            else{
                                                errorMessage = "Email некорректный";
                                            }
                                            */
                                        } else {
                                            errorMessage = "Email превышает допустимую длинну";
                                        }
                                    }
                                    if (event.target.type === "tel") {
                                        const regExp = /^[\d()\-+ ]*$/;

                                        if (event.target.value.length <= 20) {
                                            if (event.target.value.match(regExp)) {
                                                errorMessage = null;
                                            } else {
                                                errorMessage = "Номер телефона содержит недопустимые символы";
                                            }
                                        } else {
                                            errorMessage = "Номер телефона превышает допустимую длинну";
                                        }
                                    }
                                }
                                setErrors({...errors, [event.target.name]: errorMessage});
                                //endregion

                                if (onBlur !== undefined) {
                                    onBlur(event);
                                }
                            }

                            return (
                                <Label key={index}>
                                    <ErrorSpan>{errors ? errors[item.name] : null}</ErrorSpan>
                                    <br/>
                                    {label}:<br/>
                                    <input onChange={inputOnChange} onBlur={inputOnBlur} {...itemProps}
                                           value={values[item.name]}/>
                                </Label>
                            );
                        }
                    })}
                </>
                <br/><br/>

                <label>
                    <input
                        className="input"
                        name="agreement"
                        type="checkbox"
                        required
                    /> Я согласен на обработку персональных данных
                </label>
                <br/>
                <Hr/>
                <button type="submit" className="button">{buttonText}</button>
            </InputContainer>
        </StyledForm>
    );
}

export default Form;
