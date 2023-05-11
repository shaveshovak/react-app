import React from 'react';
import Card from './Card';

const Cards = () => {
    const arrList = [
        {
            id: 10,
            title: 'Title 1',
            text: 'text'
        },
        {
            id: 11,
            title: 'Title 2',
            text: 'text'
        },
        {
            id: 12,
            title: 'Title 3',
            text: 'text'
        }
    ]
    return (
        <div>
            {
                arrList.map((item, i) => {
                    return(
                        <Card key={i} title={item.title} text={item.text} />
                    )
                })
            }

        </div>
    )
}

export default Cards;