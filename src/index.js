import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import t1 from './t1';
import t2 from './t2';
import t3 from './t3';
import t4 from './t4';
import t5 from './t5';



//css files
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
 <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={t1} />
      <Route path="t1" component={t1} />
      <Route path="t2" component={t2} />
      <Route path="t3" component={t3} />
      <Route path="t5" component={t4} />
      <Route path="t5" component={t5} />
    </Route>
  </Router>,
  document.getElementById('root')
);