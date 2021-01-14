export const TodoReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD":
            const newItem = {
                id: state.todos.length + 1,
                title: payload
            }
            const newTodos = [...state.todos, newItem];
            return {
                ...state,
                todos: newTodos
            }
        case "SHOW_EDIT":
            return {
                ...state,
                isEdit: true,
                editId: payload
            }
        case "CLOSE_EDIT":
            return {
                ...state,
                isEdit: false,
                editId: ''
            }
        case "SAVE_EDIT":
            const index = state.todos.findIndex(td => td.id === state.editId);
            const newData = { id: state.editId, title: payload };
            state.todos.splice(index, 1, newData);
            return {
                ...state,
                isEdit: false,
                todos: state.todos
            }
        case "SHOW_DELETE":
            return {
                ...state,
                isDelete: true,
                deleteId: payload
            }
        case "CLOSE_DELETE":
            return {
                ...state,
                isDelete: false,
                deleteId: ''
            }
        case "DELETE":
            return {
                ...state,
                isDelete: false,
                deleteId: '',
                todos: state.todos.filter(td => td.id !== state.deleteId)
            }

        default:
            return state;

    }
}

