import React, { Component } from 'react';
class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData : null
    };
    this.getUserData();
  }

  render(){
    return (
      <div>
        render page
      </div>
    )
  }

  getUserData(){
    let zoneId = this.props.params.zoneId,
        userId = this.props.params.userId;
    this.fetchHelper({
      url:"/user/detail/"+zoneId+"/"+userId,
      success:res =>{
        console.log(res);
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

export default DetailPage;
