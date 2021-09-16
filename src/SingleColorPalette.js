import React, { useContext } from 'react'
import ColorBox from './ColorBox';
import PaletteFooter from "./PaletteFooter";
import styles from './styles/SingleColorPaletteStyles'
import { Link } from 'react-router-dom'
import { withStyles } from "@material-ui/styles";
import Navbar from "./Navbar";
import { formatContext } from './contexts/formatContext'


function SingleColorPalette(props) {
    const [format, setFormat, changeFormat] = useContext(formatContext)

    const { palette, colorId, classes } = props
    const { paletteName, id } = props.palette;

    const gatherShades = (palette, colorToFilterBy) => {
        let shades = []
        let allColors = palette.colors

        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        return shades.slice(1);
    }
    const shades = gatherShades(palette, colorId).reverse()


    const colorBoxes = shades.map(color =>
        <ColorBox
            showingFullPalette={false}
            key={color.name}
            name={color.name}
            background={color[format]}

        />)
    return (
        <div className={classes.Palette}>
            <Navbar
                handleChange={changeFormat}
                showingAllColors={false}
                format={format}
            />
            <div className={classes.colors}>
                {colorBoxes}
                <div className={classes.goBack}>
                    <Link to={`/palette/${id}`} >GO BACK</Link>
                </div>
            </div>
            <PaletteFooter paletteName={paletteName} />
        </div>
    )

}

export default withStyles(styles)(SingleColorPalette)