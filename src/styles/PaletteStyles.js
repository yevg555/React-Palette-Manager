import sizes from "./sizes";

export default {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    [sizes.down("lg")]: {
        width: "25%",
        height: "33.3333%"
    },
    [sizes.down("md")]: {
        width: "50%",
        height: "20%"
    },
    [sizes.down("xs")]: {
        width: "100%",
        height: "10%"
    },
    colors: {
        height: "90%",
    }
}
