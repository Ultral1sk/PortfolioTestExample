import React, { Component } from "react";
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import { Route, Link } from 'react-router-dom';
import "./App.css"

class App extends Component {
  render() {
    return (
      <>
     
          <PageWrapper>
          
              <Route exact path="/home" component={Home}/>
              <Route exact path="/about" component={About} />

          </PageWrapper>
        
      </>
    );
  }
}

export default App;
