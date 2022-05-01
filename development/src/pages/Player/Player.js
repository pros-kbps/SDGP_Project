import React, { useState } from 'react';

import Details from "./Details";

function Player(props) {

  
  console.log(props);
  

    
  return (
    
    <React.Fragment>
        
        <div>
            <Details {...props.location.state}/>
            
        </div>

    </React.Fragment>
  );
}

export default Player;