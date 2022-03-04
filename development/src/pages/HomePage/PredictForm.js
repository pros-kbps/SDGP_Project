import React from 'react'
import { useForm, Form } from "../../components/useForm";
import  Button from "../../components/Button";
import DatePicker from "../../components/DatePicker";
import Select  from "../../components/Select";
import { Grid } from "@material-ui/core";
import StyledPaper from '../../components/StyledPaper';



const team1List = [
    { id: '1', title: 'India' },
    { id: '2', title: 'New Zealand' },
    { id: '3', title: 'Sri Lanka' },
    { id: '4', title: 'Pakistan' },
    { id: '5', title: 'England' },
    { id: '6', title: 'Australia' },
    { id: '7', title: 'Bangladesh' },
    { id: '8', title: 'South Africa' },
    { id: '9', title: 'West Indies' },
    { id: '10', title: 'Zimbabwe' },
    { id: '11', title: 'Ireland' },
    { id: '12', title: 'Afghanistan' },
]
const team2List = [
    { id: '1', title: 'India' },
    { id: '2', title: 'New Zealand' },
    { id: '3', title: 'Sri Lanka' },
    { id: '4', title: 'Pakistan' },
    { id: '5', title: 'England' },
    { id: '6', title: 'Australia' },
    { id: '7', title: 'Bangladesh' },
    { id: '8', title: 'South Africa' },
    { id: '9', title: 'West Indies' },
    { id: '10', title: 'Zimbabwe' },
    { id: '11', title: 'Ireland' },
    { id: '12', title: 'Afghanistan' },
]

const modelObject = {
    venue: '',
    team2Id:'',
    team1Id: '',
    matchDate: new Date(),
    isPermanent: false
}

export default function PredictForm() {

    const {
        values,
        setValues,
        handleInputChange,
        resetForm
    } = useForm(modelObject);

    const handleSubmit = e => {
        e.preventDefault()
        resetForm()
    }

    return (
        <Grid container justify="flex-end">
        <StyledPaper elevation={4}>
        <Form onSubmit={handleSubmit}>
            <Grid container >
                <Grid item xs={12} >
                    <h1>LET'S PREDICT!</h1>
                    <h3>Enter match information to start prediction</h3>
                </Grid>
                <Grid item xs={12} >
                    <DatePicker
                        name="hireDate"
                        label="Match Date"
                        value={values.matchDate}
                        onChange={handleInputChange}
                    />
                    <Select
                        name="team1Id"
                        label="Enter First Team"
                        value={values.team1Id}
                        onChange={handleInputChange}
                        options={team1List}
                    />
                    <Select
                        name="team2Id"
                        label="Enter Second Team"
                        value={values.team2Id}
                        onChange={handleInputChange}
                        options={team2List}
                    />
                    <Button
                            type="submit"
                            text="Submit"
                            onClick={handleSubmit}
                    />
                    <Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />

                    </Grid>
            </Grid>
        </Form>
        </StyledPaper>
        </Grid>
    )
}