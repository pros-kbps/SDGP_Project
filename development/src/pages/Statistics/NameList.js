import React from "react";
import "./Statistics.css";
import { Link } from 'react-router-dom';

function NameList(props) {
    return(
        <div className="list">
            <div className="image">
            <img src ={props.img}/> 
            </div>

            <div className="description">
            
           <h1><Link className="h1" to="/player">{props.name}</Link></h1> 
           <p>{props.fullName}</p>
            <p className="age">  Age  {props.age} </p>
            </div>
            
            
        </div>
    )
}

export default NameList;