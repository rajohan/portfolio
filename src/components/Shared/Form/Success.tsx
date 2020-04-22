import React from "react";
import styled from "styled-components";

const StyledSuccess = styled.div`
    background-color: ${(props): string => props.theme.colors.success};
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 13px;
    width: 100%;
    text-align: center;
    animation: fadeIn 1s;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

type Props = {
    children: React.ReactNode;
};

const Success: React.FC<Props> = ({ children }: React.PropsWithChildren<Props>): React.ReactElement => {
    return <StyledSuccess>{children}</StyledSuccess>;
};

export default Success;
