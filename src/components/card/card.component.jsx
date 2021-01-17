import React from 'react'
import './card.styles.css'

export const Card = (props) => {
    console.log(props)
    const { item } = props
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${item.id}?set=set10&size=180x180`} alt={item.name}/>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
        </div>
    )
}
