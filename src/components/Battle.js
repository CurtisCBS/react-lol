import React, { Component } from 'react';
class Battle extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    let data = this.props.data,
        boxStyle = {
          borderBottom:"1px solid #bdb088"
        };
    return (
      <div style={boxStyle}>
                    角色:{data.champion.title}-{data.champion.display_name}
                     <br/>
                    时间:{data.created}
                     <br/>
                    type:{data.game_type.name_cn}
                     <br/>
                    输赢:{data.battle_result ? '胜利' : '失败'}
                     <br/>
                    {data.flag_mvp_carry ? 'MVP' :''}
                     <br/>

      </div>
    )
  }
}

export default Battle;
