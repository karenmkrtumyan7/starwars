import React from 'react';
import "./record.css";

function Record(props) {
    const {data, label, field} = props;
    return (
            <li className="record">
                <span>{label} </span> 
                <span>{data[field]}</span>
            </li>
    )
}

export default Record;