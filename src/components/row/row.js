import React from 'react';
import "./row.css";

function Row(props) {
    const {left, right} = props;
    return(
        <footer>
            {left}
            {right}
        </footer>
    )    
}

export default Row;