import React from 'react'
import '../styles/box.css'


export default function Box(props) {
    
    let styling = {
        'backgroundColor': props.on ? '#222222' : 'transparent'
    }
    return (
        <div className='box' style={styling} onClick={props.handleToggle}></div>
    )
}