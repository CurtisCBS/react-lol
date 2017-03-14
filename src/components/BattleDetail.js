import React, { Component } from 'react';
import Player from './Player';
class BattleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winList:null,
      loseList:null
    };
    this.getBattleData();
  }

  render(){
    let winArr = [],loseArr= [],
    titleStyle={
      borderBottom:"1px solid #bdb088",
      fontSize:"20px",
      letterSpacing: "8px",
      padding:"8px 0",
      textAlign:"center"
    };
    if(this.state.winList && this.state.loseList){
        this.state.winList.map((player,index)=>{
          winArr.push(<Player data={player} key={player.player.user_id}></Player>)
        })
        this.state.loseList.map((player,index)=>{
          loseArr.push(<Player data={player} key={player.player.user_id}></Player>)
        })
    }
    return (
      <div>
        <div style={titleStyle}>胜利队伍</div>
        {winArr}
        <div style={titleStyle}>失败队伍</div>
        {loseArr}
      </div>
    )
  }

  getBattleData(){
    let zoneId = this.props.params.zoneId,
        userId = this.props.params.userId,
        battleId = this.props.params.battleId;
    let url = "/battle/detail/"+zoneId+"/"+userId+"/"+battleId;
    axios.get(httpProxy.proxy+url)
          .then(res => {
            this.setState({
              winList:res.data.player_game_list[0].team_win.player_champions,
              loseList:res.data.player_game_list[0].team_lose.player_champions
            })
          });
  }
}

export default BattleDetail;
