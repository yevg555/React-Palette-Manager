import React from 'react'
import styles from './styles/PaletteFooterStyles'
import { withStyles } from "@material-ui/styles";


function PaletteFooter(props) {
    const { paletteName, classes } = props;
    return (
        <footer className={classes.PaletteFooter}>
            {paletteName}
        </footer>
    )
}

export default withStyles(styles)(PaletteFooter)