import React from 'react';
import '../styles/Button.css';

const Button = ({ text, action, variant }) => {
    return (
        <button className={`btn btn-${variant}`} onClick={action}>{text}</button>
    )
}

export default Button;