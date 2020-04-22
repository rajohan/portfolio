const gameFinder = require("../../assets/img/gameFinder.png?resize&sizes[]=330&sizes[]=770;");
const escape = require("../../assets/img/escape.png?resize&sizes[]=330&sizes[]=770;");
const natours = require("../../assets/img/natours.png?resize&sizes[]=330&sizes[]=770;");
const nexter = require("../../assets/img/nexter.png?resize&sizes[]=330&sizes[]=770;");
const trillo = require("../../assets/img/trillo.png?resize&sizes[]=330&sizes[]=770;");

const projects = [
    {
        name: "Game Finder",
        date: "29.03.2020",
        client: "Raymond Johannessen Web Development",
        technologies: ["HTML", "Styled Components", "JavaScript", "TypeScript", "React"],
        description:
            "Search and find new games. Game data is provided by the rawg.io API. This page was made as an assignment while studying frontend development at Noroff.",
        image: gameFinder,
        link: "https://rajohan.no/gamefinder2"
    },
    {
        name: "Escape",
        date: "15.12.2019",
        client: "Raymond Johannessen Web Development",
        technologies: ["HTML", "Styled Components", "JavaScript", "React", "Node.js", "Express", "Socket.io"],
        description:
            "A 2 player dice game where you play as a Game Of Thrones character. Can you escape? The game was made as my semester project while studying frontend development at Noroff.",
        image: escape,
        link: "https://rajohan.no/school/escape"
    },
    {
        name: "Natours",
        date: "13.05.2018",
        client: "Raymond Johannessen Web Development",
        technologies: ["HTML", "CSS", "SCSS"],
        description: "Exciting tours for adventurous people. This page was made for learning purposes.",
        image: natours,
        link: "https://rajohan.no/natours/"
    },
    {
        name: "Nexter",
        date: "05.03.2018",
        client: "Raymond Johannessen Web Development",
        technologies: ["HTML", "CSS", "SCSS"],
        description: "Your home, your freedom. This page was made for learning purposes.",
        image: nexter,
        link: "https://rajohan.no/nexter/"
    },
    {
        name: "Trillo",
        date: "27.01.2018",
        client: "Raymond Johannessen Web Development",
        technologies: ["HTML", "CSS", "SCSS"],
        description: "Your all-in-one booking app. This page was made for learning purposes.",
        image: trillo,
        link: "https://rajohan.no/trillo/"
    }
];

export { projects };
