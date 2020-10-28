import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Default from './components/Default';
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <React.Fragment>

        <Navbar />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
    

    </React.Fragment>
  );
}

export default App;
