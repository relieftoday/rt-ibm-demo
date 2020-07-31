import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Breadcrumbs, Button, Container, Link, TextField, TextareaAutosize, Typography } from '@material-ui/core';
import { FormControl, FormGroup, FormLabel, FormHelperText, FormControlLabel, InputLabel, Input, Checkbox, Switch} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import Location from '../../components/location'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Link as RouterLink } from 'react-router-dom';
import API from '../../axios/AxiosInstance';


const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  header: {
    marginTop: "20px",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  grow: {
    flexGrow: 1,
  },
  routerLink: {
    color: "inherit",
    textDecoration: "inherit"
  },
  formContainer: {
    marginTop: "40px",
    border: "1px solid #9e9e9e",
    position: "relative",
    paddingTop: "20px"
  },
  formHeader: {
    color: "#9e9e9e",
    position: "absolute",
    backgroundColor: "#fafafa",
    top: "-11px",
    padding: "0px 10px"
  },
  locationContainer: {
    width: "750px",
    height: "500px",
    position: "relative"
  }
  
}));

export default function AddEvent(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    activity_name: "",
    activity_desc: "",
    activity_address: "",
    activity_lat: '',
    activity_lng: '',
    activity_date: new Date(),
    food: false,
    medical: false,
    shelter: false,
    sanitation: false,
    water: false,
    needVolunteers: false
  });

  const nameChangeHandler = (event) => {
    setState({...state, activity_name: event.target.value});
  }
  
  const descChangeHandler = (event) => {
    setState({...state, activity_desc: event.target.value});
  }
  
  const addressChangeHandler = (event) => {
    setState({...state, activity_address: event.target.value});
  }

  const handleDateChange = (date) => {
    setState({ ...state, activity_date: date});
  };

  const handleChange = (event) => {
    console.log(event.target.checked);
    console.log(event.target.name);
    setState((currentState) => ({ ...currentState, [event.target.name]: event.target.checked }));
  };

  const submitHandler = (event) => {
    let activityType = '';
    if(state.food) {
      activityType = "Food";
    } else if(state.medical) {
      activityType = "Medical"
    } else if(state.sanitation) {
      activityType = "Sanitation"
    } else if(state.water) {
      activityType = "Water"
    } else if(state.shelter) {
      activityType = "Shelter"
    }
    
    let markerObj = {
      lat: state.activity_lat,
      lng: state.activity_lng,
      activityBy: "provider",
      time: new Date().toISOString(),
      provider: {
        address: state.activity_address,
        providerName: "Purple Cross NGO for Disaster Management",
        providerId: 1,
        activityType,
        needVolunteers: state.needVolunteers,
        activityName: state.activity_name,
        description: state.activity_desc
      }
    }

    API.post('/activity/create', markerObj)
    .then((res) => {
      props.history.push("/activities");
    })
  }

  const onLocationClick = (lat, lng) => {
    setState((currentState) => ({...currentState, activity_lat: lat, activity_lng:lng}));
  }

  return (
    <div className={classes.root}>
      <Container className={classes.header} maxWidth="lg">
        <Breadcrumbs aria-label="breadcrumb">
          <Link component={RouterLink} className={classes.routerLink} to="/activities">
            Activities
          </Link>
          <Typography color="textPrimary" variant="h4">Add activity</Typography>
        </Breadcrumbs>
        <div className={classes.grow}></div>
      </Container>
      <Container className={classes.formContainer} maxWidth="md">
        <Typography className={classes.formHeader}>Details about your event</Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="act-name"
            name="act_name"
            label="Name"
            placeholder="Your event's name"
            helperText="Eg: Food drive in Botanical Gardens... &ngbs;"
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            onKeyUp={nameChangeHandler}
          />
          <br/><br/>
          <FormControl fullWidth>
            <TextareaAutosize onKeyUp={descChangeHandler} rows={6} id="my-input" aria-label="maximum height" placeholder="Details about your activity"/>
          </FormControl>
          <br/><br/>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disablePast="true"
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Activity date"
              value={state.activity_date}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <br/><br/>
            <KeyboardTimePicker
              disablePast="true"
              margin="normal"
              id="time-picker"
              label="Activity time"
              value={state.activity_date}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
          </MuiPickersUtilsProvider>
          
          <br/><br/><br/>
          
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Activity type</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={state.food} onChange={handleChange} name="food" />}
                label="Food drive"
              />
              <FormControlLabel
                control={<Checkbox checked={state.medical} onChange={handleChange} name="medical" />}
                label="Medical drive"
              />
              <FormControlLabel
                control={<Checkbox checked={state.sanitation} onChange={handleChange} name="sanitation" />}
                label="Sanitation drive"
              />
              <FormControlLabel
                control={<Checkbox checked={state.shelter} onChange={handleChange} name="shelter" />}
                label="Shelter drive"
              />
              <FormControlLabel
                control={<Checkbox checked={state.water} onChange={handleChange} name="water" />}
                label="Water drive"
              />
            </FormGroup>
          </FormControl>
          <br/><br/>
          <FormControl fullWidth>
            <InputLabel htmlFor="my-input">Activity address</InputLabel>
            <Input id="act_address" aria-describedby="my-helper-text" onKeyUp={addressChangeHandler}/>
            <FormHelperText id="my-helper-text">Please mark on the map below</FormHelperText>
          </FormControl>
          <br/><br/><br/>
          <div className={classes.locationContainer}>
            <Location onClickHandler={onLocationClick}/>
          </div>
          <br/><br/>
          <FormControlLabel control={<Switch
            checked={state.needVolunteers}
            onChange={handleChange}
            color="primary"
            name="needVolunteers"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />} label="Accept volunteers"></FormControlLabel>
          <br/><br/>
          <Button variant="contained" color="secondary" onClick={submitHandler}>
            Add activity
          </Button>
          <br/><br/><br/>
        </form>
      </Container>
    </div>
  );
}