import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { HomeRounded, Person, SettingsApplications, Work, Mail } from "@material-ui/icons";

import Link from "../../Shared/Link";

const StyledLink = styled(Link)<{ active: boolean; expanded: boolean }>`
    display: flex;
    align-items: center;
    width: 100%;
    font-weight: 400;
    font-style: normal;
    padding: ${(props): string => (props.expanded ? "9px 15px" : "0")};
    opacity: ${(props): string => (props.expanded ? "1" : "0")};
    filter: ${(props): string => props.theme.dropShadows.small};
    line-height: ${(props): string => (props.expanded ? "inherit" : "0")};
    color: ${(props): string => (props.active ? props.theme.colors.tertiary : props.theme.colors.link)};
    transition: padding 0.3s, line-height 0.3s, opacity 0.2s;
    transition-timing-function: linear;

    @media only screen and (max-width: 749px) {
        &:focus,
        &:hover {
            transform: none;
        }

        &::before,
        &::after {
            border: none;
        }
    }

    @media only screen and (min-width: 750px) {
        line-height: inherit;
        padding: 3px 0;
        margin: 5px 15px;
        opacity: 1;
    }

    svg {
        width: ${(props): string => (props.expanded ? "24px" : "0")};
        height: ${(props): string => (props.expanded ? "24px" : "0")};
        margin-right: 5px;
        transition: height 0.3s, width 0.3s;
        transition-timing-function: linear;

        @media only screen and (min-width: 750px) {
            width: 24px;
            height: 24px;
        }
    }
`;

const StyledNavigation = styled.nav<{ expanded: boolean }>`
    display: flex;
    align-items: center;
    user-select: none;
    z-index: 100;

    .navOpenClose {
        cursor: pointer;
        display: flex;
        align-items: center;
        width: 30px;
        height: 30px;
        outline: none;
        margin-right: 20px;

        @media only screen and (min-width: 750px) {
            display: none;
        }

        &:hover {
            span {
                background-color: ${(props): string => (props.expanded ? "transparent" : props.theme.colors.tertiary)};
            }

            span::before,
            span::after {
                background-color: ${(props): string => props.theme.colors.tertiary};
            }

            span::before {
                top: ${(props): string => (!props.expanded ? "-9px;" : "0")};
            }

            span::after {
                top: ${(props): string => (!props.expanded ? "9px;" : "0")};
            }
        }

        span,
        span::before,
        span::after {
            display: inline-block;
            width: 30px;
            height: 2px;
        }

        span {
            position: relative;
            background-color: ${(props): string => (props.expanded ? "transparent" : props.theme.colors.text)};

            &::before,
            &::after {
                content: "";
                position: absolute;
                transition: transform 0.3s linear;
                background-color: ${(props): string => props.theme.colors.text};
            }

            &::before {
                transform: rotate(${(props): number => (props.expanded ? 135 : 0)}deg);
                top: ${(props): number => (props.expanded ? 0 : -8)}px;
            }

            &::after {
                transform: rotate(${(props): number => (props.expanded ? -135 : 0)}deg);
                top: ${(props): number => (props.expanded ? 0 : 8)}px;
            }
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        visibility: ${(props): string => (props.expanded ? "visible" : "hidden")};
        position: absolute;
        top: 100%;
        right: 0;
        width: 100%;
        background-color: ${(props): string => props.theme.colors.secondary};
        transition: visibility 0.3s linear;

        @media only screen and (min-width: 750px) {
            flex-direction: row;
            visibility: visible;
            position: relative;
            top: 0;
            width: auto;
            margin-right: 15px;
        }

        li {
            display: flex;
            transition: padding 0.3s linear;
            border-bottom: 1px solid ${(props): string => props.theme.colors.primaryLight};

            @media only screen and (min-width: 750px) {
                border: none;
                border-left: 1px solid ${(props): string => props.theme.colors.primaryLight};
            }

            &:first-of-type {
                border-top: 1px solid ${(props): string => props.theme.colors.primaryLight};

                @media only screen and (min-width: 750px) {
                    border: none;
                }
            }
        }
    }
`;

const Navigation: React.FC = (): React.ReactElement => {
    const [expanded, setExpanded] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const handleMouseDownOutsideComponent = (event: MouseEvent): void => {
        if (navRef.current) {
            !navRef.current.contains(event.target as Node) && setExpanded(false);
        }
    };

    // Close navigation menu on mouse click outside the component
    useEffect(() => {
        document.addEventListener("mousedown", handleMouseDownOutsideComponent);

        return (): void => {
            document.removeEventListener("mousedown", handleMouseDownOutsideComponent);
        };
    }, []);

    return (
        <StyledNavigation expanded={expanded} ref={navRef}>
            <div
                className="navOpenClose"
                onClick={(): void => setExpanded(!expanded)}
                role="button"
                aria-label="Main menu"
                aria-expanded={expanded}
                tabIndex={0}
            >
                <span />
            </div>
            <ul onClick={(): void => setExpanded(false)}>
                <li>
                    <StyledLink expanded={expanded} active={router.pathname === "/"} href="/">
                        <HomeRounded />
                        Home
                    </StyledLink>
                </li>
                <li>
                    <StyledLink expanded={expanded} active={router.pathname === "/about"} href="/about">
                        <Person />
                        About
                    </StyledLink>
                </li>
                <li>
                    <StyledLink expanded={expanded} active={router.pathname === "/services"} href="/services">
                        <SettingsApplications />
                        Services
                    </StyledLink>
                </li>
                <li>
                    <StyledLink expanded={expanded} active={router.pathname === "/work"} href="/work">
                        <Work />
                        My Work
                    </StyledLink>
                </li>
                <li>
                    <StyledLink expanded={expanded} active={router.pathname === "/contact"} href="/contact">
                        <Mail />
                        Contact
                    </StyledLink>
                </li>
            </ul>
        </StyledNavigation>
    );
};

export default Navigation;
