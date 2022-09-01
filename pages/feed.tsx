import React from 'react';
import {GetServerSideProps, NextPage} from "next";
import Head from "next/head";
import Gram from "../components/gram";
import {ApiRoot} from "../constants";
import {ImageData} from "../components/carousel/carousel";
import {setViewerType} from "./_app";

interface FeedProps{
    setViewer: setViewerType;
    images: ImageData[],
}

const Feed: NextPage<FeedProps> = ({setViewer, images}) => {
    return (
        <>
            <Head>
                <meta name="description" content="Фотогалерея частного детского сада Панда во Владимире"/>
                <title>Детский Сад Панда: Фотогалерея</title>
            </Head>
            <main>
                {images && <Gram images={images} setViewer={setViewer}/>}
            </main>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) =>{
    const data = await fetch(`${ApiRoot}/get-pictures?page=0&offset=10`);
    const images: ImageData[] = await data.json();
    return {
        props: {
            images
        }
    }
}

export default Feed;