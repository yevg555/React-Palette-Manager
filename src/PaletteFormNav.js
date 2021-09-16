import React, { useState } from "react";
import PaletteMetaForm from "./PaletteMetaForm";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import Button from "@material-ui/core/Button";
import styles from "./styles/PaletteFormNavStyles";

function PaletteFormNav(props) {

    const [isFormShowing, setIsFormShowing] = useState(false)

    const { classes, open, palettes, handleSubmit, handleDrawerOpen } = props;

    // const handleChange(evt) {
    //     this.setState({
    //         [evt.target.name]: evt.target.value
    //     });
    // }

    const showForm = () => {
        setIsFormShowing(true)
    }
    const hideForm = () => {
        setIsFormShowing(false)
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position='fixed'
                color='default'
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: open
                })}
            >
                <Toolbar disableGutters={!open}>
                    {!open ? <IconButton
                        color='inherit'
                        aria-label='Open drawer'
                        onClick={handleDrawerOpen}
                        className={classNames(classes.menuButton, {
                            [classes.hide]: open
                        })}
                    >
                        <AddToPhotosIcon />
                    </IconButton> : ''}

                    <Typography variant='h6' color='inherit' noWrap>
                        Create A Palette
                    </Typography>
                </Toolbar>
                <div className={classes.navBtns}>
                    <Link to='/'>
                        <Button
                            variant='contained'
                            color='secondary'
                            className={classes.button}
                        >
                            Go Back
                        </Button>
                    </Link>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={showForm}
                        className={classes.button}
                    >
                        Save
                    </Button>
                </div>
            </AppBar>
            {isFormShowing && (
                <PaletteMetaForm
                    palettes={palettes}
                    handleSubmit={handleSubmit}
                    hideForm={hideForm}
                />
            )}
        </div>
    );
}
export default withStyles(styles, { withTheme: true })(PaletteFormNav);