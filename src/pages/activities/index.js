import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Container, Icon, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/marker.png';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventIcon from '@material-ui/icons/Event';
import MapIcon from '@material-ui/icons/Map';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Route } from 'react-router-dom';

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

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img src={logo} className={classes.logo} alt="Relief today"/>
          <Typography variant="h6" className={classes.title}>
            Relief Today
          </Typography>
          <Button
            size="small"
            className={classes.button}
            startIcon={<DashboardIcon />}>
            Dashboard
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button2}
            startIcon={<EventIcon />}>
            Activities
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button2}
            startIcon={<MapIcon />}>
            Map
          </Button>
          <div className={classes.grow}></div>
          <IconButton aria-label="delete">
            <NotificationsActiveIcon/>
          </IconButton>
          <Button size="medium" className={classes.button} endIcon={<Icon>expand_more</Icon>}>
            <AccountCircleIcon /> &nbsp;&nbsp; Profile
          </Button>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="lg">
        <Route path={props.match.path + "/"} exact component={EventsList}/>
        <Route path={props.match.path + "/add"} exact component={AddEvent}/>
      </Container>
    </div>
  );
}