import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Swal from "sweetalert2";



export default function ContactForm() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessages, setErrorMessages] = useState([]);
    const [showErrors, setShowErrors] = useState(false);

    let errors = [];
    function ValidateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        return false;
    }

    const formValidation = () => {
        setErrorMessages([]);

        const isNameValid = name !== "";
        const isMessageValid = message !== "";

        if (!isNameValid) {
            errors.push("Name is not valid, please try again.");
        }
        if (!ValidateEmail(email)) {
            errors.push("Email is not valid, please try again.");
        }
        if (email === "") {
            errors.push("Email field is empty, please try again.");
        }
        if (!isMessageValid) {
            errors.push("Message is not valid, please try again.");
        }

        if (errors.length > 0) {
            setShowErrors({ showErrors: true });
            setErrorMessages(errors);
        } else {
            setShowErrors({ showErrors: false });
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your message has been sent',
                showConfirmButton: false,
                timer: 1500
            })
        }
    };

    return (
        <div className="container">
            <div className="outerFormContainer">
                <div className="innerFormContainer">
                    <h2> We would love to hear from you! </h2>
                    <Grid>
                        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                                    Fill up the form and our team will get back to you soon.
                                </Typography>
                                <Grid item xs={12}>

                                    <TextField
                                        label="Name"
                                        placeholder="Jane Doe"
                                        type="text"
                                        variant="outlined"
                                        onChange={e => setName(e.target.value)}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Email"
                                        placeholder="janedoe@gmail.com"
                                        type="email"
                                        variant="outlined"
                                        onChange={e => setEmail(e.target.value)}
                                        required

                                    />
                                </Grid>
                                <Grid item xs={12}>

                                    <TextField
                                        label="Message"
                                        placeholder="Type your message"
                                        type="text"
                                        variant="outlined"
                                        multiline rows={4}
                                        rowsMax="3"
                                        onChange={e => setMessage(e.target.value)}
                                        required

                                    />
                                </Grid>
                                {showErrors
                                    ? errorMessages.map((item, index) => {
                                        return <ul key={index}>{item}</ul>;
                                    })
                                    : null}
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="button"
                                        onClick={formValidation}
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                </div>
            </div>
        </div>
    );
}





