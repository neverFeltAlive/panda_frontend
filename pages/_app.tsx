import type {AppProps} from 'next/app'
import Head from "next/head";
import Background from "../components/background";
import Modal from "../components/modal";
import React, {FC, useState} from "react";
import "../styles/globals.css";
import {useRouter} from "next/router";
import Header from "../components/header";
import Footer from "../components/footer";

export default function MyApp({Component, pageProps}: AppProps) {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<null | FC>(null)

    const router = useRouter();
    const needHeader = router.pathname === "/about" || router.pathname === "/details" || router.pathname === "/about";

    const setModal = (content: FC) => {
        setModalContent(content);
        setIsModalVisible(true);
    }

    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Частный Детский Сад Панда</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Rubik+Bubbles&display=swap"
                    rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;700&display=swap" rel="stylesheet"/>
            </Head>
            <Background/>
            <Modal isVisible={isModalVisible} setVisible={setIsModalVisible} content={modalContent}/>
            {needHeader && (
                <Header setModal={setModal}/>
            )}
            <Component {...pageProps} setModal={setModal}/>
            {needHeader && (
                <Footer setModal={setModal}/>
            )}
        </>
    );
}

