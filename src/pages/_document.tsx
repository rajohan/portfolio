import React from "react";
import Document, { Html, Head, Main, NextScript, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { NextPageContext } from "next";
import { ComponentsEnhancer, RenderPageResult } from "next/dist/next-server/lib/utils";

type Context = NextPageContext & {
    renderPage: (options?: ComponentsEnhancer) => RenderPageResult | Promise<RenderPageResult>;
};

export default class DocumentWithStyles extends Document {
    static async getInitialProps(ctx: Context): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> => {
                return originalRenderPage({
                    enhanceApp: (App) => (props): React.ReactElement<{ sheet: ServerStyleSheet }> =>
                        sheet.collectStyles(<App {...props} />)
                });
            };

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <React.Fragment>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </React.Fragment>
                )
            };
        } finally {
            sheet.seal();
        }
    }

    render(): React.ReactElement {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
