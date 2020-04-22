import React from "react";

import Head from "./Head";
import Header from "./Header/Header";
import Main from "./Main";
import Footer from "./Footer";
import Social from "../Shared/Social";

type Props = {
    children: React.ReactNode;
    pageTitle: string;
};

const Layout: React.FC<Props> = (props: React.PropsWithChildren<Props>): React.ReactElement => {
    return (
        <React.Fragment>
            <Head>
                <title>Rajohan.no - {props.pageTitle}</title>
            </Head>
            <Header />
            <Main>
                {props.children}
                <Social />
            </Main>
            <Footer />
            <script src="https://unpkg.com/focus-within-polyfill/dist/focus-within-polyfill.js" />
        </React.Fragment>
    );
};

export default Layout;
