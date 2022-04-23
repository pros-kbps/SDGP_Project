import React, { useState } from 'react';

import Details from "./Details";
import {playerOne, playerTwo, playerThree} from './Data';

function Player(props) {

  
  console.log(props.location.state);
  

    
  return (
    
    <React.Fragment>
        
        <div>
            <Details {...props.location.state}/>
            
        </div>

    </React.Fragment>
  );
}

export default Player;