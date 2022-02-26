import React, { Component } from 'react';
import Square from './square';
class Board extends Component {
    render(i) { 
        return <Square value={i} />
    }
}
 
export default Board;