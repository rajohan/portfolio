import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
`;

type Props = {
    children: React.ReactNode;
};

const Main: React.FC<Props> = ({ children }: React.PropsWithChildren<Props>): React.ReactElement => {
    return <StyledMain>{children}</StyledMain>;
};

export default Main;
