import React, { Component } from 'react';
import './static/js/main.js';
import './static/css/reset.min.css';
import './static/css/style.css';
import Index from './components/index';
import Classify from './components/classify';
import Car from './components/car';
import Mine from './components/mine';
import List from './components/list';
import Detail from './components/detail';
import Footer from './components/footer';
import Header from './components/header';
import routes from './routers/routers';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
     <Index />
     {/* <Classify /> */}
     {/* <Car /> */}
     {/* <Mine /> */}
     {/* <List /> */}
     {/* <Detail /> */}
     <Footer />
    </div>
    );
  }
}

export default App;
