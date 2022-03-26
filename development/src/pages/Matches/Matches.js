import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useForm, Form } from "../../components/useForm";
import  Button from "../../components/Button";
import Select  from "../../components/Select";

import HeroSection from '../../HeroSection';


function Matches() {

  const flagMap = {
   "6": "https://cdn.countryflags.com/thumbs/india/flag-square-250.png",
   "5": "https://cdn.countryflags.com/thumbs/new-zealand/flag-square-250.png",
   "8": "https://cdn.countryflags.com/thumbs/sri-lanka/flag-square-250.png",
   "7": "https://cdn.countryflags.com/thumbs/pakistan/flag-square-250.png",
   "1": "https://cdn.countryflags.com/thumbs/england/flag-square-250.png",
   "2": "https://cdn.countryflags.com/thumbs/australia/flag-square-250.png",
   "25": "https://cdn.countryflags.com/thumbs/bangladesh/flag-square-250.png",
   "3": "https://cdn.countryflags.com/thumbs/south-africa/flag-square-250.png",
   "4": "https://cdn.countryflags.com/thumbs/west-indies/flag-square-250.png",
   "9": "https://cdn.countryflags.com/thumbs/zimbabwe/flag-square-250.png",
   "29": "https://cdn.countryflags.com/thumbs/ireland/flag-square-250.png",
   "40": "https://cdn.countryflags.com/thumbs/afghanistan/flag-square-250.png",
   "30": "https://cdn.countryflags.com/thumbs/scotland/flag-square-250.png",
   "15": "https://cdn.countryflags.com/thumbs/netherlands/flag-square-250.png",
   "27": "https://cdn.countryflags.com/thumbs/united-arab-emirates/flag-square-250.png",
   "0" : "data:image/png;base64,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"
  };

  
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


]);

const [team, setTeam] = useState("");


const [matchList, setMatchList] = useState([]);



  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
    let res = await fetch("http://localhost:8080/upcoming-matches/search", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        team: team
      
        }),
    });
    let resJson = await res.json();
    if (res.status === 200) {
      setMatchList(resJson.data)
        
    } else {
        console.log(res);
        
    
    }
    } catch (err) {
    console.log(err);
    }
    
};

  return (

    
    <>
      <Form onSubmit={handleSubmit}>
        <Select
          name="team"
          label="Select Team"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          options={teamList}
        />
       
        {/* <Select
          name="month"
          label="Select Month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          options={venueList}
        /> */}

        <Button
          type="submit"
          text="Submit"
          onClick={handleSubmit}                   
        />
        
      </Form>
      {matchList.map((value, index) => {
        return <HeroSection {...{
          header2: value.slug,
          describe1 :  value.date,
          describe2 :  value.title,
          describe3 : value.time ,
          describe4 : value.ground ,          
          img1 : flagMap[value.team1],
          img2 :  flagMap[value.team2],
         
      }} />
      })}

    </>
  )
}


export default Matches;