import React, { useContext, useState, useEffect } from 'react';
import '../styles/EditModal.css';
import Button from './Button';
import { DataContext } from '../stores/context/DataContext';
import { closeEdit, saveEdit } from '../stores/actions/TodoAction';

const EditModal = () => {
    const { todos, dispatchTodos } = useContext(DataContext);
    const { isEdit, editId } = todos;
    const editData = todos.todos.find(td => td.id === editId);
    const closeE = () => {
        dispatchTodos(closeEdit());
    }
    const [text, setText] = useState('');
    const changeText = e => {
        setText(e.target.value);
    }
    const saveE = () => {
        dispatchTodos(saveEdit(text));
    }
    useEffect(() => {
        if (editData)
            setText(editData.title);
    }, [editData])

    if (isEdit) {
        return (
            <div className="container-edit">
                <div className="dialog">
                    <input onChange={changeText} value={text} className="input" type="text" />
                    <Button action={saveE} text="Save" variant="success" />
                    <Button action={closeE} text="Cancel" variant="danger" />
                </div>
            </div>
        )
    }
    return null

}

export default EditModal;