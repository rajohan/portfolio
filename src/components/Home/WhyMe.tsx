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
                There are many benefits to working with a freelance web developer. You will only have one person
                communicating with you, that means less communication delays which often will happen with larger
                companies.
            </p>
            <p>
                As a freelancer I have an unfair advantage over companies when it comes to the prices. While they need
                to pay for their office, their staff, their advertising and many other business expenses. I don&apos;t.
                Which means I can afford to be cheaper. By choosing me, you can get an amazing website for less money.
            </p>
            <p>
                I can complete your project fast and often in less time than a company can. Most companies can take
                months to build a website for you. In that time you are missing out on visitors and people needing your
                services. Dont let the competitors steal your visitors.
            </p>
        </StyledWhyMe>
    );
};

export default WhyMe;
