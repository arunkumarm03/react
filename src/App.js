/**
* Main App
*/


import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux'
import { PrivateRoute } from './_components';
import { LoginPage } from './LoginPage';
import { history, Role } from './_helpers';



// css
import './lib/reactifyCss';


// app component
import App from './container/App';

import { configureStore } from './store';

class MainApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      isAdmin: false
    };
  }

 
  render() {
    return (
      <Provider store={configureStore()}>
        <Router history={history}>
          <div>
            <div className="jumbotron">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 offset-md-3">
                    <PrivateRoute exact path="/" component={App} />
                    <Route path="/login" component={LoginPage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export { MainApp }; 