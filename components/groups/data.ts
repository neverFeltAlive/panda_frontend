import {Group} from "./groups";

const GroupsData: Group[] = [
    {
        id: 0,
        title: "Младшая группа",
        age: "2 года - 3.5 года",
        image: {
            src: "/images/small.jpg",
            alt: "Фотография трехлетнего ребенка",
        }
    },
    {
        id: 1,
        title: "Средняя группа",
        age: "3.5 года - 5 лет",
        image: {
            src: "/images/middle.png",
            alt: "Фотография четырехлетнего ребенка",
        }
    },
    {
        id: 2,
        title: "Старшая группа",
        age: "5 лет - 7 лет",
        image: {
            src: "/images/big.png",
            alt: "Фотография пятилетнего ребенка",
        }
    }
]

export default GroupsData;