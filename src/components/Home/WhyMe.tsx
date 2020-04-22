import React from "react";
import styled from "styled-components";

const StyledWhyMe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        margin-top: 30px;
    }
`;

const WhyMe: React.FC = (): React.ReactElement => {
    return (
        <StyledWhyMe>
            <p>
                There are many benefits to working with a freelance web developer. When I work on a project, I will be
                the main point of contact at all times avoiding any communication delays that might occur with larger
                companies.
            </p>
            <p>
                I have an unfair advantage over most of the competition when it comes to prices. While they need to pay
                for their office, their staff, their advertising and many other business expenses. I don&apos;t. Which
                means you avoid paying large overheads. By choosing me, you can be sure that you only pay for your
                website, and not the company picnic.
            </p>
            <p>
                I can complete your project at a rapid pace in less time than the typical bureaucratic company can. Most
                design agencies can take months to build a website for you. Meanwhile, you are missing out on customer
                orders, website traffic, search engine indexing, and greater visibility on the web from social media
                links to your website.
            </p>
        </StyledWhyMe>
    );
};

export default WhyMe;
