import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

import {Nav} from './components/Nav'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Activities} from './pages/Activities'
import {Pricing} from './pages/Pricing'
import {Contact} from './pages/Contact'
import {Footer} from './components/Footer'
import {PageNotFound } from './pages/PageNotFound'

function App() {
  return (
      <Router>

        <div>
            <Nav/>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/activities" component={Activities} />
            <Route path="/contact" component={Contact} />
            <Route component={PageNotFound} />
            </Switch>

        </div>
        <Footer/>
      </Router>
  );
}

export default App;
