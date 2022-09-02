import React from 'react';
import {NextPage} from "next";
import Head from "next/head";
import Carousel from "../components/carousel/carousel";
import Cards from "../components/cards/cards";
import Comments from "../components/comments";
import Groups from "../components/groups/groups";
import Areas from "../components/areas/areas";
import Tabs from "../components/tabs/tabs";
import MapBox from "../components/map";
import Scheme from "../components/scheme";
import Appointment from "../components/form/appointment";
import AreasData from "../components/areas/data";
import TabsData from "../components/tabs/data";
import CardsData from "../components/cards/data";
import GroupsData from "../components/groups/data";
import CarouselData from "../components/carousel/data";
import {Colors} from "../constants";
import {Transition} from "../components/UI";
import {setModalType} from "./_app";

export interface PageProps {
    setModal: setModalType,
}

const About: NextPage<PageProps> = ({setModal}) => {
    return (
        <>
            <Head>
                <meta name="description" content="Основная информация о частном детском саде Панда во Владимире"/>
                <title>Детский Сад Панда: Главное</title>
            </Head>
            <main>
                <Scheme/>
                <Transition from={Colors.main.normal} through={Colors.light.normal} to={Colors.light.normal}/>
                <Cards title="наши приоритеты" cards={CardsData}/>
                <Transition from={Colors.light.normal} through={Colors.white.normal} to={Colors.white.normal}/>
                <Transition from={Colors.white.normal} through={Colors.white.normal}  to={Colors.accent.transparent}/>
                <Comments setModal={setModal}/>
                <Transition from={Colors.accent.transparent} through={Colors.accent.normal} to={null}/>
                <Groups title="наши группы" groups={GroupsData}/>
                <Areas title="наши направления" areas={AreasData}/>
                <MapBox/>
                <Tabs title="частный садик панда гарантирует" tabs={TabsData}/>
                <Carousel images={CarouselData}/>
                <Appointment/>
            </main>
        </>
    )
}

export default About;

// TODO: animations
// TODO: remake tabs component's styling
// TODO: create multiple interactions
// TODO: finish header (offcanvas header)
// TODO: clean up TS
// TODO: clean up CSS and styled components
// TODO: clean up duplicates
// TODO: email validation


