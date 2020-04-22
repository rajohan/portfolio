import React from "react";
import styled from "styled-components";

const StyledLightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;
    width: 100%;
    background-color: ${(props): string => props.theme.colors.primary};
`;

type Props = {
    children: React.ReactNode;
    className?: string;
};

const LightContainer: React.FC<Props> = (props: React.PropsWithChildren<Props>): React.ReactElement => {
    const { children, className } = props;

    return <StyledLightContainer className={className}>{children}</StyledLightContainer>;
};

export default LightContainer;
