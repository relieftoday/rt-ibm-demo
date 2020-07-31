import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import mapStyles from "./mapStyles";
import logo from '../../assets/marker.png';
import { format, formatRelative } from 'date-fns'
import LocationSearchingOutlinedIcon from '@material-ui/icons/LocationSearchingOutlined';

// Custom UI
import {IconButton, Button, Link, Fab} from '@material-ui/core';
import './Map.scss';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import MapDrawer from '../../components/seekerDrawers/MapDrawer';
import VolunteerDrawer from '../../components/seekerDrawers/VolunteerDrawer';
import WarningIcon from '@material-ui/icons/Warning';
import ContactlessIcon from '@material-ui/icons/Contactless';
import SeekerDialogs from '../../components/seekerDialogs';
import API from '../../axios/AxiosInstance';
import pin1 from '../../assets/pins/pin1.png';
import pin2 from '../../assets/pins/pin2.png';
import pin3 from '../../assets/pins/pin3.png';
import pin4 from '../../assets/pins/pin4.png';
import pin5 from '../../assets/pins/pin5.png';
import pin6 from '../../assets/pins/pin6.png';
import pin7 from '../../assets/pins/pin7.png';
import pin8 from '../../assets/pins/pin8.png';
import pin9 from '../../assets/pins/pin9.png';
import pin10 from '../../assets/pins/pin10.png';

const libraries = ["places"];

const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: 17.446901,
  lng: 78.367461
};


const Map = (props) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  const [snackBar, setSnackBar] = React.useState({
    sos: false,
    community: false
  });

  const [mapDialog, setMapDialog] = React.useState({
    sos: false,
    community: false
  })

  const [seekerActivity, setSeekerActivity] = React.useState(null);

  React.useEffect(() => {
    API.get('/activity/all')
    .then((res) => {
      setMarkers(res.data);
    })
    .catch((error) => {
      console.log(error);
      // 
    })
  }, []);

  const toggleSnackBar = (type, toggle) => {
    setSnackBar({...snackBar, [type]: toggle});
  }
  
  const toggleMapDialog = (type, toggle) => {
    setMapDialog({...mapDialog, [type]: toggle});
  }

  const onMarkerSubmit = (markerObj) => {
    const {id, ...finalObj} = {...seekerActivity, ...markerObj};
    console.log(finalObj);

    // make API CALL here
    API.post('/activity/create', finalObj)
    .then((res) => {
      console.log(res);
      setMarkers((current) => {
        const newMarkers = current.map(mark => {
          if(mark.id === "customId1") {
            return res.data;
          }
          return mark;
        });

        return newMarkers;
      });
      setSeekerActivity(null);

    })
    .catch((error) => {
      console.log(error);

      // just reload the page
      window.location.reload();
    })
  }

  const onMarkerCancel = () => {
    setMarkers((current) => {
      const newMarkers = current.filter(mark => mark.id !== "customId1");
      console.log(newMarkers);
      return newMarkers;
    });
    setSeekerActivity(null);
  }

  const getIcon = (marker) => {
    let icon = pin7;
    if(marker.activityBy === "seeker") {
      icon = pin10;
    } else if (marker.activityBy === "community") {
      icon = pin9;
    } else if (marker.activityBy === "provider") {
      if(marker.provider.activityType === "Food") {
        icon = pin4;
      } else if (marker.provider.activityType === "Water") {
        icon = pin2;
      } else if (marker.provider.activityType === "Medical") {
        icon = pin6;
      } else if (marker.provider.activityType === "Sanitation") {
        icon = pin8;
      } else if (marker.provider.activityType === "Shelter") {
        icon = pin7;
      }
    } else {
      icon = pin1;
    }

    return icon;
  }
  
  const onMapClick = React.useCallback((event) => {
    if(snackBar.sos || snackBar.community) {
      const myMarker = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date().toISOString(),
        id: "customId1",
      }
      setSeekerActivity(myMarker);
      setMarkers(current => {
        const newMarkers = current.filter((mark) => mark.id !== "customId1");
        return [...newMarkers, myMarker];
      });

      setMapDialog({
        sos: snackBar.sos,
        community: snackBar.community
      })

      toggleSnackBar({
        sos: false,
        community: false
      });
    }
  }, [snackBar]);

  const mapRef = React.useRef();
  
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div className="map">
      <div className="logoContainer">
        <img src={logo} className={"logo"} alt="Relief today"/>
        <h3 className={"logoTitle"}>Relief Today</h3>
      </div>
      <SeekerItems {...props} snackBar={snackBar} toggleSnackBar={toggleSnackBar} mapDialog={mapDialog} toggleMapDialog={toggleMapDialog}
      onMarkerCancel={onMarkerCancel} onMarkerSubmit={onMarkerSubmit}></SeekerItems>
      <Search panTo={panTo}></Search>
      <ActionButton {...props}></ActionButton>
      <Locate panTo={panTo}></Locate>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map(marker => {
          let icon = getIcon(marker);
          return (
          <Marker key={marker.time} position={{lat: marker.lat, lng: marker.lng}}
          icon= {{
            url: icon
          }}
          onClick={() => {
            setSelected(marker);
          }}></Marker> 
        )})}
        {selected? (
          <InfoWindow position={{lat: selected.lat, lng: selected.lng}} onCloseClick={() => setSelected(null)} options={{pixelOffset: {height: -35}}}>
            <div>
              <h2>My marker</h2>
              <p>On: {formatRelative(selected.time, new Date())}</p>
            </div>
          </InfoWindow>) : null}
      </GoogleMap>
    </div>
  )
}

