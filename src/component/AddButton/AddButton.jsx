import React, { useState, useEffect } from 'react'
import MenuToDos from '../MenuToDos/MenuToDos'
import s from './AddButton.module.css'
import Marcer from '../Marcer/Marcer'
import close from '../../images/close.svg'

const AddButton = (props) => {
    const [visibleAddPanel, setVisibleAddPanel] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [selectedColor, setSelectedColor] = useState('1')

    const clickAdd = (e) =>{
        props.clickAdd(e)
        setInputValue('')
        setVisibleAddPanel(false)
    }
    return (
        <div key={props.list.id} className={s.addButton}>
            <MenuToDos list={props.list} onClick={() => setVisibleAddPanel(true)} />

            {visibleAddPanel && <div className={s.addPanel}>
                <img onClick={() => setVisibleAddPanel(false)}
                    src={close}
                    className={s.close} />
                <input placeholder='Название папки' value={inputValue} onChange={e => setInputValue(e.target.value)} />
                <div className={s.marcer}>
                    {props.colors.map((color, id) => (
                        <Marcer key = {id} color={color} onClick={setSelectedColor} isActiv = {Number(selectedColor) == id + 1 ? true : false} />
                    ))}
                </div>
                <button className={s.btnAdd} onClick={() => clickAdd({ name: inputValue, colorId: selectedColor })}>Добавить</button>
            </div>}
        </div>
    )
}

export default AddButton;