import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

import Startup from './routes/Startup';
import Medium from './routes/Medium';
import Large from './routes/Large';
import NoMatch from './routes/NoMatch';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Startup}/>
            <Route path="/medium" component={Medium}/>
            <Route path="/large" component={Large}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;