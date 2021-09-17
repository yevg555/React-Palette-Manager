import sizes from "./sizes";

export default {
    root: {
        margin: 0,
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "3px",
        padding: "0.42rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        boxSizing: 'initial',
        "&:hover svg": {
            opacity: 1
        }
    },
    colors: {
        backgroundColor: "#dae1e4",
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: '0.5rem',
        paddingBottom: '0.6rem',
        fontSize: ".88rem",
        position: "relative",
        [sizes.down('md')]: {
            paddingTop: '0.3rem',
            paddingBottom: '1.2rem',
        },
        [sizes.down('sm')]: {
            paddingTop: '0.5rem',
            paddingBottom: '0.2rem',
        }
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"
    },
    deleteIcon: {
        color: "white",
        backgroundColor: "#eb3d30",
        width: "20px",
        height: "20px",
        position: "absolute",
        right: "0px",
        top: "0px",
        padding: "10px",
        zIndex: 10,
        opacity: 0
    }
};