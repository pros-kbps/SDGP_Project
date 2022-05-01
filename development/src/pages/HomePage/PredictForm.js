
import React, { useState } from 'react';
import {Route,useHistory} from 'react-router-dom';
import { useForm, Form } from "../../components/useForm";
import  Button from "../../components/Button";
import DatePicker from "../../components/DatePicker";
import Select  from "../../components/Select";
import { Grid } from "@material-ui/core";
import StyledPaper from '../../components/StyledPaper';
import Prediction from '../PredictionPage/Prediction';
import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';
import {useLocation} from 'react-router-dom';


const data =[]
export default function PredictForm(props) {

    let findTeamById = (team)=> {
        for(var i=0; i<teamList.length; i++){
            if(teamList[i].id == team){
                return teamList[i];
            }
        }
    
    }

    const location = useLocation();
  const history = useHistory();
const [errormsg, setErrormsg] = useState("");
const [date, setDate] = useState(new Date());
const [venue, setVenue] = useState("");
const [team1, setTeam1] = useState("");
const [team2, setTeam2] = useState("");
const [tossWinner, setTossWinner] = useState("");
const [tossDecision, setTossDecision] = useState(""); 
const [twoTeams, setTwoTeams] = useState([]);
const [teamList1, setTeamList1] = useState([ { 
    id: 1, title: 'India' },
{ id: 2, title: 'New Zealand' },
{ id: 3, title: 'Sri Lanka' },
{ id: 4, title: 'Pakistan' },
{ id: 5, title: 'England' },
{ id: 6, title: 'Australia' },
{ id: 7, title: 'Bangladesh' },
{ id: 8, title: 'South Africa' },
{ id: 9, title: 'West Indies' },
{ id: 10, title: 'Zimbabwe' },
{ id: 11, title: 'Ireland' },
{ id: 12, title: 'Afghanistan' },
{ id: 13, title: 'Kenya' },
{ id: 14, title: 'Scotland' },
{ id: 15, title: 'Netherlands' },
{ id: 16, title: 'Ireland' },
{ id: 17, title: 'Bermuda' },
{ id: 18, title: 'Namibia' },
{ id: 19, title: 'Canada' },
{ id: 20, title: 'UAE' },
{ id: 21, title: 'Hong Kong' },
{ id: 22, title: 'Nepal' },
{ id: 23, title: 'P.N.G.' },
{ id: 24, title: 'Oman' },
{ id: 25, title: 'World-XI' },
{ id: 26, title: 'Namibia' },
{ id: 27, title: 'Nigeria' },
{ id: 28, title: 'U.S.A.' },
{ id: 29, title: 'Botswana' },
{ id: 30, title: 'Cayman Islands' },
{ id: 31, title: 'Singapore' },
{ id: 32, title: 'Jersey ' }

]);
let [teamList2, setTeamList2] = useState([]);

const teamList = [
    { id: 1, title: 'India' },
    { id: 2, title: 'New Zealand' },
    { id: 3, title: 'Sri Lanka' },
    { id: 4, title: 'Pakistan' },
    { id: 5, title: 'England' },
    { id: 6, title: 'Australia' },
    { id: 7, title: 'Bangladesh' },
    { id: 8, title: 'South Africa' },
    { id: 9, title: 'West Indies' },
    { id: 10, title: 'Zimbabwe' },
    { id: 11, title: 'Ireland' },
    { id: 12, title: 'Afghanistan' },
    { id: 14, title: 'Scotland' },
    { id: 15, title: 'Netherlands' },
    { id: 16, title: 'Ireland' },
    { id: 17, title: 'Bermuda' },
    { id: 18, title: 'Namibia' },
    { id: 19, title: 'Canada' },
    { id: 20, title: 'UAE' },
    { id: 21, title: 'Hong Kong' },
    { id: 22, title: 'Nepal' },
    { id: 23, title: 'P.N.G.' },
    { id: 24, title: 'Oman' },
    { id: 25, title: 'World-XI' },
    { id: 26, title: 'Namibia' },
    { id: 27, title: 'Nigeria' },
    { id: 28, title: 'U.S.A.' },
    { id: 29, title: 'Botswana' },
    { id: 30, title: 'Cayman Islands' },
    { id: 31, title: 'Singapore' },
    { id: 32, title: 'Jersey ' }
]

// const teamList1 = [ { 
//     id: '1', title: 'India' },
// { id: '2', title: 'New Zealand' },
// { id: '3', title: 'Sri Lanka' },
// { id: '4', title: 'Pakistan' },
// { id: '5', title: 'England' },
// { id: '6', title: 'Australia' },
// { id: '7', title: 'Bangladesh' },
// { id: '8', title: 'South Africa' },
// { id: '9', title: 'West Indies' },
// { id: '10', title: 'Zimbabwe' },
// { id: '11', title: 'Ireland' },
// { id: '12', title: 'Afghanistan' }

// ];
// let teamList2 = [];

const venueList = [
    {id: 1, title: 'Auckland'},
    {id: 2, title: 'Southampton'},
    {id: 3, title: 'Johannesburg'},
    {id: 4, title: 'Brisbane'},
    {id: 5, title: 'Bristol'},
    {id: 6, title: 'Khulna'},
    {id: 7, title: 'Wellington'},
    {id: 8, title: 'Sydney'},
    {id: 9, title: 'The Oval'},
    {id: 10, title: 'Nairobi (Gym)'},
    {id: 11, title: 'Cape Town'},
    {id: 12, title: 'Durban'},
    {id: 13, title: 'Mumbai (BS)'},
    {id: 14, title: 'Perth'},
    {id: 15, title: 'Port Elizabeth'},
    {id: 16, title: 'Melbourne'},
    {id: 17, title: 'Christchurch'},
    {id: 18, title: 'Karachi'},
    {id: 19, title: 'Manchester'},
    {id: 20, title: 'Bridgetown'},
    {id: 21, title: 'Belfast'},
    {id: 22, title: 'Chester-le-Street'},
    {id: 23, title: 'King City (NW)'},
    {id: 24, title: 'Hamilton'},
    {id: 25, title: 'Colombo (RPS)'},
    {id: 26, title: 'Port of Spain'},
    {id: 27, title: 'Centurion'},
    {id: 28, title: 'Dubai (DSC)'},
    {id: 29, title: "Lord's"},
    {id: 30, title: 'Nottingham'},
    {id: 31, title: 'Basseterre'},
    {id: 32, title: 'Nagpur'},
    {id: 33, title: 'Mohali'},
    {id: 34, title: 'Colombo (PSS)'},
    {id: 35, title: 'Colombo (SSC)'},
    {id: 36, title: 'Abu Dhabi'},
    {id: 37, title: 'Hobart'},
    {id: 38, title: 'Providence'},
    {id: 39, title: 'Gros Islet'},
    {id: 40, title: 'North Sound'},
    {id: 41, title: 'Lauderhill'},
    {id: 42, title: 'Harare'},
    {id: 43, title: 'Birmingham'},
    {id: 44, title: 'Cardiff'},
    {id: 45, title: 'Bloemfontein'},
    {id: 46, title: 'Kimberley'},
    {id: 47, title: 'Adelaide'},
    {id: 48, title: 'Pallekele'},
    {id: 49, title: 'Dhaka'},
    {id: 50, title: 'Kolkata'},
    {id: 51, title: 'Mombasa'},
    {id: 52, title: 'ICCA Dubai'},
    {id: 53, title: 'Hambantota'},
    {id: 54, title: 'The Hague'},
    {id: 55, title: 'Visakhapatnam'},
    {id: 56, title: 'Chennai'},
    {id: 57, title: 'Pune'},
    {id: 58, title: 'Mumbai'},
    {id: 59, title: 'East London'},
    {id: 60, title: 'Bengaluru'},
    {id: 61, title: 'Ahmedabad'},
    {id: 62, title: 'Sharjah'},
    {id: 63, title: 'Windhoek'},
    {id: 64, title: 'Bulawayo'},
    {id: 65, title: 'Aberdeen'},
    {id: 66, title: 'Rajkot'},
    {id: 68, title: 'Chattogram'},
    {id: 69, title: 'Kingston'},
    {id: 70, title: 'Sylhet'},
    {id: 71, title: 'Roseau'},
    {id: 72, title: 'Lahore'},
    {id: 73, title: 'Bready'},
    {id: 74, title: 'Amstelveen'},
    {id: 75, title: 'Rotterdam'},
    {id: 76, title: 'Edinburgh'},
    {id: 77, title: 'Dublin (Malahide)'},
    {id: 78, title: 'Dublin'},
    {id: 79, title: 'Dharamsala'},
    {id: 80, title: 'Cuttack'},
    {id: 81, title: 'Mount Maunganui'},
    {id: 82, title: 'Mong Kok'},
    {id: 83, title: 'Townsville'},
    {id: 84, title: 'Ranchi'},
    {id: 85, title: 'Fatullah'},
    {id: 86,title: 'Delhi'},
    {id: 87, title: 'Napier'},
    {id: 88, title: 'Kanpur'},
    {id: 89, title: 'Geelong'},
    {id: 90, title: 'Greater Noida'},
    {id: 91, title: 'Taunton'},
    {id: 92, title: 'Guwahati'},
    {id: 93, title: 'Hyderabad (Deccan)'},
    {id: 94, title: 'Potchefstroom'},
    {id: 95, title: 'Thiruvananthapuram'},
    {id: 96, title: 'Indore'},
    {id: 97, title: 'Nelson'},
    {id: 98, title: 'Dehradun'},
    {id: 99, title: 'Deventer'},
    {id: 100, title: 'Benoni'},
    {id: 101, title: 'Tolerance Oval'},
    {id: 102, title: 'Lucknow'},
    {id: 103, title: 'Carrara'},
    {id: 104, title: 'Al Amerat'},
    {id: 105, title: 'Kampala'},
    {id: 106, title: 'Sandys Parish'},
    {id: 107, title: 'Singapore'},
    {id: 108, title: 'ICCA 2 Dubai'},
    {id: 109, title: 'Canberra'},
    {id: 110, title: "St George's"},
    {id: 111, title: 'Dunedin'}
]

const tossDecList = [
    {id:1, title:'Batting'},
    {id:2, title:'Fielding'}
]


const modelObject = {
    venue: '',
    team2Id:'',
    team1Id: '',
    matchDate: new Date(),
    isPermanent: false
}

let setTeam11 =(e)=>{
    let array1 = [];
    for(var i =0; i< teamList1.length; i++ ){
        if(teamList1[i].id != e){
            array1.push(teamList1[i]);
        }
    }
    setTeamList2(array1);
    

    setTeam1(e);

}

let setTeam22 =(e)=>{
    setTeam2(e);
    let array2 = [];
    
    array2.push(team2);
    for(var i = 0; i<teamList.length; i++){
        console.log(teamList[i]);
        if(teamList[i].id == team1){
            array2.push(teamList[i]);
        }if(teamList[i].id == e){
            array2.push(teamList[i]);
        }
    }
    setTwoTeams(array2);   
}





// array2.push(team1,team2);
//     setTossWinner(array2);

const {
    values,
    setValues,
    handleInputChange,
    resetForm
} = useForm(modelObject);

    const handleReset = e => {
        e.preventDefault()
        resetForm()
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
        let res = await fetch("http://128.199.26.201:8081/prediction/predict", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            date: date,
            venue: venue,
            team1: team1,
            team2: team2,
            tossWinner: tossWinner,
            tossDecision: tossDecision
            }),
        });
        let resJson = await res.json();
        //data = [team1,team2,venue,tossWinner,tossDecision]
        if (res.status === 200) {
            // setTeam1("");
            // setTeam2("");
            // setTossWinner("");
            //console.log(data);
            //setErrormsg({data})
            history.push({pathname:"/prediction",state:{data:resJson,data2:{team1:findTeamById(team1), team2: findTeamById(team2), date:date}}});
        } else {
            console.log(res);
            setErrormsg("Somthing went wrong! Please try again...");
        
        }
        } catch (err) {
        console.log(err);
        }
        resetForm()
    };

    return (
        <Grid container justify="center">
        <StyledPaper elevation={12}>
            
        <Form onSubmit={handleSubmit} action="/predict">
            <Grid container >
                <Grid item xs={12} >
                    <h1>LET'S PREDICT!</h1>
                    <h3>Enter match information to start prediction</h3>
                </Grid>
                <Grid item xs={12} >
                    <DatePicker
                        name="date"
                        label="Match Date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <Select
                        name="venue"
                        label="Enter venue"
                        value={venue}
                        onChange={(e) => setVenue(e.target.value)}
                        options={venueList}
                    />
                    <Select
                        name="team1"
                        label="Enter First Team"
                        value={team1}
                        onChange={(e) => setTeam11(e.target.value) }
                        options={teamList1}
                    />
                    <Select
                        name="team2"
                        label="Enter Second Team"
                        value={team2}
                        onChange={(e) => 
                          setTeam22(e.target.value)}
                        options={teamList2}
                    />
                    <Select
                        name="tossWinner"
                        label="Enter Toss Winner"
                        value={tossWinner}
                        onChange={(e) => setTossWinner(e.target.value)}
                        options={twoTeams}
                    />
                    <Select
                        name="tossDecision"
                        label="Enter Toss Decision"
                        value={tossDecision}
                        onChange={(e) => setTossDecision(e.target.value)}
                        options={tossDecList}
                    />
                    <Button
                            type="submit"
                            text="Submit"
                            onClick={handleSubmit}
                    />


                    </Grid>
                        
                        <h3 >{errormsg}</h3>
                    
                    
            </Grid>
        </Form>
        </StyledPaper>
        </Grid>
    )
}

