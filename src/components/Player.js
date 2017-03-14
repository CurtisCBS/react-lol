import React, { Component } from 'react';
class ReactComponent extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    let data = this.props.data,
        imgStyle = {
          width:"80%",
          maxWidth:"100px",
          display:"block",
          margin:"0 auto"
        },
        boxStyle={
          width:"100%",
          padding:"10px 0",
          borderBottom:"1px solid #bdb088"
        },
        avatarBoxStyle={
          width:"30%",
          float:"left"
        },
        infoStyle = {
          width:"70%",
          float:"left"
        },
        weaponStyle={
          float:"left",
          fontSize:"10px",
          border:"1px solid #bdb088",
          width:"14%"
        },
        weapon = [];
        data.items.map((item,index)=>{
          weapon.push(<div style={weaponStyle} key={index}>
            {item.name}
          </div>);
        });
    return (
      <div style={boxStyle} className="clearfix">
        <div style={avatarBoxStyle}>
          <img style={imgStyle} src={require("../heroes/"+data.champion.name+".png")} />
        </div>
        <div style={infoStyle}>
          <div>
            {data.player.pn} - {data.champion.display_name}
          </div>
          <div className="clearfix">
            {weapon}
          </div>
        </div>
      </div>
    )
  }
}

export default ReactComponent;
