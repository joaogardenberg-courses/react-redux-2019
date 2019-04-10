import React from 'react';

import {
  Router,
  Route,
  Switch
} from 'react-router-dom';

import history      from '../history';
import Header       from './Header';
import StreamIndex  from './streams/StreamIndex';
import StreamShow   from './streams/StreamShow';
import StreamNew    from './streams/StreamNew';
import StreamEdit   from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';

const App = () => {
  return (
    <div className="ui container">
      <Router history={ history }>
        <div>
          <Header />
          <Switch>
            <Route exact path="/"                   component={ StreamIndex } />
            <Route exact path="/streams/new"        component={ StreamNew } />
            <Route exact path="/streams/:id"        component={ StreamShow } />
            <Route exact path="/streams/:id/edit"   component={ StreamEdit } />
            <Route exact path="/streams/:id/delete" component={ StreamDelete } />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;