import React from 'react';
import './moviecards.css';
import Rating from './rating';


    const moviescards = (props,) => {
 

    
 
        return (
            <div className= 'moviescntr'>
                {props.movies.map((el, i) => ( 
                    <div className= 'moviecard'>
                        <h2> {el.name} </h2> 
                        <img src={el.img} alt='movie' className='movieimg' /> 
                        <Rating count={el.rating} handleChangeRating={ () => {}}/>
                        <p> {el.director} </p> 
                    </div> 
           ))}
            {/* <AddMovie addMovie={props.addMovie} /> */}
            </div>
        )
  
    
}
        
export default moviescards ;