import React, { Component } from 'react';
// import MapBackground from './MapBackground';
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
      position:"relative"
      // ,
      // backgroundImage:"url('http://lol.qq.com/act/export/artbook/content/summoners_rift/00_intro/sr_01.jpg')"
      // backgroundImage: 'url('+require("../images/bg.jpg")+')'
    },
    listStyle={
      width:"100%",
      // height:window.screen.height,
      overflow:"hidden"
    },
    inputBoxStyle = {
      width:"100%"
    },
    wrapStyle = {
      padding:"40px 20px"
    },
    logo = {
      width:"80%",
      height:"150px",
      backgroundRepeat:"no-repeat",
      backgroundPosition:"center",
      backgroundSize:"100%",
      maxWidth:"200px",
      margin:"35px auto 0",
      backgroundImage: 'url('+require("../images/logo.png")+')'
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
      marginLeft:"-23px",
      backgroundColor:"#1c2229",
      height:"40px",
      lineHeight:"40px",
      textAlign:"center",
      cursor:"pointer",
      border:"1.5px solid #bdb088"
    },
    svgBoxStyle = {
        width:"70%",
        position:"absolute",
        bottom:"15%",
        left:"15%",
        margin:"0 auto"
    },
    carrierStyle = {
      width:"16%",
      margin:"0 2%",
      display:"block",
      float:"left"
    },
    content;
    if(this.state.showList){
      content = <div style={listStyle}>
          <List data={this.state.list}></List>
        </div>
    }
    else{
      content = <div style={boxStyle} className="bg-container">
        <div style={inputBoxStyle}>
          <div style={logo}></div>
          <div style={wrapStyle}>
            <input value={this.state.inputValue} onChange={this.handleChange.bind(this)}  onKeyUp={this.handlerKeyUp.bind(this)} style={inputStyle} type="text" placeholder="请输入游戏角色昵称"/>
            <div style={buttonStyle} onClick={this.handlerClick.bind(this)} >搜索</div>
          </div>
          <div style={svgBoxStyle}>
            <div style={carrierStyle} >
              <embed src={require("../images/fighter.svg")} type="image/svg+xml" />
            </div>
            <div style={carrierStyle} >
              <embed src={require("../images/tank.svg")}  type="image/svg+xml" />
            </div>
            <div style={carrierStyle} >
              <embed src={require("../images/assassin.svg")}  type="image/svg+xml" />
            </div>
            <div style={carrierStyle} >
              <embed src={require("../images/marksman.svg")} type="image/svg+xml" />
            </div>
            <div style={carrierStyle} >
              <embed src={require("../images/support.svg")} type="image/svg+xml" />
            </div>
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
        console.log(res.player_list);
        res.player_list.map(player=>{
          localStorage.setItem(player.user_id+"_"+player.game_zone.area_id, player.url_img);
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
