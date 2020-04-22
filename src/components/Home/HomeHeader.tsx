import React from "react";
import styled from "styled-components";
import Heading from "../Shared/Heading";
import Button from "../Shared/Button";

const background = require("../../assets/img/headerHome.jpg?resize&sizes[]=375&sizes[]=768&sizes[]=1024&sizes[]=1366&sizes[]=1920&sizes[]=4288");
const backgroundSets = background.srcSet.split(",").map((src: string) => src.split(" ")[0]);

const StyledHomeHeader = styled.div`
    background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
        url(${backgroundSets[0]});

    @media only screen and (min-width: 376px) {
        background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
            url(${backgroundSets[1]});
    }

    @media only screen and (min-width: 769px) {
        background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
            url(${backgroundSets[2]});
    }

    @media only screen and (min-width: 1025px) {
        background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
            url(${backgroundSets[3]});
    }

    @media only screen and (min-width: 1367px) {
        background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
            url(${backgroundSets[4]});
    }

    @media only screen and (min-width: 1921px) {
        background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
            url(${backgroundSets[5]});
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 40%;
    width: 100vw;
    max-width: 100%;
    padding: 30px;
    border-bottom: 1px solid ${(props): string => props.theme.colors.primaryLight};

    @media only screen and (min-width: 350px) {
        padding: 50px 30px;
    }

    @media only screen and (min-width: 750px) {
        padding: 100px 30px;
    }

    div:first-of-type {
        max-width: 500px;
    }

    div:last-of-type {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 30px;

        @media only screen and (min-width: 350px) {
            margin-top: 50px;
        }

        @media only screen and (min-width: 750px) {
            margin-top: 100px;
        }

        span {
            display: flex;
            flex-direction: column;

            @media only screen and (min-width: 750px) {
                flex-direction: row;
            }

            a {
                margin: 15px 15px 0 15px;

                @media only screen and (min-width: 750px) {
                    margin: 30px 15px 0 15px;
                }
            }
        }
    }
`;

const HomeHeader: React.FC = (): React.ReactElement => {
    return (
        <StyledHomeHeader>
            <div>
                <Heading size="h1">Hi, I&apos;m Raymond</Heading>
                <Heading size="h2">Web Developer & Tech Enthusiast</Heading>
            </div>
            <div>
                <Heading size="h3">Need A Website?</Heading>
                <span>
                    <Button href="/work">Check my work</Button>
                    <Button href="/services">Check my services</Button>
                    <Button href="/contact">Contact me</Button>
                </span>
            </div>
        </StyledHomeHeader>
    );
};

export default HomeHeader;
