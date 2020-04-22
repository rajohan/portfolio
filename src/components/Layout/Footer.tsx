import React from "react";
import moment from "moment";
import styled from "styled-components";

import Link from "../Shared/Link";

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    background-color: ${(props): string => props.theme.colors.secondary};
    border-top: 1px solid ${(props): string => props.theme.colors.primaryLight};

    small {
        font-size: 14px;
        text-align: center;

        &:last-of-type {
            margin-top: 5px;
        }
    }
`;

const Footer: React.FC = (): React.ReactElement => {
    const currentYear = moment().year();
    const yearDiff = moment([currentYear]).diff([2020], "years");
    const copyrightYears = yearDiff > 0 ? `2020 - ${currentYear}` : "2020";

    return (
        <StyledFooter>
            <small>Website created by Raymond Johannessen</small>
            <small>
                Copyright &copy; {copyrightYears} <Link href="/">Rajohan.no</Link>
            </small>
        </StyledFooter>
    );
};

export default Footer;
