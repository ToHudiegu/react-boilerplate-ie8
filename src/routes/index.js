// We only need to import the modules necessary for initial render
import React from 'react';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from '../components/App';
import Inbox from '../components/Inbox';
import Message from '../components/Message';
import Count from '../components/Count';

const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Inbox} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
      <Route path="count" component={Count}></Route>
    </Route>
    <Redirect from="*" to="/" />
  </Router>
)

export default Routes;