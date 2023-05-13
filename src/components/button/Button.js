import React from 'react';

const Button = ({ title, btnStyle, handleClick}) => {
    return (
        <button className={btnStyle} onClick={handleClick}>
            {title}
        </button>
    )
}

export default Button;