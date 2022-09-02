import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from 'next/document'
import React, {ReactElement} from "react";

class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render(): ReactElement {
        return (
            <Html lang="ru">
                <Head>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="shortcut icon" href="/favicon.ico"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Rubik+Bubbles&display=swap"
                        rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;700&display=swap"
                          rel="stylesheet"/>
                </Head>

                <body>
                <Main/>
                <NextScript/>

                <div id="modal"></div>

                <div id="globalLoader">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
                         alt="Символ звгрузки"/>
                </div>
                </body>
            </Html>
        );
    }
}

export default MyDocument