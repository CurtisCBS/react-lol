'use strict';
import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';
import { bounce } from 'react-animations';
import Page from './Page';

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
    </Router>
), document.getElementById('app'));
