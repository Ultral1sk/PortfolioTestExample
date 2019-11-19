import React, { Component } from "react";
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact'
import { Route, Link } from 'react-router-dom';
import "./App.css"

class App extends Component {
  render() {
    return (
      <>
     
          <PageWrapper>
              <Route exact path="/" component={Home}/>
            
              <Route exact path="/about" component={About} />

              <Route exact path="/contact" component={Contact} />
          </PageWrapper>
        
      </>
    );
  }
}

export default App;
