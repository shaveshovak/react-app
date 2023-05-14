import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cards = () => {

    const api_url = 'https://jsonplaceholder.typicode.com/todos/';
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(api_url)
        .then(response => response.json())
        .then(data => {
            setTodos(data);
        });
        
    }, [])

   console.log(todos)

    // const arrList = [
    //     {
    //         id: 10,
    //         title: 'Title 1',
    //         text: 'text'
    //     },
    //     {
    //         id: 11,
    //         title: 'Title 2',
    //         text: 'text'
    //     },
    //     {
    //         id: 12,
    //         title: 'Title 3',
    //         text: 'text'
    //     }
    // ];

    return (
        <div>
            {
                todos.map((item, i) => {
                    return(
                        <Card key={i} title={item.title} text={item.text} />
                    )
                })
            }

        </div>
    )
}

export default Cards;