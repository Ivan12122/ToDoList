import React from 'react'
import s from './EditEfect.module.css'
import { useState } from 'react'

//принимает в пропсах text = текущее нахвание функцию для изменения имени назначенную на кнопку и Id листа которое передаётся в функцию
//setEditEfecr для того что бы убрать инпут

const EditEfect = (props) => {

    const [input, setInput] = useState(props.text)

    const edit = (listId) =>{
        props.setEditEfecr(false)
        props.edit(listId, input)
    }

    return (
        <div className ={s.EditEfect}>
            <input className={s.edit} type='input' value = {input} onChange = {(e)=> setInput(e.target.value)}></input>
            <button className={s.btnRename} onClick = {() => edit(props.listId)}>Изменить</button>
        </div>
    )
}

export default EditEfect