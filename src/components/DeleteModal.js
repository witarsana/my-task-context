import React, { useContext } from 'react';
import { DataContext } from '../stores/context/DataContext';
import '../styles/DeleteModal.css';
import Button from './Button';
import { closeDelete, deleteData } from '../stores/actions/TodoAction';

const DeleteModal = () => {
    const { todos, dispatchTodos } = useContext(DataContext);
    const { isDelete } = todos;
    const cancelDelete = () => {
        dispatchTodos(closeDelete());
    }
    const del = () => {
        dispatchTodos(deleteData());
    }
    if (isDelete)
        return (
            <div className="container-del">
                <div className="modal-delete">
                    <h4>Are you sure delete data?</h4>
                    <div className="btn-group">
                        <Button action={del} text="Delete" variant='warning' />
                        <Button action={cancelDelete} text="Cancel" variant='danger' />
                    </div>
                </div>
            </div>
        );
    else
        return null

}

export default DeleteModal;