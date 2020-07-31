import React from 'react';

const MarkerIcon = (props) => {
  const markerColor = {
    medical: '#e74c3c',
    food: ''
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="48" height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#3498db"><path d="M86,3.58333c-31.53333,0 -64.44625,25.04033 -64.5,60.91667c-0.0645,42.93192 64.5,107.5 64.5,107.5c0,0 64.56808,-64.4785 64.5,-107.5c-0.05733,-35.82258 -32.96667,-60.91667 -64.5,-60.91667zM86,93.16667c-15.83117,0 -28.66667,-12.8355 -28.66667,-28.66667c0,-15.83117 12.8355,-28.66667 28.66667,-28.66667c15.83117,0 28.66667,12.8355 28.66667,28.66667c0,15.83117 -12.8355,28.66667 -28.66667,28.66667z"></path></g></g></svg>
  )
}

export default MarkerIcon; 