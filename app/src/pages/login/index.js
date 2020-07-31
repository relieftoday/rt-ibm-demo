import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container, Box, TextField, Link, Button } from '@material-ui/core';
import logo from '../../assets/marker.png';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100vh"
  },
  logoBox: {
    display: "flex",
    flexDirection: "row",
    margin: "60px 0px 60px 60px",
    alignItems: "flex-end"
  },
  logo: {
    width: "30px",
    marginRight: "10px"
  },
  forgotBox: {
    textAlign: "right"
  },
  agency: {
    height: "100vh",
    paddingTop: 158,
    textAlign: "center",
    backgroundSize: "cover"
  },
  agencyImg: {
    height: "300px",
    opacity: 0.5,
    display: "block",
    marginLeft: "20%",
    transform: "rotate(-20deg)"
  }
});

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={6} className={classes.root}>
          <Box className={classes.logoBox}>
            <img className={classes.logo} src={logo} alt={"relief today logo"}/>
            <header>
              <Typography variant="h6">Relief Today</Typography>
            </header>
          </Box>
          <Container maxWidth="xs">
            <form noValidate autoComplete="off">
              <Typography variant="h4">Log In</Typography>
              <br/>
              <br/>
              <TextField id="standard-basic" label="Email" fullWidth disabled value="demo@relief.today"/>
              <br/>
              <br/>
              <br/>
              <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" fullWidth disabled value="**********"/>
              <br/>
              <br/>
              <br/>
              <Box className={classes.forgotBox}>
                <Link variant="body2">Forgot password?</Link>
              </Box>
              <br/>
              <br/>
              <br/>
              <Link component={RouterLink} to="/?context=seeker">
                <Button variant="contained" color="primary" fullWidth size="large" disableElevation style={{borderRadius: "20px"}}>
                  Login
                </Button>
              </Link>
            </form>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.root} style={{backgroundColor: "#89bff4",}}>
          <Container className={classes.agency} maxWidth="xs">
            <img src={logo} className={classes.agencyImg} alt={"relief today logo"}/>
            <br/>
            <Link component={RouterLink} to="/dashboard">
              <Button variant="contained" color="secondary" size="large" fullWidth disableElevation style={{borderRadius: "20px"}}>
                  Login as agency
              </Button>
            </Link>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default Login;