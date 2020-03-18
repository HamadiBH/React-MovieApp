import React from 'react';

function Rating({ count, handleChangeRating}) {
    
    let starsarray = []    
    for(let i = 0; i < 5; i++) {                
     if(i < count) {            
        starsarray.push(<span onClick={()=>handleChangeRating(i+1) }>★</span>)        
        }        
     else {            
        starsarray.push(<span onClick={()=>handleChangeRating(i+1) }>☆</span>)       
         }    
        }    
    return (<div>{starsarray}</div>);
}

export default Rating;