import React from 'react';

const TodoItem = (props) => {
    return (
        <li>
            {props.title}
            {/* <a href="">[Modify]</a> */}
            {/* <a href="">[Delete]</a> */}
        </li>
    );
};

export default TodoItem;