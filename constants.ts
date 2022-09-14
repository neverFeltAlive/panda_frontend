export const Colors = {
    main: {
        normal: "rgba(252, 241, 86, 1)",
        transparent: "rgba(252, 241, 86, 0.2)",
    },
    light: {
        normal: "rgba(255, 255, 231, 1)",
        transparent: "rgba(255, 255, 231, 0.2)",
    },
    white: {
        normal: "rgba(255, 255, 255, 1)",
        transparent: "rgba(255, 255, 255, 0.7)",
    },
    accent: {
        normal: "rgba(62, 230, 70, 1)",
        transparent: "rgba(62, 230, 70, 0.2)",
    },
    dark: {
        normal: "rgba(30, 30, 36, 1)",
        transparent: "rgba(30, 30, 36, 0.15)"
    }
};

export const ApiRoot = "http://localhost:8000/api";

export const Rems = {
    border: "0.1rem",
    windowPaddings: "0.2rem 1rem",
    boxShadow: "0 0 1rem",
    borderRadius: "0.5rem",
};

export const ContactData = {
    phoneNumber: "+7 (492) 246-06-06",
    vkLink: "",
    email: "panda-kids33@yandex.ru",
    waLink: "https://wa.me/79042593949",
    address: {
        short: "Владимир, Верхне-Лыбедская 18А",
        long: ""
    }
};

export const Animations = {
    scrollAnimation: (delay?: number) => {
        return {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: delay ? delay : 0,
            }
        }
    },
    hoverAnimation: (scale?: number) => {
        return {
            scale: scale ? scale : 1.1,
        }
    },
    tapAnimation: (scale?: number) => {
        return {
            scale: scale ? scale : 0.9,
        }
    },
    viewport: {
        once: true,
    },
    initialState: {
        opacity: 0,
        y: -10,
    },
    slideInAnimation: (duration?: number) => {
        return {
            x: [200, 0],
            opacity: [0, 1],
            delay: 1,
            transition: {
                delay: 1,
                duration: duration ? duration : 0.5,
            }
        }
    },
    slideOutAnimation: (duration?: number) => {
        return {
            x: [0, -200],
            opacity: 0,
            transition: {
                duration: duration ? duration : 0.5,
            }
        }
    }
}

export const DefaultAnimationProps = (delay?: number) => {
    return {
        initial: Animations.initialState,
        viewport: Animations.viewport,
        whileInView: Animations.scrollAnimation(delay),
    }
}

export const DefaultButtonAnimationProps = (hoverScale?: number, tapScale?: number) => {
    return {
        whileHover: Animations.hoverAnimation(hoverScale),
        whileTap: Animations.tapAnimation(tapScale),
    }
}