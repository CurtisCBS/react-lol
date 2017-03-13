import React, { Component } from 'react';
import Battle from './Battle';
class BattleList extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    let list = [];
    this.props.data.map((item,index)=>{
      list.push(
        <Battle data={item} key={index}></Battle>
      )
    })
    return (
      <div>
        {list}
      </div>
    )
  }
}

export default BattleList;
