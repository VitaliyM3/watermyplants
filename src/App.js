import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignupPage from './components/SignupPage';
import Profile from './components/Profile';
import  PrivateRoute  from './components/PrivateRoute';
import Navigation from './components/Navigation';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navigation/>
        </header>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignupPage} />
        
        <PrivateRoute exact path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
