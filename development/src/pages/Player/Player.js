import React from "react";

import Details from "./Details";
import {playerOne, playerTwo, playerThree} from './Data';

function Player() {
    
  return (
    <React.Fragment>
        
        
        <div>
            <Details {...playerOne}/>
            
        </div>

    </React.Fragment>
  );
}

export default Player;