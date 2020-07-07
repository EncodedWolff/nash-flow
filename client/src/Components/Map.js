import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';

class Map extends React.Component{
    constructor(){
        super();
    }

    state = {};

    render(){
        return(

            //The map component should utilize Google Maps API to display information 
            //from the applicaiton. It should be the main body of the applicaiton when
            //viewed on mobile. The user should also be able to select any marker on the
            //map and be able to see breif general information about the selected marker.
            //Markers should be styled based on thier "Status" or "Product"
            //(i.e. Sold, Rejected, No Sale, etc.)
            <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat:36.1626638, lng:-86.7816016}}
            />
        );
    }
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;