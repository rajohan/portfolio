import React from "react";

import Layout from "../components/Layout/Layout";
import LightContainer from "../components/Layout/Containers/LightContainer";
import Heading from "../components/Shared/Heading";
import Projects from "../components/Projects/Projects";

const Work: React.FC = (): React.ReactElement => {
    return (
        <Layout pageTitle="My Work">
            <LightContainer>
                <Heading size="h1">My Work</Heading>
                <Heading size="h2">Check Out My Previous Work</Heading>
                <Projects />
            </LightContainer>
        </Layout>
    );
};

export default Work;
