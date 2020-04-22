import React from "react";
import NextHead from "next/head";

type Props = {
    children: React.ReactNode;
};

const Head: React.FC<Props> = ({ children }: React.PropsWithChildren<Props>): React.ReactElement => {
    return (
        <NextHead>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="index, follow" />
            <meta
                name="description"
                content="Freelance web developer building hi-end solutions, interactive experiences, website maintenance and security."
            />
            <meta
                name="keywords"
                content="Web Development, Web Developer, Web Design, Website, Programming, Coding, Frontend, Front-end, Freelancer"
            />
            <meta name="author" content="Raymond Johannessen, Raymond Johannessen Web Development" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />
            <link
                href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,300&display=swap"
                rel="stylesheet"
            />
            {children}
        </NextHead>
    );
};

export default Head;
