import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';

// COMPONENTS
import Home from './components/home'
import Artist from './components/artist'

const App = ()=>{
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component="Home"/>
      </div>
    </BrowserRouter>
  )
}
