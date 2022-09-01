import React from 'react';
import styled from "styled-components";
import {Image} from "../cards/cards";
import {Colors} from "../../constants";

//region TSProps
export interface Group {
    id: number,
    title: string,
    age: string,
    image: Image,
}

type GroupsProps = {
    groups: Group[],
    title: string
}
//endregion

//region Styled
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 992px){
    transform: translateY(-20px);
  }
`;

const Card = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 33%;
  height: 8rem;
  margin: 0;
  border: 0.15rem solid ${Colors.accent.normal};
  box-shadow: 0 0 1rem ${Colors.accent.normal};
  background-color: ${Colors.white.normal};
  border-radius: 50%;
  z-index: 3;
  scale: 0.9;
  
  &:hover{
    z-index: 4;
    border: 2px solid ${Colors.main.normal};
    box-shadow: 0 0 1rem ${Colors.main.normal};
    scale: 1;
  }
  
  @media (min-width: 992px){
    margin: 0 -2rem;
    width: 300px;
    height: 300px;
  }
  
  @media (min-width: 1200px){
    margin: 0 -2rem;
    width: 400px;
    height: 400px;
  }
`;

const Title = styled.h5`
  display: none;
  text-transform: uppercase;
  
  @media (min-width: 992px){
    display: block;
  }
`;

const CardEven = styled(Card)`
  z-index: 2;
`;
//endregion

const Groups = ({title, groups}: GroupsProps) => {
    return (
        <section style={{position: "relative"}}>
            <Container>
                {groups.map((group, index) => {
                    const body = (
                        <div>
                            <Title>{group.title}</Title>
                            <p><strong style={{fontSize: "inherit"}}>{group.age}</strong></p>
                        </div>
                    );

                    if (index % 2 === 0) {
                        return (
                            <CardEven key={group.id}>
                                {body}
                            </CardEven>
                        );
                    } else {
                        return (
                            <Card key={group.id}>
                                {body}
                            </Card>
                        );
                    }
                })}
            </Container>
        </section>
    );
};

export default Groups;