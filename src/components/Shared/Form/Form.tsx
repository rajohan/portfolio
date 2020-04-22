import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 30px;

    div {
        margin-bottom: 10px;
    }

    button {
        margin-top: 20px;
    }
`;

type Props = {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
};

const Form: React.FC<Props> = ({ onSubmit, children }: React.PropsWithChildren<Props>): React.ReactElement => {
    return (
        <StyledForm onSubmit={onSubmit} method="POST" noValidate={true}>
            {children}
        </StyledForm>
    );
};

export default Form;
