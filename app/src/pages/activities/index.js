import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Route, withRouter } from 'react-router-dom';

import EventsList from './ActivitiesList';
import AddEvent from './AddActivity';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "50px"
  },
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid #CCCCCC",
    backgroundColor: "#fff",
    color: "#9e9e9e"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: "10px"
  },
  grow: {
    flexGrow: 1,
  },
  logo: {
    width: "24px",
    marginRight: "10px"
  },
  button: {
    color: '#9e9e9e',
    margin: "0px 4px",
    padding: "6px 16px"
  },
  button2: {
    margin: "0px 4px",
    padding: "6px 16px"
  }
}));

const Activities = (props) => {
  console.log(props);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Route path={props.match.path + "/"} exact component={EventsList}/>
        <Route path={props.match.path + "/add"} exact component={AddEvent}/>
      </Container>
    </div>
  );
}

export default withRouter(Activities);