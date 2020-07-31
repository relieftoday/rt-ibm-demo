import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, TextField} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { FormControlLabel, Checkbox } from '@material-ui/core';

const SeekerDialogs = (props) => {
  const onSosClose = () => {
    props.toggleMapDialog("sos", false);
    props.toggleSnackBar("sos", false);
    props.onMarkerCancel();
  }
  const onSosSubmit = () => {
    const markerObj = {
      activityBy: "seeker",
      seeker: {
        activityType: "seeker_sos",
        seekerName:  document.getElementById('sos_name').value,
        seekerPhone: document.getElementById('sos_phone').value,
        isMedical: document.getElementById('sos_name').checked,
        count: parseInt(document.getElementById('sos_count').value),
      }
    }
    
    props.toggleMapDialog("sos", false);
    props.toggleSnackBar("sos", false);
    props.onMarkerSubmit(markerObj);
  }
  const onCommunityClose = () => {
    props.toggleSnackBar("community", false);
    props.toggleMapDialog("community", false);
  }
  const onCommunitySubmit = () => {
    const markerObj = {
      activityBy: "community",
      community: {
        activityType: "community_need",
        communityName: document.getElementById('community_name').value,
        communityPhone: document.getElementById('community_phone').value,
        count: document.getElementById('community_people').value,
        communityNeeds: document.getElementById('community_info').value,
      }
    }
    
    props.toggleSnackBar("community", false);
    props.toggleMapDialog("community", false);
    props.onMarkerSubmit(markerObj);
  }
  return (
    <React.Fragment>
      <Dialog open={props.mapDialog.sos} aria-labelledby="form-dialog-title" maxWidth="md">
        <DialogTitle id="form-dialog-title">Emergency!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <TextField autoFocus margin="dense" id="sos_name" label="Name" type="text" fullWidth/>
          <br/><br/>
          <TextField margin="dense" id="sos_phone" label="Phone number" type="text" fullWidth/>
          <br/><br/>
          <TextField margin="dense" id="sos_count" label="Number of people in need" type="text" fullWidth/>
          <br/><br/>
          <FormControlLabel control={<Checkbox id="sos_medico" name="checkedB" color="primary"/>} label="Is this a medical emergenct."/>
          <br/><br/>
        </DialogContent>
        <DialogActions>
          <Button onClick={onSosClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onSosSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      
      <Dialog open={props.mapDialog.community} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Set community needs!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Describe your community needs and mark on the map. 
          </DialogContentText>
          <TextField autoFocus margin="dense" id="community_name" label="Community Name" type="text" fullWidth/>
          <br/><br/>
          <TextField margin="dense" id="community_phone" label="Phone number" type="text" fullWidth/>
          <br/><br/>
          <TextField margin="dense" id="community_people" label="Number of people in the community" type="text" fullWidth/>
          <br/><br/>
          <TextField margin="dense" id="community_info" label="Describe your needs" type="text" fullWidth placeholder="Food, sanitation, medical, shelter etc."/>
          <br/><br/>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={onCommunityClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onCommunitySubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar open={props.snackBar.sos || props.snackBar.community}>
        <Alert severity="warning">
          Click on the map to mark your location
        </Alert>
      </Snackbar>
    </React.Fragment>
  )
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default SeekerDialogs;