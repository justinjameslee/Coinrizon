import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Divider, IconButton, Typography, Hidden, CardHeader } from '@material-ui/core';
import { CardMedia, CardContent, CardActions, CardActionArea, Card, Paper } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faTelegramPlane, faLinkedinIn, faBitcoin } from '@fortawesome/free-brands-svg-icons'  
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(theme => ({
  media: {
    height: 50,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30',
  },
}));

export default function TeamCard(props) {
  const classes = useStyles();

  const styles = {
    email: {
      display: "block"
    },
    linkedin: {
      display: "block"
    },
    bitcoin: {
      display: "block"
    },
    telegram: {
      display: "block"
    },
    image: {
      display: "block",
      height: 75,
      width: 75,
      textAlign: 'center',
      display: 'inline-block',
      margin: 30,
    },
    imageContainer: {
      borderRadius: '50%',
      border: '1px solid #E0E0E0',
      height: 150,
      width: 150,
      textAlign: 'center',
      display: 'inline-block',
      overflow: 'hidden',
      margin: 15,
      padding: 5,
    },
    header: {
      textAlign: 'left',
    },
  }

  styles.linkedin.display = !props.linkedin ? "none" : "block" 
  styles.telegram.display = !props.telegram ? "none" : "block" 
  styles.email.display = !props.email ? "none" : "block" 
  styles.bitcoin.display = !props.bitcoin ? "none" : "block" 

  return (
    <Grid item sm={3} xs={12} justify="center" style={{ textAlign: "center"}}>
        <Card elevation={1} className="float">
        <CardHeader style={styles.header}
          titleTypographyProps={{variant:'h6' }}
          subheaderTypographyProps={{variant:'subtitle2' }}
          title={props.name}
          subheader={props.position}
          action={
            <IconButton target="_blank" href={"mailto:" + props.email} style={styles.email}>
              <FontAwesomeIcon icon={faEnvelope}  />
            </IconButton>
          }>

        </CardHeader>
        {/* <CardMedia
          className={classes.media}
          image={require ("../images/" + props.img)}
          title={props.imgTitle}
        /> */}
        <div style={styles.imageContainer}>
          <FontAwesomeIcon style={styles.image} icon={faUser} />
        </div>
        
        <Divider variant="middle" style={{margin: 0}} />
        <CardActions>
          <Grid container justify="center" spacing={1}>
            <Grid item>
              <IconButton target="_blank" href={props.linkedin} style={styles.linkedin}>
                <FontAwesomeIcon icon={faLinkedinIn} size="sm"/>
              </IconButton>
              </Grid>
            <Grid item>
              <IconButton target="_blank" href={props.telegram} style={styles.telegram}>
                <FontAwesomeIcon icon={faTelegramPlane} size="sm"/>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton target="_blank" href={props.bitcoin} style={styles.bitcoin}>
                <FontAwesomeIcon icon={faBitcoin} size="sm"/>
              </IconButton>
            </Grid>
            </Grid>
        </CardActions>
        </Card>
    </Grid>
  );
}
