import React from "react";

import Layout from "../components/Layout/Layout";
import LightContainer from "../components/Layout/Containers/LightContainer";
import Container400 from "../components/Layout/Containers/Container400";
import Heading from "../components/Shared/Heading";
import ContactComponent from "../components/Contact/Contact";

const Contact: React.FC = (): React.ReactElement => {
    return (
        <Layout pageTitle="Contact">
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

export default Contact;
