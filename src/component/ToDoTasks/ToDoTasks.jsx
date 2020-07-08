import React from 'react'
import s from './ToDoTasks.module.scss'
import TasksItem from './TasksItem/TasksItem'
import pain from '../../images/pain.svg'
import AddTasksItem from './TasksItem/AddTasksItem/AddTasksItem'
import { useState } from 'react'
import EditEfect from './EditEfect/EditEfect'


const ToDoTasks = (props) => {
    const [editEfect, setEditEfecr] = useState(false)

    const rename = () => {
        setEditEfecr(!editEfect)
    }

    return (
        <div className={s.tasks}>
            <div>
                {!editEfect ?
                    <div> <span>{props.tasks.name}</span><img className={s.pain} src={pain} onClick={() => rename()} /> </div>
                    : <EditEfect setEditEfecr={setEditEfecr} edit={props.edit} listId={props.tasks.listId} />}
            </div>
            <div className={s.lain}></div>
            {props.tasks.data ? props.tasks.data.map((task, id) =>
                <TasksItem key={id} compleated={props.compleated} text={task} deliteToDo={props.deliteToDo} />)
                : <div></div>
            }
            <AddTasksItem key={props.tasks.listId} 
                listId={props.tasks.listId} newTasks={props.newTasks} />
        </div>
    )
}

export default ToDoTasks