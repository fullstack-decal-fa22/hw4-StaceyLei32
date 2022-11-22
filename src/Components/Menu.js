import React from 'react';
/* Add any imports you think you might need here! */
import Color from './Color';

const Menu = (props) => { 

    return (
      <div className="colorOptions">
          <Color color="red" handleClick={props.handleClick} />
          <Color color="pink" handleClick={props.handleClick}/>
          <Color color="green" handleClick={props.handleClick}/>
          <Color color="blue" handleClick={props.handleClick}/>
      </div>
    );
}

export default Menu;