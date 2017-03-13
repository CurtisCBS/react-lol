import React, { Component } from 'react';
class List extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
  }

  render(){
    let list = [];
    this.props.data.map((summoner) =>{
      list.push(
        <li key={summoner.user_id}>
          {summoner.pn}
          <img src={summoner.url_img}/>
        </li>
      )
    });
    console.log(list);
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
