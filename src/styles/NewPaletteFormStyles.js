import { DRAWER_WIDTH } from '../constants'
const drawerWidth = DRAWER_WIDTH

const styles = theme => ({
    root: {
        display: "flex",
        lineHeight: '0',

    },
    MuiDividerRoot: {
        width: '100%',
        backgroundColor: 'rgb(0 0 0 / 13%)',
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        height: "100vh"
    },
    drawerPaper: {
        width: drawerWidth,
        display: "flex",
        alignItems: "center",
        overflow: 'hidden',
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: 63.98,
        padding: "0 8px",
        justifyContent: "center",
        ...theme.mixins.toolbar,

        "& h1": {
            padding: "30px",
            fontSize: '1.5rem',
            textTransform: "uppercase",
            justifyContent: "center",
            alignItems: "center",
        },

    },
    content: {
        flexGrow: 1,
        height: "calc(100vh - 64px)",
        padding: 0,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    },
    container: {
        width: "90%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    buttons: {
        width: '14rem',
        height: '5rem',
    },
    button: {
        width: "50%"
    }
});

export default styles;