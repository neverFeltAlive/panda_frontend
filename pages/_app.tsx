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
import FloatingButton from "../components/float";
import {AnimatePresence} from "framer-motion";

export type setViewerType = (images: ImageData[], currentId: number) => void;
export type setModalType = (content: null | JSX.Element) => void;

export default function MyApp({Component, pageProps}: AppProps) {
    const [modalContent, setModalContent] = useState<null | JSX.Element>(null)
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
        else{
            removeOverlay();
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
            <Background/>
            <AnimatePresence>
                {overlay && overlay}
            </AnimatePresence>

            {needHeader && (
                <>
                    <Header setModal={setModal}/>
                    <FloatingButton setModal={setModal}/>
                </>
                )}
            <Component {...pageProps} setModal={setModal} setViewer={setViewer}/>
            {needHeader && (
                <Footer setModal={setModal}/>
            )}
        </>
    );
}

