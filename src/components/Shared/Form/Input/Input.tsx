import React from "react";
import styled from "styled-components";

import { InputTypes } from "./types";

const StyledInput = styled.div<{ value: string }>`
    position: relative;
    border-bottom: 3px solid transparent;
    transition: border 0.2s;
    width: 100%;

    &.focus-within {
        border-color: ${(props): string => props.theme.colors.tertiary};

        label {
            transform: translateY(4px);
            font-size: 13px;
            font-weight: 700;
            color: ${(props): string => props.theme.colors.tertiary};
        }
    }

    :focus-within {
        border-color: ${(props): string => props.theme.colors.tertiary};

        label {
            transform: translateY(4px);
            font-size: 13px;
            font-weight: 700;
            color: ${(props): string => props.theme.colors.tertiary};
        }
    }

    label {
        position: absolute;
        user-select: none;
        cursor: text;
        top: 0;
        left: 10px;
        color: ${(props): string => props.theme.colors.text};
        font-size: ${(props): string => (props.value ? "13px" : "inherit")};
        font-weight: ${(props): number => (props.value ? 700 : 400)};
        transform: translateY(${(props): string => (props.value ? "4px" : "calc(50% + 5px)")});
        transition: transform 0.2s, font-size 0.2s, color 0.2s;
    }

    input,
    textarea {
        background-color: ${(props): string => props.theme.colors.primaryLight};
        color: ${(props): string => props.theme.colors.text};
        padding: 0 10px;
        border-radius: 2px;
        outline: none;
        border: none;
        width: 100%;
    }

    input {
        height: 50px;
        padding-top: ${(props): string => (props.value ? "15px" : "0")};

        &:focus {
            padding-top: 15px;
        }
    }

    textarea {
        min-height: 170px;
        padding-top: ${(props): string => (props.value ? "25px" : "0")};

        &:focus {
            padding-top: 25px;
        }
    }

    // Remove autofill color in chrome and edge
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        -webkit-text-fill-color: ${(props): string => props.theme.colors.text};
        box-shadow: 0 0 0 30px ${(props): string => props.theme.colors.primaryLight} inset;
        caret-color: ${(props): string => props.theme.colors.text};
        padding-top: 15px;
        border: 2px solid ${(props): string => props.theme.colors.primaryLight};

        + label {
            transform: translateY(4px);
            font-size: 13px;
            font-weight: 700;
            color: ${(props): string => props.theme.colors.tertiary};
        }
    }
`;

const Input: React.FC<InputTypes> = (props: React.PropsWithChildren<InputTypes>): React.ReactElement => {
    const { name = "", type = "text", value = "", label, onChange, onBlur } = props;

    return (
        <StyledInput value={value}>
            {type === "textarea" ? (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={(e): void => onChange && onChange({ name, value: e.target.value })}
                    onBlur={(): void => onBlur && onBlur({ name, value })}
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={(e): void => onChange && onChange({ name, value: e.target.value })}
                    onBlur={(): void => onBlur && onBlur({ name, value: value })}
                />
            )}
            {label && <label htmlFor={name}>{label}</label>}
        </StyledInput>
    );
};

export default Input;
