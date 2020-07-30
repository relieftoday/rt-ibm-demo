import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Drawer, Icon, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../assets/marker.png';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventIcon from '@material-ui/icons/Event';
import MapIcon from '@material-ui/icons/Map';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


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
  logo: {
    width: "24px",
    marginRight: "20px"
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
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
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

      {props.children}
    </div>
  );
}