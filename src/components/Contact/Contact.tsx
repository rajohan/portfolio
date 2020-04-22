import React, { useEffect, useState } from "react";
import { ValidationError } from "yup";

import Input from "../Shared/Form/Input/Input";
import InputError from "../Shared/Form/Input/InputError";
import Form from "../Shared/Form/Form";
import Button from "../Shared/Button";
import Success from "../Shared/Form/Success";
import { initialStateTouched, initialStateValues } from "./initialStates";
import { InputTypes, InputErrorTypes } from "../Shared/Form/Input/types";
import { schema } from "./validationSchema";

const Contact: React.FC = (): React.ReactElement => {
    const [values, setValues] = useState<{ [name: string]: string }>(initialStateValues);
    const [touched, setTouched] = useState<{ [name: string]: boolean }>(initialStateTouched(false));
    const [messageSent, setMessageSent] = useState(false);
    const [currentErrors, setCurrentErrors] = useState<InputErrorTypes[]>();

    useEffect(() => {
        schema
            .validate(values, { abortEarly: false })
            .then(() => setCurrentErrors([]))
            .catch((errors) => {
                setCurrentErrors(
                    errors.inner.map((error: ValidationError) => {
                        return { name: error.path, message: error.message };
                    })
                );
            });
    }, [values]);

    const handleChange = ({ name, value }: { name: string; value: string }): void => {
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleBlur = ({ name }: { name: string }): void => {
        setTouched({
            ...touched,
            [name]: true
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if (schema.isValidSync(values)) {
            console.log("Message sent", values);
            setValues(initialStateValues);
            setTouched(initialStateTouched(false));
            setMessageSent(true);
        } else {
            setMessageSent(false);
            setTouched(initialStateTouched(true));
        }
    };

    const renderError = (field: string): boolean | React.ReactNode => {
        if (currentErrors) {
            const error = currentErrors.filter((error) => error.name === field);
            return error.length > 0 && <InputError>{error[0].message}</InputError>;
        }

        return false;
    };

    const renderInputs = ({ name, label, type }: InputTypes): React.ReactNode => {
        return (
            <React.Fragment>
                <Input
                    name={name}
                    label={label}
                    type={type}
                    value={values[name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched[name] && renderError(name)}
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit}>
                {messageSent && <Success>Your message has been successfully sent.</Success>}
                {renderInputs({ name: "firstName", label: "First name" })}
                {renderInputs({ name: "lastName", label: "Last name" })}
                {renderInputs({ name: "email", label: "Email", type: "email" })}
                {renderInputs({ name: "subject", label: "Subject" })}
                {renderInputs({ name: "message", label: "Message", type: "textarea" })}
                <Button>Send Message</Button>
            </Form>
        </React.Fragment>
    );
};

export default Contact;
