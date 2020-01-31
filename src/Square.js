import React from 'react';
import './index.css';

    function Square(props){
        return (
            <div className={props.className} onClick = {props.onClick}>
                {props.value}
            </div>
        )
    }

export default Square;
