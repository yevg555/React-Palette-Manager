import { useState } from "react"
import useToggle from './useToggleState'

export default (props) => {
    const [isOpenDeleteDialog, toggleIsOpenDeleteDialog] = useToggle(false)
    const [isOpenResetDialog, toggleIsOpenResetDialog] = useToggle(false)
    const [deletingId, setDeletingId] = useState("")

    const toggleDeleteDialog = (id) => {
        toggleIsOpenDeleteDialog();
        setDeletingId(id);

    };
    const goToPalette = (id) => {
        props.history.push(`/palette/${id}`)
    };
    const handleDelete = () => {
        props.deletePalette(deletingId);
        toggleDeleteDialog();
        setDeletingId("");
    }
    const handleReset = () => {
        props.resetList();
        toggleIsOpenResetDialog();
    }
    return {
        isOpenDeleteDialog,
        deletingId,
        toggleDeleteDialog,
        toggleIsOpenResetDialog,
        isOpenResetDialog,
        goToPalette,
        handleDelete,
        handleReset
    }
};


