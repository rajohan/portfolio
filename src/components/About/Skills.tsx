import React from "react";
import styled from "styled-components";

const StyledSkills = styled.ul`
    display: grid;
    grid-template-columns: 100%;
    grid-row-gap: 20px;
    padding: 20px 10px 0 10px;
    width: 100%;

    @media only screen and (min-width: 650px) {
        grid-template-columns: calc(50% - 15px) calc(50% - 15px);
        grid-column-gap: 30px;

        padding: 20px 40px 0 40px;
    }
`;

const Skill = styled.li<{ progress: number }>`
    position: relative;
    width: 100%;
    
    &::before {
        content: "${(props): number => props.progress}%";
        position: absolute;
        font-size: 11px;
        padding: 2px 5px;
        top: 0;
        right: 0;
        border-radius: 2px;
        background-color: ${(props): string => props.theme.colors.primaryLight};
    }
    
    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 25px;
        margin-top: 5px;
        border-radius: 2px;
        
        background: linear-gradient(
            90deg,
            ${(props): string => props.theme.colors.tertiary} 0%,
            ${(props): string => props.theme.colors.tertiary} ${(props): number => props.progress}%,
            ${(props): string => props.theme.colors.primaryLight} ${(props): number => props.progress}%,
            ${(props): string => props.theme.colors.primaryLight} 100%
        );
    }
`;

const Skills: React.FC = (): React.ReactElement => {
    return (
        <StyledSkills>
            <Skill progress={95}>HTML</Skill>
            <Skill progress={90}>CSS</Skill>
            <Skill progress={85}>JavaScript</Skill>
            <Skill progress={60}>TypeScript</Skill>
            <Skill progress={80}>React</Skill>
            <Skill progress={30}>Vue</Skill>
            <Skill progress={60}>Node.js</Skill>
            <Skill progress={75}>PHP</Skill>
            <Skill progress={55}>GraphQL</Skill>
            <Skill progress={60}>SQL / NoSQL</Skill>
        </StyledSkills>
    );
};

export default Skills;
