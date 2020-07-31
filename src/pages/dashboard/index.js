import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Container, Card, CardContent, CardHeader, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, Paper, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardContainer: {
    padding: "10px"
  },
  card: {
    width: "100%",
    height: "350px",
    display: "flex",
    flexDirection: "column"
  },
  cardHeader: {
    // width: "75%"
  },
  cardContent: {
    overflow: "auto",
    padding: "0px"
  },
  list: {
    width: "100%",
    // paddingBottom: "100px;"
  },
  summary: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "30px 0px"
  },
  summaryItem: {
    flexGrow: 1,
    margin: "10px",
    display: "flex",
    flexDirection: "row"
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const communityNotifications = [
    {comm_id: 1, comm_name: "Rajesh Reddy from Hanuman Nagar", comm_location: "Need medical attention for 20 people", comm_url: "https://picsum.photos/id/1010/200"},
    {comm_id: 2, comm_name: "Venkatesh Rao from Begumpet", comm_location: "Need food for 80 people", comm_url: "https://picsum.photos/id/1011/200"},
    {comm_id: 3, comm_name: "Abdul Faisal from Toli Chowki", comm_location: "Need shelter for 35 people", comm_url: "https://picsum.photos/id/1012/200"},
    {comm_id: 4, comm_name: "John Gonzalves from Vivek Nagar", comm_location: "Need immidiate evacualtion for 15 people", comm_url: "https://picsum.photos/id/1013/200"},
    {comm_id: 5, comm_name: "Aditya Babu from Shamshabad", comm_location: "Need food for 45 people", comm_url: "https://picsum.photos/id/1014/200"},
    {comm_id: 6, comm_name: "Asnaa Ali from Jubilee Hills", comm_location: "Need food and water for 26 people", comm_url: "https://picsum.photos/id/1015/200"},
    {comm_id: 7, comm_name: "Laxman from Kaveri Hills", comm_location: "Need medical attention for 34 people", comm_url: "https://picsum.photos/id/1016/200"},
    {comm_id: 8, comm_name: "Tina Vijayan from Kondapur", comm_location: "Need shelter for 54 people", comm_url: "https://picsum.photos/id/1017/200"},
    {comm_id: 9, comm_name: "Mansi Mishra from Vidhura Vihar", comm_location: "Need first aid for 35 people", comm_url: "https://picsum.photos/id/1018/200"},
    {comm_id: 10, comm_name: "Sunil Reddy from Shaikpet", comm_location: "Need food for 44 people", comm_url: "https://picsum.photos/id/1019/200"},
  ]
  
  const volunteers = [
    {comm_id: 1, comm_name: "Vivek Rajvendra", comm_location: "Engineering", comm_url: "https://picsum.photos/id/1020/200"},
    {comm_id: 2, comm_name: "Ajay Nagal", comm_location: "Nurse", comm_url: "https://picsum.photos/id/1021/200"},
    {comm_id: 3, comm_name: "Apurva Sirkar", comm_location: "Civil engineer", comm_url: "https://picsum.photos/id/1022/200"},
    {comm_id: 4, comm_name: "Christopher Joseph", comm_location: "Trained in emergency procedures", comm_url: "https://picsum.photos/id/1023/200"},
    {comm_id: 5, comm_name: "Sahil Sood", comm_location: "Pediatrician", comm_url: "https://picsum.photos/id/1024/200"},
    {comm_id: 6, comm_name: "Inderjit Singh", comm_location: "Electrical engineer", comm_url: "https://picsum.photos/id/1025/200"},
    {comm_id: 7, comm_name: "Chandan Sharma", comm_location: "Medical technician", comm_url: "https://picsum.photos/id/1026/200"},
    {comm_id: 8, comm_name: "Payal Reddy", comm_location: "Bio medical engineering", comm_url: "https://picsum.photos/id/1027/200"},
    {comm_id: 9, comm_name: "Lobo D'Souza", comm_location: "Military evacuations", comm_url: "https://picsum.photos/id/1028/200"},
    {comm_id: 10, comm_name: "Fahad Masud", comm_location: "Cadiologist", comm_url: "https://picsum.photos/id/1029/200"},
  ]
  
  const partnerOrgs = [
    {comm_id: 1, comm_name: "Blue Plus Aid Agency", comm_location: "Specialize in fire fighting and medical assistance", comm_url: "https://picsum.photos/id/1030/200"},
    {comm_id: 2, comm_name: "Hyderabad Food Packets Agency", comm_location: "Specialize in food distribution ", comm_url: "https://picsum.photos/id/1031/200"},
    {comm_id: 3, comm_name: "Green Circle Medical Aid", comm_location: "Specialize in medical assistance", comm_url: "https://picsum.photos/id/1032/200"},
    {comm_id: 4, comm_name: "All Childs Education org", comm_location: "Specialize in education", comm_url: "https://picsum.photos/id/1033/200"},
    {comm_id: 5, comm_name: "Disaster Roofs Org", comm_location: "Specialize in setting up temporary shelters", comm_url: "https://picsum.photos/id/1034/200"},
    {comm_id: 6, comm_name: "Relief Food Supply", comm_location: "Specialize in food distribution", comm_url: "https://picsum.photos/id/1035/200"},
    {comm_id: 7, comm_name: "Blur Circle Aid agency", comm_location: "Specialize in medical assistance", comm_url: "https://picsum.photos/id/1036/200"},
    {comm_id: 8, comm_name: "Relief Evacuation NGO", comm_location: "Specialize in emergency evacuation", comm_url: "https://picsum.photos/id/1037/200"},
    {comm_id: 9, comm_name: "Central Food Distributors", comm_location: "Specialize in food distribution", comm_url: "https://picsum.photos/id/1038/200"},
    {comm_id: 10, comm_name: "Immediate Shelter Corps", comm_location: "Specialize in setting up temporary shelters", comm_url: "https://picsum.photos/id/1039/200"},
  ]

  return (
    <Container maxWidth="lg">
      <div className={classes.summary}>
        <Paper style={{flexGrow: 1, margin: "10px", padding: "20px"}}>
          <img alt="purple cross ngo" src="https://picsum.photos/id/1080/100"/>
          <Typography style={{display: "inline-block", paddingLeft: "30px"}} variant="h4">Purple Cross NGO for Disasters</Typography>
          <br/><br/>
          <Typography variant="body-1">Purple Cross is an award winning organisation, providing disaster response & preparedness services across India. As a disaster relief agency, we help people to survive and rebuild their lives through food, medical, education, shelter and livelihood programs.</Typography>
          <br/><br/>
          <Typography variant="body-1"><b>Total Volunteers: </b> 18</Typography> &nbsp;&nbsp;&nbsp;
          <Typography variant="body-1"><b>Total Staff: </b> 24</Typography> &nbsp;&nbsp;&nbsp;
          <Typography variant="body-1"><b>Areas of operation: </b> Gacchibowli, Kondapur</Typography>
          <br/><br/><br/>
        </Paper>
      </div>
      <div className={classes.summary}>
        <Paper className={classes.summaryItem} elevation={3} square>
          <div style={{backgroundColor: "green", width: "50px", height: "100px"}}></div>
          <div style={{flexGrow: 1, textAlign: "center"}}>
            <Typography variant="h3">50</Typography>
            <Typography variant="h5">Food</Typography>
          </div>
        </Paper>
        <Paper className={classes.summaryItem} elevation={3} square>
          <div style={{backgroundColor: "red", width: "50px", height: "100px"}}></div>
          <div style={{flexGrow: 1, textAlign: "center"}}>
            <Typography variant="h3">68</Typography>
            <Typography variant="h5">Medical</Typography>
          </div>
        </Paper>
        <Paper className={classes.summaryItem} elevation={3} square>
          <div style={{backgroundColor: "blue", width: "50px", height: "100px"}}></div>
          <div style={{flexGrow: 1, textAlign: "center"}}>
            <Typography variant="h3">30</Typography>
            <Typography variant="h5">Water</Typography>
          </div>
        </Paper>
        <Paper className={classes.summaryItem} elevation={3} square>
          <div style={{backgroundColor: "yellow", width: "50px", height: "100px"}}></div>
          <div style={{flexGrow: 1, textAlign: "center"}}>
            <Typography variant="h3">87</Typography>
            <Typography variant="h5">Sanitation</Typography>
          </div>
        </Paper>
        <Paper className={classes.summaryItem} elevation={3} square>
          <div style={{backgroundColor: "brown", width: "50px", height: "100px"}}></div>
          <div style={{flexGrow: 1, textAlign: "center"}}>
            <Typography variant="h3">25</Typography>
            <Typography variant="h5">Shelter</Typography>
          </div>
        </Paper>
      </div>
      <Grid container>
        <Grid className={classes.cardContainer} item sm={6} xs={12}>
          <Card className={classes.card}>
            <CardHeader className={classes.cardHeader} title="Notifications from Community Markers" subheader="Please approve before the markers can be shown on the map"/>
            <CardContent className={classes.cardContent}>
              <List className={classes.list}>
                {communityNotifications.map((comm) => (
                  <ListItem key={comm.comm_id}>
                    <ListItemAvatar>
                      <Avatar src={comm.comm_url}/>
                    </ListItemAvatar>
                    <ListItemText primary={comm.comm_name} secondary={comm.comm_location} />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <CheckIcon />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete">
                        <CloseIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid className={classes.cardContainer} item sm={6} xs={12}>
          <Card className={classes.card}>
            <CardHeader className={classes.cardHeader} title="Volunteers" subheader="Available volunteers in your area"/>
            <CardContent className={classes.cardContent}>
              <List className={classes.list}>
                {volunteers.map((comm) => (
                  <ListItem key={comm.comm_id}>
                    <ListItemAvatar>
                      <Avatar src={comm.comm_url}/>
                    </ListItemAvatar>
                    <ListItemText primary={comm.comm_name} secondary={comm.comm_location} />
                    <ListItemSecondaryAction>
                      <Button color="primary">Connect</Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid className={classes.cardContainer} item sm={6} xs={12}>
          <Card className={classes.card}>
            <CardHeader className={classes.cardHeader} title="Partner Orgs" subheader="Other organizations in your area"/>
            <CardContent className={classes.cardContent}>
              <List className={classes.list}>
                {partnerOrgs.map((comm) => (
                  <ListItem key={comm.comm_id}>
                    <ListItemAvatar>
                      <Avatar src={comm.comm_url}/>
                    </ListItemAvatar>
                    <ListItemText primary={comm.comm_name} secondary={comm.comm_location} />
                    <ListItemSecondaryAction>
                    <Button color="primary">Contact</Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Dashboard;