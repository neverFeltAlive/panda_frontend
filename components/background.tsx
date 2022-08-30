import Particles from "react-tsparticles";
import styled from "styled-components";
import {loadFull} from "tsparticles";
import { Engine } from "tsparticles-engine";
import {Colors} from "../constants";


const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Background = () => {
    const particlesInit = async (main: Engine) => {
        await loadFull(main);
    };

    return (
        <Wrapper>
            <Particles
                id="particles"
                init={particlesInit}
                options={{
                    background: {
                        color: {
                            value: Colors.accent.normal,
                        },
                        opacity: 0.1,
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: Colors.accent.normal,
                        },
                        links: {
                            color: Colors.accent.normal,
                            distance: 150,
                            enable: true,
                            opacity: 0.7,
                            width: 6,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 4,
                            straight: false,
                        },
                        rotate: {
                            random: {
                                enable: true,
                                minimumValue: 0
                            },
                            value: 360,
                            direction: "clockwise"
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 600,
                            },
                            value: 40,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            image: {
                                height: 60,
                                src: "/images/paw-brown.png",
                                width: 60,
                                replace_color: true
                            },
                            type: "image",
                        },
                        size: {
                            value: {min: 15, max: 25},
                        },
                    },
                    detectRetina: true,
                }}
            />
        </Wrapper>
    );
};

export default Background;