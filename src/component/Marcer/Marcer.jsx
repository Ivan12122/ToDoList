import React from 'react'

import './Marcer.css'

const Marcer = (props) => {
    return (
        <div key={props.color.id} style={{ background: props.color.hex }}
            className={props.small ? 'small' : 'big'}
            id = {props.isActiv ? 'isActiv' : ''}
            onClick={() => props.onClick
                ? props.onClick(props.color.id)
                : (1)} />
    )
}

export default Marcer;