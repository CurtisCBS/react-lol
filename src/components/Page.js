import React, { Component } from 'react';
// import MapBackground from './MapBackground';
import axios from 'axios';
import List from "./SummonerList";
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList:false,
      list:null,
      inputValue:""
    };
  }

  render(){
    let boxStyle = {
      width:"100%",
      height:window.screen.height,
      overflow:"hidden",
      backgroundImage: 'url('+require("../images/bg.jpg")+')'
    },
    listStyle={
      width:"100%",
      // height:window.screen.height,
      overflow:"hidden"
    },
    inputBoxStyle = {
      width:"100%",
      position:"relative",
      marginTop:"200px"
    },
    wrapStyle = {
      padding:"0 20px"
    },
    inputStyle = {
      fontSize:"18px",
      lineHeight:"normal",
      color:"inherit",
      width:"80%",
      margin:"0 auto",
      display:"block",
      padding:"10px",
      outline:"none",
      border:"none",
      float:"left"
    },
    buttonStyle = {
      float:"left",
      width:"20%",
      marginLeft:"-20px",
      backgroundColor:"#1c2229",
      height:"42px",
      lineHeight:"42px",
      textAlign:"center",
      cursor:"pointer"
    },content;
    if(this.state.showList){
      content = <div style={listStyle}>
          <List data={this.state.list}></List>
        </div>
    }
    else{
      content = <div style={boxStyle} className="bg-container">
        <div style={inputBoxStyle}>
          <div style={wrapStyle}>
            <input value={this.state.inputValue} onChange={this.handleChange.bind(this)}  onKeyUp={this.handlerKeyUp.bind(this)} style={inputStyle} type="text" placeholder="请输入游戏角色昵称"/>
            <div style={buttonStyle} onClick={this.handlerClick.bind(this)} >搜索</div>
          </div>
        </div>
      </div>

    }
    return content;
  }

  handlerKeyUp(event){
    if(event.keyCode === 13){ //enter binding
          let value = event.target.value;
          if(!value) return false;
          this.postRequest(value);
      }
  }

  handlerClick(event){
    this.postRequest(this.state.inputValue);
  }

  handleChange(event){
    this.setState({inputValue: event.target.value});
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
    axios.get(httpProxy.proxy+opt.url)
          .then(res => {
            opt.success && opt.success(res.data);
          });
  }
}
export default Page;
