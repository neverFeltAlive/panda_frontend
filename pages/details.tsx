import React from 'react';
import {GetServerSideProps, NextPage} from "next";
import Head from "next/head";
import {PageProps} from "./about";
import Appointment from "../components/form/appointment";
import MapBox from "../components/map";
import {ParentsInfo} from "../components/info";
import Carousel, {ImageData} from "../components/carousel/carousel";
import {ApiRoot} from "../constants";

interface DetailsPageProps extends PageProps{
    images: ImageData[],
}

const Details: NextPage<DetailsPageProps> = ({setModal, images}) => {
    return (
        <>
            <Head>
                <meta name="description" content="Информация для родителей о частном детском саде 'Панда' во Владимире"/>
                <title>Детский Сад Панда: Информация для Родителей</title>
            </Head>
            <main>
                <ParentsInfo setModal={setModal}/>
                <MapBox/>
                <Appointment/>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) =>{
    const data = await fetch(`${ApiRoot}/get-pictures`);
    const images: ImageData[] = await data.json();
    return {
        props: {
            images
        }
    }
}

export default Details;