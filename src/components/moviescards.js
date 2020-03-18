import React from 'react';
import './moviecards.css';
import Rating from './rating';
import AddMovie from "./addmovie";

const moviescards = ({movies, handleChangeRating,addMovie}) => {
    return (
        <div className= 'moviescntr'>
            {movies.map((el, i) => ( 
                <div className= 'moviecard'>
                    <h2> {el.name} </h2> 
                    <img src={el.img} alt='movie' className='movieimg' /> 
                    <Rating count={el.rating} handleChangeRating={handleChangeRating}/>
                    <p> {el.director} </p> 
                </div> 
       ))}
        <AddMovie addMovie={addMovie} />
        </div>
    )


}
    
export default moviescards ;