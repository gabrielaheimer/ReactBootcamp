import sizes from "./sizes";

export default {
    Navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "lex-start",
        height: "6vh",
        margin: '0'
    }, logo: {
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "22px",
        backgroundColor: "#eceff1",
        fontFamily: 'Roboto',
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
        textDecoration: "none",
        color: "black"
        },
        [sizes.down('xs')]: {
            display: 'none'
        },
    }, slider: {
        width: "340px",
        margin: "0 10px",
        display: "inline-block",
        "& .rc-slider-rail": {
            height: "8px"
        },
        "& .rc-slider-track": {
            backgroundColor: "transparent"
        },
        "& .rc-slider-handle:focus, .rc-slider-handle:hover, .rc-slider-handle:active, .rc-slider-handle": {
            backgroundColor: "green",
            outline: "none",
            border: "2px solid green",
            boxShadow: "none",
            width: "13px",
            height: "13px",
            marginLeft: "-7px",
            marginTop: "-3px"
        },
        [sizes.down('md')]:{
            width: '150px'
        }
    }, selectContainer: {
        marginLeft: "auto",
        marginRight: "1rem"
    }
};