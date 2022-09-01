import type {AppProps} from 'next/app'
import Head from "next/head";
import Background from "../components/background";
import Modal from "../components/modal";
import React, {FC, useEffect, useState} from "react";
import "../styles/globals.css";
import {useRouter} from "next/router";
import Header from "../components/header";
import Footer from "../components/footer";
import Viewer from "../components/viewer";
import {ImageData} from "../components/carousel/carousel";

export type setViewerType = (images: ImageData[], currentId: number) => void;
export type setModalType = (content: FC) => void;

export default function MyApp({Component, pageProps}: AppProps) {
    const [modalContent, setModalContent] = useState<null | FC>(null)
    const [overlay, setOverlay]  = useState<null | JSX.Element>(null);
    const router = useRouter();
    const needHeader = router.pathname === "/about" || router.pathname === "/details" || router.pathname === "/contacts" || router.pathname === "/feed";

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const loader = document.getElementById('globalLoader');
            if (loader)
                loader.remove();
        }
    }, []);

    useEffect(() => {
        if (modalContent){
            setOverlay(<Modal closeModal={removeOverlay} content={modalContent}/>)
        }
    }, [modalContent])

    const removeOverlay = () => {
        setOverlay(null);
    }

    const setModal: setModalType = (content) => {
        if (overlay === null){
            setModalContent(content);
        }
    }

    const setViewer: setViewerType = (images, currentId) => {
        if (overlay === null){
            setOverlay(<Viewer images={images} closeViewer={removeOverlay} currentId={currentId}/>);
        }
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
            {overlay && overlay}
            {needHeader && (
                <Header setModal={setModal}/>
            )}
            <Component {...pageProps} setModal={setModal} setViewer={setViewer}/>
            {needHeader && (
                <Footer setModal={setModal}/>
            )}
        </>
    );
}

