import React, {useState} from 'react';
import {Highlight, Hr, Section, SectionTitle} from "../UI";
import styled from "styled-components";
import {Colors} from "../../constants";

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
const TitlesContainer = styled.div`
  text-align: center;

  @media (min-width: 992px) {
    display: flex;
    justify-content: center;
  }
`;

const H4 = styled.h5`
  margin: 0 20px;
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
  width: 90%;
  padding: 20px;
  margin: auto;
  text-align: center;

  @media (min-width: 992px) {
    width: 70%;
    height: 400px;
    padding: 20px 50px;
    border-radius: 50%;
    box-shadow: 5px 5px 5px 0 ${Colors.accent.normal};
  }
`;
//endregion

const Tabs = ({title, tabs}: TabsProps) => {
    const [current, setCurrent] = useState(0)

    const sectionTitle: SectionTitle = {
        title: title,
        style: {textAlign: "center"}
    }

    return (
        <Section title={sectionTitle}>
            <TitlesContainer>
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
            </TitlesContainer>
            {tabs.map((tab, index) => {
                if (current === index) {
                    return (
                        <Tab key={tab.id}>
                            <p>{tab.text}</p>
                        </Tab>
                    );
                }
            })}
        </Section>
    );
};

export default Tabs;