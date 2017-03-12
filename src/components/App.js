'use strict';
import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

let IndexPage = React.createClass({
    render:function(){
      let inputStyle = {
        fontSize:"20px",
        lineHeight:"normal",
        color:"#000",
        width:"100%",
        display:"block",
        padding:"10px",
        outline:"none",
        border:"none",
        borderBottom:"1px solid #000"
      },
      boxStyle={
        width:"100%",
        overflow:"hidden"
      };
      return (
        <div style={boxStyle}>
          <input onKeyUp={this.handlerKeyUp} style={inputStyle} type="text" placeholder="请输入游戏角色昵称"/>
        </div>
      )
    },

    handlerKeyUp(event){
      if(event.keyCode === 13){ //enter binding
            let value = event.target.value;
            if(!value) return false;
            alert('enter');
            fetchHelper({
              url:"/search/"+value,
              success:res=>{
                console.log(res);
              }
            })
        }
    }
})

var Detail = React.createClass({
    render: function() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div><a href="#/">返回首页</a></div>
                <div>这是详情页</div>
            </div>
        );
    }
});

function fetchHelper(opt){
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

//最终渲染
ReactDom.render((
    <Router history={hashHistory}>
        <Route path='/' component={IndexPage}></Route>
        <Route path='/detail' component={Detail} />
    </Router>
), document.getElementById('app'));
