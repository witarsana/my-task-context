import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import EditModal from './EditModal'
import DeleteModal from './DeleteModal';
import { DataContext } from '../stores/context/DataContext';
import { showEdit, showDelete } from '../stores/actions/TodoAction';

const Todos = () => {
    const { todos, dispatchTodos } = useContext(DataContext);
    const show = (id) => {
        dispatchTodos(showEdit(id));
    }
    const del = (id) => {
        dispatchTodos(showDelete(id));
    }
    return (
        <React.Fragment>
            {todos.todos.map(todo =>
                <TodoItem showDelete={del} showEdit={show} key={todo.id} data={todo} />

            )}
            <EditModal />
            <DeleteModal />
        </React.Fragment>
    )
}

export default Todos;