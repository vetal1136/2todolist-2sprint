import {ChangeEvent, useState} from "react";


type Props = {
    oldTitle: string
    updateItem:(newTitle:string)=>void

};
export const EditableSpan = ({oldTitle,updateItem}: Props) => {
    const [editMode, setEditMode] = useState(false)
    const [newTitle, setNewTitle] = useState(oldTitle)

    const activateEditModeHandler = () => {
        setEditMode(!editMode)
        if (editMode){
            updateItem(newTitle)
        }

    }

    const changeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }


    return (
        editMode
            ? <input value={newTitle} onChange={changeTitleHandler} onBlur={activateEditModeHandler} autoFocus/>
            : <span onDoubleClick={activateEditModeHandler}>{oldTitle}</span>

    );
};