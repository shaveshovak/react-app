import React from 'react';

const Button = ({ title, btnStyle, handleClick, id, handleClick2}) => {

    const btnClick = () => {
        console.log('I am a button')
      }

      const btnClick2= () => {
        console.log('I am a button')
      }
    return (
        <button className={btnStyle} onClick={() => id === true ? btnClick : btnClick2}>
            {title}
        </button>
    )
}

export default Button;