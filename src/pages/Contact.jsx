import React, { Component } from 'react'
import {Container, Grid, Paper, Typography, Divider, List, ListItem, ListItemText, ListItemIcon} from "@material-ui/core"
import ContactForm from "components/ContactForm"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons'  

export default class Contact extends Component {
    render() {
        return (
            <div style={{marginTop: 150}}>
                <Container>
                    <Grid container direction="column" spacing={10}>
                        <Paper elevation={10} className="Paper">
                            <Grid container direction="row" justify="center" style={{ textAlign: "left"}} spacing={10}>
                            <Grid item sm={6} xs={12} style={{ marginTop: 25 }}>
                                <Typography variant="h3" gutterBottom style={{marginBottom: 20, color: "#424242"}}>Contact</Typography>
                                <Typography component="p">
                                    Looking to make a purchase with us or perhaps have a query about one of our many services? Please contact us here using the provided form.
                                </Typography>
                                <Typography component="p" style={{whiteSpace: 'pre-line'}}>
                                    {'\n'}
                                </Typography>
                                <Typography component="p">
                                    Let Coinrizon help you in realizing the potential of blockchain technology in your business!
                                </Typography>
                                <Divider variant="middle" style={{margin: 0, marginTop: 20}} />
                                <Typography variant="h5" gutterBottom style={{marginTop: 20, color: "#424242"}}>Additional Information</Typography>
                                <List component="nav" aria-label="Main mailbox folders">
                                    <ListItem button>
                                    <ListItemIcon>
                                        <FontAwesomeIcon icon={faTelegramPlane} size="lg" />
                                    </ListItemIcon>
                                    <ListItemText primary="https://t.me/CoinrizonKev" />
                                    </ListItem>
                                    <ListItem button>
                                    <ListItemIcon>
                                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                                    </ListItemIcon>
                                    <ListItemText primary="kevin@coinrizon.com" />
                                    </ListItem>
                                </List>
                            </Grid>
                                <ContactForm></ContactForm>
                            </Grid>
                        </Paper>
                    </Grid>
                </Container>
            </div>
        )
    }
}
