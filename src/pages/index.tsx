import React from "react";

import Layout from "../components/Layout/Layout";
import LightContainer from "../components/Layout/Containers/LightContainer";
import DarkContainer from "../components/Layout/Containers/DarkContainer";
import Container400 from "../components/Layout/Containers/Container400";
import Container800 from "../components/Layout/Containers/Container800";
import Heading from "../components/Shared/Heading";
import HomeHeader from "../components/Home/HomeHeader";
import Overview from "../components/Services/Overview";
import WhyMe from "../components/Home/WhyMe";
import ContactComponent from "../components/Contact/Contact";

const Index: React.FC = (): React.ReactElement => {
    return (
        <Layout pageTitle="Home">
            <HomeHeader />
            <LightContainer>
                <Heading size="h1">Services</Heading>
                <Heading size="h2">An Overview Of My Services</Heading>
                <Overview />
            </LightContainer>
            <DarkContainer>
                <Container800>
                    <Heading size="h1">Why Choose Me?</Heading>
                    <Heading size="h2">I Create Amazing Websites for less money</Heading>
                    <WhyMe />
                </Container800>
            </DarkContainer>
            <LightContainer>
                <Container400>
                    <Heading size="h1">Contact Me</Heading>
                    <Heading size="h2">Get an answer within 24 hours</Heading>
                    <ContactComponent />
                </Container400>
            </LightContainer>
        </Layout>
    );
};

export default Index;
