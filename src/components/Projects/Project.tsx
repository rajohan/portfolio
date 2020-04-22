import React, { useEffect, useRef, useState } from "react";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import styled from "styled-components";
import { Close } from "@material-ui/icons";

import Link from "../Shared/Link";
import Button from "../Shared/Button";
import Heading from "../Shared/Heading";

const StyledProject = styled.div`
    background-color: ${(props): string => props.theme.colors.primaryLight};
    text-align: center;
    border-radius: 2px;

    .projectPreview {
        cursor: pointer;

        &:hover {
            img {
                width: 100%;
                height: auto;
                opacity: 0.7;
            }
        }

        img {
            transition: opacity 0.3s;
        }

        h1 {
            font-size: 18px;
            letter-spacing: 2px;
            padding: 10px 10px;
            margin: 0;
        }

        a {
            margin: 10px 10px;
        }
    }

    .modalWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10000;
        background-color: rgba(0, 0, 0, 0.8);
        width: 100vw;
        height: 100vh;
    }

    .modalContent {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        padding: 15px;
        width: 100%;
        max-width: 800px;
        margin: 30px;
        background-color: ${(props): string => props.theme.colors.primaryLight};
        max-height: 100vh;
        overflow: auto;
        border-radius: 2px;

        svg {
            width: 24px;
            height: 24px;
            position: absolute;
            top: 15px;
            right: 15px;
            cursor: pointer;
            fill: ${(props): string => props.theme.colors.text};
            transition: fill 0.3s;

            &:hover {
                fill: ${(props): string => props.theme.colors.error};
            }
        }

        h1 {
            font-size: 18px;
            margin-bottom: 15px;
            padding: 0 30px;
            text-align: center;
            width: 100%;
        }

        h2 {
            font-size: 16px;
            display: inline-block;
            margin-right: 5px;
        }

        .projectDescription {
            margin-top: 15px;
        }

        img {
            width: 100%;
            height: auto;
            margin-bottom: 15px;
        }

        span {
            margin-bottom: 15px;
            text-align: left;
        }

        p {
            padding: 0;
            margin: 15px 0;
            text-align: left;
        }

        a {
            align-self: center;
            margin: 15px;
        }
    }
`;

type Props = {
    project: {
        name: string;
        image: { src: string; srcSet: string };
        date: string;
        client: string;
        technologies: string[];
        description: string;
        link: string;
    };
};

const Project: React.FC<Props> = ({ project }: React.PropsWithChildren<Props>): React.ReactElement => {
    const [isHidden, setIsHidden] = useState(true);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        isHidden
            ? modalRef.current && enableBodyScroll(modalRef.current)
            : modalRef.current && disableBodyScroll(modalRef.current);

        return (): void => {
            clearAllBodyScrollLocks();
        };
    }, [isHidden]);

    return (
        <StyledProject>
            <div className="projectPreview" onClick={(): void => setIsHidden(false)}>
                <Heading size="h1">{project.name}</Heading>
                <img src={project.image.src} srcSet={project.image.srcSet} alt={project.name} />
                <Link onClick={(): void => setIsHidden(false)}>View Details</Link>
                {" - "}
                <Link href={project.link} target="_blank" external onClick={(e): void => e.stopPropagation()}>
                    View Website
                </Link>
            </div>
            {!isHidden && (
                <div className="modalWrapper" onClick={(): void => setIsHidden(true)}>
                    <div className="modalContent" ref={modalRef} onClick={(e): void => e.stopPropagation()}>
                        <Close onClick={(): void => setIsHidden(true)} />
                        <h1>{project.name}</h1>
                        <img src={project.image.src} srcSet={project.image.srcSet} alt={project.name} />
                        <span>
                            <h2>Date:</h2>
                            {project.date}
                        </span>
                        <span>
                            <h2>Client:</h2>
                            {project.client}
                        </span>
                        <span>
                            <h2>Technologies:</h2>
                            {project.technologies.map((technology, index) =>
                                index === project.technologies.length - 1 ? technology : `${technology}, `
                            )}
                        </span>
                        <h2 className="projectDescription">Description</h2>
                        <p>{project.description}</p>
                        <Button href={project.link} target="_blank" external>
                            View Website
                        </Button>
                    </div>
                </div>
            )}
        </StyledProject>
    );
};

export default Project;
