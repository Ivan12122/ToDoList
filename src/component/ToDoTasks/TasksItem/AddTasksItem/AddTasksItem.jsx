import React from 'react'
import plus from '../../../../images/plus1.svg'
import s from './AddTasksItem.module.scss'

export default class AddTasksItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = { isRefactoring: true, newTasks: 'Новая Задача' }
        this.refInput = React.createRef()
    }

    onChange() {
        this.setState({ newTasks: this.refInput.current.value })
    }

    addTaskc(isRefactoring) {
        this.setState({ isRefactoring: !isRefactoring })
    }

    pushTasks() {
        const task = {
            "listId": this.props.listId,
            "text": this.state.newTasks,
            "compleated": false
        }
        this.props.newTasks(task)
        this.setState({ newTasks: '' })
        this.addTaskc(false)
    }

    render() {
        const { isRefactoring, newTasks } = this.state
        return (
            <div >
                {isRefactoring ?
                    <div className={s.addItemPanel} onClick={() => this.addTaskc(isRefactoring)} >

                        <img src={plus} alt="" />
                        <label  >Новая задача</label>
                    </div>
                    :
                    <div>
                        <input onChange={() => this.onChange()} value={newTasks} ref={this.refInput} type='input'></input>
                        <button onClick={() => this.pushTasks()}>Добавить задачу</button>
                    </div>
                }
            </div>
        )
    }
}