const SeekerItems = (props) => {
  const context = props.location.search !== '' ? props.location.search.split('=')[1] : '';
  // UI Related
  const [showDrawer, setShowDrawer] = React.useState({
    mapDrawer: false,
    volunteerDrawer: false
  });

  const toggleDrawer = (drawer, toggleState) => (event) => {
    setShowDrawer((currentState) => ({...currentState, [drawer]:toggleState}));
  }

  const showHideDrawer = (drawerObj) => (evt) => {
    setShowDrawer((currentState) => ({...currentState, ...drawerObj}));
  }

  const onMarkSos = () => {
    props.toggleSnackBar("sos", true);
  }
  
  const onMarkCommunity = () => {
    props.toggleSnackBar("community", true)
  }

  return (
    <React.Fragment>
      { (context === "seeker") &&
        <React.Fragment>
          <IconButton className={"menuButton"} edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer("mapDrawer", true)}>
            <MenuIcon />
          </IconButton>
          <Fab color="secondary" size="medium" className={"sos"} aria-label="edit" onClick={onMarkSos}>
            <WarningIcon />
          </Fab>
          <Fab color="primary" size="medium" className={"announce"} aria-label="edit" onClick={onMarkCommunity}>
            <ContactlessIcon />
          </Fab>
          <MapDrawer showHideDrawer={showHideDrawer} showDrawer={showDrawer.mapDrawer} toggleDrawer={toggleDrawer}></MapDrawer>
          <VolunteerDrawer showHideDrawer={showHideDrawer} showDrawer={showDrawer.volunteerDrawer} toggleDrawer={toggleDrawer}></VolunteerDrawer>
          <SeekerDialogs toggleMapDialog={props.toggleMapDialog} mapDialog={props.mapDialog} toggleSnackBar={props.toggleSnackBar} snackBar={props.snackBar}
          onMarkerCancel={props.onMarkerCancel} onMarkerSubmit={props.onMarkerSubmit}></SeekerDialogs>
        </React.Fragment>
      }
    </React.Fragment>
  )
}

const ActionButton = (props) => {
  const context = props.location.search !== '' ? props.location.search.split('=')[1] : '';
  return (
    <div className="cta">
      { (context === "provider") &&
        <Link component={RouterLink} to="/dashboard">
          <Button variant="contained" color="primary">Goto Dashboard</Button>
        </Link>
      }
      { (context === "") &&
        <Link component={RouterLink} to="/login">
          <Button variant="contained" color="primary">Login</Button>
        </Link>
      }
    </div>
  )
}

const Search = ({panTo}) => {
  const {ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
    requestOptions: {
      location: {lat: () => 17.446901, lng: () => 78.367461},
      radius: 200 * 1000,
    }
  });
  return (
    <div className="search">
      <Combobox onSelect={async (address) => {
        setValue(address, false);
        clearSuggestions();
        try {
          const results = await getGeocode({address});
          const {lat, lng} = await getLatLng(results[0]);
          panTo({lat, lng});
        } catch (error) {
          console.log(error);
        }
      }}>
        <ComboboxInput value={value} onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={!ready}
        placeholder="Search a location..."
        />
        <ComboboxPopover className={"popover"}>
          <ComboboxList>
          {status === "OK" && 
            data.map(({id, description}) => (
              <ComboboxOption key={id} value={description}></ComboboxOption>
            ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  )
}

const Locate = ({panTo}) => (
  <div className={"locate"}>
    <IconButton aria-label="locate" color="primary" onClick={() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          panTo({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => null
      );
    }}>
      <LocationSearchingOutlinedIcon/>
    </IconButton>
  </div>
)

export default Map;