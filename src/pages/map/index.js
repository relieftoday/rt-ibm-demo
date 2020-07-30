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
import {IconButton, Button, Link} from '@material-ui/core';
import './Map.scss';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import MapDrawer from '../../components/seekerDrawers/MapDrawer';
import VolunteerDrawer from '../../components/seekerDrawers/VolunteerDrawer';


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

  // UI Related
  const [showDrawer, setShowDrawer] = React.useState({
    mapDrawer: false,
    volunteerDrawer: false
  });

  const toggleDrawer = (drawer, toggleState) => (event) => {
    setShowDrawer((currentState) => ({...currentState, [drawer]:toggleState}));
  }

  const onVolunteerClick = () => {
    setShowDrawer({
      mapDrawer: false,
      volunteerDrawer: true
    })
  }
  
  const onMapClick = React.useCallback((event) => {
    setMarkers(current => [...current, {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      time: new Date()
    }])
  }, []);

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
      <SeekerItems onVolunteerClick={onVolunteerClick} {...props} toggleDrawer={toggleDrawer} showDrawer={showDrawer}></SeekerItems>
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
        {markers.map(marker => (
          <Marker key={marker.time.toISOString()} position={{lat: marker.lat, lng: marker.lng}}
          icon= {{
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          }}
          onClick={() => {
            setSelected(marker);
          }}></Marker> 
        ))}
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
  const context = props.location.search != '' ? props.location.search.split('=')[1] : '';
  return (
    <React.Fragment>
      { (context === "seeker") &&
        <React.Fragment>
          <IconButton className={"menuButton"} edge="start" color="inherit" aria-label="menu" onClick={props.toggleDrawer("mapDrawer", true)}>
            <MenuIcon />
          </IconButton>
          <MapDrawer onVolunteerClick={props.onVolunteerClick} showDrawer={props.showDrawer.mapDrawer} toggleDrawer={props.toggleDrawer}></MapDrawer>
          <VolunteerDrawer showDrawer={props.showDrawer.volunteerDrawer} toggleDrawer={props.toggleDrawer}></VolunteerDrawer>
        </React.Fragment>
      }
    </React.Fragment>
  )
}

const ActionButton = (props) => {
  const context = props.location.search != '' ? props.location.search.split('=')[1] : '';
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