import React, { Component } from 'react'
import {Container, Grid, Paper, Typography } from "@material-ui/core"
import ContactForm from "components/ContactForm"
import TeamCard from "components/TeamCard"
import Title from "components/Title"
import Header from "components/Header"

export default class Team extends Component {
    render() {
        return (
            <div style={{marginTop: 150}}>
                <Container>
                    <Grid container direction="column" spacing={10}>
                        <Paper elevation={10} className="Paper">
                        <Title>Coinrizon Team</Title>
                            <Grid container direction="row" justify="center" style={{ textAlign: "left"}} spacing={5}>
                                <TeamCard 
                                    img="" name="Kevin Mao" position="CEO & Founder"
                                    email="kevin@coinrizon.com"
                                    linkedin="https://www.google.com/" telegram="https://www.google.com/">    
                                </TeamCard>
                                <TeamCard 
                                    img="" name="Sonny Azeez" position="COO"
                                    email="kevin@coinrizon.com"
                                    linkedin="https://www.google.com/" telegram="https://www.google.com/" bitcoin="https://www.google.com/">    
                                </TeamCard>
                                <TeamCard 
                                    img="" name="Gabriel Phua" position="CTO"
                                    email="kevin@coinrizon.com"
                                    linkedin="https://www.google.com/" telegram="https://www.google.com/" bitcoin="https://www.google.com/">    
                                </TeamCard>
                                <TeamCard 
                                    img="" name="Chris Brennan" position="Community Manager"
                                    email="kevin@coinrizon.com"
                                    linkedin="https://www.google.com/" telegram="https://www.google.com/">    
                                </TeamCard>
                                <TeamCard 
                                    img="" name="Nikola Begovic" position="Community Manager"
                                    email="kevin@coinrizon.com"
                                    linkedin="https://www.google.com/" telegram="https://www.google.com/" bitcoin="https://www.google.com/">    
                                </TeamCard>
                            </Grid>
                        </Paper>
                    </Grid>
                </Container>
            </div>
        )
    }
}
