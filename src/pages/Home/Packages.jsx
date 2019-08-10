import React from "react";
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Title from "components/Title"

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
}));

function createData(name, basic, premium, advanced, fullPackage) {
  return { name, basic, premium, advanced, fullPackage };
}

const rows = [
  createData('Community Development and Management', "Yes", "Yes", "Yes", "Yes"),
  createData('Bitcointalk Bounty Management', "Yes", "Yes", "Yes", "Yes"),
  createData('ANN Creation and Management', "Yes", "Yes", "Yes", "Yes"),
  createData('Social Media Management', "Yes", "Yes", "Yes", "Yes"),
  createData('Customisable Services', "Yes", "Yes", "Yes", "Yes"),
  createData('Whitepaper Review', "No", "Yes", "Yes", "Yes"),
  createData('Content Creation', "No", "Yes", "Yes", "Yes"),
  createData('Content Moderation', "No", "Yes", "Yes", "Yes"),
  createData('In-Depth ICO Analysis', "No", "No", "Yes", "Yes"),
  createData('PR Publications on Leading Crypto Sites', "No", "No", "Yes", "Yes"),
  createData('Exchance Listing Guidance', "No", "No", "No", "Yes"),
  createData('Press Releases', "No", "No", "No", "Yes"),
  createData('ICO Advisors/Consultation', "No", "No", "No", "Yes"),
  createData('Youtube Influencers', "No", "No", "No", "Yes"),
  createData('Design Services', "No", "No", "No", "Yes"),
  createData('Website Development', "No", "No", "No", "Yes")
];

export default function Packages() {
  const classes= useStyles();

  return (
    <div>
      <Paper elevation={10} className="Paper">
        <Title>Packages</Title>
        <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Basic</TableCell>
            <TableCell align="right">Premium</TableCell>
            <TableCell align="right">Advanced</TableCell>
            <TableCell align="right">Full Package</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.basic}</TableCell>
              <TableCell align="right">{row.premium}</TableCell>
              <TableCell align="right">{row.advanced}</TableCell>
              <TableCell align="right">{row.fullPackage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Paper>
    </div>
  );
}
