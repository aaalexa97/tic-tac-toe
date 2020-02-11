import React from 'react';
import './index.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const SquareButton = withStyles({
    root: {
      background: '#000',
      '&:hover': {background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',},
      border: '1px',
      borderStyle: 'solid',
      borderColor: 'white',
      color: 'white',
      height: '100px',
      width: '100px',
      fontSize: '3em',
    },
    disabled: {
        background: '#6e6e6e',
      borderStyle: 'solid',
      border: '1px',
      borderColor: 'white',
      height: '100px',
      width: '100px',
      fontSize: '3em',
      color: 'white',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

    function Square(props){
        return (

            <SquareButton disabled={props.disabled} onClick = {props.onClick}>
                {props.value}
            </SquareButton>

        )
    }

export default Square;
