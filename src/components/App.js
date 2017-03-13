'use strict';
import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';
import { bounce } from 'react-animations';
import Page from './Page';
import DetailPage from './DetailPage';

let App = React.createClass({
    render:function(){
      return (
          <Page></Page>
      )
    }
})

//最终渲染
ReactDom.render((
    <Router history={hashHistory}>
      <Route path='/' component={App}></Route>
      <Route path='/detail/:zoneId/:userId' component={DetailPage}></Route>
    </Router>
), document.getElementById('app'));
