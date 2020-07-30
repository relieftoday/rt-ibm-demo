import React from 'react';

const SeekerDialogs = (props) => {
  return (
    <React.Fragment>
      <Dialog open={props.mapDialog.sos} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Emergency!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <TextField autoFocus margin="dense" id="sos_name" label="Name" type="text" fullWidth/>
          <br/><br/>
          <TextField margin="dense" id="sos_phone" label="Phone number" type="text" fullWidth/>
          <br/><br/>
          <TextField margin="dense" id="sos_info" label="Number of people in need" type="text" fullWidth/>
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
            
          </DialogContentText>
          <TextField autoFocus margin="dense" id="sos_name" label="Name" type="text" fullWidth/>
          <br/><br/>
          <TextField margin="dense" id="sos_phone" label="Phone number" type="text" fullWidth/>
          <br/><br/>
          <TextField margin="dense" id="sos_info" label="Highlight your skills" type="text" fullWidth/>
          <br/><br/>
          <FormControlLabel control={<Checkbox id="sos_medico" name="checkedB" color="primary"/>} label="Is this a medical emergenct."/>
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