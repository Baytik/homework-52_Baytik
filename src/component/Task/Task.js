import React, {Component} from 'react';

const Task = props => {
    return (
        <div className="Todo">
            <span>{props.text}</span>
            <button className="btn-1">delete</button>

        </div>
    )
};
export default Task;