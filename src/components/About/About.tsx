import React from "react";
import styled from "styled-components";
import moment from "moment";

const imageMe = require("../../assets/img/me.jpg?resize&sizes[]=120&sizes[]=240&sizes[]=360&sizes[]=480");

const StyledAbout = styled.div`
    figure {
        padding: 30px 30px 0 30px;
        text-align: center;

        @media only screen and (min-width: 700px) {
            float: left;
            padding-top: 35px;
        }

        img {
            display: inline-block;
            width: 120px;
            height: 100%;
            border-radius: 5px;
        }

        figcaption {
            margin: 3px 0 10px 0;
            font-size: 13px;
            color: ${(props): string => props.theme.colors.tertiary};
        }
    }
`;

const About: React.FC = (): React.ReactElement => {
    const today = moment();
    const age = today.diff([1989, 2, 29], "years");

    return (
        <StyledAbout>
            <figure>
                <img srcSet={imageMe.srcSet} src={imageMe.src} alt="me" />
                <figcaption>Age: {age} (29.03.1989)</figcaption>
            </figure>
            <p>
                Hello! My name is Raymond, and I am a Norwegian-based web developer. I have an education as an
                electrician but, I decided to leave that behind and go back to school at Noroff to take a 2 year
                frontend developer course as web development and technology is my passion.
            </p>
            <p>
                I have been very interested in data and electronics ever since I was a young kid. We got the first
                computer at home when I was around 10-11 years old and I bought my first own computer when I was 13.
                Ever since then I have spent a lot of time on my pc. I started with programming around 2004 and have
                self-taught that on and off since then.
            </p>
            <p>
                I am working remotely on projects for clients all over the world and have a diverse set of skills.
                Ranging from design to HTML, CSS/SASS and Javascript/React/Node.js. All the way to PHP and custom CMS
                systems and Linux server administration.
            </p>
            <p>
                I provide a single source high quality solution to enforce your business existence online. My services
                include web development, programming, content development and web hosting. From simple one page
                websites, all the way to custom built content management systems from scratch.
            </p>
        </StyledAbout>
    );
};
export default About;
