import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Navigation from "./Navigation";

const StyledHeader = styled.header`
    background-color: ${(props): string => props.theme.colors.secondary};
    border-bottom: 1px solid ${(props): string => props.theme.colors.primaryLight};
    position: relative;

    div {
        display: flex;
        justify-content: space-between;
    }
`;

const Header: React.FC = (): React.ReactElement => {
    return (
        <StyledHeader>
            <div>
                <Logo />
                <Navigation />
            </div>
        </StyledHeader>
    );
};

export default Header;
