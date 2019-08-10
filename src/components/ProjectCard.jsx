import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Divider, IconButton } from '@material-ui/core';
import { CardMedia, CardContent, CardActions, CardActionArea, Card } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'  
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

library.add(fab)

const useStyles = makeStyles(theme => ({
  media: {
    height: 50,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30',
  },
}));

export default function ProjectCard(props) {
  const classes = useStyles();

  const styles = {
    website: {
      display: "block"
    },
    twitter: {
      display: "block"
    },
    telegram: {
      display: "block"
    },
    link: {
      position: 'absolute',
      top: 0, left: 0,
      height: '100%', width: '100%',
    },
  }

  styles.twitter.display = !props.twitter ? "none" : "block" 
  styles.telegram.display = !props.telegram ? "none" : "block" 
  styles.website.display = !props.website ? "none" : "block" 

  return (
    <Grid item sm={3} xs={12}>
        <Card className="float">
        <CardActionArea>
            <a target="_blank" style={styles.link} href={props.website}/>
            <CardMedia
              className={classes.media}
              image={require ("../images/" + props.img)}
              title={props.imgTitle}
            />
            <Divider variant="middle" style={{margin: 0}} />
        </CardActionArea>
        <CardActions>
          <Grid container justify="center" spacing={1}>
            <Grid item>
              <IconButton target="_blank" href={props.twitter} style={styles.twitter}>
                <FontAwesomeIcon icon={['fab', 'twitter']} size="sm"/>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton target="_blank" href={props.telegram} style={styles.telegram}>
                <FontAwesomeIcon icon={['fab', 'telegram-plane']} size="sm"/>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton target="_blank" href={props.website} style={styles.website}>
                <FontAwesomeIcon icon={faGlobe} size="sm"/>
              </IconButton>
            </Grid>
            </Grid>
        </CardActions>
        </Card>
    </Grid>
  );
}
