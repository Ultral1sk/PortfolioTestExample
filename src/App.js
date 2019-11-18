import React, { Component } from "react";
import PageWrapper from './components/PageWrapper';
import Home from './components/pages/Home';
import "./App.css"

class App extends Component {
  render() {
    return (
      <>
        <PageWrapper>
            <Home />
          
        </PageWrapper>
      </>
    );
  }
}

export default App;
