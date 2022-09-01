import React, {useState} from 'react';
import {Hr, Section, SectionTitle} from "../UI";
import styled from "styled-components";
import {Colors, Rems} from "../../constants";

//region TSProps
export interface Tab {
    id: number,
    title: string,
    text: string,
}

type TabsProps = {
    tabs: Tab[],
    title: string
}
//endregion

//region Styled
const Container = styled.div`
  @media (min-width: 992px){
    padding: 2rem;
    display: flex;
    justify-content: center;
  }
`;

const TitlesContainer = styled.div`
  background-color: ${Colors.light.normal};
  border: ${Rems.border} solid ${Colors.dark.normal};
  border-radius: ${Rems.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  @media (min-width: 992px){
    padding: 40px;

    text-align: left;
  }
`;

const TextContainer = styled.div`
  padding: 40px 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 992px){
    padding: 40px;
    width: 50%;
  }
`;

const H4 = styled.h5`
  margin: 1rem;
  opacity: 75%;
  color: ${Colors.accent.normal};
  text-shadow: 1px 1px #40322F;

  &:hover {
    cursor: pointer;
  }
`;

const H4Active = styled(H4)`
  opacity: 100%;
`;

const Tab = styled.article`
  display: flex;
  align-items: center;
`;
//endregion

const Tabs = ({title, tabs}: TabsProps) => {
    const [current, setCurrent] = useState(0)

    return (
        <section className="content-section content-section__gradient">
            <div className="content-container">
                <h3 className="section-title">{title}</h3>
                <Hr/>
                <Container>
                    <TitlesContainer>
                        <div>
                            {tabs.map((tab, index) => {
                                if (current === index) {
                                    return (
                                        <H4Active key={tab.id} onClick={() => {
                                            setCurrent(index)
                                        }}>{tab.title}</H4Active>
                                    );
                                } else {
                                    return (
                                        <H4 key={tab.id} onClick={() => {
                                            setCurrent(index)
                                        }}>{tab.title}</H4>
                                    );
                                }
                            })}
                        </div>
                    </TitlesContainer>
                    <TextContainer>
                        {tabs.map((tab, index) => {
                            if (current === index) {
                                return (
                                    <Tab key={tab.id}>
                                        <p>{tab.text}</p>
                                    </Tab>
                                );
                            }
                        })}
                    </TextContainer>
                </Container>
            </div>

        </section>
    );
};

export default Tabs;