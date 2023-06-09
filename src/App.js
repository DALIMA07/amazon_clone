import React from 'react'
import "./App.css";
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login';

export default function App() {
  return (
    <Router>
    <div className='app'>
          
        <Switch>
            <Router path="/login">
                <Login/>
            </Router>
            <Router path="/checkout">
                <Header/>
                <Checkout/>
            </Router>
            <Route path="/">
              <Header/>
              <Home/>
            </Route>
        </Switch>
    </div>
    </Router>
  )
}
