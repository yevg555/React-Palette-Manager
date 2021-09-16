import React from "react";
import classNames from "classnames";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import DraggableColorList from "./DraggableColorList";
import styles from "./styles/NewPaletteFormStyles";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import { Divider } from '@material-ui/core/';
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import useNewPaletteState from "./hooks/useNewPaletteState";

function NewPaletteForm(props) {
    const {
        isOpen, colors,
        handleDrawerOpen, handleDrawerClose,
        addNewColor, clearColors,
        addRandomColor, handleSubmit,
        removeColor, onSortEnd
    } = useNewPaletteState(props)
    const { maxColors = 20, classes, palettes } = props;
    const paletteIsFull = colors.length >= maxColors;



    return (
        <div className={classes.root}>
            <PaletteFormNav
                open={isOpen}
                palettes={palettes}
                handleSubmit={handleSubmit}
                handleDrawerOpen={handleDrawerOpen}
            />

            <Drawer
                className={classes.drawer}
                variant='persistent'
                anchor='left'
                open={isOpen}
                classes={{
                    paper: classes.drawerPaper
                }}
            >

                <div className={classes.drawerHeader}>
                    <div />
                    <h1>New Palette</h1>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider className={classes.MuiDividerRoot} />
                <div className={classes.container}>
                    <Typography variant='h4' gutterBottom>
                        Design Your Palette
                    </Typography>
                    <div className={classes.buttons}>
                        <Button
                            variant='contained'
                            color='secondary'
                            onClick={clearColors}
                            className={classes.button}
                        >
                            Clear Palette
                        </Button>
                        <Button
                            variant='contained'
                            className={classes.button}
                            color='primary'
                            onClick={addRandomColor}
                            disabled={paletteIsFull}
                        >
                            Random Color
                        </Button>
                    </div>
                    <ColorPickerForm
                        paletteIsFull={paletteIsFull}
                        addNewColor={addNewColor}
                        colors={colors}
                    />
                </div>
            </Drawer>
            <main
                className={classNames(classes.content, {
                    [classes.contentShift]: isOpen
                })}
            >
                <div className={classes.drawerHeader} />
                <DraggableColorList
                    colors={colors}
                    removeColor={removeColor}
                    axis='xy'
                    onSortEnd={onSortEnd}
                    distance={20}
                />
            </main>
        </div>
    );

}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);