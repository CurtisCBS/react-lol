import React, { Component } from 'react';
import BattleList from './BattleList';
import Profile from './Profile';
class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData : null,
      battleList:null
    };
    this.getUserData();
    this.getBattleList();
  }

  render(){
    let list,
      info,
      loadingStyle ={
        textAlign:"center",
        paddingTop:"200px"
      };
    if(this.state.battleList && this.state.battleList[0]){
      list = <BattleList data={this.state.battleList}></BattleList>
    }
    else{
      list = <div style={loadingStyle}>
        加载中...
      </div>
    }
    if(this.state.userData && this.state.userData.player_list[0]){
      info = <Profile data={this.state.userData.player_list[0]}></Profile>
    }
    return (
      <div>
        {info}
        {list}
      </div>
    );
  }

  getUserData(){
    let zoneId = this.props.params.zoneId,
        userId = this.props.params.userId;
    this.fetchHelper({
      url:"/user/detail/"+zoneId+"/"+userId,
      success:res =>{
        this.setState(Object.assign({},this.state,{
          userData:res
        }))
      }
    })
  }

  fetchHelper(opt){
    axios.get(httpProxy.proxy+opt.url)
          .then(res => {
            opt.success && opt.success(res.data);
          });
  }

  getBattleList(){
    let zoneId = this.props.params.zoneId,
        userId = this.props.params.userId;
    let url = "/battle/list/"+zoneId+"/"+userId
    axios.get(httpProxy.proxy+url)
          .then(res => {
            this.setState(Object.assign({},this.state,{
              battleList:res.data.game_list
            }))
          });
  }
}

export default DetailPage;
