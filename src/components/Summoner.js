import React, { Component } from 'react';
class Summoner extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    let summoner = this.props.data;
    return (
      <li key={summoner.user_id+summoner.game_zone.area_id}>
      隐藏分:{summoner.box_score}<br/>
      等级:{summoner.level}<br/>
      大区:{summoner.game_zone.server_name}<br/>
      段位:{summoner.tier_rank.tier.full_name_cn}{summoner.tier_rank.tier.const}<br/>
      段位标识:<img src={summoner.tier_rank.url_img}/>
      召唤师名字:{summoner.pn}<br/>
      <img src={summoner.url_img}/>
      </li>
    )
  }
}

export default Summoner;
