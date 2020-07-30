import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MapIcon from '@material-ui/icons/Map';
import logo from '../../assets/marker.png';

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
  }
}))

const MapDrawer = (props) => {
  const classes = useStyles();
  return (
    <Drawer anchor={"left"} open={props.showDrawer} onClose={props.toggleDrawer("mapDrawer", false)}>
      <div className={classes.logoDrawer}>
        <img src={logo} className={classes.logo} alt="Relief today"/>
        <h3 className={"logoTitle"}>Relief Today</h3>
      </div>
      <List style={{width: 250}}>
        <ListItem button onClick={props.showHideDrawer({mapDrawer: false, volunteerDrawer: true})}>
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

export default MapDrawer;