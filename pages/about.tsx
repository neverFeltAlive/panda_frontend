import React, {FC} from 'react';
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
import Footer from "../components/footer";

export interface PageProps {
    setModal: (content: FC) => void,
}

const About: NextPage<PageProps> = ({setModal}) => {
    return (
        <>
            <Head>
                <meta name="description" content="Основная информация о частном детском саде 'Панда' во Владимире"/>
                <title>Детский Сад Панда: Главное</title>
            </Head>
            <main>
                <Scheme/>
                <Cards title="наши приоритеты" cards={CardsData}/>

                <div style={{display: "flex"}}>
                    <svg viewBox="0 0 200 15" preserveAspectRatio="none">
                        <polygon style={{fill: Colors.light.normal}} points="0, 13 200, 0 0, 0"/>
                        <polygon style={{fill: Colors.white.normal}} points="0 15, 0 13, 200 0, 200 2"/>
                        <polygon style={{fill: Colors.white.normal}} points="0 15, 200 2, 200 15"/>
                    </svg>
                </div>

                <Comments setModal={setModal}/>
                <Groups title="наши группы" groups={GroupsData}/>
                <Areas title="наши направления" areas={AreasData}/>
                <MapBox/>
                <Tabs title="мы гарантируем" tabs={TabsData}/>
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


