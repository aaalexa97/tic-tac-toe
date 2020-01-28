import React from 'react';
import './index.css';

class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: null,
        };
    }
    render(){
    return(
        <button 
        className = "square" 
        onclick={() => this.setState({value: 'X'})}
        > 
            {this.state.value}
        </button>
    );
    }
}

class Board extends React.Component{
    renderSquare(i){
        return <Square value={i} />;
    }
    render() {
        const status = 'Next player:';

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
            </div>
        );
    }
}

class Game extends React.Component{
    render(){
        return(
            <div className="game">
                <div className="board">
                    <Board />
                </div>
            </div>
        )
    }
}

export default Game;
