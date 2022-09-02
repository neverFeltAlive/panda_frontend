import React from 'react';
import {Hr, Section, SectionTitle} from "../UI";
import styled from "styled-components";
import {Image} from "../cards/cards";
import {Colors, DefaultAnimationProps} from "../../constants";
import {motion} from "framer-motion";

//region TSProps
export interface Area {
    id: number,
    title: string,
    type: string,
    text: string,
    image: Image,
}

type AreasProps = {
    title: string,
    areas: Area[]
}
//endregion

//region Styled
const Card = styled.article`
  padding: 20px 20px;
`;

const Img = styled.img`
  width: 100%;
  padding: 10px;
  margin: auto;

  @media (min-width: 1200px) {
    width: 280px;
    height: 280px;
  }
`;

const Strong = styled.strong`
  color: ${Colors.main.normal};
  text-transform: uppercase;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  @media (min-width: 992px) {
    width: 45%;
    padding: 40px 40px;
  }
`;

const ImageContainer = styled.div`
  display: none;
  width: 250px;
  justify-content: center;

  @media (min-width: 992px) {
    display: block;
  }

  @media (min-width: 1200px) {
    height: 600px;
    padding: 20px;
    display: flex;
  }
`;

const ImageLine = styled.div`
  margin: auto;
`;
//endregion

const Areas = ({title, areas}: AreasProps) => {
    const sectionTitle: SectionTitle = {
        title: title,
        style: {textAlign: "right"}
    }

    return (
        <Section title={sectionTitle}>
            <Container>
                <ImageContainer
                    as={motion.div}
                    {...DefaultAnimationProps()}
                >
                    <ImageLine>
                        <Img
                            src={areas[0].image.src}
                            alt={areas[0].image.alt}
                        />
                        <Img
                            src={areas[1].image.src}
                            alt={areas[1].image.alt}
                        />
                    </ImageLine>
                    <ImageLine>
                        <Img
                            src={areas[3].image.src}
                            alt={areas[3].image.alt}
                        />
                    </ImageLine>
                </ImageContainer>
                <TextContainer>
                    {areas.map((area, index) => {
                        return (
                            <div key={area.id}>
                                {index !== 0 && (
                                    <Hr/>
                                )}
                                <Card
                                    as={motion.article}
                                    {...DefaultAnimationProps()}
                                >
                                    <Strong>{area.type}</Strong>
                                    <h4>{area.title}</h4>
                                    <p>{area.text}</p>
                                </Card>
                            </div>
                        );

                    })}
                </TextContainer>
            </Container>
            <br/><br/>
            <motion.div
                {...DefaultAnimationProps()}
            >
                <Strong>АКТИВНОСТИ</Strong>
                <h4 >Выбранное вами направление можно дополнить различными
                    активностями</h4>
                <hr/>
                <ul>
                    <li>
                        <strong>Спорт (дзюдо, бокс, хореография, здоровые ножки)</strong>
                    </li>
                    <li>
                        <strong>Творчество</strong>
                    </li>
                    <li>
                        <strong>Музыка</strong>
                    </li>
                    <li>
                        <strong>Ментальная математика</strong>
                    </li>
                    <li>
                        <strong>Английский язык</strong>
                    </li>
                    <li>
                        <strong>Занятия с логопедом</strong>
                    </li>
                </ul>
            </motion.div>
        </Section>
    );
};

export default Areas;