import React from "react";
import { Code, Language, Web } from "@material-ui/icons";
import styled from "styled-components";
import Heading from "../Shared/Heading";

const StyledOverview = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 30px;
    max-width: 500px;
    width: 100%;
    margin-top: 30px;
    justify-content: center;

    @media only screen and (min-width: 950px) {
        max-width: 100%;
        grid-template-columns: repeat(auto-fit, minmax(275px, 275px));
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background-color: ${(props): string => props.theme.colors.primaryLight};
        padding: 20px 10px;
        border-radius: 3px;
        width: 100%;
        max-width: 500px;

        svg {
            width: 50px;
            height: 50px;
            fill: ${(props): string => props.theme.colors.tertiary};
            filter: ${(props): string => props.theme.dropShadows.small};
        }

        h3 {
            margin: 10px 0 15px 0;
            font-size: 16px;
            color: ${(props): string => props.theme.colors.white};
        }

        p {
            margin: 0 10px;
        }
    }
`;

const Overview: React.FC = (): React.ReactElement => {
    return (
        <StyledOverview>
            <div>
                <Web />
                <Heading size="h3">Web design</Heading>
                <p>
                    The design of a website is important because it affects how quickly visitors can find what they are
                    looking for. If it is difficult or frustrating, the visitor will leave and try on another site and
                    that is a lost opportunity.
                </p>
            </div>
            <div>
                <Code />
                <Heading size="h3">Website Development</Heading>
                <p>
                    Website development is a way to make people aware of your business, understand why your products are
                    relevant, and see which of your company qualities that set it apart from the competitors.
                </p>
            </div>
            <div>
                <Language />
                <Heading size="h3">Search engine optimization</Heading>
                <p>
                    In today&apos;s competitive market, SEO is more important than ever. Search engines serve millions
                    of users per day looking for answers or solutions to their problems. SEO can help your business grow
                    and meet the business goals.
                </p>
            </div>
        </StyledOverview>
    );
};

export default Overview;
