import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from 'emoji-mart'
import "emoji-mart/css/emoji-mart.css";



function PaletteMetaForm(props) {
    const [stage, setStage] = useState("form")
    const [newPaletteName, setNewPaletteName] = useState("")
    const { hideForm, handleSubmit, palettes } = props;

    useEffect(() => {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
            palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    })

    const showEmojiPicker = () => {
        setStage("emoji");
    };
    const savePalette = (emoji) => {
        const newPalette = {
            paletteName: newPaletteName,
            emoji: emoji.native
        };
        handleSubmit(newPalette);
        setStage("");
    }


    return (
        <div>
            <Dialog open={stage === "emoji"} onClose={hideForm}>
                <DialogTitle id='form-dialog-title'>
                    Choose a Palette Emoji
                </DialogTitle>
                <Picker title='Pick a Palette Emoji'
                    set="google"
                    showSkinTones={false}
                    showPreview={false}
                    emojiSize={30}
                    emojiTooltip={true}
                    exclude={['recent']}
                    onSelect={savePalette} />
            </Dialog>
            <Dialog
                open={stage === "form"}
                aria-labelledby='form-dialog-title'
                onClose={hideForm}
            >
                <DialogTitle id='form-dialog-title'>
                    Choose a Palette Name
                </DialogTitle>
                <ValidatorForm onSubmit={showEmojiPicker}>
                    <DialogContent>
                        <DialogContentText>
                            Please enter a name for your new beautiful palette. Make sure
                            it's unique!
                        </DialogContentText>
                        <TextValidator
                            label='Palette Name'
                            value={newPaletteName}
                            name='newPaletteName'
                            onChange={evt => setNewPaletteName(evt.target.value)}
                            fullWidth
                            margin='normal'
                            validators={["required", "isPaletteNameUnique"]}
                            errorMessages={["Enter Palette Name", "Name already used"]}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={hideForm} color='primary'>
                            Cancel
                        </Button>
                        <Button variant='contained' color='primary' type='submit'>
                            Save Palette
                        </Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        </div>
    )
}


export default PaletteMetaForm;