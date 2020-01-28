import React from 'react';
import './index.css';
import Square from './Square.js';

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            isXNext: false,
        };
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        if(calcWin(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? 'o' : 'x';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
      }
    renderSquare(i){
        return ( <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />);
    }
    render() {
        const win = calcWin(this.state.squares);
        let status;
        if(win){
            status = "Winner: " + win;
        }
        else{
            status = 'Next player: ' + (this.state.xIsNext ? 'O' : 'X');
        }

        return(
            <div>
                <div className="title">Tic Tac Toe</div>
                <div className="row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

                <div className="status">{status} </div>

                <div className="restart">restart game</div>
            </div>
        );
    }
}




function calcWin(squares){
    const wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for (let i = 0; i < wins.length; i++){
        const[a,b,c] = wins[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}

export default Board;