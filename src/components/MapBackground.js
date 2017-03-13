import React, { Component } from 'react';

class MapBackground extends Component {
  render(){
    let height = window.screen.height,
    style = {
      marginLeft:"-40%"
    };
    return (
        <div className="map-background">
          <embed className="map" style={style} src={require("../images/map.svg")} width={height} height={height} type="image/svg+xml" />
        </div>
    );
  }
}
export default MapBackground;
