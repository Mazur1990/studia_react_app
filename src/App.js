import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

import {Nav} from './components/Nav'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Footer} from './pages/Footer'
import {Contact} from './pages/Contact'
import {PageNotFound } from './pages/PageNotFound'

function App() {
  return (
      <Router>

        <div>
            <Nav/>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={PageNotFound} />
            </Switch>

        </div>
        <Footer/>
      </Router>
  );
}

export default App;
