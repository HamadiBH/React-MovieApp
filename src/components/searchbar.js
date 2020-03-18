import React from 'react';
import './searchbar.css';
import Rating from "./rating"

function searchbar({ count , handleChangeRating, handleSearch}) {
    
    return (
        <div className='hder'>
            <input id="newinpt" placeholder="Your movie..." type="text" onChange={e => handleSearch(e.target.value)} />
            
            <Rating count={count}  handleChangeRating={handleChangeRating}   /> 
        </div>
    )
}

export default searchbar