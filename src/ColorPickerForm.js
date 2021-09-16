import React, { useState, useEffect } from "react";
import styles from "./styles/ColorPickerFormStyles"
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


function ColorPickerForm(props) {

    const [currentColor, setCurrentColor] = useState("teal")
    const [newColorName, setNewColorName] = useState("")
    const { paletteIsFull, classes, colors, addNewColor } = props;

    useEffect(() => {
        ValidatorForm.addValidationRule("isColorNameUnique", value =>
            colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule("isColorUnique", value =>
            colors.every(({ color }) => color !== currentColor)
        );
    })
    const updateCurrentColor = (newColor) => {
        setCurrentColor(newColor.hex)
    }

    const handleSubmit = () => {
        const newColor = {
            color: currentColor,
            name: newColorName
        };
        addNewColor(newColor);
        setNewColorName("")
    }

    return (
        <div className={classes.container}>
            <ChromePicker
                color={currentColor}
                onChangeComplete={updateCurrentColor}
            />
            <ValidatorForm onSubmit={handleSubmit} instantValidate={false}>
                <TextValidator
                    className={classes.colorNameInput}
                    placeholder='Color Name'
                    value={newColorName}
                    name='newColorName'
                    variant='filled'
                    margin='normal'
                    onChange={e => setNewColorName(e.target.value)}
                    validators={["required", "isColorNameUnique", "isColorUnique"]}
                    errorMessages={[
                        "Enter a color name",
                        "Color name must be unique",
                        "Color already used!"
                    ]}
                />
                <Button
                    variant='contained'
                    type='submit'
                    color='primary'
                    disabled={paletteIsFull}
                    className={classes.addColor}
                    style={{
                        backgroundColor: paletteIsFull ? "grey" : currentColor
                    }}
                >
                    {paletteIsFull ? "Palette Full" : "Add Color"}
                </Button>
            </ValidatorForm>
        </div>
    );
}
export default withStyles(styles)(ColorPickerForm);