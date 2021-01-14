export const add = data => {
    return {
        type: "ADD",
        payload: data
    }
}

export const showEdit = id => {
    return {
        type: "SHOW_EDIT",
        payload: id
    }
}

export const closeEdit = () => {
    return {
        type: "CLOSE_EDIT",
        payload: null
    }
}

export const saveEdit = (data) => {
    return {
        type: "SAVE_EDIT",
        payload: data
    }
}

export const showDelete = id => {
    return {
        type: "SHOW_DELETE",
        payload: id
    }
}
export const closeDelete = () => {
    return {
        type: "CLOSE_DELETE"
    }
}

export const deleteData = () => {
    return {
        type: "DELETE"
    }
}