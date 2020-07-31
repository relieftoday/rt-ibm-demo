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
import mapStyles from "./locationStyles";
import logo from '../../assets/marker.png';
import { format, formatRelative } from 'date-fns'
import LocationSearchingOutlinedIcon from '@material-ui/icons/LocationSearchingOutlined';
import {IconButton} from '@material-ui/core';
import './Location.scss';


const libraries = ["places"];

const mapContainerStyle = {
  height: "500px",
  width: "750px",
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
  
  const onMapClick = React.useCallback((event) => {
    props.onClickHandler(event.latLng.lat(), event.latLng.lng());
    setMarkers(current => [{
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
    <div>
      <Search panTo={panTo}></Search>
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
            // setSelected(marker);
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