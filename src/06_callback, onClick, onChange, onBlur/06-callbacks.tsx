import React, {MouseEvent} from "react";


export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {

        alert(event.currentTarget.name)
    }

    const saveUser = () => {
        alert('user was deleted')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    return <div>
        <textarea onChange={onNameChanged}>Maria</textarea>
        <div><button name={"delete"} onClick={deleteUser}>delete</button></div>
        <div><button name={"save"} onClick={deleteUser}>save</button></div>

    </div>
}