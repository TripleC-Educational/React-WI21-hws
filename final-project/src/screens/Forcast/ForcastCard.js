/**
 * This is the Card component you use for the Forcast page
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function ForcastCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        {/* TODO: pass in data here to display */}
      </CardContent>
    </Card>
  );
}

// styles
// you can ignore this part
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  }
});
