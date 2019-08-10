import React from "react";
import { Grid, Paper } from "@material-ui/core";
import ProjectCard from "components/ProjectCard";
import Title from "components/Title";

export default function Projects() {
  return (
    <div>
      <Paper elevation={10} className="Paper">
        <Title>Projects</Title>
        <Grid container direction="row" justify="center" style={{ textAlign: "center"}} spacing={3}>
          <ProjectCard 
            img="multiversum.png" imgTitle="Multiversum Official" 
            twitter="https://www.google.com/" telegram="https://www.google.com/" website="https://www.google.com/">
          </ProjectCard>
          <ProjectCard 
            img="ttc.png" imgTitle="TCC Protocol" 
            twitter="https://www.google.com/" telegram="https://www.google.com/" website="https://www.google.com/">
          </ProjectCard>
          <ProjectCard 
            img="bqt.png" imgTitle="BQT" 
            twitter="https://www.google.com/" telegram="https://www.google.com/" website="https://www.google.com/">
          </ProjectCard>
          <ProjectCard 
            img="iou.png" imgTitle="IOU" 
            twitter="https://www.google.com/" telegram="https://www.google.com/" website="https://www.google.com/">
          </ProjectCard>
          <ProjectCard 
            img="mcart.png" imgTitle="mCart" 
            twitter="https://www.google.com/" telegram="https://www.google.com/" website="https://www.google.com/">
          </ProjectCard>
          <ProjectCard 
            img="enjin.png" imgTitle="enjin" 
            twitter="https://www.google.com/" telegram="https://www.google.com/" website="https://www.google.com/">
          </ProjectCard>
          <ProjectCard 
            img="pozess.png" imgTitle="Pozess" 
            twitter="https://www.google.com/" telegram="https://www.google.com/" website="https://www.google.com/">
          </ProjectCard>
        </Grid>
      </Paper>
    </div>
  );
}
