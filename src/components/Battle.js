import React, { Component } from 'react';
class Battle extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    let data = this.props.data,
        boxStyle = {
          borderBottom:"1px solid #bdb088",
          height:"100px",
          width:"100%",
          overflow:"hidden",
          paddingTop:"5px"
        },
        heroStyle={
          display:"block",
          width:"20%",
          float:"left",
          textAlign:"center"
        },
        imgStyle={
          width:"80%"
        },
        infoStyle={
          display:"block",
          width:"80%",
          float:"left"
        },
        mvpStyle={
          color:"#ffffff",
          display:"inline-block",
          backgroundColor:"#bdb088",
          fontSize:"14px",
          padding:"0 5px",
          borderRadius:"5px"
        },
        mvp;
        if(data.flag_mvp_carry){
          mvp = <span style={mvpStyle}>MVP</span>
        }
    return (
      <div style={boxStyle} className="clearfix">
        <div style={heroStyle}>
          <img style={imgStyle} src={require("../heroes/"+data.champion.name+".png")} />
        </div>
        <div style={infoStyle}>
          {data.champion.display_name}-{data.champion.title} {mvp}
           <br/>
          {data.created}
           <br/>
          {data.game_type.name_cn}
           <br/>
          {data.battle_result ? '胜利' : '失败'}
           <br/>
        </div>
      </div>
    )
  }
}

export default Battle;
