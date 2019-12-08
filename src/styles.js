const styles = theme => ({
    bandButton: {
        [theme.breakpoints.down("xs")]: {
            justifyContent: "flex-start"
        },
        [theme.breakpoints.up("sm")]: {
            justifyContent: "flex-end"
        },
        marginRight: 5,
    },
    pageNavBar: {
        backgroundColor: "#eee"
    },
    headerBandTitle: {
        [theme.breakpoints.down("xs")]: {
            marginTop: 10
        },
        [theme.breakpoints.up("sm")]: {
            marginBottom: 5
        }
    },
    pageTitle: {
        color: "#666"
    },
    greenText: {
        color: "#2e7d42"
    },
    greenBadge: {
        backgroundColor: "#39aa56",
        color: "#ffffff"
    },
    band: {
        borderLeft: "10px solid #39aa56",
        padding: 20,
        marginBottom: 10
    },
    disabled: {
        color: "#a1a1a1"
    },
    disabledBand: {
        borderLeft: "10px solid #f1f1f1"
    },



    homeroot: {
        padding: theme.spacing(2)
    },
    listcard: {
        backgroundColor: '#eeeeee'
    },
    mildWhiteText: {
        color: "#eeeeee"
    },
    mildBlackText: {
        color: "#555555"
    },
    error: {
        backgroundColor: '#cc0000'
    },
    jawsGoldText: {
        color: "#fbc02d"
    },
    jawsGoldBg: {
        backgroundColor: "#fbc02d"
    },
    purpleBg: {
        backgroundColor: "#2a2644"
    },
    whiteIcons: {
        color: "#ffffff"
    },
    purpleText: {
        color: '#57346e'
    },
    textField: {
        width: 245
    }
});
export default styles;