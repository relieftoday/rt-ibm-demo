import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Link } from '@material-ui/core';
import { AppBar, Button, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from '@material-ui/core';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { Grid, Container } from '@material-ui/core';
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
  wishContainer: {
    marginTop: "20px",
    marginBottom: "20px"
  }
}))

const VolunteerDrawer = (props) => {
  const classes = useStyles();
  const [volunteerInfo, setVolunteerInfo] = React.useState({
    name: '',
    isWilling: false,
    skills: '',
    isMedico: false
  })

  const [dialogs, setDialogs] = React.useState({
    volunteerDialog: false,
    sosDialog: false,
    communityDialog: false
  })

  const onVolunteerOpen = () => {
    setDialogs({
      volunteerDialog: true,
      sosDialog: false,
      communityDialog: false
    })
  }

  const onVolunteerSubmit = () => {
    console.log(document.getElementById('vol_name').value);
    console.log(document.getElementById('vol_info').value);
    console.log(document.getElementById('vol_medico').checked);
  }

  const onVolunteerClose = () => {
    setDialogs({
      volunteerDialog: false,
      sosDialog: false,
      communityDialog: false
    })
  }

  let agencyList = [
    {agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/200", volunteered: false},
    {agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/200", volunteered: false},
    {agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/200", volunteered: false},
    {agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/200", volunteered: false},
    {agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/200", volunteered: false},
    {agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/200", volunteered: false},
    {agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/200", volunteered: false},
    {agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/200", volunteered: false},
    {agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/200", volunteered: false},
    {agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/200", volunteered: false},
    {agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/200", volunteered: false},
    {agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/200", volunteered: false},
    {agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/200", volunteered: false},
    {agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/200", volunteered: false},
  ]
  return (
    <React.Fragment>
      <Drawer anchor={"left"} open={props.showDrawer}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={props.showHideDrawer({mapDrawer: true, volunteerDrawer: false})}>
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title}></Typography>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={props.toggleDrawer("volunteerDrawer", false)}>
              <CloseIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Container className={classes.wishContainer}>
          <Button color="primary" onClick={onVolunteerOpen}>Do you wish to volunteer?</Button>
        </Container>

        <List style={{width: 300}}>
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

      {/* Volenteer form */}
      <Dialog open={dialogs.volunteerDialog} onClose={onVolunteerClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Volunteer</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You will have better chances of volunteering if you provide some information.
          </DialogContentText>
          <TextField autoFocus margin="dense" id="vol_name" label="Name" type="text" fullWidth/>
          <br/><br/>
          <TextField margin="dense" id="vol_info" label="Highlight your skills" type="text" fullWidth/>
          <br/><br/>
          <FormControlLabel control={<Checkbox id="vol_medico" name="checkedB" color="primary"/>} label="I am a medical professional."/>
          <br/><br/>
          <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Accept terms and conditions."/>
          <br/><br/>
        </DialogContent>
        <DialogActions>
          <Button onClick={onVolunteerClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onVolunteerSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default VolunteerDrawer;