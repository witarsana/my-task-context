import React from 'react';
import Button from './Button';
import '../styles/TodoItem.css';

const TodoItem = ({ data, showEdit, showDelete }) => {
    return (
        <div className="todo-container">
            <p>{data.title}</p>
            <div>
                <Button action={() => { showEdit(data.id) }} variant="warning" text="Edit" />
                <Button action={() => { showDelete(data.id) }} variant="danger" text="Delete" />
            </div>
        </div>
    )
}

export default TodoItem;