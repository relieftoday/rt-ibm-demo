import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Drawer, Icon, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Divider, List, Link, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../assets/marker.png';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventIcon from '@material-ui/icons/Event';
import MapIcon from '@material-ui/icons/Map';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import BuildIcon from '@material-ui/icons/Build';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import {Link as RouterLink} from 'react-router-dom';


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
    marginRight: "20px"
  },
  button: {
    color: '#9e9e9e',
    margin: "0px 4px",
    padding: "6px 16px"
  },
  button2: {
    margin: "0px 4px",
    padding: "6px 16px"
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  logoDrawer: {
    display: "flex",
    alignItems: "center",
    padding: "10px 10px 10px 20px"
  },
  logoTitle: {
    display: "inline",
    color: "#9e9e9e"
  }
}));

const DrawerItems = (props) => {
  const classes = useStyles();
  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleDrawer(false)}
      onKeyDown={props.toggleDrawer(false)}
    >
      <div className={classes.logoDrawer}>
        <img src={logo} className={classes.logo} alt="Relief today"/>
        <h3 className={"logoTitle"}>Relief Today</h3>
      </div>
      <List>
        <Link style={{color: "inherit"}} component={RouterLink} to="/dashboard">
          <ListItem button>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link style={{color: "inherit"}} component={RouterLink} to="/activities">
          <ListItem button>
            <ListItemIcon><LocalActivityIcon /></ListItemIcon>
            <ListItemText primary="Activities" />
          </ListItem>
        </Link>
        <ListItem button disabled>
          <ListItemIcon><FormatListBulletedIcon /></ListItemIcon>
          <ListItemText primary="Task Board" />
        </ListItem>
        <ListItem button disabled>
          <ListItemIcon><BuildIcon /></ListItemIcon>
          <ListItemText primary="Inventory Management" />
        </ListItem>
        <ListItem button disabled>
          <ListItemIcon><GroupWorkIcon /></ListItemIcon>
          <ListItemText primary="Community Reps" />
        </ListItem>
      </List>
      <Divider />
      <List>
      <ListItem button disabled>
          <ListItemIcon><AccountCircleIcon /></ListItemIcon>
          <ListItemText primary="Profile"/>
        </ListItem>
        <ListItem button disabled>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings"/>
        </ListItem>
        <ListItem button disabled>
          <ListItemIcon><PeopleAltIcon /></ListItemIcon>
          <ListItemText primary="Manage Users" />
        </ListItem>
        <Link style={{color: "inherit"}} component={RouterLink} to="/login">
          <ListItem button>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary="Logout"/>
          </ListItem>
        </Link>
      </List>
    </div>
  )
}

export default function ProviderLayout(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    showDrawer: false
  })

  const toggleDrawer = (toggleState) => (event) => {
    setState((currentState) => ({...currentState, showDrawer: toggleState}));
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor={"left"} open={state.showDrawer} onClose={toggleDrawer(false)}>
            <DrawerItems toggleDrawer={toggleDrawer}/>
          </Drawer>
          <img src={logo} className={classes.logo} alt="Relief today"/>
          <Typography variant="h6" className={classes.title}>
            Relief Today
          </Typography>
          <Link component={RouterLink} to="/?context=provider">
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button2}
              startIcon={<MapIcon />}>
              Map
            </Button>
          </Link>
          <div className={classes.grow}></div>
          <IconButton aria-label="delete">
            <NotificationsActiveIcon/>
          </IconButton>
          <Button size="medium" className={classes.button} endIcon={<Icon>expand_more</Icon>}>
            <AccountCircleIcon /> &nbsp;&nbsp; Profile
          </Button>
        </Toolbar>
      </AppBar>

      {props.children}
    </div>
  );
}