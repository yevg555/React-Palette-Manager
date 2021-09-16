export default {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    colors: {
        height: "90%"
    },
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        opacity: 1,
        backgroundColor: "white",
        "& a": {
            color: "rgba(41,47,49,0.9)",
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top: "50%",
            left: "50%",
            marginLeft: "-50px",
            marginTop: "-15px",
            textAlign: "center",
            outline: "none",
            // background: "#292f31",
            fontSize: "1rem",
            lineHeight: "30px",
            textTransform: "uppercase",
            fontWeight: 900,
            border: "none",
            textDecoration: "none"
        }
    }
};