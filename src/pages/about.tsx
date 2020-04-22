import React from "react";

import Layout from "../components/Layout/Layout";
import LightContainer from "../components/Layout/Containers/LightContainer";
import DarkContainer from "../components/Layout/Containers/DarkContainer";
import Container800 from "../components/Layout/Containers/Container800";
import Heading from "../components/Shared/Heading";
import AboutComponent from "../components/About/About";
import Timeline from "../components/About/Timeline";
import Skills from "../components/About/Skills";

const About: React.FC = (): React.ReactElement => {
    return (
        <Layout pageTitle="About">
            <LightContainer>
                <Container800>
                    <Heading size="h1">About Me</Heading>
                    <Heading size="h2">Web Developer & Tech Enthusiast</Heading>
                    <AboutComponent />
                </Container800>
            </LightContainer>
            <DarkContainer>
                <Container800>
                    <Heading size="h1">Education & Work</Heading>
                    <Heading size="h2">A Timeline With My Education And Work</Heading>
                    <Timeline />
                </Container800>
            </DarkContainer>
            <LightContainer>
                <Container800>
                    <Heading size="h1">Skills</Heading>
                    <Heading size="h2">My Programming Skills</Heading>
                    <Skills />
                </Container800>
            </LightContainer>
        </Layout>
    );
};

export default About;
