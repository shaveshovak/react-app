import React from 'react';
import './Card.scss';

const Card = ({ title, text}) => {
    return (
        <div className='card'>
            <h4>{title}</h4>
            <p>
                {text}
            </p>
        </div>
    )
}

export default Card;