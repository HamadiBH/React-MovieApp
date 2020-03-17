import React from 'react';
import './searchbar.css';
import Rating from "./rating"

function searchbar(props) {


   

    



    return (
        <div className='hder'>
            <input id="newinpt" placeholder="Your movie..." type="text" onChange={e => props.handleSearch(e.target.value)} />
            
            <Rating rate={props.rating}  getRate={props.handleChangeRating}   /> 
        </div>
    )


}

export default searchbar
