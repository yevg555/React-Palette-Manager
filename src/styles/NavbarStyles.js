import sizes from "./sizes";

const NavBarStyles = {
    Navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '6vh',
        fontWeight: 550,
        [sizes.down("ccm")]: {
            paddingLeft: ".3rem"
        }

    },
    logo: {
        marginRight: 15,
        padding: '0 13px',
        fontSize: 22,
        backgroundColor: '#eceff1',
        fontFamily: 'Roboto',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        "& a": {
            color: '#040a0ac7',
            textDecoration: 'none',
            letterSpacing: '.1rem',
            fontFamily: 'Arial',

        },
        [sizes.down("ccm")]: {
            display: props => (props.showingFullPalette ? "none" : "flex")
        },
        [sizes.down("xxs")]: {
            display: () => "none"
        }
    },
    slider: {
        paddingLeft: '1rem',
        width: ' 30rem',
        margin: '0 10px',
        display: 'inline-block',
        "& .rc-slider-track": {
            backgroundColor: 'transparent',
        },
        "& .rc-slider-rail": {
            height: 8,
        },
        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
            backgroundColor: 'green',
            outline: 'none',
            border: '2px solid green',
            boxShadow: 'none',
            width: 13,
            height: 13,
            marginTop: '-3px',
        },
        [sizes.down("md")]: {
            width: "300px"
        },
        [sizes.down("xs")]: {
            display: "none"
        }
    },

    selectContainer: {
        marginLeft: 'auto',
        marginRight: '1rem',

    }
};

export default NavBarStyles;