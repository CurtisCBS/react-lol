import React, { Component } from 'react';
class ReactComponent extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    let data = this.props.data,
        imgStyle = {
          width:"80%",
          minHeight:"1px",
          maxWidth:"100px",
          display:"block",
          margin:"0 auto"
        },
        boxStyle={
          width:"100%",
          padding:"10px 0",
          borderBottom:"1px solid #bdb088"
        },
        avatarBoxStyle={
          width:"30%",
          float:"left"
        },
        infoStyle = {
          width:"70%",
          float:"left"
        },
        nameStyle={
          fontSize:"12px",
          lineHeight:"12px",
          width:"100%",
          overflow:"hidden"
        },
        evaluateStyle={
          fontSize:"13px",
          lineHeight:"13px"
        },
        weaponStyle={
          float:"left",
          fontSize:"10px",
          width:"13%",
          marginTop:"5px",
          marginRight: "3px"
        },
        shipinStyle = {
          float:"right",
          fontSize:"10px",
          width:"8%",
          marginTop:"5px",
          marginRight: "4px"
        },
        weaponImgStyle = {
          width:"100%",
          border:"1px solid #bdb088"
        },
        weapon = [];
        let shipin = [3361,3362,3363,3364,3341,3340]
        data.items.map((item,index)=>{
          let url = "http://ossweb-img.qq.com/images/lol/img/item/"+item.id+".png";
          if(shipin.includes(item.id)){
            weapon.push(
              <div style={shipinStyle}>
                <img alt={item.name} style={weaponImgStyle} src={url}  key={index} />
              </div>
            );
          }
          else{
            weapon.push(
              <div style={weaponStyle}>
                <img alt={item.name} style={weaponImgStyle} src={url}  key={index} />
              </div>
            );
          }
        });
        //
    return (
      <div style={boxStyle} className="clearfix">
        <div style={avatarBoxStyle}>
          <img style={imgStyle} src={require("../heroes/"+data.champion.name+".png")} />
        </div>
        <div style={infoStyle}>
          <div style={nameStyle}>
            {data.player.pn} - {data.champion.display_name}
          </div>
          <div className="clearfix">
            {weapon}
          </div>
          <div style={evaluateStyle}>
            战绩:{data.total_killed}/{data.total_death}/{data.total_assist} &nbsp; 评分:{data.evaluate_in_game}
          </div>
        </div>
      </div>
    )
  }
}

export default ReactComponent;
