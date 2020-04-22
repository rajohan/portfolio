import React from "react";

import Layout from "../components/Layout/Layout";
import LightContainer from "../components/Layout/Containers/LightContainer";
import DarkContainer from "../components/Layout/Containers/DarkContainer";
import Container400 from "../components/Layout/Containers/Container400";
import Container800 from "../components/Layout/Containers/Container800";
import Heading from "../components/Shared/Heading";
import Overview from "../components/Services/Overview";
import NewWebsite from "../components/Services/NewWebsite";
import Hosting from "../components/Services/Hosting";
import Backup from "../components/Services/Backup";
import Seo from "../components/Services/Seo";
import WebsitePrice from "../components/Services/WebsitePrice";
import ContactComponent from "../components/Contact/Contact";

const Services: React.FC = (): React.ReactElement => {
    return (
        <Layout pageTitle="Services">
            <LightContainer>
                <Heading size="h1">Services</Heading>
                <Heading size="h2">An Overview Of My Services</Heading>
                <Overview />
            </LightContainer>
            <DarkContainer>
                <Container800>
                    <Heading size="h1">Develop New Website</Heading>
                    <Heading size="h2">First Impressions Matter. Get A New Website</Heading>
                    <NewWebsite />
                </Container800>
            </DarkContainer>
            <LightContainer>
                <Container800>
                    <Heading size="h1">Hosting of a website</Heading>
                    <Heading size="h2">High performance SSD Linux web server</Heading>
                    <Hosting />
                </Container800>
            </LightContainer>
            <DarkContainer>
                <Container800>
                    <Heading size="h1">Backup</Heading>
                    <Heading size="h2">I Will Keep Your Data Safe</Heading>
                    <Backup />
                </Container800>
            </DarkContainer>
            <LightContainer>
                <Container800>
                    <Heading size="h1">Search engine optimization</Heading>
                    <Heading size="h2">Get the highest possible ranking in search engines</Heading>
                    <Seo />
                </Container800>
            </LightContainer>
            <DarkContainer>
                <Container800>
                    <Heading size="h1">What does a website cost?</Heading>
                    <Heading size="h2">A list of things that must be done to get you the best possible website</Heading>
                    <WebsitePrice />
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

export default Services;
