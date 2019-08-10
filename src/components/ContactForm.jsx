import React from 'react'
import { Paper, Grid, TextField, Button, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from "components/Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      width: 400,
    },
    button: {
        margin: theme.spacing(2.5),
    },
    leftIcon: {
      marginRight: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    iconSmall: {
      fontSize: 20,
    },
  }));
  

export default function ContactForm(props) {
    const classes = useStyles();

    return (
        <Grid item sm={6} xs={12}>
            <Paper style={{ margin: 25, padding: 20}}>
                <Grid container justify="center" style={{ textAlign: "center"}}>
                    <TextField
                        required
                        id="name"
                        label="Full Name"
                        placeholder="John Doe"
                        className={classes.textField}
                        margin="normal"
                        item
                    />
                    <TextField
                        required
                        id="email"
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="john.doe@gmail.com"
                        className={classes.textField}
                        margin="normal"
                        item
                    />
                    <TextField
                        required
                        id="project"
                        label="Project Name/Website"
                        placeholder="Coinrizon"
                        className={classes.textField}
                        margin="normal"
                        item
                    />
                    <TextField
                        id="telegram"
                        label="Telegram"
                        placeholder="CoinrizonKev"
                        className={classes.textField}
                        margin="normal"
                        item
                    />
                    <TextField
                        required
                        id="message"
                        label="Message"
                        placeholder="Content"
                        multiline
                        className={classes.textField}
                        margin="normal"
                        item
                    />
                    
                </Grid>
                <Grid container justify="center" style={{ textAlign: "center" }}>
                    <Button variant="outlined" color="primary" className={classes.button}>
                        Reset
                        <FontAwesomeIcon className={classes.rightIcon} icon={faRedo} />
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Send
                        <Icon className={classes.rightIcon}>send</Icon>
                    </Button>    
                </Grid>
            </Paper>
        </Grid>   
    )
}
