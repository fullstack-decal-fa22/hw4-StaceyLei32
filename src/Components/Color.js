import React from 'react';

 const Color = (props) => {
    return (
        <button className="Color"
            onClick={() => props.handleClick(props.color)} > Post {props.color}
        </button>  )
    }
      
 /*create a function that takes in props as a function (use props paramenter)

    
/* TODO: Translate the below class component to a functional component! */
export default Color;