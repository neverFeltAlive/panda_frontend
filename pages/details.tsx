import React from 'react';
import {NextPage} from "next";
import Head from "next/head";
import {PageProps} from "./about";
import Appointment from "../components/form/appointment";
import MapBox from "../components/map";
import {ParentsInfo} from "../components/info";

const Details: NextPage<PageProps> = ({setModal}) => {
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

export default Details;