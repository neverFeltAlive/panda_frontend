import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from 'next/document'
import {ReactElement} from "react";

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
                <Head/>

                <body>
                    <Main/>
                    <NextScript/>

                    <div id="modal"></div>

                    <div id="globalLoader">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Символ звгрузки"/>
                    </div>
                </body>
            </Html>
        );
    }
}

export default MyDocument