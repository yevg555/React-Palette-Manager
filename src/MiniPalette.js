import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/MiniPaletteStyles";
import { withStyles } from "@material-ui/styles";

const MiniPalette = React.memo((props) => {
    const { classes, paletteName, emoji, colors, goToPalette, openDialog, id } = props;

    const deletePalette = (e) => {
        e.stopPropagation();
        openDialog(id);
    }
    const handleClick = () => {
        goToPalette(id);
    }

    const miniColorBoxes = colors.map(color => (
        <div
            className={classes.miniColor}
            style={{ backgroundColor: color.color }}
            key={color.name}
        />
    ));
    return (
        <div className={classes.root} onClick={handleClick}>
            <DeleteIcon
                className={classes.deleteIcon}
                style={{ transition: "all 0.3s ease-in-out" }}
                onClick={deletePalette}
            />
            <div className={classes.colors}>{miniColorBoxes}</div>
            <h5 className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
            </h5>
        </div >
    );
}, (prevProps, nextProps) => {
    if (prevProps.CSSTransition !== nextProps.CSSTransition) {
        return false
    }

    return true
});

export default withStyles(styles)(MiniPalette);