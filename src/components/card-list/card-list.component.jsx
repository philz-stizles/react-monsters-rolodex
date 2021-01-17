import React from 'react'
import { Card } from './../card/card.component'
import './card-list.styles.css'

export const CardList = (props) => {
    console.log(props)
    return (
        <div className="card-list">
            {props.items.map((item, i) => <Card key={i} item={item} />)}
        </div>
    )
}
