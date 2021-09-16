import React from 'react'
import MiniPalette from './MiniPalette';
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from './styles/PaletteListStyles'
import { withStyles } from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import DialogTitle from "@material-ui/core/DialogTitle";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import usePaletteListState from './hooks/usePaletteListState';


function PaletteList(props) {
    const { palettes, classes } = props;
    const {
        isOpenDeleteDialog,
        toggleDeleteDialog,
        isOpenResetDialog,
        toggleIsOpenResetDialog,
        goToPalette,
        handleDelete,
        handleReset } = usePaletteListState(props)


    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1 className={classes.heading}>Palette Manager</h1>
                    <div className={classes.links}>
                        <Link to="/palette/new">Create new</Link>
                        <span> | </span>
                        <button to="/" onClick={toggleIsOpenResetDialog}>Reset</button>
                    </div>
                </nav>
                <TransitionGroup className={classes.palettes}>
                    {palettes.map(palette => (
                        <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                            <MiniPalette
                                {...palette}
                                goToPalette={goToPalette}
                                openDialog={toggleDeleteDialog}
                                key={palette.id}
                                id={palette.id}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
            <Dialog
                open={isOpenDeleteDialog}
                aria-labelledby='delete-dialog-title'
                onClose={toggleDeleteDialog}
            >
                <DialogTitle id='delete-dialog-title'>
                    Delete This Palette?
                </DialogTitle>
                <List>
                    <ListItem button onClick={handleDelete}>
                        <ListItemAvatar>
                            <Avatar
                                style={{ backgroundColor: blue[100], color: blue[600] }}
                            >
                                <CheckIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Delete' />
                    </ListItem>
                    <ListItem button onClick={toggleDeleteDialog}>
                        <ListItemAvatar>
                            <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                                <CloseIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Cancel' />
                    </ListItem>
                </List>
            </Dialog>
            <Dialog
                open={isOpenResetDialog}
                aria-labelledby='delete-dialog-title'
                onClose={toggleIsOpenResetDialog}
            >
                <DialogTitle id='delete-dialog-title'>
                    Reset This Palette?
                </DialogTitle>
                <List>
                    <ListItem button onClick={handleReset}>
                        <ListItemAvatar>
                            <Avatar
                                style={{ backgroundColor: blue[100], color: blue[600] }}
                            >
                                <CheckIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Reset' />
                    </ListItem>
                    <ListItem button onClick={toggleIsOpenResetDialog}>
                        <ListItemAvatar>
                            <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                                <CloseIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Cancel' />
                    </ListItem>
                </List>
            </Dialog>
        </div >
    )
}

export default withStyles(styles)(PaletteList);
