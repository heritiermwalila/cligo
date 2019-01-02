import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Layout from './components/layouts/Layout';


class App extends Component {

  componentDidMount(){
    document.title="Home | Cligo"
  }
  render() {
    return (
      <BrowserRouter>
        <Layout></Layout>
      </BrowserRouter>
      
    );
  }
}

export default App;
