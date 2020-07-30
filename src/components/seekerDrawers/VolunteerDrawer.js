import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Link } from '@material-ui/core';
import { AppBar, Button, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MapIcon from '@material-ui/icons/Map';
import logo from '../../assets/marker.png';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  logoDrawer: {
    display: "flex",
    alignItems: "center",
    padding: "10px 10px 10px 20px"
  },
  logo: {
    width: "24px",
    marginRight: "20px"
  },
  logoTitle: {
    display: "inline",
    color: "#9e9e9e"
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const VolunteerDrawer = (props) => {
  const classes = useStyles();
  return (
    <Drawer anchor={"left"} open={props.showDrawer} onClose={props.toggleDrawer("volunteerDrawer", false)}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <CloseIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <List style={{width: 250}}>
        <ListItem button>
          <ListItemIcon><GroupWorkIcon /></ListItemIcon>
          <ListItemText primary="Volunteer"/>
        </ListItem>
        <ListItem button disabled>
          <ListItemIcon><MapIcon /></ListItemIcon>
          <ListItemText primary="Map options"/>
        </ListItem>
      </List>
      <Divider />
      <List style={{width: 250}}>
        <ListItem button disabled>
          <ListItemIcon><AccountCircleIcon /></ListItemIcon>
          <ListItemText primary="Profile"/>
        </ListItem>
        <ListItem button disabled>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings"/>
        </ListItem>
        <Link style={{color: "inherit"}} component={RouterLink} to="/login">
          <ListItem button>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary="Logout"/>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  )
}

export default VolunteerDrawer;