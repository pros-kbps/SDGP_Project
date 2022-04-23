import React from "react";
import "./Statistics.css";
import { Link ,useHistory} from 'react-router-dom';

function NameList(props) {
    const history = useHistory();
    let onClick = async (e) => {
        let res = await fetch("http://localhost:8081/team-players/player/"+props.objectId, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
            
        });
        let resJson = await res.json();
        //data = [team1,team2,venue,tossWinner,tossDecision]
        if (res.status === 200) {
            resJson.data.countryName=props.countryName;
            history.push({pathname:"/player",state:resJson.data});
            
        } else {
            console.log(res);
           
        
        }


        

      };

    

    return(
        <div className="list" onClick={onClick}>
            <div className="image">
                <img src ={"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/" + props.image?.url }/> 
                
            </div>

            <div className="description">
            
           <h1><Link className="h1" to="/player" state={{ data: props }}>{props.name}</Link></h1> 
           <p>{props.longName}</p>
            <p className="age">  Age  { new Date().getFullYear() -props.dateOfBirth?.year} </p>
            </div>
            
            
        </div>
    )
}

export default NameList;