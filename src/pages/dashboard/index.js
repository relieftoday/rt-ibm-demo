import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardContainer: {
    padding: "10px"
  },
  card: {
    width: "100%",
    height: "300px"
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid className={classes.cardContainer} item md={4} sm={6} xs={12}>
          <Card className={classes.card}></Card>
        </Grid>
        <Grid className={classes.cardContainer} item md={4} sm={6} xs={12}>
          <Card className={classes.card}></Card>
        </Grid>
        <Grid className={classes.cardContainer} item md={4} sm={6} xs={12}>
          <Card className={classes.card}></Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Dashboard;