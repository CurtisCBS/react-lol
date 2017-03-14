import React, { Component } from 'react';
import BattleList from './BattleList';
import axios from 'axios';

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData : null
    };
    this.getUserData();
  }

  render(){
    let content;
    if(this.state.userData && this.state.userData.player_list && this.state.userData.player_list.length){
      content = <BattleList data={this.state.userData.player_list[0].game_recent_list}></BattleList>
    }
    else{
      content = <div>
        查无此人
      </div>
    }
    return content;
  }

  getUserData(){
    let zoneId = this.props.params.zoneId,
        userId = this.props.params.userId;
    this.fetchHelper({
      url:"/user/detail/"+zoneId+"/"+userId,
      success:res =>{
        this.setState({
          userData:res
        })
      }
    })
  }

  fetchHelper(opt){
    let httpProxy = "http://0.0.0.0:5000";
    axios.get(httpProxy+opt.url)
          .then(res => {
            opt.success && opt.success(res.data);
          });
  }
}

export default DetailPage;
