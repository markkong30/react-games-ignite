import playstation from "./img/playstation.svg";
import steam from "./img/steam.svg";
import xbox from "./img/xbox.svg";
import nintendo from "./img/nintendo.svg";
import apple from "./img/apple.svg";
import gamepad from "./img/gamepad.svg";


export const getGenresColor = (genre) => {
    switch (genre) {
        case "Action":
            return "#BB2D3E";
        case "RPG":
            return "#4FC52A";
        case "Adventure":
            return "#015CC5";
        case "Shooter":
            return "#FFCD3A";
        case "Arcade":
            return "#8955FF";
        case "Puzzle":
            return "#28ABE2";
        case "Strategy":
            return "#EF629F";
        case "Simulation":
            return "#7a2828"
        default:
            return "#5B5B5B";
    }
}

export const getPlatform = platform => {
    switch (platform) {
        case "PlayStation 4":
            return playstation;
        case "Xbox One":
            return xbox;
        case "PC":
            return steam;
        case "Nintendo Switch":
            return nintendo;
        case "iOS":
            return apple;
        default:
            return gamepad;
    }
}

export const scrollTop = () => {
    window.scrollTo({
        top: 0,
    })
}