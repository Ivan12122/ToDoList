import React from 'react'

import './MenuToDos.scss'
import close from '../../images/close.svg'
import Marcer from '../Marcer/Marcer'

const MenuToDos = (props) => {
    return (
        <ul className='allTasks' onClick={props.onClick}>
            {props.list.map((list, id) => (
                <li key={id}
                    onClick={props.ectivItem ? () => props.ectivItem(list) : ()=>{}}
                    className={list.activ ? 'activ' : ''}>

                        {list.icon 
                        ? list.icon 
                        : <Marcer color={list.color} small={'small'} />}

                    <span>{list.name}</span>
                    {props.btnClose && <img onClick={() => props.btnClose(list.id)} src={close} className='btnClose' />}
                </li>
            ))}
        </ul>
    )
}

export default MenuToDos