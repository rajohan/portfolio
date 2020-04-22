import React from "react";
import styled from "styled-components";

import { projects } from "./projectData";
import Project from "./Project";

const StyledProjects = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 330px));
    width: 100%;
    max-width: 1100px;
    margin-top: 30px;
    justify-content: center;
`;

const Projects: React.FC = (): React.ReactElement => {
    const renderProjects = (): React.ReactNode => {
        return projects.map((project) => <Project key={`project-${project.name}`} project={project} />);
    };

    return <StyledProjects>{renderProjects()}</StyledProjects>;
};

export default Projects;
