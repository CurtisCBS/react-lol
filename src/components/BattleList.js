import React, { Component } from 'react';
import Battle from './Battle';
class BattleList extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    let list = [],
    titleStyle = {
      borderBottom:"1px solid #bdb088",
      fontSize:"18px",
      letterSpacing: "8px",
      padding:"8px",
      textAlign:"center"
    };
    this.props.data.map((item,index)=>{
      list.push(
        <Battle data={item} key={index}></Battle>
      )
    })
    return (
      <div>
        <div style={titleStyle}>近期战绩</div>
        {list}
      </div>
    )
  }
}

export default BattleList;
