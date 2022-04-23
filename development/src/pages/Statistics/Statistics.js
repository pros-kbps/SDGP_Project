import React, { useState } from 'react';
import NameList from "./NameList";
import { playerOne, playerTwo, playerThree } from "./Data";

function Statistics() {

  const teamList =([ { 
    id: '6', title: 'India' },
{ id: '5', title: 'New Zealand' },
{ id: '8', title: 'Sri Lanka' },
{ id: '7', title: 'Pakistan' },
{ id: '1', title: 'England' },
{ id: '2', title: 'Australia' },
{ id: '25', title: 'Bangladesh' },
{ id: '3', title: 'South Africa' },
{ id: '4', title: 'West Indies' },
{ id: '9', title: 'Zimbabwe' },
{ id: '29', title: 'Ireland' },
{ id: '40', title: 'Afghanistan' },
{ id: '30', title: 'Scotland' },
{ id: '15', title: 'Netherlands' },
{ id: '27', title: 'UAE' },
{ id: '28', title: 'Namibia' },
{id: '20', title: 'Papua New Guinea'},
{id: '33', title: 'Nepal'},
{id: '37', title: 'Oman'},
]);

let [team, setTeam] = useState("6");


let [playerStatsList, setPlayerStatsList] = useState([]);

let getPlayerStatsList= async (team1)=> {
  try {
    let res = await fetch("http://128.199.26.201:8081/team-players/search", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        team: team1
      
        }),
    });
    let resJson = await res.json();
    if (res.status === 200) {
      let countryName="";
      for(var i=0; i<teamList.length; i++){
        if(teamList[i].id == team1){
          countryName=teamList[i].title;
          break;
        }
      }

      for(var i=0; i<resJson.data.length; i++){
        resJson.data[i].countryName = countryName;
      }

      setPlayerStatsList(resJson.data)
        
    } else {
      console.log(res);
        
    
    }
    } catch (err) {
      console.log(err);
    }
}


let handleSubmit = async (e) => {
  // e.preventDefault();
  setTeam(e.target.value);
  getPlayerStatsList(e.target.value);
};

  return (

    <React.Fragment>
      <div>
        <br></br>
        <hr></hr>
        <br></br>

        <h1>Choose a Country</h1>
        <div class="select" >
          <select name="country" id="country" onChange={handleSubmit} value={team} >
            {teamList.map((value, index) => {
        return <option value={value.id}>{value.title}</option>
      })}
          </select>
        </div>
      </div>
      

      <div>
      {playerStatsList.map((value, index) => {
        return <NameList {...value} />
      })}
      
      </div>
    </React.Fragment>
  );
}

export default Statistics;
