import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { AppBar, Button, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from '@material-ui/core';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { Avatar, Container } from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
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
    phone: '',
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
    setVolunteerInfo({
      name: document.getElementById('vol_name').value || 'John Doe',
      phone: document.getElementById('vol_phone').value || '+91-8909876789',
      isWilling: true,
      skills: document.getElementById('vol_info').value || 'Civil engineer by profession.',
      isMedico: document.getElementById('vol_medico').checked
    })
    
    setDialogs({
      volunteerDialog: false,
      sosDialog: false,
      communityDialog: false
    })
  }

  const onVolunteerClose = () => {
    setDialogs({
      volunteerDialog: false,
      sosDialog: false,
      communityDialog: false
    })
  }

  let agencyList = [
    {agency_id:"1", agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/id/10/200", volunteered: false},
    {agency_id:"2", agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/id/26/200", volunteered: true},
    {agency_id:"3", agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/id/330/200", volunteered: true},
    {agency_id:"4", agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/id/401/200", volunteered: true},
    {agency_id:"5", agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/id/546/200", volunteered: false},
    {agency_id:"6", agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/id/698/200", volunteered: false},
    {agency_id:"7", agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/id/712/200", volunteered: false},
    {agency_id:"8", agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/id/865/200", volunteered: false},
    {agency_id:"9", agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/id/990/200", volunteered: false},
    {agency_id:"10", agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/id/103/200", volunteered: false},
    {agency_id:"11", agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/id/118/200", volunteered: false},
    {agency_id:"12", agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/id/129/200", volunteered: false},
    {agency_id:"13", agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/id/134/200", volunteered: false},
    {agency_id:"14", agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/id/143/200", volunteered: false},
    {agency_id:"15", agency_name: "Purple cross NGO", agency_desc:"We are an agency that distributes food.", agency_photo:"https://picsum.photos/id/151/200", volunteered: false},
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

        {volunteerInfo.isWilling?
          <Container  className={classes.wishContainer}>
            <Typography variant="subtitle2">Volunteering as:</Typography>
            <Typography variant="body2"><b>Name:</b> {volunteerInfo.name}</Typography>
            <Typography variant="body2"><b>Phone:</b> {volunteerInfo.phone}</Typography>
            <Typography variant="body2"><b>Info:</b> {volunteerInfo.skills}</Typography>
            {volunteerInfo.isMedico &&
              <Typography variant="body2">I am a medical professional.</Typography>
            }
          </Container>
          :
          <Container className={classes.wishContainer}>
            <Button color="primary" onClick={onVolunteerOpen}>Do you wish to volunteer?</Button>
          </Container>
        }

        <Divider/>

        <List style={{width: 350}}>
          {agencyList.map((agency) => (
            <ListItem button key={agency.agency_id}>
              <ListItemIcon>
              <Avatar alt="Remy Sharp" src={agency.agency_photo} />
              </ListItemIcon>
              <ListItemText primary={agency.agency_name} secondary={agency.agency_desc}/>
              <div>
              
                <CheckBoxIcon color={agency.volunteered? "primary": ''}/>
              
              </div>
            </ListItem>
          ))}
        </List>
        <Divider />
        
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
          <TextField margin="dense" id="vol_phone" label="Phone number" type="text" fullWidth/>
          <br/><br/>
          <TextField margin="dense" id="vol_info" label="Highlight your skills" type="text" fullWidth/>
          <br/><br/>
          <FormControlLabel control={<Checkbox id="vol_medico" name="checkedB" color="primary"/>} label="I am a medical professional."/>
          <br/><br/>
          <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="I accept the terms and conditions."/>
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