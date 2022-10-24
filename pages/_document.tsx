import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from 'next/document'
import React, {ReactElement} from "react";
import {AnimatePresence} from "framer-motion";

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
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                          
                                    ym(12345678, "init", {
                                          clickmap:true,
                                          trackLinks:true,
                                          accurateTrackBounce:true
                                    });
                                  `,
                        }}
                    />
                    <noscript>
                        <div>
                            <img src="https://mc.yandex.ru/watch/90714198" style={{ position:'absolute', left:'-9999px' }} alt="" />
                        </div>
                    </noscript>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                    !function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src='https://vk.com/js/api/openapi.js?169',t.onload=function(){VK.Retargeting.Init("VK-RTRG-1560701-9ImCM"),VK.Retargeting.Hit()},document.head.appendChild(t)}();
                                  `,
                        }}
                    />
                    <noscript>
                        <img src="https://vk.com/rtrg?p=VK-RTRG-1560701-9ImCM" style={{ position:'fixed', left:'-999px' }} alt=""/>
                    </noscript>
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