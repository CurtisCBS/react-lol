import React, { Component } from 'react';
import BattleList from './BattleList';

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
    let content,
      loadingStyle ={
        textAlign:"center",
        paddingTop:"200px"
      };
    if(this.state.battleList && this.state.battleList[0]){
      content = <BattleList data={this.state.battleList}></BattleList>
    }
    else{
      content = <div style={loadingStyle}>
        加载中...
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
