import React from 'react';
import styled from "styled-components";
import {Hr} from "./UI";
import {FullscreenControl, GeolocationControl, Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";
import {Colors, DefaultAnimationProps} from "../constants";
import {motion} from "framer-motion";

//region Styled
const Section = styled.section`
  padding: 50px 40px;
  background-color: ${Colors.main.transparent};
  box-shadow: 0 0 15px 0${Colors.main.normal};
  border: 2px solid ${Colors.main.normal};
  border-left: none;
  border-right: none;
`;

const Container = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
    justify-content: center;
  }
`;

const TextContainer = styled.div`
  @media (min-width: 992px) {
    width: 30%;
  }
`;

const Article = styled.article`
  padding: 10px;
  margin: 5px 0;
  background-color: ${Colors.white.normal};
  border: 2px solid ${Colors.main.normal};
  box-shadow: 0 5px 15px 0 ${Colors.main.normal};
  
  @media (min-width: 992px){
    padding: 20px 30px;
    margin: 10px;
  }
`;

const Strong = styled.strong`
  font-size: inherit;
  text-transform: uppercase;
  color: ${Colors.main.normal};
  text-shadow: 1px 1px black;
`;

const MapContainer = styled.div`
  display: flex;
  height: 400px;
  @media (min-width: 992px) {
    width: 70%;
    height: 800px;
    padding: 30px;
  }
`;
//endregion

const MapBox = () => {
    return (
        <Section>
            <h3 className="section-title">как нас найти</h3>
            <Hr/>
            <Container>
                <MapContainer
                    as={motion.div}
                    {...DefaultAnimationProps()}
                >
                    <YMaps>
                        <Map
                            defaultState={{
                                center: [56.133327, 40.394867],
                                zoom: 18,
                                controls: [],
                            }}
                            width="100%"
                            height="100%"
                        >
                            <FullscreenControl/>
                            <Placemark geometry={[56.133327, 40.394867]}/>
                            <GeolocationControl options={{float: 'left'}}/>
                            <ZoomControl options={{float: "right"}}/>
                        </Map>
                    </YMaps>
                </MapContainer>
                <TextContainer>
                    <Article
                        as={motion.article}
                        {...DefaultAnimationProps(0.3)}
                    >
                        <p><strong style={{fontWeight: "inherit"}}>Садик Панда</strong> расположен в центре города <Strong>недалеко от здания областной
                            админимтрации</Strong>.
                        </p>
                    </Article>
                    <Article
                        as={motion.article}
                        {...DefaultAnimationProps(0.6)}
                    >
                        <p>Наш адрес: <Strong>г.Владимир, ул. Верхне-Лыбедская, 18A</Strong></p>
                    </Article>
                    <Article
                        as={motion.article}
                        {...DefaultAnimationProps(0.9)}
                    >
                        <p>В шаговой доступности находится:</p>
                        <ul>
                            <li><p>удобная <Strong>парковка</Strong></p></li>
                            <li><p>несколько автобусных <Strong>остановок</Strong></p></li>
                            <li><p>два муниципальных <Strong>парка</Strong></p></li>
                        </ul>
                    </Article>
                </TextContainer>
            </Container>
        </Section>
    );
};

export default MapBox;