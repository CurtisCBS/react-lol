import React, { Component } from 'react';
class Battle extends Component {
  constructor(props) {
    super(props);
    this.addDateFormat();
  }

  render(){
    let data = this.props.data,
        boxStyle = {
          borderBottom:"1px solid #bdb088",
          height:"100px",
          width:"100%",
          overflow:"hidden",
          paddingTop:"5px"
        },
        heroStyle={
          display:"block",
          width:"20%",
          float:"left",
          textAlign:"center"
        },
        imgStyle={
          width:"80%"
        },
        infoStyle={
          display:"block",
          width:"80%",
          float:"left"
        },
        mvpStyle={
          color:"#ffffff",
          display:"inline-block",
          backgroundColor:"#bdb088",
          fontSize:"14px",
          padding:"0 5px",
          borderRadius:"5px"
        },
        mvp;
        if(data.flag_mvp_carry){
          mvp = <span style={mvpStyle}>MVP</span>
        }
        data.created = this.formatTimeStr(data.created);
    return (
      <div style={boxStyle} className="clearfix">
        <div style={heroStyle}>
          <img style={imgStyle} src={require("../heroes/"+data.champion.name+".png")} />
        </div>
        <div style={infoStyle}>
          {data.champion.display_name}-{data.champion.title} {mvp}
           <br/>
          {data.created}
           <br/>
          {data.game_type.name_cn}
           <br/>
          {data.battle_result ? '胜利' : '失败'}
           <br/>
        </div>
      </div>
    )
  }

  formatTimeStr(str){
      return (new Date(str)).Format("yyyy-MM-dd hh:mm:ss");
  }

  addDateFormat(){
    Date.prototype.Format = function(fmt)
    { //author: meizz
      var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
      };
      if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
      for(var k in o)
        if(new RegExp("("+ k +")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
      return fmt;
    }
  }
}

export default Battle;
