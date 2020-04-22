import React from "react";
import styled from "styled-components";
import { Facebook, LinkedIn, Twitter, GitHub } from "@material-ui/icons";

const StyledSocial = styled.div`
    display: flex;
    align-items: center;
    background-color: ${(props): string => props.theme.colors.primaryLight};
    padding: 5px 5px 0 5px;
    margin-bottom: 30px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    z-index: 100;
    filter: ${(props): string => props.theme.dropShadows.small};

    @media only screen and (min-width: 900px) {
        flex-direction: column;
        position: fixed;
        right: 0;
        top: 150px;
        padding: 5px;
        margin-bottom: 0;
    }

    a {
        position: relative;
        cursor: pointer;
        transition: opacity 0.2s;
        margin-bottom: 5px;
        margin-right: 5px;

        @media only screen and (min-width: 900px) {
            margin-right: 0;
        }

        &:hover {
            opacity: 0.6;
        }

        &.facebook svg,
        &.linkedIn svg {
            width: 40px;
            height: 40px;
            position: relative;
            filter: ${(props): string => props.theme.dropShadows.small};
        }

        &.facebook svg {
            fill: #4267b2;
        }

        &.linkedIn svg {
            fill: #2867b2;
        }

        &.linkedIn::before,
        &.facebook::before {
            content: "";
            background-color: #ffffff;
            position: absolute;
            width: calc(100% - 15px);
            height: calc(100% - 12px);
            top: 7px;
            left: 8px;
            border-radius: 4px;
        }

        &.twitter {
            width: 30px;
            height: 30px;
            background-color: #1da1f2;
            border-radius: 4px;
            filter: ${(props): string => props.theme.dropShadows.small};

            svg {
                width: 30px;
                height: 30px;
                filter: ${(props): string => props.theme.dropShadows.small};
            }
        }

        &.gitHub {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            background-color: #24292e;
            border-radius: 4px;
            filter: ${(props): string => props.theme.dropShadows.small};

            svg {
                width: 24px;
                height: 24px;
                filter: ${(props): string => props.theme.dropShadows.small};
            }
        }
    }
`;

const Social: React.FC = (): React.ReactElement => {
    return (
        <StyledSocial>
            <a
                className="facebook"
                href="https://www.facebook.com/raymond.johannessen.5"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Facebook />
            </a>
            <a className="twitter" href="https://twitter.com/Rajohan" target="_blank" rel="noopener noreferrer">
                <Twitter />
            </a>
            <a
                className="linkedIn"
                href="https://www.linkedin.com/in/rajohan/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinkedIn />
            </a>
            <a className="gitHub" href="https://github.com/rajohan" target="_blank" rel="noopener noreferrer">
                <GitHub />
            </a>
        </StyledSocial>
    );
};

export default Social;
