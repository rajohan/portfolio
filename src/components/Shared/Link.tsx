import React, { PropsWithChildren } from "react";
import NextLink from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
    display: inline-block;
    outline: none;
    position: relative;
    font-weight: 300;
    font-style: italic;
    white-space: nowrap;

    &::after {
        right: 0;
    }

    &::before,
    &::after {
        content: "";
        border-bottom: 1px solid ${(props): string => props.theme.colors.tertiary};
        position: absolute;
        bottom: 0;
        width: 0;
        transition: width 0.2s linear;
    }

    &:focus,
    &:hover {
        color: ${(props): string => props.theme.colors.tertiary};
        transition: color 0.2s, transform 0.2s;
        transform: translateY(-2px);

        &::before,
        &::after {
            width: 50%;
        }
    }

    &:active {
        transform: translateY(0);
    }
`;

type Props = {
    href?: string;
    className?: string;
    external?: boolean;
    target?: "_blank";
    onClick?: (e: React.MouseEvent) => void;
};

const Link: React.FC<Props> = (props: PropsWithChildren<Props>): React.ReactElement => {
    const { href, external = false, target, children, className, onClick } = props;

    if (!href) {
        return <StyledLink onClick={onClick}>{children}</StyledLink>;
    }

    return external ? (
        <StyledLink
            href={href}
            target={target}
            rel={target && "noopener noreferrer"}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>): void => {
                e.currentTarget.blur();
                onClick && onClick(e);
            }}
            className={className}
        >
            {children}
        </StyledLink>
    ) : (
        <NextLink href={href} passHref>
            <StyledLink
                className={className}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>): void => {
                    e.currentTarget.blur();
                    onClick && onClick(e);
                }}
            >
                {children}
            </StyledLink>
        </NextLink>
    );
};

export default Link;
