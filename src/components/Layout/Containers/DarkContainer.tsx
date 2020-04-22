import React from "react";
import styled from "styled-components";

import LightContainer from "./LightContainer";

const StyledDarkContainer = styled(LightContainer)`
    background-color: ${(props): string => props.theme.colors.secondary};
`;

type Props = {
    children: React.ReactNode;
    className?: string;
};

const DarkContainer: React.FC<Props> = (props: React.PropsWithChildren<Props>): React.ReactElement => {
    const { children, className } = props;

    return <StyledDarkContainer className={className}>{children}</StyledDarkContainer>;
};

export default DarkContainer;
