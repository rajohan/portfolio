import React from "react";
import styled from "styled-components";

const StyledTimeline = styled.ul`
    position: relative;
    padding: 10px 10px 10px 50px;
    width: 100%;
    margin-top: 30px;

    @media only screen and (min-width: 650px) {
        padding: 0;
    }

    &::before {
        content: "";
        position: absolute;
        width: 5px;
        background-color: ${(props): string => props.theme.colors.tertiary};
        top: 0;
        bottom: 0;
        left: 15px;

        @media only screen and (min-width: 650px) {
            left: 50%;
        }
    }

    li {
        padding: 10px 0;
        position: relative;

        @media only screen and (min-width: 650px) {
            padding: 10px 40px;
            width: 50%;
            left: 0;

            &.right {
                left: 50%;
            }
        }

        div {
            display: flex;
            flex-direction: column;
            position: relative;
            background-color: ${(props): string => props.theme.colors.primaryLight};
            padding: 10px 20px;
            border-radius: 2px;

            span:first-of-type {
                font-weight: 700;
                padding-bottom: 10px;
                color: ${(props): string => props.theme.colors.tertiary};
            }

            @media only screen and (min-width: 650px) {
                &::after {
                    content: "";
                    width: 100%;
                    position: absolute;
                    left: calc(100% + 80px);
                    top: 0;
                    bottom: 0;
                    opacity: 0.5;
                    background: repeating-linear-gradient(
                        135deg,
                        transparent 0,
                        ${(props): string => props.theme.colors.tertiary} 1px,
                        ${(props): string => props.theme.colors.tertiary} 3px,
                        transparent 4px,
                        transparent 9px
                    );
                }
            }
        }

        @media only screen and (min-width: 650px) {
            &.right div::after {
                left: auto;
                right: calc(100% + 80px);
            }
        }

        &::before {
            content: "";
            position: absolute;
            top: 20px;
            left: -10px;
            border: 10px solid transparent;
            border-right-color: ${(props): string => props.theme.colors.primaryLight};
            border-left: 0;

            @media only screen and (min-width: 650px) {
                left: auto;
                right: 30px;
                border-right: 0;
                border-left: 10px solid ${(props): string => props.theme.colors.primaryLight};
            }
        }

        @media only screen and (min-width: 650px) {
            &.right::before {
                right: auto;
                left: 30px;
                border-left: 0;
                border-right: 10px solid ${(props): string => props.theme.colors.primaryLight};
            }
        }

        &::after {
            content: "";
            position: absolute;
            background-color: ${(props): string => props.theme.colors.secondary};
            border: 4px solid ${(props): string => props.theme.colors.tertiary};
            width: 17px;
            height: 17px;
            border-radius: 40px;
            left: -41px;
            top: 21px;

            @media only screen and (min-width: 650px) {
                left: auto;
                right: -11px;
            }
        }

        @media only screen and (min-width: 650px) {
            &.right::after {
                right: auto;
                left: -6px;
            }
        }
    }
`;

const timelineItems = [
    { year: "1995 - 2002", description: "Spydeberg primary school." },
    { year: "2002 - 2005", description: "Spydeberg youth school." },
    { year: "2005 - 2006", description: "Askim high school. Basic course electro." },
    { year: "2006 - 2007", description: "Askim high school. Intermediate course electro." },
    { year: "2007 - 2012", description: "Siemens/Bravida as an electrician." },
    { year: "2012 - 2015", description: "Bravida Oil & Energy as an electrician." },
    { year: "2015 - 2018", description: "Ski Elektriske AS as an electrician." },
    { year: "2018 - 2020", description: "Noroff frontend development study." }
];

const Timeline: React.FC = (): React.ReactElement => {
    const renderTimelineItems = (): React.ReactNode => {
        return timelineItems.map((item, index) => (
            <li key={`timelineItem-${index}`} className={index % 2 !== 0 ? "right" : ""}>
                <div>
                    <span>{item.year}</span>
                    <span>{item.description}</span>
                </div>
            </li>
        ));
    };

    return <StyledTimeline>{renderTimelineItems()}</StyledTimeline>;
};

export default Timeline;
