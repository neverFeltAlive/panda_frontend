import React from 'react';
import {NextPage} from "next";
import Head from "next/head";
import {PageProps} from "./about";
import {UsInfo} from "../components/info";

const Contacts: NextPage<PageProps> = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Контакты предприятия и персонала частного детского сада 'Панда' во Владимире"/>
                <title>Детский Сад Панда: Контактная Информация</title>
            </Head>
            <main>
                <UsInfo/>
            </main>
        </>
    )
}

export default Contacts;