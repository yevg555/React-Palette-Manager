import { useLocalStorageState } from "./useLocalStorageState";
import seedColors from '../seedColors';
// import uuid from "uuid/v4";
const useAppState = () => {
    const [palettes, setPalettes] = useLocalStorageState("palettes", seedColors);
    return {
        palettes,
        findPalette: (id) => {
            return palettes.find(function (palette) {
                return palette.id === id;
            });
        },
        deletePalette: (id) => {
            setPalettes(
                palettes => palettes.filter(palette => palette.id !== id)
            );
        },
        savePalette: (newPalette) => {
            setPalettes(
                palettes => [...palettes, newPalette]
            );
        },
        resetList: () => {
            setPalettes(seedColors);

        }

    };
};

export default useAppState;
