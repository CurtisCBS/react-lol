import React, { Component } from 'react';
import { Link } from 'react-router'

class Summoner extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    let summoner = this.props.data,
        itemStyle = {
          borderBottom:"1px solid #bdb088",
          display:"block",
          width:"100%",
          fontSize:"16px",
          listStyle:"none"
        },
        wrapStyle = {
          padding:"10px 0",
          width: "100%"
        },
        avatarStyle = {
          float:"left",
          width:"30%",
          marginTop:"10px",
          textAlign:"center"
        },
        infoStyle = {
          float:"left",
          marginTop:"10px",
          width:"60%"
        },
        moreStyle = {
          width:"10%",
          float:"left"
        },
        nameStyle = {
          fontWeight:'500'
        },
        tierStyle = {
          height:"16px"
        },
        arrowStyle={
          marginTop: "100%"
        },
        route = {
          pathname:"/detail/"+summoner.game_zone.pinyin+"/"+summoner.user_id
        };
        let RANK_DICT = {
          0:"无段位",
          1:"青铜",
          2:"白银",
          3:"黄金",
          4:"铂金",
          5:"钻石"
        }
        let tier = RANK_DICT[0];
        if(summoner.tier){
          tier = RANK_DICT[summoner.tier]+''+summoner.rank;
        }
    return (
      <Link to={route}>
        <li style={itemStyle}>
          <div style={wrapStyle} className="clearfix">
            <div style={avatarStyle}>
              <img src={"http://static.lolbox.duowan.com/images/profile_icons/"+summoner.icon+".jpg"}/>
            </div>
            <div style={infoStyle}>
              <div style={nameStyle}>
                {summoner.game_zone.alias} : {summoner.pn} ({summoner.game_zone.server_name}) <br/>
              </div>
              <div>
                等级:{summoner.level}<br/>
                隐藏分:{summoner.box_score}<br/>
              段位:{tier}
              </div>
            </div>
            <div style={moreStyle}>
              <embed src={require("../images/arrow_right.svg")} style={arrowStyle} width="20px" type="image/svg+xml" />
            </div>
          </div>
        </li>
      </Link>
    )
  }
}

export default Summoner;
