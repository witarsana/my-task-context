import React, { useState, useContext } from 'react';
import Button from './Button';
import { DataContext } from '../stores/context/DataContext';
import { add } from '../stores/actions/TodoAction';
import '../styles/FormInput.css';

const FormInput = () => {
    const { dispatchTodos } = useContext(DataContext);
    const [text, setText] = useState('')
    const changeText = (e) => {
        setText(e.target.value);
    }
    const submit = (e) => {
        e.preventDefault();
        if (text.length > 0) {
            dispatchTodos(add(text));
            setText('');
        }
    }
    return (
        <form onSubmit={submit} className='form' >
            <input onChange={changeText} value={text} className='input' type="text" />
            <Button text="Save" variant='primary' />
        </form>
    )
}

export default FormInput;