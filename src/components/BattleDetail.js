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
    let players;
    if(this.state.winList && this.state.loseList){
        players = [];
        this.state.winList.map((player,index)=>{
          players.push(<Player data={player} key={player.player.user_id}></Player>)
        })
        this.state.loseList.map((player,index)=>{
          players.push(<Player data={player} key={player.player.user_id}></Player>)
        })
        console.log(players);
    }
    return (
      <div>
        {players}
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
