import React, { Component } from 'react';
class ReactComponent extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        {this.props.data.player.pn}
      </div>
    )
  }
}

export default ReactComponent;
