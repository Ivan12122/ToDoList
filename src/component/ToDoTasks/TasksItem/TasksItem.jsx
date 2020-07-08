import React, { useState } from 'react'
import pain from '../../../images/pain.svg'
import s from './TasksItem.module.scss'
import close from '../../../images/close.svg'
import check from '../../../images/check.svg'

const TasksItem = (props) => {
    return (
        <div key ={props.text.id} className={s.task}>
            <input id={`check${props.text.id}`} type='checkbox'
             defaultChecked = {props.text.compleated} onChange = {() => props.compleated(props.text)} />
            <label htmlFor={`check${props.text.id}`}><img className = {s.check} src={check} /></label>
            <span>{props.text.text}</span>
            <img src={close} className={s.close} onClick = {()=>{props.deliteToDo(props.text.id)}}/>
        </div>
    )
}

export default TasksItem