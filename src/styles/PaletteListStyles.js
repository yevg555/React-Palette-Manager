import sizes from "./sizes";
import bg from "./bg.svg";

export default {
    "@global": {
        ".fade-exit": {
            opacity: 1
        },
        ".fade-exit-active": {
            opacity: 0,
            transition: "opacity 500ms ease-out"
        }
    },
    root: {
        backgroundColor: "blue",
        height: "100vh",
        width: '100vw',
        backgroundColor: "#394bad",
        backgroundImage: `url(${bg})`,
        overflow: "auto",
    },
    container: {
        margin: 'auto',
        width: "70%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",

        [sizes.down("sm")]: {
            width: "50%"
        }
    },
    nav: {
        color: 'white',
        textTransform: 'uppercase',
        letterSpacing: '.1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        [sizes.down("cssm")]: {
            justifyContent: 'center',
        },
        '& h1': {
            margin: 0,
            padding: '.5rem',
            fontSize: '1.3rem',
        },
        '& a': {
            textDecoration: 'none',
            color: 'white',
            // display: 'inline-block',
            [sizes.down('sm')]: {
                display: 'block',
                fontSize: '.8rem',
                [sizes.down("xs")]: {
                    // textAlign: 'center',
                }
            }
        },
        '& button': {
            color: '#FFE385',
            marginRight: 0,
            marginLeft: 'auto',
            display: 'inline-block',
            background: 'none',
            border: 'none',
            padding: 0,
            textDecoration: 'none',
            textTransform: 'inherit',
            letterSpacing: 'inherit',
            fontSize: 'inherit',
            cursor: 'pointer',
            [sizes.down('sm')]: {
                display: 'block',
                fontSize: '.8rem'
            }
        },
        "& span": {
            [sizes.down("sm")]: {
                display: "none"
            }
        }
    },
    links: {
        [sizes.down("cssm")]: {
            display: "none"
        }
    },
    hideable: {
        [sizes.down('sm')]: {
            display: 'none'
        }
    },
    palettes: {
        boxSizing: "border-box",
        marginBottom: "1rem",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 33%)",
        gridGap: "2.5%",
        justifyContent: 'space-around',
        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(2, 50%)"
        },
        [sizes.down("sm")]: {
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: "1.2rem"
        }

    }
};
