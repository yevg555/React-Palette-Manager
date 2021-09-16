import React, { useState, useContext } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import styles from "./styles/PaletteStyles";
import { withStyles } from "@material-ui/styles";
import { formatContext } from './contexts/formatContext'


function Palette(props) {
    const [format, setFormat, changeFormat, level, setLevel, changeLevel] = useContext(formatContext)
    const { colors, paletteName, emoji, id } = props.palette;
    const { classes } = props;

    const colorBoxes = colors[level].map(color => (
        <ColorBox
            background={color[format]}
            name={color.name}
            key={color.id}
            moreUrl={`/palette/${id}/${color.id}`}
            showingFullPalette
        />
    ));
    return (
        <div className={classes.Palette}>
            <Navbar
                level={level}
                changeLevel={changeLevel}
                handleChange={changeFormat}
                showingAllColors
                format={format}
                showingFullPalette
            />
            <div className={classes.colors}>{colorBoxes}</div>
            <PaletteFooter paletteName={paletteName} emoji={emoji} />
        </div>
    );
}

export default withStyles(styles)(Palette);