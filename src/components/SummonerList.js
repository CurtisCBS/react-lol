import React, { Component } from 'react';
import Summoner from './Summoner';

class List extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    let list = [];
    this.props.data.map((summoner) =>{
      list.push(
        <Summoner key={summoner.user_id+summoner.game_zone.area_id} data={summoner}></Summoner>
      )
    });
    return (
      <div>
        <ul>
            {list}
        </ul>
      </div>
    )
  };
}

export default List;
