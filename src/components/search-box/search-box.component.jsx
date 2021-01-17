import React from 'react'
import './search-box.styles.css'

export const SearchBox = ({placeholder, onSearch}) => {
    return (
        <input className="search-box" type="search" placeholder={placeholder} onChange={e => onSearch(e)} />
    )
}
