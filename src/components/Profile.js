import React, { Component } from 'react';
class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    let data = this.props.data,
        avatarUrl = localStorage.getItem(data.user_id+"_"+data.game_zone.area_id)?localStorage.getItem(data.user_id+"_"+data.game_zone.area_id) : "",
        profileBoxStyle={
          backgroundImage: 'url('+require("../images/jinx.jpg")+')',
          padding:"20px 0 30px",
          backgroundSize:"auto 100%",
          backgroundRepeat:"no-repeat",
          backgroundPosition:"center",
          borderBottom:"2px solid #bdb088"
        },
        nameStyle = {
          color:"#fff",
          fontSize:"14px",
          marginTop:"10px",
          textAlign:"center"
        },
        totalBattle = {
          color:"#ccc",
          fontSize:"12px",
          marginTop:"5px",
          textAlign:"center"
        },
        profileStyle = {
          display:"block",
          width:"60px",
          height:"60px",
          borderRadius:"100px",
          margin:"0 auto",
          border:"2px solid #bdb088"
        };
    return (
      <div>
        <div style={profileBoxStyle}>
          <img style={profileStyle} src={avatarUrl} />
          <div style={nameStyle}>{data.game_zone.alias}-{data.pn}</div>
          <div style={totalBattle}>游戏场次:{data.win_battle_score}</div>
        </div>

      </div>
    )
  }
}

export default Profile;
