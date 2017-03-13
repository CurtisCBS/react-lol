import React, { Component } from 'react';
import MapBackground from './MapBackground';
import List from "./SummonerList";
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList:false,
      list:null
    };
  }

  render(){
    let boxStyle = {
      width:"100%",
      overflow:"hidden"
    },
    inputStyle = {
      fontSize:"22px",
      lineHeight:"normal",
      color:"inherit",
      width:"80%",
      display:"block",
      position:"fixed",
      left:"10%",
      top:"30%",
      padding:"10px",
      marginLeft:"-10px",
      outline:"none",
      border:"none"
    },content;
    if(this.state.showList){
      content = <div>
          <List data={this.state.list}></List>
        </div>
    }
    else{
      content = <div>
        <input onKeyUp={this.handlerKeyUp.bind(this)} style={inputStyle} type="text" placeholder="请输入游戏角色昵称"/>
        <MapBackground></MapBackground>
      </div>
    }
    return (
        <div style={boxStyle}>
          {content}
        </div>
    );
  }

  handlerKeyUp(event){
    if(event.keyCode === 13){ //enter binding
          let value = event.target.value;
          if(!value) return false;
          this.postRequest(value);
      }
  }

  postRequest(name){
    this.fetchHelper({
      url:"/search/"+name,
      success:res=>{
        this.setState({
          showList : true,
          list : res.player_list
        })
      }
    })
  }

  fetchHelper(opt){
    let httpProxy = "http://0.0.0.0:5000";
    if(fetch){
      fetch(httpProxy+opt.url).then(res=>{
        res.json().then(jsonData =>{
          opt.success && opt.success(jsonData);
        })
      })
    }
    else{
      //兼容处理
    }
  }
}
export default Page;
