import { useState } from "react";
import seedColors from '../seedColors'
import { arrayMoveImmutable } from 'array-move';


const useNewPaletteState = (props) => {

    const { history, palettes, savePalette } = props
    const [isOpen, setIsOpen] = useState(true)
    const [colors, setColors] = useState(seedColors[0].colors)

    return {
        isOpen, colors,
        handleDrawerOpen: () => {
            setIsOpen(true);
        },
        handleDrawerClose: () => {
            setIsOpen(false);
        },
        addNewColor: (newColor) => {
            setColors(colors => [...colors, newColor])
        },
        clearColors: () => {
            setColors([])
        },
        addRandomColor: () => {
            const newPalettes = palettes.length === 0 ? seedColors : palettes;
            const allColors = newPalettes.map(p => p.colors).flat();
            let rand;
            let randomColor;
            let isDuplicateColor = true;
            while (isDuplicateColor) {
                rand = Math.floor(Math.random() * allColors.length);
                randomColor = allColors[rand];
                isDuplicateColor = colors.some(
                    color => color.name === randomColor.name
                );
            }
            setColors(colors => [...colors, randomColor])
        },
        handleSubmit: (newPalette) => {
            newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
            newPalette.colors = colors;
            savePalette(newPalette);
            history.push("/");

        },
        removeColor: (colorName) => {
            setColors(colors => colors.filter(color => color.name !== colorName))

        },
        onSortEnd: ({ oldIndex, newIndex }) => {
            setColors(colors => arrayMoveImmutable(colors, oldIndex, newIndex))
        },
    };
};

export default useNewPaletteState;