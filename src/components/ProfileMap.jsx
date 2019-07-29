import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import MapProfile from "./MapProfile";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ProfileMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "150px", width: "300px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBzGVNtpx96mevl5hXFpx7n-ZeAeM3u1k8" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MapProfile lat={59.955413} lng={30.337844} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default ProfileMap;
